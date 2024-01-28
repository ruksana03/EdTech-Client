import axiosCommon from "."
 
export const createPaymentIntent = async price => {
    const { data } = await axiosCommon.post('/create-payment-intent', price)
    return data
}
  
// save item info in db
export const saveItemInfo = async paymentInfo => {
    const { data } = await axiosCommon.post('/bookings', paymentInfo)
    return data
  }