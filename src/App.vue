<template>
	<div>
		<h2 v-if="visible">hh</h2>
		<h2 v-else>hh</h2>
		<template v-if="visible">
			<div>hello</div>
			<div>hello</div>
			<div>hello</div>
		</template>
		<div v-show="visible">zzz</div>
	</div>
</template>

<script>
	import { ref } from 'vue';

	export default {
		setup() {
			const visible = ref(true);
			return { visible };
		},
	};
</script>

<style lang="scss" scoped></style>
