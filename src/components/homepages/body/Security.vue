<template>
    <div class="security-box flex flex-col gap-[16px] md:gap-[40px]">
        <div class="text-title flex justify-center items-center text-center">
            <p> มั่นใจในเรื่องของความปลอดภัยได้เพราะเรามี</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <div v-for="(item, index) in data" :key="index"
                class="card borderYB45 flex flex-col items-center justify-evenly md:flex-row lg:flex-col">
                <img :src="item.img" alt="Security Image" class="w-32 h-32 object-cover" />
                <div class="gradient-text">
                    <div class="text-th  ">{{ item.th }}</div>
                    <div class="text-en  ">{{ item.en }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import img1 from "@/../public/images/security-image/security-img1.png";
import img2 from "@/../public/images/security-image/security-img2.png";
import img3 from "@/../public/images/security-image/security-img3.png";

const data = [
    {
        th: "การยืนยันตัวตนก่อนเซ็นเอกสาร",
        en: "electronic know your customer",
        img: img1
    },
    {
        th: "รักษาความปลอดภัยด้วย",
        en: "Blockchain Technology",
        img: img2
    },
    {
        th: "ระบบการประทับเวลาที่เชื่อถือได้",
        en: "e-Timestamping",
        img: img3
    }
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
.card {
    padding: 16px 16px;
}

.card>img {
    margin-bottom: 16px;
}



.security-box {
    padding: 24px 18px;
}

.text-title {
    font-size: var(--txt-headline4-size);
    font-weight: var(--txt-headline-weight);
    color: var(--Primary-Main)
}

.text-th {
    font-size: var(--txt-headline4-size);
    font-weight: var(--txt-headline-weight);
    text-align: center;
}

.text-en {
    font-size: var(--txt-headline4-size);
    font-weight: var(--txt-headline-weight);
    text-align: center;
}

/* md */
@media (min-width: 765px) {
    .card {
        padding: 16px 16px;
    }

    .card>img {
        margin-bottom: 0px;
    }

    .security-box {
        padding: 40px 33px;
    }

    .text-title {
        font-size: var(--txt-display4-size);
        font-weight: var(--txt-display-weight);
    }

    .text-th {
        font-size: var(--txt-headline3-size);
        font-weight: var(--txt-headline-weight);
    }

    .text-en {
        font-size: var(--txt-headline3-size);
        font-weight: var(--txt-headline-weight);
    }

}

/* lg */
@media (min-width: 1024px) {
    .card {
        padding: 48px 16px;
    }

    .card>img {
        margin-bottom: 16px;
    }

    .security-box {
        padding: 40px 96px;
    }

    .text-title {
        font-size: var(--txt-display3-size);
        font-weight: var(--txt-display-weight);
    }

    .text-th {
        font-size: var(--txt-headline4-size);
        font-weight: var(--txt-headline-weight);
    }

    .text-en {
        font-size: var(--txt-headline4-size);
        font-weight: var(--txt-headline-weight);
    }
}</style>
  