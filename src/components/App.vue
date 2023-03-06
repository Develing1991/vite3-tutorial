<template>
	<div>
		<form action="" @submit.prevent="save(title, contents)">
			<input type="text" v-model.lazy="title" placeholder="타이틀" />
			<textarea v-model.lazy="contents" placeholder="내용"></textarea>
			<button>저장</button>
		</form>
	</div>
</template>

<script>
	import { ref, watchEffect } from 'vue';

	export default {
		setup() {
			const title = ref('');
			const contents = ref('');
			const save = (title, contents) => {
				console.log(`저장 ${title}, ${contents}`);
			};
			// 기본 최초한번 즉시실행
			watchEffect(() => {
				console.log(title.value);
				console.log(contents.value);
				save(title.value, contents.value);
			});
			//최초 한번실행 // 페이지 변경시 다시 실행
			watchEffect(async () => {
				const { data } = await axios.get(
					`https://reqres.in/api/users?page=${page.value}`,
				);
				items.value = data.data;
			});
			return { title, contents };
		},
	};
</script>

<style lang="scss" scoped></style>
