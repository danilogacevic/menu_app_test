<template>
	<div v-if="show" style="text-align: left;color:orange;">
		<div v-for="m in messages" v-bind:key="m">{{m}}</div>
	</div>
</template>

<script>

export default {
    props: ["validation"],
    computed: {
        show() { 
            return this.validation.$dirty && this.validation.$invalid
        },
        messages() {
            let messages = [];
            if (this.validation.$dirty) {
                if (this.hasValidationError("required")) {
                    messages.push("Required")
                } else if (this.hasValidationError("isUnique")) {
                    messages.push("Already exists");
                }
            }
            return messages;
        }
    }, 
    methods: {
        hasValidationError(type) {
            return this.validation.$params.hasOwnProperty(type) 
                && !this.validation[type];
        }
    }
}
</script>