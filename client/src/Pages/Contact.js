import React from 'react';
import Layout from '../Components/Layout/Layout';
import '../Style/contact.css'; 

const Contact = () => {
  return (
    <Layout title="Contact Us">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Email: <a href='Hariprajap8129@gmail.com'>Hariprajap8129@gmail.com</a></p>
              <p>Phone: 123-456-7890</p>
              <p>Address: 123 Street, City, Country</p>
            </div>
            <div className="div col-md-8">
              <h4>Location</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.703969798304!2d72.92801077428611!3d19.120638450571487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c796e90dadbf%3A0x4c9f0a2b87a4fce3!2sSantoshi%20Mata%20Mandir%20Marg%2C%20Vikhroli%2C%20Mumbai%2C%20Maharashtra%20400083!5e0!3m2!1sen!2sin!4v1713708207218!5m2!1sen!2sin" 
            width="400" 
            height="400" 
            style={{border:0}} 
            allowFullScreen="no"
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">   
            </iframe>
            </div>
          </div>
        </div>
      </div>
      
    </Layout>
  );
};

export default Contact;
