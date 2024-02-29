
import axiosSecure from "./axiosSecure"

export const postCover = async coverData => {
  try {
      const { data } = await axiosSecure.post(`/cover`, coverData);
      return data;
  } catch (error) {
      throw new Error('Failed to post blog: ' + error.message);
  }
};

export const getAllCover = async () => {
  const { data } = await axiosSecure('/All-photo')
  return data
}

export const updateCoverPhoto  = async (id, updatedData) => {
  try {
    const { data } = await axiosSecure.patch(`/api/cover/${id}`, updatedData);
    return data;
  } catch (error) {
    throw new Error('Failed to update member information: ' + error.message);
  }
};
