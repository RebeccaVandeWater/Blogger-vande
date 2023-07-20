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

  setActiveBlog(blog) {
    AppState.activeBlog = blog
  }
}

export const blogsService = new BlogsService