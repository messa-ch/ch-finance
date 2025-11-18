// app/blog/paying-down-credit-cards/page.tsx
import Link from "next/link";
import PublicHeader from "@/components/PublicHeader";
import ImportantInfo from "@/components/ImportantInfo";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "CHFinance - Paying Down Credit Cards",
  description:
    "Learn practical steps for prioritising and paying down your credit card balances, including budgeting, balance transfers, and when to seek help.",
};

export default function PayingDownCreditCardsPage() {
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

        {/* ARTICLE */}
        <section className="section section-white" style={{ paddingTop: 10 }}>
          <div className="container">
            <article
              style={{
                maxWidth: 820,
                margin: "0 auto",
                fontSize: 15,
                lineHeight: 1.7,
                color: "#111827",
              }}
            >
              <p style={{ fontSize: 13, color: "#004480" }}>April 25, 2023</p>
              <h2 style={{ fontSize: 26, marginTop: 4, marginBottom: 16 }}>
                Paying Down Credit Cards
              </h2>

              <p>
                If you carry a balance on a credit card with interest, it is
                important to have a plan to pay it down. Here is a more detailed
                explanation of the best way to pay down credit cards with
                interest:
              </p>

              <p>
                <strong>a. Prioritise high-interest debt</strong> – When you
                have multiple credit cards with balances, you should first focus
                on paying off the one with the highest interest rate. The higher
                the interest rate, the more you will pay in interest charges
                over time. By prioritising the card with the highest rate, you
                can save money in the long run.
              </p>

              <p>
                <strong>b. Make more than the minimum payment</strong> – Paying
                just the minimum amount due each month can keep you in debt for
                years. To make a real dent in your balance, try to pay as much
                as you can afford above the minimum. This reduces your balance
                and the interest you&apos;ll pay over time.
              </p>

              <p>
                <strong>c. Consider a balance transfer</strong> – If you have a
                lot of high-interest debt, consider transferring your balances
                to a credit card with a 0% introductory interest rate on balance
                transfers. This can help you save money on interest and pay off
                debt faster. Be aware of any transfer fees and aim to clear the
                balance before the introductory rate ends.
              </p>

              <p>
                <strong>d. Create a budget</strong> – Creating a budget helps
                you stay on track with your repayment goals. Track your income
                and expenses for a month or two, then identify areas where you
                can cut back so more money can go towards debt repayment. Online
                tools or apps can help you manage your budget.
              </p>

              <p>
                <strong>e. Avoid adding to your debt</strong> – While paying
                down your credit cards, avoid using them for new purchases.
                Stick to cash or debit until your balances are cleared. This
                stops you from digging deeper into debt and keeps you focused on
                what you already owe.
              </p>

              <p>
                <strong>f. Seek help if needed</strong> – If you&apos;re
                struggling to make payments or need help creating a repayment
                plan, consider seeking advice from a financial counsellor or
                debt management service. They can provide guidance and support
                to help you get back on track and reach your financial goals.
              </p>

              <p>
                By following these tips and strategies, you can effectively pay
                down your credit card debt and regain control of your finances.
              </p>
            </article>
          </div>
        </section>

        {/* CTA BAND */}
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
                <input
                  id="paying-down-callback-privacy"
                  type="checkbox"
                  required
                />
                <label htmlFor="paying-down-callback-privacy">
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
                  Characterizes massive knowledge and professionalism.
                </p>
              </div>
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <h3 className="testimonial-title">Brilliant</h3>
                <p className="feature-text">
                  So helpful from start to finish. Can&apos;t recommend them
                  highly enough.
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
