<template>
    <NavigationHeader />
    <slot /> 
    <NavigationBottom />
</template>

<script>
import NavigationHeader from "@/components/NavigationHeader.vue";
import NavigationBottom from "@/components/NavigationBottom.vue";
export default {
    components: {
        NavigationHeader,
        NavigationBottom
    }
}
</script>