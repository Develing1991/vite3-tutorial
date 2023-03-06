<template>
	<label>
		이름
		<!-- <input v-model="username" type="text" /> -->
		<input
			:value="modelValue"
			@input="event => $emit('update:modelValue', event.target.value)"
			type="text"
		/>
	</label>
</template>

<script>
	export default {
		props: ['modelValue'],
		emits: ['update:modelValue'],
		// modelValue, update:modelValue로 바뀌었다는 말이 v-model로 바인딩 했을 때고
		// 직접 부모에서 이름이랑 @이벤트로 받는건 아무이름이나 상관없음
		// v-model:title 로 받으면
		// emit('update:title', '데이터')같이 이름도 변경가능
		setup() {
			return {};
		},
	};
</script>

<style lang="scss" scoped></style>
