<template>
	<div>
		<!-- changeEvent 발생시.. 리렌더링 비용이 줄어들듯 -->
		<input type="text" v-model.lazy="inputValue" />
		{{ reRender() }}
		<input type="text" v-model.number="inputNumber" />
		{{ typeof inputNumber }}
		<input type="text" v-model.trim="inputTrim" />
		{{ inputTrim }}
	</div>
</template>

<script>
	import { ref } from 'vue';

	export default {
		setup() {
			const inputValue = ref(null);
			const inputNumber = ref(null);
			const inputTrim = ref(null);
			const reRender = () => {
				console.log('리렌더링 되니?');
				console.log(inputValue.value);
			};
			return { inputValue, reRender, inputNumber, inputTrim };
		},
	};
</script>

<style lang="scss" scoped></style>
