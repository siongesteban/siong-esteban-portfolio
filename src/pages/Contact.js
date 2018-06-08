import React from 'react';
import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import '../styles/components/form.css';
import '../styles/components/button.css';

export default () => (
  <div>
    <PageTitle title="Contact" />
    <Container col={12} transparent={true}>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <p className="text-black">
            Whether you want to <strong>collaborate</strong>, <strong>ask questions</strong> or something else, please don't hesitate to send me a message. I'd love to hear from you :).
          </p>
          <p className="text-black">
            Use the form below or email me at <a href="mailto:siong.esteban@gmail.com">siong.esteban@gmail.com</a>.
          </p>
          <form
            className="form"
            action="https://formspree.io/siong.esteban@gmail.com"
            method="POST"
            autoComplete="off"
          >
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="input"
              type="email"
              name="_replyto" 
              placeholder="Email"
              required
            />
            <textarea
              className="input"
              name="message"
              rows="3"
              placeholder="Message"
              required
            >
            </textarea>
            <input className="button" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Container>
  </div>
)