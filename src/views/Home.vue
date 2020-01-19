<template>
  <div class="home">
    <LoadingScreen :isLoading="isLoading"/>
      <!-- <main v-if="!isLoading">
        <img width="25%" src="" /> <HelloWorld />
      </main> -->
    <!-- <div id="photo">
      <Home/>
    </div> -->
    <Home msg="Welcome to Your Vue.js App"/>
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
