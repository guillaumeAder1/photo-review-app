<template>
  <ul>
    <li 
      @click="select(photo)" 
      v-for="photo in list" 
      :key="photo.id"
      :class="[photo.isSelected ? 'bold' : '']"> 
        #{{ photo.id }} - {{ photo.title }}
      </li>
  </ul>
</template>

<script>
export default {
  name: 'ListPhotos',
  props: {
    list: {
      type: Array,
      required: false
    }
  },
  methods: {
    select (photo) {
      this.$emit('selection', photo)
    }
  },
  computed: {
    listed() {return this.list},
    //isSelected() { return this.list.map(el => el.isSelected) }
  },
  // watch: {
  //   isSelected(changed) {
  //     console.log('okoko', changed)      
  //   }
  // }
}
</script>

<style>
ul{
  padding-inline-start: initial;
  list-style-type: none;
}
li{
  text-align: left;
  padding: 0 0 5px 0;
}
li:hover{
  background: lightgray;
  cursor: pointer;
}
li.bold{
  font-weight: 900;
}
</style>
