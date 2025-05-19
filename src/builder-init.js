import { Builder } from '@builder.io/react';
import Hero from "../src/components/Hero";
import Card from "../src/components/Card";
import Testimonial from "../src/components/Testimonial";
import CTAButton from "../src/components/CTAButton";
// Import other components as needed

Builder.registerComponent(Hero, {
  name: 'Hero',
  inputs: [
    { name: 'heading', type: 'text', defaultValue: 'Welcome to Our Site' },
    { name: 'subheading', type: 'text', defaultValue: 'Your success starts here.' },
  ],
});

Builder.registerComponent(Card, {
  name: 'Card',
  inputs: [
    { name: 'title', type: 'text', defaultValue: 'Amazing Feature' },
    { name: 'description', type: 'text', defaultValue: 'This is a cool feature of our product.' },
  ],
});

Builder.registerComponent(Testimonial, {
  name: 'Testimonial',
  inputs: [
    { name: 'quote', type: 'text', defaultValue: 'This product changed my life!' },
    { name: 'author', type: 'text', defaultValue: 'John Doe' },
  ],
});

Builder.registerComponent(CTAButton, {
  name: "CTAButton",
  inputs: [
    { name: "label", type: "text", defaultValue: "Get Started Now" },
    { name: "onClick", type: "text", helperText: 'Use: () => alert("Hi!")' },
  ],
});
