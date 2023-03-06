<template>
	<div>
		<!-- <input type="text" v-model="inputValue" /> -->
		<input
			type="text"
			@input="$event => (inputValue = $event.target.value)"
			:value="inputValue"
		/>
		{{ inputValue }}

		<label for="checkbox">{{ checkValue }}</label>
		<input
			type="checkbox"
			id="checkbox"
			:checked="checkValue"
			@change="$event => (checkValue = $event.target.checked)"
		/>
		<input type="checkbox" id="checkbox" v-model="checkValue" />

		<label>
			<!-- <input
				type="radio"
				name="type"
				value="O"
				:checked="radioValue === 'O'"
				@change="$event => (radioValue = $event.target.value)"
			/> -->
			<input type="radio" name="type" value="O" v-model="radioValue" />
			O
		</label>
		<label>
			<!-- <input
				type="radio"
				name="type"
				value="X"
				:checked="radioValue === 'X'"
				@change="$event => (radioValue = $event.target.value)"
			/> -->
			<input type="radio" name="type" value="X" v-model="radioValue" />
			X
		</label>
		<br />
		{{ radioValue }}
		<br />

		<!-- <select v-model="selectValue"> -->
		<select
			:value="selectValue"
			@change="$event => (selectValue = $event.target.value)"
		>
			<option value="html">HTML 수업</option>
			<option value="css">CSS 수업</option>
			<option value="javascript">JavaScript 수업</option>
		</select>
		{{ selectValue }}
	</div>
</template>

<script>
	import { ref } from 'vue';

	export default {
		setup() {
			const inputValue = ref(null);
			const checkValue = ref(true);
			const radioValue = ref('O');
			const selectValue = ref('html');
			return {
				inputValue,
				checkValue,
				radioValue,
				selectValue,
			};
		},
	};
</script>

<style lang="scss" scoped></style>
