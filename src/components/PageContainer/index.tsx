import dynamic from 'next/dynamic';

/* components */
const Navbar = dynamic(() => import('../Navbar'), { ssr: false });
import Footer from '../Footer';

type PageContainerProps = {
  children: React.ReactElement | React.ReactElement[];
  withoutFooter?: boolean;
  fullHeight?: boolean;
  footerRef?: React.LegacyRef<HTMLDivElement>;
};

const PageContainer = ({
  children,
  withoutFooter,
  fullHeight,
  footerRef,
}: PageContainerProps) => {
  return (
    <div className={fullHeight ? 'h-screen' : ''}>
      <Navbar />
      {children}
      {!withoutFooter && (
        <div ref={footerRef}>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default PageContainer;
