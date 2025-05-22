import { episodes } from '@/app/data/episodes';
import { notFound } from 'next/navigation';
import AudioPlayer from '@/app/components/AudioPlayer'
import { use } from "react"


export default function Page(props) {

     const params = use(props.params)
//   const searchParams = use(props.searchParams)
//   const slug = params.slug
//   const query = searchParams.query

  const episode = episodes.find((ep) => ep.slug === params.slug);
  if (!episode) return notFound();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{episode.title}</h1>
      <p className="mt-4">{episode.description}</p>
      <audio controls className="mt-6 w-full">
        <source src={episode.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
