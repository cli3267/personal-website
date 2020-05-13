import React from 'react';
import Carousel from 'react-images';
import ReactRotatingText from 'react-rotating-text';
// import aboutData from './../data/about';
// const images = [
//   { source: '../../public/images/me.jpg' },
//   { source: '../../public/images/basketball.jpg' },
// ];
const About = () => {
  let public_folder = process.env.PUBLIC_URL;
  const images = [
    { source: public_folder + 'images/me.jpg' },
    { source: public_folder + 'images/basketball.jpg' },
  ];
  // console.log(aboutData);
  return (
    <div style={{ height: '84vh' }}>
      <div class='container-fluid h-100'>
        <div class='row h-100'>
          <div class='d-flex col-4 align-self-center justify-content-center '>
            <Carousel views={images} />
          </div>
          <div class='d-flex col-8 align-self-center'>
            <div class='h1'>
              <ReactRotatingText
                items={['Student', 'Athlete', 'Aspiring Software Engineer']}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
