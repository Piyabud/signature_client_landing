<template>
    <nav class="w-full h-[64px] lg:h-24 bg-[var(--Light-4)] lg:bg-[#95D7F7] px-6 lg:p-[12px_30px] xl:p-[12px_80px]">
        <div
            class="bg-[var(--Light-4)] w-full h-full flex flex-row justify-between lg:flex lg:justify-between lg:px-6 lg:items-center lg:gap-5 lg:border-2 lg:border-[rgba(92,184,255,0.50)] lg:rounded-full">
            <!-- GRP - 1 -->
            <div class="w-[150px] h-[64px] lg:w-[180px] lg:h-10 flex justify-center items-center cursor-pointer">
                <img :src="credenLogo" alt="credenLogo" class="w-[127px] h-[28] cursor-pointer" />
            </div>
            <!-- GRP - 2 -->
            <ul class=" hidden lg:flex justify-center items-center gap-2 xl:gap-5">
                <button class=" p-[4px_8px] xl:p-[8px_12px] text-label4 font-500 text-[var(--Darker-1)] xl:text-label3 whitespace-nowrap">หน้าหลัก</button>
                <div class="relative" @click="toggleDropdown">
                    <button class="flex gap-x-3 place-items-center">
                        <span class=" p-[4px_8px] xl:p-[8px_12px] text-label4 font-500 text-[var(--Darker-1)] xl:text-label3 whitespace-nowrap">กลุ่มผู้ใช้งาน</span>
                        <font-awesome-icon icon="chevron-down" />
                    </button>
                    <div v-if="isDropdownOpen"
                        class="absolute p-6 right-[-24rem] top-[3.5rem] w-[600px] bg-white rounded-md shadow-lg z-50 grid grid-cols-2 gap-10">
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
                            <div v-for="(item, index) in additionalUserGroup1" :key="'additionalUserGroup1-' + index" class="text-title3 font-600 text-[var(--Primary-Main)] flex flex-row gap-4 justify-start items-center py-2">
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
                            <div v-for="(item, index) in additionalUserGroup2" :key="'additionalUserGroup2-' + index" class="text-title3 font-600 text-[var(--Primary-Main)] flex flex-row gap-4 justify-start items-center py-2 ">
                                <a :href="item.link">{{ item.text }}</a>
                                <font-awesome-icon icon="chevron-right" />
                            </div>
                        </div>
                    </div>


                </div>
                <button class=" p-[4px_8px] xl:p-[8px_12px] text-label4 font-500 text-[var(--Darker-1)] xl:text-label3 whitespace-nowrap">ราคา</button>
                <button class=" p-[4px_8px] xl:p-[8px_12px] text-label4 font-500 text-[var(--Darker-1)] xl:text-label3 whitespace-nowrap">คู่มือการใช้งาน</button>
                <button class=" p-[4px_8px] xl:p-[8px_12px] text-label4 font-500 text-[var(--Darker-1)] xl:text-label3 whitespace-nowrap">บทความ</button>
                <button class=" p-[4px_8px] xl:p-[8px_12px] text-label4 font-500 text-[var(--Darker-1)] xl:text-label3 whitespace-nowrap">ติดต่อเรา</button>
            </ul>
            <!-- GRP-3 -->
            <div class="hidden text-label3 font-500 lg:flex justify-center items-center gap-2">
                <button v-if="isThai" class="p-1 flex place-items-center " @click="switchLang()">
                    <img :src="thaiFlag" alt="thaiFlag" class="w-[24px] xl:w-[38px] rounded" />
                    <div class=" p-[4px_8px] xl:p-[8px_12px] text-label4 font-500 text-[var(--Darker-1)] xl:text-label3 whitespace-nowrap">ภาษาไทย</div>
                </button>
                <button v-if="!isThai" class="p-1 flex place-items-center " @click="switchLang()">
                    <img :src="engFlag" alt="engFlag" class="w-[24px] xl:w-[38px] rounded" />
                    <div class="p-[4px_8px] xl:p-[8px_12px] text-label4 font-500 text-[var(--Darker-1)] xl:text-label3 whitespace-nowrap">English</div>
                </button>
                <button class=" p-[4px_8px] xl:p-[8px_12px] text-label4 font-500 text-[var(--Darker-1)] xl:text-label3 whitespace-nowrap">เข้าสู่ระบบ</button>
                <button class="p-[4px_8px] xl:p-[8px_12px] text-label4 font-500 xl:text-label3 bg-[var(--Secondary-Main)] text-[var(--Primary-Darker)] rounded-2xl ">
                    สมัครสมาชิกฟรี
                </button>
            </div>
            <!-- Mobile Menu -->
            <div class="grid grid-cols-1 justify-items-center place-items-center lg:hidden cursor-pointer"
                @click="toggleMenuOpen">
                <font-awesome-icon icon="bars" class="h-8" />
            </div>
        </div>

        <transition name="slide">
            <div v-if="isMenuOpen" class="fixed top-0 right-0 w-[90%] h-full bg-gray-700 p-4 z-50">
                <button @click="toggleMenuOpen" class="text-white mb-4">
                    Close
                </button>
                <div class="space-y-4">
                    <a href="#" class="block text-white">Home</a>
                    <a href="#" class="block text-white">About</a>
                    <a href="#" class="block text-white">Contact</a>
                    <div class="grid grid-cols-2 gap-4">
                        <select class="p-2 rounded-md">
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <select class="p-2 rounded-md">
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>
                </div>
            </div>
        </transition>
    </nav>
</template>


<script setup>
import { ref } from "vue";
import credenLogo from "@/../public/images/logo/creden-logo.png";
import thaiFlag from "@/../public/images/icons/thai-flag.avif";
import engFlag from "@/../public/images/icons/eng-flag.png";

const isMenuOpen = ref(false);
const isThai = ref(true);
const isDropdownOpen = ref(false);

const userGroup1 = [
    { text: 'ฝ่ายขายและการตลาด', link: '#' },
    { text: 'ฝ่ายทรัพยากรบุคคล', link: '#' },
    { text: 'ฝ่ายบัญชี', link: '#' },
    { text: 'ฝ่ายกฎหมาย', link: '#' },
    { text: 'ฝ่ายบริการลูกค้า', link: '#' },
];

const userGroup2 = [
    { text: 'การเช่าหรือซื้อขายอสังหาริมทรัพย์', link: '#' },
    { text: 'บริการทางการเงิน', link: '#' },
    { text: 'ประกันภัย', link: '#' },
    { text: 'ภาครัฐ', link: '#' },
    { text: 'สถานพยาบาล', link: '#' },
];

const additionalUserGroup1 = [
    { text: 'กลุ่มผู้ใช้งานทั้งหมด', link: '#' },
];

const additionalUserGroup2 = [
    { text: 'กลุ่มธุรกิจและอุตสาหกรรมทั้งหมด', link: '#' },
];

const toggleMenuOpen = () => {
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

.slide-enter-active {
    transition-delay: 1s;
    transition: transform 5s ease-out;
}

.slide-leave-active {
    transition: transform 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.slide-enter {
    transform: translateX(100%);
}

.slide-leave-to {
    transform: translateX(100%);
}</style>
