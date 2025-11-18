// app/contact-us/page.tsx
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import ImportantInfo from "@/components/ImportantInfo";
import PublicHeader from "@/components/PublicHeader";

export const metadata = {
  title: "CHFinance - Contact Us",
  description:
    "Our firm provides professional and independent services focusing on delivering exceptional customer experiences. We deeply understand our clients' goals and specialise in business and commercial funding and work closely with FCA-regulated master brokers.",
};

export default function ContactUsPage() {
  return (
    <>
      <PublicHeader />

      <div className="page">
        {/* TAGLINE */}
        <section className="contact-intro">
          <div className="container">
            <h1 className="contact-intro-title">
              Your One Stop Financial Solution
            </h1>
          </div>
        </section>

        {/* CONTACT INFO + MAP */}
        <section className="contact-wrapper">
          <div className="container">
            <div className="contact-grid">
              {/* Contact box */}
              <div>
                <h2 className="contact-info-title">Contact Info</h2>

                <p className="contact-opening">
                  <strong>Opening hours:</strong>
                  <br />
                  Monday–Thursday 10:00 am – 7:00 pm
                  <br />
                  Friday 10:00 am – 4:00 pm
                  <br />
                  Saturday, Sunday &amp; Bank Holidays Closed
                </p>

                <p className="contact-address">
                  <span role="img" aria-label="location">
                    📍
                  </span>{" "}
                  2nd Floor Oakhill Court
                  <br />
                  171 Bury New Road
                  <br />
                  Prestwich
                  <br />
                  Manchester
                  <br />
                  M25 9ND
                </p>

                <p className="contact-phone">
                  <span role="img" aria-label="phone">
                    📞
                  </span>{" "}
                  0161 413 3519
                </p>
              </div>

              {/* Map */}
              <div className="contact-map">
                <iframe
                  title="CH Finance (UK) Limited location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.564752604042!2d-2.1601012239610657!3d53.51197006231905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1e3a3f19419%3A0xae07c8c1e38e5a8b!2sCH%20Finance%20(UK)%20Limited!5e0!3m2!1sen!2suk!4v1682244168145!5m2!1sen!2suk"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* SEND US A MESSAGE */}
        <section className="contact-form-section">
          <div className="container">
            <h2 className="contact-form-title">Send Us A Message</h2>

            <form className="contact-form">
              {/* FIRST NAME / SURNAME */}
              <div className="contact-form-grid">
                <div className="contact-form-group">
                  <label>FIRST NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="Type your first name here"
                    className="contact-input"
                  />
                </div>

                <div className="contact-form-group">
                  <label>SURNAME</label>
                  <input
                    type="text"
                    required
                    placeholder="Type your surname here"
                    className="contact-input"
                  />
                </div>

                {/* POSTCODE */}
                <div className="contact-form-group">
                  <label>POSTCODE</label>
                  <input
                    type="text"
                    required
                    placeholder="Type your postcode here"
                    className="contact-input"
                  />
                </div>

                {/* EMAIL */}
                <div className="contact-form-group">
                  <label>E-MAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    placeholder="Type your e-mail address here"
                    className="contact-input"
                  />
                </div>

                {/* PHONE */}
                <div className="contact-form-group">
                  <label>PHONE NUMBER</label>
                  <input
                    type="tel"
                    required
                    placeholder="Type your phone number here"
                    className="contact-input"
                  />
                </div>

                {/* MESSAGE */}
                <div className="contact-form-group">
                  <label>MESSAGE</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Type your message here"
                    className="contact-textarea"
                  />
                </div>
              </div>

              {/* Privacy + button */}
              <div className="contact-checkbox">
                <input id="contact-privacy" type="checkbox" required />
                <label htmlFor="contact-privacy">
                  Please tick to confirm you agree to our{" "}
                  <Link href="/privacy-policy">Privacy Policy</Link>.
                </label>
              </div>

              <div className="contact-submit">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </section>

        {/* REQUEST A CALL BACK BAND */}
        <section className="section section-blue dotted-bg">
          <div className="container callback-grid">
            {/* Text */}
            <div>
              <h2 className="section-title">Request a Call Back</h2>
              <p>
                We prioritize your requirements and objectives as the
                cornerstone of our business philosophy.
                <br />
                <br />
                With our attentive approach, we actively listen and collaborate
                with you to create an unmatched and unforgettable experience
                that is precisely tailored to your needs, setting us apart in
                delivering exceptional customer satisfaction.
              </p>
            </div>

            {/* Form */}
            <form className="callback-form">
              <input type="text" required placeholder="First name" />
              <input type="text" required placeholder="Surname" />
              <input type="text" required placeholder="Postcode" />
              <input type="email" required placeholder="E-mail address" />
              <input type="tel" required placeholder="Phone number" />

              <div className="checkbox-row">
                <input id="callback-privacy" type="checkbox" required />
                <label htmlFor="callback-privacy">
                  Please tick to confirm you agree to our{" "}
                  <Link href="/privacy-policy">Privacy Policy</Link>.
                </label>
              </div>

              <button type="submit" className="btn btn-gold btn-full">
                Contact Me
              </button>
            </form>
          </div>
        </section>

        {/* Important info strip + footer */}
        <ImportantInfo />
        <SiteFooter />
      </div>
    </>
  );
}
