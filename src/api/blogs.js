import axiosSecure from "./axiosSecure"

export const postBlog = async blogData => {
  try {
      const { data } = await axiosSecure.post(`/blogs`, blogData);
      return data;
  } catch (error) {
      throw new Error('Failed to post blog: ' + error.message);
  }
};

export const getAllBlogs = async () => {
  const { data } = await axiosSecure('/blogs')
  return data
}

// http://localhost:5000/blog/65bcf92c1ff140f79aa0b416

export const getOneBlog = async id => {
  const { data } = await axiosSecure(`/blog/${id}`)
  return data
}

export const updateBlogInfo = async (id, blog) => {
  const { data } = await axiosSecure.put(`/blog/updated/${id}`, blog);
  return data;
}


