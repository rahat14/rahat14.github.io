import React from "react"
import ContactForm from "../elements/ContactForm"

function ContactMe() {
  return (
    <section className="section has-background-grey-lighter" id="contactMe">
      <div className="columns">
        <div className="column"></div>
        <div className="column is-half">
          <h1 className="title">Contact Me</h1>
          <ContactForm />
        </div>
        <div className="column"></div>
      </div>
    </section>
  )
}

export default ContactMe