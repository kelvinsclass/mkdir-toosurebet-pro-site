import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroBanner() {
  return (
    <motion.section 
      className="hero text-white py-20 text-center"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold mb-4">Bienvenue sur TOOSUREBET</h1>
      <p className="text-xl mb-6">Paris sportifs trop sûrs pour des gros gains !</p>
      <div className="flex justify-center space-x-4">
        <Image src="https://via.placeholder.com/400x200?text=Messi" alt="Messi" width={400} height={200} className="rounded-lg shadow-lg" />
        <Image src="https://via.placeholder.com/400x200?text=Haaland" alt="Haaland" width={400} height={200} className="rounded-lg shadow-lg" />
      </div>
      <button className="bg-accent-yellow text-primary-green px-6 py-3 rounded-full mt-6 font-bold hover:bg-yellow-300">Rejoindre Maintenant</button>
    </motion.section>
  );
}
