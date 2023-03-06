<template>
	<div>
		<button @click="page++">nextPage</button>
		{{ items }}
	</div>
</template>

<script>
	import { ref, watchEffect } from 'vue';

	export default {
		setup() {
			const page = ref(1);
			const items = ref(null);
			//최초 한번실행 // 페이지 변경시 다시 실행
			watchEffect(async () => {
				// const { data } = await axios.get(
				// 	`https://reqres.in/api/users?page=${page.value}`,
				// );
				const result = await new Promise((resolve, _) => {
					console.log(page.value);
					resolve({
						data: [{ id: 1, name: '123' }],
					});
				});
				items.value = result.data;
			});
			return { page, items };
		},
	};
</script>
