import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Blog() {
  return (
    <div>
      <Header />
      <main className="pt-20 max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-primary-green mb-4">Blog & Actualités</h1>
        <article className="mb-6">
          <h2 className="text-2xl font-semibold">Offres d'Emploi - 3 Février</h2>
          <p>Lisez attentivement et postulez via email: jobs@toosurebet.com.</p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
