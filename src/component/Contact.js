import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div className='container contact'>
        <h1 className='text-center'>CONTACT ME</h1>
        <div className='contact-icon'>
          <a href='https//www.google.com' target='_blank' className='items'><FaInstagramSquare className='icons' /></a>
          <a href='https//www.google.com' target='_blank' className='items'><FaFacebook className='icons'/></a>
          <a href='https//www.google.com' target='_blank' className='items'><FaYoutube className='icons'/></a>
          <a href='https//www.google.com' target='_blank' className='items'><FaSquareXTwitter className='icons'/></a>
          <a href='https//www.google.com' target='_blank' className='items'><IoLogoWhatsapp className='icons'/></a>
        </div>
      </div>
    </>
  )
}

export default Contact
