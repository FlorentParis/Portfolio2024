import Link from 'next/link';
import { useEffect, useState } from 'react';
import LineThroughText from '../LineThrounghText';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setScrollY(currentScrollY);

      setAtTop(currentScrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 flex py-5 px-[70px] w-full justify-center items-center z-50 transition-all duration-500 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${atTop ? 'bg-transparent' : 'bg-black'}`}
    >
      <Link href="/" className="flex flex-col items-center relative">
        <span className="text-2xl font-barlow-condensed uppercase font-medium">
          Florent
        </span>
        <span className="font-playfair-display font-semibold text-primary px-1 bg-black after:content-[''] after:flex after:w-full after:h-px after:absolute after:top-[80%] after:bg-primary after:left-0 after:z-[-10] -mt-1">
          Paris
        </span>
      </Link>
      <div className="flex items-center gap-[50px] absolute right-[70px] font-barlow-condensed">
        <Link href="/works" className="group">
          <LineThroughText>
            <a className="font-bold uppercase">Works</a>
          </LineThroughText>
          <p className="text-primary text-ssm -mt-1">some super works</p>
        </Link>
        <Link href="/about" className="group">
          <LineThroughText>
            <a className="font-bold uppercase">About me</a>
          </LineThroughText>
          <p className="text-primary text-ssm -mt-1">what makes me ‘me’</p>
        </Link>
        <Link href="/contact" className="group">
          <LineThroughText>
            <a className="font-bold uppercase">Contact me</a>
          </LineThroughText>
          <p className="text-primary text-ssm -mt-1">talk to me</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
