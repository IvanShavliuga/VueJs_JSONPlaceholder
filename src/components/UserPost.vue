<template>
	<div >
		<br>
		<button>
			<router-link :to="UserLink"> Back To UserProile</router-link>
		</button>
		<template v-for="post in userPosts" v-if="!isLoading">
			<h1> {{post.title}} </h1>
			<h3>{{post.body}} </h3>
			<hr>
		</template>
		<h1 v-if="isLoading">Loading...</h1>

	</div>
</template>

<script>
	export default {
		name: 'UserPost',
		data() {
			return {
				userPosts: [],
				isLoading: true
			}
		},
		computed: {
			UserLink() {
				return `/user/${this.$route.params.id}`
			}
		},
		created() {
			fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.id}`)
			.then((res) => { return res.json() })
			.then((post) => { this.userPosts = post; this.isLoading=false })
		}
	}
</script>