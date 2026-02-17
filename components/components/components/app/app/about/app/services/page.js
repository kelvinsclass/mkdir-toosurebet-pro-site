import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Services() {
  return (
    <div>
      <Header />
      <main className="pt-20 max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-primary-green mb-4">Nos Services</h1>
        <ul className="list-disc pl-6">
          <li>Conseils de paris trop sûrs.</li>
          <li>Promotions sur matchs de football.</li>
          <li>Opportunités d'emploi dans le secteur.</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
