<template>
    <div class='section-title-wrap'>
        <div class='section-title relative'>
            <div class="title-bg absolute"></div>
            <p class="order">{{order}}.</p>
            <p class="section-name">{{name}}</p>
        </div>
        <slot />
    </div>
</template>

<script>
export default {
    name: 'sectionTitle',
    props:['order', 'name']
}
</script>

<style lang="scss" scoped>
    .title-bg {
        width: 100px;
        height: 100px;
        background: $theme;
        opacity: .1;
        transform: translate(-62%, -32%);
    }

    .section-title {
        p {
            font-size: 1.2em;
            font-weight: bold;
        }
    }
</style>
