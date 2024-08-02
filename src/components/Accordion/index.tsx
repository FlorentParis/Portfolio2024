import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/* icons */
import { IoIosArrowDown } from 'react-icons/io';

type ContentProps = {
  headerTexts: string[];
  body: string;
};

type AccordionProps = {
  defaultOpen?: boolean;
  onClick?: () => void;
  numberCols: 3 | 4;
  content: ContentProps;
};

const Accordion = ({
  defaultOpen,
  onClick,
  numberCols,
  content,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || false);

  useEffect(() => {
    setIsOpen(defaultOpen || false);
  }, [defaultOpen]);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col border-b border-solid border-[#ffffff0d] hover:bg-[#ffffff0d]"
    >
      <div
        className={'grid px-10 py-5 group transition text-white/50 '.concat(
          numberCols === 3
            ? `grid-cols-[1fr_1fr_1fr_30px]`
            : `grid-cols-[1fr_1fr_1fr_1fr_30px]`
        )}
      >
        <span className="text-white">{content.headerTexts[0]}</span>
        <span>{content.headerTexts[1]}</span>
        <span>{content.headerTexts[2]}</span>
        {numberCols === 4 && <span>{content.headerTexts[3]}</span>}
        <IoIosArrowDown />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto', paddingTop: 20, paddingBottom: 20 }}
            exit={{ height: 0, paddingTop: 0, paddingBottom: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`px-10 overflow-hidden box-content grid ${
              numberCols === 3
                ? `grid-cols-[1fr_1fr_1fr_30px]`
                : `grid-cols-[1fr_1fr_1fr_1fr_30px]`
            }`}
          >
            <span></span>
            <div className="col-span-3">{content.body}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
