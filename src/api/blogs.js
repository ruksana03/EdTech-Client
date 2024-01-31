import axiosSecure from "./axiosSecure"


export const getAllBlogs = async () => {
    const { data } = await axiosSecure('/blogs')
    return data
  }

  // Fetch single room data from db
