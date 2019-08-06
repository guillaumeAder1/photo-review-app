<template>
  <div v-if="getComments.length" class="comment-container">
    <h1>Comments</h1>
    <Comment v-for="comment in getComments" :key="comment.id" :comment="comment"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Comment from '@/components/Comment'
export default {
  components: {
    Comment
  },
  computed: {
    ...mapGetters([
      'getComments'
    ])
  }  
}
</script>

<style>

</style>
