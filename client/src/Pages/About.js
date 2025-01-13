import React from "react";
import Layout from "../Components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
      
        <div className="container">
      <h2>Our Mission</h2>
      <p>Our mission is simple: to empower our customers with the tools they need to stay connected, informed, and entertained in today's fast-paced world. We strive to foster a community of innovation and creativity, where every purchase represents an opportunity to unlock new possibilities and make meaningful connections.</p>
      <h2>What Sets Us Apart</h2>
      <ul>
        <li>Expertise</li>
        <li>Quality Assurance</li>
        <li>Customer Satisfaction</li>
        <li>Innovation</li>
      </ul>
      <h2>Our Commitment to Sustainability</h2>
      <p>As stewards of the environment, we recognize the importance of sustainability in everything we do. That's why we're dedicated to minimizing our ecological footprint through eco-friendly practices such as energy-efficient operations, responsible sourcing, and recyclable packaging.</p>
    </div>
      </div>
    </Layout>
  );
};

export default About;