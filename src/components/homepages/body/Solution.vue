<template>
    <div class="solution-container relative">
        <div class="text-title flex justify-center items-center text-center">
            <div class="header-text lg:hidden">
                <p> ออกแบบ Solution </p>
                <p>ที่กำหนดเองได้สำหรับธุรกิจของคุณ</p>
            </div>
            <p class="header-text hidden lg:block">ออกแบบ Solution ที่กำหนดเองได้สำหรับธุรกิจของคุณ</p>
        </div>
        <div class="card-container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <div v-for="(item, index) in data" :key="index" class="card borderWB180">
                <div class="img-box">
                    <img :src="item.img" alt="Card Image" class="card-img" />
                </div>
                <h3 class="card-title">{{ item.title }}</h3>
                <p class="card-description">{{ item.desp }}</p>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import img1 from "@/../public/images/solution/solution-img1.svg";
import img2 from "@/../public/images/solution/solution-img2.svg";
import img3 from "@/../public/images/solution/solution-img3.svg";
import img4 from "@/../public/images/solution/solution-img4.svg";
import img5 from "@/../public/images/solution/solution-img5.svg";
import img6 from "@/../public/images/solution/solution-img6.svg";

const data = [
    {
        title: "สร้างเอกสาร",
        desp: 'สร้างเอกสารออนไลน์และปรับแต่งฟิลด์ต่าง ๆ ได้ตามความต้องการส่งเอกสารได้อย่างง่ายดายเพียง 3 ขั้นตอน "สร้าง ส่ง เซ็น"',
        img: img1
    },
    {
        title: "ระบบยืนยันตัวตน e-KYC",
        desp: 'เพิ่มความน่าเชื่อถือในการทำธุรกรรมผ่านระบบ ยืนยันตัวตนก่อนเซ็นเอกสารผ่าน Creden eKYC',
        img: img2
    },
    {
        title: "อากรแสตมป์อิเล็กทรอนิกส์",
        desp: 'บริการอากรแสตมป์อิเล็กทรอนิกส์ผ่านระบบ Creden eSign ให้ผู้ใช้สามารถดำเนินการแนบอากรแสตมป์เพื่อการทำธุรกรรมให้เสร็จสมบูรณ์',
        img: img3
    },
    {
        title: "เทมเพลตเอกสาร",
        desp: 'สามารถสร้างเทมเพลตเอกสารผ่านระบบ Creden eSign เพื่อใช้งานเอกสารรูปแบบเดิมได้ในภายหลัง',
        img: img4
    },
    {
        title: "การจัดการผู้ใช้งาน",
        desp: 'ตั้งค่าเซ็นลำดับก่อนหลังได้ตาม workflow การเดินเอกสารของบริษัทพร้อมด้วยการติดตามสถานะของเอกสารแบบเรียลไทม์',
        img: img5
    },
    {
        title: "อัตลักษณ์ขององค์กร",
        desp: 'ปรับแต่งข้อความเชิญ เพิ่มโลโก้บริษัทให้เหมาะสมกับองค์กรหรือเลือกกล่องข้อมูลที่ใช้งานได้หลากหลายรูปแบบ',
        img: img6
    },

];
</script>
  
<style scoped>
.solution-container {
    position: relative;
    padding: 24px 16px;
    width: 100vw;

}

.solution-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background: url('@/../public/images/bg/bg-banner.jpeg');
    background-position: center;
    background-size: cover;
    opacity: 0.3;
    z-index: -1;
    pointer-events: none;
    filter: blur(10px);
    transform: scale(1.1);
}

.solution-container::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: rgba(255, 255, 255, 0.3);
    pointer-events: none;
    z-index: -1;
}

.header-text {
    font-size: var(--txt-headline4-size);
    font-weight: var(--txt-headline-weight);
    line-height: 40px;
    color: var(--Primary-Main);
    margin-bottom: 16px;
}

.card-container {
    display: grid;
    gap: 16px;
}

.card {
    display: flex;
    height: auto;
    padding: 16px;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    align-self: stretch;
    background-color: var(--Light-4);
}

.img-box {
    display: flex;
    padding: 35px 16.63px 35px 17.609px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    margin-bottom: 16px;
}

.card-img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
}

.card-title {
    font-size: var(--txt-headline4-size);
    font-weight: var(--txt-headline-weight);
    line-height: 40px;
    color: var(--Primary-Main);
    margin-bottom: 8px;
}

.card-description {
    font-size: var(--txt-label1-size);
    font-weight: var(--txt-label-weight);
    line-height: 28px;
    color: var(--Darker-0);
}

/* md */
@media (min-width: 765px) {
    .header-text {
        font-size: var(--txt-display4-size);
        font-weight: var(--txt-display-weight);
        line-height: 52px;
        color: var(--Primary-Main);
        margin-bottom: 40px;
    }

    .card {
        display: flex;
        height: 436px;
        padding: 16px;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        align-self: stretch;
        background-color: var(--Light-4);
    }

    .img-box {
        display: flex;
        padding: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 16px;
    }

    .card-title {
        font-size: var(--txt-headline4-size);
        font-weight: var(--txt-headline-weight);
        line-height: 40px;
        color: var(--Primary-Main);
    }

    .card-description {
        font-size: var(--txt-label1-size);
        font-weight: var(--txt-label-weight);
        line-height: 28px;
        color: var(--Darker-0);
    }
}

/* lg */
@media (min-width: 1024px) {
    .solution-container {
    position: relative;
    padding: 24px 96px;
    width: 100vw;

}
    .header-text {
        font-size: var(--txt-display3-size);
        font-weight: var(--txt-display-weight);
        line-height: 64px;
        color: var(--Primary-Main);
        margin-bottom: 40px;
    }
    .card {
        display: flex;
        height: auto;
        padding: 16px;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        align-self: stretch;
        background-color: var(--Light-4);
    }

    .img-box {
        display: flex;
        padding: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 16px;
    }

    .card-title {
        font-size: var(--txt-headline4-size);
        font-weight: var(--txt-headline-weight);
        line-height: 40px;
        color: var(--Primary-Main);
    }

    .card-description {
        font-size: var(--txt-label1-size);
        font-weight: var(--txt-label-weight);
        line-height: 28px;
        color: var(--Darker-0);
    }
}
</style>
