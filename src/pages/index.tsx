import '@/app/globals.css';
import Link from 'next/link';

/* icons */
import { MdArrowOutward } from 'react-icons/md';
import { SlGrid } from 'react-icons/sl';
import { RiUserSearchLine } from 'react-icons/ri';
import { FiBriefcase } from 'react-icons/fi';
import { PiStackSimple, PiHammer } from 'react-icons/pi';
import { FaRegFolderOpen } from 'react-icons/fa';

/* components */
import PageContainer from '@/components/PageContainer';
import LineThroughText from '@/components/LineThrounghText';

const Homepage = () => {
  const selectionsList = [
    {
      icon: <SlGrid className="h-5 w-5" />,
      name: 'WORKS',
      description: 'SOME SUPER PROJECTS',
      url: '/works',
    },
    {
      icon: <RiUserSearchLine className="h-5 w-5" />,
      name: 'THINGS ABOUT ME',
      description: 'WHAT MAKES ME ‘ME’',
      url: '/about',
    },
    {
      icon: <FiBriefcase className="h-5 w-5" />,
      name: 'CAREER',
      description: 'MY PRO & ACADEMIC CAREER',
      url: '/career',
    },
    {
      icon: <PiStackSimple className="h-5 w-5" />,
      name: 'STACK',
      description: 'WHAT I AM DEVELOPING IN',
      url: '/stack',
    },
    {
      icon: <PiHammer className="h-5 w-5" />,
      name: 'TOOLS',
      description: 'USEFUL TOOLS THAT I USE',
      url: '/tools',
    },
    {
      icon: <FaRegFolderOpen className="h-5 w-5" />,
      name: 'RESSOURCES',
      description: 'FEW FREE RESSOURCES FOR DEV',
      url: '/ressources',
    },
  ];

  return (
    <PageContainer>
      <>
        <div className="h-screen flex flex-col items-center justify-center relative">
          <h4 className="absolute -top-[80px] left-[90px] w-[230px] text-white text-[200px] font-playfair-display break-words leading-[60%]">
            2024
          </h4>
          <div className="flex flex-col relative">
            <div className="flex flex-col items-center text-9xl uppercase font-playfair-display">
              <div className="flex items-center gap-9">
                <h1>Front</h1>
                <span className="flex h-[60px] bg-primary rounded-full aspect-square mt-2 animate-heartbeat"></span>
                <h1>end</h1>
              </div>
              <h1>DEVELOPER</h1>
            </div>
            <p className="font-barlow-condensed pt-2 w-60 leading-[120%]">
              Create a memorable experience through my code and creativity.
            </p>
            <div className="absolute -top-11 -right-40 font-barlow-condensed">
              <Link
                href="/things"
                className="group flex items-center w-36 justify-between cursor-pointer font-bold"
              >
                <LineThroughText>
                  <span>THINGS</span>
                </LineThroughText>
                <MdArrowOutward className="text-primary h-5 w-5" />
              </Link>
              <Link
                href="/social-media"
                className="group flex items-center w-36 justify-between cursor-pointer font-bold"
              >
                <LineThroughText>
                  <span>SOCIAL MEDIA</span>
                </LineThroughText>
                <MdArrowOutward className="text-primary h-5 w-5" />
              </Link>
            </div>
          </div>
          <p className="absolute flex gap-5 bottom-7 font-playfair-display text-xl w-[163px] text-[#e3e3e3] overflow-hidden after:content-[''] after:h-14 after:w-px after:block after:bg-white after:absolute after:left-0 after:animate-scroll before:content-[''] before:h-14 before:block before:w-px before:bg-[#e3e3e3]">
            Discover myself point by point.
          </p>
        </div>
        <div className="flex py-24">
          <ul className="flex flex-col w-full">
            {selectionsList.map((selection) => {
              return <SelectionList {...selection} />;
            })}
          </ul>
        </div>
      </>
    </PageContainer>
  );
};

const SelectionList = ({ icon, name, url, description }: any) => {
  return (
    <li className="group border-t border-solid border-[#ffffff0d] hover:bg-[#ffffff0d] transition">
      <Link
        href={url}
        className="group flex justify-between items-center py-5 px-7"
      >
        <div className="flex items-center gap-1">
          <div className="pr-1">{icon}</div>
          <LineThroughText>{name}</LineThroughText>
          <span className="h-px w-4 bg-white block"></span>
          <span className="text-[#ffffff80]">{description}</span>
        </div>
        <MdArrowOutward className="text-white group-hover:text-primary h-5 w-5 transition" />
      </Link>
    </li>
  );
};

export default Homepage;
