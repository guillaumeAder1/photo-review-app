<template>
  <div class="comments">
    <strong>{{comment.name}}</strong> // <i>{{comment.email}}</i>
    <br>
    <div :class="[editable ? 'edit' : '']">
      <code :contenteditable="editable" ref="textField">{{comment.body}}</code>
    </div>
    <br>
    <button v-if="!editable" @click="editComment(comment)">edit</button>
    <button v-if="editable" @click="saveComment(comment)">save</button>
    <button :disabled="!this.isSelected" @click="addComment(comment)">add to selection</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    comment: {
      type: Object
    },
    isSelected: {
      type: Boolean
    }
  },
  data() {
    return {
      editable: false
    }
  },
  methods: {
    ...mapActions([
      'updateComment',
      'addCommentPhoto'
    ]),
    addComment (comment) {
      this.addCommentPhoto(comment)
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
