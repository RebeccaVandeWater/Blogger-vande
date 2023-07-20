<template>
  <div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="handleSubmit()">
          <div class="mb-3">
            <label for="title">Title</label>
            <input type="text" id="title" minlength="3" maxlength="40" class="form-control" v-model="editable.title">
          </div>
          <div class="mb-3">
            <label for="body">Body</label>
            <textarea type="text" id="body" minlength="3" maxlength="200" class="form-control" rows="5" columns="10" v-model="editable.body"></textarea>
          </div>
          <div class="mb-3">
            <label for="imgUrl">Image Url</label>
            <input type="url" id="imgUrl" minlength="3" maxlength="200" class="form-control" v-model="editable.imgUrl">
          </div>

          <button class="btn btn-success" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import { ref, watchEffect } from 'vue';
import { blogsService } from '../services/BlogsService.js';
import Pop from '../utils/Pop.js';
import { Modal } from 'bootstrap';
import { AppState } from '../AppState.js';

export default {
  setup(){
    const editable = ref({})

    watchEffect(() => {
      if(AppState.activeBlog) {
        editable.value = {...AppState.activeBlog}

      }
    }) 

    return {
      editable,
      handleSubmit() {
        if(editable.value.id) {
          this.editBlog()
        }
        else {
          this.createBlog()
        }
      },
      async createBlog(){
        try {
          const newBlog = editable.value
          await blogsService.createBlog(newBlog)
          Modal.getOrCreateInstance('#formModal').hide()
          editable.value = {}
        } catch (error) {
          Pop.error(error.message)
        }
      },
      async editBlog() {
        try {
          const blogData = editable.value
          await blogsService.editBlog(blogData)
          Modal.getOrCreateInstance('#formModal').hide()
          editable.value = {}
        } catch (error) {
          Pop.error(error.messge)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>