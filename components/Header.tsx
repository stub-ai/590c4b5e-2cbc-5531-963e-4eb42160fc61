import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-blue-500 text-white">
      <Link href="/">
        <a className="text-2xl font-bold">Debate Club</a>
      </Link>
      <nav>
        <Link href="/login">
          <a className="text-lg">Login</a>
        </Link>
      </nav>
    </header>
  );
}