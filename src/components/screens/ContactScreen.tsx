import React from 'react';

import './styles/ContactScreen.css';

const ContactScreen = () => {
  return (
    <section className='form-section'>
      <div className='form-container'>
        <form>
          <h2>Contact Me!</h2>
          <span>
            Interested on working on a project together, looking for someone to add to your team,
            questions on any of the technologies I've used, or would just like to say hello? Send me
            an email at <a href='mailto:samaldonado2@gmail.com'>samaldonado4@gmail.com</a> directly
            or use the form below.
          </span>
          <label className='name-label'>
            Name
            <input name='name' required placeholder='First Last' />
          </label>

          <label className='email-label'>
            Email
            <input name='email' type='email' required placeholder='email@address.com' />
          </label>

          <label className='message-label'>
            Message
            <textarea name='acceptedTerms' rows={5} required placeholder='message...' />
          </label>

          <button>Send Email</button>
        </form>
      </div>
    </section>
  );
};

export default ContactScreen;
