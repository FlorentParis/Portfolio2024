import dynamic from 'next/dynamic';

/* components */
const Navbar = dynamic(() => import('../Navbar'), { ssr: false });
import Footer from '../Footer';

type PageContainerProps = {
  children: React.ReactElement | React.ReactElement[];
  withoutFooter?: boolean;
  fullHeight?: boolean;
};

const PageContainer = ({
  children,
  withoutFooter,
  fullHeight,
}: PageContainerProps) => {
  return (
    <div className={fullHeight ? 'h-screen' : ''}>
      <Navbar />
      {children}
      {!withoutFooter && <Footer />}
    </div>
  );
};

export default PageContainer;
