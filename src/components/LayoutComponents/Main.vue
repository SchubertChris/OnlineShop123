<template>
  <main class="main">
    <div class="container">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainComponent'
});
</script>

<style lang="scss" scoped>
@import '../../Styles/base/variables.scss';
@import '../../Styles/base/mixins.scss';

.main {
  flex: 1;
  padding: $spacing-xl 0;
  
  @include media-max($breakpoint-sm) {
    padding: $spacing-lg 0;
  }
}

// Page Transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>