import React from "react";

const ProductCard = ({ product }) => {
  
  return (
    <div className="bg-blue shadow-lg rounded-lg overflow-hidden ">
      <img
        src={product.p_image}
        alt={product.p_name}
        className="w-full h-48 object-cover h-auto"
      />
      <div className="p-5 ">
        <h3 className="text-lg font-semibold text-gray-800">{product.p_name}</h3>
        <p className="text-gray-600 mt-2">{product.p_desc}</p>
        <div className="mt-4">
          <span className="text-xl font-bold text-gray-900">Rs. {product.p_price}</span>
        </div>
      </div>
    </div>

    
  );
};

export default ProductCard;
