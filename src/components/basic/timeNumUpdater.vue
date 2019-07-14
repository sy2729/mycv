<template>
  <p>{{scaleNum}}%</p>  
</template>


<script>
export default {
  props:['scale'],
  data(){
    return {
      scaleNum: 0
    }
  },
  created(){
    // this.scaleNum = this.scale;
  },
  mounted(){
    let interval = 30;
    let id;
    let setTimer = (time)=>{
      
      id = setTimeout(()=>{
        let time = 10 + this.scaleNum * ( this.scaleNum / 45) ;
        this.scaleNum  = this.scaleNum + 1;
        if(this.scaleNum >= this.scale) {
          clearInterval(id);
        }else {
          setTimer(time);
        }
      }, time)
    }
    setTimer(interval);
    // let id = setInterval(()=>{
    //   this.scaleNum = this.scaleNum + 1;
    //   if(this.scaleNum >= this.scale) {
    //     clearInterval(id);
    //   }
    // }, interval)
  }
}
</script>

<style lang="scss" scoped>

</style>
