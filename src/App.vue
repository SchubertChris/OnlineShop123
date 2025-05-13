<template>
  <MainLayout />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayout from './components/LayoutComponents/Mainlayout.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainLayout
  }
});
</script>

<style lang="scss">
@import './Styles/base/index.scss';
</style>