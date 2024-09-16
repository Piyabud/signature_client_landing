<template>
    <div class="support-box flex flex-col gap-[16px] md:gap-[40px]">
        <div class="text-title flex flex-col justify-center items-center text-center">
            <p class="lg:hidden">จัดการขั้นตอนการทำงานของคุณ</p>
            <p class="lg:hidden">ให้เป็นเรื่องง่ายด้วย Creden eSign</p>
            <p class="hidden lg:block">จัดการขั้นตอนการทำงานของคุณ ให้เป็นเรื่องง่ายด้วย Creden eSign</p>
        </div>
        <div class="content-container flex flex-col justify-center items-center gap-[16px]">
            <div class="media-container relative">
                <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                    <video  :key="currentMedia" 
                            :src="currentMedia" 
                            autoplay 
                            loop 
                            muted 
                            ref="video" 
                            class="video-content mb-[8px] md:mb-0"
                            @mouseover="showControls" 
                            @mouseleave="hideControls">
                    </video>
                </transition>
                <p class="video-label">
                    {{ currentDescription }}
                </p>
            </div>
            <div class="According-container ">
                <div v-for="(item, index) in data" :key="index" class="accordion-item"
                    :class="{ 'borderYB45 ': activeIndex === index }">
                    <div @click="toggleAccordion(index)" class="accordion-header cursor-pointer">
                        <h3 :class="{ 'gradient-text ': activeIndex === index }">{{ item.title }}</h3>
                    </div>
                    <div :class="{ 'accordion-content open': activeIndex === index, 'accordion-content': activeIndex !== index }">
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>
       </div>

    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const media01 = new URL('@/../public/video/support-01.mp4', import.meta.url).href;
const media02 = new URL('@/../public/video/support-02.mp4', import.meta.url).href;
const media03 = new URL('@/../public/video/support-03.mp4', import.meta.url).href;
const media04 = new URL('@/../public/video/support-04.mp4', import.meta.url).href;
const media05 = new URL('@/../public/video/support-05.mp4', import.meta.url).href;


interface AccordionItem {
    title: string;
    description: string;
    media: string;
}

const data: AccordionItem[] = [
    {
        title: 'ฝ่ายขายและการตลาด',
        description: 'ประหยัดเวลาดำเนินงานด้านเอกสาร สามารถเสนอขายได้อย่างรวดเร็ว  และเพิ่มโอกาสในการเข้าถึงลูกค้ามากขึ้น',
        media: media01
    },
    {
        title: 'ฝ่ายทรัพยากรบุคคล',
        description: 'ขจัดความยุ่งยากด้านงานเอกสาร อาทิ เอกสารจ้างงาน เอกสารเงินเดือน ด้วยการเซ็นเอกสารออนไลน์',
        media: media02
    },
    {
        title: 'ฝ่ายบัญชี',
        description: 'รองรับการเซ็นเอกสารแบบอิเล็กทรอนิกส์ทุกประเภทสามารถใช้ร่วมกับเอกสารการเงินและสัญญาต่าง ๆ ได้ ให้การทำงานมีประสิทธิภาพมากขึ้น',
        media: media03
    },
    {
        title: 'ฝ่ายกฏหมาย',
        description: 'การทำธุรกรรมเชื่อถือได้และมีความปลอดภัย มีผลทางกฎหมาย',
        media: media04
    },
    {
        title: 'ฝ่ายบริการลูกค้า',
        description: 'ลดขั้นตอนการทำงานที่ยุ่งยากที่เกี่ยวข้องกับงานเอกสารทั้งหมด เพียงโซลูชันเดียว',
        media: media05
    }
];

// Active accordion index - Set to 0 for the first accordion to be open by default
const activeIndex = ref<number | null>(0);

// Media state
const currentMedia = ref<string>(data[0].media);
const currentDescription = ref<string>(data[0].title);

// Toggle accordion function
const toggleAccordion = (index: number) => {
    activeIndex.value = activeIndex.value === index ? null : index;

    // Set media and description according to the opened accordion
    if (activeIndex.value !== null) {
        currentMedia.value = data[activeIndex.value].media;
        currentDescription.value = data[activeIndex.value].title;
    }
};

// Show controls on hover
const showControls = () => {
    const video = document.querySelector("video");
    if (video) {
        video.controls = true;
    }
};

// Hide controls when not hovering
const hideControls = () => {
    const video = document.querySelector("video");
    if (video) {
        video.controls = false;
    }
};

// Transition hooks for fade effect
const beforeEnter = (el: HTMLElement) => {
    el.style.opacity = '0';
    
};

const enter = (el: HTMLElement, done: () => void) => {
    el.offsetHeight;
    el.style.transition = 'opacity 0.5s';
    el.style.opacity = '1';
    done();
};

const leave = (el: HTMLElement, done: () => void) => {
    el.style.transition = 'opacity 0.5s';
    el.style.opacity = '0';
    done();
};
</script>

<style scoped>
.support-box {
    padding: 24px 18px;
}

.text-title {
    font-size: var(--txt-headline4-size);
    font-weight: var(--txt-headline-weight);
    color: var(--Primary-Main);
}

.accordion-item {
    padding: 16px;
}

.accordion-header {
    font-size: var(--txt-headline4-size);
    font-weight: var(--txt-headline-weight);
    color: var(--Darker-0);
    cursor: pointer;
}

.accordion-content {
    overflow: hidden;
    height: 0;
    transition: height 0.3s ease, padding 0.3s ease;
    padding-top: 0;
    font-size: var(--txt-label1-size);
    font-weight: var(--txt-label-weight);
    color: var(--Darker-1);
}

.accordion-content.open {
    height: auto;
    padding-top: 10px;
}

.video-content {
    width: 600px;
    height: auto;
}

/* Fade transition styles */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}

.video-label{
    font-size: var(--txt-title1-size);
    font-weight: var(--txt-title-weight);
    color: var(--Light-4);
    text-shadow: 0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16);
    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;
    padding: 0.5rem;

}
.media-container{
    display: grid;
    place-items: center;
}

@media (min-width: 765px) { 
    .support-box {
        padding: 40px 33px;
    }

    .content-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr); 
        gap: 16px;
        align-items: start;
    }

    .media-container{
        display: flex;
        justify-content: flex-start;
        align-items: start;
    }

    .text-title{
        font-size: var(--txt-display4-size);
        font-weight: var(--txt-display-weight);
        color: var(--Primary-Main);
    }
}

@media (min-width: 1024px) { 
    .support-box {
        padding: 40px 96px;
    }
    .text-title{
        font-size: var(--txt-display3-size);
        font-weight: var(--txt-display-weight);
        color: var(--Primary-Main);
    }
    .media-container{
        display: flex;
        justify-content:flex-end;
        align-items: end;
    }
    .content-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr); 
        gap: 24px;
        align-items: start;
    }
    .video-label{
        left: 1.5rem;
    }
}
</style>
  