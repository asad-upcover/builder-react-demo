import React from "react";
import Hero from "../src/components/Hero";
import Card from "../src/components/Card";
import Testimonial from "../src/components/Testimonial";
import CTAButton from "../src/components/CTAButton";
import { builder, BuilderComponent } from '@builder.io/react';
import './builder-init'


builder.init('67654a72a141490196111471b8b6c1a3');


function App() {
  // if you want to use the components directly in your app, you can uncomment the following lines
  
  // return (
  //   <div>
  //     <Hero 
  //       heading="Welcome to Our Site"
  //       subheading="Your success starts here."
  //     />
  //     <Card
  //       title="Amazing Feature"
  //       description="This is a cool feature of our product."
  //     />
  //     <Testimonial
  //       quote="This product changed my life!"
  //       author="John Doe"
  //     />
  //     <CTAButton label="Get Started Now" onClick={() => alert("Clicked!")} />
  //   </div>
  // );

  // If you want to use the Builder.io editor to create and edit your pages, you can use the BuilderComponent
  
  return (
    <div>
      <BuilderComponent model="page"/>
    </div>
  );
}

export default App;
