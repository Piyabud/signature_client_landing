<template>
    <ul>
      <li 
        class="text-md font-medium text-gray-700 flex justify-between items-center cursor-pointer" 
        @click="toggleCollapse('coll-setting', 'icon-setting')"
        id="tour_profile"
      >
        ABCD
        <span class="ml-2 transition-transform duration-300" :class="iconRotate">
          <font-awesome-icon :icon="iconState['icon-setting']" id="icon-setting" />
        </span>
      </li>
  
      <!-- Collapsible content with transition -->
      <transition name="collapse" @before-enter="beforeEnter" @enter="enter" @leave="leave">
        <section 
          v-show="collapseState['coll-setting']"
          class="overflow-hidden"
          id="coll-setting"
        >
          <li class="sub-menu text-sm text-gray-600 py-2" @click="gotoPage('profile')" id="profile">
            <div class="flex items-center">
              <i class="fas fa-user-circle w-10"></i>
              <span class="ml-4">11</span>
            </div>
          </li>
          
          <li class="sub-menu text-sm text-gray-600 py-2" @click="gotoPage('companySetting')">
            <div class="flex items-center">
              <i class="fas fa-building w-10"></i>
              <span class="ml-4">22</span>
            </div>
          </li>
          
          <li class="sub-menu text-sm text-gray-600 py-2" @click="gotoPage('userSetting')">
            <div class="flex items-center">
              <i class="fas fa-user-friends w-10"></i>
              <span class="ml-4">33</span>
            </div>
          </li>
        </section>
      </transition>
    </ul>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
  
  const collapseState = ref({
    'coll-setting': false,
  })
  
  const iconState = ref({
    'icon-setting': faChevronDown
  })
  
  const iconRotate = computed(() => {
    return collapseState.value['coll-setting'] ? 'rotate-180' : ''
  })
  
  const toggleCollapse = (sectionId, iconId) => {
    collapseState.value[sectionId] = !collapseState.value[sectionId]
    iconState.value[iconId] = collapseState.value[sectionId] ? faChevronDown : faChevronUp
  }
  
  const beforeEnter = (el) => {
    el.style.height = '0'
  }
  
  const enter = (el) => {
    el.style.height = el.scrollHeight + 'px'
  }
  
  const leave = (el) => {
    el.style.height = el.scrollHeight + 'px'
    setTimeout(() => {
      el.style.height = '0'
    })
  }
  
  const gotoPage = (page) => {
    // Add your page navigation logic here
  }
  </script>
  
  <style scoped>
  .collapse-enter-active, .collapse-leave-active {
    transition: height 0.3s ease;
  }
  
  .collapse-enter, .collapse-leave-to /* .collapse-leave-active in <=2.1.8 */ {
    height: 0;
  }
  
  .rotate-180 {
    transform: rotate(180deg);
  }
  </style>
  