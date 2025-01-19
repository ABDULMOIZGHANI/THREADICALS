import React, { useState } from "react";
import { useRef } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FcOk } from "react-icons/fc";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({setOrder}) => {
  const cart = useSelector((state) => state.cart.cartProducts);
  // console.log(cart);
  const productsInCartQ = useSelector((state) => state.cart);

  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(true);
  const [paymentToggle, setPaymentToggle] = useState(true);

  const [paymentMethod, setPaymentMethod] = useState("cod");
  
  // ============ For Place Order =========
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    phoneNumber: "" ,
    address: "",
    city: "",
    zipCode: null 
  });
  
  const navigate = useNavigate()
  
  const inputRef = useRef()

  const handleConfirmOrder = ()=>{
    const newOrder = {
      products: cart,
      orderNumber: '12345',
      shippingInformation : shippingInfo,
      totalPrice: productsInCartQ.totalPrice,
    }
    setOrder(newOrder)
    if(shippingInfo.address == "" || shippingInfo.name == "" || shippingInfo.phoneNumber == "" ) {
      return alert("Kindly Fill All The Fields....Name, Phone Number, Address") 
    }
    else{
      navigate('/order-confirmation');
    } 
  }

  return (
    <div className="container mx-auto min-h-96 pb-20 pt-10 px-2 md:px-16 lg:px-24">
      <h3 className="text-3xl font-bold">CHECKOUT</h3>
      {/* Make 2 colmns */}
      {/* <div className= {`${paymentMethod === "debit card" && paymentToggle && billingToggle && shippingToggle ? "gap-y-80" : null } flex flex-col xl:gap-0 xl:flex-row justify-between mb-56 xl:space-x-10 mt-8`} > */}
      <div className= {`gap-y-14 flex flex-col xl:gap-0 xl:flex-row justify-between mb-56 xl:space-x-10 mt-8`} >
        {/* ================================ 1st Column ======================= */}
        {/* <div className="md:w-2/3 max-h-[800px] overflow-y-scroll"> */}
        <div className="w-full xl:w-2/3 max-h-[800px]">
          {/* ============ Billing Information ======================== */}
          <div className="border p-4  mb-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg mb-2 font-semibold">BIling Information</h3>
              {billingToggle ? (
                <FaAngleUp
                  className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity "
                  onClick={() => setBillingToggle(false)}
                />
              ) : (
                <FaAngleDown
                  className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity "
                  onClick={() => setBillingToggle(true)}
                />
              )}
            </div>
            <div className={billingToggle ? "block" : "hidden"}>
              <div className="space-y-4">
                <div>
                  <label className="block mt-3 mb-1 text-gray-700">Name</label>
                  <input
                    className="w-full px-3 py-2 border"
                    placeholder="Enter Your Name"
                    type="text"
                    onChange={(e)=> setShippingInfo({...shippingInfo , name: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block mt-3 mb-1 text-gray-700">Email</label>
                  <input
                    className="w-full px-3 py-2 border"
                    placeholder="Enter Your Email"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block mt-3 mb-1 text-gray-700">Phone</label>
                  <input
                    className="w-full px-3 py-2 border"
                    placeholder="Enter Your Number"
                    type="number"
                    max={11}
                    onChange={(e)=> setShippingInfo({...shippingInfo , phoneNumber: e.target.value})}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ================ Shipping Information ============= */}
          <div className="border p-4 mb-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg mb-2 font-semibold">Shipping Toggle</h3>
              {shippingToggle ? (
                <FaAngleUp
                  className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity "
                  onClick={() => setShippingToggle(false)}
                />
              ) : (
                <FaAngleDown
                  className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity "
                  onClick={() => setShippingToggle(true)}
                />
              )}
            </div>
            <div className={shippingToggle ? "block" : "hidden"}>
              <div className="space-y-4">
                <div>
                  <label className="block mt-3 mb-1 text-gray-700" >
                    Address
                  </label>
                  <input
                    className="w-full px-3 mb-1 py-2 border"
                    placeholder="Enter Your Address"
                    type="text"
                    onChange={(e)=> setShippingInfo({...shippingInfo , address: e.target.value})}
                    ref={inputRef}
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block mt-3 mb-1 text-gray-700">City</label>
                  <input
                    className="w-full px-3 py-2 border"
                    placeholder="Enter Your City"
                    type="text"
                    onChange={(e)=> setShippingInfo({...shippingInfo , city: e.target.value})}
                    
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block mt-3 mb-1 text-gray-700">
                    Zip Code
                  </label>
                  <input
                    className="w-full px-3 py-2 border"
                    placeholder="Enter Your Zip Code"
                    type="number"
                    onChange={(e)=> setShippingInfo({...shippingInfo , zipCode: e.target.value})}
                    
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ============ Payment Method ====================== */}
          <div className="border p-4 mb-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg mb-2 font-semibold">Payment Method</h3>
              {paymentToggle ? (
                <FaAngleUp
                  className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity "
                  onClick={() => setPaymentToggle(false)}
                />
              ) : (
                <FaAngleDown
                  className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity "
                  onClick={() => setPaymentToggle(true)}
                />
              )}
            </div>
            <div className={paymentToggle ? "block" : "hidden"}>
              <div className="space-y-4">
                <div className="flex items-center mb-2">
                  <input
                    name="payment"
                    type="radio"
                    className="cursor-pointer"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <label
                    className="block ml-2 text-gray-700"
                    onClick={() => setPaymentMethod("cod")}
                  >
                    COD
                  </label>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <input
                    name="payment"
                    type="radio"
                    className="cursor-pointer"
                    checked={paymentMethod === "debit card"}
                    onChange={() => setPaymentMethod("debit card")}
                  />
                  <label
                    className="block ml-2 text-gray-700"
                    onClick={() => setPaymentMethod("debit card")}
                  >
                    Debit Card
                  </label>
                </div>
                {/* if DC in checked */}
                {paymentMethod === "debit card" && (
                  <div className="bg-gray-100 p-4">
                    <h3 className="text-lg font-bold mb-2">
                      Debit Card Information
                    </h3>
                    <div>
                      <label htmlFor="" className="mt-1">
                        Card Number
                      </label>
                      <input
                        className="w-full px-3 py-2 border"
                        placeholder="Enter Your Card Number"
                        type="text"
                      />
                    </div>
                    <div className="mt-3">
                      <label>Card Holder Name</label>
                      <input
                        className="w-full px-3 py-2 border"
                        placeholder="Enter Your Card Holder Name"
                        type="text"
                      />
                    </div>
                    <div className="mt-3">
                      <label>Expiry Date</label>
                      <input
                        className="w-full px-3 py-2 border"
                        placeholder="Enter Expiry Date"
                        type="text"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <hr />
            <div className="flex">
              {paymentMethod.toLocaleUpperCase()}{" "}
              <FcOk className="text-green-800 font-extrabold ml-2 mt-0.5 text-xl" />{" "}
            </div>
          </div>
        </div>
        {/* ================================ 2nd Column ======================= */}
        {/* ============  for Cart total ================ */}
        {/* ===============Fetching Products ============ */}
        {/* <div className="relative w-full xl:w-1/3 xl:mt-0 max-h-[600px] xl:sticky top-5 bg-white p-4 rounded-lg shadow-md border mt-10"> */}
        <div className={`${paymentMethod === "debit card"? "mt-[20rem]" : "mt-10"}  relative w-full xl:w-1/3 xl:mt-0 max-h-[600px] xl:sticky top-5 bg-white p-4 rounded-lg shadow-md border `}>
          <h3 className="text-xl font-semibold">Order Summary</h3>
          <div className="mt-8">
            <div className="border-t-2">
              {/* Products.... */}
              {/* <div className={h-72 mt-3   overflow-y-scroll}> */}
              <div
                className={
                  cart.length > 0 ? "h-72 mt-3 overflow-y-scroll" : "h-72 mt-3"
                }
              >
                {cart.map((product, i) => {
                  return (
                    <div className="mt-1 odd:bg-red-50" key={i + 2}>
                      <div className="flex ">
                        <img src={product.image} className="h-10 w-10 md:h-12 rounded-md" />
                        <div className="ml-4">
                          <h4 className="text-sm md:text-md" >{`${product.title.slice(0, 25)} ...`}</h4>
                          <p className="font-semibold">
                            $ {product.price * product.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Total Price */}
              {
                cart.length> 0? 
                <div className="flex justify-between my-4 font-semibold">
                <p className="font-semibold" >Total Price: </p>
                <p className="font-semibold" >${productsInCartQ.totalPrice.toFixed(2)}</p>
              </div> : null
              }
            </div>
            {/* button == Place Order Button */}
            { cart.length > 0 ? 
            <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800 rounded-full transition-all" onClick={handleConfirmOrder} >
              Place Order
            </button> : null}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
