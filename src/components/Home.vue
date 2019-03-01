<template>
  <div class="home">
    <div id="slider" class = "container">
      <div class = "row">
        <div class = "col-sm">
          <!-- <div id="homeslider" class="col-md">    -->
              <vue-flux
                   :options="fluxOptions"
                   :images="fluxImages"
                   :transitions="fluxTransitions"
                   ref="slider">
              <flux-pagination slot="pagination"></flux-pagination>
              </vue-flux>
</div>
</div>
</div>
              <!-- <button @click="$refs.slider.showImage('next')">NEXT</button> -->
        <!-- </div> -->

        <div id ="shoutout" class="container">
              <div class = "row">
                <div class = "col-sm">
                  THIS IS A BIG SHOUTOUT TO WHOEVER IS ABOUT TO USE THIS PAGE
                </div>
              </div>
            </div>


<div id="quicksections" class="container">
      <div class = "row">
        <div v-for="section in quicksections" id="quicksectionsColumn" class="col-sm">
            <img :src= "section.ImageURL">
            <p> {{ section.Title }} </p>
            <p> {{ section.Abstract }} </p>
            <a href="">Read More</a>
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
           height:'500px',
           bindKeys: true,
           enableGestures: true

      },
      fluxImages: [
         './slides/beartooth.jpg',
         './slides/haveheart.jpg',
         './slides/wonderyears.jpg'
      ],
      fluxTransitions: {
         transitionFade: Transitions.transitionFade

          }
         }
     },
  props: {
    msg: String
  },
  mounted() {
      let self = this
      //axios.get("http://localhost:1337/quicksections")
      axios.get("https://hudson-valley-underground-back.herokuapp.com/quicksections")
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
  border-top: 1px solid #202020;
  border-bottom: 1px solid #202020;
      padding: 10px;
}

#quicksections{
      padding: 20px 0 0 0;
}

#quicksectionsColumn > img:hover{
  opacity: 0.5;
  cursor: pointer;
}

#quicksectionsColumn > a{
  color:white;
}

#quicksectionsColumn > a:hover{
  background-color: #E50E07;
}

#slider{
      padding-bottom: 20px;
}

</style>
