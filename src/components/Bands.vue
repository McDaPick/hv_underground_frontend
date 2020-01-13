<template>
  <div id="bands" class = "container">


    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Raleway:300,400,500,600,700|Crete+Round:400i" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" href="css/bootstrap.css" type="text/css" />
	<!-- <link rel="stylesheet" href="css/style.css" type="text/css" /> -->
	<link rel="stylesheet" href="css/dark.css" type="text/css" />
	<link rel="stylesheet" href="css/font-icons.css" type="text/css" />
	<link rel="stylesheet" href="css/animate.css" type="text/css" />
	<link rel="stylesheet" href="css/magnific-popup.css" type="text/css" />

	<link rel="stylesheet" href="css/responsive.css" type="text/css" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />



        <div class="row no-gutters" v-for="i in Math.ceil(bands.length / 4)">
          <div v-for="band in bands.slice((i - 1) * 4, i * 4)" class="bands-archive col-sm">
            <!-- <h2> {{ band.Name }} </h2> -->
              <a :href= "'bands/' + band.Name">
                <img :src="band.PictureURL" class="img-responsive" style="width:100%;">
              </a>
          </div>
        </div>


        <!-- <div class="col_full clearfix">

						<h3>Bands!</h3>

						<div id="bands-archive" class="masonry-thumbs grid-4" data-big="4" data-lightbox="gallery">
						  <a v-for="band in bands" :href="'bands/' + band.Name" data-lightbox="gallery-item"><img class="image_fade" :src="band.PictureURL" :alt="band.Name"></a>
						</div> -->

<!--
        <div class="col_full clearfix">

						<h3>4 Columns</h3>

						<div class="masonry-thumbs grid-4" data-big="4" data-lightbox="gallery">
							<a href="images/portfolio/full/1.jpg" data-lightbox="gallery-item"><img class="image_fade" src="https://hvunderground.s3.us-east-2.amazonaws.com/photos/Chiodos.jpg" alt="Gallery Thumb 1"></a>
							<a href="images/portfolio/full/2.jpg" data-lightbox="gallery-item"><img class="image_fade" src="https://hvunderground.s3.us-east-2.amazonaws.com/photos/Chiodos.jpg" alt="Gallery Thumb 2"></a>
							<a href="images/portfolio/full/3.jpg" data-lightbox="gallery-item"><img class="image_fade" src="https://hvunderground.s3.us-east-2.amazonaws.com/photos/Chiodos.jpg" alt="Gallery Thumb 3"></a>
							<a href="images/portfolio/full/4.jpg" data-lightbox="gallery-item"><img class="image_fade" src="https://hvunderground.s3.us-east-2.amazonaws.com/photos/Chiodos.jpg" alt="Gallery Thumb 4"></a>
							<a href="images/portfolio/full/5.jpg" data-lightbox="gallery-item"><img class="image_fade" src="https://hvunderground.s3.us-east-2.amazonaws.com/photos/Chiodos.jpg" alt="Gallery Thumb 5"></a>
							<a href="images/portfolio/full/6.jpg" data-lightbox="gallery-item"><img class="image_fade" src="https://hvunderground.s3.us-east-2.amazonaws.com/photos/Chiodos.jpg" alt="Gallery Thumb 6"></a>
							<a href="images/portfolio/full/7.jpg" data-lightbox="gallery-item"><img class="image_fade" src="https://hvunderground.s3.us-east-2.amazonaws.com/photos/Chiodos.jpg" alt="Gallery Thumb 7"></a>
							<a href="images/portfolio/full/9.jpg" data-lightbox="gallery-item"><img class="image_fade" src="https://hvunderground.s3.us-east-2.amazonaws.com/photos/Chiodos.jpg" alt="Gallery Thumb 9"></a>
							<a href="images/portfolio/full/10.jpg" data-lightbox="gallery-item"><img class="image_fade" src="https://hvunderground.s3.us-east-2.amazonaws.com/photos/Chiodos.jpg" alt="Gallery Thumb 10"></a>
						</div>

					</div> -->

   <!-- // <script src="js/jquery.js"></script>
	 // <script src="js/plugins1.js"></script>
	 // <script src="js/functions.js"></script> -->

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
