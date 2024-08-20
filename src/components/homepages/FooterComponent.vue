<template>
    <div class="mt-6 w-full bg-[var(--Primary-Main)] px-[18px] pb-[24px] flex flex-col gap-y-4
     md:flex-row md:gap-x-4 md:px-[33px] lg:px-[133px]
    ">
        <!-- HEAD LOGO -->
        <div class="md:hidden">
            <div class="flex flex-col justify-start items-start gap-4 pt-2">
                <img :src="credenLogoWhite" alt="creden Logo" class=" h-8 w-[143px]" />
                <div class="flex flex-row justify-start items-start gap-x-2">
                    <div v-for="(icon, index) in socialIcons" :key="index" class="w-6 h-6">
                        <a :href="icon.url" target="_blank" rel="noopener noreferrer">
                            <img :src="icon.src" :alt="icon.alt" class="w-full h-full">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- BODY -->
        <div class="text-body4 gap-x-2 flex flex-row justify-items-start items-start 
         md:grid md:grid-cols-4 md:pt-4 md:text-body3 lg:md:text-body2">
            <div class="hidden md:flex md:flex-col md:gap-4">
                <img :src="credenLogoWhite" alt="creden Logo" class=" h-8 w-[143px] " />
                <div class="flex flex-row justify-start items-start gap-x-2">
                    <div v-for="(icon, index) in socialIcons" :key="index" class="w-6 h-6">
                        <a :href="icon.url" target="_blank" rel="noopener noreferrer">
                            <img :src="icon.src" :alt="icon.alt" class="w-full h-full">
                        </a>
                    </div>
                </div>
            </div>
            <div class="flex flex-col flex-auto w-32 gap-y-4 ">
                <div class="text-title3 font-600">บริการ</div>
                <ul class="flex flex-col gap-y-2  font-400">
                    <li>Creden Data</li>
                    <li>Creden eSign</li>
                </ul>
            </div>
            <div class="flex flex-col flex-auto w-32 gap-y-4">
                <div class="text-title3 font-600">ราคา</div>
                <div class="flex flex-col gap-y-2  font-400">
                    <div class="">Free Package</div>
                    <div class="">Standard Package</div>
                    <div class="">Business Pro Package</div>
                    <div class="">Enterprise Package</div>
                    <div class="">FAQ</div>
                </div>
            </div>
            <div class="flex flex-col flex-auto w-64 md:w-auto gap-y-4">
                <div class="text-title3 font-600">ติดต่อเรา</div>
                <div class="flex flex-col gap-y-2 font-400">
                    <div class=" flex flex-row gap-x-2 md:gap-x-4 justify-start items-start">
                        <font-awesome-icon icon="envelope" color="var(--Light-4)" class="self-center" />
                        <div>sales_esign@creden.co</div>
                    </div>
                    <div class=" flex flex-row gap-x-2 md:gap-x-4 justify-start items-start">
                        <font-awesome-icon icon="phone" color="var(--Light-4)" class="self-center"/>
                        <div>095 374 8973</div>
                    </div>
                    <div class=" flex flex-row gap-x-2 md:gap-x-4 justify-start items-start">
                        <font-awesome-icon icon="location-dot" color="var(--Light-4)" class="self-start"/>
                        <div class="">CW Tower, 90 ถ. รัชดาภิเษก แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพมหานคร 10310 </div>
                    </div>
                    <div class=" flex flex-row gap-x-2 md:gap-x-4 justify-start items-start">
                        <font-awesome-icon icon="calendar" color="var(--Light-4)" class="self-start"/>
                        <div class="">เวลาทำการ: จันทร์ ถึง ศุกร์ 9.00 - 18.00</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- BOTTOM SECTION -->
    <div class="w-full bg-[var(--Primary-Main)]">
        <div class="w-100 h-[1px] bg-[var(--Light-4)]"></div>
    </div>
    <div class="w-full bg-[var(--Primary-Main)] p-4 flex flex-col gap-y-4 justify-center items-center text-body4
    md:text-body2 md:flex-row md:justify-between md:px-[33px] xl:px-[176px]
    ">
        <div class="">© สงวนลิขสิทธิ์ 2564 ครีเดน เอเชีย จำกัด</div>
        <div class=" grid grid-cols-2 gap-x-4 justify-items-center items-center">
            <div class="">นโยบายความเป็นส่วนตัว</div>
            <div class="">ข้อตกลงในการใช้งาน</div>
        </div>
    </div>
</template>

<script setup>
import facebookIcon from "@/../public/images/icons/facebook.svg";
import lineIcon from "@/../public/images/icons/line.svg";
import linkedinIcon from "@/../public/images/icons/linkedin.svg";
import credenLogoWhite from "@/../public/images/logo/creden-white-text.svg";

const socialIcons = [
    { src: facebookIcon, alt: "Facebook Icon", url: "https://www.facebook.com" },
    { src: lineIcon, alt: "Line Icon", url: "https://www.google.com" },
    { src: linkedinIcon, alt: "LinkedIn Icon", url: "https://www.linkedin.com/" },
];
</script>

<style scoped>
* {
    color: var(--Light-4);
}

/* sm */
@media (min-width: 640px) { }
/* md */
@media (min-width: 765px) { }
/* lg */
@media (min-width: 1024px) { }
/* xl */
@media (min-width: 1280px) { }
/* 2xl */
@media (min-width: 1536px) { }

</style>
