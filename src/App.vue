<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div id="header"class="col">
              <p>HudsonValleyUnderGround</p>
            </div>

            <div id="nav" class="col">
              <router-link to="/">Home</router-link> |
              <router-link to="/shows">Shows</router-link> |
              <router-link to="/bands">Bands</router-link> |
              <router-link to="/venue">Venues</router-link> |
              <router-link to="/about">About</router-link>
            </div>

    </div>
  </div>
  <router-view/>
  <div id=footer class="container">
    <div class="row">
        <div class = "col-sm">

          </ul>
        </div>
        <div class = "col-sm">
          <li><p>Upcoming Shows</p></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>

        </div>
        <div class = "col-sm">
          <li><p>About HVU</p></li>
          <li><p>We are a really great webstie oh wow. </p></li>

        </div>
        <div class = "col-sm">
          <li<p> Contact Us </p></li>
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
  height: 80px;
  width: 940px;
  padding: 35px 20px 0px 20px;
  margin: 0 auto;
}

#logo{
  float: left;
}

#nav {
  float:right;
  padding-top: 35px;
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

#footer-bottom{
}

</style>
