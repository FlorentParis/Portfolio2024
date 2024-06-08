type LineThroughTextProps = {
  children: React.ReactNode;
};

const LineThroughText = ({ children }: LineThroughTextProps) => {
  return (
    <span className="relative group transition duration-200 before:content-[''] before:transition-all before:block before:absolute before:top-1/2 before:-translate-y-1/2 before:duration-500 before:w-0 before:h-[2px] group-hover:before:w-full before:bg-white">
      {children}
    </span>
  );
};

export default LineThroughText;
