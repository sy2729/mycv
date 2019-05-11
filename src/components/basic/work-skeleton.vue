<template>
  <div class="work-skeleton flex flex-column">
    <div class="flex-auto flex justify-center align-center">
      <div class="big-box"></div>
    </div>
    <div class="small-wrap flex">
      <div class="small-box m-r-1"></div>
      <div class="small-box m-r-1"></div>
      <div class="small-box"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .work-skeleton {
    background: #F4F7F9;
    min-width: 280px;
    height: 250px;

    .big-box {width: 50%; height: 40px; background: #DEE6EE;}
    .small-wrap {height: 20px;}
    .small-box {
      width: 40px;
      height: 20px;
      background: #DEE6EE;
    }

    @media screen and(max-width: 1024px) {
      min-width: 240px;
      height: 220px;
    }
  }
</style>
