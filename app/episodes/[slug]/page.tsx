import { notFound } from 'next/navigation';
import { episodes } from '@/app/data/episodes';
import type Episode from '@/app/types/episode';

type EpisodePageProps = {
  params: {
    slug: string;
  };
};

// ✅ Now async — allows future use of headers(), cookies(), fetch(), etc.
export default async function EpisodePage({ params }: EpisodePageProps) {
  const episode: Episode | undefined = episodes.find(
    (ep: Episode) => ep.slug === params.slug
  );

  if (!episode) return notFound();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-yellow">{episode.title}</h1>
      <p className="mt-4 text-lg text-foreground">{episode.description}</p>
      <audio controls className="mt-6 w-full">
        <source src={episode.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
