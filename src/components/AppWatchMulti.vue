<template>
	<div>
		<div>{{ x }}</div>
		<div>{{ y }}</div>

		<div>{{ obj.count }}</div>
		<!-- <button @click="x++">x add</button> -->
		<button @click="obj.count++">count add</button>
		<button @click="person.obj.count++">count add</button>
	</div>
</template>

<script>
	import { ref, watch, reactive } from 'vue';

	export default {
		setup() {
			const x = ref(0);
			const y = ref(0);
			const obj = reactive({
				count: 0,
			});

			// watch(
			// 	() => x.value + y.value,
			// 	(sum, oldValue) => {
			// 		console.log(`sum : ${sum}`);
			// 		console.log(`oldValue: ${oldValue}`);
			// 	},
			// );

			//배열
			// watch([x, y], ([newX, newY], [oldX, oldY]) => {
			// 	console.log(`x, y ${newX}, ${newY}`);
			// 	console.log(`x, y ${oldX}, ${oldY}`);
			// });
			//객체
			// newValue, oldValue 같음 같은 레퍼런스를 바라보기 때문에
			// watch(obj, (newValue, oldValue) => {
			// 	console.log(` ${newValue.count}, ${oldValue.count}`);
			// });
			// 객체 속성은 getter함수로
			// watch(
			// 	() => obj.count,
			// 	(newValue, oldValue) => {
			// 		console.log(` ${newValue}, ${oldValue}`);
			// 	},
			// );

			// const person = reactive({
			// 	name: '홍길동',
			// 	age: 30,
			// 	hobby: '운동',
			// 	obj: {
			// 		count: 0,
			// 	},
			// });

			// watch(person, newValue => {
			// 	console.log('newValue: ', newValue);
			// });
			const person = reactive({
				name: '홍길동',
				age: 30,
				hobby: '운동',
				obj: {
					count: 0,
				},
			});

			// obj라는 객체 자체가 변해야 감지
			watch(
				() => person.obj, // () => person.obj.count,
				newValue => {
					console.log('newValue: ', newValue);
				},
			);
			return { x, y, obj, person };
		},
	};
</script>

<style scoped></style>
