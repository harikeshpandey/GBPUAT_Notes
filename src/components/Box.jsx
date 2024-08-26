import { motion } from 'framer-motion';

const Box = ({ children }) => (
  <motion.div
    className="bg-dark-700 p-6 rounded-lg shadow-md cursor-pointer border border-dark-600 hover:border-accent transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.div>
);

export default Box;