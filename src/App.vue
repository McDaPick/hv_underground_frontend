<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=BenchNine|News+Cycle|Poppins:700&display=swap" rel="stylesheet">
    <div id="bg-image" class="container-fluid">
    </div>
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">HVUnderground</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" id="home" href="/home">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="botw" href="/bandoftheweek">Band of the Week</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="/shows">Shows</a>
          </li> -->

          <li class="nav-item">
            <a class="nav-link" id="contact" href="/contact">Contact</a>
          </li>
        </ul>

      </div>
    </nav>
    <!-- <div id="bg-sub-image" class="container">
    </div> -->

  <router-view/>

  <div id="footer" class="container-fluid">
    <div class="row">
        <div class = "footerbox col-sm">
          <img id="footerlogo" src="/./slides/HVULOGOBLUE.jpg">
        </div>
        <!-- <div class = "col-sm">
          <li><h2>Upcoming Shows</h2></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>

        </div> -->
        <div class = "footerbox footertext col-sm">
          <li><h2>About HVU</h2></li>
          <li><p>We are a really great webstie oh wow. </p></li>

        </div>
        <div class = "footerbox footertext col-sm">
          <li><h2>About HVU</h2></li>
          <li><p>We are a really great webstie oh wow. </p></li>

        </div>
        <div class = "footerbox footertext col-sm">
            <li><h2> Contact Us </h2></li>
            <li>Send us an email if you want to get in touch!</li>

            <li>hudsonvalleyunderground@gmail.com</li>
        </div>
    </div>

  </div>

  <!-- <div id="footer-bottom" class="container-fluid">
    <div class="row-fluid">
        <div class = "footerbox col-sm">
          <p id="copyright"> "Copyright 2020" </p>
        </div>
    </div>

  </div> -->

</div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   /* color: white; */
   /* background-color: black; */
   /* background: url("https://images.unsplash.com/photo-1520011980943-c1c29bb73d78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"); */
   /* min-height: 100vh;
   box-shadow: inset 0 0 0 100vw rgba(0,0,0,0.7); */

}

#bg-image{
  /* background-color: red; */
  background-image: url("https://images.unsplash.com/photo-1520011980943-c1c29bb73d78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
  position:fixed;
  width:100%;
  height:100%;
  top:0px;
  left:0px;

  box-shadow: inset 0 0 0 100vw rgba(0,0,0,0.5);

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#bg-sub-image{
  /* background-color: red; */
  position:fixed;
  /* width:100%; */
  height:100%;
  /* top:0px; */
  /* left:8.26em; */

  /* background-color: rgba(0,0,0,0.4); */
  background-image: url("https://images.unsplash.com/photo-1520011980943-c1c29bb73d78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");

  filter: blur(5px)!important;


  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#header{
  padding: 0px 20px 0px 20px;
  margin: 0 auto;
}

#top-header{
}

#content{
  background-color: rgba(0,0,0,0.4);
}

#logo{
}

#footerlogo{
  float:left;
}

.footerbox{
  background-color: #f8f9fa;
}

.footertext{
  padding-top: 80px;
}

.leftnavlinks{
  display: inline;
  margin:0 0 0 20px;

}

.rightnavlinks{
  display: inline;
  margin:0 20px 0 0;

}

#right-nav {
  float:left;
}

#rightnavlist{
  padding:0;
}

#left-links{
    padding: 110px 0px 0px 0px;
    font-weight: bold;
    letter-spacing: 6px;
    /* background-color: #000!important; */
    background-color: rgba(0,0,0,0.0)!important;
}

#left-links a {
  color:#6699cc;
}

#left-links a.router-link-exact-active {
  background-color: #fff;
}

#right-links{
    padding: 110px 0px 0px 0px;
    font-weight: bold;
    letter-spacing: 6px;
    /* background-color: #000!important; */
    background-color: rgba(0,0,0,0.0)!important;
}

#right-links a {
  color:#6699cc;
}

#right-links a.router-link-exact-active {
  background-color: #fff;
}


#nav a {
  font-weight: bold;
  color: white;

}

#nav a.router-link-exact-active {
  background-color: #E50E07;
}

#footer{
  border-top: 1px solid #202020;
  /* border-bottom: 1px solid #202020; */
  list-style-type: none;
  /* padding-top: 50px; */
  /* padding-bottom: 20px; */
  color:rgba(0,0,0,.9);
}

#footer > div > div > li> h2{
  font-size: 20px;
  font-weight: bold;
  color: rgba(0,0,0,.9);
}

#footer > div > div > li> a{
  color: white;
}

#footer-bottom{
  /* border-top: 1px solid #202020; */
  padding-left: 0px;
  padding-right: 0px;
}

#copyright{
  margin-bottom: 0;
}

@media (max-width: 767px) {
  .hvutitle {
      position: unset;
  }

  #right-links{
      padding: 0px 0px 0px 0px;
      font-weight: bold;
  }

  #left-links{
      padding: 0px 0px 0px 0px;
      font-weight: bold;
      letter-spacing: 6px;
      margin: 0px;
  }
  #header {
    width: 940px;
    padding: 0px 20px 0px 20px;
    margin: 0 auto;
}
}

#shoutout{
  border-top: 1px solid #202020;
  border-bottom: 1px solid #202020;
  padding: 10px;
  font-size: 23px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 30px;
  text-align: center;
  text-transform: uppercase;
}

#quicksections{
      padding: 20px 0 0 0;
}


#quicksectionsColumn > img:hover{
  opacity: 0.5;
  cursor: pointer;
}

#quicksectionsColumn > h2{
  color: #909090;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 0;
  margin: 10px 0 10px 0;
  padding: 0;
  text-transform: uppercase;
}

#quicksectionsColumn > p{
  padding: 0 0 20px 0;
  line-height: 20px;
}

#quicksectionsColumn > a{
  color:white;
  border-radius: 2px 2px 2px 2px;
  font-size: 14px;
  font-weight: bold;
}

#quicksectionsColumn > a:hover{
  background-color: #E50E07;
}


#slider{
      padding-bottom: 20px;
}

.bands-archive {
  transition: transform .4s;
  z-index: 1;
}

.bands-archive:hover {
  -ms-transform: scale(1.01); /* IE 9 */
  -webkit-transform: scale(1.01); /* Safari 3-8 */
  transform: scale(1.01);
  overflow: hidden;
  z-index: 1000;
}

@media (max-width: 992px) {
  #bio{
    text-align: center;
  }
}

</style>
