import React from 'react';
import { useContext } from 'react';
import Context from '../../context/contextFunction';
import '../styles/contact.css';
const Contact = () => {
  const{callEvent} = useContext(Context)
  return (
    <div className='conatact-box'>
      <form>
        <div className="contact-itmes">
          <input type="text" name="name" placeholder=' Name' />
        </div>
        <div className="contact-itmes">
          <input type="number" name="name" placeholder=' Phone Number' />
        </div>
        <div className="contact-items">
          <textarea name="mssg" className='mssg' rows="10" placeholder=' Your Message'/>
        </div>

        <button className="contact-btn" onClick={callEvent}>Send</button>
      </form>

      
    </div>
  )
}

export default Contact
