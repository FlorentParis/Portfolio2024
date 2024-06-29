import '@/app/globals.css';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

/* components */
import PageContainer from '@/components/PageContainer';
import { MdArrowOutward, MdOutlineKeyboardArrowRight } from 'react-icons/md';

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
      <h1 className="text-6xl px-12 pt-[160px] pb-24 font-playfair-display">
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
        <div className="bg-white mb-24 flex flex-col gap-1">
          <div className="pt-5 px-5 font-playfair-display ">
            <h2 className="text-primary text-3xl">This list will change...</h2>
            <p className="text-black">
              These projects allowed me to test new technologies or ways of
              doing things, I hope to soon be able to show projects more in line
              with my creativity (like this portfolio).
            </p>
          </div>
          <div className="flex gap-5 overflow-scroll px-5 pb-5 pt-[10px]">
            <ProjectCard />
            <ProjectCard />
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
    <div className="aspect-video bg-[url('https://i.ytimg.com/vi/OpdZfwHWZR0/maxresdefault.jpg')] hover:bg-[url('https://i.giphy.com/ujTVMASREzuRbH6zy5.webp')] bg-center bg-no-repeat bg-cover flex h-[25vw]">
      <div className="w-full flex justify-between items-end p-5 relative">
        <div className="flex flex-col gap-1 ">
          <h3 className="text-2xl">Un titre de zinzin</h3>
          <p className="w-2/3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            ratione consequuntur porro doloribus vitae?
          </p>
        </div>
        <button className="absolute bottom-5 right-5 bg-primary min-w-[60px] aspect-square flex items-center justify-center rounded-full transition-all hover:min-w-[75px]">
          <MdOutlineKeyboardArrowRight className="text-white h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default Works;
