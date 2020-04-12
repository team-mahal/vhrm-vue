<template>
<div>
    <div class="w-full flex flex-wrap shadow py-2">
        <nav id="header1" class="bg-gray-100 w-auto flex-1 border-b-1 border-gray-300 order-1 lg:order-2">
            <div class="flex h-full justify-between items-center">
            <!--Search-->
            <div class="relative w-50 px-6">
                <div class="absolute h-10 mt-1 left-0 top-0 flex items-center pl-10">
                    <svg class="h-4 w-4 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                    </svg>
                </div>
                <input id="search-toggle" type="search" placeholder="search" class="block w-full bg-gray-200 focus:outline-none focus:bg-white focus:shadow-md text-gray-700 font-bold rounded-full pl-12 pr-4 py-3" onkeyup="updateSearchResults(this.value);">
            </div>
            <!-- / Search-->
            
            <div v-if="user">
                <div v-if="user.attendance && user.attendance.length==0">
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded" @click="fatchuser">Check in</button>
                </div>
                <div v-else>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" @click="fatchuser">Check Out</button>
                </div>
            </div>

            <t-modal ref="modal" class="curdmodel" v-if="user">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="user.name" type="text" disabled>
                    </div>

                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">
                            Today's Date
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="date" type="text" disabled>
                    </div>

                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">
                            Remarks
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="remarks" type="text">
                    </div>
                    
                    <div class="flex" v-if="user.attendance && user.attendance.length>0">
                        <p class="p-2">Today's Check In</p>
                        <h2 class="p-2">{{ user.attendance[0].intime }} ({{ user.attendance[0].status }})</h2>
                    </div>

                     <div class="flex" v-if="user.attendance[0] && user.attendance[0].outtime">
                        <p class="p-2">Today's Check Out</p>
                        <h2 class="p-2">{{ user.attendance[0].outtime }}</h2>
                    </div>


                    <Clock/>

                    <div v-if="user.attendance && user.attendance.length==0">
                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded" @click="checkin">Check in</button>
                    </div>
                    
                    <div v-else-if="!user.attendance[0].outtime">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" @click="checkout">Check Out</button>
                    </div>

            </t-modal>

            <!--Menu-->
            <div class="flex relative inline-block pr-6">

                <div class="relative text-sm">
                    <div class="flex">
                    	<template v-if="token"> 
							<button id="userButton" class="flex items-center focus:outline-none mr-3" @click="dropdown()">
                                <avatar :username="user.name" v-if="user" backgroundColor="#7F9CF5"></avatar> 
                                <span v-if="user" class="hidden md:inline-block ml-1">Hi, {{ user.name }}</span>
                            </button>
						</template>
						<template v-else>
							<router-link class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" :to="{ name: 'login' }">
								{{ $t('login') }}
							</router-link>
							<router-link class="ml-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" :to="{ name: 'register' }">
								{{ $t('register') }}
							</router-link>
						</template>
                    </div>
                    <div id="userMenu" v-bind:class="activeClass ? '' : 'hidden'"  class="bg-white nunito rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30">
                        <ul class="list-reset">
                            <li @click="dropdown()">
                                <router-link to="/settings" class="px-4 py-2 block text-gray-900 hover:bg-indigo-400 hover:text-white no-underline hover:no-underline">
                                My account
                            </router-link>
                        </li>
                        <li>
                            <a href="#" class="px-4 py-2 block text-gray-900 hover:bg-indigo-400 hover:text-white no-underline hover:no-underline">
                                Notifications
                            </a>
                        </li>
                        <li>
                            <hr class="border-t mx-2 border-gray-400">
                        </li>
                        <li>
                            <a href="#" class="px-4 py-2 block text-gray-900 hover:bg-indigo-400 hover:text-white no-underline hover:no-underline" @click="logout">
                                Logout
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>

            </div>

            <!-- / Menu -->

            </div>

        </nav>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'
import Clock from './Clock'
import axios from 'axios';
import Swal from 'sweetalert2'

export default {
	components: {
		LocaleDropdown,
        Clock
	},

	data: () => ({
		appName: window.config.appName,
        activeClass: false,
        remarks:'',
        date:new Date().toLocaleDateString("en-US")
	}),

	computed: mapGetters({
        user: 'auth/user',
		token: 'auth/token',
	}),

	methods: {
        async checkin(){
            let { data } = await axios.post('/api/checkin',{ 
                                                user_id:this.user.id,
                                                date:this.date,
                                                remarks:this.remarks,
                                                intime:new Date(Date.now()).toLocaleTimeString("en-US")
                                            })
            Swal.fire({
              type: 'success',
              title: "Check in SuccessFully",
              reverseButtons: true,
              confirmButtonText:'ok',
              cancelButtonText: 'cancel'
            })

            await this.$store.dispatch('auth/fetchUser')

        },
        async checkout(){
            let { data } = await axios.post('/api/checkout/'+this.user.attendance[0].id,{ 
                                                outtime:new Date(Date.now()).toLocaleTimeString("en-US")
                                            })
            Swal.fire({
              type: 'success',
              title: "Check Out SuccessFully",
              reverseButtons: true,
              confirmButtonText:'ok',
              cancelButtonText: 'cancel'
            })

            await this.$store.dispatch('auth/fetchUser')
        },
        fatchuser(){
            this.$refs.modal.show()
        },
        dropdown(){
            this.activeClass=!this.activeClass
        },
		async logout () {
            this.activeClass=!this.activeClass
			await this.$store.dispatch('auth/logout')
			this.$router.push({ name: 'login' })
		}
	}
};
</script>

<style scoped>
.profile-photo {
	width: 2rem;
	height: 2rem;
	margin: -.375rem 0;
}
</style>
