"use client";

import { useState } from "react";

type TabId =
  | "asset-finance"
  | "bridging-loans"
  | "commercial-business-funding"
  | "commercial-debt-restructuring"
  | "commercial-mortgages"
  | "expat-finance"
  | "invoice-factoring"
  | "money-management"
  | "private-equity"
  | "property-finance"
  | "secured-loan"
  | "unsecured-loan"
  | "first-time-buyer"
  | "buy-my-next-home"
  | "buy-to-let"
  | "remortgage"
  | "equity-release"
  | "buildings-contents"
  | "critical-illness"
  | "income-protection"
  | "key-person"
  | "life-insurance"
  | "private-medical"
  | "relevant-life"
  | "property-finance-25"
  | "property-finance-26";

const TABS: { id: TabId; label: string }[] = [
  { id: "asset-finance", label: "Asset Finance" },
  { id: "bridging-loans", label: "Bridging Loans" },
  { id: "commercial-business-funding", label: "Commercial Business Funding" },
  {
    id: "commercial-debt-restructuring",
    label: "Commercial Debt Restructuring",
  },
  { id: "commercial-mortgages", label: "Commercial Mortgages" },
  { id: "expat-finance", label: "Expat Finance" },
  { id: "invoice-factoring", label: "Invoice/Finance Factoring" },
  { id: "money-management", label: "Money Management" },
  { id: "private-equity", label: "Private/Venture Equity Finance" },
  { id: "property-finance", label: "Property Finance" },
  { id: "secured-loan", label: "Secured Loan" },
  { id: "unsecured-loan", label: "Unsecured Loan" },
  { id: "first-time-buyer", label: "First Time Buyer" },
  { id: "buy-my-next-home", label: "Buy My Next Home" },
  { id: "buy-to-let", label: "Buy-to-let Mortgage" },
  { id: "remortgage", label: "Remortgage" },
  { id: "equity-release", label: "Lifetime Mortgage/Equity Release" },
  { id: "buildings-contents", label: "Buildings and Contents Insurance" },
  { id: "critical-illness", label: "Critical Illness Cover" },
  { id: "income-protection", label: "Income Protection" },
  { id: "key-person", label: "Key Person Insurance" },
  { id: "life-insurance", label: "Life Insurance" },
  { id: "private-medical", label: "Private Medical Insurance" },
  { id: "relevant-life", label: "Relevant Life Insurance" },
  { id: "property-finance-25", label: "Property Finance (25)" },
  { id: "property-finance-26", label: "Property Finance (26)" },
];

const TAB_CONTENT: Record<TabId, string> = {
  "asset-finance": `
    <p class="p-15-style">
      <span>
        <br><strong>Unlock the potential for business expansion with our Asset Finance arrangements. <br>
        Capitalize on growth opportunities with our financing solutions tailored to your business needs. <br>
        Let us help you take your business to the next level!&nbsp;</strong>
      </span>
      <strong><br></strong><br>
      Have you identified untapped growth potential for your business? Do you require additional financing to capitalize on these opportunities?
      Rest assured, we are here to assist you in obtaining the necessary funding to seize your business growth prospects.<br><br>
      <strong>What is asset finance?&nbsp;</strong><br>
      Asset finance offers businesses the opportunity to obtain and utilize assets, such as machinery, vehicles, equipment, plants, technology,
      and more, without the need for upfront payments. Instead, a finance provider typically purchases the assets and leases or rents them to
      the business over a predetermined term, often with fixed monthly payments. This enables companies to access the assets necessary for their
      operations or expansion, while preserving their capital and effectively managing their cash flow. Asset finance is a rapidly growing option
      for business owners, applicable to both new and existing assets.<br><br>
      <strong>Types of asset finance arrangements</strong><br>
      a. Hire Purchase (HP)&nbsp;<br>
      Under a hire purchase agreement, the business pays regular instalments to the finance provider, with an option to purchase the asset at
      the end of the term. Once all payments are made, the business becomes the asset owner.<br>
      b. Finance Lease <br>
      In a finance lease arrangement, the business pays fixed rentals to the finance provider to use the asset over the lease term. At the end
      of the period, the company can typically purchase the asset, extend the lease, or return the asset.<br>
      c. Operating Lease <br>
      An operating lease is similar to a finance lease but typically has a shorter term and allows the business to return or upgrade the asset
      at the end of the lease period. This type of asset finance is often used for assets that have a short lifespan or require regular upgrades.<br><br>
      <strong>Benefits of asset finance&nbsp;</strong><br>
      Asset finance presents multiple advantages for businesses. It enables them to access assets that may have been otherwise unaffordable,
      while also spreading the cost over time, which can improve their cash flow. Furthermore, there may be tax advantages, as lease payments
      are often tax-deductible. Additionally, asset finance offers flexibility in managing assets, allowing for upgrades, returns, or purchases
      at the end of the lease term to align with the changing needs of the business.<br><br>
      <strong>We have customised solutions to meet your needs</strong><br>
      Plant and equipment&nbsp;<br>
      Factory Machinery&nbsp;<br>
      Commercial Vehicles<br><br>
      <strong>Refinance Your Current Assets</strong><br>
      Numerous businesses are considering refinancing their existing equipment to obtain immediate financing. However, obtaining approval from
      banks can be challenging due to increased caution in lending. But here is the good news - CHFinance can assist you where traditional banks
      may not. With an extensive network of lenders, we can arrange funds tailored to your specific requirements.<br><br>
      <strong>Why choose CHFinance?&nbsp;</strong><br>
      It is important to note that asset finance arrangements can vary depending on the provider and the specific terms and conditions agreed upon
      in the contract. Therefore, it is imperative for businesses to thoroughly review and comprehend the terms of the agreement, including interest
      rates, fees, and end-of-lease options, before committing to an asset finance arrangement. Seeking professional financial advice is also
      beneficial to ensure that the chosen asset finance option aligns with the business's financial goals and requirements.&nbsp;With our disciplined
      approach, wide network and skilled representatives, we serve each of our customers with a whole heart.&nbsp;<br><br>
      <strong>Disclaimer</strong><br>
      We do not offer advice on Asset Finance. If you show an interest in one of this area, we can refer you to an FCA-regulated master broker who is
      authorised to provide advice. If you go ahead with one of their recommendations, we, as a firm, will receive a referral fee commission from the
      provider if the case completes. &nbsp;<br><br><br>
    </p>
    <a href="#request-callback" class="btn btn-d btn-sq btn-xl lawyer-button">
      GET STARTED
    </a>
  `,

  // You can replace these placeholders with the real HTML later.
  "bridging-loans": `<p>Content for Bridging Loans will go here.</p>`,
  "commercial-business-funding": `<p>Content for Commercial Business Funding will go here.</p>`,
  "commercial-debt-restructuring": `<p>Content for Commercial Debt Restructuring will go here.</p>`,
  "commercial-mortgages": `<p>Content for Commercial Mortgages will go here.</p>`,
  "expat-finance": `<p>Content for Expat Finance will go here.</p>`,
  "invoice-factoring": `<p>Content for Invoice/Finance Factoring will go here.</p>`,
  "money-management": `<p>Content for Money Management will go here.</p>`,
  "private-equity": `<p>Content for Private/Venture Equity Finance will go here.</p>`,
  "property-finance": `<p>Content for Property Finance will go here.</p>`,
  "secured-loan": `<p>Content for Secured Loan will go here.</p>`,
  "unsecured-loan": `<p>Content for Unsecured Loan will go here.</p>`,
  "first-time-buyer": `<p>Content for First Time Buyer will go here.</p>`,
  "buy-my-next-home": `<p>Content for Buy My Next Home will go here.</p>`,
  "buy-to-let": `<p>Content for Buy-to-let Mortgage will go here.</p>`,
  "remortgage": `<p>Content for Remortgage will go here.</p>`,
  "equity-release": `<p>Content for Lifetime Mortgage/Equity Release will go here.</p>`,
  "buildings-contents": `<p>Content for Buildings and Contents Insurance will go here.</p>`,
  "critical-illness": `<p>Content for Critical Illness Cover will go here.</p>`,

  // 🔹 FULL Income Protection HTML pasted as requested
  "income-protection": `
    <p>
      If you are worried about what might happen if you become ill or lose your
      job, income protection insurance could offer you and your family security.
      Income protection refers to a family of insurance products that ensure you
      can continue to meet your financial commitments if you are forced to take
      an extended break from work. Income Protection Insurance will provide you
      with financial support if you find yourself unable work, due to illness or
      accident or if you are made redundant. Income Protection Insurance will
      pay you a regular income, whether you are employed or self-employed. It
      pays an agreed portion of your lost earnings, which could help cover your
      monthly essential bills like your mortgage, rent and other outgoings such
      as utilities and food, enabling you to focus on your recovery. It can
      provide you with either a fixed monthly benefit amount or cover a
      percentage of your earnings following the deferred period. You can get
      short-term or long-term policies, depending on your needs. The benefit
      amount can be paid for each eligible claim for a set period from up to 12
      months or until retirement.
    </p>

    <p>
      You might have savings to fall back on, an adequate company redundancy
      package, or company sick pay that will cover illness in some circumstances
      but unemployment protection will help you to maintain your lifestyle and
      pay the bills if you can not rely on these, either in the short or long
      term. You can expect to receive about half to two-thirds of your earnings
      before tax from your regular job. This is because some money will be taken
      off for the state benefits you can claim, and also, the income you get
      from the policy is tax-free.
    </p>

    <p>
      You can not claim income protection payments straight away if you fall ill
      or become disabled. You usually have to wait a minimum of four weeks, but
      payments can start up to two years after you stop work. This is because
      you may not need the money straight away as you may get sick pay from your
      employer, or you may be able to claim statutory sick pay for up to 28
      weeks after you stop work.
    </p>

    <p>
      Short-term income protection can cover you for accident, sickness and
      unemployment if you’re unable to work for a short period, for example, if
      you break your leg or are made redundant. Policies typically cover you
      from six to 12 months, although some policies will provide cover up to two
      years. Long-term income protection will cover you against accident and
      sickness if you become seriously ill or permanently disabled, and it will
      not cover unemployment. If you are unable to work again, long-term income
      protection could provide you with a regular monthly income until you
      retire or the end of the policy term – whichever is sooner. Check with
      your provider to see the exact terms.
    </p>

    <p>
      When you apply for income protection, you specify your employment status,
      what you want your insurance to cover, your income, your mortgage or loan
      repayments.
    </p>

    <p>
      Income protection should not be confused with Payment Protection Insurance
      (PPI). PPI, notorious for being widely mis-sold in the past, only covers a
      specific debt if you are unable to work because of injury, illness or
      unemployment. For example, it could cover your credit card, mortgage or
      loan repayments.
    </p>

    <div class="pt-4 mt-4 border-t border-slate-200">
      <h3 class="mb-2 text-[15px] font-semibold text-slate-900">
        Important Information
      </h3>
      <p>
        Almost all firms offering financial services in the UK must be
        authorised by The Financial Conduct Authority (FCA) or be an Appointed
        Representative (AR) of a firm. You should only deal with authorised
        firms. If you deal with an unauthorised firm, you will not be covered by
        the Financial Ombudsman Service or Financial Services Compensation
        Scheme if things go wrong. Feel free to visit www.fca.org.uk.
      </p>
      <p class="mt-2">
        We will not charge you a fee for our services relating to insurance, but
        we will receive a commission from the product provider. The commission
        will be calculated as a proportion of the premiums paid for the
        insurance product. You will receive a quotation that will tell you about
        the fees and charges relating to any particular insurance policy we
        recommend.
      </p>
      <p class="mt-2">
        We do not charge a fee as we will receive a commission from the provider
        after the policy has been placed at risk.
      </p>
      <p class="mt-2">
        Calls to and from CHFinance may be monitored and recorded for
        record-keeping, supervisory, training, and quality-assurance purposes.
      </p>
    </div>

    <a href="#request-callback" class="btn btn-d btn-sq btn-xl lawyer-button mt-4 inline-block">
      GET STARTED
    </a>
  `,

  "key-person": `<p>Content for Key Person Insurance will go here.</p>`,
  "life-insurance": `<p>Content for Life Insurance will go here.</p>`,
  "private-medical": `<p>Content for Private Medical Insurance will go here.</p>`,
  "relevant-life": `<p>Content for Relevant Life Insurance will go here.</p>`,
  "property-finance-25": `<p>Content for Property Finance (25) will go here.</p>`,
  "property-finance-26": `<p>Content for Property Finance (26) will go here.</p>`,
};

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState<TabId>("asset-finance");

  return (
    <main className="page">
      {/* Top heading */}
      <section className="section section-white">
        <div className="container solutions-wrapper">
          <h1 className="section-title">Solutions</h1>
          <p className="solutions-intro">
            Explore the different solutions we can help arrange.
          </p>

          <div className="solutions-layout">
            {/* LEFT: tabs */}
            <aside className="solutions-sidebar">
              <p className="solutions-label">Products</p>
              <ul className="solutions-tabs" role="tablist">
                {TABS.map((tab) => (
                  <li key={tab.id} className="solutions-tab-item">
                    <button
                      type="button"
                      className={
                        "solutions-tab" +
                        (activeTab === tab.id ? " solutions-tab--active" : "")
                      }
                      onClick={() => setActiveTab(tab.id)}
                      role="tab"
                      aria-selected={activeTab === tab.id}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            {/* RIGHT: content */}
            <section className="solutions-content" aria-live="polite">
              <div
                className="solutions-card"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: TAB_CONTENT[activeTab] ?? "",
                }}
              />
            </section>
          </div>
        </div>
      </section>

      {/* Request a Call Back section – keep as your original design */}
      <section
        id="request-callback"
        className="bloc bg-Company-20hero-206 tc-6278 bgc-3291 bloc-bg-texture texture-dots d-bloc"
      >
        <div className="container bloc-md">
          <div className="row">
            <div className="col-md-12 col-12 bgc-3291">
              <div className="row row-bloc-124-style">
                {/* Left text */}
                <div className="col-lg-4 offset-lg-2 col-12">
                  <h2 className="h2-contact-me-margin-top text-center mx-auto d-sm-block">
                    <br />
                    &nbsp; &nbsp; Request a Call Back&nbsp;
                  </h2>
                  <p className="p-bloc-124-style text-left d-sm-block">
                    We prioritize your requirements and objectives as the
                    cornerstone of our business philosophy. <br />
                    <br />
                    With our attentive approach, we actively listen and
                    collaborate with you to create an unmatched and
                    unforgettable experience
                    <br />
                    that is precisely tailored to your needs, setting us apart
                    in delivering exceptional customer satisfaction.
                    <br />
                  </p>
                </div>

                {/* Form */}
                <div className="col-lg-4 offset-lg-2 col-md-9 offset-md-2 col-sm-11">
                  <form
                    id="form_42403"
                    className="form-margin-right"
                    noValidate
                  >
                    <h2 className="mb-4 text-center d-sm-none d-block">
                      Request a Call Back
                    </h2>
                    <p className="d-sm-none d-block text-left">
                      We prioritize your requirements and objectives as the
                      cornerstone of our business philosophy. <br />
                      <br />
                      With our attentive approach, we actively listen and
                      collaborate with you to create an unmatched and
                      unforgettable experience&nbsp; that is precisely tailored
                      to your needs, setting us apart in delivering exceptional
                      customer satisfaction.
                      <br />
                    </p>

                    <div className="form-group container-div-bloc-124-margin-top">
                      <input
                        className="form-control field-22140-margin-top"
                        placeholder="First name"
                        required
                        id="first_name_customer_34514_25929_3918_42403"
                      />
                      <input
                        className="form-control field-27513-margin-top"
                        placeholder="Surname"
                        required
                        id="surname_customer_34514_25929_3918_42403"
                      />
                      <input
                        className="form-control field-8507-margin-top"
                        placeholder="Postcode"
                        required
                        id="postcode_customer_34514_25929_3918_42403"
                      />
                      <input
                        className="form-control field-35468-margin-top"
                        placeholder="E-mail address"
                        type="email"
                        required
                        id="email_address_customer_34514_25929_3918_42403"
                      />
                      <input
                        className="form-control field-5461-margin-top"
                        placeholder="Phone number"
                        required
                        id="phone_number_customer_34514_25929_3918_42403"
                      />

                      <div className="form-check checkbox-margin-top">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="input_2121_34514_25929_3918_42403"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="input_2121_34514_25929_3918_42403"
                        >
                          Please tick to confirm you agree to our
                        </label>
                      </div>

                      <label className="label-privacy-policy-style">
                        <a
                          className="ltc-995 link-0-privacy-policy-margin-left"
                          href="/"
                        >
                          Privacy Policy
                        </a>
                        <br />
                      </label>
                    </div>

                    <div className="text-center container-div-bloc-124-style text-lg-right">
                      <button
                        className="bloc-button btn btn-lg btn-d float-right lawyer-button"
                        type="submit"
                      >
                        Contact Me &nbsp;&nbsp;
                        <span className="fa fa-chevron-right icon-6115" />
                      </button>
                    </div>
                  </form>
                </div>
                {/* end form col */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

