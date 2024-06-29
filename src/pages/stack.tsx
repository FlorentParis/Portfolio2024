import '@/app/globals.css';

/* components */
import PageContainer from '@/components/PageContainer';

const Stack = () => {
  const stackItems = [
    { name: 'React', tags: ['librairy', 'front'] },
    { name: 'React Native', tags: ['mobile', 'front'] },
    { name: 'Typescript', tags: ['typing'] },
    { name: 'Tailwind', tags: ['stylization'] },
    { name: 'SCSS', tags: ['stylization', 'css'] },
    { name: 'Express.js', tags: ['back', 'infrastructure'] },
    { name: 'Nest.js', tags: ['back', 'framework'] },
    { name: 'npm', tags: ['package manager'] },
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
                  <StackElement name={item.name} tags={item.tags} />
                </div>
              );
            }
            return (
              <StackElement key={index} name={item.name} tags={item.tags} />
            );
          })}
        </div>
      </div>
    </PageContainer>
  );
};

type StackElementProps = {
  name: string;
  tags?: string[];
};

const StackElement = ({ name, tags }: StackElementProps) => {
  return (
    <div className="group h-80 bg-black hover:bg-[#0c0c0c] cursor-pointer p-5 flex items-end">
      <div className="flex justify-between w-full">
        <h2 className="text-white font-barlow-condensed uppercase">{name}</h2>
        <div className="flex items-center gap-2">
          {tags &&
            tags.map((tag) => (
              <span className="border border-px text-[#ffffff30] border-[#ffffff11] bg-[#ffffff05] group-hover:border-[#ffffff09] group-hover:bg-[#ffffff06] rounded-full text-md font-light px-2">
                {tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
