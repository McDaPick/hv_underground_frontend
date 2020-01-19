<template>
  <div class="home">
    <div class="container-fluid" id="photo">
      <div class="row">
        <img src = "https://images.unsplash.com/photo-1481886756534-97af88ccb438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" style="z-index: 1000;width: 100%;">
    </div>
  </div>

  <div id ="featartistinfo" class="container" style="height:500px;padding-top:15px;">
    <div class = "row">
        <div class = "col-8" style="color:white;">
            <p>
              BIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIO
              BIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIO
              BIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIO
              BIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIO
              BIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIO
              BIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIO
              BIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIO

              BIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIO
              BIOBIOBIOBIOBIOBIOBIOBIO
              BIOBIOBIOBIO

              BIOBIOBIOBIO
            </p>
        </div>
        <div class = "col-4" style="">
            <iframe src="https://open.spotify.com/embed/album/2iiijMCcRXMZLuagGQSP9Q" width="100%" height="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
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
         './slides/Neyer.jpg',
         './slides/haveheart.jpg',
         './slides/wonderyears.jpg'
      ],

      fluxCaptions: [
        'Neyer!',
        'Fire!',
        'Wow!'
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
