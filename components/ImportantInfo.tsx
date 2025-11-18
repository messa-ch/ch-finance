// components/ImportantInfo.tsx

export default function ImportantInfo() {
  return (
    <section className="important-info">
      <div className="container">
        <div className="important-info-inner">
          <div className="important-info-icon">!</div>

          <div className="important-info-text">
            <p className="important-info-label">Important Information</p>

            <p>
              CHFinance is a credit broker, not a lender. We work exclusively
              with a limited number of carefully selected lenders and may
              receive a commission from them if you take out a loan following
              our introduction.
            </p>

            <p>
              All loans are subject to status and affordability checks. The
              value of your property may be at risk if you do not keep up
              repayments on a mortgage or other loan secured against it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
