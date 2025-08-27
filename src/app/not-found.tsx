import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl text-white/80 mb-6">Page Not Found</h2>
        <p className="text-white/60 mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
        </p>
        <Link 
          href="/"
          className="inline-block bg-gradient-to-r from-brand-red to-red-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-glow transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
