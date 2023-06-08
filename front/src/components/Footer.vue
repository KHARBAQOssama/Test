<template>
  <div class="w-100 mt-auto bg-brand-color d-flex flex-column align-items-center justify-content-center footer" >
    <img src="../assets/images/logo-w.png" alt="">
    <div class="d-flex justify-content-center social-media-links mt-5">
        <a href="" class="d-flex justify-content-center align-items-center rounded-circle mx-2">
            <i class="fa-brands fa-linkedin fs-5"></i>
        </a>
        <a href="" class="d-flex justify-content-center align-items-center rounded-circle mx-2">
            <i class="fa-brands fa-facebook fs-5"></i>
        </a>
        <a href="" class="d-flex justify-content-center align-items-center rounded-circle mx-2">
            <i class="fa-brands fa-instagram fs-5"></i>
        </a>
        <a href="" class="d-flex justify-content-center align-items-center rounded-circle mx-2">
            <i class="fa-brands fa-twitter fs-5"></i>
        </a>
    </div>
    <p class="text-white fs-small fw-light mt-3">
                {{ $t('footer_message') }}</p>
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    height: 50vh;
}
.footer img{
    width: 150px;
}
.social-media-links a{
    width: 35px;
    height: 35px;
    text-decoration: none;
    transition: all .3s ease;
}
</style>