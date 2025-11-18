// app/blog/how-can-credit-cards-affect-my-credit-score/page.tsx
import Link from "next/link";
import PublicHeader from "@/components/PublicHeader";
import ImportantInfo from "@/components/ImportantInfo";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "CHFinance – How can credit cards affect my credit score?",
  description:
    "Learn how credit cards can impact your credit score in the UK, including payment history, credit utilisation, length of history, credit mix, and applications.",
};

export default function CreditScoreArticlePage() {
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
                fontSize: 32,
                fontWeight: 900,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              <Link href="/blog" style={{ color: "#111827" }}>
                BLOG
              </Link>
            </h1>
          </div>
        </section>

        {/* ARTICLE BODY */}
        <section className="section section-white">
          <div className="container" style={{ maxWidth: 900 }}>
            <p
              style={{
                fontSize: 14,
                color: "#004480",
                marginBottom: 8,
              }}
            >
              April 27, 2023
            </p>

            <h2
              style={{
                fontSize: 24,
                fontWeight: 700,
                marginBottom: 18,
                color: "#111827",
              }}
            >
              How can credit cards affect my credit score?
            </h2>

            <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 14 }}>
              Credit cards can have both positive and negative effects on your
              credit score. Here are some ways in which they can affect your
              credit score:
            </p>

            <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 14 }}>
              <strong>a. Payment history</strong>
              <br />
              Your payment history is one of the most important factors in
              determining your credit score. When you use a credit card, you
              borrow the money you need to pay back with interest. Making
              on-time payments on your credit card each month shows lenders that
              you are responsible and can manage your debt effectively. On the
              other hand, if you miss payments or make late payments, it can
              indicate to lenders that you are struggling to manage your
              finances, which can negatively affect your credit score.
            </p>

            <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 14 }}>
              <strong>b. Credit utilisation</strong>
              <br />
              Credit utilisation refers to the amount of credit you use compared
              to your credit limit. If you have a credit card with a limit of
              £5,000 and you have a balance of £4,000, your credit utilisation
              is 80%. Lenders typically prefer a credit utilisation of 30% or
              less, as it shows that you are not over-extended and can manage
              your debt responsibly. To keep your credit utilisation low, it is
              recommended that you pay off your credit card balance in full each
              month or at least pay more than the minimum payment.
            </p>

            <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 14 }}>
              <strong>c. Length of credit history</strong>
              <br />
              The length of your credit history is also important in determining
              your credit score. If you have a long history of using credit
              cards responsibly, it can positively impact your credit score.
              This is because it shows lenders that you have a track record of
              managing your debt effectively. However, if you are new to using
              credit cards, building up a positive credit history can take some
              time.
            </p>

            <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 14 }}>
              <strong>d. Credit mix</strong>
              <br />
              Having a combination of different types of credit, such as credit
              cards, loans, and mortgages, can also positively impact your
              credit score. This is because it shows lenders that you can
              responsibly manage different types of debt. However, it is
              important only to take out credit you can afford to repay and to
              make all payments on time.
            </p>

            <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 14 }}>
              <strong>e. Credit applications</strong>
              <br />
              Finally, being careful when applying for credit cards is
              important, as each application can result in a hard inquiry on
              your credit report. Too many hard inquiries within a short period
              of time can negatively affect your credit score. It is important
              to only apply for the credit that you need and to spread out
              applications over a longer period of time if possible.
            </p>

            <p style={{ fontSize: 15, lineHeight: 1.7 }}>
              In summary, credit cards can affect your credit score in various
              ways in the UK. By using credit cards responsibly, making on-time
              payments, keeping your credit utilisation low, and being careful
              when applying for credit, you can help maintain a good credit
              score and improve your chances of being approved for credit in the
              future.
            </p>
          </div>
        </section>

        {/* SPEAK TO AN EXPERT / CALLBACK BAND */}
        <section className="section section-parallax dotted-bg">
          <div className="container callback-grid">
            {/* Text */}
            <div>
              <h2 className="section-title" style={{ color: "#111827" }}>
                Speak to an expert today
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.7 }}>
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

        {/* TESTIMONIALS */}
        <section className="section section-light">
          <div className="container">
            <h2 className="text-center section-title">
              <strong>Clients Testimonials</strong>
            </h2>

            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <h3 className="testimonial-title">Professional</h3>
                <p>
                  My experience with this company was absolutely helpful.
                  Characterises massive knowledge and professionalism. I was
                  lucky to get help from such a helpful company. It&apos;s saved
                  my life.
                </p>
              </div>

              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <h3 className="testimonial-title">Brilliant</h3>
                <p>
                  Brilliant. So helpful from start to finish. Can&apos;t
                  recommend them highly enough.
                </p>
              </div>

              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <h3 className="testimonial-title">Absolutely Fantastic</h3>
                <p>
                  Absolutely fantastic, honest and friendly service. Recommended
                  highly.
                </p>
              </div>

              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <h3 className="testimonial-title">Excellent Service</h3>
                <p>
                  Excellent service, sorted out my problems straight away and I
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
