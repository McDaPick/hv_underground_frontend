<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div id="header"class="col">
              <p>HudsonValleyUnderGround</p>
            </div>

            <div id="nav" class="col">
              <router-link to="/">Home</router-link> |
              <router-link to="/about">Shows</router-link> |
              <router-link to="/hello">Bands</router-link> |
              <router-link to="/about">Venues</router-link> |
              <router-link to="/about">About</router-link>
            </div>

    </div>
  </div>
  <router-view/>
  <div id=footer class="container">
    <div class="row">
        <div class = "col-sm">
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          </ul>
        </div>
        <div class = "col-sm">
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
        </div>
        <div class = "col-sm">
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
        </div>
        <div class = "col-sm">
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
          <li><a href="Google.com"> A Link </a></li>
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
  background-color: red;
}

#footer{
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  list-style-type: none;

}
</style>
