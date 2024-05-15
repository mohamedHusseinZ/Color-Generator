import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About Color Models</h1>
      <section>
        <h2>RGB Color Model</h2>
        <p>
          The RGB color model is used for sensing, representation, and display of images in electronic systems, such as televisions and computers. RGB stands for Red, Green, and Blue. These three colors of light can be mixed together in different proportions to produce a wide range of colors. The primary purpose of the RGB color model is for the sensing, representation, and display of images in electronic systems.
        </p>
        <p>
          An RGB color value is specified with: <code>rgb(red, green, blue)</code>. Each parameter (red, green, and blue) defines the intensity of the color and can be an integer between 0 and 255 or a percentage value (from 0% to 100%).
        </p>
      </section>
      <section>
        <h2>HSL Color Model</h2>
        <p>
          The HSL color model stands for Hue, Saturation, and Lightness. It is a cylindrical-coordinate representation of points in an RGB color model. The model was created to be more perceptually relevant to human color vision than the RGB model. The HSL representation models the way different colors combine based on their hue, saturation, and lightness.
        </p>
        <p>
          An HSL color value is specified with: <code>hsl(hue, saturation, lightness)</code>. Hue is represented as an angle (from 0 to 360 degrees), saturation as a percentage (0% to 100%), and lightness also as a percentage (0% to 100%).
        </p>
      </section>
    </div>
  );
};

export default About;
