// app/our-vision/page.tsx
import Link from "next/link";
import PublicHeader from "@/components/PublicHeader";
import SiteFooter from "@/components/SiteFooter";
import ImportantInfo from "@/components/ImportantInfo";

export const metadata = {
  title: "CHFinance - About Us",
  description:
    "Our firm provides professional and independent services focusing on delivering exceptional customer experiences. We specialise in business and commercial funding and work closely with FCA-regulated master brokers.",
};

const StarRating = () => (
  <div className="stars">
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
  </div>
);

export default function OurVisionPage() {
  return (
    <main className="page">
      {/* Shared header */}
      <PublicHeader />

      {/* HERO ABOUT US */}
      <section className="our-vision-hero">
        <div className="container">
          <h1 className="our-vision-hero-title">ABOUT US</h1>
        </div>
      </section>

      {/* ABOUT CHFINANCE TEXT BLOCK */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title h2-chfinance">CHFINANCE</h2>
          <h3 className="h3-tagline">YOUR ONE STOP FINANCIAL SOLUTION</h3>

          <p className="section-paragraph">
            Our firm provides professional and independent services focusing on
            delivering exceptional customer experiences. We deeply understand
            our clients&apos; goals and specialize in business and commercial
            funding. We work closely with various FCA-regulated master brokers
            across all sectors to offer our clients and their partners the best
            financial solutions.
          </p>

          <p className="section-paragraph">
            We offer a comprehensive financial solutions encompassing a wide
            range of financial products and services. Our approach is centred on
            building lasting relationships with our clients, partners, and
            lenders. This results in positive benefits for our clients on a
            daily basis, facilitating quick decision-making.
          </p>
        </div>
      </section>

      {/* CORE VALUES OVER IMAGE */}
      <section className="section our-vision-values">
        <div className="our-vision-values-overlay">
          <div className="container">
            <div className="values-card">
              <p className="values-label">GET TO KNOW US BETTER</p>
              <h2 className="values-title">CHFinance</h2>
              <p className="values-subtitle">Our Core Values</p>

              <div className="values-grid">
                <div>
                  <p>
                    <strong>Accessible</strong>
                  </p>
                  <p>
                    <strong>Competency</strong>
                  </p>
                  <p>Collaborative</p>
                  <p>
                    <strong>Creativity</strong>
                  </p>
                  <p>Experience</p>
                  <p>
                    <strong>Flexibility</strong>
                  </p>
                </div>
                <div>
                  <p>Growth</p>
                  <p>Knowledge</p>
                  <p>Meticulous</p>
                  <p>
                    <strong>Service</strong>
                  </p>
                  <p>
                    <strong>Trust</strong>
                  </p>
                  <p>
                    <strong>Understanding</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLEXIBLE FUNDING CTA */}
      <section className="section section-light text-center">
        <div className="container">
          <h2 className="section-title">
            We offer a wide range of flexible funding solutions
          </h2>
          <Link href="/contact-us" className="btn btn-gold">
            Request Consultation
          </Link>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title text-center">Clients Testimonials</h2>
          <p className="text-center" style={{ marginBottom: 30 }}>
            What our clients say about CHFinance
          </p>

          <div className="testimonials-grid">
            <article className="testimonial-card">
              <StarRating />
              <h3 className="testimonial-title">Professional</h3>
              <p>
                My experience with this company was absolutely helpful.
                Characterizes massive knowledge and professionalism. I was lucky
                to get help from so helpful company. It&apos;s saved my life.
              </p>
            </article>

            <article className="testimonial-card">
              <StarRating />
              <h3 className="testimonial-title">Brilliant</h3>
              <p>
                Brilliant. So helpful from start to finish. Can&apos;t recommend
                them highly enough.
              </p>
            </article>

            <article className="testimonial-card">
              <StarRating />
              <h3 className="testimonial-title">Absolutely Fantastic</h3>
              <p>
                Absolutely fantastic, honest and friendly service. Recommended
                highly.
              </p>
            </article>

            <article className="testimonial-card">
              <StarRating />
              <h3 className="testimonial-title">Excellent Service</h3>
              <p>
                Excellent service, sorted out my problems straight away and I
                would recommend this company to anyone.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* REQUEST A CALL BACK (same style as home dotted section) */}
      <section className="section section-blue dotted-bg">
        <div className="container callback-grid">
          <div>
            <h2 className="section-title">Request a Call Back</h2>
            <p>
              We prioritize your requirements and objectives as the cornerstone
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
            <div>
              <input type="text" required placeholder="First name" />
            </div>
            <div>
              <input type="text" required placeholder="Surname" />
            </div>
            <div>
              <input type="text" required placeholder="Postcode" />
            </div>
            <div>
              <input type="email" required placeholder="E-mail address" />
            </div>
            <div>
              <input type="tel" required placeholder="Phone number" />
            </div>

            <div className="checkbox-row">
              <input id="privacy" type="checkbox" required />
              <label htmlFor="privacy">
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
    </main>
  );
}
