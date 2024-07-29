import '@/app/globals.css';
import Icon from '@/components/Icon';

/* components */
import PageContainer from '@/components/PageContainer';
import StackElement, { StackElementProps } from '@/components/StackItem';

const Stack = () => {
  const stackItems: StackElementProps[] = [
    {
      name: 'VSCode',
      tags: ['IDE'],
      icon: 'vscode',
      link: 'https://code.visualstudio.com/',
    },
    {
      name: 'Raycast',
      tags: ['launcher', 'clipboard'],
      icon: 'raycast',
      link: 'https://www.raycast.com/',
    },
    {
      name: 'Figma',
      tags: ['design'],
      icon: 'figma',
      link: 'https://www.figma.com/',
    },
    {
      name: 'Behance',
      tags: ['design', 'inspiration'],
      icon: 'behance',
      link: 'https://www.behance.net/',
    },
    {
      name: 'dribbble',
      tags: ['design', 'inspiration'],
      icon: 'dribbble',
      link: 'https://dribbble.com/',
    },
    {
      name: 'Notion',
      tags: ['notes', 'tasks'],
      icon: 'notion',
      link: 'https://www.notion.so/en-en',
    },
    {
      name: 'Spotify',
      tags: ['musics'],
      icon: 'spotify',
      link: 'https://open.spotify.com',
    },
    {
      name: 'NTS',
      tags: ['musics', 'radios'],
      icon: 'nts',
      link: 'https://www.nts.live',
    },
    {
      name: 'Cosmos',
      tags: ['inspirations', 'bookmarking'],
      icon: 'cosmos',
      link: 'https://www.cosmos.so',
    },
    {
      name: 'CyberGhost',
      tags: ['vpn'],
      icon: 'cyberghost',
      link: 'https://www.cyberghostvpn.com/',
    },
    {
      name: 'OVH',
      tags: ['hosting'],
      icon: 'ovh',
      link: 'https://www.ovhcloud.com/fr/',
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
          This all my favorites <span className="text-primary">tools</span>
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
