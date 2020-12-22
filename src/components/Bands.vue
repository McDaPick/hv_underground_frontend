<template>
  <div>
    <div class="">

    </div>
    <div id="bands" class = "container-fluid">
      <div class="row">
        <div class="col" style="padding:25px;background-color: #f8f9fa!important;">
          <h1 class="fade-in sticky-top"> Band Archive </h1>
          <h5 class="fade-in-slower"> Test summary. Test summary. Test summary. Test summary. Test summary. Test summary. Test summary. Test summary. Test summary. Test summary. Test summary. </h5>
        </div>
      </div>

      <form  @submit="checkForm">
        <div class="row" style="padding:25px;">
          <div class="col-sm">
          </div>
          <div class="col-sm">
            <input type="text" class="form-control" id="bandsearch" placeholder="Search for a band">
          </div>
          <div class="col-sm">
          </div>
<!--
          <div class="col-sm">
            <select id="inputState" class="form-control">
              <option selected>Genre</option>
              <option>Rock</option>
              <option>Pop</option>
              <option>Punk</option>
              <option>Indie</option>
              <option>Metal</option>
            </select>
          </div> -->

          <!-- <div class="col-sm">
            <input type="text" class="form-control" placeholder="Location">
          </div> -->

          <!-- <div class="col-sm">
            <button style="width:100%;" type="submit" class="btn btn-primary mb-2">Submit</button>
          </div> -->

        </div>
      </form>

      <div class="searchresults row no-gutters"></div>


        <div class="row no-gutters" v-for="i in Math.ceil(bands.length / 4)">
            <div v-for="band in bands.slice((i - 1) * 4, i * 4)" class="bands-archive col-sm-3">
                  <a :href= "'bands/' + band.Name">
                    <div class="hovereffect bandsquare" style="cursor: pointer;">
                      <img :src="band.PictureURL" class="img-responsive fade-in" style="width:100%;height:100%;" :key="band.Name">
                        <div class="overlay" style="cursor: pointer;">
                          <h2> {{ band.Name }} </h2>
                            <!-- <p>
                              <a href="#">LINK HERE</a>
                            </p> -->
                        </div>
                    </div>
                  </a>
            </div>
        </div>
    </div>
  </div>
</template>


<style>

.fade-in {
  animation: fadeIn ease 2s;
  -webkit-animation: fadeIn ease 2s;
  -moz-animation: fadeIn ease 2s;
  -o-animation: fadeIn ease 2s;
  -ms-animation: fadeIn ease 2s;
}

.fade-in-slower {
  animation: fadeIn ease 7s;
  -webkit-animation: fadeIn ease 7s;
  -moz-animation: fadeIn ease 7s;
  -o-animation: fadeIn ease 7s;
  -ms-animation: fadeIn ease 7s;
}

@keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
}
}

.hovereffect {
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
}

.hovereffect .overlay {
  position: absolute;
  overflow: hidden;
  width: 80%;
  height: 80%;
  left: 10%;
  top: 10%;
  border-bottom: 1px solid #FFF;
  border-top: 1px solid #FFF;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: scale(0,1);
  -ms-transform: scale(0,1);
  transform: scale(0,1);
}

.hovereffect:hover .overlay {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}


.hovereffect img {
  display: block;
  position: relative;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
}

.hovereffect:hover img {
  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
  filter: brightness(0.6);
  -webkit-filter: brightness(0.6);
}

.hovereffect h2 {
  text-transform: uppercase;
  text-align: center;
  position: relative;
  font-size: 29px;
  font-family: Poppins, sans-serif;
  background-color: transparent;
  color: #FFF;
  padding: 4em 0;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(0,-100%,0);
  transform: translate3d(0,-100%,0);
}

.hovereffect a, .hovereffect p {
  color: #FFF;
  padding: 1em 0;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(0,100%,0);
  transform: translate3d(0,100%,0);
}

.hovereffect:hover a, .hovereffect:hover p, .hovereffect:hover h2 {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

#bands h1 {
  font-family: Poppins, sans-serif;
}

</style>

<script>
import axios from 'axios'

export default {
name: 'Bands',
data () {
     return {
         bands:[],
    }
},
  methods: {
    checkForm: function (e) {
      console.log("nailed it");
      }
},
mounted() {
    let self = this
    //axios.get("http://localhost:1337/bands")
    axios.get("https://hudson-valley-underground-back.herokuapp.com/bands")
    .then(function(response){
    console.log(response.data);
    self.bands = response.data;
  })

  $(document).ready(function() {
       $("#bandsearch").on("keyup", function() {
           var value = $(this).val().toLowerCase();
               $(".bandsquare").filter(function() {
                   //$(".searchresults").append($(this).toggle($(this).text().toLowerCase().indexOf(value) > -1).addClass('col-3').css("height","auto"));
                  $(".searchresults").append($(this).closest('a').toggle($(this).text().toLowerCase().indexOf(value) > -1).closest('a').addClass('col-sm-3').css("height","auto"));
               });
       });
   });
},
}
</script>
