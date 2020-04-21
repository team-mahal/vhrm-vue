<template>
<div class="max-w-xs m-auto text-center">
	<card :title="$t('your_info')">
		<form @submit.prevent="update" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @keydown="form.onKeydown($event)">
			<alert-success :form="form" :message="$t('info_updated')" />

			<!-- Name -->
			<div class="form-group row">
				<label class="col-md-3 col-form-label text-md-right">{{ $t('name') }}</label>
				<div class="col-md-7">
					<input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name">
					<has-error :form="form" field="name" />
				</div>
			</div>

			<!-- Email -->
			<div class="form-group row">
				<label class="col-md-3 col-form-label text-md-right">{{ $t('email') }}</label>
				<div class="col-md-7">
					<input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email">
					<has-error :form="form" field="email" />
				</div>
			</div>

			<!-- Submit Button -->
			<div class="mt-3">
				<div class="col-md-9 ml-md-auto">
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
import { mapGetters } from 'vuex'

export default {
	scrollToTop: false,

	metaInfo () {
		return { title: this.$t('settings') }
	},

	data: () => ({
		form: new Form({
			name: '',
			email: ''
		})
	}),

	computed: mapGetters({
		user: 'auth/user'
	}),

	created () {
		// Fill the form with user data.
		this.form.keys().forEach(key => {
			this.form[key] = this.user[key]
		})
	},

	methods: {
		async update () {
			const { data } = await this.form.patch('/api/settings/profile')

			this.$store.dispatch('auth/updateUser', { user: data })
		}
	}
}
</script>
