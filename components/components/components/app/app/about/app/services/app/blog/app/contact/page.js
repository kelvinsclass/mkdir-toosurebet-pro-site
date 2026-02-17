import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulaire envoyé ! (Simulation)');
  };

  return (
    <div>
      <Header />
      <main className="pt-20 max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-primary-green mb-4">Contactez-Nous</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Nom" className="w-full p-2 border rounded" required />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
          <textarea placeholder="Message" className="w-full p-2 border rounded" required></textarea>
          <button type="submit" className="bg-accent-yellow text-primary-green px-6 py-2 rounded">Envoyer</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
