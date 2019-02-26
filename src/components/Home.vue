<template>
  <div class="home">
          <!-- <div id="homeslider" class="col-md">    -->
              <vue-flux
                   :options="fluxOptions"
                   :images="fluxImages"
                   :transitions="fluxTransitions"
                   ref="slider">
              <flux-pagination slot="pagination"></flux-pagination>
              </vue-flux>

              <button @click="$refs.slider.showImage('next')">NEXT</button>
        <!-- </div> -->
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
import { VueFlux, FluxPagination, Transitions } from 'vue-flux';


export default {
  name: 'Home',
  components: {
    VueFlux,
    FluxPagination
 },

  data () {
       return {
           quicksections:[],
           fluxOptions: {
           autoplay: true,
           height:'500px'

      },
      fluxImages: [
         './slides/1.jpg',
         './slides/2.jpg',
         './slides/3.jpg'
      ],
      fluxTransitions: {
         transitionBook: Transitions.transitionBook
          }
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
  }

//
//
// import { VueFlux, FluxPagination, Transitions } from 'vue-flux';
//
// export default {
//    components: {
//       VueFlux,
//       FluxPagination
//    },
//
//    data: () => ({
//       fluxOptions: {
//          autoplay: true
//       },
//       fluxImages: [ 'URL1', 'URL2', 'URL3' ],
//       fluxTransitions: {
//          transitionBook: Transitions.transitionBook
//       }
//    })
// }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#shoutout{
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}


</style>
