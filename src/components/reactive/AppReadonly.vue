<template>
	<div></div>
</template>

<script>
	import { reactive, readonly } from 'vue';

	export default {
		setup() {
			const original = reactive({
				count: 0,
			});
			console.log(original.count++);
			const readonlyCount = readonly(original);
			console.log(readonlyCount.count++); // 변경불가

			return { original };

			// Reactivity Transform $ref(0) is deprecated..
		},
	};
</script>

<style lang="scss" scoped></style>
