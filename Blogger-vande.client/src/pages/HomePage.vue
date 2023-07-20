<template>
  <div class="container-fluid">
    <div class="row p-2 justify-content-center">
      <div class="col-12">
        <h1>Blogger</h1>
        <button class="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#formModal">
          <i class="mdi mdi-plus"></i>
        </button>
      </div>
      <div class="col-md-10 my-2 border border-dark rounded card bg-white elevation-3" v-for="blog in blogs" :key="blog.id">  
        <BlogCard :blog="blog"/>
      </div>
    </div>
  </div>

  <FormModal />
  
  <ModalComponent>
    <template #body>
      <BlogCard v-if="activeBlog" :blog="activeBlog" />  
    </template>
  </ModalComponent>
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import {blogsService} from '../services/BlogsService.js'
import {AppState} from '../AppState.js'

export default {
  setup() {

    onMounted(() => {
      getBlogs()
    })

    async function getBlogs(){
      try {
        await blogsService.getBlogs()
      } catch (error) {
        Pop.error(error)
      }
    }

    return {
      blogs: computed(() => AppState.blogs),

      activeBlog: computed(() => AppState.activeBlog),

    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

</style>
