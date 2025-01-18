import { motion } from "framer-motion";
import { Card } from "../components/Card";
import Navbar from "../components/NavBar";

const DashboardPage = () => {

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="max-w-full w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
      >
        <Navbar />
        <h2 className="text-3xl font-bold mt-10 mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
          PRODUCTS
        </h2>

        <motion.div>
          <Card className="py-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-4"
        >
        </motion.div>
      </motion.div>
    </>
  );
};

export default DashboardPage;

