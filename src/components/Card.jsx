import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../pages/ProductCard";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa"; // Import the close icon

export const Card = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Fetch products from the backend
    axios
      .get("http://localhost:8080/allProducts")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the selected product for full-screen view
  };

  const closeModal = () => {
    setSelectedProduct(null); // Close the full-screen modal
  };

  return (
    <div className="bg-gray-100 p-5 rounded-lg mt-7">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-green-800 to-green-400 bg-clip-text text-transparent mb-8">
        Bikes
      </h1>

      {/* Grid container for product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleProductClick(product)}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      {/* Full-screen modal for selected product */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-5 rounded-lg max-w-3xl w-full relative"
          >
            <img
              src={selectedProduct.p_image}
              alt={selectedProduct.p_name}
              className="w-full h-64 object-cover rounded-md"
            />
            <h2 className="text-2xl font-bold text-gray-800 mt-5">
              {selectedProduct.p_name}
            </h2>
            <p className="text-gray-600 mt-2">{selectedProduct.p_desc}</p>
            <div className="mt-4">
              <span className="text-xl font-bold text-gray-900">
                Rs. {selectedProduct.p_price}
              </span>
            </div>

            {/* Fancy Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full hover:bg-red-800 transition ease-in-out duration-300 shadow-lg"
              aria-label="Close"
            >
              <FaTimes size={18} /> {/* Icon inside the button */}
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Card;
