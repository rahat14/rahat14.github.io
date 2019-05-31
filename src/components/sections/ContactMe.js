import React from "react"

function ContactMe() {
  return (
    <section className="section" id="contactMe">
      <div className="columns">
        <div className="column"></div>
        <div className="column is-half">
          <h1 className="title">Contact Me</h1>
          <form>
            <div className="field">
              <label className="label">Name (required)</label>
              <div className="control">
                <input className="input" type="text" placeholder="So I know who you are..." required />
              </div>
            </div>
            <div className="field">
              <label className="label">Email (required)</label>
              <div className="control">
                <input className="input" type="email" placeholder="So I can get back to you..." required />
              </div>
            </div>
            <div className="field">
              <label className="label">Favourite dog breed</label>
              <div className="control">
                <input className="input" type="text" placeholder="You're favourite dog breed..." />
              </div>
            </div>
            <div className="field">
              <label className="label">Subject</label>
              <div className="control">
                <input className="input" type="text" placeholder="Subject..." />
              </div>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea" placeholder="Textarea"></textarea>
              </div>
            </div>
            <div className="field">
              <div className="control has-icon-left">
                <a class="button is-success">
                  <span class="icon is-small">
                    <i class="fas fa-paper-plane"></i>
                  </span>
                  <span>Send Message</span>
                </a>
              </div>
            </div>
          </form>
        </div>
        <div className="column"></div>
      </div>
    </section>
  )
}

export default ContactMe