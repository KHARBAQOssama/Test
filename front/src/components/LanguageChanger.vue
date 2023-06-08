<template>
  <div class="position-fixed">
    <button class="p-2 fs-4 w-100 border-0 bg-brand-color text-white fw-bold hide" id="fr" @click="changeLang('fr')">FR</button>
    <button class="p-2 fs-4 w-100 border-0 bg-brand-color text-white fw-bold" id="en" @click="changeLang('en')">EN</button>
  </div>
</template>

<script>
export default {
    methods:{
        changeLang(value){
            this.$i18n.locale = value;
            let en = document.getElementById('en');
            let fr = document.getElementById('fr');
            if(value == 'fr'){
                en.classList.remove('hide');
                fr.classList.add('hide');
            }else{
                en.classList.add('hide');
                fr.classList.remove('hide');
            }
        }
    }
}
</script>

<style scoped>
div{
    bottom: 20px;
    right: 20px;
    width: 60px;
}
.hide{
    display: none;
}
</style>