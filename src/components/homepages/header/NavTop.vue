<template>
    <nav
        class="w-full h-[4rem] lg:h-24 px-6 lg:p-[0.75rem_1.875rem] xl:p-[0.75rem_5rem] bg-[var(--Light-4)] lg:bg-transparent">
        <div
            class="bg-[var(--Light-4)] w-full h-full flex flex-row justify-between lg:flex lg:justify-between lg:px-6 lg:items-center lg:gap-5 lg:border-2 lg:border-[rgba(92,184,255,0.50)] lg:rounded-full">
            <!-- GRP - 1 -->
            <div class="w-[9.375rem] h-[4rem] lg:w-[11.25rem] lg:h-10 flex justify-center items-center cursor-pointer">
                <img :src="credenLogo" alt="credenLogo" class="w-[7.9375rem] h-[1.75rem] cursor-pointer" />
            </div>
            <!-- GRP - 2 -->
            <ul class=" hidden lg:flex justify-center items-center gap-2 xl:gap-5">
                <button class="button-nav">หน้าหลัก</button>
                <div class="relative" @click="toggleDropdown">
                    <button class="flex place-items-center">
                        <span class="button-nav">กลุ่มผู้ใช้งาน</span>
                        <font-awesome-icon icon="chevron-down" />
                    </button>
                    <!-- กลุ่มผู้ใช้งาน PC -->
                    <div v-if="isDropdownOpen"
                        class="absolute p-6 right-[-24rem] top-[3.5rem] w-[37.5rem] bg-[var(--Light-4)] rounded-md shadow-lg z-50 grid grid-cols-2 gap-10">
                        <div class="grid grid-flow-row gap-2 whitespace-nowrap">
                            <div
                                class="text-title3 font-600 text-[var(--Darker-0)] pb-4 border-b border-[var(--Primary-Lighter)]">
                                กลุ่มผู้ใช้งาน
                            </div>
                            <div v-for="(item, index) in userGroup1" :key="'userGroup1-' + index">
                                <a :href="item.link"
                                    class="block py-2 text-gray-700 hover:bg-gray-100 text-title3 font-400 text-[var(--Darker-0)]">
                                    {{ item.text }}
                                </a>
                            </div>
                            <div v-for="(item, index) in additionalUserGroup1" :key="'additionalUserGroup1-' + index"
                                class="text-title3 font-600 text-[var(--Primary-Main)] flex flex-row gap-4 justify-start items-center py-2">
                                <a :href="item.link">{{ item.text }}</a>
                                <font-awesome-icon icon="chevron-right" />
                            </div>
                        </div>
                        <div class="grid grid-flow-row gap-2 whitespace-nowrap">
                            <div
                                class="text-title3 font-600 text-[var(--Darker-0)] pb-4 border-b border-[var(--Primary-Lighter)]">
                                กลุ่มธุรกิจและอุตสาหกรรม
                            </div>
                            <div v-for="(item, index) in userGroup2" :key="'userGroup2-' + index">
                                <a :href="item.link"
                                    class="block py-2 text-gray-700 hover:bg-gray-100 text-title3 font-400 text-[var(--Darker-0)]">
                                    {{ item.text }}
                                </a>
                            </div>
                            <div v-for="(item, index) in additionalUserGroup2" :key="'additionalUserGroup2-' + index"
                                class="text-title3 font-600 text-[var(--Primary-Main)] flex flex-row gap-4 justify-start items-center py-2 ">
                                <a :href="item.link">{{ item.text }}</a>
                                <font-awesome-icon icon="chevron-right" />
                            </div>
                        </div>
                    </div>
                </div>
                <button class="button-nav">ราคา</button>
                <button class="button-nav">คู่มือการใช้งาน</button>
                <button class="button-nav">บทความ</button>
                <button class="button-nav">ติดต่อเรา</button>
            </ul>
            <!-- GRP-3 -->
            <div class="hidden text-label3 font-500 lg:flex justify-center items-center gap-2">
                <button v-if="isThai" class="switch-lang-btn" @click="switchLang">
                    <img :src="thaiFlag" alt="thaiFlag" class="img-switch-lang" />
                    <div class="button-nav">ภาษาไทย</div>
                </button>
                <button v-if="!isThai" class="switch-lang-btn" @click="switchLang">
                    <img :src="engFlag" alt="engFlag" class="img-switch-lang" />
                    <div class="button-nav">English</div>
                </button>
                <button class="button-nav">เข้าสู่ระบบ</button>
                <button
                    class="p-[0.25rem_0.5rem] xl:p-[0.5rem_0.75rem] text-label4 font-500 xl:text-label3 bg-[var(--Secondary-Main)] text-[var(--Primary-Darker)] rounded-2xl">
                    สมัครสมาชิกฟรี
                </button>
            </div>
            <!-- Mobile Menu -->
            <div class="grid grid-cols-1 justify-items-center place-items-center lg:hidden cursor-pointer"
                @click="toggleMenuOpen">
                <font-awesome-icon icon="bars" class="h-8 text-[var(--Primary-Main)]" />
            </div>
        </div>
        <div class="box-shadow-mobile" v-if="isShadowVisible"></div>
        <!-- Menu for mobile -->
        <transition name="slide">
            <div class="mobile-menu" v-if="isMenuOpen">
                <div class="container-mobile">
                    <div class="body-burger-menu flex flex-col justify-between">
                        <div class="">
                            <div class="flex justify-between items-center mb-6">
                                <img :src="credenLogo" alt="creden logo" class="h-[2rem]">
                                <button @click="toggleMenuOpen">
                                    <font-awesome-icon icon="xmark" class="h-[1.5rem]" />
                                </button>
                            </div>
                            <div class="btn-menu space-y-2">
                                <div v-for="(item, index) in navMenu" :key="'navMenu-' + index">
                                    <a :href="item.link"
                                        class="block p-[8px_12px] text-label2 font-500 text-[var(--Darker-0)] hover:bg-[var(--Primary-Bg)] hover:text-[var(--Primary-Main)]">
                                        {{ item.text }}
                                    </a>
                                    <AccordingMenu v-if="item.text === 'หน้าหลัก'" class="space-y-2"/>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-[8px]">
                            <div class="btn-members-manage">เข้าสู่ระบบ</div>
                            <div class="btn-members-manage bg-[var(--Secondary-Main)]">สมัครสมาชิกฟรี</div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AccordingMenu from '@/components/homepages/header/AccordindMobileMenu.vue';


const credenLogo = new URL('@/../public/images/logo/creden-logo.png', import.meta.url).href;
const thaiFlag = new URL('@/../public/images/icons/thai-flag.avif', import.meta.url).href;
const engFlag = new URL('@/../public/images/icons/eng-flag.png', import.meta.url).href;


// Define types
interface NavItem {
    text: string;
    link: string;
}

interface UserGroupItem {
    text: string;
    link: string;
}

// Reactive states
const isMenuOpen = ref<boolean>(false);
const isShadowVisible = ref<boolean>(false);
const isThai = ref<boolean>(true);
const isDropdownOpen = ref<boolean>(false);

const navMenu: NavItem[] = [
    { text: 'หน้าหลัก', link: '#' },
    { text: 'ราคา', link: '#' },
    { text: 'คู่มือการใช้งาน', link: '#' },
    { text: 'บทความ', link: '#' },
    { text: 'ติดต่อเรา', link: '#' },
];

const userGroup1: UserGroupItem[] = [
    { text: 'ฝ่ายขายและการตลาด', link: '#' },
    { text: 'ฝ่ายทรัพยากรบุคคล', link: '#' },
    { text: 'ฝ่ายบัญชี', link: '#' },
    { text: 'ฝ่ายกฎหมาย', link: '#' },
    { text: 'ฝ่ายบริการลูกค้า', link: '#' },
];

const userGroup2: UserGroupItem[] = [
    { text: 'การเช่าหรือซื้อขายอสังหาริมทรัพย์', link: '#' },
    { text: 'บริการทางการเงิน', link: '#' },
    { text: 'ประกันภัย', link: '#' },
    { text: 'ภาครัฐ', link: '#' },
    { text: 'สถานพยาบาล', link: '#' },
];

const additionalUserGroup1: UserGroupItem[] = [
    { text: 'กลุ่มผู้ใช้งานทั้งหมด', link: '#' },
];

const additionalUserGroup2: UserGroupItem[] = [
    { text: 'กลุ่มธุรกิจและอุตสาหกรรมทั้งหมด', link: '#' },
];

// Methods
const toggleMenuOpen = () => {
    if (isMenuOpen.value) {
        setTimeout(() => {
            isShadowVisible.value = false;
        }, 450);
    } else {
        isShadowVisible.value = true;
    }
    isMenuOpen.value = !isMenuOpen.value;
};

const switchLang = () => {
    isThai.value = !isThai.value;
};

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<style scoped>
/* Add your styles here */
.slide-enter-active {
    transition-delay: 1s;
    transition: transform 5s ease-out;
}

.slide-leave-active {
    transition: transform 0.5s ease-out;
}

.slide-enter {
    transform: translateX(100%);
}

.slide-leave-to {
    transform: translateX(100%);
}

* {
    font-size: var(--label4);
    font-weight: 500;
    color: var(--Darker-1);
}

.button-nav {
    padding: 4px 8px;
    white-space: nowrap;
}

.img-switch-lang {
    width: 1.5rem;
    border-radius: 0.25rem;
}

.switch-lang-btn {
    padding: 0.25rem;
    display: flex;
    align-items: center;
}

.mobile-menu {
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    color: var(--Darker-1);
    margin-bottom: 1rem;
    z-index: 99;
    overflow: hidden;
}

.box-shadow-mobile {
    position: absolute;
    top: 0;
    left: 0;
    background: var(--Overlay-Gray);
    width: 100vw;
    height: 100vh;
    transition: opacity 4s ease-in-out; /* เพิ่ม transition */
    opacity: 1;
    z-index: 88;
}

.box-shadow-mobile.hidden {
    opacity: 0; /* ซ่อนโดยการปรับ opacity */
}

.container-mobile {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
}

.slide-leave-active .shadow-burger-menu {
    transform: scale(50);
    width: 100%;
}

.body-burger-menu {
    width: 80%;
    height: 100%;
    background-color: var(--Light-4);
    overflow: auto;
    padding: 24px 16px;
    transition-delay: 0.4s;
    position: absolute;
    right: 0;
    top: 0;
}

.slide-leave-active .body-burger-menu {
    transform: scale(20);
    width: 100%;
}

.btn-members-manage {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    padding: 8px 12px;
    border-radius: 19px;
    font-size: var(--txt-label2-size);
    font-weight: var(--txt-label-weight);
}

@media (min-width: 1280px) {
    .button-nav {
        padding: 8px 0.75rem;
        font-size: var(--label3);
    }

    .img-switch-lang {
        width: 1.5rem;
        border-radius: 0.25rem;
    }
}
</style>
