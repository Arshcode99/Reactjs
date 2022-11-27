import Router from 'next/router';
import React, { useState } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import styles from '../../styles/registration.module.css';

const Registration = () => {

  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    collage: "",
  });

  let name, value;

  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  }

  // Connecting With Firebase DB 
  const handleForm = async (event) => {
    event.preventDefault();
    const { fullName, email, phone, country, collage } = userData;

    if( fullName && email && phone && country && collage ){
    const res = await fetch(
      "https://nextdb-bfcfc-default-rtdb.firebaseio.com/NewStudents.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        phone: phone,
        country: country,
        collage: collage,
      }),
    }
    );
    if (res) {
      alert("Thank You! Our Team will contact You Soon 😉🎉")
      setUserData({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        collage: "",
      });
    }
    else {
      alert("Maybe Something went wrong! Try Again... 🤔")
    }
  }
  else{
    alert("Maybe You Missed A Field? Try Again! 😓❤")
  }
  };
  return (
    <>
      <section className={styles.Registration}>
        <div className={styles.twocol}>
          <div className={styles.leftside}>
            <h1 className={styles.h1}>Take a flight with React.js Today!</h1>
            <p>🔗😉, Provide us your Information to connect with you.
            </p>
            <hr />
            <p>Follow us on: <br />
              <AiFillInstagram className={styles.icons} />
              {'\u00A0'}
              <AiFillFacebook className={styles.icons} />
              {'\u00A0'}
              <BsLinkedin className={styles.icons} />
            </p>
          </div>
          <div className={styles.rightside}>
            <form className={styles.alignequal} method="POST">
              <label htmlFor="fullname">name*</label>
              <input
                className={styles.input}
                type="text"
                placeholder='Your Name'
                name='fullName'
                value={userData.fullName}
                onChange={postUserData}
                required />



              <label htmlFor="email">email Id*</label>
              <input
                className={styles.input}
                type="email"
                placeholder='Your Email'
                name='email'
                value={userData.email}
                onChange={postUserData}
                required />



              <label htmlFor="phone">Phone No*</label>
              <input
                className={styles.input}
                type="tel"
                placeholder='Your Phone No.'
                name='phone'
                value={userData.phone}
                onChange={postUserData}
                required />




              <label htmlFor="country">country*</label>
              <input
                className={styles.input}
                type="text"
                placeholder='Your Country'
                name='country'
                value={userData.country}
                onChange={postUserData}
                required />



              <label htmlFor="collage">collage name*</label>
              <input
                className={styles.input}
                type="text"
                placeholder='Your Collage Name'
                name='collage'
                value={userData.collage}
                onChange={postUserData}
                required />

              <br />
              <div  className={styles.Padd}>
              <input type="checkbox" name='Terms' id='Terms' value="YES" className={styles.Padd} required />{'\u00A0'}
              <label for='Terms'>Agree Our Privacy, Terms of services & Refund Policy*</label>
              </div>
              <button
                type="submit"
                className={styles.btn}
                onClick={handleForm}>
                Register Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registration;