<template>
  <div class="home">
    <link href="https://fonts.googleapis.com/css?family=BenchNine|News+Cycle|Poppins:700&display=swap" rel="stylesheet">

    <div class="container-fluid" id="photo">
      <div class="row">
        <img src = "https://images.unsplash.com/photo-1481886756534-97af88ccb438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" style="z-index: 1000;width: 100%;">
        <transition appear>
          <h1 style="position: absolute;bottom:0px;left: 0;z-index: 1000;width: 100%;color: white;font-family: 'Poppins', sans-serif; font-size: 4em;">
            <span style="float: left;">The</span>
            <br>
            <span class="spacer"style="float: left;">Screaming Meemies</span>
          </h1>
        </transition>
    </div>
  </div>

  <div id ="featbandinfo" class="container-fluid" style="text-align:left;">
    <div class = "row">
        <div class = "col-lg-8" id="bio" style="padding-top:15px;padding-left: 35px;background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.4));color:white;">
          <h1 style="font-family: 'Poppins', sans-serif;">Dirty Mike and the Bois</h1>

          <div class="container d-none d-sm-none d-md-none d-lg-block " style="font-family: 'BenchNine', sans-serif;margin-left:0px;padding-left:0px;">
            <div class="row">
              <div class="col-md-4" style="">
                <p>Gerne: Metal</p>

              </div>
              <div class="col-md-4" style="">
                <p>Location: Cornwall, NY</p>
              </div>
              <div class="col-md-4">
              </div>
            </div>
          </div>

          <div class="container-fluid d-block d-sm-block d-md-block d-lg-none" style="font-family: 'BenchNine', sans-serif;margin-left:0px;padding-left:0px;">
            <div class="row">
              <div class="col-sm-6" style="">
                <p>Gerne: artgaeer</p>

              </div>
              <div class="col-sm-6" style="">
                <p>Location: Cornwall, NY</p>
              </div>
            </div>
          </div>

        <hr style="    border-top: 1px solid white;">
            <p style="font-family: 'BenchNine', sans-serif;word-wrap: break-word;font-size:19px;">
              This is a really cool bio. This is a really cool bio. This is a really cool bio. This is a really cool bio.
              This is a really cool bio. This is a really cool bio. This is a really cool bio. This is a really cool bio.
              This is a really cool bio. This is a really cool bio. This is a really cool bio.
              This is a really cool bio. This is a really cool bio.
              This is a really cool bio.
            </p>
        </div>
        <div class = "col-lg-4" style="background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.4)); padding-right:0px; padding-left:0px;">
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
