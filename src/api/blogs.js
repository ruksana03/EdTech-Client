import axiosSecure from "./axiosSecure"

export const postBlog = async blogData => {
  const { data } = await axiosSecure.post(`/blogs`, blogData)
  return data
}

export const getAllBlogs = async () => {
  const { data } = await axiosSecure('/blogs')
  return data
}


