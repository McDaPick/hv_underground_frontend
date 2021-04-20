import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')


// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    var pageURL = $(location).attr("href");

              if (pageURL.indexOf("bandoftheweek") >= 0){
                $("#botw").addClass("active");
              } else if(pageURL.indexOf("home") >= 0){
                $("#home").addClass("active");
              } else if(pageURL.indexOf("") >= 0){
                  $("#home").addClass("active");
              } else if(pageURL.indexOf("contact") >= 0){
                $("#contact").addClass("active");
              }
    /* Code for changing active
           link on clicking */
           var btns =
               $("#home #botw #contact");

           for (var i = 0; i < btns.length; i++) {
               btns[i].addEventListener("click",
                                     function () {
                   var current = document
                       .getElementsByClassName("active");

                   current[0].className = current[0]
                       .className.replace(" active", "");

                   this.className += " active";
               });
           }
});
