<template>
	<div>
		<p>{{ message.value }}</p>
		<!-- 자동으로 언래핑 -->
		<p>{{ messageRef }}</p>
		<button @click="addMessage">add click</button>
	</div>
</template>

<script>
	import { reactive, ref } from 'vue';

	export default {
		setup() {
			// reactive 레퍼런트 타입만 변경
			let message = reactive({
				value: 'Hello vue',
			});
			// ref 프리미티브 타입 변경 (value라는 단 하나의 속성만 있음..) 결국 레퍼런스이고 참조만 하기때문에 그래서 이름이 ref
			const messageRef = ref('ref message');
			const addMessage = () => {
				message.value = message.value + '!';
				messageRef.value = messageRef.value + '!';
			};
			console.log(messageRef);
			return {
				message,
				messageRef,
				addMessage,
			};
		},
	};
</script>

<style lang="scss" scoped></style>
