<template>
  <div class="test">
    <hello/>
  </div>
</template>

<script>
// @ is an alias to /src
import hello from '@/components/HelloComp.vue'

export default {
  name: 'hellof',
  components: {
    hello
  }
}
</script>
