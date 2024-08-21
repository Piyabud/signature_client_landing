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

<script setup>
const pathFile = "../../public/images/customers/";

const imagePath = [
    pathFile + "tai.png",
    pathFile + "kasotosal.png",
    pathFile + "pea.png",
    pathFile + "pattanateedin.png",
    pathFile + "thaibispa.png",
    pathFile + "huasengheng.png",
    pathFile + "BLA.png",
    pathFile + "amway.png",
    pathFile + "giffarine.png",
    pathFile + "quickrissing.png",
    pathFile + "SAM.png",
    pathFile + "tvdirect.png",
    pathFile + "Wisesight.png",
    pathFile + "paysolution.png",
    pathFile + "tarad.png",
    pathFile + "AP.png",
    pathFile + "cantralpattana.png",
    pathFile + "NRCT.png",
];
</script>

<style scoped>
.customer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
    padding: 2.5rem 1.125rem;

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
