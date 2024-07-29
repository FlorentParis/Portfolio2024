type FramerProps = React.SVGProps<SVGSVGElement> & {
  color?: string;
};

const Framer = ({ color = '#000', ...props }: FramerProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...props}
    >
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    </svg>
  );
};

export default Framer;
