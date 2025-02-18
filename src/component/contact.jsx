import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import '../assets/style/css/contact.css';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
   // Function to handle form input changes
   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append("access_key", "48fd49c1-92a5-41ed-84c0-9eb70d3a1768");
    form.append("name", formData.name);
    form.append("phone", formData.phone);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      });
      const res = await response.json();

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully",
          timer: 3000,
          icon: "success"
        }).then(() => {
          event.target.reset();
          setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
          });
        });
      } else {
        Swal.fire("Error", "There was an issue sending your message. Please enter proper details.", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Network error or server issue. Please try again later.", "error");
    }
  };
  return (
    <section id='contact' className='contact-sec'>
      <div className="container">
        <div className="row">
          <div className="col-md-6" data-aos="fade-down" data-aos-offset="10">
            <div className="px-3">
              <h3>Your One-Stope Solution For <br /> All Your Needs</h3>
              <div className='mb-4'>
              Boost yourself in today’s modern market with our comprehensive solutions, best-quality sports betting, advanced tools, and casino services.</div>
              <h3 className='mb-3'>Contact Details</h3>
              <div className='mb-3'><IoCall /> <span><a className='' href="tel:+91 8003509193">+91 8003509193 </a></span></div>
              <div className='mb-3'><IoMail /> <span><a className='' href="mailto:bababet247@gmail.com">bababet247@gmail.com </a></span></div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-offset="10">
            <div className="contact-card">
               <form  onSubmit={onSubmit} method="POST">
                  <div className="row text-start">
                    <div className="col-12">
                      <h5 className='font-bold'>Contact Form</h5>
                      <p className='fs-16 mb-2'>How can i help you ?</p>
                    </div>
                    <div className="col-12 mb-3">
                      <label className='mb-1' htmlFor="name">Full Name</label>
                    <input className='form-control' type="text" name="name" id="name" placeholder='Enter Your Full Name' value={formData.name} onChange={handleChange} required /> 
                    </div>
                    <div className="col-12 mb-3">
                    <label className='mb-1' htmlFor="phone">Phone Number</label>
                    <input 
                        className='form-control' 
                        type="text" 
                        name="phone" 
                        id="phone" 
                        placeholder='Enter your Phone no:' 
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                        inputMode="numeric" 
                        pattern="\d{10,}" 
                        maxLength="10" 
                        onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, ''); }}
                      />
                    </div>
                    <div className="col-12 mb-3">
                    <label className='mb-1' htmlFor="email">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                    </div>
                    <div className="col-12 mb-3">
                    <label className='mb-1' htmlFor="message">Message</label>
                      <textarea
                          className="form-control"
                          placeholder="Enter your message..."
                          id="message"
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          required
                      >
                      </textarea>
                    </div>
                    <div className="col-12">
                      <button className='btn btn-submit'> Send</button>
                    </div>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Contact
