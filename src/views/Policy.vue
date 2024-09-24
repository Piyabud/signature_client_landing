<template>
    <div>
        <Navbar />
    </div>

    <!-- *** -->
    <ul>
    <!-- First Level Collapse Trigger with animation -->
    <li class="mt-2 p-[8px_12px] flex justify-between items-center cursor-pointer text-[var(--Darker-1)] hover:bg-[var(--Primary-Bg)] hover:text-[var(--Primary-Main)]"
        @click="toggleCollapse('coll-setting', 'icon-setting')" id="tour_profile">
      กลุ่มผู้ใช้งาน
      <span class="ml-2 transition-transform duration-300" :class="iconRotate('icon-setting')">
        <FontAwesomeIcon :icon="iconState['icon-setting']" id="icon-setting" />
      </span>
    </li>
  </ul>

    <transition name="collapse" @enter="enter" @leave="leave">
        <section v-if="collapseState['coll-setting']" class="overflow-hidden pl-4">
            <li v-for="(topic, index) in privacyPolicy.topics" :key="index">
                <a :href="'#topic-' + (index + 1)" class="text-blue-500 hover:underline">
                    {{ topic.title }}
                </a>
            </li>
        </section>
    </transition>
    <!-- *** -->


    <!-- Collapsible Menu สำหรับหัวข้อ สารบัญข้อตกลงในการใช้งาน -->
    <!-- <section>
        <div open class="bg-gray-100 border border-gray-300 rounded-md mb-4 p-4">
            <div class="cursor-pointer text-lg font-semibold">สารบัญข้อตกลงในการใช้งาน 111</div>
            <ul class="list-disc ml-6 mt-2">
                <li v-for="(topic, index) in privacyPolicy.topics" :key="index">
                    <a :href="'#topic-' + (index + 1)" class="text-blue-500 hover:underline">
                        {{ topic.title }}
                    </a>
                </li>
            </ul>
        </div>
    </section>

    <section>
        <div class="accordion">
            <div v-for="(topic, index) in privacyPolicy.topics" :key="index">
                <a :href="'#topic-' + (index + 1)" class="block p-4 bg-gray-200 mb-2 rounded-md">
                    {{ topic.title }}
                </a>
            </div>
        </div>
    </section> -->

    <div class="policy-container">
        <div class="policy-title text-center">นโยบายความเป็นส่วนตัว</div>
        <div class="content">
            <section>
                <div v-for="(paragraph, index) in privacyPolicy.header.paragraphs" :key="index" class="topic-section">
                    <p :class="{ 'indent-paragraph': index === 0 || index === 1 }" class="mb-4">
                        {{ paragraph }}
                    </p>
                </div>
            </section>
            <section v-for="(topic, topicIndex) in privacyPolicy.topics" :key="topicIndex" class="topic-section">
                <div class="policy-topics my-4 scroll-offset" :id="'topic-' + (topicIndex + 1)">
                    {{ topicIndex + 1 }}. {{ topic.title }}
                </div>
                <div v-for="(desc, descIndex) in topic.description" :key="descIndex">
                    <p class="indent-paragraph">{{ desc }}</p>
                </div>
                <div v-for="(content, contentIndex) in topic.contents" :key="contentIndex">
                    <div>{{ content.title }}</div>
                    <div v-for="(text, textIndex) in content.texts" :key="textIndex">
                        <ul v-if="typeof text === 'object'">
                            <li v-for="(listItem, listIndex) in text.list" :key="listIndex" class="indent-paragraph mb-4">{{
                                listItem }}</li>
                        </ul>
                        <p v-else class="mb-4 indent-paragraph">{{ text }}</p>
                    </div>
                </div>
            </section>
        </div>
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

// State for managing the collapse and icon rotation
const collapseState = ref({
  'coll-setting': false,
})

const iconState = ref({
  'icon-setting': faChevronDown,
})

// Toggle function for collapsing and icon rotation
const toggleCollapse = (collapseKey, iconKey) => {
  // Toggle the collapse state
  collapseState.value[collapseKey] = !collapseState.value[collapseKey]

  // Toggle the icon based on the collapse state
  iconState.value[iconKey] = collapseState.value[collapseKey] ? faChevronUp : faChevronDown
  console.log(iconState.value[iconKey]);
}

// Function for rotating the icon based on the collapse state
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

</script>
  
<style scoped>
.indent-paragraph {
    text-indent: 2em;
}

.policy-container {
    padding: 40px 18px;
}

.policy-title {
    font-size: var(--txt-display4-size);
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
    height: 800px;
    overflow-y: auto;
    padding: 10px;
    box-sizing: border-box;
}

.scroll-offset {
    scroll-margin-top: 16px;
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
    .policy-container {
        padding: 80px 248px;
    }

    .policy-title {
        font-size: var(--txt-display3-size);
        font-weight: var(--txt-display-weight);
        color: var(--Darker-0);
    }
}
</style>
  