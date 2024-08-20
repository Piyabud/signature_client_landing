<template>
  <div
    class="flex justify-center items-center flex-col gap-y-4 md:gap-y-[40px] px-[18px] py-[40px] md:px-[33px] md:py-[40px] lg:px-[96px]"
  >
    <div
      class="w-100 text-headline4 md:text-display3 text-[--Primary-Main] font-700 md:font-6000"
    >
      ลูกค้าที่ใช้บริการ Creden eSign
    </div>
    <div class="container mx-auto">
      <div
        class="grid grid-cols-6 lg:grid-cols-9 gap-y-4 gap-x-4 md:gap-y-[40px] justify-items-center items-center"
      >
        <div
          v-for="(imgPath, index) in imagePath"
          :key="index"
          class=" flex justify-center items-center h-[64px] w-[32px] md:w-[52px] lg:w-[158px]"
        >
          <img
            :src="imgPath"
            :alt="'Item ' + (index + 1)"
            class="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const pathFile = "../../public/images/customers/";

const imagePath = {
  img1: pathFile + "tai.png",
  img2: pathFile + "kasotosal.png",
  img3: pathFile + "pea.png",
  img4: pathFile + "pattanateedin.png",
  img5: pathFile + "thaibispa.png",
  img6: pathFile + "huasengheng.png",
  img7: pathFile + "BLA.png",
  img8: pathFile + "amway.png",
  img9: pathFile + "giffarine.png",
  img10: pathFile + "quickrissing.png",
  img11: pathFile + "SAM.png",
  img12: pathFile + "tvdirect.png",
  img13: pathFile + "Wisesight.png",
  img14: pathFile + "paysolution.png",
  img15: pathFile + "tarad.png",
  img16: pathFile + "AP.png",
  img17: pathFile + "cantralpattana.png",
  img18: pathFile + "NRCT.png",
};
</script>

<style scoped></style>
