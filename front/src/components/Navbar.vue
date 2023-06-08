<template>
    <nav class="position-fixed top-0 w-100 align-items-center" id="nav">
        <img src="../assets/images/logo-w.png" class="logo-w h-50 ms-4" alt="">
        <img src="../assets/images/logo-g.png" class="logo-g h-50 ms-4" alt="">
        <div class="text-white ms-auto me-5 navigation">
            <router-link to="/" class="mx-auto active">
                {{ $t('nav_link1') }}
            </router-link>
            <router-link to="/" class="mx-auto">
                {{ $t('nav_link2') }}
            </router-link>
            <router-link to="/" class="mx-auto">
                {{ $t('nav_link3') }}
            </router-link>
            <router-link to="/" class="mx-auto">
                {{ $t('nav_link4') }}
            </router-link>
            <router-link to="/" class="mx-auto">
                {{ $t('nav_link5') }}
            </router-link>
            <router-link to="/" class="mx-auto">
                {{ $t('nav_link6') }}
            </router-link>
        </div>
        <button class="justify-content-between bg-transparent border-0 ms-auto me-3" @click="toggle">
            <div class="toggle first"></div>
            <div class="toggle middle"></div>
            <div class="toggle last"></div>
        </button>
    </nav>
</template>

<script>
export default {
    methods:{
        toggle(){
            const nav = document. querySelector("#nav");
            if (!nav.classList.contains("opened")){
                    nav.classList.add( "opened");
            }else if(nav.classList.contains("opened")){
                    nav.classList.remove( "opened");
            }
        }
    }
}
// const nav = document. querySelector("#nav");
// const onScroll = (event) => {
// const scrollPosition =
// event. target. scrollingElement .scrollTop;
// if (scrollPosition > 10) {
// if I
// !nav.classList.contains("scrolled-down")
// ) {
// nav.classList.add( "scrolled-down");
// }
// } else {
// if (
// } S
// nav.classList.contains("scrolled-down")
// }
// nav.classList. remove("scrolled-down");
// }
// }:
function scroll(event){
    const nav = document. querySelector("#nav");
    const scrollPosition = event.target.scrollingElement.scrollTop;
    if (scrollPosition > 200) {
        if (!nav.classList.contains("scrolled-down")){
            nav.classList.add( "scrolled-down");
        }
    }else{
        if (nav.classList.contains("scrolled-down")){
            nav.classList.remove( "scrolled-down");
        }
    }
}
document. addEventListener ("scroll", scroll);
</script>

<style scoped>
nav{
    height: 100px;
    display: flex;
    transition: all .6s ease;
}
.logo-g{
    display: none;
}
.scrolled-down .logo-g{
    display: flex;
}
.scrolled-down .logo-w{
    display: none;
}
.navigation{
    display: flex !important;
    width: auto;
    flex:.7;
    z-index: 99999;
}
.scrolled-down .active{
    color: #2D3E37 !important;
}
.scrolled-down .active::after{
    background-color: #2D3E37 !important;
}
.navigation .active{
    position: relative;
    color: #ffffff;
}
.navigation .active:after{
    content: '';
    height: 3px;
    width: 100%;
    background-color: #ffffff;
    position: absolute;
    bottom: 0;
    left: 0;
}
#nav button{
    display: none !important;
    height: 30px;
    width: 30px;
    z-index: 999;
    transform: rotate(90deg);
}
.opened button .first{
    transform: rotate(45deg);
    position: absolute;
    left:40%
}
.opened button{
    position: relative;
}
.opened button .last{
    transform: rotate(-45deg);
    position: absolute;
    left:40%
}
.opened button .middle{
    display: none;
}
.toggle{
    background-color: white;
    width: 3px;
    height: 100%;
    transition: all .3s ease;
}
.scrolled-down{
    background-color: rgba(255, 255, 255, 0.776) !important;
}
@media screen and (max-width: 950px){
    #nav button{
        display: flex !important;
    }
    .opened{
        box-shadow: none;
    }
    .navigation{
        display: none !important;
    }
    .opened .navigation{
        display: flex !important;
        position: absolute;
        top: 100px;
        width: 100%;
        background-color: inherit;
        flex-direction: column;
        padding: 1em 0;
        z-index: 999;
    }
    .opened .navigation a{
        margin: 1em 0;
    }
}
</style>