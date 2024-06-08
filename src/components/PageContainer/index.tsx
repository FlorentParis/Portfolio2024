import dynamic from 'next/dynamic';

/* components */
const Navbar = dynamic(() => import('../Navbar'), { ssr: false });
import Footer from '../Footer';

type PageContainerProps = {
  children: React.ReactElement | React.ReactElement[];
};

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageContainer;
