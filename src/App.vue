<template>
  <div id="app">
    <div id="top-header" class="container">
      <div class="row">
        <div id="left-nav"class="col-sm">
            <ul id="left-links">
                <li class="leftnavlinks"><router-link to="/">HOME</router-link></li>
                <li class="leftnavlinks"><router-link to="/shows">SHOWS</router-link></li>
                <li class="leftnavlinks"><router-link to="/bands">BANDS</router-link></li>
            </ul>
        </div>
        <div id="header" class="col-sm">
              <img id="logo" src="./assets/HVULOGOBLUE.jpg">
          </div>
            <div id="right-nav" class="col-sm">
              <ul id="right-links">
                <li class="rightnavlinks"><router-link to="/venue">VENUES</router-link></li>
                <li class="rightnavlinks"><router-link to="/about">ABOUT</router-link></li>
                <li class="rightnavlinks"><router-link to="/about">CONTACT</router-link></li>
              </ul>
            </div>
    </div>
  </div>
  <router-view/>
  <div id="footer" class="container">
    <div class="row">
        <div class = "col-sm">
        </div>
        <div class = "col-sm">
          <li><h2>Upcoming Shows</h2></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>

        </div>
        <div class = "col-sm">
          <li><h2>About HVU</h2></li>
          <li><p>We are a really great webstie oh wow. </p></li>

        </div>
        <div class = "col-sm">
          <li><h2> Contact Us </h2></li>
          <li><a href="Google.com"> Email </a></li>
          <li><a href="Google.com"> Phone Number </a></li>
        </div>
    </div>

  </div>

  <div id="footer-bottom" class="container">
    <div class="row">
        <div class = "col-sm">
          <p> "Copyright 2018" </p>
        </div>
    </div>

  </div>


</div>
</template>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: white;
   background-color: black;

}

#header{
  padding: 0px 20px 0px 20px;
  margin: 0 auto;
}

#top-header{
}

#logo{
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
  float: right;
    padding: 110px 0px 0px 0px;
    font-weight: bold;
    letter-spacing: 6px;
}

#left-links a {
  color:#6699cc;
}

#left-links a.router-link-exact-active {
  background-color: #fff;
}

#right-links{
  float: left;
    padding: 110px 0px 0px 0px;
    font-weight: bold;
    letter-spacing: 6px;
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
  border-bottom: 1px solid #202020;
  list-style-type: none;
  padding-top: 20px;
}

#footer > div > div > li> h2{
  font-size: 20px;
  font-weight: bold;
  color: #909090;
}

#footer-bottom{
}

@media (max-width: 767px) {
  #right-links{
    float: right;
      padding: 0px 0px 0px 0px;
      font-weight: bold;
  }

  #left-links{
    float: left;
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

</style>
