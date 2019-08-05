<template>
  <div v-if="selectedPhoto" class="photo-container">
    <h1>Details</h1>
    <div v-if="selectedPhoto">
      <h3>#{{ selectedPhoto.id }} {{ selectedPhoto.title }} <button @click="addToSelection(selectedPhoto)">add to selection</button></h3>     
      <a :href="selectedPhoto.url">See original</a> from <span>album: {{ selectedPhoto.albumId }}</span>
      <div>
        <img :src="selectedPhoto.thumbnailUrl" />
        <img :src="selectedPhoto.url" />
      </div>     
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {  
  name: 'PhotoContainer',
  computed: {
    ...mapState([
      'selectedPhoto'
    ])
  },
  methods: {
    ...mapActions([
      'addToSelection'
    ])
  }
}
</script>

<style>
.photo-container{
  /* border: 1px solid blue; */
  /* flex: 3; */
  /* padding: 10px; */
}
img{
  padding: 5px;
  vertical-align: top;
}
.comments{
  text-align: left;
}
.comments strong{
  text-transform: uppercase;
}

</style>
