<template>
  <div class="hello">
    <button id="btn" class="" v-on:click="handleClick">Get Posts</button>

<div class="container">
      <div class = "row">
        <div v-for="section in quicksections" class="col-sm">
            <p> {{ section.Title }} </p>
            <p> {{ section.Abstract }} </p>
        </div>
      </div>
    </div>

    <div class="container">
          <div class = "row">
            <div class = "col-sm">
              Test
            </div>
            <div class = "col-sm">
              Test
            </div>
            <div class = "col-sm">
              Test
            </div>
            <!-- <div v-for="section in quicksections" class="col-sm">
                <p> {{ section.Title }} </p>
                <p> {{ section.Abstract }} </p>
            </div> -->
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

  methods: {
    handleClick: function() {
      let self = this
      axios.get("http://localhost:1337/quicksections")
      //axios.get("https://enigmatic-tundra-10828.herokuapp.com/posts")
      .then(function(response){
      console.log(response.data);
      self.quicksections = response.data;
      // console.log(self.posts);
    })
  }
  }


}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
