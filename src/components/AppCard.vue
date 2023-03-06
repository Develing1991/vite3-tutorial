<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title red">Card title</h5>
			<!-- {{ $style }} -->
			<!-- <p class="card-text" :class="$style.red"> -->
			<!-- <p class="card-text" :class="classes.red"> -->
			<p class="card-text">
				Some quick example text to build on the card title and make up the bulk
				of the card's content.
			</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>
</template>

<script>
	import { useCssModule, ref } from 'vue';

	console.log('AppCard module');
	export default {
		setup() {
			// const style = useCssModule();
			// console.log(style);
			// console.log('AppCard setup');
			const color = ref('red');
			return { color };
		},
	};
</script>

<style scoped>
	.red {
		color: v-bind(color);
	}
</style>
<!-- classes.red -->
<!-- <style module="classes">
	.red {
		color: red;
	}
</style> -->
<!-- $style.red -->
<!-- <style module>
	.red {
		color: red;
	}
</style> -->
<!-- <style scoped>
	.red {
		color: red;
	}
</style> -->
