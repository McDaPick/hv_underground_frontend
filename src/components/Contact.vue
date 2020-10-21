<template>
  <div class="contact-form">
    <div id="contact-info" class="container=fluid">
      <div class="row">
        <div class="col"  style="padding:25px;background-color: #f8f9fa!important;">
          <h1 class="fade-in sticky-top"> Contact Us </h1>
          <h5 class="fade-in-slower"> Fill out the form below to have you or your band added to the site! </h5>
        </div>
      </div>
    </div>
    <!-- <form action="">
      Requester name: <input type="text" name="rname"><br>
      Project name: <input type="text" name="pname"><br>
      Genre: <input type="text" name="genre"><br>
      Description: <input type="text" name="descr"><br>
      Email: <input type="text" name="email"><br>
      Links: <input type="text" name="links"><br>
  <input type="submit" value="Submit">
</form> -->
<div class = "container">
<form id="contactform">
  <div class="row contactfield">
      <div class="col">
          <div class="form-group">

            <input type="text" class="form-control form-control-lg" id="requestname" aria-describedby="emailHelp" placeholder="Requester name">
            <!-- <small id="emailHelp" class="form-text text-muted">Your name</small> -->
          </div>
    </div>
    <div class="col">
      <div class="form-group">

        <input type="text" class="form-control form-control-lg" id="projectname" placeholder="Project name">
      </div>
    </div>
    <div class="col">
      <div class="form-group">
        <input type="text" class="form-control form-control-lg" id="genre" placeholder="Genre">
      </div>
    </div>
  </div>
  <div class="row contactfield">
    <div class="col">
          <div class="form-group">
            <textarea type="text" class="form-control input-lg form-control-lg" id="description" placeholder="Description"></textarea>
          </div>
    </div>
  </div>
  <div class="row contactfield">
    <div class="col">
          <div class="form-group">
            <input type="email" class="form-control form-control-lg" id="email" placeholder="Email">
          </div>
    </div>
  </div>
  <div class="row contactfield">
    <div class="col">
          <div class="form-group">
            <input type="text" class="form-control form-control-lg" id="links" placeholder="Bandcamp, SoundCloud, YouTube, etc.">
          </div>
    </div>
  </div>
  <div class="row contactfield">
    <div class="col">
          <div class="form-group">
            <button type="submit" id="contactbutton" class="btn btn-primary">Submit!</button>
          </div>
    </div>
  </div>

</form>
</div>
</div>
</template>


<style>

#contactform{
  height: 700px;
  padding-bottom:25px;
}

#contact-info h1 {
  font-family: Poppins, sans-serif;
}

#contactform{
  padding-top:25px;
}

.contactfield{
  padding-top:20px;
}

#description{
  height: 215px;
}

#contactbutton{
  width:500px;
  height: 50px;
  font-size: 25px;
}
</style>
