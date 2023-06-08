<template>
    <div class="h-100 w-100 position-relative d-flex flex-column">
        <Navbar></Navbar>
        <LandingPage></LandingPage>
        <ContactUs></ContactUs>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import LandingPage from '../components/LandingPage.vue';
import Footer from '../components/Footer.vue';
import ContactUs from '../components/ContactUs.vue';
export default {
    components:{
        Navbar,
        LandingPage,
        Footer,
        ContactUs,
    }
}
</script>

<style>

</style>