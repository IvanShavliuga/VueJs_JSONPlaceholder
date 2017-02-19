<template>
	<div >
		<h3>
			<router-link :to="UserLink">
				Name : {{user.name}}  Username : @{{user.username}} <br>
			</router-link>
		</h3>
	</div>
</template>

<script>
	export default {
		name: 'UserItem',
		data() {
			return {
				users: []
			}
		},
		props: { 
			user: { type:Object , required: true }
		},
		computed: {
			UserLink() {
				return `/user/${this.user.id}`
			}
		}
	}
</script>