// import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';
import '../../App.css';

export default function ContactUs() {

 
    const [toSend, setToSend] = useState({
      from_name: '',
      to_name: 'Sheree',
      message: '',
      reply_to: '',
    });
  
    const onSubmit = (e) => {
      e.preventDefault();
      send(
        'service_j4mukjf',
        'template_nelrrcd',
        toSend,
        'user_FCzqXI4SX9vcVAoanDANx'
      )
        .then((response) => {
          alert('Email Sent!', response.status, response.text);
        })
        .catch((err) => {
          alert('Unable to sent email...', err);
        });
    };
   
    const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
  
    return (
      <div className='Contact'>

      
      
 <form onSubmit={onSubmit}>
  <input
    type='text'
    name='from_name'
    placeholder='from name'
    required value={toSend.from_name}
    onChange={handleChange}
  />
  <input
    type='text'
    name='to_name'
    placeholder='Sheree'
    required value={toSend.to_name}
    onChange={handleChange}
  />
  <input
    type='text'
    name='message'
    placeholder='Your message'
    required value={toSend.message}
    onChange={handleChange}
  />
  <input
    type='text'
    name='reply_to'
    placeholder='Your email'
    required value={toSend.reply_to}
    onChange={handleChange}
  />
<button type='submit'>Submit</button>

</form>
      </div>
      )
    };

