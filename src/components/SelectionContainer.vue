<template>
  <div v-if="selectionList.length" class="selection-container">
    <h1>Selection</h1>
    <div v-for="photo in selectionList" :key="photo.id">
      <span>ID#{{photo.id}}</span>
      <div>
        <img :src="photo.thumbnailUrl"/>
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


