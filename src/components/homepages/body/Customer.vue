<template>
    <div class="customer-container md:gap-y-[2.5rem] md:px-[2.0625rem] md:py-[2.5rem] lg:px-[6rem]
">
        <div class="customer-title  text-headline4 text-[--Primary-Main] font-700 md:font-6000 md:text-display3">
            ลูกค้าที่ใช้บริการ Creden eSign
        </div>
        <div class="customer-logos-container container mx-auto">
                    <div class="logos-grid  lg:grid-cols-9  md:gap-y-[40px]">
                    <div v-for="(imgPath, index) in imagePath" :key="index"
                    class="logo-item h-[4rem] w-[2rem] md:w-[3.25rem] lg:w-[9.875rem]">
                    <img :src="imgPath" :alt="'Item ' + (index + 1)" class="max-w-full max-h-full object-contain" />
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
const imagePath = [
    new URL('@/../public/images/customers/tai.png', import.meta.url).href,
    new URL('@/../public/images/customers/kasotosal.png', import.meta.url).href,
    new URL('@/../public/images/customers/pea.png', import.meta.url).href,
    new URL('@/../public/images/customers/pattanateedin.png', import.meta.url).href,
    new URL('@/../public/images/customers/thaibispa.png', import.meta.url).href,
    new URL('@/../public/images/customers/huasengheng.png', import.meta.url).href,
    new URL('@/../public/images/customers/BLA.png', import.meta.url).href,
    new URL('@/../public/images/customers/amway.png', import.meta.url).href,
    new URL('@/../public/images/customers/giffarine.png', import.meta.url).href,
    new URL('@/../public/images/customers/quickrissing.png', import.meta.url).href,
    new URL('@/../public/images/customers/SAM.png', import.meta.url).href,
    new URL('@/../public/images/customers/tvdirect.png', import.meta.url).href,
    new URL('@/../public/images/customers/Wisesight.png', import.meta.url).href,
    new URL('@/../public/images/customers/paysolution.png', import.meta.url).href,
    new URL('@/../public/images/customers/tarad.png', import.meta.url).href,
    new URL('@/../public/images/customers/AP.png', import.meta.url).href,
    new URL('@/../public/images/customers/cantralpattana.png', import.meta.url).href,
    new URL('@/../public/images/customers/NRCT.png', import.meta.url).href,
];
</script>

<style scoped>
* {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none; 
  -ms-user-select: none; 
}
img {
  user-select: none;
  pointer-events: none;
}
.customer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 40px;
    padding: 2.5rem 1.125rem;
    background-color: var(--Light-4);

}

.customer-title {
    width: full;
}

.logos-grid {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    justify-items: center;
    align-items: center;
    gap: 1rem; /* เท่ากับ 16px */
}

.logo-item {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
