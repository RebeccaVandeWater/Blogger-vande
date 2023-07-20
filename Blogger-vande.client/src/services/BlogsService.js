import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService {
  async getBlogs() {
    const res = await api.get('api/blogs')

    logger.log("Got Blogs?", res.data)
    const blogs = res.data.map(pojo => new Blog(pojo))

    AppState.blogs = blogs
  }

  async getProfileBlogs(profileId) {
    const res = await api.get('api/blogs', {
      params: {
        creatorId: profileId
      }
    })
    logger.log('get blogs by profile id?', res.data)

    const blogs = res.data.map(pojo => new Blog(pojo))

    AppState.blogs = blogs
  }

  setActiveBlog(blog) {
    AppState.activeBlog = blog
  }

  async createBlog(newBlog) {
    const res = await api.post('api/blogs', newBlog)
    logger.log('[here is a new one?]', res.data)
    const blog = new Blog(res.data)
    AppState.blogs.push(blog)
  }

  async editBlog(blogData) {
    const res = await api.put(`api/blogs/${blogData.id}`, blogData)
    logger.log('[is it edited?]', res.data)
    const blogIndex = AppState.blogs.findIndex(b => b.id == blogData.id)
    const newBlog = new Blog(res.data)
    AppState.blogs.splice(blogIndex, 1, newBlog)
  }
  async removeBlog(blogToDelete) {
    const res = await api.delete(`api/blogs/${blogToDelete}`)
    logger.log('[we deletin?]', res.data)
    const blogIndex = AppState.blogs.findIndex(b => b.id == blogToDelete)
    AppState.blogs.splice(blogIndex, 1)
  }
}

export const blogsService = new BlogsService