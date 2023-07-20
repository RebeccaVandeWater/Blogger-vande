<template>

    <div class="container-fluid" v-if="profile">
      <section class="row  ">
        <div class="my-3 col-12 d-flex justify-content-center">
          <img :src="profile.coverImg" class="img-fluid coverPhoto" :alt="profile.name">
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <img class="avatarProfile" :src="profile.picture" :alt="profile.name">
          <p class="fs-3 ms-4">{{ profile.name }}</p>
        </div>
        <p class="fs-4">{{ profile.bio }}</p>
      </section>
      <section class="row">
        <div v-for="blog in blogs" :key="blog.id" class="col-md-10">
          <BlogCard :blog="blog"/>
        </div>
      </section>
    </div>
    
  </template>


<script>
import BlogCard from '../components/BlogCard.vue';
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { blogsService } from '../services/BlogsService.js';
import { profilesService } from '../services/ProfilesService.js'
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();
    
        async function getProfile() {
            try {
                const profileId = route.params.profileId;
                await profilesService.getProfile(profileId);
            }
            catch (error) {
                Pop.error(error.message);
            }
        }
        async function getProfileBlogs() {
            try {
                const profileId = route.params.profileId;
                await blogsService.getProfileBlogs(profileId);
            }
            catch (error) {
                Pop.error(error.message);
            }
        }

        onMounted(() => {
            getProfileBlogs();
            getProfile();
        });
        
        return {
            profile: computed(() => AppState.activeProfile),
            blogs: computed(() => AppState.blogs),
        };
    },
    components: { BlogCard }
}
</script>


<style lang="scss" scoped>
.coverPhoto{
  width: 60vh;
}
.avatarProfile{
  width: 20vh;
  height: 20vh;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
</style>