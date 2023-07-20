<template>
  <div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="createBlog()">
          <div class="mb-3">
            <label for="title">Title</label>
            <input type="text" id="title" minlength="3" maxlength="40" class="form-control">
          </div>
          <div class="mb-3">
            <label for="body">Body</label>
            <textarea type="text" id="body" minlength="3" maxlength="200" class="form-control" rows="5" columns="10"></textarea>
          </div>
          <div class="mb-3">
            <label for="imgUrl">Image Url</label>
            <input type="url" id="imgUrl" minlength="3" maxlength="200" class="form-control">
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
export default {
  setup(){
    return {
      async createBlog(){
        
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>