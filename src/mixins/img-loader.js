const mixin = {
  data() {
    return {
      placeholder: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1548391627/cv-img/logo-animation.gif',
    }
  },
  methods: {
    run(placeholder = this.placeholder /* the placeholder image */, newImg /* the new image to be loaded*/, replace = 'presentImg'/*the dataName to be replaced*/){
      // first load the placeholder
      this[replace] = placeholder

      // then load the specific img
      let imgEl = document.createElement('img');
      imgEl.src = newImg;
      imgEl.onload = ()=> {
        this[replace] = newImg
      }  
    }
  }
}

export default mixin;