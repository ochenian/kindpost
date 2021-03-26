const scrollTo = (selector, blockPosition = 'start') => {
  const element = document.querySelector(selector);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: blockPosition,
    });

    return true;
  }

  if (process.env.NODE_ENV !== 'production') {
    console.warn(
      "The selector: '%s' wasn't found in the document.\n Make sure you pass in a valid CSS selector string.",
      selector,
    );
  }

  return false;
};

export default scrollTo;
