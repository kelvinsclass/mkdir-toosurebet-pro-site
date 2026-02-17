import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div>
      <Header />
      <main className="pt-20 max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-primary-green mb-4">À Propos de TOOSUREBET</h1>
        <p>Nous sommes des spécialistes en paris sportifs, axés sur les sports et loisirs. Rejoignez-nous pour des opportunités excitantes.</p>
      </main>
      <Footer />
    </div>
  );
}
