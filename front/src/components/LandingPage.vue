<template>
  <div class="w-100">
    <div class="welcome w-100 position-relative d-flex">
        <img src="../assets/images/pexels-fauxels-3184338.jpg"  class="w-100 position-absolute" alt="">
        <div class="w-100 px-5 h-100 position-absolute w-md-75 m-auto d-flex justify-content-center flex-column">
          <h1 class="fw-bold shadow-text">{{ welcomeTyped }}</h1>
          <p class="fw-light shadow-text-light fs-4">{{ presTyped }}</p>

        </div>
    </div>
    <section class="w-100 my-5 py-2 d-flex flex-column">
      <h1 class="text-center brand-brown my-2">{{ $t('we').toUpperCase() }}</h1>
      <p class="text-center w-75 m-auto fs-5 mb-3 mt-1">{{ $t('presentation') }}</p>
    </section>

    <section class="w-100 my-5 py-2 row values">
      <div class="col-12 image-container m-auto col-md-6 position-relative">
        <div class="w-100 h-100  position-absolute d-flex justify-content-center align-items-center overflow-hidden">
          <img src="../assets/images/teamwork.jpg" class="w-100" alt="">
        </div>   
        <div class="w-100 h-100  position-absolute d-flex justify-content-center align-items-center overflow-hidden">
          <h2 class="fw-semibold w-100 py-4 text-center bg-brand-color brand-brown">{{ $t('values_title').toUpperCase() }}</h2>
        </div>  
      </div>
      <div class="col-12 m-auto col-md-6 bg-brand-color brand-brown2 d-flex flex-column justify-content-center align-items-center h-100">
        <h3 class="my-4 value" id="value1">
          {{ $t('value1') }}
        </h3>
        <p id="value1p" class="text-center value px-5">{{ $t('value1_description') }}</p>
        <h3 class="my-4 value" id="value2">
          {{ $t('value2') }}
        </h3>
        <p id="value2p" class="text-center value px-5">{{ $t('value2_description') }}</p>
        <h3 class="my-4 value" id="value3">
          {{ $t('value3') }}
        </h3>
        <p id="value3p" class="text-center value px-5">{{ $t('value3_description') }}</p>
        <h3 class="my-4 value" id="value4">
          {{ $t('value4') }}
        </h3>
        <p id="value4p" class="text-center value px-5">{{ $t('value4_description') }}</p>
        <h3 class="my-4 value" id="value5">
          {{ $t('value5') }}
        </h3>
        <p id="value5p" class="text-center value px-5">{{ $t('value5_description') }}</p>
      </div>
    </section>
    <section class="w-100 mt-4 mb-5">
      <h1 class="text-center brand-brown my-2">{{ $t('our_services_title').toUpperCase() }}</h1>
      <div class="row gap-3 wrap">
        <div class="service col d-flex flex-column justify-content-center align-items-center col-md-3 col-sm-5 col-11 m-auto shadow py-4">
          <i class="fa-solid fa-bullhorn fs-1 mb-4"></i>
          <h5 class="text-center fw-light w-75">{{ $t('our_service1_title') }}</h5>
        </div>
        <div class="service col d-flex flex-column justify-content-center align-items-center col-md-3 col-sm-5 col-11 m-auto shadow py-4">
          <i class="fa-brands fa-twitter fs-1 mb-4"></i>
          <h5 class="text-center fw-light w-75">{{ $t('our_service2_title') }}</h5>
        </div>
        <div class="service col d-flex flex-column justify-content-center align-items-center col-md-3 col-sm-5 col-11 m-auto shadow py-4">
          <i class="fa-solid fa-bullseye fs-1 mb-4"></i>
          <h5 class="text-center fw-light w-75">{{ $t('our_service3_title') }}</h5>
        </div>
        <div class="service col d-flex flex-column justify-content-center align-items-center col-md-3 col-sm-5 col-11 m-auto shadow py-4">
          <i class="fa-solid fa-shield-halved fs-1 mb-4"></i>
          <h5 class="text-center fw-light w-75">{{ $t('our_service4_title') }}</h5>
        </div>
        <div class="service col d-flex flex-column justify-content-center align-items-center col-md-3 col-sm-5 col-11 m-auto shadow py-4">
          <i class="fa-solid fa-paintbrush fs-1 mb-4"></i>
          <h5 class="text-center fw-light w-75">{{ $t('our_service5_title') }}</h5>
        </div>
        <div class="service col d-flex flex-column justify-content-center align-items-center col-md-3 col-sm-5 col-11 m-auto shadow py-4">
          <i class="fa-solid fa-bullhorn fs-1 mb-4"></i>
          <h5 class="text-center fw-light w-75">{{ $t('our_service1_title') }}</h5>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueNumber:0,
      phrase1: this.$t('welcome').toUpperCase(),
      phrase2: this.$t('first_words'),
      welcomeTyped: '',
      presTyped:'',
      charIndex: 0,
      typingDelay: 150, // Delay between typing each character
      pauseBeforeTyping: 1500 // Delay before erasing the typed word
    };
  },
  mounted() {
    this.type();
    this.showValues();
  },
  methods: {
    type() {
      if (this.charIndex < this.phrase1.length) {
        this.welcomeTyped += this.phrase1.charAt(this.charIndex);
        this.charIndex++;
        
        setTimeout(this.type, this.typingDelay);

      }else{
        if (this.charIndex-this.phrase1.length < this.phrase2.length) {
          this.presTyped += this.phrase2.charAt(this.charIndex-this.phrase1.length);
          this.charIndex++;
          setTimeout(this.type, this.typingDelay);
        }
        
      }
    },
    showValues(){
      if(this.valueNumber == 5){
        this.valueNumber = 1
      }else{
        this.valueNumber++;
      }
      this.disappearValues(this.valueNumber);
      setTimeout(()=>this.showValues(),15000)
    },
    disappearValues(except){
      let elements = Array.from(document.getElementsByClassName('value'));
      elements.forEach(element => {
        element.classList.remove('opacity-1');
        element.classList.add('opacity-0');
      });
      setTimeout(()=>{
        elements.forEach(element => {
          element.classList.add('d-none');
        });
        this.appearValue(except);
      },1000);
    },
    appearValue(element){
      let h = document.getElementById('value'+element);
      let p = document.getElementById('value'+element+'p');
      h.classList.remove('d-none');
      p.classList.remove('d-none');
      p.classList.remove('opacity-0');
      h.classList.remove('opacity-0');
    },
  }
}
</script>

<style scoped>
.welcome{
    height: 70vh;
    overflow: hidden;
    z-index: -1;
}

.service{
  transition: all .1s ease;
}
.value{
  transition: all 1s ease;
}
.service:hover{
  color: #BF8963;
  transform: scale(1.02);
  font-size: bold !important;
}
.values{
  height: 65vh;
}
.image-container{
  height: 100%;
}
.image-container div img,.values h2{
  z-index: -10 !important;
}
@media screen and (max-width: 766px) {
  .values{
    height: 80vh;
  }
  .image-container{
    height: 40%;
  }
}
</style>