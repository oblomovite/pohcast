import { episodes } from '@/app/data/episodes';
import Link from 'next/link';

export default function EpisodeList() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Episodes</h1>
      <ul className="space-y-4">
        {episodes.map((ep) => (
          <li key={ep.slug}>
            <Link href={`/episodes/${ep.slug}`} className="text-blue-600 underline">
              {ep.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
