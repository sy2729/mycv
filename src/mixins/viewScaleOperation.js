const mixin = {
  data() {
    return {
      
    }
  },
  methods: {
    viewScaleOperation(wetherAllow){
      var metaEl = document.querySelector("meta[name='viewport']");
      if(wetherAllow) {
        metaEl.setAttribute('content', 'width=device-width,initial-scale=1.0');
      }else {
        metaEl.setAttribute('content', 'width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no');
      };
    }
  }
}

export default mixin;