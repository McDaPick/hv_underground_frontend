<template>
  <div id="banddetail" class = "col-sm">
    <div class="row" id="detailname">
      <div class="col-md-3">
      </div>
      <div class="col-md-6">
        <h2 class=".d-sm-none .d-md-block" style="float: left; z-index: 1;color: white;font-family: Poppins, sans-serif;font-size: 85px;"> {{ band[0].Name }} </h2>
        <div class="row" id="detailsocials">
            <div class="col-4"></div>
            <div class="col-4"></div>

            <div class="col-4" id="social-col">
                <div class="row">
                  <div class="col-4">
                    <li class="sociallist">
                      <a :href="band[0].Instagram" target="_blank">
                        <img class="socialicons" src="/./slides/insta.png">
                      </a>
                     </li>
                  </div>
                  <div class="col-4">
                    <li class="sociallist">
                      <a :href="band[0].Twitter" target="_blank">
                        <img class="socialicons" src="/./slides/twit.png">
                      </a>
                    </li>
                  </div>
                  <div class="col-4">
                    <li class="sociallist">
                    <a :href="band[0].Facebook" target="_blank">
                      <img class="socialicons" src="/./slides/fb.png">
                    </a>
                    </li>
                  </div>
            </div>

          </div>
        </div>
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


    <div class = "row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <iframe src="https://open.spotify.com/embed/album/2iiijMCcRXMZLuagGQSP9Q" width="100%" height="50%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <div class="col-md-3"></div>
    </div>


    <div class="row" id="detaildetails">
      <div class="col-3"></div>
      <div class="col-6">
          <p style="z-index: 1;color: white; font-family: BenchNine, sans-serif;font-size: 24px;">Location: {{ band[0].Location }} </p>
          <p>
            <a :href="band[0].Bandcamp" target="_blank" style="z-index: 1;color: white; font-family: BenchNine, sans-serif;font-size: 24px;"> {{ band[0].Bandcamp }} </a>
          </p>
          <!-- <p style="z-index: 1;color: white; font-family: BenchNine, sans-serif;font-size: 24px;"> {{ band[0].Bio }} </p>-->
          <p style="z-index: 1;color: white; font-family: BenchNine, sans-serif;font-size: 24px;"> {Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

C/O https://placeholder.com/text/lorem-ipsum/Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

C/O https://placeholder.com/text/lorem-ipsum/Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

C/O https://placeholder.com/text/lorem-ipsum/ </p>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<style>
#banddetail{
    padding-top: 30px;
    background-image: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0.4));
  }

#detailsocials{
  padding-top: 20px;
  padding-bottom: 20px;
}

.socialicons{
  width: 40px;
  cursor: pointer;
}

#social-col{
  padding-top: 30px;
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

    //axios.get("http://localhost:1337/bands?Name=" + bandname.name)
    axios.get("https://hudson-valley-underground-back.herokuapp.com/bands?Name=" + bandname.name)
    //axios.get("https://hudson-valley-underground-back.herokuapp.com/quicksections")
    .then(function(response){
      console.log(response.data)
    self.band = response.data
    })
}
}
</script>
