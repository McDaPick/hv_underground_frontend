<template>
  <div id="bands" class = "container">
      <div class = "row">
        <div v-for="band in bands" class="col-sm">
          <p> {{ band.Name }} </p>
          <p> {{ band }} </p>
          <!-- <p> {{ post.content }} </p> -->
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
name: 'Bands',
data () {
     return {
         bands:[],
    }
},

mounted() {
    let self = this
    axios.get("http://localhost:1337/bands")
    //axios.get("https://hudson-valley-underground-back.herokuapp.com/quicksections")
    .then(function(response){
    console.log(response.data);
    self.bands = response.data;
  })},
}
</script>
