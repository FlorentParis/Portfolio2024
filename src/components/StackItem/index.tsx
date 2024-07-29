import Icon from '../Icon';

export type StackElementProps = {
  name: string;
  tags?: string[];
  icon: string;
  link: string;
};

const StackElement = ({ name, icon, tags, link }: StackElementProps) => {
  return (
    <a
      href={link}
      target="_blank"
      className="group relative h-80 bg-black hover:bg-[#0c0c0c] cursor-pointer p-5 flex items-center justify-center"
    >
      <Icon name={icon} size="xlarge" color="#FFF" />
      <div className="flex justify-between w-full absolute bottom-0 p-5">
        <h2 className="text-white font-barlow-condensed uppercase">{name}</h2>
        <div className="flex items-center gap-2">
          {tags &&
            tags.map((tag) => (
              <span className="border border-px text-[#ffffff30] border-[#ffffff11] bg-[#ffffff05] group-hover:border-[#ffffff09] group-hover:bg-[#ffffff06] rounded-full text-md font-light px-2">
                {tag}
              </span>
            ))}
        </div>
      </div>
    </a>
  );
};

export default StackElement;
