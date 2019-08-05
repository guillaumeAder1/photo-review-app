<template>
  <div id="app">
    <ListContainer />
    <PhotoContainer />
    <CommentContainer />
    <SelectionContainer />
    <div v-if="errors.length">
      <span class="red" v-for="(error, ind) in errors" :key="ind">{{ error.message }}</span>
    </div>
  </div>
</template>

<script>
import ListContainer from '@/components/ListContainer'
import PhotoContainer from '@/components/PhotoContainer'
import SelectionContainer from '@/components/SelectionContainer'
import CommentContainer from '@/components/CommentContainer'

import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    ListContainer,
    PhotoContainer,
    CommentContainer,
    SelectionContainer
  },
  computed: {
    ...mapState([
      'errors',
      'selectionList'
    ])
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: auto;
  display: flex;
}
#app div {
  flex: 1;
  margin: 0px;
  padding: 10px;
}
.red{
  color: red;
}
</style>
