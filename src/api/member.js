import axiosSecure from "./axiosSecure"

export const postMember = async memberData => {
  try {
      const { data } = await axiosSecure.post(`/members`, memberData);
      return data;
  } catch (error) {
      throw new Error('Failed to post member: ' + error.message);
  }
};

export const getAllMembers = async () => {
  const { data } = await axiosSecure('/all-member')
  return data
};


export const getOneMember = async id => {
  const { data } = await axiosSecure(`/all-member/${id}`)
  return data
};

export const updateMemberInfo = async (id, updatedData) => {
  try {
    const { data } = await axiosSecure.put(`/member/update/${id}`, updatedData);
    return data;
  } catch (error) {
    throw new Error('Failed to update member information: ' + error.message);
  }
};



