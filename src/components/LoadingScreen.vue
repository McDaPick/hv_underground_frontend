<template>
  <div :class="{ loader: true, fadein: isLoading, fadeout: !isLoading }">Hudson Valley Underground</div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: ["isLoading"]
};
</script>

<style>
.loader {
  background: url("https://images.unsplash.com/photo-1481886756534-97af88ccb438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80");
  background-position: center; /* Center the image */
 background-repeat: no-repeat; /* Do not repeat the image */
 background-size: cover; /* Resize the background image to cover the entire container */
  bottom: 0;
  color: white;
  display: block;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  padding-top: 10vh;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  z-index: 2000;
}

.fadein {
	/* opacity: 1;
	animation-name: fadeInOpacity;
	animation-timing-function: ease-in;
	animation-duration: 0.5s; */
}
/*
@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
} */

.fadeout {
  animation: fadeout 2s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
