<template>
    <div class="bg-[#C7E7FF]">
        <Navbar />
    </div>
    <div class="">
        sdsdsds
    </div>
    <div class="">
        <FooterComponent />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '@/components/homepages/header/NavTop.vue';
import FooterComponent from '@/components/homepages/FooterComponent.vue';

const route = useRoute();
onMounted(() => {
    if (route.path === '/contact') {
        document.title = 'Creden | Contact';
    }
});

watch(route, (newRoute) => {
    if (newRoute.path === '/contact') {
        document.title = 'Creden | Contact';
    } else {
        document.title = 'Creden | eSign';
    }
});

</script>

<style scoped></style>