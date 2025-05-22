import { episodes } from '@/app/data/episodes';
import { notFound } from 'next/navigation';
import AudioPlayer from '@/app/components/AudioPlayer'

type Props = { params: { slug: string } };

export default function EpisodePage({ params }: Props) {
  const episode = episodes.find((e) => e.slug === params.slug);

  if (!episode) return notFound();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{episode.title}</h1>
      <p className="mt-4 mb-6">{episode.description}</p>
      <AudioPlayer src={episode.audioUrl} />
    </div>
  );
}
