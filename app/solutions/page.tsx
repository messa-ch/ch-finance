"use client";

import { useState } from "react";
import SiteFooter from "@/components/SiteFooter";
import PublicHeader from "@/components/PublicHeader";
import ImportantInfo from "@/components/ImportantInfo";

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
;

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
];

const TAB_CONTENT: Record<TabId, string> = {
    "asset-finance": `
    <div class="p-15-style" style="text-align:justify;">
      <p>
        <strong>
          Unlock the potential for business expansion with our Asset Finance arrangements.
          <br />
          Capitalize on growth opportunities with our financing solutions tailored to your business needs.
          <br />
          Let us help you take your business to the next level!
        </strong>
      </p>

      <p>
        Have you identified untapped growth potential for your business? Do you require additional financing
        to capitalise on these opportunities? Rest assured, we are here to assist you in obtaining the
        necessary funding to seize your business growth prospects.
      </p>

      <p>
        <strong>What is asset finance?</strong>
        <br />
        Asset finance offers businesses the opportunity to obtain and utilise assets, such as machinery,
        vehicles, equipment, plants, technology, and more, without the need for upfront payments. Instead,
        a finance provider typically purchases the assets and leases or rents them to the business over a
        predetermined term, often with fixed monthly payments. This enables companies to access the assets
        necessary for their operations or expansion, while preserving their capital and effectively managing
        their cash flow. Asset finance is a rapidly growing option for business owners, applicable to both
        new and existing assets.
      </p>

      <p><strong>Types of asset finance arrangements</strong></p>
      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>
          <strong>Hire Purchase (HP).</strong> The business pays regular instalments to the finance provider,
          with an option to purchase the asset at the end of the term. Once all payments are made, the
          business becomes the asset owner.
        </li>
        <li>
          <strong>Finance Lease.</strong> The business pays fixed rentals to the finance provider to use the
          asset over the lease term. At the end of the period, the company can typically purchase the asset,
          extend the lease, or return the asset.
        </li>
        <li>
          <strong>Operating Lease.</strong> Similar to a finance lease but typically with a shorter term and
          with the flexibility to return or upgrade the asset at the end of the lease period. Often used for
          assets with a shorter lifespan or that require regular upgrades.
        </li>
      </ul>

      <p>
        <strong>Benefits of asset finance</strong>
        <br />
        Asset finance presents multiple advantages for businesses. It enables them to access assets that may
        have been otherwise unaffordable, while also spreading the cost over time, which can improve cash
        flow. Furthermore, there may be tax advantages, as lease payments are often tax-deductible.
        Additionally, asset finance offers flexibility in managing assets, allowing for upgrades, returns,
        or purchases at the end of the lease term to align with the changing needs of the business.
      </p>

      <p><strong>We have customised solutions to meet your needs</strong></p>
      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>Plant and equipment</li>
        <li>Factory machinery</li>
        <li>Commercial vehicles</li>
      </ul>

      <p>
        <strong>Refinance your current assets</strong>
        <br />
        Numerous businesses are considering refinancing their existing equipment to obtain immediate
        financing. However, obtaining approval from banks can be challenging due to increased caution in
        lending. The good news is that CHFinance can assist you where traditional banks may not. With an
        extensive network of lenders, we can arrange funds tailored to your specific requirements.
      </p>

      <p>
        <strong>Why choose CHFinance?</strong>
        <br />
        Asset finance arrangements can vary depending on the provider and the specific terms and conditions
        agreed in the contract. It is therefore imperative for businesses to thoroughly review and understand
        the terms of the agreement, including interest rates, fees, and end-of-lease options, before
        committing. Seeking professional financial advice is also beneficial to ensure the chosen asset
        finance option aligns with your financial goals and requirements. With our disciplined approach,
        wide network, and skilled representatives, we serve each of our customers with a whole heart.
      </p>

      <p>
        <strong>Disclaimer</strong>
        <br />
        We do not offer advice on Asset Finance. If you show an interest in this area, we can refer you to an
        FCA-regulated master broker who is authorised to provide advice. If you go ahead with one of their
        recommendations and your case completes, we, as a firm, will receive a referral fee commission from
        the provider.
      </p>
    </div>
    <a href="#request-callback" class="btn btn-d btn-sq btn-xl lawyer-button">
      GET STARTED
    </a>
  `,

  "bridging-loans": `
    <div class="p-15-style" style="text-align:justify;">
      <p>
        <strong>Move quickly when opportunity knocks with a tailored Bridging Loan solution.</strong>
      </p>

      <p>
        Bridging finance is a short-term loan designed to “bridge” a gap in your finances – for example,
        between buying a new property and selling an existing one, or when you need to complete a purchase
        quickly and traditional mortgage finance is not yet available.
      </p>

      <p><strong>When can a bridging loan help?</strong></p>
      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>Buying a new home before your current property has sold (chain break).</li>
        <li>Purchasing at auction where completion is required within 28 days.</li>
        <li>Refurbishing or converting a property before refinancing onto a longer-term product.</li>
        <li>Raising capital quickly for business purposes, tax bills, or other short-term cash-flow needs.</li>
      </ul>

      <p><strong>Key features of bridging finance</strong></p>
      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>Typically arranged over 3–24 months.</li>
        <li>Interest can often be rolled up and repaid at the end of the term, helping with monthly cash flow.</li>
        <li>
          Secured against residential, investment, or commercial property – sometimes against more than one
          property (a “multi-asset” security).
        </li>
        <li>
          Flexible criteria compared to many traditional mortgages, with specialist lenders who understand
          complex circumstances.
        </li>
      </ul>

      <p>
        <strong>How CHFinance can help</strong>
        <br />
        Our role is to understand your situation, timescales, and exit strategy (how the loan will be repaid)
        and then work with a panel of specialist lenders and master brokers to find a suitable option for you.
        We will explain the costs, risks, and conditions in clear language so you can make an informed
        decision before committing.
      </p>

      <p>
        <strong>Things to consider</strong>
        <br />
        Bridging loans are secured against your property. If you do not keep up repayments or cannot repay
        the loan at the end of the term, your property may be repossessed. They are a short-term solution and
        are not usually suitable as a long-term form of borrowing.
      </p>

      <p>
        <strong>Important information</strong>
        <br />
        CHFinance is a credit broker, not a lender. We work with a limited number of carefully selected
        lenders and master brokers. If you proceed with a recommendation and your case completes, we will
        receive a commission from the provider. Full details of any fees and commissions will be disclosed to
        you before you proceed.
      </p>
    </div>
    <a href="#request-callback" class="btn btn-d btn-sq btn-xl lawyer-button">
      GET STARTED
    </a>
  `,

  "commercial-business-funding": `
    <div class="p-15-style" style="text-align:justify;">
      <p>
        <strong>
          Alternative business funding options could be the ideal choice for your expanding business.
        </strong>
      </p>

      <p>
        As each business has its unique niche, we at CHFinance understand the need for diverse funding
        options to meet your specific requirements. Whether you need funding to fuel your start-up, expand
        your ongoing business, or increase your warehouse space, we are here to assist you. As trusted
        finance brokers in the UK, we are committed to providing secure and cost-effective funding
        solutions for your business.
      </p>

      <p>
        <strong>What is commercial business funding?</strong>
        <br />
        Commercial business funding in the UK refers to how businesses can secure financing to support
        their operations and growth. There are several sources of commercial business funding in the UK,
        including traditional banks, alternative lenders, venture capitalists, angel investors,
        government-backed schemes, and crowdfunding platforms.
      </p>

      <p>
        It is important to note that commercial business funding options and requirements may vary
        depending on the size, stage, and industry of the business and the risk appetite of the lender or
        investor. It is essential for companies to thoroughly research and evaluate their funding options
        and seek professional advice when needed, to make informed decisions that align with their
        financial goals and requirements.
      </p>

      <p><strong>How does it work?</strong></p>
      <p>
        We eliminate funding barriers with a simple application process that is designed to assist you.
        Our advanced technology validates your business profile and connects you with our extensive
        network of lenders. Our results are tailored to different business niches, ensuring a customised
        approach. Our process is straightforward, supported by our strong relationships and expert
        knowledge. While the finance industry can be complex, we streamline it with our customer-focused
        approach.
      </p>

      <p>
        <strong>
          Our business loans are designed to be cost-effective and can be used for a wide range of business purposes:
        </strong>
      </p>
      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>Term loans</li>
        <li>Overdrafts</li>
        <li>Import loans</li>
        <li>Export loans</li>
        <li>Standby loans</li>
        <li>Standby letter of credit (SBLC)</li>
        <li>Refinance and consolidation loans</li>
      </ul>

      <p><strong>Our simple process</strong></p>
      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>Provide us with your loan requirements and basic information for assistance.</li>
        <li>
          Our tracker will compare lenders&apos; criteria and connect you with the finance company that best
          fits your needs.
        </li>
        <li>
          We provide support throughout the entire process, from submitting your application to
          disbursing the funds.
        </li>
      </ul>

      <p>
        <strong>Do you need finance?</strong>
        <br />
        Please contact our financial expert for prompt arrangement.
      </p>

      <p>
        <strong>Disclaimer</strong>
        <br />
        We do not offer advice on Commercial Business Funding. If you show an interest in this area, we can
        refer you to an FCA-regulated broker who is authorised to provide advice. If you go ahead with one
        of their recommendations and your case completes, we, as a firm, will receive a referral fee
        commission from the provider.
      </p>
    </div>
    <a href="#request-callback" class="btn btn-d btn-sq btn-xl lawyer-button">
      GET STARTED
    </a>
  `,


    "commercial-debt-restructuring": `
    <div class="p-15-style" style="text-align:justify;">
      <p>
        Debt restructuring in the UK typically involves a debtor (an individual or a business) negotiating
        with creditors to modify the terms of an existing debt agreement, with the aim of making it more
        manageable. This can include reducing interest rates, extending the repayment period, lowering
        monthly payments, or agreeing a lump-sum settlement. The objective is to establish a repayment plan
        that the debtor can realistically afford. Once an agreement is reached, it must be documented in
        writing, and the debtor is responsible for keeping to the new terms. Debt restructuring can be
        complex and may require professional assistance.
      </p>

      <p>
        <strong>What is commercial debt restructuring?</strong>
        <br />
        Commercial debt restructuring is a process that helps businesses manage their debt obligations when
        they are facing financial difficulties. It is typically undertaken to help businesses avoid
        bankruptcy or insolvency and to improve their financial position by renegotiating the terms of
        their existing debt.
      </p>

      <p>
        <strong>The benefits of commercial debt restructuring in the UK</strong>
        <br />
        The benefits of commercial debt restructuring in the UK are numerous. The primary benefit is that it
        allows businesses to renegotiate their debt obligations so they better match the current financial
        situation of the business. This can involve extending payment terms, reducing interest rates or
        principal, or otherwise modifying the terms of the debt to make it more manageable.
      </p>

      <p>
        By restructuring their debt obligations, businesses can improve cash flow, reduce their overall debt
        burden, and regain financial stability. This can help them avoid bankruptcy or insolvency and
        continue operating, preserving jobs and economic activity. Debt restructuring can also be a less
        expensive and less time-consuming process than going through bankruptcy or insolvency proceedings,
        as it can often be negotiated directly with creditors.
      </p>

      <p>
        <strong>The legal framework for debt restructuring in the UK</strong>
        <br />
        Debt restructuring in the UK is governed by a variety of legal frameworks, depending on the type of
        debt and the nature of the restructuring. Some of the key areas include:
      </p>

      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>
          <strong>Company law.</strong> Companies facing financial difficulties may be subject to certain
          legal obligations, such as the duty to act in the best interests of the company&apos;s creditors
          if the company is insolvent or at risk of insolvency.
        </li>
        <li>
          <strong>Contract law.</strong> The terms of existing debt agreements between the business and its
          creditors are typically governed by contract law. Any changes to those agreements must usually be
          negotiated and agreed by all relevant parties.
        </li>
        <li>
          <strong>Insolvency law.</strong> If a business is unable to meet its debt obligations and is at
          risk of insolvency, it may be subject to insolvency law, including the Companies Act 2006 and
          other statutes and regulations that set out the legal framework for insolvency proceedings.
        </li>
      </ul>

      <p>
        <strong>Examples of commercial debt restructuring in the UK</strong>
        <br />
        There are many ways commercial debt can be restructured. Common examples include:
      </p>

      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>
          <strong>Loan modifications.</strong> Negotiating with lenders to modify the terms of loans, such
          as extending the repayment period or reducing the interest rate.
        </li>
        <li>
          <strong>Debt-for-equity swaps.</strong> Exchanging some of the company&apos;s debt obligations
          for equity in the business, helping to reduce the debt burden and improve the company&apos;s
          financial position.
        </li>
        <li>
          <strong>Debt rescheduling.</strong> Agreeing with creditors to reschedule debt payments, for
          example by delaying payments or spreading them over a longer period.
        </li>
        <li>
          <strong>Asset sales.</strong> Selling assets to raise funds to pay down debt obligations, which
          can help reduce the overall debt burden and improve the company&apos;s financial position.
        </li>
      </ul>

      <p>
        Overall, commercial debt restructuring in the UK is a complex and highly regulated process that can
        provide significant benefits to businesses facing financial difficulties. It is important for
        companies to approach it carefully and with the assistance of experienced professionals, to ensure
        they comply with all relevant legal frameworks and protect the interests of all parties involved.
      </p>

      <p>
        <strong>Disclaimer</strong>
        <br />
        We do not offer advice on Commercial Debt Restructuring. If you show an interest in this area, we can
        refer you to an FCA-regulated broker who is authorised to provide advice. If you go ahead with one of
        their recommendations and your case completes, we, as a firm, will receive a referral fee commission
        from the provider.
      </p>
    </div>
    <a href="#request-callback" class="btn btn-d btn-sq btn-xl lawyer-button">
      GET STARTED
    </a>
  `,

    "commercial-mortgages": `
    <div class="p-15-style" style="text-align:justify;">
      <p>
        <strong>Semi-residential</strong>
        <br />
        Our process for obtaining finance against semi-residential property is simple and quick, which is
        often difficult to achieve with traditional banks and financial institutions.
      </p>

      <p>
        <strong>Commercial</strong>
        <br />
        We are a team of experienced financial experts who provide bespoke finance solutions to owners,
        investors, and developers. Working with a commercial mortgage broker or seeking professional advice
        is recommended to determine the most suitable financing option for your specific needs.
      </p>

      <p>
        <strong>Bespoke financial advice to suit your business needs</strong>
        <br />
        In the UK, commercial mortgages are loans to finance commercial property acquisition, development,
        or improvement for business or investment purposes. Commercial properties include office buildings,
        retail spaces, industrial properties, hotels, and other income-generating real estate assets.
        Banks, building societies, specialist commercial mortgage lenders, and other financial institutions
        typically provide commercial mortgages in the UK.
      </p>

      <p>
        The eligibility criteria for obtaining a commercial mortgage may vary depending on the lender, but
        usually involve factors such as the borrower&apos;s creditworthiness, business financials, property
        appraisal, and the purpose of the loan. Commercial mortgages often have different terms and
        conditions compared with residential mortgages.
      </p>

      <p><strong>Key features of commercial mortgages</strong></p>
      <p>Here are some of the key features of commercial mortgages in the UK:</p>
      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>
          <strong>Loan amounts.</strong> UK commercial mortgages can range from tens of thousands to
          millions of pounds, depending on the property value and the borrower&apos;s financial strength.
        </li>
        <li>
          <strong>Loan-to-value (LTV) ratio.</strong> Lenders typically offer a lower LTV for commercial
          mortgages than for residential ones. LTV is the ratio of the loan amount to the appraised value
          of the property and often ranges from 50% to 75% for commercial mortgages.
        </li>
        <li>
          <strong>Interest rates.</strong> Interest rates on commercial mortgages are usually higher than
          on residential mortgages, reflecting the increased risk associated with commercial properties.
          Rates can be fixed or variable and may be based on benchmarks such as the lender&apos;s base
          rate, LIBOR, or other reference rates plus a margin.
        </li>
        <li>
          <strong>Repayment terms.</strong> Repayment periods are usually shorter than residential
          mortgages, typically 5 to 25 years. Some commercial mortgages may also include balloon payments,
          where a lump sum is due at the end of the term.
        </li>
        <li>
          <strong>Fees and costs.</strong> Commercial mortgages may include arrangement fees, valuation
          fees, legal fees, and other charges.
        </li>
        <li>
          <strong>Eligible borrowers.</strong> Commercial mortgages are typically available to businesses,
          corporations, partnerships, and individuals with a business purpose for the property. Lenders
          may consider creditworthiness, business financials, and experience in commercial real estate.
        </li>
        <li>
          <strong>Property types.</strong> They can be used for a wide range of commercial properties
          including offices, retail, industrial, and hospitality, for purchasing, refinancing, renovating,
          or developing commercial properties.
        </li>
      </ul>

      <p>
        It is important to note that commercial mortgages can be complex, and borrowers are advised to seek
        professional advice from qualified financial or legal experts before entering into any commercial
        mortgage transaction.
      </p>

      <p><strong>Types of finance for commercial mortgages</strong></p>
      <p>Several financing options are available for commercial mortgages in the UK, including:</p>
      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>
          <strong>Fixed-rate commercial mortgage.</strong> The interest rate remains constant for the loan
          term, providing predictable monthly payments and making budgeting easier.
        </li>
        <li>
          <strong>Variable-rate commercial mortgage.</strong> The interest rate can change during the term
          based on market conditions. Payments may fluctuate and borrowers may benefit from lower rates
          during periods of low interest.
        </li>
        <li>
          <strong>Interest-only commercial mortgage.</strong> Borrowers pay only the interest for a set
          period, after which the loan converts to a principal-and-interest structure. This can reduce
          initial monthly payments but usually means higher payments later.
        </li>
        <li>
          <strong>Bridging finance.</strong> A short-term funding option often used in commercial real
          estate transactions to bridge the gap between purchasing a property and arranging longer-term
          finance such as a commercial mortgage.
        </li>
        <li>
          <strong>Development finance.</strong> Specifically designed to fund commercial property
          development projects, such as construction or redevelopment, and may be structured as a short-
          or longer-term facility.
        </li>
        <li>
          <strong>Commercial remortgage.</strong> Refinancing an existing commercial mortgage with a new
          facility, usually with different terms or a different lender, for example to obtain a better
          interest rate, change the term, or release equity.
        </li>
      </ul>

      <p><strong>General steps to obtain a commercial mortgage in the UK</strong></p>
      <p>Below is a high-level overview of the typical process:</p>
      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>
          <strong>Assess your financing needs.</strong> Identify the type of commercial property you want
          to finance, the loan amount required, and review your financial capabilities and creditworthiness.
        </li>
        <li>
          <strong>Research lenders and loan options.</strong> Compare the terms, interest rates, fees, and
          eligibility criteria of banks, building societies, and specialist commercial lenders.
        </li>
        <li>
          <strong>Prepare financial documents.</strong> Lenders typically require detailed financial
          information, including business plans, financial statements, tax returns, bank statements, and
          other supporting documents.
        </li>
        <li>
          <strong>Submit a loan application.</strong> Complete the lender&apos;s application and provide all
          requested documents. The lender may ask for additional information during their assessment.
        </li>
        <li>
          <strong>Property valuation.</strong> The lender may arrange a commercial property valuation to
          assess its market value and determine how much they are willing to lend.
        </li>
        <li>
          <strong>Loan approval and offer.</strong> If approved, the lender issues a formal offer outlining
          the terms and conditions of the commercial mortgage. Review the offer carefully.
        </li>
        <li>
          <strong>Legal and due diligence.</strong> This may include property surveys, title searches, and
          other legal checks to confirm the property is free of liens or legal issues.
        </li>
        <li>
          <strong>Loan completion.</strong> After legal and due diligence are complete, the loan funds are
          released either to you or directly to the seller or developer, as applicable.
        </li>
        <li>
          <strong>Repayment.</strong> You make regular repayments of capital and interest over the agreed
          term, in line with the mortgage contract.
        </li>
      </ul>

      <p>
        It is important to note that the commercial mortgage process in the UK may vary depending on the
        lender, the specific property, and your financial circumstances. Working with a commercial mortgage
        broker or seeking professional advice can help you navigate the process more effectively.
      </p>

      <p>
        <strong>Disclaimer</strong>
        <br />
        We do not offer advice on Commercial Mortgages. If you show an interest in one of this area, we can refer you to an FCA-regulated master broker who is authorised to provide advice in that area. If you go ahead with one of their recommendations, we, as a firm, will receive a referral fee commission from the provider if the case completes.  
      </p>
    </div>
    <a href="#request-callback" class="btn btn-d btn-sq btn-xl lawyer-button">
      GET STARTED
    </a>
  `,

    "expat-finance": `
    <div class="p-15-style" style="text-align:justify;">
      <p>
        <strong>
          Assisting expats to help manage financial aspects and source mortgage finance on investment transactions
        </strong>
      </p>

      <p>
        Are you living overseas?<br />
        Are you looking for help managing various financial aspects?<br />
        Are you looking for an expat mortgage on a UK property?
      </p>

      <p>
        Being an expatriate can pose challenges with lenders, especially if you earn income in a foreign
        currency. Verifying overseas income can be difficult and can raise concerns about money-laundering
        risks. As a result, financial repayments for expats can be more expensive and qualifying for loans
        can be more complex. Many expats turn to mortgage brokers for assistance, as the process can be
        complicated and only a limited number of lenders may accept their applications.
      </p>

      <p>
        <strong>What is Expat Finance?</strong>
        <br />
        Expat finance in the UK refers to the financial considerations and arrangements that expatriates
        need to be aware of and manage while living and working in the United Kingdom. As an expat, you may
        face unique financial challenges and opportunities, including tax obligations, investment options,
        banking, insurance, and retirement planning.
      </p>

      <p><strong>Key aspects of expat finance in the UK</strong></p>
      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>
          <strong>Taxation.</strong> You may be subject to UK tax laws, including income tax, capital gains
          tax, and inheritance tax, depending on your residency status and the duration of your stay. It is
          essential to understand the UK tax system, your obligations as an expat, and any tax treaties
          between the UK and your home country to avoid double taxation.
        </li>
        <li>
          <strong>Banking.</strong> You may need to open a UK bank account to manage day-to-day finances,
          receive your salary, and pay bills. Many UK banks offer specialised services for expats, such as
          multi-currency accounts and international money transfers. It is important to compare banks,
          understand their fees, and choose a bank that suits your needs.
        </li>
        <li>
          <strong>Investment and retirement planning.</strong> Expat finance often involves investment and
          retirement planning. You may be able to invest in UK-based assets such as stocks, bonds, real
          estate and retirement savings accounts (for example ISAs and pensions). It is essential to
          consider your long-term goals, risk tolerance and seek professional advice to make informed
          decisions.
        </li>
        <li>
          <strong>Insurance.</strong> You may need health, property and other insurance to protect yourself
          and your assets while living in the UK. Understanding the UK insurance market, comparing providers,
          and choosing appropriate cover based on your needs and circumstances is important.
        </li>
        <li>
          <strong>Currency exchange.</strong> Frequent currency exchange may be needed for various financial
          transactions. Understanding the foreign exchange market and managing currency-exchange risk can be
          crucial. You might use banks or specialised currency-exchange providers, but comparing rates and
          fees is vital to get the best deal.
        </li>
        <li>
          <strong>Estate planning.</strong> Estate planning involves organising and managing your assets,
          including property, investments and other belongings, and planning distribution after your death.
          This can be complex and it is advisable to seek professional advice so that your assets are
          managed according to your wishes and in compliance with UK laws.
        </li>
      </ul>

      <p>
        <strong>The importance of professional advice for expat finance</strong>
        <br />
        Expat finance involves managing many different financial aspects, including taxation, banking,
        investment and retirement planning, insurance, currency exchange and estate planning. It is crucial
        to understand the UK financial system and to seek professional advice when needed so you can make
        informed decisions based on your circumstances and financial goals.
      </p>

      <p><strong>A brief discussion over the call with our advisors will help in:</strong></p>
      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>Informing you about the acceptance status of your application by your lender.</li>
        <li>Discussing interest rates.</li>
        <li>Discussing fees and charges.</li>
        <li>Clarifying the timeframe for application closure.</li>
        <li>Identifying suitable protection solutions.</li>
      </ul>

      <p>
        <strong>Call us to discuss more about expat finance</strong>
        <br />
        All of the points above can differ for each application, depending on your circumstances and
        requirements. A quick conversation with our advisors can help you align your finances better.
      </p>

      <p>
        <strong>Disclaimer</strong>
        <br />
        We do not offer advice on Expat Finance. If you show an interest in this area, we can refer you to an
        FCA-regulated broker who is authorised to provide advice. If you go ahead with one of their
        recommendations and your case completes, we, as a firm, will receive a referral fee commission from
        the provider.
      </p>
    </div>
    <a href="#request-callback" class="btn btn-d btn-sq btn-xl lawyer-button">
      GET STARTED
    </a>
  `,

    "invoice-factoring": `
    <div class="p-15-style" style="text-align:justify;">
      <p>
        <strong>Find a solution for your unpaid invoices and avoid bad debt</strong>
      </p>

      <p>
        Our customised invoice factoring plans are designed to ease financial pressure on your business by
        releasing funds tied up in unpaid invoices. Instead of spending valuable time chasing customers for
        payment, you can focus on running and growing your business.
      </p>

      <p>
        Whatever situation your business is facing – and whether it is large or small – invoice factoring can
        help reduce the gap between issuing an invoice and receiving payment. Flexible funding against your
        invoices means you don&apos;t have to worry about how long your customers take to pay you; we can
        help arrange interim funding to prevent cash-flow issues.
      </p>

      <p>
        <strong>What is invoice/finance factoring?</strong>
        <br />
        Invoice/finance factoring, also known as invoice financing or receivables financing, is a financial
        arrangement where a business sells its unpaid invoices to a third-party company (a factor) at a
        discount in exchange for immediate cash flow.
      </p>

      <p><strong>How invoice/finance factoring generally works in the UK</strong></p>
      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>
          <strong>Business generates invoices.</strong>
          A business provides goods or services to its customers and issues invoices with payment terms,
          typically ranging from 30 to 90 days.
        </li>
        <li>
          <strong>Business sells invoices.</strong>
          Instead of waiting for customers to pay, the business sells the invoices to a factor. The factor
          usually pays a percentage of the total invoice value upfront – the <em>advance rate</em> – which
          can often be up to around 90% of the invoice value.
        </li>
        <li>
          <strong>Factor collects payments.</strong>
          The factor takes over responsibility for collecting payments from customers. Customers then pay the
          invoices directly to the factor according to the original payment terms.
        </li>
        <li>
          <strong>Factor provides remaining funds.</strong>
          Once the invoices have been paid in full, the factor deducts its fees and charges (such as a
          discount or service fee) and pays the remaining funds – the <em>rebate</em> – back to the business.
        </li>
      </ul>

      <p>
        <strong>Do you need assistance with credit control and reducing the chances of bad debt?</strong>
        <br />
        Factoring helps thousands of businesses in the UK turn unpaid invoices into cash via the banking
        system. It is a well-established method of providing finance that can directly improve your turnover
        and cash flow.
      </p>

      <p><strong>Key benefits of invoice/finance factoring</strong></p>
      <p>
        Invoice/finance factoring can provide a number of benefits, including:
      </p>
      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>Immediate access to funds and improved cash flow.</li>
        <li>Support with credit control and collections.</li>
        <li>Faster access to working capital compared with waiting for customers to pay.</li>
        <li>Reduced administrative burden of managing accounts receivable.</li>
        <li>Potential protection against bad debts (depending on the facility structure).</li>
        <li>Confidential arrangements, in many cases.</li>
      </ul>

      <p>
        Invoice factoring is commonly used by small and medium-sized enterprises (SMEs) to bridge the gap
        between invoice issuance and payment receipt, helping them manage their cash flow more effectively.
      </p>

      <p>
        <strong>Is invoice factoring right for your business?</strong>
        <br />
        It is important to understand that invoice/finance factoring is different from taking out a loan: you
        are selling invoices rather than borrowing against them. Factors typically assess the creditworthiness
        of your customers rather than your business alone, which can make it a viable option for firms with
        imperfect credit or a shorter trading history.
      </p>

      <p>
        As with any financial arrangement, you should carefully consider the costs, terms, and conditions of
        invoice/finance factoring and seek professional advice to determine whether it aligns with your needs
        and financial situation.
      </p>

      <p>
        <strong>Disclaimer</strong>
        <br />
        We do not offer advice on Invoice/Finance Factoring. If you show an interest in this area, we can
        refer you to an FCA-regulated broker who is authorised to provide advice. If you go ahead with one of
        their recommendations and your case completes, we, as a firm, will receive a referral fee commission
        from the provider.
      </p>
    </div>
    <a href="#request-callback" class="btn btn-d btn-sq btn-xl lawyer-button">
      GET STARTED
    </a>
  `,

    "money-management": `
    <div class="p-15-style" style="text-align:justify;">
      <p>
        <strong>When money realises that it is in good hands, it wants to stay and multiply in those hands.</strong>
      </p>

      <p>
        Financial freedom is about taking ownership of your finances. Look at the bigger picture of your
        money and manage it wisely with CHFinance.
      </p>

      <p>
        Taking a holistic approach to money management, our financial experts will help you work out your
        goals and what you want to achieve – not just today, but in the future.
      </p>

      <p>
        We do not just focus on your money and investments; our focus is on you and your financial goals.
        Our experts work on taxes, budgeting, saving, investing, managing debts, and preparing emergency
        funds and pensions to create a customised plan for your finances.
      </p>

      <p>
        Working with CHFinance can help you stay in control of your finances. We keep every step
        straightforward and confidential, and provide a clear roadmap for your financial future – where you
        are now, where you want to be, and the plan to get there.
      </p>

      <p>
        <strong>What is money management?</strong><br />
        Money management is the process of managing your financial resources – income, expenses, savings,
        investments and debt – so that you can reach your financial goals and lead a healthy financial life.
        It involves making informed decisions about how you earn, spend, save, invest and borrow to ensure
        your resources are used wisely and in line with your objectives.
      </p>

      <p><strong>Key principles of money management</strong></p>
      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>
          <strong>Budgeting.</strong>
          Creating a budget is the foundation of money management. It means tracking income and expenses and
          planning how to allocate your money to cover essential needs, savings, investments and discretionary
          spending. Budgeting helps you understand where your money is going and make intentional choices.
        </li>
        <li>
          <strong>Saving and investing.</strong>
          Setting aside a portion of your income for future needs or emergencies, and investing in assets such
          as stocks, bonds or property with the expectation of a return. Saving and investing are critical for
          building wealth over time and achieving long-term goals like retirement or buying a home.
        </li>
        <li>
          <strong>Managing debt.</strong>
          Managing any debts you may have – such as credit cards, personal loans, student loans or mortgages –
          includes making payments on time, understanding interest rates and terms, and prioritising higher-rate
          debt to avoid unnecessary interest costs.
        </li>
        <li>
          <strong>Spending wisely.</strong>
          Making informed spending decisions, distinguishing needs from wants, prioritising essential expenses,
          avoiding impulse purchases, and comparing prices and options before buying. Wise spending stretches
          your money further and helps you avoid waste.
        </li>
        <li>
          <strong>Building an emergency fund.</strong>
          An emergency fund is a buffer for unexpected costs such as medical bills, car repairs or job loss. It
          helps you avoid going into debt when financial surprises arise.
        </li>
        <li>
          <strong>Continuous learning and improvement.</strong>
          Money management is an ongoing process. Staying informed about personal finance, reviewing your budget
          regularly, and adjusting your goals as life changes are all important for long-term success.
        </li>
      </ul>

      <p>
        By following these principles, you can build strong money habits, work towards your goals, build
        wealth and lead a more secure financial life. Every person’s situation is unique, so your money
        management plan should be tailored to your own circumstances and priorities.
      </p>

      <p><strong>Our services</strong></p>
      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>Support with budgeting, saving, wise spending and emergency-fund planning.</li>
        <li>Cash-flow modelling to understand your future personal financial goals.</li>
        <li>Developing a plan to safeguard your financial well-being.</li>
        <li>Creating a pension-planning strategy for your future.</li>
        <li>Friendly, approachable guidance on your financial plans.</li>
        <li>Identifying potential protection solutions.</li>
      </ul>

      <p>
        <strong>Is money management right for me?</strong><br />
        Money management may not suit those seeking only minimal protection or who do not wish to look at the
        broader picture. However, if you have ambitious goals and want to take charge of your finances for a
        brighter future, structured money management can be a powerful way forward.
      </p>

      <p>
        <strong>CHFinance offers money-management support and expert guidance.</strong><br />
        If you would like to explore your options in more depth, you are welcome to book a complimentary
        conversation with our team of financial experts.
      </p>

      <p>
        <strong>Disclaimer</strong><br />
        We do not offer advice on Money Management. If you show an interest in this area, we can refer you to
        an FCA-regulated master broker who is authorised to provide advice. If you go ahead with one of their
        recommendations and your case completes, we, as a firm, will receive a referral fee commission from the
        provider.
      </p>
    </div>
    <a href="#request-callback" class="btn btn-d btn-sq btn-xl lawyer-button">
      GET STARTED
    </a>
  `,

  "private-equity": `
    <div class="p-15-style" style="text-align:justify;">
      <p>
        <strong>Creative business funding solutions to help gain financial flexibility</strong>
      </p>

      <p>
        Private equity finance is tailored for established business owners and management teams who want to
        undertake a management buyout, implement a buy-and-build strategy, or unlock growth through
        acquisitions. Our specialised process is designed to support ambitious teams across a range of sectors.
      </p>

      <p>
        At CHFinance, we do more than provide investment – we build partnerships. Whether it is identifying
        untapped value in your business or helping you acquire an equity stake in your current company, our
        experienced team offers comprehensive support across a wide range of commercial and professional
        portfolios.
      </p>

      <p>
        <strong>What is private/venture equity finance?</strong><br />
        Private/venture equity finance refers to investment where capital is provided to privately held
        companies in exchange for ownership stakes or equity.
      </p>

      <p>
        <strong>Private equity</strong> typically focuses on mature companies with a proven track record and
        established operations. Private equity firms:
      </p>
      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>Invest to improve performance and generate returns for their investors.</li>
        <li>Usually raise funds from institutional investors such as pension funds, endowments and wealthy individuals.</li>
        <li>Acquire significant ownership stakes and often gain control or strong influence over strategy.</li>
        <li>Work over a longer investment horizon, often around 3–7 years or more, aiming for returns from
            operational improvements, cost reductions and strategic initiatives such as mergers and acquisitions.</li>
      </ul>

      <p>
        <strong>Venture capital (VC)</strong> usually focuses on early-stage companies that are developing and
        commercialising new technologies or business models. VC firms:
      </p>
      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>Provide both capital and strategic guidance, including mentorship and access to specialist networks.</li>
        <li>Invest in high-growth, high-risk sectors such as technology, healthcare or renewable energy.</li>
        <li>Help businesses scale operations and achieve market leadership.</li>
        <li>Typically work over a shorter investment horizon than traditional private equity, often around 3–7 years.</li>
      </ul>

      <p>
        <strong>How will we help your business?</strong>
      </p>
      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>
          <strong>Long-term partner.</strong> We support management teams to achieve profitable results without
          disrupting day-to-day operations. It is still your business – we work alongside you.
        </li>
        <li>
          <strong>Comprehensive network.</strong> Access a wide database of investors through our experienced
          financial and marketing experts with deep sector knowledge.
        </li>
        <li>
          <strong>Best practices.</strong> We align with management and add value using the insight gained from
          multiple investments across many businesses.
        </li>
        <li>
          <strong>Strategic input.</strong> Our team can support strategic decisions around expansion, acquisitions
          and value-creation plans.
        </li>
      </ul>

      <p>
        <strong>How do investors gain profit from private equity and venture capital?</strong><br />
        In both private equity and venture capital, returns usually come from the growth in value of the equity
        stake. This can be realised through:
      </p>
      <ul style="margin-left:1.5rem; list-style:disc;">
        <li>A public offering (IPO) of the company’s shares.</li>
        <li>A trade sale of the company to another buyer.</li>
        <li>A recapitalisation or restructuring of the company.</li>
      </ul>

      <p>
        <strong>Are you in need of financing for your business?</strong><br />
        Private equity and venture capital investments are subject to regulation and disclosure requirements in
        the UK. Investors must carefully assess the risks and potential rewards before committing capital, and it
        is advisable to seek professional financial and legal advice when considering these options.
      </p>

      <p>
        With our disciplined approach, extensive network and skilled team, we are committed to supporting our
        customers wholeheartedly.
      </p>

      <p>
        <strong>Disclaimer</strong><br />
        We do not offer advice on Private/Venture Equity Finance. If you show an interest in this area, we can
        refer you to an FCA-regulated master broker who is authorised to provide advice. If you go ahead with one
        of their recommendations and your case completes, we, as a firm, will receive a referral fee commission
        from the provider.
      </p>
    </div>

    <a href="#request-callback" class="btn btn-d btn-sq btn-xl lawyer-button">
      GET STARTED
    </a>
  `,
"property-finance": `
  <div class="p-15-style" style="text-align: justify;">
    <p>
      <strong>Property finance in the UK</strong> refers to how individuals and businesses obtain funding
      to purchase, develop, or invest in real estate. It covers a wide range of financial products and
      strategies used to acquire, improve, and manage properties across the UK.
    </p>

    <p>
      <strong>Semi Residential</strong><br>
      Our process for obtaining finance against semi-residential property is simple and quick – often far
      more flexible than traditional banks and financial institutions.
    </p>

    <p>
      <strong>Commercial</strong><br>
      We are a team of experienced financial experts providing bespoke finance solutions to owners,
      investors, and developers for a variety of commercial property transactions.
    </p>

    <p>
      <strong>Land</strong><br>
      We aim to provide quick and customised funding solutions for land purchases and development-led
      loan needs.
    </p>

    <p>
      <strong>Common types of property finance in the UK</strong>
    </p>
    <ul>
      <li>
        <strong>Mortgages</strong><br>
        A mortgage is a loan used to purchase a property. Banks, building societies, and other
        financial institutions typically offer mortgages in the UK. Borrowers make regular monthly
        repayments over an agreed term (for example, 25 years) to repay the loan plus interest.
        The mortgage is secured against the property, so if repayments are not maintained the lender
        may have the right to repossess and sell the property to recover the debt.
      </li>
      <li>
        <strong>Buy-to-let mortgages</strong><br>
        Designed for investors who purchase properties to rent out. These mortgages usually require
        a larger deposit and may have higher interest rates than residential mortgages. Rental income
        is used to help repay the mortgage, and investors may also benefit from any growth in the
        property’s value over time.
      </li>
      <li>
        <strong>Bridging loans</strong><br>
        Short-term loans used to bridge the gap between purchasing a new property and selling an
        existing one, or to fund renovations and development projects. Bridging loans are typically
        repaid within a few months to a few years and are often used when funds are needed quickly
        or when there is a time-sensitive opportunity.
      </li>
      <li>
        <strong>Development finance</strong><br>
        Used to finance property development projects such as building new homes, renovating existing
        properties, or converting commercial buildings into residential units. These facilities usually
        involve more complex structures and require detailed plans, cost projections, and exit strategies.
        Interest rates are generally higher than traditional mortgages due to the increased risk.
      </li>
      <li>
        <strong>Commercial mortgages</strong><br>
        Used to purchase or refinance commercial properties, including offices, retail units, and
        industrial buildings. Eligibility criteria, terms, and interest rates differ from residential
        mortgages, as they are based on the income-generating potential of the property rather than
        the borrower’s personal income alone.
      </li>
      <li>
        <strong>Equity release</strong><br>
        A way for older property owners to access some of the value tied up in their property without
        selling it. Borrowing is secured against the equity (the difference between the property value
        and any outstanding mortgage), often via a lifetime mortgage or home reversion plan. The loan
        is usually repaid when the property is sold or the homeowner passes away.
      </li>
    </ul>

    <p>
      <strong>Our tailored financial advice is designed to meet the unique needs of your business</strong><br>
      Whether you are investing in, developing, or trading property in the UK market, our team of
      financial experts can help you identify the most appropriate finance options for your
      requirements. Whether you are a new or existing customer, our dedicated finance managers can
      provide guidance across all sectors.
    </p>

    <p>
      Our business model is simple and effective. We work with a wide range of high-street and
      private banks, specialist lenders, wealth managers, and private investor funds. Each partner
      has its own criteria, and together we can source tailored solutions that align with your
      specific needs.
    </p>

    <p>
      <strong>Types of property finance we can help arrange include:</strong>
    </p>
    <ul>
      <li>Commercial finance</li>
      <li>Bridging loans</li>
      <li>Development finance</li>
      <li>Refurb finance</li>
      <li>HMO finance</li>
      <li>Buy-to-let finance</li>
      <li>Auction purchase finance</li>
      <li>Refinance solutions</li>
      <li>Mezzanine finance</li>
      <li>Portfolio finance</li>
    </ul>

    <p>
      These are just a few examples of the many property finance options available in the UK. The
      availability and terms of funding can vary depending on factors such as your creditworthiness,
      the type of property, the loan amount, and each lender’s criteria. It is essential to review
      all options carefully, seek professional guidance, and fully understand the risks and obligations
      before making any commitments.
    </p>

    <p>
      <strong>Do you need finance?</strong><br>
      Speak to our financial expert to discuss your requirements so we can help arrange funding as
      efficiently as possible.
    </p>

    <p>
      <strong>Disclaimer</strong><br>
      We do not offer advice on Property Finance. If you show an interest in this area, we can refer you
      to an FCA-regulated master broker who is authorised to provide advice. If you proceed with one of
      their recommendations and your case completes, we, as a firm, will receive a referral fee
      commission from the provider.
    </p>
  </div>
`,
"secured-loan": `
  <p class="p-15-style mono-justify">
    A secured loan is a type of borrowing that uses an asset – usually your property – as collateral for the lender.
    If you default on the loan, the lender has the right to repossess and sell the collateral to recover the outstanding
    balance. Because the loan is secured, lenders often offer higher borrowing limits and lower interest rates than
    with unsecured loans.
  </p>

  <p class="p-15-style mono-justify">
    <strong>What are secured loans used for?</strong><br />
    While personal secured loans can be used for many purposes, lenders will usually ask what you intend to use the
    funds for. Common reasons include major home improvements, consolidating debts, buying a new car, funding a 
    significant life event, or supporting a business project.
  </p>

  <p class="p-15-style mono-justify">
    <strong>Secured loans in the UK</strong><br />
    In the UK, secured loans are often called "mortgages" or "second charges". How much you can borrow depends on
    several factors, including the value of the property used as security, your creditworthiness, and lender criteria.
    Because the lender has the added comfort of collateral, interest rates are usually lower than for unsecured loans.
    However, you are putting your property at risk if you cannot maintain repayments.
  </p>

  <p class="p-15-style mono-justify">
    <strong>How do secured loans work?</strong><br />
    Every type of borrowing has pros and cons. With a secured loan you must be confident you can afford the repayments,
    as your home may be at risk if you fall behind. In return, lenders may allow you to borrow more over a longer period
    than with an unsecured loan. At CHFinance we compare around 600 loan products to help you find an option that suits
    your needs and provide a free, no-obligation quote.
  </p>

  <p class="p-15-style mono-justify">
    <strong>Advantages of choosing secured borrowing</strong>
  </p>
  <ul class="p-15-style mono-justify list-disc pl-6 space-y-1">
    <li>Access to larger loan amounts than most unsecured loans.</li>
    <li>Typically lower interest rates than unsecured borrowing.</li>
    <li>Longer repayment terms, helping to reduce monthly payments.</li>
    <li>Can be helpful for borrowers with weaker credit, as the loan is backed by property.</li>
    <li>In some cases you may be able to keep an existing low-rate mortgage unchanged.</li>
  </ul>

  <p class="p-15-style mono-justify">
    <strong>Disadvantages of getting a secured loan</strong>
  </p>
  <ul class="p-15-style mono-justify list-disc pl-6 space-y-1">
    <li>If you cannot keep up repayments, the lender can repossess and sell the property used as security.</li>
    <li>Borrowing a larger amount over a longer term can mean paying more interest overall.</li>
    <li>There may be fees for arranging, valuing, or administering the loan.</li>
  </ul>

  <p class="p-15-style mono-justify">
    <strong>Secured vs unsecured loans</strong><br />
    Secured loans are available only to homeowners willing to offer property as collateral. They often come with better
    rates and higher limits. Unsecured loans do not require collateral and are generally more accessible for people with
    stronger credit profiles, but usually at higher interest rates and lower borrowing limits.
  </p>

  <p class="p-15-style mono-justify">
    <strong>Secured loan vs remortgage or equity release</strong><br />
    Some homeowners may consider remortgaging or equity release instead of a secured loan. Remortgaging can sometimes
    achieve a lower overall rate, but early repayment charges on your existing mortgage or a very competitive current
    rate may make a separate secured loan more appropriate. A secured loan can be preferable when:
  </p>
  <ul class="p-15-style mono-justify list-disc pl-6 space-y-1">
    <li>Your current mortgage rate is exceptionally low and cannot be matched.</li>
    <li>You need funds urgently and do not have time for a full remortgage process.</li>
    <li>Your mortgage has a large early repayment charge (ERC).</li>
    <li>You are unable to refinance due to specific circumstances.</li>
    <li>Your credit score makes it difficult to secure a new mainstream mortgage.</li>
  </ul>

  <p class="p-15-style mono-justify">
    <strong>Is a secured loan suitable for me?</strong><br />
    Before applying, lenders will look at several key factors to assess your eligibility:
  </p>
  <ul class="p-15-style mono-justify list-disc pl-6 space-y-1">
    <li><strong>Income and expenses</strong> – your ability to afford monthly repayments from your household budget.</li>
    <li><strong>Loan-to-value (LTV) ratio</strong> – how much equity you have in your property versus the total borrowing.</li>
    <li><strong>Credit history</strong> – your borrowing record and any County Court Judgments (CCJs).</li>
    <li><strong>Loan purpose</strong> – some lenders restrict what secured loans can be used for.</li>
    <li><strong>Overall eligibility</strong> – a combination of income, equity (even negative equity in some cases), loan size and term, and the lender’s own criteria.</li>
  </ul>

  <p class="p-15-style mono-justify">
    <strong>Is credit score a significant factor?</strong><br />
    Your credit history is important but not the only consideration for loans secured on property. Because there is
    security, lenders may be more flexible than with unsecured borrowing – but generally, a better credit score can
    still help you access lower interest rates.
  </p>

  <p class="p-15-style mono-justify">
    <strong>Representative example</strong><br />
    Secured loan rates in the UK can vary widely. For example, if you borrow £10,000 over ten years at an Annual Interest
    Rate of 5.14% (variable), you might make 120 monthly repayments of £122.71, giving a total repayment of £14,725.20.
    This figure includes a lender fee of £495 and a broker fee of £1,000, both added to the loan. The overall cost for
    comparison is 8.6% APRC representative. The maximum APR is 65.2%.
  </p>

  <p class="p-15-style mono-justify">
    <strong>What is the process for securing loan approval?</strong>
  </p>
  <ul class="p-15-style mono-justify list-disc pl-6 space-y-1">
    <li>Researching secured loan options and the type of product you may need.</li>
    <li>Making an initial application, usually online or by phone.</li>
    <li>Submitting supporting documents (ID, income, bank statements, mortgage statements, etc.).</li>
    <li>Arranging any necessary property valuation or appraisal.</li>
    <li>Receiving an approval decision and finalising loan documents.</li>
  </ul>

  <p class="p-15-style mono-justify">
    <strong>What documents are typically required?</strong><br />
    After you start your application, we will usually contact you to confirm details and request further information.
    This can include personal and employment details, income evidence (recent payslips or accounts), bank statements,
    and your existing mortgage statement. Providing clear information at the outset can help speed up the process.
  </p>

  <p class="p-15-style mono-justify">
    <strong>We go the extra mile for your case</strong><br />
    CHFinance specialises in matching secured loans to your financial circumstances. Rather than being limited to one
    bank or building society, we compare loans from the wider market. Our panel of lenders offers borrowing from
    £3,000 to £500,000 with terms from 1 to 30 years. We search and compare over 600 loan products to find a suitable
    secured loan for you. Our process is designed to be straightforward and flexible, and we use soft searches where
    possible so that initial checks do not impact your credit score.
  </p>

  <p class="p-15-style mono-justify">
    <strong>Disclaimer</strong><br />
    We do not offer advice on Secured Loans. If you show an interest in one of these areas, we can refer you to an
    FCA-regulated master broker who is authorised to provide advice. If you go ahead with one of their recommendations,
    we, as a firm, will receive a referral fee commission from the provider if the case completes.
  </p>
`,
  "unsecured-loan": `
    <p class="p-15-style text-justify">
      <strong>What are unsecured loans?</strong><br />
      Unsecured loans, also known as personal loans, are borrowing facilities in the UK that do not require you
      to use an asset (such as your home) as security. Approval is mainly based on your creditworthiness and
      affordability. Because there is no collateral, these loans are usually quicker to arrange but often come
      with higher interest rates. It is important to understand the advantages and disadvantages before you
      commit.
    </p>

    <p class="p-15-style text-justify">
      <strong>Pros of an unsecured loan</strong><br />
      1. <strong>No collateral required</strong> – You do not need to provide property or other assets as security,
      making unsecured borrowing accessible for customers without significant assets.<br />
      2. <strong>Quick approval and funding</strong> – With no valuation or legal work on a property, applications
      are usually processed faster, helping you access funds within a short time frame.<br />
      3. <strong>Flexible use of funds</strong> – You can typically use the loan for a range of purposes, such as
      debt consolidation, home improvements, education, or other personal needs.<br />
      4. <strong>No risk of losing secured assets</strong> – Because the loan is not linked to your property, you
      are not directly risking your home or other collateral if you default, although missed payments will still
      have serious consequences.<br />
      5. <strong>No property valuation costs</strong> – There is usually no need for property surveys or valuations,
      so you avoid those additional fees.
    </p>

    <p class="p-15-style text-justify">
      <strong>Cons of an unsecured loan</strong><br />
      1. <strong>Higher interest rates</strong> – Lenders take more risk when there is no security, so interest rates
      are generally higher than for secured borrowing.<br />
      2. <strong>Credit score dependence</strong> – Approval and pricing are heavily influenced by your credit
      history, so customers with weaker credit profiles may face higher costs or may not be accepted.<br />
      3. <strong>Lower maximum loan amounts</strong> – Without collateral, lenders may restrict how much you can
      borrow compared to a secured loan.<br />
      4. <strong>Risk of debt cycle</strong> – If not carefully managed, it can be easier to over-borrow and
      struggle with repayments, which may lead to further borrowing to cover existing debt.<br />
      5. <strong>Potential legal action</strong> – If you do not keep up repayments, the lender may take legal steps
      to recover the outstanding balance, which can affect your credit profile and financial stability.
    </p>

    <p class="p-15-style text-justify">
      A clear understanding of these pros and cons can help you decide whether an unsecured loan is suitable for
      your needs. For tailored guidance, customers should seek independent financial advice.
    </p>

    <p class="p-15-style text-justify">
      <strong>Disclaimer</strong><br />
      We do not offer advice on Unsecured Loans. If you show an interest in this area, we can refer you to an
      FCA-regulated master broker who is authorised to provide advice. If you go ahead with one of their
      recommendations, we, as a firm, will receive a referral fee commission from the provider if the case
      completes.
    </p>
  `,
"first-time-buyer": `
  <div class="p-15-style">
    <p>
      If you are looking to buy your first home, you will be categorised as a first-time buyer,
      provided that the property will serve as your primary residence. Recent economic conditions
      and the impact of the Covid-19 pandemic have introduced challenges for individuals aspiring
      to step onto the property ladder.
    </p>

    <p>
      Fortunately, with careful preparation and the right guidance, first-time buyers can still
      secure competitive mortgage deals. If you are considering a property purchase, it is wise
      to engage a chartered surveyor to carry out a thorough assessment of the property before
      you commit.
    </p>

    <p><strong>You fit the profile of a first-time buyer if:</strong></p>
    <ul>
      <li>You have never previously owned a residence, either in the United Kingdom or abroad.</li>
      <li>
        You solely possess a commercial property (for example, a shop, restaurant, or salon)
        with no attached living accommodation.
      </li>
      <li>
        You have no prior homeownership experience anywhere globally and are now looking to acquire
        a buy-to-let property.
      </li>
    </ul>

    <p><strong>You are likely not considered a first-time buyer if:</strong></p>
    <ul>
      <li>
        You are seeking to purchase a property jointly with someone who currently owns or has
        previously owned a home.
      </li>
      <li>
        The property is being purchased on your behalf by someone who already owns their own home
        (for example, a parent or guardian) and it will be registered in their name.
      </li>
      <li>
        You have inherited a property in the past, even if you never lived there and have since sold it.
      </li>
    </ul>

    <p><strong>Principal agreement</strong></p>
    <p>
      An Agreement in Principle is a conditional mortgage indication that you can obtain from a lender
      before submitting a full application. It is not a formal mortgage offer, nor is it legally binding
      on you or the lender. However, it can be very helpful for first-time buyers because it gives an
      indication of your likely borrowing capacity and can demonstrate your credibility to sellers when
      you find a property you like.
    </p>

    <p><strong>Improve credit scores</strong></p>
    <p>
      Your credit score plays a key role in determining the mortgage options available to you. It can
      influence whether a lender approves your application, the loan amount offered, and the interest
      rates you can access. Improving your credit score before applying can increase your chances of
      approval and open the door to more competitive rates.
    </p>

    <p><strong>Steps to boost your credit score:</strong></p>
    <ul>
      <li>Ensure that your address information is correct and consistent across all of your accounts.</li>
      <li>Register your name and current address on the electoral roll if you have not already.</li>
      <li>Keep spending within existing credit limits and avoid taking on unnecessary new debt.</li>
      <li>Pay all bills in full and on time during the year before your application.</li>
      <li>
        If you have little or no credit history, consider using credit-builder credit cards to show a
        pattern of responsible borrowing.
      </li>
    </ul>

    <p>
      Buying a home is a significant commitment and can feel daunting, especially for first-time buyers.
      At CHFinance, our team of mortgage advisers can clearly explain your options in straightforward
      language and support you at every stage of the process. We have access to a wide range of mortgage
      products from high street and specialist lenders and understand which lenders are more flexible
      for first-time buyers.
    </p>


  </div>
`,
"buy-my-next-home": `
  <div class="p-15-style">
    <p>
      Your home represents one of the most significant investments you will make in your lifetime,
      and the process of acquiring your next property can be just as challenging as your first
      purchase. It is sensible to ask yourself the same questions you did when you bought your
      first home and to assess why this move is the right choice for your circumstances.
    </p>

    <p>
      When you decide to purchase your next home, it will usually involve arranging a new mortgage.
      This may include transferring (or “porting”) your existing mortgage to the new property.
      However, this process is not automatic – you must make a new application. If the property you
      are buying is more expensive than your current home, you may also need to borrow additional funds.
    </p>

    <p>
      Over time, your current home may have built up equity. Home equity is the portion of the
      property that you genuinely “own”. Even though you are the legal homeowner, your lender
      still has an interest in the property until the mortgage is fully repaid. Depending on the
      purchase price of your next home, the equity from your existing property may be enough to
      cover your deposit, or in some cases, the full cost of your next property. Speaking with a
      mortgage adviser about your next mortgage can be very helpful, as they can guide you towards
      the most suitable finance options available.
    </p>

    <p><strong>Stamp Duty</strong></p>
    <p>
      Stamp Duty is another key consideration when buying your next property. It is a tax charged
      as a percentage of the purchase price and is payable to HMRC, whether the property is
      residential or non-residential.
    </p>

    <p>
      Stamp Duty works on a tiered system. The first £125,000 of the purchase price is usually
      exempt, with higher portions of the price taxed at increasing rates. Even if the purchase
      price of your new home is below £125,000, you may still be required to submit a return
      (unless exempt), even where no Stamp Duty is actually payable.
    </p>

    <p>
      It is vital to acknowledge that Stamp Duty regulations exhibit variance across different regions of the UK, making it advisable to acquaint yourself with the specific rules and rates applicable to your location.
    </p>
  </div>
`,
"buy-to-let": `
  <p class="p-15-style" style="text-align: justify;">
    <strong>The Financial Conduct Authority (FCA) does not regulate some forms of Buy-to-Let Mortgages.</strong><br>
    <strong>A Buy-to-Let Mortgage will be secured against your property.</strong>
  </p>

  <p class="p-15-style" style="text-align: justify;">
    A Buy-to-Let mortgage is tailored for individuals seeking to purchase residential properties, whether a house or a flat,
    with the intention of renting them out to tenants. While the core principles of Buy-to-Let mortgages align with standard
    mortgages, there are some key differences:
  </p>

  <p class="p-15-style" style="text-align: justify;">
    <strong>Key differences from standard residential mortgages</strong>
  </p>
  <ul class="p-15-style" style="margin-left:1.5rem;padding-left:1rem;text-align: justify;list-style-type: disc;">
    <li>Elevated fees.</li>
    <li>Typically higher interest rates.</li>
    <li>A minimum deposit requirement, usually around 25% of the property's value (though it can vary from 20% to 40%).</li>
    <li>Primarily interest-only, meaning monthly payments often cover interest only, with the full loan amount repaid at the end of the term (capital-and-interest options may also be available).</li>
    <li>Buy-to-Let mortgages purchased purely as investments are not usually regulated by the FCA. If you or your family plan to live in the property, it may be considered a Consumer Buy-to-Let mortgage and subject to stricter affordability rules.</li>
    <li>Activities such as advising, arranging, lending, and administering Buy-to-Let mortgages for customers are regulated by the FCA in a similar way to residential mortgages.</li>
  </ul>

  <p class="p-15-style" style="text-align: justify;">
    <strong>Eligibility for a Buy-to-Let mortgage usually depends on:</strong>
  </p>
  <ul class="p-15-style" style="margin-left:1.5rem;padding-left:1rem;text-align: justify;list-style-type: disc;">
    <li>Having an investment intent in houses or flats.</li>
    <li>Being able to understand and accept the associated risks.</li>
    <li>Ownership of your primary residence, either outright or with an existing mortgage.</li>
    <li>A favourable credit history and manageable existing borrowings.</li>
    <li>A minimum annual income (often around £25,000, though this may vary by lender).</li>
    <li>Compliance with any age limits set by lenders, typically between 70 and 75 at the end of the mortgage term.</li>
  </ul>

  <p class="p-15-style" style="text-align: justify;">
    It is advisable to consult a mortgage broker for assistance in selecting the most suitable Buy-to-Let mortgage.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    <strong>Consumer Buy-to-Let Mortgage and Commercial Buy-to-Let Mortgage</strong><br>
    The main distinction between a Consumer Buy-to-Let Mortgage and a Commercial Buy-to-Let Mortgage is the level of FCA
    protection. Consumer Buy-to-Let mortgages are covered by FCA rules, whereas Commercial Buy-to-Let mortgages are generally
    treated as commercial lending.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    <strong>Consumer Buy-to-Let Mortgage</strong><br>
    A Consumer Buy-to-Let Mortgage can be defined as “a buy-to-let mortgage contract which is not entered into by the borrower
    wholly or predominantly for the purposes of a business carried on, or intended to be carried on, by the borrower”
    (Mortgage Credit Directive Order 2015).
  </p>

  <p class="p-15-style" style="text-align: justify;">
    Consumer Buy-to-Let mortgages are typically designed for:
  </p>
  <ul class="p-15-style" style="margin-left:1.5rem;padding-left:1rem;text-align: justify;list-style-type: disc;">
    <li>Accidental landlords (for example, someone who inherits a property or moves in with a partner but wishes to keep and let out their own home).</li>
    <li>Those renting a property to family members or relatives.</li>
    <li>Non-professional landlords with only a small number of rental properties.</li>
  </ul>

  <p class="p-15-style" style="text-align: justify;">
    The buyer, family member, or relative must usually have lived in the property since it was purchased, and the buyer should
    not own multiple other rental properties. Lenders may require evidence of personal income and an income and expenditure
    assessment, as rental income should not normally be relied upon as the only source of income.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    Consumer Buy-to-Let properties can be subject to a range of regulations and taxes, including stamp duty, income tax,
    and capital gains tax. Anyone providing advice on Consumer Buy-to-Let mortgages must be appropriately authorised by the FCA.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    <strong>Commercial Buy-to-Let Mortgage</strong><br>
    A Commercial Buy-to-Let Mortgage is not regulated by the FCA, as it is considered a commercial finance product. It generally
    applies where the property is being let to commercial tenants (such as businesses) rather than residential occupants, or
    where the borrowing is clearly for business or investment purposes. These mortgages are typically used by professional or
    institutional landlords investing in the rental market for profit and may involve larger loan sizes and different tax
    treatment (for example, business rates rather than council tax).
  </p>

  <p class="p-15-style" style="text-align: justify;">
    Commercial Buy-to-Let mortgages often have different terms and interest rates compared with residential Buy-to-Let
    mortgages. Lenders may also require additional collateral or security to mitigate their risk.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    As with any investment, comprehensive research and professional advice should be sought before making any purchase
    decisions. Speaking with a qualified mortgage broker before entering into a Buy-to-Let mortgage can help you identify
    the most suitable financing solution for your needs.
  </p>
`,
"remortgage": `
  <p class="p-15-style" style="text-align: justify;">
    Remortgaging is the process of replacing your existing mortgage with a completely new loan. The terms of a remortgage will vary depending on the lender and on your financial circumstances. You may switch to a new deal with your current lender or move to a different lender offering a more competitive rate. A remortgage can provide benefits such as lower interest rates, reduced borrowing costs, or access to additional funds by taking out a loan that is larger than your current outstanding balance. However, remortgaging usually involves lender fees and may also include broker fees, so taking advice from a qualified mortgage adviser is recommended.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    <strong>Remortgaging can prove advantageous in the following scenarios:</strong>
  </p>
  <ul class="p-15-style" style="margin-left:1.5rem;padding-left:1rem;text-align: justify;list-style-type: disc;">
    <li>The initial mortgage term has ended.</li>
    <li>You are seeking a better mortgage rate.</li>
    <li>You want to change the type of mortgage.</li>
    <li>You wish to release equity by borrowing against your home.</li>
  </ul>

  <p class="p-15-style" style="text-align: justify;">
    <strong>Advantages of Remortgaging:</strong>
  </p>
  <ul class="p-15-style" style="margin-left:1.5rem;padding-left:1rem;text-align: justify;list-style-type: disc;">
    <li>(+) Your credit rating should remain unaffected as long as payments are made on time.</li>
    <li>(+) A perfect credit score may not be essential, as your home is used as security for the loan.</li>
    <li>(+) A range of rates and terms may be available, depending on affordability.</li>
    <li>(+) Remortgaging with your existing lender can be relatively straightforward, as they already hold your information and payment history.</li>
  </ul>

  <p class="p-15-style" style="text-align: justify;">
    <strong>Disadvantages of Remortgaging:</strong>
  </p>
  <p class="p-15-style" style="text-align: justify;">
    On the other hand, there are some potential drawbacks to consider:
  </p>
  <ul class="p-15-style" style="margin-left:1.5rem;padding-left:1rem;text-align: justify;list-style-type: disc;">
    <li>(-) You may face early repayment or redemption charges from your current lender, depending on your existing mortgage terms.</li>
    <li>(-) Remortgage deals are often available only for specific purposes, such as home improvements or renovations.</li>
    <li>(-) Your home is at risk if you do not keep up with the required repayments.</li>
    <li>(-) You may convert previously unsecured debts into secured borrowing, putting your home at risk for those debts.</li>
    <li>(-) Applying with a new lender can be as complex and time-consuming as your original mortgage application, and can involve valuation fees, legal fees, and arrangement or booking fees, which can total several hundred pounds.</li>
  </ul>

  <p class="p-15-style" style="text-align: justify;">
    It is important to think carefully about whether remortgaging is the right choice, particularly if you are already on a competitive interest rate. This is especially relevant where new available rates are higher than your current rate. If you need to raise additional funds but your existing mortgage deal is very favourable, a secured loan might be an alternative option to explore.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    For some borrowers, refinancing debt with a remortgage can help reduce monthly outgoings to a more manageable level and make overall debt more affordable. A well-chosen remortgage can save thousands of pounds, but whether it is suitable will depend on your circumstances. If you are thinking about remortgaging to help manage your debts, you should always seek expert debt advice before proceeding.
  </p>
`,
"equity-release": `
  <p class="p-15-style" style="text-align: justify;">
    Equity release is a way of unlocking some of the money tied up in your home without having to sell it and move out. You can either borrow against the value of your property or sell a share of it in return for a lump sum or a regular income. These plans are usually available to homeowners aged 55 or over who either own their home outright or have only a small mortgage outstanding. Most equity release providers charge a lender’s arrangement fee and there will also be legal fees payable to a solicitor. It is important to get guidance from a qualified equity release adviser, who may charge their own fee for advice.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    <strong>Advantages of Equity Release</strong>
  </p>
  <ul class="p-15-style" style="margin-left:1.5rem;padding-left:1rem;text-align: justify;list-style-type: disc;">
    <li>(+) Can provide either a single lump sum or an ongoing income. Modern equity release plans often let you take an initial lump sum with a drawdown facility for future withdrawals.</li>
    <li>(+) The cash you release is usually tax-free and can be used for many purposes, such as home improvements, repaying an existing mortgage or other debts, helping family, or funding holidays and major purchases.</li>
    <li>(+) A “no negative equity” guarantee means you should never have to repay more than the eventual sale value of your home and your estate will not owe more than the property is worth.</li>
    <li>(+) Allows you to access the equity in your home without needing to sell up, relocate, or downsize. You can normally stay living in your home for life or until you move into permanent long-term care.</li>
    <li>(+) Some equity release schemes offer flexibility to make monthly, ad-hoc, or partial repayments if you wish. Regular payments are not compulsory, so you retain control.</li>
  </ul>

  <p class="p-15-style" style="text-align: justify;">
    <strong>Disadvantages of Equity Release</strong>
  </p>
  <ul class="p-15-style" style="margin-left:1.5rem;padding-left:1rem;text-align: justify;list-style-type: disc;">
    <li>(-) Taking equity release can have tax consequences and may affect entitlement to certain state benefits.</li>
    <li>(-) It is designed as a long-term financial product and is not suitable for short-term borrowing needs.</li>
    <li>(-) Releasing equity will reduce the value of your estate and therefore the amount that may be passed on as inheritance.</li>
    <li>(-) Early repayment or ending the plan earlier than expected can result in financial penalties.</li>
    <li>(-) Interest on some lifetime mortgages is compounded, which can cause the amount you owe to grow quickly over time.</li>
    <li>(-) Equity release is only one way to access tax-free cash from your property. You should also think about alternatives such as downsizing, seeking help from family, or considering other forms of borrowing.</li>
  </ul>

  <p class="p-15-style" style="text-align: justify;">
    <strong>Disclaimer</strong><br />
    We do not offer advice on Lifetime Mortgages/Equity Release. If you show an interest in one of these areas, we can refer you to an FCA-regulated broker who is authorised to provide advice in that area. If you go ahead with one of their recommendations, we, as a firm, will receive a referral fee commission from the provider if the case completes.
  </p>
`,
"buildings-contents": `
  <p class="p-15-style" style="text-align: justify;">
    Whether you are moving into a new home or renewing the cover on your existing one, it is always worth shopping around
    for your buildings and contents insurance.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    The best policy is the one that fits the type of property you live in and the possessions you keep inside it.
    Depending on your situation, you may only need buildings insurance, only contents insurance, or a combined
    buildings and contents policy.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    <strong>Buildings insurance</strong> covers the structure of your home and its fixtures and fittings. This includes
    kitchens and bathroom units, as well as walls, doors, windows and roofs. It can also extend to sheds, garages, and
    other external features, although these are not always included as standard, so it is important to check your policy.
    A typical policy will usually cover you against risks such as flood, subsidence, theft or vandalism, fire,
    lightning, and water damage.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    <strong>Contents insurance</strong> protects your belongings – the things that make a house a home – if they are
    damaged or destroyed. This usually means anything you can remove from the property, including furniture, carpets,
    curtains, light fittings, clothes, electronics, and personal items. Contents policies generally protect against the
    same kinds of events as buildings insurance.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    If you need both types of cover, a combined policy is often cheaper than buying separate buildings and contents
    insurance.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    Unlike car insurance, it is not a legal requirement to have buildings and contents insurance. However, most
    mortgage lenders will insist that you have buildings insurance in place before they release funds, as your home is
    used as collateral if you cannot keep up repayments.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    Home insurance will <strong>not</strong> normally cover:
  </p>
  <ul class="p-15-style" style="margin-left:1.5rem;padding-left:1rem;text-align: justify;list-style-type: disc;">
    <li>Acts of terrorism.</li>
    <li>Damage caused by general wear and tear.</li>
    <li>Accidental damage, unless you have paid extra to include this.</li>
    <li>High-value items, unless you have specifically declared them to the insurer.</li>
    <li>Business-related accidents or damage if you run a business from home.</li>
  </ul>

  <p class="p-15-style" style="text-align: justify;">
    It is also worth noting that many insurers will regard your cover as invalid if your property is left unoccupied for
    more than 30 consecutive days in a year, so always check the small print.
  </p>
`,
"critical-illness": `
  <p class="p-15-style" style="text-align: justify;">
    Critical illness cover pays a tax-free lump sum if you are diagnosed with a covered critical illness during the policy term.
    You choose how long the policy runs for – for example, until your children are grown up, your mortgage is repaid, or you
    retire. It can help you feel more secure, a bit like car insurance: you pay regular premiums and hope you never need to
    claim, but it is there “just in case”. Most policies cover a defined list of serious conditions, such as coronary artery
    bypass, major heart attack, kidney failure, major organ transplant, multiple sclerosis, stroke and certain specified cancers.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    As long as you keep up with your premium payments (monthly or annually), you will usually be covered if you are diagnosed
    with one of the illnesses listed in your policy. If you make a successful claim, you normally receive a one-off, tax-free
    lump sum that you can use to replace lost income, pay medical bills, clear or reduce debts, or make changes to your home.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    It is very important to read your policy wording carefully. Some policies include a “deferred period”, which means you will
    not receive the payout immediately after diagnosis and may need to wait for an agreed period before you can claim. Critical
    illness and terminal illness are also treated differently by insurers. Terminal illness (often defined as having a life
    expectancy of fewer than 12 months) is usually <strong>not</strong> covered by critical illness policies, so you may wish
    to consider separate life insurance if that is a priority for you.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    Always check exactly which conditions are covered and under what circumstances before you agree to a policy.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    <strong>Do I need critical illness cover?</strong><br />
    Before deciding, think about:
  </p>

  <ol class="p-15-style" style="margin-left:1.5rem;padding-left:1rem;text-align: justify;">
    <li>Whether you already have some illness cover included with another policy (for example, life insurance or mortgage protection).</li>
    <li>What benefits your employer would pay if you could not work because of ill-health or disability.</li>
    <li>Whether you have savings you could fall back on instead of insurance.</li>
    <li>Whether critical illness cover is the most suitable type of illness insurance for your needs.</li>
  </ol>

  <p class="p-15-style" style="text-align: justify;">
    It is also worth comparing other types of illness insurance. For instance, income protection insurance usually covers a
    wider range of illnesses and conditions than critical illness cover and may provide an income for a longer period if you
    cannot work – although it is often more expensive.
  </p>
`,
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
  "key-person": `
    <p class="p-15-style" style="text-align: justify;">
      Key person insurance is a type of life insurance policy that provides financial protection to a business
      if a key employee or executive becomes incapacitated, disabled, or dies. The policy is arranged and paid
      for by the company, and any claim is normally paid to the company rather than to the individual or their
      family. The aim is to help cover lost revenue, increased costs, and other financial pressures that may
      arise from the loss of that key person.
    </p>

    <p class="p-15-style" style="text-align: justify;">
      Key employees might be owners, directors, senior managers, salespeople, or other specialists whose skills,
      experience, or relationships are critical to the organisation&apos;s success. The sudden loss of such a
      person can have a ripple effect across the whole business, impacting revenue, customer relationships and
      long-term strategy. Key person insurance is designed to help manage these risks.
    </p>

    <p class="p-15-style" style="text-align: justify;">
      <strong>Why Key Person Insurance is important for UK businesses</strong>
    </p>
    <p class="p-15-style" style="text-align: justify;">
      In the UK, key person insurance is an important form of business protection that can provide peace of mind
      to owners and stakeholders. A suitable policy can give the company time and financial breathing space to:
    </p>
    <ul class="p-15-style" style="margin-left:1.5rem;padding-left:1rem;text-align: justify;list-style-type: disc;">
      <li>Recruit and train a replacement for the key employee.</li>
      <li>Cover short-term loss of profits or disruption to contracts.</li>
      <li>Protect important customer and supplier relationships.</li>
      <li>Support loan repayments or other financial commitments linked to that employee.</li>
    </ul>

    <p class="p-15-style" style="text-align: justify;">
      <strong>Types of Key Person Insurance policies</strong>
    </p>
    <ul class="p-15-style" style="margin-left:1.5rem;padding-left:1rem;text-align: justify;list-style-type: disc;">
      <li>
        <strong>Life Insurance.</strong>
        Provides a lump sum to the company if the insured key person dies during the policy term. The payout can
        help cover recruitment costs, training costs, lost profits, or loan repayments.
      </li>
      <li>
        <strong>Critical Illness Insurance.</strong>
        Pays a lump sum to the company if the key person is diagnosed with a specified critical illness and is
        unable to work. This can help with medical costs, lost profits, and other expenses linked to their absence.
      </li>
      <li>
        <strong>Income Protection Insurance.</strong>
        Provides an ongoing income to the company if the key person becomes incapacitated and is unable to work
        for a period of time. The regular benefit can help cover ongoing expenses and lost profits.
      </li>
    </ul>

    <p class="p-15-style" style="text-align: justify;">
      <strong>Choosing the right Key Person Insurance policy</strong>
    </p>
    <p class="p-15-style" style="text-align: justify;">
      The right level and type of cover will depend on several factors, including the size and type of business,
      the key employee&apos;s role and salary, and the potential financial impact of their loss. Working with an
      experienced insurance broker can help you:
    </p>
    <ul class="p-15-style" style="margin-left:1.5rem;padding-left:1rem;text-align: justify;list-style-type: disc;">
      <li>Identify which employees are genuinely “key persons”.</li>
      <li>Estimate the financial impact if one of them could no longer work.</li>
      <li>Select appropriate policy types and benefit levels.</li>
      <li>Compare premiums, terms, and conditions from different insurers.</li>
    </ul>

    <p class="p-15-style" style="text-align: justify;">
      <strong>How Key Person Insurance works</strong>
    </p>
    <p class="p-15-style" style="text-align: justify;">
      The company applies for the policy on the life of the key employee and pays the premiums. If the insured
      person dies, becomes critically ill, or is incapacitated (depending on the type of policy), the insurer
      will usually require evidence of the claim event and the policy terms. Once accepted, the benefit is paid
      to the business, which can then use the funds to help manage the financial consequences of the loss.
    </p>

    <p class="p-15-style" style="text-align: justify;">
      The amount of cover needed will vary from one business to another. It may be based on the key person&apos;s
      salary, the profit they generate, the cost of hiring and training a replacement, or outstanding loans that
      depend on their involvement in the business.
    </p>

    <p class="p-15-style" style="text-align: justify;">
      <strong>Reviewing your cover</strong><br />
      As your business grows and changes, the risks associated with the loss of a key employee may also change.
      It is sensible to review key person insurance arrangements regularly to ensure that the level of cover and
      the people insured remain appropriate for your current circumstances.
    </p>
  `,
  "life-insurance": `
  <p class="p-15-style" style="text-align: justify;">
    Life insurance is a type of insurance policy that can provide financial support to your loved ones when you
    pass away. It can pay out a lump sum that can be used to clear outstanding debts such as your mortgage and
    give your family money to live on so that your partner or children can continue to pay bills and everyday
    living expenses. If you prefer, some policies can instead provide a regular income for your dependants.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    <strong>Do I need life insurance?</strong>
  </p>
  <ul class="p-15-style" style="margin-left:1.5rem;padding-left:1rem;text-align: justify;list-style-type: disc;">
    <li>If you have dependants or a partner who relies on your income, it is important to make sure they are taken care of.</li>
    <li>If you have a mortgage, life insurance can help your loved ones meet those financial commitments.</li>
    <li>You may also want to consider a policy that covers funeral expenses to ease the cost for your family.</li>
  </ul>

  <p class="p-15-style" style="text-align: justify;">
    Life insurance is not a legal requirement, but it can give your dependants – such as a partner or children –
    stability if you die. It provides a financial safety net if you are no longer around to provide for them, as
    well as peace of mind for you while you are alive.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    You choose how much cover you need, how long you need it for, and whether you want the policy in joint names
    or a single name. The amount of cover you select will usually remain fixed unless you later change the policy.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    If you are planning to take out a mortgage, be aware that some lenders may require you to have life insurance
    so they know the mortgage can be repaid if you die during the term of the loan.
  </p>
  `,
  "private-medical": `
  <p class="p-15-style" style="text-align: justify;">
    Private medical insurance is an insurance policy designed to help cover the cost of private healthcare.
    It will typically cover you for surgery and treatment related to acute conditions – for example, a hip
    replacement or hernia operation. Different policies offer different levels of cover and cost, and some
    may include fast-track diagnostics for cancer or access to treatments that are not routinely available
    on the NHS.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    As with other types of insurance, you pay monthly or annual premiums. If you then need private medical
    treatment, your provider will usually pay some or all of the cost, depending on the terms of your policy.
    Private medical insurance can support you when you need it most, from in-patient treatment through to
    additional support for mental health. You can take out a policy just for yourself or a joint policy to
    cover you and your partner.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    <strong>Private medical insurance usually gives you:</strong>
  </p>
  <ul class="p-15-style" style="margin-left:1.5rem;padding-left:1rem;text-align: justify;list-style-type: disc;">
    <li>Quicker access to consultants, tests, scans, and treatment.</li>
    <li>Access to private hospitals, often with extra comforts such as TVs and en-suite rooms.</li>
    <li>In some cases, access to drugs and treatments that are not widely available on the NHS.</li>
    <li>More control over which hospital you go to and when your treatment takes place.</li>
  </ul>

  <p class="p-15-style" style="text-align: justify;">
    The main downside is cost: private medical insurance can be expensive, and many policies do not cover
    chronic or long-term conditions.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    Getting the most suitable private medical insurance for your needs is half the battle. Start by deciding
    why you want the cover and who you want it to protect.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    <strong>Types of private medical insurance policies</strong>
  </p>

  <p class="p-15-style" style="text-align: justify;">
    <strong>1. Individual medical insurance</strong><br />
    This provides cover just for you and can give fast access to treatment if you become ill or injured,
    helping you avoid lengthy NHS waiting lists. Before comparing policies, it is worth checking whether you
    already have some private medical cover through your employer.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    <strong>2. Joint medical insurance</strong><br />
    A joint policy covers both you and your partner under one plan. It can sometimes work out cheaper than
    taking out two separate policies, although this is not always the case and quotes should be compared.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    <strong>3. Family medical insurance</strong><br />
    Family cover can insure your whole family under the same policy. This can sometimes be more cost-effective
    than arranging separate policies for each family member.
  </p>

  <p class="p-15-style" style="text-align: justify;">
    <strong>4. Child medical insurance</strong><br />
    Child medical insurance covers the cost of private healthcare for your child if they become ill, giving
    reassurance that they can access prompt treatment in private hospitals or clinics. Availability of
    standalone child-only policies can vary between insurers, so it is important to check what each provider
    offers.
  </p>
  `,
  "relevant-life": `
    <p class="p-15-style" style="text-align: justify;">
      Relevant Life Insurance is a type of life insurance policy available in the UK that is designed to give
      small business owners and contractors an affordable, tax-efficient way to provide life insurance cover
      for their employees. With this type of policy, the employer pays the premiums and the policy pays out a
      tax-free lump sum to the employee’s beneficiaries if the employee dies while covered.
    </p>

    <p class="p-15-style" style="text-align: justify;">
      The concept of Relevant Life Insurance was introduced in 2006 as part of the Finance Act and has become
      a popular option for smaller employers who want to provide death-in-service benefits without setting up a
      full group life scheme. One of the key advantages is that premiums are normally treated as a business
      expense and can be tax-deductible.
    </p>

    <p class="p-15-style" style="text-align: justify;">
      <strong>How Relevant Life Insurance works</strong><br />
      Relevant Life policies are similar to standard life insurance in that they provide a tax-free lump sum to
      beneficiaries on the death of the insured person. However, there are some key differences:
    </p>
    <ul class="p-15-style" style="margin-left:1.5rem;padding-left:1rem;text-align: justify;list-style-type: disc;">
      <li>
        They are <strong>individual policies</strong> set up by employers on behalf of named employees, rather than
        a group scheme.
      </li>
      <li>
        Policies are <strong>not linked to a pension scheme</strong> and can be tailored to the specific needs of each
        employee.
      </li>
      <li>
        Policies are normally <strong>written in trust</strong>, so the benefits are paid directly to the chosen
        beneficiaries rather than forming part of the deceased’s estate for inheritance-tax purposes.
      </li>
      <li>
        Premiums are generally treated as a <strong>business expense</strong> and can be tax-deductible, which can
        represent a significant saving for small businesses.
      </li>
    </ul>

    <p class="p-15-style" style="text-align: justify;">
      <strong>Eligibility for Relevant Life Insurance</strong><br />
      To be eligible, the employee must normally be a UK resident and must not already be covered by a group
      life insurance scheme from the same employer. The policy must be set up by a UK-registered company or
      UK-based contractor. Some policies may also allow cover for a director’s or employee’s spouse or partner.
    </p>

    <p class="p-15-style" style="text-align: justify;">
      <strong>Advantages of Relevant Life Insurance</strong>
    </p>
    <ul class="p-15-style" style="margin-left:1.5rem;padding-left:1rem;text-align: justify;list-style-type: disc;">
      <li>
        <strong>Tax-efficient.</strong> Premiums are usually treated as a business expense and are tax-deductible,
        which can be a significant cost saving for small business owners.
      </li>
      <li>
        <strong>Flexible.</strong> Cover can be tailored to the specific needs of each individual employee.
      </li>
      <li>
        <strong>Affordable.</strong> Can be more cost-effective than some other forms of life cover, as it is not
        linked to an employee’s pension scheme.
      </li>
      <li>
        <strong>No benefit in kind.</strong> Policies are generally not treated as a benefit in kind, so they do
        not normally attract National Insurance contributions or income tax for the employee.
      </li>
      <li>
        <strong>Portable.</strong> Policies can sometimes be moved with the employee if they change employer,
        depending on the insurer’s terms.
      </li>
    </ul>

    <p class="p-15-style" style="text-align: justify;">
      <strong>Disadvantages of Relevant Life Insurance</strong>
    </p>
    <ul class="p-15-style" style="margin-left:1.5rem;padding-left:1rem;text-align: justify;list-style-type: disc;">
      <li>
        <strong>Limited cover.</strong> Relevant Life policies usually only provide death-in-service benefits and
        do not normally include critical illness or income protection.
      </li>
      <li>
        <strong>No surrender value.</strong> If the policy is cancelled or comes to an end, there is no cash‐in
        value.
      </li>
      <li>
        <strong>Restricted availability.</strong> Only certain individuals – such as directors, business owners,
        and employees – will be eligible.
      </li>
      <li>
        <strong>Potential tax implications.</strong> If a policy is not set up in line with current tax rules,
        there may be adverse tax consequences, so it is important to take professional advice.
      </li>
    </ul>

    <p class="p-15-style" style="text-align: justify;">
      <strong>Why CHFinance?</strong><br />
      It is important to consult with a qualified insurance professional to ensure that a Relevant Life
      Insurance policy is structured correctly and provides an appropriate level of cover for your business
      and employees. We can also help you compare policies from different providers to find suitable cover at
      a price that fits your budget.
    </p>
  `,
};

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState<TabId>("asset-finance");

  return (
    <>
      {/* Top blue nav bar */}
      <PublicHeader />

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
      </main>

      {/* Yellow disclaimer band */}
      <ImportantInfo />

      {/* Black footer */}
      <SiteFooter />
    </>
  );
}