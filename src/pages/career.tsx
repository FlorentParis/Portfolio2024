import { use, useEffect, useState } from 'react';
import '@/app/globals.css';

/* components */
import PageContainer from '@/components/PageContainer';
import Accordion from '@/components/Accordion';

const Career = () => {
  const [actualOpen, setActualOpen] = useState<number | null>(null);

  useEffect(() => {
    console.log(actualOpen);
  }, [actualOpen]);

  return (
    <PageContainer fullHeight>
      <div className="px-12 pt-[160px] pb-10 flex flex-col gap-7">
        <h1 className="text-6xl font-playfair-display">
          My <span className="text-primary">pro</span> and{' '}
          <span className="text-primary">academic</span> career.
        </h1>
        <p className="max-w-[400px] font-barlow-condensed">
          I started web development in high school, around the age of 16. I then
          attended two web development schools, Hetic and Efrei, while
          simultaneously working at several companies where I was able to build
          my current experience.
        </p>
      </div>
      <div className="flex flex-col pb-[100px]">
        <div className="text-white/50 px-10 py-5 grid grid-cols-[1fr_1fr_1fr_1fr_30px] border-b border-solid border-[#ffffff0d]">
          <span>POSITION</span>
          <span>AGENCY</span>
          <span>TYPE</span>
          <span>PERIOD</span>
        </div>
        <Accordion
          defaultOpen={actualOpen === 0}
          onClick={() => setActualOpen(0)}
          numberCols={4}
          content={{
            headerTexts: [
              'FRONT-END DEVELOPER',
              'BETC',
              'APPRENTICESHIP',
              '2023 - TODAY',
            ],
            body: 'Today, I work as a front-end developer at BETC, where I am responsible for integrating numerous internal tools for the agency.',
          }}
        />
        <Accordion
          defaultOpen={actualOpen === 1}
          onClick={() => setActualOpen(1)}
          numberCols={4}
          content={{
            headerTexts: [
              'FULL-STACK DEVELOPER',
              'Mocka',
              'APPRENTICESHIP',
              '2022 - 2023',
            ],
            body: 'Second year of an apprenticeship with the same team as the first year, but within a different structure and with a different ambition. My tasks included integrating the showcase website for our tool and creating two plugins (Figma and Sketch) in correlation with our tool.',
          }}
        />
        <Accordion
          defaultOpen={actualOpen === 2}
          onClick={() => setActualOpen(2)}
          numberCols={4}
          content={{
            headerTexts: [
              'FULL-STACK DEVELOPER',
              'OWNR Network',
              'APPRENTICESHIP',
              '2021 - 2022',
            ],
            body: 'First year of an apprenticeship in a startup that had just launched. Worked remotely with a team of three people. My tasks included integrating a showcase website and developing several projects across various domains (Security, Finance, Medical) using React.js, Tailwind, Node.js, and Express.',
          }}
        />
        <Accordion
          defaultOpen={actualOpen === 3}
          onClick={() => setActualOpen(3)}
          numberCols={4}
          content={{
            headerTexts: [
              'FULL-STACK DEVELOPER',
              'MY HOME CONNEXION',
              'INTERNSHIP',
              '2021',
            ],
            body: 'First professional experience as a Junior Web Developer, following a year of training at Hetic school. Initially responsible for improving the UX and UI of a site builder, and subsequently developed a navigation bar builder, an e-commerce module, a chatbot, and more.',
          }}
        />
      </div>
      <div className="flex flex-col pb-[100px]">
        <div className="text-white/50 px-10 py-5 grid grid-cols-[1fr_1fr_1fr_30px] border-b border-solid border-[#ffffff0d]">
          <span>SCHOOL</span>
          <span>DEGREE</span>
          <span>PERIOD</span>
        </div>
        <Accordion
          defaultOpen={actualOpen === 4}
          onClick={() => setActualOpen(4)}
          numberCols={3}
          content={{
            headerTexts: [
              'EFREI',
              'MASTERE DEV MANAGER FULL-STACK',
              '2023 - 2025',
            ],
            body: "I am currently studying at Efrei. The Master's program in Full Stack Development Management trains high-level developers. I learned how to lead development teams and support them through various stages of software creation, from development and integration to unit testing, installation, deployment, and maintenance.",
          }}
        />
        <Accordion
          defaultOpen={actualOpen === 5}
          onClick={() => setActualOpen(5)}
          numberCols={3}
          content={{
            headerTexts: ['HETIC', 'BACHELOR WEB DEVELOPER', '2020 - 2023'],
            body: "The Bachelor's program at Hetic trains developers over three years, specializing in Web, Internet, and Mobile solutions with a strong understanding of Design, UX, and digital transformation strategies. The program emphasizes methodology, software quality, architecture, and lifecycle management.",
          }}
        />
      </div>
    </PageContainer>
  );
};

export default Career;
