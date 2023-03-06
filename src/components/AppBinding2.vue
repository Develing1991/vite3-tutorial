<template>
	<div>
		<!-- checkValue true-value -->
		<label for="checkbox">{{ checkValue }}</label>
		<input
			type="checkbox"
			id="checkbox"
			v-model="checkValue"
			true-value="yes"
			false-value="no"
		/>

		<!-- checkboxValues array -->
		<div>{{ checkboxValues }}</div>
		<label
			><input
				type="checkbox"
				value="html"
				v-model="checkboxValues"
			/>html</label
		>
		<label
			><input type="checkbox" value="javascript" v-model="checkboxValues" />
			javascript</label
		>
		<label
			><input type="checkbox" value="css" v-model="checkboxValues" />css</label
		>
	</div>
</template>

<script>
	import { ref } from 'vue';

	export default {
		setup() {
			const checkValue = ref('yes');
			const checkboxValues = ref([]);
			return {
				checkValue,
				checkboxValues,
			};
		},
	};
</script>

<style lang="scss" scoped></style>
