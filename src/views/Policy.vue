<template>
    <div class=" bg-[#C7E7FF] ">
        <Navbar />
    </div>
    <div class="policy-content ">
        <ul class=" block lg:hidden">
            <li class="p-[16px_33px] flex justify-between items-center cursor-pointer collapse-mobile "
                @click="toggleCollapse('coll-setting', 'icon-setting')" id="tour_profile">
                สารบัญข้อตกลงในการใช้งาน
                <span class="ml-2 transition-transform duration-300" :class="iconRotate('icon-setting')">
                    <font-awesome-icon icon="chevron-down" class=" text-[var(--Primary-Main)] font-[900]" />
                </span>
            </li>
            <transition name="collapse" @enter="enter" @leave="leave">
                <section v-if="collapseState['coll-setting']" class=" collapse-body overflow-hidden bg-[var(--Light-4)]">
                    <li v-for="(topic, index) in privacyPolicy.topics" :key="index" class="collapse-items">
                        <!-- <a :href="'#topic-' + (index + 1)" @click.prevent="handleClick(index)"> -->
                            <button
                                @click="scrollToSection((index + 1) >= 9 && (index + 1) <= 11 ? 'topic-9' : 'topic-' + (index + 1))" class=" text-start">
                                {{ topic.title }}
                            </button>
                    </li>
                </section>
            </transition>
        </ul>
        <div class="policy-container">
            <div class="policy-title text-center">นโยบายความเป็นส่วนตัว</div>
            <div class=" lg:flex lg:flex-row lg:gap-4">
                <div class="hidden lg:block pc-policy">
                    <section class="flex flex-col gap-[16px]">
                        <div v-for="(topic, index) in privacyPolicy.topics" :key="index" class="collapse-items">
                            <button
                                @click="scrollToSection((index + 1) >= 8 && (index + 1) <= 11 ? 'topic-8' : 'topic-' + (index + 1))" class=" text-start">
                                {{ topic.title }}
                            </button>
                        </div>
                    </section>
                </div>
                <div class="content">
                    <section>
                        <div v-for="(paragraph, index) in privacyPolicy.header.paragraphs" :key="index"
                            class="topic-section">
                            <p :class="{ 'indent-paragraph': index === 0 || index === 1 }" class="mb-4">
                                {{ paragraph }}
                            </p>
                        </div>
                    </section>
                    <section v-for="(topic, topicIndex) in privacyPolicy.topics" :key="topicIndex" class="topic-section">
                        <div class="policy-topics my-4 " :id="'topic-' + (topicIndex + 1)">
                            {{ topicIndex + 1 }}. {{ topic.title }}
                        </div>
                        <div v-for="(desc, descIndex) in topic.description" :key="descIndex">
                            <p class="indent-paragraph">{{ desc }}</p>
                        </div>
                        <div v-for="(content, contentIndex) in topic.contents" :key="contentIndex">
                            <div>{{ content.title }}</div>
                            <div v-for="(text, textIndex) in content.texts" :key="textIndex">
                                <ul v-if="typeof text === 'object'">
                                    <li v-for="(listItem, listIndex) in text.list" :key="listIndex"
                                        class="indent-paragraph mb-4">{{
                                            listItem }}</li>
                                </ul>
                                <p v-else class="mb-4 indent-paragraph">{{ text }}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <button class="jump-to-top" @click="scrollToTop">
            ↑
        </button>
    </div>

    <FooterComponent />
</template>
  
<script setup>
import { ref } from 'vue'
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '@/components/homepages/header/NavTop.vue';
import FooterComponent from '@/components/homepages/FooterComponent.vue';
import { privacyPolicy } from '@/json/policy'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const collapseState = ref({
    'coll-setting': false,
})

const iconState = ref({
    'icon-setting': 'chevron-down',
})

const toggleCollapse = (collapseKey, iconKey) => {
    console.log(collapseKey);
    collapseState.value[collapseKey] = !collapseState.value[collapseKey]
    iconState.value[iconKey] = collapseState.value[collapseKey] ? 'chevron-up' : 'chevron-down'
}

const iconRotate = (iconKey) => {
    return collapseState.value['coll-setting'] ? 'rotate-180' : ''
}

const route = useRoute();
onMounted(() => {
    if (route.path === '/policy') {
        document.title = 'Creden | Policy';
    }
});

watch(route, (newRoute) => {
    if (newRoute.path === '/policy') {
        document.title = 'Creden | Policy';
    } else {
        document.title = 'Creden | eSign';
    }
});

// Animation for entering the section
const enter = (el) => {
    el.style.maxHeight = '0px'
    el.style.opacity = 0
    setTimeout(() => {
        el.style.maxHeight = el.scrollHeight + 'px'
        el.style.opacity = 1
    }, 0)
}

// Animation for leaving the section
const leave = (el) => {
    el.style.maxHeight = el.scrollHeight + 'px'
    setTimeout(() => {
        el.style.maxHeight = '0px'
        el.style.opacity = 0
    }, 0)
}

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

</script>
  
<style scoped>

.content {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none; 
  -ms-user-select: none; 
}

li {
    list-style: none;
}

.policy-content {
    background: linear-gradient(180deg, #C7E7FF 0%, #FFF 16.69%);
}

.indent-paragraph {
    text-indent: 2em;
}

.policy-container {
    padding: 40px 18px;
}

.policy-title {
    font-size: var(--txt-headline2-size);
    font-weight: var(--txt-display-weight);
    color: var(--Darker-0);
    margin-bottom: 24px;
}

.topic-section {
    font-size: var(--txt-body2-size);
    font-weight: var(--txt-body-weight);
    color: var(--Darker-1);
}

.policy-topics {
    font-size: var(--txt-label2-size);
    font-weight: var(--txt-label-weight);
    color: var(--Darker-0);
}

.content {
    width: 100%;
    height: 900px;
    overflow-y: auto;
    padding: 10px;
    box-sizing: border-box;
    /* border: 2px solid red */
}


.collapse-mobile {
    font-size: var(--txt-title3-size);
    font-weight: var(--txt-title-weight);
    color: var(--Darker-1);
    background: var(--Light-2);
    border-bottom: 1px solid var(--Darker-3);
    box-shadow: 0px 0px 1px 0px rgba(40, 41, 61, 0.08), 0px 0.5px 2px 0px rgba(96, 97, 112, 0.16);
}

.collapse-enter-active,
.collapse-leave-active {
    transition: all 0.3s ease;
}

.collapse-enter,
.collapse-leave-to {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
}

.collapse-body {
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.collapse-items {
    padding: 8px 12px;
    font-size: var(--txt-label2-size);
    font-weight: var(--txt-label-weight);
    color: var(--Darker-1);
    line-height: 22px;
    width: 100%;
}

.collapse-items:hover {
    color: var(--Primary-Main);
    background-color: var(--Primary-Bg);
    border-radius: 8px;
}


.content::-webkit-scrollbar {
    scrollbar-width: thin;
    width: 5px;
    height: 10px;
}

.content::-webkit-scrollbar-track {
    background-color: transparent;
}

.content::-webkit-scrollbar-thumb {
    background-color: var(--Blue-3);
    border-radius: 10px;
}

.pc-policy {
    padding: 24px 16px;
    border-radius: 20px;
    border: 1px solid var(--Light-0, #E6E6E6);
    box-shadow: 0px 0px 1px 0px rgba(40, 41, 61, 0.08), 0px 0.5px 2px 0px rgba(96, 97, 112, 0.16);
}

.jump-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;   
    background-color: var(--Primary-Lighter); 
    color: var(--Light-0); 
    border: none; 
    border-radius: 50%; 
    width: 50px;   
    height: 50px;  
    font-size: 24px;
    cursor: pointer; 
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transition: background-color 0.3s; 
}

.jump-to-top:hover {
    background-color:var(--Primary-Main); 
}


@media (min-width: 768px) {
    .policy-container {
        padding: 40px 33px;
    }

    .policy-title {
        font-size: var(--txt-display4-size);
        font-weight: var(--txt-display-weight);
        color: var(--Darker-0);
    }
}

@media (min-width: 1024px) {
    .content {
    user-select: text;       
    -webkit-user-select: text; 
    -moz-user-select: text;  
    -ms-user-select: text;  
  }


    .policy-container {
        padding: 0px 33px 40px 33px;
    }

    .policy-title {
        font-size: var(--txt-display3-size);
        font-weight: var(--txt-display-weight);
        color: var(--Darker-0);
    }

    .policy-content {
        display: flex;
        flex-direction: row;
        gap: 24px;
        padding: 80px 242px;
    }

    .pc-policy {
        flex: 2;
        height: fit-content;
    }

    .content {
        flex: 4;
    }


}
</style>
  