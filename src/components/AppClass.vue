<template>
	<div>
		<div class="text" :class="{ active: isActive, 'text-danger': true }">
			class binding
		</div>
		<div class="text" :class="{ classObject }">class binding</div>
		<div class="text" :class="{ computedClass }">class binding</div>
		<div
			class="text"
			:class="[isActive ? arrClass1 : '', arrClass2, classObject]"
		>
			class binding
		</div>

		<button @click="toggleClick">토글</button>
	</div>
</template>

<script>
	import { ref, reactive, computed } from 'vue';

	export default {
		setup() {
			const isActive = ref(false);
			const toggleClick = () => {
				isActive.value = !isActive.value;
			};
			const classObject = reactive({
				active: true,
				'text-danger': false,
			});

			const computedClass = computed(() => {
				return {
					active: true && isActive,
					'text-danger': false,
				};
			});

			const arrClass1 = ref('arr-class1');
			const arrClass2 = ref('arr-class2');
			return {
				isActive,
				toggleClick,
				classObject,
				computedClass,
				arrClass1,
				arrClass2,
			};
		},
	};
</script>

<style scoped>
	.text {
		font-style: italic;
	}
	.active {
		font-weight: 700;
	}
	.text-danger {
		color: red;
	}
</style>
