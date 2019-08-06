<template>
  <div v-if="getComments.length" class="comment-container">
    <h1>Comments</h1>
    <Comment v-for="comment in getComments" :key="comment.id" :comment="comment" :isSelected="selectedPhoto.isSelected" />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Comment from '@/components/Comment'
export default {
  components: {
    Comment
  },
  computed: {
    ...mapGetters([
      'getComments'
    ]),
    ...mapState([
      'selectedPhoto'
    ])
  }  
}
</script>

<style>

</style>
