import React from 'react'
import styles from '../styles/careers.module.css'
import Image from 'next/image'
import Fblogo from "../public/FBlogo.png"
import IGLogo from "../public/IGLogo.png"
import LnLogo from "../public/LnLogo.png"
import TelegramLogo from "../public/TelegramLogo.png"
const Community = () => {
  return (
    <>
    <section className={styles.Careers} >

      <h1>New Updates About React.js Everyday!</h1>
      <p>Meet the community Which Creates new Updates about React.js Everyday, Learn Everyday, Impliment Everyday, Share Everyday!</p>
      <button className={styles.btn}>Explore</button>   

    </section> 

    <section className={styles.Careersnext}>
      <h1>Our Community will Help you in Your Journey!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum nemo <br /> nostrum expedita! Minima enim, quae beatae sapiente iste, quidem fugiat aliquid, ad sunt necessitatibus aliquam. Doloremque veniam mollitia eligendi.</p>
        <div className={styles.fourcol}>
          <div className={styles.instagram}>
            <Image src={IGLogo} className={styles.NextImg} alt="Instagram" />
            <h1>Instagram Community</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className={styles.btn}><a href="https://instagram.com/" target="_blank" className='btn' >Join Now</a></button>
          </div>
          <div className={styles.linkdin}>
          <Image src={LnLogo} className={styles.NextImg} alt="LinkedIn" />
            <h1>Linkedin Community</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className={styles.btn}><a href="https://www.linkedin.com/company/reactjsofficial/" target="_blank" className='btn'>Join Now</a></button>
          </div>
          <div className={styles.facebook}>
            <Image src={Fblogo} className={styles.NextImg} alt="facebook" />
            <h1>Facebook Community</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className={styles.btn}><a href="https://www.facebook.com/profile.php?id=100079173533689" target="_blank" className='btn'>Join Now</a></button>
          </div>
          <div className={styles.telegram}>
            <Image src={TelegramLogo} className={styles.NextImg} alt="telegram" />
            <h1>Telegram Community</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className={styles.btn}><a href="https://t.me/reactjsofficial" target="_blank" className='btn'>Join Now</a></button>
          </div>
          
        </div>
        
    </section>
    </>
  )
}

export default Community