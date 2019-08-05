<template>
  <div class="list-container">
    <h1>Photos</h1>
    <input type="text" v-model="search" />
    <ListPhotos :list="filtered" @selection="selectPhoto" />  
    <button @click="updatePagination(false)">prev</button>
    <button @click="updatePagination(true)">next</button>
  </div>
</template>

<script>
import ListPhotos from './ListPhotos'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    ListPhotos
  },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    ...mapGetters([
      'getPhotos'
    ]),
    filtered () {
      return this.getPhotos.filter(el => el.title.indexOf(this.search) > -1 )
    }
  },
  methods: {
    ...mapActions([
      'fetchPhotos',
      'updatePagination',
      'selectPhoto'
    ])
  },
  mounted() {
    this.fetchPhotos()
  }
}
</script>

<style>
.list-container {
  background: rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  max-width: 25%;
  /* flex: 1; */
  /* padding: 20px; */
}

</style>
