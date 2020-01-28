<template>
  <div id="banddetail" class = "container-fluid">
    <div class="row">
        <h2 style="z-index: 1;color: white;"> {{ band }} </h2>
      </div>
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

    axios.get("http://localhost:1337/bands?Name=" + bandname.name)
    //axios.get("https://hudson-valley-underground-back.herokuapp.com/quicksections")
    .then(function(response){
    self.band = response.data
    })
}
}
</script>
