<template>
	<div>
		<p>{{ teacher.name }}</p>
		<!-- <p>{{ teacher.lectures.length > 0 ? 'yes' : 'no' }}</p> -->
		<p>{{ hasLectures }}</p>
		<p>{{ hasLectures }}</p>
		<p>{{ hasLectures }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<button @click="count++">add {{ count }}</button>
		<h3>이름</h3>
		<p>{{ fullName }}</p>
	</div>
</template>

<script>
	import { reactive, computed, ref } from 'vue';

	export default {
		setup() {
			const teacher = reactive({
				name: 'lee',
				lectures: ['next', 'nest', 'vue'],
			});

			// useMemo
			// 캐싱 - 리렌더링 안함~~
			const hasLectures = computed(() => {
				console.log('computed');
				return teacher.lectures.length > 0 ? 'yes' : 'no';
			});
			const existLecture = () => {
				console.log('method');
				return teacher.lectures.length > 0 ? 'yes' : 'no';
			};

			const count = ref(0);

			const firstName = ref('lee');
			const lastName = ref('su');
			const fullName = computed({
				get() {
					return firstName.value + ' ' + lastName.value;
				},
				set(value) {
					console.log(value);
					[firstName.value, lastName.value] = value.split(' ').reverse();
				},
			});
			console.log(fullName.value);
			fullName.value = 'set computed';
			return { teacher, hasLectures, existLecture, count, fullName };
		},
	};
</script>

<style lang="scss" scoped></style>
