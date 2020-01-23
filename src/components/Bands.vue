<template>
  <div>
    <div class="">

    </div>
    <div id="bands" class = "container-fluid">
      <!-- <transition-group name="list" tag="ul"> -->


        <div class="row no-gutters" v-for="i in Math.ceil(bands.length / 4)">
            <div v-for="band in bands.slice((i - 1) * 4, i * 4)" class="bands-archive col-sm">
              <!-- <transition-group tag="ul" class="content__list" name="company"> -->
                <transition name="fade" mode="out-in">
                  <a :href= "'bands/' + band.Name">
                    <!-- <transition name="fade" mode="out-in"> -->
                      <img :src="band.PictureURL" class="img-responsive" style="width:100%;" :key="band.Name">
                  </a>
                </transition>
                <!-- </transition-group> -->
            </div>
        </div>



      <!-- </transition-group> -->
    </div>
  </div>
</template>


<style>
.fade-enter-active,
.fade-leave-active
    transition: opacity .5s

.fade-enter,
.fade-leave-to
    opacity: 0


.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
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

// created() {
// let ckeditor = document.createElement('script');
// let ckeditor2 = document.createElement('script');
// let ckeditor3 = document.createElement('script');
//
// ckeditor.setAttribute('src',"js/jquery.js");
// ckeditor2.setAttribute('src',"js/plugins1.js");
// ckeditor3.setAttribute('src',"js/functions.js");
//
//
// document.head.appendChild(ckeditor);
// document.head.appendChild(ckeditor2);
// document.head.appendChild(ckeditor3);
// },

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
