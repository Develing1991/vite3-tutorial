<template>
	<div>
		<h2>보간법</h2>
		<p>{{ message }}</p>
		<p v-once>{{ message }}</p>
		<button @click="$event => (message = message + '!')">메시지 추가</button>

		<h2>v-html</h2>
		<!-- xss 주의 dompurify ...-->
		<p v-html="rawHtml"></p>
		<p>{{ rawHtml }}</p>

		<h2>속성 바인딩</h2>
		<div :title="dynamicTitle">마우스를 올려봐</div>
		<input type="text" value="길동리" :disabled="isInputDisabled" />
		<input v-bind="attr" />
		<h2>javascript</h2>
		{{ message.split('').reverse().join('') }}
		{{ isInputDisabled ? '예' : '아니오' }}
	</div>
</template>

<script>
	import { ref } from 'vue';

	export default {
		setup() {
			const message = ref('hello');
			const rawHtml = ref('<strong>안녕?</strong>');
			const dynamicTitle = ref('hihihihifsddfs');
			const isInputDisabled = ref(false);
			const attr = ref({
				type: 'password',
				value: '1234',
				disabled: true,
			});
			return { message, rawHtml, dynamicTitle, isInputDisabled, attr };
		},
	};
</script>

<style lang="scss" scoped></style>
