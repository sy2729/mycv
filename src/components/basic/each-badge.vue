<template>
    <div class="badge-wrap">
        <div class='badge-bg' :style="{backgroundImage: `url(${bgUrl})`}">
        </div>
    </div>
</template>

<script>
export default {
    name: 'eachBadge',
    props: ['bgUrl']

}
</script>

<style lang="scss" scoped>
    .badge-wrap {
        width: 100%;
        height: 150px;
        position: relative;
        border-radius: 2%;
        box-shadow: $activeBoxShadow;
        margin-right: 100px;
        background: #FFFFFF;

        .badge-bg {
            position: absolute;
            width: 80%;
            height: 80%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: transparent no-repeat center;
            background-size: cover;
            // background: red;
        }
    }
</style>
