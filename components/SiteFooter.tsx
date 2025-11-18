// components/SiteFooter.tsx

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer>
      

      {/* ================= BOTTOM FOOTER: BUILDINGS + LEGAL ================= */}
      <section className="footer">
        <div className="footer-overlay">
          <div className="container">
            {/* 4 columns: ABOUT / CONTACT / NAVIGATE / LINKS */}
            <div className="footer-grid">
              {/* ABOUT */}
              <div className="footer-col">
                <h3 className="footer-heading">ABOUT</h3>
                <p>
                  CHFinance is a credit broker and not a direct lender. We aim
                  to offer our clients the best solutions and work closely with
                  them on their immediate financial needs and longer-term plans.
                  Our friendly brokers will get you the best possible lending
                  terms and work closely with you until you have received the
                  funds required.
                </p>
              </div>

              {/* CONTACT */}
              <div className="footer-col">
                <h3 className="footer-heading">CONTACT</h3>
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
              <div className="footer-col">
                <h3 className="footer-heading">NAVIGATE</h3>
                <p>
                  <a href="/" className="footer-link">
                    Home
                  </a>
                </p>
                <p>
                  <a href="/solutions" className="footer-link">
                    Solutions
                  </a>
                </p>
                <p>
                  <a href="/our-vision" className="footer-link">
                    Our Vision
                  </a>
                </p>
                <p>
                  <a href="/contact" className="footer-link">
                    Get in Touch
                  </a>
                </p>
                <p>
                  <a href="/blog" className="footer-link">
                    Blog
                  </a>
                </p>
              </div>

              {/* LINKS */}
              <div className="footer-col">
                <h3 className="footer-heading">LINKS</h3>
                <p>
                  <a href="/cookies-policy" className="footer-link">
                    Cookies Policy
                  </a>
                </p>
                <p>
                  <a href="/privacy-policy" className="footer-link">
                    Our Privacy Policy
                  </a>
                </p>
                <p>
                  <a href="/complaints-procedure" className="footer-link">
                    Complaints Procedure
                  </a>
                </p>
              </div>
            </div>

            {/* ===== CONDENSED LEGAL TEXT ===== */}
            <div className="footer-bottom">
              <p>© Copyright {year} CHFinance. All Rights Reserved.</p>

              <p>
                CHFinance is a credit broker, not a lender. We work exclusively
                with a limited number of carefully selected lenders and receive
                a commission from the lenders we introduce you to if you
                subsequently take out a loan with them. CHFinance is a trading
                name of CH Finance (UK) Limited, a limited company registered in
                England and Wales, registration number 10924999.
              </p>

              <p>
                CH Finance (UK) Limited is licensed by the Information
                Commissioner&apos;s Office under the Data Protection Act,
                registration number ZA274068, and is an Appointed Representative
                of Clarke Hendrik Group Ltd. Our Firm Reference Number is
                788035. Clarke Hendrik Group Ltd is authorised and regulated by
                the Financial Conduct Authority with Firm Reference Number
                982714.
              </p>

              <p>
                You can check these details on the register at{" "}
                <a
                  href="https://register.fca.org.uk"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  https://register.fca.org.uk
                </a>{" "}
                or by contacting the FCA on 0800 111 6768.
              </p>

              <p>
                Please ensure you read our{" "}
                <a href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </a>{" "}
                before you contact us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
