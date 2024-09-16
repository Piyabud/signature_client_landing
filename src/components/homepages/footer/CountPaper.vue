<template>
  <div class="count-box">
    <div class="content-box flex flex-col justify-center items-center gap-[14px] md:gap-[18px]">
      <div class="title flex justify-center items-center">
        <p>คุณกำลังช่วยให้ประหยัดกระดาษได้</p>
      </div>
      <div class="total flex flex-row justify-center items-center gap-[8px]">
        <p class="paper-count">xxx,xxx แผ่น</p>
      </div>
      <div class="date ">
        <p class="">วันที่อัปเดตล่าสุด : DD / MM / YYYY</p>
      </div>
    </div>
  </div>
  <div class="bg-box"></div>
</template>

<script setup>
</script>

<style scoped>
  .count-box{
    padding: 24px 18px;
  }

.bg-box {
  position: relative;
  width: 100vw;
  height: 150px;
}

.bg-box::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/../public/images/footer/bg-footer.png');
  background-color: var(--Light-4);
  background-position: contain;
  background-size: cover;
  z-index: -1;
  pointer-events: none;
}

.date {
  padding: 4px 8px;
  width: fit-content;
  background-color: var(--Primary-Subtle);
  border-radius: 8px;
  font-size: var(--txt-title3-size);
  font-weight: var(--txt-title-weight);
  line-height: 24px;
  color: var(--Primary-Main);
}

.paper-count,
.title {
  color: var(--Darker-1);
  font-size: var(--txt-headline4-size);
  font-weight: var(--txt-headline-weight);
}


/* md */
@media (min-width: 765px) {
  .count-box{
    padding: 40px 33px;
  }
  .bg-box {
    height: 300px;
  }

  .paper-count,
  .title {
    color: var(--Darker-1);
    font-size: var(--txt-display4-size);
    font-weight: var(--txt-display-weight);
  }
}

/* lg */
@media (min-width: 1024px) {
  .count-box{
    padding: 40px 69px;
  }
  .bg-box {
    height: 400px;
  }

  .paper-count,
  .title {
    color: var(--Darker-1);
    font-size: var(--txt-display4-size);
    font-weight: var(--txt-display-weight);
  }
}
</style>
