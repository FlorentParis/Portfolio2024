import '@/app/globals.css';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';

/* components */
import LineThroughText from '@/components/LineThrounghText';
import PageContainer from '@/components/PageContainer';

type TraitProps = { title: string; subtitle: string };

const About = () => {
  return (
    <PageContainer withoutFooter fullHeight>
      <div className="grid grid-cols-[1fr_1fr] pt-[120px] pb-10 px-12 h-full">
        <div className="flex flex-col gap-7 h-full">
          <div className="flex flex-col gap-7">
            <h1 className="text-6xl font-playfair-display">
              What makes me <span className="text-primary">‘me’</span>
            </h1>
            <p className="w-2/3 font-barlow-condensed">
              Florent Paris is a young developer who wants to specialize in
              creating memorable experiences through his code and creativity. He
              is currently working in an agency and is in training at Efrei.
            </p>
          </div>
          <div className="flex flex-col gap-1 font-barlow-condensed">
            <Link
              href="mailto:contact@florent.paris"
              className="group flex items-center max-w-80 w-full justify-between cursor-pointer font-bold"
            >
              <LineThroughText>
                <span>EMAIL</span>
              </LineThroughText>
              <MdArrowOutward className="text-primary h-5 w-5" />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/FlorentParis"
              className="group flex items-center max-w-80 w-full justify-between cursor-pointer font-bold"
            >
              <LineThroughText>
                <span>GITHUB</span>
              </LineThroughText>
              <MdArrowOutward className="text-primary h-5 w-5" />
            </Link>
            <Link
              target="_blank"
              href="https://twitter.com/FlorentParis_"
              className="group flex items-center max-w-80 w-full justify-between cursor-pointer font-bold"
            >
              <LineThroughText>
                <span>TWITTER</span>
              </LineThroughText>
              <MdArrowOutward className="text-primary h-5 w-5" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/florentparis/"
              className="group flex items-center max-w-80 w-full justify-between cursor-pointer font-bold"
            >
              <LineThroughText>
                <span>LINKEDIN</span>
              </LineThroughText>
              <MdArrowOutward className="text-primary h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-28 py-28 overflow-scroll">
          <Trait
            title="FRONT&#8209;END DEVELOPER"
            subtitle="Passionate for over 6 years"
          />
          <Trait
            title="FULL&#8209;STACK DEVELOPER"
            subtitle="I sometimes step foot into the dark side of the force"
          />
          <Trait
            title="NEWBIE&nbsp;WEB DESIGNER"
            subtitle="On personal projects like this one"
          />
          <Trait
            title="REAL&nbsp;OTAKU"
            subtitle="More than +480 anime watched"
          />
          <Trait title="ATHLETIC" subtitle="I like musculation and running" />
          <Trait
            title="SOCIALLY ANXIOUS"
            subtitle="I'm the definition of anxiety itself"
          />
          <Trait
            title="NEVER&nbsp;WORK WITHOUT&nbsp;MUSIC"
            subtitle="Orelsan for hours in the ears"
          />
          <Trait
            title="ASIAN&nbsp;FOOD LOVER"
            subtitle="I would do anything for ramen"
          />
        </div>
      </div>
    </PageContainer>
  );
};

const Trait = ({ title, subtitle }: TraitProps) => {
  return (
    <div className="flex flex-col justify-center w-min">
      <h3 className="text-6xl font-playfair-display text-center">{title}</h3>
      <p className="text-primary font-barlow-condensed">{subtitle}</p>
    </div>
  );
};

export default About;
