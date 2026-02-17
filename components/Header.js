import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.5 }}
      className="bg-primary-green text-white p-4 shadow-lg fixed w-full z-10"
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">TOOSUREBET</Link>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-accent-yellow">Accueil</Link></li>
          <li><Link href="/about" className="hover:text-accent-yellow">À Propos</Link></li>
          <li><Link href="/services" className="hover:text-accent-yellow">Services</Link></li>
          <li><Link href="/blog" className="hover:text-accent-yellow">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-accent-yellow">Contact</Link></li>
        </ul>
      </nav>
    </motion.header>
  );
}
