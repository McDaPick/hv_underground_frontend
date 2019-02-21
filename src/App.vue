<template>
  <div id="app">
    <div id="header">
    <div id = "logo">
      <h1>HudsonValleyUnderGround</h1>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Shows</router-link> |
      <router-link to="/hello">Bands</router-link> |
      <router-link to="/about">Venues</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
     <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
}

#header{
  height: 80px;
  width: 940px;
  padding: 0px 20px 0px 20px;
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
  color: #2c3e50;

}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
