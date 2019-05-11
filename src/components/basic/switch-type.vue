<template>
    <div class='switch-type clearfix'>
            <ul class='type-wrap f-right'>
                <li :class="{'active': i === typeChosen}" v-for='(i, index) in types' @click='switchType(i)' :key='index'>{{i}}<span v-if='index !== types.length - 1' class='type-divide'> /</span></li>
            </ul>
    </div>
</template>

<script>
export default {
    name: 'switchType',
     data: function () {
        return {
            typeChosen: 'web',
        }
    },
    methods: {
        switchType(data) {
            this.typeChosen = data;
            this.$emit('switch-type', data);
        }
    },
    props: ['types'],
}
</script>

<style lang="scss" scoped>

</style>
