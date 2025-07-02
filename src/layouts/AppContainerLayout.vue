<template>
    <component :is="this.$route.meta.layoutComponent || 'WebSite'">
        <slot />
    </component>
</template>

<script>
export default {
    name: "AppContainerLayout"
}
</script>