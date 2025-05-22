import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className="bg-background text-foreground border-b border-foreground px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            --- put a gif here ---
          </Link>
          <div className="space-x-4">
            <Link href="/episodes" className="hover:underline">
              Episodes
            </Link>
            <Link href="/merch" className="hover:underline">
              Merch
            </Link>
            <Link href="/locals" className="hover:underline">
              Locals
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </div>
        </div>
      </nav>
      <div className="h-3 w-full bg-gradient-to-r from-rob-red via-rob-orange to-rob-yellow" />
{/* <div className="h-[2px] w-full bg-gradient-to-r from-rob-cyan via-rob-blue to-rob-magenta opacity-80" /> */}

    </>
  );
}
