<template>
    <div class='section-title-wrap'>
        <div class='section-title'>
            <p class="order">{{order}}.</p>
            <p class="section-name">{{name}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sectionTitle',
    props:['order', 'name']
}
</script>

<style lang="scss" scoped>

</style>
