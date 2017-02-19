<template>
	<div>
	<h1 style="text-align: center;" v-if="isLoading"> Loading...</h1>
		<ul name="for" v-for="photo in Photos">
			<img :src="photo.thumbnailUrl" v-if="!isLoading">
			<h1>{{photo.title}}</h1>
		</ul> 
	</div>
</template>

<script>
	export default {
		name: 'ImageAlbum',
		data() {
			return {
				Photos: [],
				isLoading: true
			}
		},
		created() {
			fetch("https://jsonplaceholder.typicode.com/photos")
			.then((res) => { return res.json() })
			.then((photo) => { this.Photos = photo; this.isLoading = false; })
		}
	}
</script>

<style scoped>
	img {
		border-radius: 100px;
		margin:auto;
 		display:block;
	}

	ul {
		margin-top: 50px;
	}
	h1 {
		text-align: center;
	}
</style>