import React, { useState, useContext, useEffect } from "react";

const CarrouselContext = React.createContext();
const SlideContext = React.createContext();

export const Carrousel = ({ children }) => {
  return (
    <CarrouselContext.Provider value={useState(0)}>
      <SlideContext.Provider value={[1, 2, 3, 4, 5]}>
        <div>{children}</div>
      </SlideContext.Provider>
    </CarrouselContext.Provider>
  );
};

export const Slides = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useContext(CarrouselContext);
  const isPlaying = true;
  const numberOfSlidesChildren = React.Children.count(children);

  useEffect(() => {
    if (isPlaying) {
      let timeout = setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % numberOfSlidesChildren);
      }, 7000);
      return () => clearTimeout(timeout);
    }
  });

  return <ul>{children[currentIndex]}</ul>;
};

export const Slide = ({ children }) => {
  return (
    <div>
      <li>{children}</li>
    </div>
  );
};

export const SlideNav = ({ className, navType }) => {
  return (
    <div>
      <ul className={className}>
        <SlideNavItems navType={navType} />
      </ul>
    </div>
  );
};

export const SlideNavItems = ({ navType }) => {
  const [activeIndex, setActiveIndex] = useContext(CarrouselContext);

  const numberOfSlides = useContext(SlideContext);

  return (
    <>
      {numberOfSlides.map((element, index) => (
        <li
          key={index}
          role="button"
          tabIndex="0"
          onClick={() => setActiveIndex(index)}
          className={activeIndex === index ? "isActive btn" : "btn"}
        >
          {navType === "bullet" ? (
            <div
              className={activeIndex === index ? "bulletActive" : "bullet"}
            />
          ) : (
            element
          )}
        </li>
      ))}
    </>
  );
};
