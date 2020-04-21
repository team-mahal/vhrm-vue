<template>
<div class="max-w-xs m-auto text-center">
	<card :title="$t('your_password')">
		<form @submit.prevent="update" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @keydown="form.onKeydown($event)">
			<alert-success :form="form" :message="$t('password_updated')" />

			<!-- Password -->
			<div class="form-group row">
				<label class="block text-gray-700 text-sm font-bold mb-2 text-left">{{ $t('new_password') }}</label>
				<div class="col-md-7">
					<input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password">
					<has-error :form="form" field="password" />
				</div>
			</div>

			<!-- Password Confirmation -->
			<div class="text-left">
				<label class="block text-gray-700 text-sm font-bold mb-2 text-left">{{ $t('confirm_password') }}</label>
				<div class="col-md-7">
					<input v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password_confirmation">
					<has-error :form="form" field="password_confirmation" />
				</div>
			</div>

			<!-- Submit Button -->
			<div class="mt-3">
				<div class="ml-md-auto">
					<v-button :loading="form.busy" type="success">
						{{ $t('update') }}
					</v-button>
				</div>
			</div>
		</form>
	</card>
</div>  
</template>

<script>
import Form from 'vform'

export default {
	scrollToTop: false,

	metaInfo () {
		return { title: this.$t('settings') }
	},

	data: () => ({
		form: new Form({
			password: '',
			password_confirmation: ''
		})
	}),

	methods: {
		async update () {
			await this.form.patch('/api/settings/password')

			this.form.reset()
		}
	}
}
</script>
