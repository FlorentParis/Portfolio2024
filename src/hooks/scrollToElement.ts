const scrollToElement = (ref: React.RefObject<HTMLElement>) => {
  const { current } = ref;
  console.log(current);
  if (current !== null) {
    current.scrollIntoView({ behavior: 'smooth' });
  }
};

export default scrollToElement;
