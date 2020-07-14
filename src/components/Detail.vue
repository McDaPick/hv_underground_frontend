<template>
  <div id="banddetail" class = "container-fluid">
    <div class="row">
      <div class="col-6">
        <img :src="band[0].PictureURL" class="img-responsive fade-in" style="z-index: 1000;width: 100%;height:500px;" :key="band.Name">
      </div>
      <div class="col-6">
        <h2 style="z-index: 1;color: white;font-family: Poppins, sans-serif;font-size: 85px;"> {{ band[0].Name }} </h2>
        <p style="z-index: 1;color: white; font-family: BenchNine, sans-serif;font-size: 24px;"> {{ band[0].Location }} </p>
        <p>
          <a :href="band[0].Bandcamp" target="_blank" style="z-index: 1;color: white; font-family: BenchNine, sans-serif;font-size: 24px;"> {{ band[0].Bandcamp }} </a>
        </p>
        <p style="z-index: 1;color: white; font-family: BenchNine, sans-serif;font-size: 24px;"> {{ band[0].Bio }} </p>
      </div>
    </div>
        <h2 style="z-index: 1;color: white;"> {{ band[0].Bio }} </h2>
  </div>
</template>

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

    //axios.get("http://localhost:1337/bands?Name=" + bandname.name)
    axios.get("https://hudson-valley-underground-back.herokuapp.com/bands?Name=" + bandname.name)
    //axios.get("https://hudson-valley-underground-back.herokuapp.com/quicksections")
    .then(function(response){
    self.band = response.data
    })
}
}
</script>
