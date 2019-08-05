<template>
  <div v-if="getComments.length" class="comment-container">
    <h1>Comments</h1>
     <div class="comments" v-for="comment in getComments" :key="comment.id">
        <strong>{{comment.name}}</strong> // <i>{{comment.email}}</i>
        <br>
        <code>{{comment.body}}</code>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getComments'
    ])
  }
}
</script>

<style>

</style>
