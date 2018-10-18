<template>
    <div :class="['each-education', {active: activeState}]">
            <div class="school-info-wrap">
                <div class="school-info-sub-wrap">
                    <p class="school">{{school}}</p>
                    <p class="major">{{major}}</p>
                </div>
                <p class="degree">{{degree}}</p>
            </div>
            <p class="education-date">
                <span>{{startDate}}</span>
                    -
                <span>{{endDate}}</span>
            </p>
    </div>
</template>

<script>
export default {
    name: 'eachEducation',
    props: ['school', 'degree', 'major', 'startDate', 'endDate', 'activeState']
}
</script>

<style lang="scss" scoped>

</style>
