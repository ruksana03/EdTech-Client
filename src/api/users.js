
import axiosSecure from "./axiosSecure"


export const getAllUsers = async () => {
    const { data } = await axiosSecure('/users')
    return data
  }