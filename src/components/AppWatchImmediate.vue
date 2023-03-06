<template>
	<div>
		<p>{{ message }}</p>
		<p>{{ reversMessage }}</p>
	</div>
</template>

<script>
	import { ref, watch } from 'vue';

	export default {
		setup() {
			const message = ref('hello');
			const reversMessage = ref('');

			// const reverseFunction = newValue => {
			// 	reversMessage.value = newValue.split('').reverse().join('');
			// };
			// watch(message, reverseFunction, {
			// 	//최초 즉시실행
			// 	immediate: true,
			// });
			const reverseFunction = () => {
				reversMessage.value = message.value.split('').reverse().join('');
			};
			watch(message, reverseFunction);
			reverseFunction();
			return { message, reversMessage };
		},
	};
</script>

<style lang="scss" scoped></style>
