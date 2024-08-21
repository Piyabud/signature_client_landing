<template>
  <div class="customer-container">
    <div class="customer-title">
      ลูกค้าที่ใช้บริการ Creden eSign
    </div>
    <div class="customer-logos-container">
      <div class="logos-grid">
        <div v-for="(imgPath, index) in imagePath" :key="index" class="logo-item">
          <img :src="imgPath" :alt="'Item ' + (index + 1)" class="logo-img" />
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 1.125rem;

  /* Responsive styles */
  @media (min-width: 768px) {
    gap: 2.5rem;
    padding: 2.5rem 2.0625rem;
  }

  @media (min-width: 1024px) {
    padding: 2.5rem 6rem;
  }
}

.customer-title {
  width: 100%;
  font-size: var(--headline4);
  color: var(--Primary-Main);
  font-weight: 700;

  /* Responsive styles */
  @media (min-width: 768px) {
    font-size: var(--display3);
    font-weight: 600;
  }
}

.customer-logos-container {
  max-width: 1280px;
  margin: 0 auto;
}

.logos-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  justify-items: center;
  align-items: center;

  /* Responsive styles */
  @media (min-width: 768px) {
    gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(9, 1fr);
  }
}

.logo-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 2rem;

  /* Responsive styles */
  @media (min-width: 768px) {
    width: 3.25rem;
  }

  @media (min-width: 1024px) {
    width: 9.875rem;
  }
}

.logo-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
