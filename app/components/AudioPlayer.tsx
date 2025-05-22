type Props = { src: string };

export default function AudioPlayer({ src }: Props) {
  return (
    <audio controls className="w-full">
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}
