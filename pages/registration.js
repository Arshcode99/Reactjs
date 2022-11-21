import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import styles from '../styles/registration.module.css';

const Registration = () => {
  const [userData, setuserData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    collage: "",
  });
  let name, value;
  const postUserData = (event) =>{
    name = event.target.name;
    value = event.target.value;

    setuserData({ ...userData, [name]:value});
  }
  // Connecting With Firebase DB 
const handleForm = async(event) =>{
  event.preventDefault();
  const { fullName, email, phone, country, collage } = userData;
  const res = await fetch(
    "https://nextdb-simplifed-default-rtdb.firebaseio.com//NewStudents.json",{
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
    },
    body: JSON.stringify({
      fullName:"",
      email:"",
      phone:"",
      country:"",
      collage:"",
    }),
  }
    );
    if (res){
      alert("Thank You! Our Team will Contact You Soon... 😉")
    }
    else{
      alert("Maybe Something went wrong! Try Again... 🤔")
    }
}
  return (
    <>
      <section className={styles.Registration}>
        <div className={styles.twocol}>
            <div className={styles.leftside}>
                <h1 className={styles.h1}>Take a flight with React.js Today!</h1>
                <p>Step 1 is to create a free account on Reactjsofficial, Don't Worry We will not share your data with anyone.
                  your data is safe and secure!, We will not spam your Inbox. 🔗😉
                </p>
                <hr />
                <p>Already a STUDENT?</p>
                <Link href="/login" className={styles.btn}>Login</Link>
                <hr />
                <h4>OR</h4>
                <button className={styles.google}>Countinue With <AiOutlineGoogle/>oogle</button>
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

                    <button 
                    type="submit" 
                    className={styles.btn}
                    onClick={handleForm}>
                    Submit
                    </button>
                </form>
            </div>
        </div>
      </section>
    </>
  );
}

export default Registration;