<template>
  <div id="banddetail" class = "col-sm">
    <div class="row" id="detailname">
      <div class="col-md-3">
      </div>
      <div class="col-md-6">
        <h2 class=".d-sm-none .d-md-block" style="float: left; z-index: 1;color: white;font-family: Poppins, sans-serif;font-size: 85px;"> {{ band[0].Name }} </h2>
      </div>
      <div class="col-md-3">
      </div>
    </div>

    <div class="row" id="detailimage">
      <div class="col-md-3">
      </div>
        <div class="col-md-6">
          <img :src="band[0].PictureURL" class="img-responsive fade-in" style="z-index: 1000;width:100%;" :key="band.Name">
        </div>
        <div class="col-md-3">
        </div>
    </div>

    <div class="row" id="detailsocials">
      <div class="col-4"></div>
      <div class="col-4">
        <ul>
          <li class="sociallist"> Twitter </li>
          <li class="sociallist"> Facebook </li>
          <li class="sociallist"> Instagram </li>
        </ul>
      </div>
      <div class="col-4"></div>
    </div>

    <div class="row" id="detaildetails">
      <div class="col-sm">
          <p style="z-index: 1;color: white; font-family: BenchNine, sans-serif;font-size: 24px;"> {{ band[0].Location }} </p>
          <p>
            <a :href="band[0].Bandcamp" target="_blank" style="z-index: 1;color: white; font-family: BenchNine, sans-serif;font-size: 24px;"> {{ band[0].Bandcamp }} </a>
          </p>
          <p style="z-index: 1;color: white; font-family: BenchNine, sans-serif;font-size: 24px;"> {{ band[0].Bio }} </p>
      </div>
    </div>
  </div>
</template>

<style>
#banddetail{
    padding-top: 30px;
    background-image: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0.4));
  }

.sociallist{
  z-index: 1;
color: white;
font-family: BenchNine, sans-serif;
font-size: 24px;
text-decoration: none;
display: inline;
}
</style>

<script>
import axios from 'axios'

export default {
name: 'Detail',
data () {
     return {
       bandInfo:[],
       band: null
    }
},

mounted() {
    let self = this
    const bandname = this.$route.params;

    axios.get("http://localhost:1337/bands?Name=" + bandname.name)
    //axios.get("https://hudson-valley-underground-back.herokuapp.com/bands?Name=" + bandname.name)
    //axios.get("https://hudson-valley-underground-back.herokuapp.com/quicksections")
    .then(function(response){
    self.band = response.data
    })
}
}
</script>
