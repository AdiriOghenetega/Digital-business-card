import React from 'react'
import { useState, useRef } from "react"
import "./assets/form.css"

const Form = ({handleChange,handleImageUpload,handleEntry}) => {

    

 

  return (
    <div className="form__container">
    <h1>Create Digital Business Card</h1>
    <h4>fill form correctly</h4>
        <form >
        <div style={{
        
      }} className="upload__photo">
       <h4>Upload photo</h4>
          <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        // ref={imageUploader}
      />
      
          </div>
          <div className="contact__form_first-lastname">
            <div className="contact__form_firstname">
              <label of="firstname">First name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Enter Firstname"
                onChange={handleChange}
              />
            </div>
            <div className="contact__form_lastname">
              <label of="lastname">Last name </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Enter Lastname"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="contact__form_email">
            <label of="email">Email address</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Email Address"
              onChange={handleChange}
            />
          </div>
          <div className="contact__form_email">
            <label of="profession">Profession</label>
            <input
              type="text"
              id="profession"
              name="occupation"
              placeholder="What is your profession"
              onChange={handleChange}
            />
          </div>
          <div className="contact__form_email">
            <label of="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              placeholder="Enter website url here (format - https://example.com)"
              onChange={handleChange}
            />
          </div>
          <div className="contact__form_subject">
            <label of="linkedin">Linkedin</label>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              placeholder="Enter linkedin link here (format - https://example.com)"
              onChange={handleChange}
            />
          </div>
          <div className="contact__form_subject">
            <label of="twitter">Twitter</label>
            <input
              type="text"
              id="twitter"
              name="twitter"
              placeholder="Enter twitter link here (format - https://example.com)"
              onChange={handleChange}
            />
          </div>
          <div className="contact__form_subject">
            <label of="facebook">Facebook</label>
            <input
              type="text"
              id="facebook"
              name="facebook"
              placeholder="Enter facebook link here (format - https://example.com)"
              onChange={handleChange}
            />
          </div>
          <div className="contact__form_subject">
            <label of="instagram">Instagram</label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              placeholder="Enter instagram link here (format - https://example.com)"
              onChange={handleChange}
            />
          </div>
          <div className="contact__form_subject">
            <label of="github">Github</label>
            <input
              type="text"
              id="github"
              name="github"
              placeholder="Enter github link here (format - https://example.com)"
              onChange={handleChange}
            />
          </div>
          <div className="contact__form_message">
            <label of="about">About</label>

            <textarea
              id="about"
              name="about"
              placeholder="Write a little about yourself"
              onChange={handleChange}
            />
          </div>
          <div className="contact__form_message">
            <label of="interests">Interests</label>

            <textarea
              id="interests"
              name="interests"
              placeholder="What are your interests "
              onChange={handleChange}
            />
          </div>
          <button className="create__button" onClick={handleEntry}>Create</button>
        </form>
    </div>
  )
}

export default Form