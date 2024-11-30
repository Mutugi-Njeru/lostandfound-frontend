import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-500 via-red-500 to-black text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold">
            Lost and Found Identification Card Reporting System
          </h1>
          <p className="mt-4 text-lg">
            Securely report lost and found ID cards and get connected quickly.
          </p>
          <div className="mt-6">
            <button
              onClick={() => navigate("/lost")}
              className="bg-white text-black font-semibold py-3 px-8 rounded shadow-lg hover:bg-gray-200"
            >
              Report Lost ID
            </button>
            <button
              onClick={() => navigate("/found")}
              className="ml-4 bg-white text-black font-semibold py-3 px-8 rounded shadow-lg hover:bg-gray-200"
            >
              Report Found ID
            </button>
          </div>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            How It Works
          </h2>

          <div className="mt-12 flex flex-wrap justify-center">
            <motion.div
              className="w-full md:w-1/3 px-4 mb-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="p-6 bg-white rounded-lg shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold text-green-600">Step 1</h3>
                <p className="mt-4 text-gray-600">
                  Report a lost or found ID card with the necessary details.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/3 px-4 mb-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="p-6 bg-white rounded-lg shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold text-green-600">Step 2</h3>
                <p className="mt-4 text-gray-600">
                  The system matches lost and found cards based on details.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="w-full md:w-1/3 px-4 mb-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="p-6 bg-white rounded-lg shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold text-green-600">Step 3</h3>
                <p className="mt-4 text-gray-600">
                  Get notified and connect with the reporter/finder.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Features
          </h2>
          <div className="mt-12 flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 px-4 mb-8 text-center">
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-red-500">
                  Secure Reports
                </h3>
                <p className="mt-4 text-gray-600">
                  Your data is encrypted and protected.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8 text-center">
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-red-500">
                  Easy to Use
                </h3>
                <p className="mt-4 text-gray-600">
                  Submit reports or search IDs with ease.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8 text-center">
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-red-500">
                  Notifications
                </h3>
                <p className="mt-4 text-gray-600">
                  Get alerts when a match is found.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-500 via-red-500 to-black text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Lost & Found ID System. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:underline">
              Terms
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Privacy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
