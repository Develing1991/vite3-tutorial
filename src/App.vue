<template>
	<div>
		<div :style="styleObject">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ea aliquid
		</div>
		<div :style="styleComputed">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ea aliquid
		</div>
		<button @click="fontSize++">click</button>
	</div>
</template>

<script>
	import { ref, reactive, computed } from 'vue';

	export default {
		setup() {
			const fontSize = ref(10);
			const styleObject = reactive({
				color: 'blue',
				fontSize: '2rem',
			});
			const styleComputed = computed(() => ({
				color: 'red',
				fontSize: fontSize.value + 'px',
			}));
			return { styleObject, styleComputed, fontSize };
		},
	};
</script>

<style lang="scss" scoped></style>
