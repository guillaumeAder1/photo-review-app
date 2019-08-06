<template>
  <div v-if="selectionList.length" class="selection-container">
    <h1>Selection</h1>
    <div v-for="photo in selectionList" :key="photo.id">
      <span>ID#{{photo.id}}</span>
      <div>
        <img :src="photo.thumbnailUrl"/>
      </div>
      <div v-if="photo.comments">
        <div v-for="(comment, index) in photo.comments" :key="index">
          {{ comment.body.substring(0, 20) }}...
        </div>
      </div>
      <button @click="removeFromSelection(photo)">remove #{{photo.id}}</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'selectionList'
    ])
  },
  methods: {
    ...mapActions([
      'removeFromSelection'
    ])
  }
}
</script>


