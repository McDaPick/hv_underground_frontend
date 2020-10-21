<template>
  <div class = "wow">
    <p> A rad ass website dedicated to the underground scene of the
      Hudson Valley </p>
      <p>{{ msg }}</p>
 <main>
      <button id="btn" class="" v-on:click="handleClick">Get Posts</button>
      <div class = "wrapper">
        <div v-for="post in posts">
          <p> FEHFIU </p>
          <p> {{ post }} </p>
          <p> {{ post.content }} </p>
        </div>
      </div>
</main>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'About',
  data () {
       return {
           posts:[]
         }
     },

  props: {
    msg: String
  },


  methods: {
    handleClick: function() {
      let self = this
      axios.get("http://localhost:1337/posts")
      //axios.get("https://enigmatic-tundra-10828.herokuapp.com/posts")
      .then(function(response){
      console.log(response.data);
      self.posts = response.data;
      console.log(self.posts);
    })
  }
  }
}
</script>
