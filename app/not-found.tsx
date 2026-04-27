import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="text-center">
        <div className="font-display text-[150px] leading-none text-maroon/10 mb-4 select-none">404</div>
        <h1 className="font-display text-4xl text-charcoal mb-4">Page Not Found</h1>
        <p className="font-body text-xl text-warm-gray mb-10 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 bg-maroon text-cream font-ui text-sm tracking-wide px-8 py-4 rounded-full hover:bg-maroon-light transition-all duration-300">
          Return Home
        </Link>
      </div>
    </div>
  );
}
