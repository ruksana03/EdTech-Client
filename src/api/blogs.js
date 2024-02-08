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


