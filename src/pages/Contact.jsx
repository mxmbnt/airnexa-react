import Cta from '../sections/Cta.jsx'
import Reviews from '../sections/Reviews.jsx'

export default function Contact() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="grid-cols cc-gap-0">
            <div className="column-left cc-gap-auto">
              <div className="header-col">
                <div className="title-wrapper">
                  <h1 data-header-title="" className="text-h1">
                    Get In Touch
                  </h1>
                </div>
                <div className="text-wrapper cc-top-16">
                  <div data-header-text="" className="text-sm">
                    Say hello to our team
                  </div>
                </div>
              </div>
              <div data-header-button="" className="bottom-wrap">
                <div className="title-wrapper">
                  <div className="text-h6">Contact information:</div>
                </div>
                <div className="text-wrapper cc-top-24">
                  <div className="text-sm">
                    Email:{' '}
                    <a href="mailto:support@airapp.com" className="email-link">
                      support@airnexa.com
                    </a>
                  </div>
                </div>
                <div className="text-wrapper cc-top-16">
                  <div className="text-sm">
                    Phone:{' '}
                    <a href="tel:(123)123-1546)" className="email-link">
                      (123) 123-1546)
                    </a>
                  </div>
                </div>
                <div className="text-wrapper cc-top-16">
                  <div className="text-sm">Address: 1223 Austin Texas United state of America </div>
                </div>
              </div>
            </div>
            <div data-header-button="" className="column-right">
              <div className="form-wrapper w-form">
                <form
                  id="email-form-2"
                  name="email-form-2"
                  data-name="Email Form 2"
                  method="get"
                  className="form"
                  data-wf-page-id="69df4c45cd0cbc06fa14b806"
                  data-wf-element-id="41db8f04-00f1-5aa3-72c6-d4387d61d04b"
                >
                  <div className="input-field">
                    <label htmlFor="name" className="text-field">
                      First Name *
                    </label>
                    <input
                      className="input w-input"
                      maxLength="256"
                      name="name"
                      data-name="Name"
                      placeholder="Your first name"
                      type="text"
                      id="name"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="email" className="text-field">
                      Email Address *
                    </label>
                    <input
                      className="input w-input"
                      maxLength="256"
                      name="name"
                      data-name="Name"
                      placeholder="email@mail.com"
                      type="email"
                      id="email"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="subject" className="text-field">
                      Subject *
                    </label>
                    <input
                      className="input w-input"
                      maxLength="256"
                      name="name"
                      data-name="Name"
                      placeholder="Add a subject"
                      type="text"
                      id="subject"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="field" className="text-field">
                      Message *
                    </label>
                    <textarea
                      placeholder="Write your message"
                      maxLength="5000"
                      id="field"
                      name="field"
                      data-name="Field"
                      className="input cc-text-area w-input"
                    ></textarea>
                  </div>
                  <div className="cta-wrapper cc-top-08">
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="form-button w-button"
                      value="Send Message"
                    />
                  </div>
                </form>
                <div className="success-message w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="error-message w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Reviews />
      <Cta />
    </>
  )
}
