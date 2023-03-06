<template>
	<div>
		<button @click="printEventInfo('mesageeeeeeeeé', $event)">
			inline event handler
		</button>
		<input type="text" @keypress="keypressEventInfo($event)" />
	</div>
</template>

<script>
	export default {
		setup() {
			const printEventInfo = (message, event) => {
				console.log(message);
				console.log(event.target);
				console.log(event.target.tagName);
			};
			const keypressEventInfo = event => {
				console.log(event.code);
				console.log(event.key);
			};
			return { printEventInfo, keypressEventInfo };
		},
	};
</script>

<style lang="scss" scoped></style>
