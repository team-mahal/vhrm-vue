<template>
<div class="md:flex">
	<div class="flex-initial w-full m-2 bg-white shadow-md">
		<form class="bg-white rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="create" @keydown="form.onKeydown($event)">
			
		</form>
	</div>
</div>
</template>

<script>
import Form from 'vform'
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  	middleware: 'auth',
   
}
</script>




