<template>
  <div class="home">
    <LoadingScreen :isLoading="isLoading"/>
    <Home msg="Welcome to HudsonValleyUnderGround"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import LoadingScreen from "../components/LoadingScreen";


export default {
  name: 'home',
  components: {
    Home,
    LoadingScreen
  },
  data() {
    return { isLoading: true };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
};
</script>
