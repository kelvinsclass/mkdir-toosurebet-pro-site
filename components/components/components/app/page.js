import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-20">
        <HeroBanner />
        <section className="max-w-7xl mx-auto p-6">
          <h2 className="text-3xl font-bold text-primary-green mb-4">Promotions Actuelles</h2>
          <p>Découvrez nos offres pour des paris sur le football et plus.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
