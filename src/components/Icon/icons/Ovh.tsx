type OvhProps = React.SVGProps<SVGSVGElement> & {
  color?: string;
};

const Ovh = ({ color = '#000', ...props }: OvhProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M26.51 13.458l3.417-5.932c1.318 2.328 2.073 5.010 2.073 7.88 0 3.839-1.354 7.365-3.615 10.125h-8.823l2.719-4.719h-3.594l4.234-7.354zM23.417 6.469l-10.974 19.052 0.005 0.010h-8.833c-2.26-2.76-3.615-6.286-3.615-10.125 0-2.87 0.76-5.557 2.083-7.891l5.724 9.953 6.328-11z"
      />
    </svg>
  );
};

export default Ovh;
