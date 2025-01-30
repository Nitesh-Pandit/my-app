import { useEffect, useState } from "react";

function ImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // List of image URLs (place the images in the public directory)
  const images = [
    "/images.jpg",
    "/MainAfter.jpg",
   
  ];

  useEffect(() => {
    // Set up an interval to change the image every 4 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img
        src={images[currentImageIndex]}
        alt="Carousel"
        style={{
          width: "600px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <div style={{ marginTop: "10px" }}>
        {images.map((_, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              margin: "0 5px",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: index === currentImageIndex ? "blue" : "gray",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
