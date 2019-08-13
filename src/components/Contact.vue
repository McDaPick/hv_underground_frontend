<template>
  <div class="contact-form">
    <div id="contact-info" class="container">
      <div class="row">
        <div class="col-sm">
          <p> Do you want your band or project archived and displayed on this site? Submit the form to get in touch! </p>
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
<form>
  <div class="row">
      <div class="col">
          <div class="form-group">
            <label for="requestname">Requester name</label>
            <input type="text" class="form-control" id="requestname" aria-describedby="emailHelp" placeholder="Requester name">
            <!-- <small id="emailHelp" class="form-text text-muted">Your name</small> -->
          </div>
    </div>
    <div class="col">
      <div class="form-group">
        <label for="exampleInputPassword1">Project name</label>
        <input type="text" class="form-control" id="projectname" placeholder="Project name">
      </div>
    </div>
    <div class="col">
      <div class="form-group">
        <label for="exampleInputPassword1">Genre</label>
        <input type="text" class="form-control" id="genre" placeholder="Genre">
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
          <div class="form-group">
            <label for="exampleInputPassword1">Description</label>
            <textarea type="text" class="form-control input-lg" id="inputlg" placeholder="Description"></textarea>
          </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
          <div class="form-group">
            <label for="exampleInputPassword1">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Email">
          </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
          <div class="form-group">
            <label for="exampleInputPassword1">Links</label>
            <input type="text" class="form-control" id="links" placeholder="Bandcamp, SoundCloud, YouTube, etc.">
          </div>
    </div>
  </div>
          <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>
</template>
