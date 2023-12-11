import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl mb-4">Welcome to Debate Club</h1>
        <p className="text-lg">
          Join our community and engage in lively debates on a variety of topics.
        </p>
      </main>
    </div>
  );
}