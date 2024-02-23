import axiosSecure from "./axiosSecure";



// Send user info to database 
export const storeUserInfo = async (user) => {
  if (!user || !user.email) {
    return null;
  }
  const currentUser = {
    name:user.name,
    email: user.email,
    role: 'normalUser',
    // role: 'Admin',
    status: 'Verified',
  };

  const { data } = await axiosSecure.put(`/users/${user.email}`, currentUser);
  return data;
};

export const getAllUsers = async () => {
    const { data } = await axiosSecure('/users')
    return data
  }

  export const getSingleUser = async userEmail => {
    try {
      const data = await axiosSecure(`/user/id/${userEmail}`);
      console.log('getSingleUser data:', data);
      return data;
    } catch (error) {
      console.error('Error in getSingleUser:', error);
      throw error;
    }
  };

  // for user role 
export const getUserRole = async email =>{
  const {data} = await axiosSecure(`/user/email/${email}`)
  return data.role;
}


// Send user info to database 
export const updateUserRole = async ({email,role}) => {
  const currentUser = {
    // name:user.displayName,
    email,
    role,
    status: 'Verified',
  };
  const { data } = await axiosSecure.put(`/users/update/${email}`, currentUser);
  return data;
};

export const deleteSingleUser = async id => {
  const { data } = await axiosSecure.delete(`/user/${id}`)
  return data
}