<template>
	<div>
		<p>@{{userData.username}} </p>
		<h1>Name : {{userData.name}} </h1>
		<h3>Email : {{userData.email}} </h3>
		<router-link :to="PostLink">Posts</router-link>
		<router-link :to="BackUser" > Back User</router-link>
		<router-link :to="NextUser">Next User</router-link>
	</div>
</template>

<script>
	export default {
		name: 'UserProfile',
		data() {
			return {
				userData: {}
			}
		},
		methods: {
			fetchData() {
				fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
				.then((res) => { return res.json() })
				.then((data) => { this.userData = data; })
			}
		},
		watch: { //$route dinle degisiklik varsa created i yeniden calistir
			'$route': 'fetchData'
		},
		computed: {
			PostLink() {
				return `/user/${this.$route.params.id}/posts`
			},
			NextUser() {
				return `/user/${parseInt(this.$route.params.id, 10) + 1}`
			},
			BackUser() {
				return `/user/${parseInt(this.$route.params.id, 10) - 1}`
			}
		},
		created() {
			this.fetchData()
		}
	}
</script>