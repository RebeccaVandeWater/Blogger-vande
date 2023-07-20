<template>
  <div class="d-flex align-items-center justify-content-between">

  <div>
    <div class="d-flex m-2">
      <img class="avatar-img img-fluid" :src="blog.creator.picture" :alt="blog.creator.name">
      <p class="fs-3 ms-3">
        {{ blog.creator.name }}
      </p>
    </div>
    <div>
      <p class="fs-4 fw-bold">
        {{ blog.title }}
      </p>
      <p class="fs-5 card-body">
        {{ blog.body }}
      </p>
      <p>
        {{ blog.createdAt }}
      </p>
      <button @click="setActiveBlog()"  type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
        View Post
      </button>
    </div>
    </div>
    <div v-if="blog.imgUrl">
      <img class="img-fluid" :src="blog.imgUrl" :alt="blog.title">
    </div>
  </div> 
  
</template>


<script>
import { computed } from 'vue';
import { Blog } from '../models/Blog.js';
import { blogsService } from '../services/BlogsService.js';
import { AppState } from '../AppState.js';

export default {
  props:{
    blog:{type: Blog, required: true}
  },

  setup(props){

    return {
      activeBlog: computed(() => AppState.activeBlog),

      setActiveBlog(){

        blogsService.setActiveBlog(props.blog)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.avatar-img{
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

.card-body{
  max-height: 20vh;
  overflow-y: scroll;
}
</style>