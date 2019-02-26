<template>
  <div class="hello">
    <!-- <button id="btn" class="" v-on:click="handleClick">Posts</button> -->


        <div id ="shoutout" class="container">
              <div class = "row">
                <div class = "col-sm">
                  THIS IS A BIG SHOUTOUT TO WHOEVER IS ABOUT TO USE THIS PAGE
                </div>
              </div>
            </div>


<div class="container">
      <div class = "row">
        <div v-for="section in quicksections" class="col-sm">
            <p> {{ section.Title }} </p>
            <p> {{ section.Abstract }} </p>
        </div>
      </div>
    </div>

</div>
</div>


</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
       return {
           quicksections:[]
         }
     },
  props: {
    msg: String
  },
  mounted() {
      let self = this
      axios.get("http://localhost:1337/quicksections")
      //axios.get("https://enigmatic-tundra-10828.herokuapp.com/posts")
      .then(function(response){
      console.log(response.data);
      self.quicksections = response.data;
    })},
  // methods: {
  //   created: function() {
  //     let self = this
  //     axios.get("http://localhost:1337/quicksections")
  //     //axios.get("https://enigmatic-tundra-10828.herokuapp.com/posts")
  //     .then(function(response){
  //     console.log(response.data);
  //     self.quicksections = response.data;
  //     // console.log(self.posts);
  //   })
  // },

  }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#shoutout{
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}


</style>
