// app/page.tsx
import PublicHeader from "@/components/PublicHeader";

export default function HomePage() {
  return (
    <main className="page">
      <PublicHeader />

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="container hero-content">
            <h1 className="hero-title">CHFINANCE</h1>
            <p className="hero-subtitle">Your One Stop Financial Solution</p>
            <a href="#callback" className="btn btn-gold">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="section section-light">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👤</div>
              <h3 className="feature-title">Experience</h3>
              <p className="feature-text">
                Leveraging our team&apos;s expertise and extensive experience,
                we deliver tailored financial solutions that best meet your
                specific needs.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3 className="feature-title">Whole of Market</h3>
              <p className="feature-text">
                Our collaborative approach with lenders and master brokers
                spanning the entire market allows us to optimise cost savings
                throughout your entire business process.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">👍</div>
              <h3 className="feature-title">Solution</h3>
              <p className="feature-text">
                Our services provide a flexible and dynamic approach to ensure
                your business secures the most advantageous deal.
              </p>
            </div>
          </div>

          <p className="section-lead text-center">
            <strong>
              Streamline your financial needs with our comprehensive and
              all-inclusive range of one-stop financial solutions.
            </strong>
          </p>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title text-center">Clients Testimonials</h2>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <h3 className="testimonial-title">Professional</h3>
              <p className="testimonial-text">
                My experience with this company was absolutely helpful.
                Characterises massive knowledge and professionalism. I was lucky
                to get help from such a helpful company. It&apos;s saved my
                life.
              </p>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <h3 className="testimonial-title">Brilliant</h3>
              <p className="testimonial-text">
                Brilliant. So helpful from start to finish. Can&apos;t recommend
                them highly enough.
              </p>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <h3 className="testimonial-title">Absolutely Fantastic</h3>
              <p className="testimonial-text">
                Absolutely fantastic, honest and friendly service. Recommended
                highly.
              </p>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <h3 className="testimonial-title">Excellent Service</h3>
              <p className="testimonial-text">
                Excellent service, sorted out my problems straight away and I
                would recommend this company to anyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= REQUEST A CALL BACK ================= */}
      <section id="callback" className="section section-blue dotted-bg">
        <div className="container callback-grid">
          <div className="callback-text">
            <h2>Request a Call Back</h2>
            <p>
              We prioritise your requirements and objectives as the cornerstone
              of our business philosophy.
            </p>
            <p>
              With our attentive approach, we actively listen and collaborate
              with you to create an unmatched and unforgettable experience that
              is precisely tailored to your needs, setting us apart in
              delivering exceptional customer satisfaction.
            </p>
          </div>

          <form className="callback-form">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Surname" required />
            <input type="text" placeholder="Postcode" required />
            <input type="email" placeholder="E-mail address" required />
            <input type="tel" placeholder="Phone number" required />

            <label className="checkbox-row">
              <input type="checkbox" required />{" "}
              <span>
                Please tick to confirm you agree to our{" "}
                <a href="/privacy-policy">Privacy Policy</a>.
              </span>
            </label>

            <button type="submit" className="btn btn-gold btn-full">
              Contact Me
            </button>
          </form>
        </div>
      </section>

      {/* ================= MONEY HELPER ================= */}
      <section className="section section-parallax">
        <div className="container moneyhelper-grid">
          <div className="moneyhelper-logo">
            <img
              src="/img/money-helper.jpeg"
              alt="MoneyHelper"
              className="moneyhelper-img"
            />
          </div>
          <div className="moneyhelper-text">
            <h3>
              <strong>
                The Money Helper is an impartial service set up by the
                government to help people manage their money. To find out more
                about free debt advice, debt counselling, debt adjustments, and
                credit information services, visit{" "}
                <a href="https://www.moneyhelper.org.uk/en#">Money Helper</a>.
              </strong>
            </h3>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section section-light text-center">
        <div className="container">
          <h3 className="section-title">
            We put our clients at the heart of our business
          </h3>
          <a href="#callback" className="btn btn-blue">
            Get Started
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-overlay">
          <div className="container footer-grid">
            <div>
              <h3>ABOUT</h3>
              <p>
                CHFinance is a credit broker and not a direct lender. We aim to
                offer our clients the best solutions and work closely with them
                on their immediate financial needs and longer-term plans. Our
                friendly brokers will get you the best possible lending terms
                and work closely with you until you have received the funds
                required.
              </p>
            </div>

            <div>
              <h3>CONTACT</h3>
              <p>
                2nd Floor Oakhill Court,
                <br />
                171 Bury New Road, Prestwich,
                <br />
                Manchester, M25 9ND.
              </p>
              <p>Phone: 0161 413 3519</p>
              <p>
                Opening Hours:
                <br />
                Monday – Wednesday 9:45am – 6:45pm
                <br />
                Thursday 9:30am – 6:00pm
                <br />
                Friday 9:30am – 4:00pm
              </p>
            </div>

            <div>
              <h3>NAVIGATE</h3>
              <p>
                <a href="/">Home</a>
              </p>
              <p>
                <a href="/solutions">Solutions</a>
              </p>
              <p>
                <a href="/our-vision">Our Vision</a>
              </p>
              <p>
                <a href="/contact-us">Get in Touch</a>
              </p>
              <p>
                <a href="/blog">Blog</a>
              </p>
            </div>

            <div>
              <h3>LINKS</h3>
              <p>
                <a href="/cookies-policy">Cookies Policy</a>
              </p>
              <p>
                <a href="/privacy-policy">Our Privacy Policy</a>
              </p>
              <p>
                <a href="/complaints-procedure">Complaints Procedure</a>
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              <strong>
                © Copyright 2025 CHFinance. All Rights Reserved.
                <br />
                CHFinance is a credit broker, not a lender.
                <br />
                We work exclusively with a limited number of carefully selected
                lenders. We receive a commission from the lenders we introduce
                you to if you subsequently take out a loan with them.
                <br />
                CHFinance is a trading name of CH Finance (UK) Limited.
                <br />
                CH Finance (UK) Limited is a limited company registered in
                England and Wales, Registration number 10924999.
                <br />
                Licensed by the Information Commissioner&apos;s Office under the
                Data Protection Act, Registration Number ZA274068.
                <br />
                CH Finance (UK) Limited is an Appointed Representative of Clarke
                Hendrik Group Ltd. Our Firm Reference Number is 788035.
                <br />
                Clarke Hendrik Group Ltd is authorised and regulated by the
                Financial Conduct Authority with Firm Reference Number 982714.
                <br />
                Please ensure you read our{" "}
                <a href="/privacy-policy">Privacy Policy</a> before you contact
                us.
              </strong>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
