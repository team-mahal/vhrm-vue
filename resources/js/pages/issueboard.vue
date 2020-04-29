<template>
<div>
	<vue-scroll>
		<div class="flex px-4 pb-8 items-start" style="width: auto;overflow: hidden;"> 
			<div class="rounded shadow p-2 flex-no-shrink w-auto p-2 mr-3"  style="min-width: 293px!important;">
				<div class="flex justify-between py-1">
	                <h3 class="text-sm">BackLog</h3>
	                <svg class="h-4 fill-current text-grey-dark cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"></path></svg>
	            </div>
				<vue-scroll>
					<div class="fixed-height">
						<draggable class="list-group" :list="backlog" group="backlog" @add="add(backlog.status)" @change="log">
							<div
								class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter"
								v-for="(issue, index) in backlog"
								:key="issue.id"
								@click="fetchstatus(issue.id)"
							>
								{{ issue.title }}
							</div>
						</draggable>
					</div>
				</vue-scroll>
			</div>
			<div class="rounded shadow p-2 flex-no-shrink w-auto p-2 mr-3"  style="min-width: 293px!important;">
				<div class="flex justify-between py-1">
	                <h3 class="text-sm">BackLog</h3>
	                <svg class="h-4 fill-current text-grey-dark cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"></path></svg>
	            </div>
				<vue-scroll>
					<div class="fixed-height">
						<draggable class="list-group" :list="backlog" group="backlog" @add="add(backlog.status)" @change="log">
							<div
								class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter"
								v-for="(issue, index) in backlog"
								:key="issue.id"
								@click="fetchstatus(issue.id)"
							>
								{{ issue.title }}
							</div>
						</draggable>
					</div>
				</vue-scroll>
			</div>
			<div class="rounded shadow p-2 flex-no-shrink w-auto p-2 mr-3"  style="min-width: 293px!important;">
				<div class="flex justify-between py-1">
	                <h3 class="text-sm">BackLog</h3>
	                <svg class="h-4 fill-current text-grey-dark cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"></path></svg>
	            </div>
				<vue-scroll>
					<div class="fixed-height">
						<draggable class="list-group" :list="backlog" group="backlog" @add="add(backlog.status)" @change="log">
							<div
								class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter"
								v-for="(issue, index) in backlog"
								:key="issue.id"
								@click="fetchstatus(issue.id)"
							>
								{{ issue.title }}
							</div>
						</draggable>
					</div>
				</vue-scroll>
			</div>
		</div>
	</vue-scroll>
</div>	
</template>

<script>
	import axios from 'axios'
	import draggable from "vuedraggable";
	import { mapGetters } from 'vuex'
	export default {
		data:()=>({
			backlog:[]
		}),
		components: {
			draggable
		},
		methods:{
			abc(element){
				console.log(element);
			},
			add: function(status_id) {
				
			},
			replace: function() {
				// this.list = [{ name: "Edgard" }];
			},
			clone: function(el) {
				console.log(el);
				// return {
				// 	name: el.name + " cloned"
				// };
			},
			log: function(evt) {
				console.log(evt);
			}
		},
		async created(){
			let { data } = await axios('api/issuess/Backlog');
			this.backlog = data;
			// let ( data ) = await axios();
			// let ( data ) = await axios();
		}
	}
</script>