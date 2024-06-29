import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
import LineThroughText from '../LineThrounghText';

const Footer = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  if (!time) return null;

  return (
    <footer id="footer" className="flex flex-col text-[#E3E3E3] p-5">
      <div className="flex items-center justify-center gap-7 pb-40 pt-10">
        <h4 className="font-playfair-display text-[28px] italic">
          Florent PARIS
        </h4>
        <span className="h-px w-7 bg-[#E3E3E3]"></span>
        <ul className="flex items-center gap-10 text-2xl font-barlow-condensed">
          <Link
            className="group"
            target="_blank"
            href="https://github.com/FlorentParis"
          >
            <LineThroughText>
              <span>GITHUB</span>
            </LineThroughText>
          </Link>
          <Link
            className="group"
            target="_blank"
            href="https://twitter.com/FlorentParis_"
          >
            <LineThroughText>
              <span>TWITTER</span>
            </LineThroughText>
          </Link>
          <Link
            className="group"
            target="_blank"
            href="https://www.linkedin.com/in/florentparis/"
          >
            <LineThroughText>
              <span>LINKEDIN</span>
            </LineThroughText>
          </Link>
        </ul>
      </div>
      <div className="relative font-barlow-condensed text-lg flex">
        <span suppressHydrationWarning>{time.toLocaleTimeString()}</span>
        <span className="absolute left-1/2 -translate-x-1/2">
          <span className="text-primary">{time.getFullYear()}</span> © ALL
          RIGHTS RESERVED
        </span>
      </div>
    </footer>
  );
};

export default Footer;
