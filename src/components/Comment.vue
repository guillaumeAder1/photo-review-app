<template>
  <div class="comments">
    <strong>{{comment.name}}</strong> // <i>{{comment.email}}</i>
    <br>
    <div :class="[editable ? 'edit' : '']">
      <code :contenteditable="editable" ref="textField">{{comment.body}}</code>
    </div>
    <br>
    <button @click="editComment(comment)">edit</button>
    <button @click="addComment(comment)">add</button>
    <button @click="saveComment(comment)">save</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    comment: {
      type: Object
    }
  },
  data() {
    return {
      editable: false
    }
  },
  methods: {
    ...mapActions([
      'updateComment'
    ]),
    addComment (comment) {

    },
    editComment (comment) {
      console.log(comment)
      this.editable = true
    },
    saveComment (comment) {
      this.editable = false
      console.log(this.$refs.textField)
      comment.body = this.$refs.textField.innerText
      this.updateComment(comment)
    }
  }
}
</script>

<style>
.edit{
  border: 1px solid red;
}
</style>
