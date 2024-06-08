import '@/app/globals.css';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

/* components */
import PageContainer from '@/components/PageContainer';

const Works = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const updateScrollWidth = () => {
      const fullWidth = scrollContainer.scrollWidth;
      setScrollWidth(fullWidth / 2); //
    };

    updateScrollWidth();
    window.addEventListener('resize', updateScrollWidth);

    return () => window.removeEventListener('resize', updateScrollWidth);
  }, []);

  return (
    <PageContainer>
      <h1 className="text-6xl px-12 pt-[160px] pb-[100px] font-playfair-display">
        I am proud of the projects already completed so far,{' '}
        <span className="text-primary">those to come</span> will amaze you even
        more!
      </h1>
      <div className="flex flex-col w-full">
        <div
          className="bg-primary h-[200px] w-full overflow-hidden flex items-center"
          ref={scrollRef}
        >
          <motion.div
            className="flex items-center"
            style={{ x: -scrollWidth }}
            animate={{ x: [0, -scrollWidth] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          >
            <span className="font-playfair-display text-9xl whitespace-nowrap text-black -translate-y-2">
              EXPLORE MY WORKS
            </span>
            <span className="bg-white h-[60px] aspect-square rounded-full mx-20"></span>
            <span className="font-playfair-display text-9xl whitespace-nowrap text-black -translate-y-2">
              EXPLORE MY WORKS
            </span>
            <span className="bg-white h-[60px] aspect-square rounded-full mx-20"></span>
          </motion.div>
        </div>
        <div className="font-playfair-display bg-white mb-24 flex flex-col">
          <div className="p-5">
            <h2 className="text-primary text-5xl">This list will change...</h2>
            <p className="text-3xl text-black">
              These projects allowed me to test new technologies or ways of
              doing things, I hope to soon be able to show projects more in line
              with my creativity (like this portfolio).
            </p>
          </div>
          <div className="flex gap-12 overflow-scroll px-5 pb-5 pt-[10px]">
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

const ProjectCard = () => {
  return (
    <div className="aspect-video bg-[#6C6C6C] flex h-[40vw]">
      <h2>Project Title</h2>
      <p>Project description</p>
    </div>
  );
};

export default Works;
