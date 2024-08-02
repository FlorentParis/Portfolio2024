import { useState } from 'react';

const allLinks = [
  'https://www.youtube.com/watch?v=83DCAtLl2Yg',
  'https://www.youtube.com/watch?v=CULrAoOrVXE',
  'https://www.youtube.com/watch?v=jRxQleoY270',
  'https://www.youtube.com/watch?v=QrR_gm6RqCo',
];

const useRandomVideoOpener = () => {
  const [randomVideo, setRandomVideo] = useState<string>('');

  const openRandomVideo = () => {
    const randomIndex = Math.floor(Math.random() * allLinks.length);
    const selectedVideo = allLinks[randomIndex];
    setRandomVideo(selectedVideo);
    window.open(selectedVideo, '_blank');
  };

  return openRandomVideo;
};

export default useRandomVideoOpener;
