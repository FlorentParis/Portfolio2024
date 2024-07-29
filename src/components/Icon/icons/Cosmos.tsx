type CosmosProps = React.SVGProps<SVGSVGElement> & {
  color?: string;
};

const Cosmos = ({ color = '#000', ...props }: CosmosProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 75 85"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...props}
    >
      <circle cx="37" cy="9" r="9" />
      <circle cx="37" cy="76" r="9" />
      <circle cx="9" cy="59" r="9" />
      <circle cx="66" cy="59" r="9" />
      <circle cx="9" cy="26" r="9" />
      <circle cx="66" cy="26" r="9" />
    </svg>
  );
};

export default Cosmos;
