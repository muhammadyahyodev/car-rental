const createElement = (tagName, className, content) => {
  const element = document.createElement(tagName);

  if (className) {
    element.classList.add(...className);
  }

  if (content) {
    element.innerHTML = content;
  }
  return element;
};
