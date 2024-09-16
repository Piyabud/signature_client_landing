<template>
    <div class="footer-container bg-[var(--Primary-Main)]">
        <!-- HEAD LOGO -->
        <div class="logo-grp">
            <div class="flex-col-start gap-4 pt-2">
                <img :src="credenLogoWhite" alt="creden Logo" class=" h-8 w-[9rem]" />
                <div class="flex-row-start gap-x-2">
                    <div v-for="(icon, index) in socialIcons" :key="index" class="w-6 h-6">
                        <a :href="icon.url" target="_blank" rel="noopener noreferrer">
                            <img :src="icon.src" :alt="icon.alt" class="w-full h-full">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- BODY -->
        <div class="text-body4 gap-x-2 flex-row-start body-container
                    md:text-body3 lg:md:text-body2">
            <div class="body-logo-grp hidden">
                <img :src="credenLogoWhite" alt="creden Logo" class=" h-8 w-[143px] " />
                <div class="flex-row-start gap-x-2">
                    <div v-for="(icon, index) in socialIcons" :key="index" class="w-6 h-6">
                        <a :href="icon.url" target="_blank" rel="noopener noreferrer">
                            <img :src="icon.src" :alt="icon.alt" class="w-full h-full">
                        </a>
                    </div>
                </div>
            </div>
            <div class="flex-col-auto w-32 gap-y-4 ">
                <div class="text-title3 font-600">บริการ</div>
                <ul class="flex flex-col gap-y-2  font-400">
                    <li>Creden Data</li>
                    <li>Creden eSign</li>
                </ul>
            </div>
            <div class="flex-col-auto w-32 gap-y-4">
                <div class="text-title3 font-600">ราคา</div>
                <div class="flex flex-col gap-y-2  font-400">
                    <div class="">Free Package</div>
                    <div class="">Standard Package</div>
                    <div class="">Business Pro Package</div>
                    <div class="">Enterprise Package</div>
                    <div class="">FAQ</div>
                </div>
            </div>
            <div class="flex-col-auto w-64 gap-y-4 md:w-auto ">
                <div class="text-title3 font-600">ติดต่อเรา</div>
                <div class="flex flex-col gap-y-2 font-400">
                    <div class="flex-row-start gap-x-2 md:gap-x-4">
                        <font-awesome-icon icon="envelope" color="var(--Light-4)" class="self-center" />
                        <div>sales_esign@creden.co</div>
                    </div>
                    <div class="flex-row-start gap-x-2 md:gap-x-4 ">
                        <font-awesome-icon icon="phone" color="var(--Light-4)" class="self-center" />
                        <div>095 374 8973</div>
                    </div>
                    <div class="flex-row-start gap-x-2 md:gap-x-4 ">
                        <font-awesome-icon icon="location-dot" color="var(--Light-4)" class="self-start" />
                        <div class="">CW Tower, 90 ถ. รัชดาภิเษก แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพมหานคร 10310 </div>
                    </div>
                    <div class="flex-row-start gap-x-2 md:gap-x-4 ">
                        <font-awesome-icon icon="calendar" color="var(--Light-4)" class="self-start" />
                        <div class="">เวลาทำการ: จันทร์ ถึง ศุกร์ 9.00 - 18.00</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- BOTTOM SECTION -->
    <div class="w-full bg-[var(--Primary-Main)]">
        <div class="w-100 h-[0.063rem] bg-[var(--Light-4)]"></div>
    </div>
    <div class="bottom-footer bg-[var(--Primary-Main)]">
        <div class="">© สงวนลิขสิทธิ์ 2564 ครีเดน เอเชีย จำกัด</div>
        <div class="privacy-policy">
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

.footer-container {
    width: 100%;
    padding-left: 1.125rem;
    padding-right: 1.125rem;
    padding-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.flex-col-start {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}

.flex-row-start {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
}

.flex-row-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.logo-grp {
    display: block;
}

.flex-col-auto {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
}

.bottom-footer {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
}

.privacy-policy {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    /* gap-x-4 */
    justify-items: center;
    align-items: center;
}


/* sm */
@media (min-width: 640px) {}

/* md */
@media (min-width: 765px) {
    .footer-container {
        flex-direction: row;
        gap: 1rem;
        padding-left: 2.0625rem;
        padding-right: 2.0625rem;
    }

    .logo-grp {
        display: none;
    }

    .body-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding-top: 1rem;
    }

    .body-logo-grp {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .bottom-footer {
        flex-direction: row;
        justify-content: space-between;
        padding-left: 2.0625rem;    /* 33px in rem */
        padding-right: 2.0625rem;   /* 33px in rem */
    }
}

/* lg */
@media (min-width: 1024px) {
    .footer-container {
        padding-left: 8.3125rem;
        padding-right: 8.3125rem;
    }
}

/* xl */
@media (min-width: 1280px) {
    .bottom-footer {
        padding-left: 11rem;    /* 176px in rem */
        padding-right: 11rem;   /* 176px in rem */
    }
}

/* 2xl */
@media (min-width: 1536px) {}
</style>
