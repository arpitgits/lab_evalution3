import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../Assets/one.jpeg";
import img2 from "../Assets/two.jpeg";
import img3 from "../Assets/three.jpeg";

export const Home = () => {
    const imageClick = () => {
        console.log('Click');
      }
      const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide"  onClick={() => { openInNewTab("https://classroom.google.com/u/0/c/NDYyOTIzMjcwNjA1/a/NDk0ODgxMzk3NjU4/details") }} />
        <Carousel.Caption>
          <h3>Cars 1</h3>
          <p>woohm woohmm woooooooohmmm.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" onClick={() => { openInNewTab("https://classroom.google.com/u/0/c/NDYyOTIzMjcwNjA1/a/NDk0ODgxMzk3NjU4/details") }}/>

        <Carousel.Caption>
          <h3>Cars 2</h3>
          <p>Dhoom dhooom Dhooooooooooom.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" onClick={() => { openInNewTab("https://classroom.google.com/u/0/c/NDYyOTIzMjcwNjA1/a/NDk0ODgxMzk3NjU4/details") }}/>

        <Carousel.Caption>
          <h3>TCars 3</h3>
          <p>Dhooom vrooom vrooommuhhhmm Dhooooooooooooooooooooooooom.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Home;
