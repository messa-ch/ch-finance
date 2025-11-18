// components/SiteFooter.tsx

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="container">
          {/* Top 4-column footer */}
          <div className="footer-grid">
            {/* ABOUT */}
            <div>
              <h3>ABOUT</h3>
              <p>
                CHFinance is a credit broker and not a direct lender. We aim to
                offer our clients the best solutions and work closely with them
                on their immediate financial needs and longer-term plans.
              </p>
              <p>
                Our friendly brokers will get you the best possible lending
                terms and work closely with you until you have received the
                funds required.
              </p>
            </div>

            {/* CONTACT */}
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

            {/* NAVIGATE */}
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
                <a href="/contact">Get in Touch</a>
              </p>
              <p>
                <a href="/blog">Blog</a>
              </p>
            </div>

            {/* LINKS */}
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

          {/* Bottom legal / copyright block */}
          <div className="footer-bottom">
            <p>© {year} CHFinance. All Rights Reserved.</p>

            <p>
              CHFinance is a credit broker, not a lender. We work exclusively
              with a limited number of carefully selected lenders. We receive a
              commission from the lenders we introduce you to if you
              subsequently take out a loan with them.
            </p>

            <p>
              CH Finance (UK) Limited is a limited company registered in England
              and Wales. CH Finance (UK) Limited is an Appointed Representative
              of Clarke Hendrik Group Ltd, which is authorised and regulated by
              the Financial Conduct Authority.
            </p>

            <p>
              You can check these details on the register:
              <br />
              <a href="https://register.fca.org.uk" target="_blank" rel="noreferrer">
                https://register.fca.org.uk
              </a>{" "}
              or by contacting the FCA on 0800 111 6768.
            </p>

            <p>
              Please ensure you read our{" "}
              <a href="/privacy-policy">Privacy Policy</a> before you contact us.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
