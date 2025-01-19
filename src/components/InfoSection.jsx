import {
  FaShippingFast,
  FaHeadset,
  FaMoneyBillWave,
  FaLock,
  FaTags,
} from "react-icons/fa";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast />,
      title: "Free Shipping",
      description: "Get yout orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset />,
      title: "Support 24/7 ",
      description: "We are here to assest you",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "100% Money Back",
      description: "Full refund if you are not satisfied",
    },
    {
      icon: <FaLock />,
      title: "Payment Secure",
      description: "Your payment information is safe with us",
    },
    {
      icon: <FaTags />,
      title: "Discount",
      description: "Enjoy the best prices on our products",
    },
  ];

  return (
    <div className="bg-white p-8 grid justify-center">
      <div className="responsive-Info container grid gap-y-12 md:grid-cols-3 lg:grid-cols-5  md:gap-8">
        {infoItems.map((items, index) => {
          return (
            <div
              className=" w-60 border hover:border-red-500 rounded-lg flex flex-col items-center text-center p-4 shadow-lg 
              transform transition-transform duration-300 hover:scale-105"
              key={index}
            >
              <p className="text-3xl text-red-500">{items.icon}</p>
              <p className="my-1 font-semibold text-lg" >{items.title}</p>
              <p className="text-gray-600" >{items.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoSection;
