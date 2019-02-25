<template>
<div>
  <div class="about">
    <h1>This is an about page</h1>
    <About msg="BootyBootyButtCheeks"/>
  </div>
    </div>
</template>

<script>
// @ is an alias to /src
import About from '@/components/About.vue'

export default {
  name: 'about',
  components: {
    About
  }
}

// this.axios.get('http://localhost:1337/posts')
//   .then(function (response) {
//     this.console.log(response + "butt");
//   })
//   .catch(function (error) {
//     this.console.log(error);
//   });
//
</script>
