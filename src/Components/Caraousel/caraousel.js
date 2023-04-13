import React, { useState, useEffect } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const PEXELS_API_KEY = 'D5bidPEB7ZRQ0GyAsL21MN25PCLkahI3fUZBOVvcShYVFwltw5KKBgGc';



const CarouselExample = () => {
   
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const fetchImages = async () => {
    const response = await fetch(`https://api.pexels.com/v1/search?query=nature&per_page=5`, {
      headers: {
        Authorization: PEXELS_API_KEY
      }
    });
    const data = await response.json();
    setImages(data.photos);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = images.map((image) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={image.id}
        
      >
        <img src={image.src.original} alt={image.photographer} style={{height:"400px",objectFit:"fit"}}/>
        <CarouselCaption className="carousel-caption" captionText={image.photographer} captionHeader={image.photographer} />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators className="carousel-indicators" items={images} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl className="carousel-control-prev" direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl className="carousel-control-next" direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default CarouselExample;