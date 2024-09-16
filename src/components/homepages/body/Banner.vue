<template>
<div class="banner-con" @touchstart="startTouch" @touchend="endTouch" @mousedown="startDrag" @mouseup="endDrag" @mousemove="drag">
    <div class="slider-wrapper">
      <div class="slider" :style="{ transform: `translateX(${-(currentPage - 1) * 100}%)` }">
        <!-- Page 1 -->
        <div class="page page1">
          <div class="content-box-1">
            <div class="title-text">
              <div class="text-darker0">ให้บริการ</div>
              <div class="txt-gradient">ลายเซ็นอิเล็กทรอนิกส์</div>
              <div class="text-darker0">ที่น่าเชื่อถือ</div>
            </div>
            <div class="description">
              <p class="text-[var(--Darker-1)]">จัดการขั้นตอนการทำงานให้เป็นเรื่องง่าย ด้วยระบบอนุมัติเอกสารออนไลน์
                ปลอดภัยด้วย Blockchain
                ได้ประสิทธิภาพและถูกกฏหมาย ตอบโจทย์การทำงานที่หลากหลาย</p>
            </div>
            <div class="button-grp flex items-center gap-[16px]">
              <button class="btn-1">สำหรับ 1 คน</button>
              <button class="btn-2">สำหรับธุรกิจ</button>
            </div>
          </div>
          <div class="img-box w-100 h-100 flex flex-col gap-[5.95px]">
            <div class="img-box-1 flex items-baseline justify-center gap-[8.51px]">
              <img :src="bannerEkyc" alt="bannerEkyc" class="banner-ekyc">
              <img :src="bannerProfile" alt="bannerProfile" class=" banner-profile">
              <img :src="bannerUpload" alt="bannerUpload" class="banner-upload">
            </div>
            <div class="img-box-2 items-start flex gap-[8.51px] ">
              <img :src="bannerDashboard" alt="bannerDashboard" class="banner-dashboard">
              <img :src="bannerTemplate" alt="bannerTemplate" class="banner-template">
            </div>
          </div>
        </div>

        <!-- Page 2 -->
        <div class="page page2">
          <div class="content-box-1">
            <div class="title-text">
              <div class="text-darker0">เริ่มต้นใช้งานระบบ</div>
              <div class="txt-gradient">ลายเซ็นอิเล็กทรอนิกส์</div>
              <div class="text-darker0">ใช้งานได้ ทุกที่ ทุกเวลา</div>
            </div>
            <div class="description">
              <p class="text-[var(--Darker-1)]">จัดการขั้นตอนการทำงานให้เป็นเรื่องง่าย ด้วยระบบอนุมัติเอกสารออนไลน์
                ปลอดภัยด้วย Blockchain ได้ประสิทธิภาพและถูกกฏหมาย
                ตอบโจทย์การทำงานที่หลากหลาย</p>
            </div>
            <div class="button-grp flex items-center gap-[16px]">
              <button class="btn-1">สำหรับ 1 คน</button>
              <button class="btn-2">สำหรับธุรกิจ</button>
            </div>
          </div>
          <div class="img-box w-100 h-100 flex flex-col gap-[5.95px]">
            <div class="img-box-1 flex items-baseline justify-center gap-[8.51px]">
              <img :src="bannerEkyc" alt="bannerEkyc" class="banner-ekyc">
              <img :src="bannerProfile" alt="bannerProfile" class="banner-profile">
              <img :src="bannerUpload" alt="bannerUpload" class="banner-upload">
            </div>
            <div class="img-box-2 items-start flex gap-[8.51px]">
              <img :src="bannerDashboard" alt="bannerDashboard" class="banner-dashboard">
              <img :src="bannerTemplate" alt="bannerTemplate" class="banner-template">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination-btns">
      <button @click="goToPage(1)" :class="{'active': currentPage === 1}" class='w-[8px] h-[8px] rounded-full'></button>
      <button @click="goToPage(2)" :class="{'active': currentPage === 2}" class='w-[8px] h-[8px] rounded-full'></button>
    </div>
  </div>
</template>



<script setup>
import bgBanner from "@/../public/images/bg/bg-banner.jpeg";
import bannerEkyc from "@/../public/images/banner/banner-ekyc.svg";
import bannerProfile from "@/../public/images/banner/banner-profile.svg";
import bannerUpload from "@/../public/images/banner/banner-upload.svg";
import bannerDashboard from "@/../public/images/banner/banner-dashboard.svg";
import bannerTemplate from "@/../public/images/banner/banner-template.svg";
import { ref } from 'vue';


const currentPage = ref(1);
let startX = 0;
let isDragging = false;


function goToPage(page) {
  currentPage.value = page;
}

function startTouch(event) {
  startX = event.touches[0].clientX;
}

function endTouch(event) {
  const endX = event.changedTouches[0].clientX;
  handleSwipe(endX);
}

function startDrag(event) {
  startX = event.clientX;
  isDragging = true;
}

function endDrag(event) {
  if (isDragging) {
    const endX = event.clientX;
    handleSwipe(endX);
    isDragging = false;
  }
}

function drag(event) {
  if (isDragging) {
    const deltaX = event.clientX - startX;
    const pageWidth = document.querySelector('.page').offsetWidth;
    document.querySelector('.slider').style.transform = `translateX(${-(currentPage - 1) * pageWidth + deltaX}px)`;
  }
}


function handleSwipe(endX) {
  const diffX = startX - endX;

  if (diffX > 50 && currentPage.value < 2) {
    currentPage.value++;
  }
  else if (diffX < -50 && currentPage.value > 1) {
    currentPage.value--;
  }
}

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
.banner-ekyc {
  width: 42.029px;
  height: 84.107px;
  flex-shrink: 0;
  border-radius: 8px;
}

.banner-profile {
  width: 173.186px;
  height: 96.216px;
  flex-shrink: 0;
  border-radius: 8px;
}

.banner-upload {
  display: flex;
  width: 141.296px;
  height: 78.544px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
}

.banner-dashboard {
  display: flex;
  width: 189.376px;
  height: 105.052px;
  border-radius: 8px;

}

.banner-template {
  display: flex;
  width: 134.545px;
  height: 74.85px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
}

.banner-con::after {
  content: "";
  position: absolute;
  /* display: block; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/../public/images/bg/bg-banner.jpeg');
  background-position: center;
  background-size: cover; /* เพิ่มขนาดพื้นหลังให้เต็ม */
  opacity: 0.3;
  z-index: -1;
  pointer-events: none;
}

.page1 {
  padding: 40px 18px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.content-box-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 24px;
}

.page2 {
  padding: 40px 18px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.title-text {
  font-size: var(--txt-display4-size);
  font-style: normal;
  font-weight: 600;
  line-height: 52px;
}

.txt-gradient {
  background: var(--Gradient-Primary, linear-gradient(147deg, #5CB8FF 6.95%, #0767B1 93.05%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-darker0 {
  color: var(--Darker-0);
}

.img-box-1 {
  scale: 0.9;
}

.btn-1 {
  color: var(--Light-4);
  display: flex;
  width: 132px;
  height: 40px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 19px;
  background: linear-gradient(147deg, #40F2FF 6.95%, #0076D1 93.05%);
}

.btn-1:hover {
  display: inline-flex;
  height: 40px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 19px;
  background: linear-gradient(147deg, #0076D1 6.95%, #004880 93.05%);
}

.btn-2 {
  display: flex;
  width: 132px;
  height: 40px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 19px;
  border: 1px solid var(--Gradient-Cyan-and-Blue, #40F2FF);
  background-color: var(--Light-4);
  background: linear-gradient(147deg, #40F2FF 6.95%, #0076D1 93.05%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btn-2:hover {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 19px;
  border: 1px solid var(--Gradient-Blue, #0076D1);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (min-width: 428px) {
  .title-text {
    font-size: var(--txt-display1-size);
    font-style: normal;
    font-weight: 600;
    line-height: 82px;
  }

  .banner-ekyc {
    width: 82.342px;
    height: 164.781px;
    flex-shrink: 0;
    border-radius: 8px;
  }

  .banner-profile {
    width: 339.304px;
    height: 188.505px;
    border-radius: 8px;
  }

  .banner-upload {
    width: 276.826px;
    height: 153.882px;
    border-radius: 8px;
  }

  .banner-dashboard {
    width: 371.024px;
    height: 205.817px;
    border-radius: 8px;

  }

  .banner-template {
    width: 263.6px;
    height: 146.645px;
    border-radius: 8px;
  }

  .page1 {
    padding: 40px 33px;
  }

  .img-box-1 {
    gap: 8.94px;
  }

  .img-box-2 {
    gap: 16.67px;
  }
}

@media (min-width: 837px) {

  .page1 {
    flex-direction: row;
    padding: 80px 96px;
  }

  .page2 {
    flex-direction: row;
    padding: 80px 96px;
  }

  .title-text {
    font-size: var(--txt-display1-size);
    font-style: normal;
    font-weight: var(--txt-title-weight);
    line-height: 82px;
  }

  .banner-ekyc {
    width: 92.434px;
    height: 184.742px;
    border-radius: 8px;
    object-fit: contain;
  }

  .banner-profile {
    width: 380.886px;
    height: 211.341px;
    border-radius: 8px;
    object-fit: contain;
  }

  .banner-upload {
    width: 310.751px;
    height: 172.523px;
    border-radius: 8px;
    object-fit: contain;
  }

  .banner-dashboard {
    width: 416.492px;
    height: 230.749px;
    border-radius: 8px;
    object-fit: contain;

  }

  .banner-template {
    width: 295.904px;
    height: 164.409px;
    border-radius: 8px;
    object-fit: contain;
  }

  .img-box-1 {
    gap: 10.03px;

  }

  .img-box-2 {
    gap: 22px;
  }
}

/* Basic styling for the slider */
.slider-wrapper {
  overflow: hidden;
  width: 100%;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.page {
  width: 100%;
  flex-shrink: 0;
}

.pagination-btns {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.pagination-btns button {
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
}

.pagination-btns button.active {
  background-color: #0076D1;
  color: white;
}

/* Add any additional styles for page1 and page2 */

.slider-wrapper {
  overflow: hidden;
  width: 100%;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.page {
  width: 100%;
  flex-shrink: 0;
}


</style>