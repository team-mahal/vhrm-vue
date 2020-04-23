<template>
<div>
    <div v-if="ismobile=='m'" id="sidebar" class="h-screen w-10 menu bg-white text-white px-0 lex nunito static fixed shadow">
        <ul class="list-reset w-full">
            <li class="relative">
               <div class="absolute z-20 posationm cursor-pointer" @click="taggleview()">
                    <svg aria-hidden="true" data-prefix="fal" data-icon="times" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-8 w-8 pl-2 text-blue-700"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"/></svg>
               </div>
            </li>
            <li class="text-center text-blue-900 py-1">
                <h2 class="text-sm py-4 md:py-0 md:text-4xl invisible"><router-link to="/">HUB</router-link></h2>
            </li>
            <li class="my-1 md:my-0">
                <a href="#" class="block justify-center hover:justify-start md:md:justify-start py-2 align-middle text-gray-600 no-underline hover:text-indigo-400 flex items-center">
                    <svg aria-hidden="true" data-prefix="fad" data-icon="house-damage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-4 h-4">
                        <g class="fa-group">
                            <path fill="currentColor" d="M512 311.08V496a16 16 0 01-16 16H319.82l-39.92-55.26 104.11-64L236 256l60.11 119.2L192 439.18 229.24 512H80a16 16 0 01-16-16V311c1.78-1.21 3.85-1.89 5.47-3.35L288 115l218.74 192.9c1.55 1.36 3.57 2.02 5.26 3.18z" class="fa-secondary"/>
                            <path fill="currentColor" d="M236 256l60.11 119.2L192 439.18 229.24 512h90.58l-39.92-55.26 104.11-64zm334.7-19.74L512 184.43V48a16 16 0 00-16-16h-64a16 16 0 00-16 16v51.67L314.76 10.29a39.85 39.85 0 00-53.45 0l-256 226a16 16 0 00-1.21 22.59l21.41 23.79a16 16 0 0022.59 1.21L277.43 81.61a16 16 0 0121.17 0l229.32 202.27a16 16 0 0022.6-1.2l21.4-23.82a16 16 0 00-1.22-22.6z" class="w-1 h-1"/>
                        </g>
                    </svg>
                </a>
            </li>
              <li class="my-1 md:my-0">
                <a href="#" class="block justify-center hover:justify-start md:md:justify-start py-2 align-middle text-gray-600 no-underline hover:text-indigo-400 flex items-center">
                    <svg aria-hidden="true" data-prefix="fad" data-icon="house-damage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-4 h-4">
                        <g class="fa-group">
                            <path fill="currentColor" d="M512 311.08V496a16 16 0 01-16 16H319.82l-39.92-55.26 104.11-64L236 256l60.11 119.2L192 439.18 229.24 512H80a16 16 0 01-16-16V311c1.78-1.21 3.85-1.89 5.47-3.35L288 115l218.74 192.9c1.55 1.36 3.57 2.02 5.26 3.18z" class="fa-secondary"/>
                            <path fill="currentColor" d="M236 256l60.11 119.2L192 439.18 229.24 512h90.58l-39.92-55.26 104.11-64zm334.7-19.74L512 184.43V48a16 16 0 00-16-16h-64a16 16 0 00-16 16v51.67L314.76 10.29a39.85 39.85 0 00-53.45 0l-256 226a16 16 0 00-1.21 22.59l21.41 23.79a16 16 0 0022.59 1.21L277.43 81.61a16 16 0 0121.17 0l229.32 202.27a16 16 0 0022.6-1.2l21.4-23.82a16 16 0 00-1.22-22.6z" class="w-1 h-1"/>
                        </g>
                    </svg>
                </a>
            </li>
        </ul>
    </div>
    
    <div v-else id="sidebar" class="h-screen w-64 menu bg-white text-white px-0 flex nunito static fixed shadow">
        <ul class="list-reset w-full">
            <li class="my-2 md:my-0">
                <router-link to="/district" class="block py-2 justify-center md:md:justify-start pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm hidden sm:hidden md:block lg:block xl:block active">Districts</span>
                </router-link>
            </li>
            <li class="my-2 md:my-0">
                <router-link to="/upazila" class="block py-2 justify-center md:md:justify-start pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm hidden sm:hidden md:block lg:block xl:block active">Upazilas</span>
                </router-link>
            </li>
            <li class="my-2 md:my-0">
                <router-link to="/client" class="block py-2 justify-center md:md:justify-start pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm hidden sm:hidden md:block lg:block xl:block active">Clients</span>
                </router-link>
            </li>
            <li class="my-2 md:my-0">
                <router-link to="/project" class="block py-2 justify-center md:md:justify-start pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm hidden sm:hidden md:block lg:block xl:block">Projects</span>
                </router-link>
            </li>
            <li class="my-2 md:my-0">
                <router-link to="/department" class="block py-2 justify-center md:md:justify-start pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm hidden sm:hidden md:block lg:block xl:block">Departments</span>
                </router-link>
            </li>
            <li class="my-2 md:my-0">
                <router-link to="designation" class="block py-2 justify-center md:md:justify-start pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm hidden sm:hidden md:block lg:block xl:block">Designations</span>
                </router-link>
            </li>
            <li class="my-2 md:my-0">
                <router-link to="status" class="block py-2 justify-center md:md:justify-start pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm hidden sm:hidden md:block lg:block xl:block">Statuses</span>
                </router-link>
            </li>
            <li class="my-2 md:my-0">
                <router-link to="issue-type" class="block py-2 justify-center md:md:justify-start pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm hidden sm:hidden md:block lg:block xl:block">Issue Types</span>
                </router-link>
            </li>
            <li class="my-2 md:my-0">
                <router-link to="issue" class="block py-2 justify-center md:md:justify-start pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm hidden sm:hidden md:block lg:block xl:block">Issue</span>
                </router-link>
            </li>
            <li class="my-2 md:my-0">
                <router-link to="issues" class="block py-2 justify-center md:md:justify-start pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm hidden sm:hidden md:block lg:block xl:block">Issues</span>
                </router-link>
            </li>
            <li class="my-2 md:my-0">
                <router-link to="taskcurd" class="block py-2 justify-center md:md:justify-start pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm hidden sm:hidden md:block lg:block xl:block">Task</span>
                </router-link>
            </li>
            <li class="my-2 md:my-0">
                <router-link to="task" class="block py-2 justify-center md:md:justify-start pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm hidden sm:hidden md:block lg:block xl:block">Tasks</span>
                </router-link>
            </li>
            <li class="my-2 md:my-0">
                <router-link to="holidays" class="block py-2 justify-center md:md:justify-start pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm hidden sm:hidden md:block lg:block xl:block">Holidays</span>
                </router-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default{
        data: () => ({
            children: false,
            navitem:[
                {
                    name:'Setup',
                    link:'',
                    icon:'<svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M0 0h54.857v54.857H0V0zm0 73.143h54.857V128H0V73.143zm73.143 0H128V128H73.143V73.143zm27.428-18.286C115.72 54.857 128 42.577 128 27.43 128 12.28 115.72 0 100.571 0 85.423 0 73.143 12.28 73.143 27.429c0 15.148 12.28 27.428 27.428 27.428z"/></svg>',
                    collapsed:false,
                    child:[
                        {
                            name:"District",
                            link:'/district',
                        },  
                        {
                            name:"Upazilas",
                            link:'/upazilas'
                        },
                        {
                            name:"Clients",
                            link:'/clients'
                        },
                        {
                            name:"Projects",
                            link:'/projects'
                        },
                        {
                            name:"Departments",
                            link:'/departments'
                        },
                        {
                            name:"Designation",
                            link:'/designation'
                        },
                        {
                            name:"Statuses",
                            link:'/statuses'
                        },
                        {
                            name:"Issue Type",
                            link:'/issue-type'
                        },
                        {
                            name:"Issue",
                            link:'/issue'
                        },
                        {
                            name:"Issues",
                            link:'/issues'
                        },
                        {
                            name:"taskcurd",
                            link:'/Task'
                        },
                        {
                            name:"task",
                            link:'/tasks'
                        },
                        {
                            name:"task",
                            link:'/tasks'
                        },
                        {
                            name:"Holidays",
                            link:'/holidays'
                        }
                    ]
                },
                {
                    name:'UI Elements',
                    link:'',
                    icon:'<svg aria-hidden="true" data-prefix="fas" data-icon="laptop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-4 h-4 fill-current"><path fill="currentColor" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>',
                    collapsed:false,
                    child:[
                        {
                            name:"Buttons",
                            link:'/uielements/buttons',
                        },
                        {
                            name:"Progress",
                            link:'/uielements/progress'
                        },
                        {
                            name:"Accordions",
                            link:'/uielements/accordions'
                        },
                        {
                            name:"Notifications",
                            link:'/uielements/notifications'
                        },
                        {
                            name:"Avatar",
                            link:'/uielements/avatar'
                        },
                        {
                            name:"Test",
                            link:'/asas/sdfsdf'
                        }
                    ]
                },
            ]
        }),
        computed: {
            ...mapGetters({
                ismobile: 'sidebar/ismobile'
            }),
        },
        methods:{
            toggle(index){
                this.navitem[index].collapsed=!this.navitem[index].collapsed;
            },
            toggles(index,index1){
                this.navitem[index].child[index1].collapsed=!this.navitem[index].child[index1].collapsed;
            },
            taggleview(){
                this.$store.dispatch('sidebar/setview')
            }
        }
    };
</script>

<style scoped>
    .router-link-exact-active{
        background: #f1f1f1;
        border-right: 2px solid red;
    }
    .posation{
        right: 1%;
        top: 18px;
    }
    .posationm{
        right: 18%;
        top: 21px; 
    }
</style>