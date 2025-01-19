import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderConfirmation = ({order= 'empty'}) => {
    const navigate = useNavigate()

    const handleGoToShop = () => navigate("/Shop") 

  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
        <h2 className='text-2xl font-semibold mb-4' >Thank You For Your Order</h2>
        <p>Your order has been placed Successfully.</p>
        <div className='mt-6 p-4 border rounded-lg bg-gray-100' >
            <h3 className='text-xl font-bold mb-2' >Order Summary  </h3>
            <p>Order Number: {order.orderNumber}</p>
            <div className='mt-4'>
                <h2 className='font-bold mb-2' >Shipping Information</h2>
                <p>{order.shippingInformation.address}</p>
                <p>{order.shippingInformation.city}</p>
                <p>{order.shippingInformation.zipCode}</p>
            </div>
            <div className='mt-4' >
                <h3 className='text-md font-bold mb-2' >Items Ordered</h3>
                {
                    order.products.map((product,index)=>{
                        return(
                            <div key={index*9} className='flex justify-between mt-2' >
                                <p>{product.title.slice(0,25)}... x <b>{product.quantity}</b> </p>
                                <p>{product.price * product.quantity}</p>
                            </div>
                        )}
                    )
                }
            </div>
            <hr className='mt-4' />
            <div className='flex justify-between' >
                <span className='font-bold' >Total Price</span>
                <span className='font-bold' >{order.totalPrice}</span>
            </div>
            <div className='mt-4' >
            <button className="bg-red-600 text-white p-2 hover:bg-red-800 transition-all" onClick={handleGoToShop} >
              Continue Shopping 
            </button>
            </div>
        </div>
    </div>
  )
}

export default OrderConfirmation