type RaycastProps = React.SVGProps<SVGSVGElement> & {
  color?: string;
};

const Raycast = ({ color = '#000', ...props }: RaycastProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...props}
    >
      <g xmlns="http://www.w3.org/2000/svg">
        <path d="M10,25.8V30L0,20l2.1-2.1L10,25.8z M14.2,30H10l10,10l2.1-2.1L14.2,30z M37.9,22.1L40,20L20,0l-2.1,2.1   l7.9,7.9H21l-5.5-5.5l-2.1,2.1l3.4,3.4h-2.4v15.5H30v-2.4l3.4,3.4l2.1-2.1L30,19v-4.8L37.9,22.1z M11,9L9,11.1l2.2,2.2l2.1-2.1   L11,9z M28.8,26.7l-2.1,2.1l2.2,2.2L31,29L28.8,26.7z M6.6,13.4l-2.1,2.1l5.5,5.5v-4.2L6.6,13.4z M23.1,30H19l5.5,5.5l2.1-2.1   L23.1,30z"></path>
      </g>
    </svg>
  );
};

export default Raycast;
