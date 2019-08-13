<template>
  <div id="bands" class = "container">
        <div class="row" v-for="i in Math.ceil(bands.length / 4)">
          <div v-for="band in bands.slice((i - 1) * 4, i * 4)" id="bands-archive" class="col-sm">
            <h2> {{ band.Name }} </h2>
          </div>
        </div>
        <!-- <div v-for="band in bands" id="bands-archive" class="col-sm">
            <h2> {{ band.Name }} </h2>
            <p> {{ band.Bio }} </p>
        </div> -->
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
