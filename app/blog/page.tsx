// app/blog/page.tsx
import Link from "next/link";
import PublicHeader from "@/components/PublicHeader";
import ImportantInfo from "@/components/ImportantInfo";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "CHFinance - Blog",
  description:
    "Follow CHFinance insights on credit scores, secured loans, and practical tips for managing your borrowing and repayments.",
};

const POSTS = [
  {
    slug: "/blog/how-can-credit-cards-affect-my-credit-score",
    date: "April 27, 2023",
    title: "How can credit cards affect my credit score?",
    excerpt:
      "Credit cards can have both positive and negative effects on your credit score. Here are some ways in which they can affect it.",
    imgSrc: "/img/credit%20cards-credit%20score.jpg",
    imgAlt: "Person taking credit cards from a wallet",
  },
  {
    slug: "/blog/can-a-secured-loan-help-pay-down-credit-cards",
    date: "April 26, 2023",
    title: "Can a secured loan help pay down credit cards?",
    excerpt:
      "A secured loan can sometimes be used to pay down credit card debt in the UK. Here’s how it works and what to consider.",
    imgSrc: "/img/secured-loans-credit-cards.jpg",
    imgAlt: "Person paying online with a credit card and laptop",
  },
  {
    slug: "/blog/paying-down-credit-cards",
    date: "April 25, 2023",
    title: "Paying Down Credit Cards",
    excerpt:
      "If you carry a balance on a credit card with interest, it’s important to have a clear plan to pay it down effectively.",
    imgSrc: "/img/credit-cards.jpg",
    imgAlt: "Wallet with credit cards",
  },
];

export default function BlogPage() {
  return (
    <>
      <PublicHeader />

      <div className="page">
        {/* BLOG HEADER */}
        <section className="section section-white">
          <div className="container">
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#004480",
                marginBottom: 4,
              }}
            >
              Follow our work
            </p>
            <h1
              style={{
                fontSize: 36,
                fontWeight: 900,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Blog
            </h1>
          </div>
        </section>

        {/* BLOG CARDS */}
        <section className="section section-white" style={{ paddingTop: 10 }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gap: "40px",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(260px, min(340px, 100%)))",
                justifyContent: "center",
              }}
            >
              {POSTS.map((post) => (
                <article
                  key={post.slug}
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
                    padding: "0 0 20px",
                    borderRadius: 2,
                    border: "1px solid #e5e7eb",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Link href={post.slug}>
                    <img
                      src={post.imgSrc}
                      alt={post.imgAlt}
                      style={{
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </Link>

                  <div style={{ padding: "18px 22px 0" }}>
                    <p
                      style={{
                        fontSize: 13,
                        color: "#004480",
                        marginBottom: 6,
                      }}
                    >
                      {post.date}
                    </p>

                    <h3
                      style={{
                        fontSize: 20,
                        margin: "0 0 10px",
                        lineHeight: 1.4,
                      }}
                    >
                      <Link
                        href={post.slug}
                        style={{ color: "#111827", textDecoration: "none" }}
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <p
                      style={{
                        fontSize: 14,
                        lineHeight: 1.7,
                        color: "#4b5563",
                        marginBottom: 18,
                      }}
                    >
                      {post.excerpt}
                    </p>
                  </div>

                  <div style={{ padding: "0 22px" }}>
                    <Link
                      href={post.slug}
                      style={{
                        display: "block",
                        textAlign: "center",
                        marginTop: "auto",
                        padding: "10px 16px",
                        fontSize: 12,
                        textTransform: "uppercase",
                        letterSpacing: "0.16em",
                        borderTop: "1px solid #e5e7eb",
                        borderBottom: "1px solid #e5e7eb",
                        color: "#004480",
                        textDecoration: "none",
                      }}
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SPEAK TO AN EXPERT TODAY */}
        <section className="section section-blue dotted-bg">
          <div className="container callback-grid">
            <div>
              <h2 className="section-title">Speak to an expert today</h2>
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

            <form className="callback-form">
              <input type="text" required placeholder="First name" />
              <input type="text" required placeholder="Surname" />
              <input type="text" required placeholder="Postcode" />
              <input type="email" required placeholder="E-mail address" />
              <input type="tel" required placeholder="Phone number" />

              <div className="checkbox-row">
                <input id="blog-callback-privacy" type="checkbox" required />
                <label htmlFor="blog-callback-privacy">
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

        {/* TESTIMONIALS */}
        <section className="section section-white">
          <div className="container">
            <h2 className="section-title text-center">
              <strong>Clients Testimonials</strong>
            </h2>

            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <h3 className="testimonial-title">Professional</h3>
                <p className="feature-text">
                  My experience with this company was absolutely helpful.
                  Massive knowledge and professionalism – I was lucky to get
                  help from such a helpful company. It saved my life.
                </p>
              </div>

              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <h3 className="testimonial-title">Brilliant</h3>
                <p className="feature-text">
                  Brilliant. So helpful from start to finish. Can&apos;t
                  recommend them highly enough.
                </p>
              </div>

              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <h3 className="testimonial-title">Absolutely Fantastic</h3>
                <p className="feature-text">
                  Absolutely fantastic, honest and friendly service. Recommended
                  highly.
                </p>
              </div>

              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <h3 className="testimonial-title">Excellent Service</h3>
                <p className="feature-text">
                  Excellent service, sorted my problems out straight away and I
                  would recommend this company to anyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ImportantInfo />
        <SiteFooter />
      </div>
    </>
  );
}
