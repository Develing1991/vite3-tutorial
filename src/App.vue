<template>
	<!-- <div v-once>
		<p>subscribe: {{ subscribe }}</p>
		<p>views: {{ views }}</p>
		<p>likes: {{ likes }}</p>
	</div> -->

	<!-- 
		const [subScribe, setSubScribe] = useState('');
		useMemo(()=>{},[subscribe]) 
		useEffect(()=>{},[subscribe]) 
	-->
	<!-- 성능 최적화.. v-for로 출력할 목록이 1000개 이상일 때...  -->
	<!-- react deps... -->
	<div v-memo="[subscribe]">
		<p>subscribe: {{ subscribe }}</p>
		<p>views: {{ views }}</p>
		<p>likes: {{ likes }}</p>
	</div>
	<button @click="subscribe++">sub ++</button>
	<button @click="views++">views ++</button>
	<button @click="likes++">likes ++</button>
</template>

<script>
	import { ref } from 'vue';

	export default {
		setup() {
			const subscribe = ref(4000);
			const views = ref(400);
			const likes = ref(400);
			return {
				subscribe,
				views,
				likes,
			};
		},
	};
</script>

<style lang="scss" scoped></style>
