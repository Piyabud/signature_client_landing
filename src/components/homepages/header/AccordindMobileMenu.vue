<template>
    <ul>
        <!-- First Level Collapse Trigger with animation -->
        <li class="mt-2 p-[8px_12px] flex justify-between items-center cursor-pointer "
            @click="toggleCollapse('coll-setting', 'icon-setting')" id="tour_profile">
            กลุ่มผู้ใช้งาน
            <span class="ml-2 transition-transform duration-300" :class="iconRotate('icon-setting')">
                <font-awesome-icon :icon="iconState['icon-setting']" id="icon-setting" />
            </span>
        </li>

        <!-- First Level Collapsible Content -->
        <transition name="collapse" @enter="enter" @leave="leave">
            <section v-if="collapseState['coll-setting']" class="" id="coll-setting">
                <!-- Second Level Trigger 1 -->
                <li class="p-[8px_12px] flex justify-between items-center cursor-pointer"
                    @click="toggleCollapse('coll-sub1', 'icon-sub1')">
                    <span class="ml-4">กลุ่มผู้ใช้งาน</span>
                    <span class="transition-transform duration-300" :class="iconRotate('icon-sub1')">
                        <font-awesome-icon :icon="iconState['icon-sub1']" id="icon-setting" />
                    </span>
                </li>

                <!-- Second Level Collapsible Content 1 -->
                <transition name="collapse" @enter="enter" @leave="leave">
                    <section v-if="collapseState['coll-sub1']" class="overflow-hidden pl-4">
                        <li class="sub-menu  py-2">
                            <span class="ml-6">ฝ่ายขายและการตลาด</span>
                        </li>
                        <li class="sub-menu  py-2">
                            <span class="ml-6">ฝ่ายทรัพยากรบุคคล</span>
                        </li>
                        <li class="sub-menu  py-2">
                            <span class="ml-6">ฝ่ายบัญชี</span>
                        </li>
                        <li class="sub-menu  py-2">
                            <span class="ml-6">ฝ่ายกฎหมาย</span>
                        </li>
                        <li class="sub-menu  py-2">
                            <span class="ml-6">ฝ่ายบริการลูกค้า</span>
                        </li>
                        <li class="sub-menu  py-2 text-title3 text-[var(--Primary-Main)]">
                            <span class="ml-6 font-600">กลุ่มผู้ใช้งานทั้งหมด</span>
                            <font-awesome-icon icon="chevron-right" class="ml-4 font-900" />
                        </li>
                    </section>
                </transition>

                <!-- Second Level Trigger 2 -->
                <li class="p-[8px_12px] flex justify-between items-center cursor-pointer "
                    @click="toggleCollapse('coll-sub2', 'icon-sub2')">
                    <span class="ml-4">กลุ่มธุรกิจและอุตสาหกรรม </span>
                    <span class="transition-transform duration-300" :class="iconRotate('icon-sub2')">
                        <font-awesome-icon :icon="iconState['icon-sub2']" id="icon-setting" />
                    </span>
                </li>

                <!-- Second Level Collapsible Content 2 -->
                <transition name="collapse" @enter="enter" @leave="leave">
                    <section v-if="collapseState['coll-sub2']" class="overflow-hidden pl-4">
                        <li class="sub-menu  py-2">
                            <span class="ml-6">การเช่าหรือซื้อขายอสังหาริมทรัพย์</span>
                        </li>
                        <li class="sub-menu  pt-2">
                            <span class="ml-6">บริการทางการเงิน</span>
                        </li>
                        <li class="sub-menu  pt-2">
                            <span class="ml-6">ประกันภัย</span>
                        </li>
                        <li class="sub-menu  pt-2">
                            <span class="ml-6">ภาครัฐ</span>
                        </li>
                        <li class="sub-menu  pt-2">
                            <span class="ml-6">สถานพยาบาล</span>
                        </li>
                        <li class="sub-menu  pt-2 text-title3 font-600 text-[var(--Primary-Main)]">
                            <span class="ml-6">กลุ่มธุรกิจและอุตสาหกรรมทั้งหมด</span>
                            <font-awesome-icon icon="chevron-right" class="ml-4" />
                        </li>
                    </section>
                </transition>
            </section>
        </transition>
    </ul>
</template>
  
<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const collapseState = ref({
    'coll-setting': false,
    'coll-sub1': true,
    'coll-sub2': false
})

const iconState = ref({
    'icon-setting': faChevronDown,
    'icon-sub1': faChevronUp,
    'icon-sub2': faChevronUp
})

const iconRotate = (iconId) => {
    const sectionId = iconId.replace('icon-', 'coll-')
    return collapseState.value[sectionId] ? 'rotate-180' : ''
}

const toggleCollapse = (sectionId, iconId) => {
    collapseState.value[sectionId] = !collapseState.value[sectionId]
    iconState.value[iconId] = collapseState.value[sectionId] ? faChevronUp : faChevronDown

    if (sectionId === 'coll-setting' && collapseState.value[sectionId]) {
        collapseState.value['coll-sub1'] = true
        collapseState.value['coll-sub2'] = false
        iconState.value['icon-sub1'] = faChevronUp
        iconState.value['icon-sub2'] = faChevronDown
    }

    if (sectionId === 'coll-sub1' && collapseState.value[sectionId]) {
        collapseState.value['coll-sub2'] = false
        iconState.value['icon-sub2'] = faChevronDown
    } else if (sectionId === 'coll-sub2' && collapseState.value[sectionId]) {
        collapseState.value['coll-sub1'] = false
        iconState.value['icon-sub1'] = faChevronDown
    }
}

const enter = (el) => {
    el.style.maxHeight = '0px'
    el.style.opacity = 0
    setTimeout(() => {
        el.style.maxHeight = el.scrollHeight + 'px'
        el.style.opacity = 1
    }, 0)
}

const leave = (el) => {
    el.style.maxHeight = el.scrollHeight + 'px'
    setTimeout(() => {
        el.style.maxHeight = '0px'
        el.style.opacity = 0
    }, 0)
}
</script>
  
<style scoped>
* {
    font-size: var(--label4);
    cursor: pointer;
}

.sub-menu:hover{
   color: var(--Primary-Main);
    background: var(--Primary-Bg);
}

.collapse-enter-active,
.collapse-leave-active {
    transition: max-height 0.3s ease, opacity 0.3s ease;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.3s ease;
}

.fade-slide-enter,
.fade-slide-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}

.rotate-180 {
    transform: rotate(180deg);
}
</style>
  