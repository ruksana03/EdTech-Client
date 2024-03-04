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


export const getOneBlog = async id => {
  const { data } = await axiosSecure(`/blog/${id}`)
  return data
}



export const updateBlogInfo  = async (id, updatedData) => {
  try {
    const { data } = await axiosSecure.put(`/blog/update/${id}`, updatedData);
    return data;
  } catch (error) {
    throw new Error('Failed to update member information: ' + error.message);
  }
};
