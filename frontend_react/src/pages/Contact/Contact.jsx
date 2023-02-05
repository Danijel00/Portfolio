import React, { useState, useEffect, useRef } from 'react';
import './Contact.scss';
import AnimatedLetters from '../../components/Animations/AnimatedLetters';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import marker from '../../image/marker-icon.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const Contact = () => {
  // useState
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [letterClass, setLetterClass] = useState('text-bounce');
  // Refs
  const formRef = useRef();

  let heading = 'Contact me'.split('');

  const markerIcon = L.icon({
    iconUrl: marker,
    iconAnchor: [12, 40],
    popupAnchor: [0, -35],
  });

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-bounce-hover');
    }, 4000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'template_dretis8',
        formRef.current,
        'user_ynZzqOllnhrnlQjsvASht'
      )
      .then(
        () => {
          toast.success('Thank you for reaching out!', {
            style: {
              borderRadius: '10px',
              border: '1px solid #fff',
              background: '#333',
              color: '#fff',
            },
          });
          setFullName('');
          setEmailAddress('');
          setSubject('');
          setMessage('');
        },
        (error) => {
          toast.error('Oops, something went wrong! Please try again.', error, {
            style: {
              borderRadius: '10px',
              border: '1px solid #fff',
              background: '#333',
              color: '#fff',
            },
          });
        }
      );
  };

  return (
    <>
      <div className="contact container content animation content-fdc">
        <div className="contact__content">
          <h1 className="heading">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={heading}
              idx={10}
            />
          </h1>

          <div className="contact__form">
            <Toaster position="top-center" reverseOrder={false} />
            <form onSubmit={sendEmail} ref={formRef} className="form">
              <ul className="form__list">
                <li className="form__item">
                  <label htmlFor="name" className="form__item-tag">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form__input"
                    placeholder="Name"
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                    required
                  />
                </li>
                <li className="form__item">
                  <label htmlFor="email" className="form__item-tag">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form__input"
                    placeholder="Email"
                    onChange={(e) => setEmailAddress(e.target.value)}
                    value={emailAddress}
                    required
                  />
                </li>
                <li className="form__item">
                  <label htmlFor="subject" className="form__item-tag">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="form__input"
                    placeholder="Subject"
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    required
                  />
                </li>
                <li className="form__item">
                  <label htmlFor="message" className="form__item-tag">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
                  ></textarea>
                </li>
                <li className="form__item">
                  <input type="submit" className="form__button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="contact__map">
          <div className="contact__location">
            Danijel Kocic,
            <br />
            Serbia, Leskovac
            <br />
          </div>
          <MapContainer
            center={[42.99643578997866, 21.950514262993163]}
            zoom={13}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              icon={markerIcon}
              position={[42.99643578997866, 21.950514262993163]}
            >
              <Popup>This is where i live, welcome everyone 🤙</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Contact;
