import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4 text-center">
      <div>
        <p className="font-display text-gradient text-7xl font-bold">404</p>
        <p className="mt-4 text-slate-400">Esta página no existe.</p>
        <Link href="/" className="btn-primary mt-8">Volver al inicio</Link>
      </div>
    </main>
  );
}
