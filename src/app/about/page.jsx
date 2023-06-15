import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '../components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        fill={true} alt="" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
          <div className={styles.item}>
            <h1 className={styles.title}>Who Are We</h1>
            <p className={styles.desc}>
            We’re a young and talented group of entrepreneurs and engineers with a groundbreaking idea designed to contribute towards a better tomorrow. We provide smart solutions for companies of all sizes and pride ourselves on our unparalleled, dedicated service. 

            <br />
            <br />
            At Glex, we believe that the right understanding and technological edge can lead companies towards a successful future.
            </p>
          </div>
          <div className={styles.item}>
              <h1 className={styles.title}>What We Do?</h1>
              <p className={styles.desc}>
              Result-driven and hard working entrepreneur skilled pro-actively participating in all aspects of business development and management from operations to marketing and human resources. Accomplished entrepreneur capable to identifying new opportunities and sustaining extraordinary business growth.
                <br />
                <br /> - Dynamic Websites
                <br />
                <br /> - Fast and Handy
                <br />
                <br /> - Mobile Apps
              </p>
              <Button url="/contact" text="Contact"  />
          </div>
      </div>
    </div>
  )
}

export default About