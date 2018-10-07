<template>
    <div class='credit-wrap'>
            <p>Credit to XXXXX's Design on Dribbble</p>
            <div class='close' @click="$emit('closeWidget')">X</div>
    </div>
</template>

<script>
export default {
    name: 'creditWidget'
}
</script>

<style lang="scss" scoped>
    .credit-wrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #F8CD64;
        color: #f4f4f4;

        .close {
            position: absolute;
            right: 20px;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2em;
            cursor: pointer;
        }
    }
</style>

