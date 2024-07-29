import '@/app/globals.css';
import Icon from '@/components/Icon';

/* components */
import PageContainer from '@/components/PageContainer';
import StackElement, { StackElementProps } from '@/components/StackItem';

const Stack = () => {
  const stackItems: StackElementProps[] = [
    {
      name: 'React',
      tags: ['librairy', 'front'],
      icon: 'react',
      link: 'https://react.dev/',
    },
    {
      name: 'Typescript',
      tags: ['typing'],
      icon: 'typescript',
      link: 'https://www.typescriptlang.org/',
    },
    {
      name: 'Next',
      tags: ['framework', 'front'],
      icon: 'next',
      link: 'https://nextjs.org/',
    },
    {
      name: 'Tailwind CSS',
      tags: ['stylization'],
      icon: 'tailwind',
      link: 'https://tailwindcss.com/',
    },
    {
      name: 'Framer Motion',
      tags: ['front', 'animation'],
      icon: 'framer',
      link: 'https://www.framer.com/motion/',
    },
    {
      name: 'Sass',
      tags: ['stylization', 'css'],
      icon: 'sass',
      link: 'https://sass-lang.com/',
    },
    {
      name: 'React Native',
      tags: ['mobile', 'front'],
      icon: 'react',
      link: 'https://reactnative.dev/',
    },
    {
      name: 'Nest.js',
      tags: ['back', 'framework'],
      icon: 'nest',
      link: 'https://nestjs.com/',
    },
    {
      name: 'Express.js',
      tags: ['back', 'infrastructure'],
      icon: 'express',
      link: 'https://expressjs.com/',
    },
    {
      name: 'npm',
      tags: ['package manager'],
      icon: 'npm',
      link: 'https://www.npmjs.com/',
    },
    {
      name: 'Yarn',
      tags: ['package manager'],
      icon: 'yarn',
      link: 'https://yarnpkg.com/',
    },
  ];

  const numColumns = 3;
  const numItems = stackItems.length;
  const numEmptySlots =
    numItems % numColumns === 0 ? 0 : numColumns - (numItems % numColumns);

  return (
    <PageContainer>
      <div className="pt-[160px] flex flex-col gap-5 pb-[100px]">
        <h1 className="text-6xl font-playfair-display px-12 pb-8">
          My actual <span className="text-primary">stack</span>
        </h1>
        <div className="grid grid-cols-3 gap-px bg-[#ffffff11] py-px">
          <span className="col-span-1 col-span-2 col-span-3 hidden"></span>
          {stackItems.map((item, index) => {
            if (index === 0) {
              const colspanClass = `col-span-${Math.min(numEmptySlots + 1, 4)}`;
              return (
                <div key={index} className={colspanClass}>
                  <StackElement {...item} />
                </div>
              );
            }
            return <StackElement key={index} {...item} />;
          })}
        </div>
      </div>
    </PageContainer>
  );
};

export default Stack;
