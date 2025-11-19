// components/OurServicesTabs.tsx
"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";

type ServiceId = "mortgages" | "secured" | "unsecured" | "bridging";

interface ServiceConfig {
  id: ServiceId;
  label: string;
  sublabel: string;
  href: string;
  buttonLabel: string;
  content: ReactNode;
}

const SERVICES: ServiceConfig[] = [
  {
    id: "mortgages",
    label: "Mortgages",
    sublabel: "First-time buyers, movers and remortgages.",
    href: "/mortgages",
    buttonLabel: "Go to mortgages",
    content: (
      <>
        <p className="mt-1.5 text-sm text-slate-700">
          Where appropriate, we can also support with:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
          <li>First-time buyer and home mover mortgages (via our panel).</li>
          <li>Remortgages – including capital raising, subject to criteria.</li>
          <li>Buy-to-let for landlords.</li>
          <li>
            Exceptional circumstances such as complex income or historic credit issues.
          </li>
        </ul>
        <p className="mt-3 text-[11px] text-slate-600">
          <strong>Important:</strong> Your client’s home may be repossessed if they do
          not keep up repayments on their mortgage or any other debt secured on it.
        </p>
      </>
    ),
  },
  {
    id: "secured",
    label: "Secured loans & second charge mortgages",
    sublabel: "Raise funds while keeping an existing mortgage.",
    href: "/secured-loans",
    buttonLabel: "Go to secured loans",
    content: (
      <>
        <p className="mt-1.5 text-sm text-slate-700">
          When a full remortgage is not ideal, for example, due to early repayment
          charges, attractive existing rates or complex circumstances, then a secured
          loan / second charge may be worth considering.
        </p>
        <p className="mt-2 text-sm text-slate-700">
          We can help you place cases where your client:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
          <li>
            Needs to raise funds for home improvements, debt consolidation or other
            purposes.
          </li>
          <li>Wants to keep their current first charge mortgage.</li>
          <li>
            Has adverse or historic credit issues that require more specialist
            underwriting.
          </li>
          <li>
            Has non-standard or multiple income sources (e.g. self-employed,
            contractors, landlords).
          </li>
        </ul>
        <p className="mt-3 text-sm text-slate-700">
          Typical features (subject to lender criteria):
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
          <li>Loans from around £10,000 to £500,000+.</li>
          <li>Terms usually 3–30 years.</li>
          <li>Options for fixed and variable rates, depending on the lender.</li>
        </ul>
        <p className="mt-3 text-[11px] text-slate-600">
          <strong>Important:</strong> Your client’s home may be repossessed if they do
          not keep up repayments on any mortgage or other debt secured on it. Think
          carefully before securing other debts against your client’s home.
        </p>
      </>
    ),
  },
  {
    id: "unsecured",
    label: "Unsecured loans",
    sublabel: "Personal loans without securing on a property.",
    href: "/unsecured-loans",
    buttonLabel: "Go to unsecured loans",
    content: (
      <>
        <p className="mt-1.5 text-sm text-slate-700">
          For some clients, including those who do not wish to secure borrowing on their
          home, an unsecured personal loan may be an option.
        </p>
        <p className="mt-2 text-sm text-slate-700">
          We can help your client to find unsecured loan solutions for:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
          <li>Borrowing from around £1,000 to £25,000.</li>
          <li>Typical terms of 1 to 7 years, subject to status.</li>
          <li>
            Clients with both good and less-than-perfect credit histories, depending on
            criteria.
          </li>
        </ul>
        <p className="mt-3 text-[11px] text-slate-600">
          <strong>Important:</strong> Unsecured loans are subject to status and
          affordability checks. Missed or late payments can harm your client’s credit
          rating and affect their ability to obtain credit in the future.
        </p>
      </>
    ),
  },
  {
    id: "bridging",
    label: "Bridging finance",
    sublabel: "Short-term funding when timing is critical.",
    href: "/bridging-loans",
    buttonLabel: "Go to bridging loans",
    content: (
      <>
        <p className="mt-1.5 text-sm text-slate-700">
          When timing is critical, your client may need short-term bridging finance, for
          example:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
          <li>Property purchases where there is a chain break.</li>
          <li>Auction purchases with tight completion deadlines.</li>
          <li>Refurbishment or development projects prior to exit.</li>
          <li>Temporary funding whilst arranging a longer-term solution.</li>
        </ul>
        <p className="mt-3 text-sm text-slate-700">
          We can help you explore options across:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
          <li>Residential and investment property.</li>
          <li>Commercial property, subject to criteria.</li>
          <li>Terms typically from 1 to 18 months.</li>
          <li>
            Up to around 75% loan-to-value (LTV), subject to lender and case details.
          </li>
        </ul>
        <p className="mt-3 text-sm text-slate-700">
          We will outline the repayment strategy / exit route, timescales and key risks
          so that you can discuss suitability with your client.
        </p>
        <p className="mt-3 text-[11px] text-slate-600">
          <strong>Important:</strong> Missed or late payments can harm your client’s
          credit rating and may result in their property being repossessed if the loan is
          secured on it.
        </p>
      </>
    ),
  },
];

export function OurServicesTabs() {
  const [active, setActive] = useState<ServiceId>("mortgages");
  const current = SERVICES.find((s) => s.id === active)!;

  return (
    <section className="mx-auto max-w-6xl px-4 pb-8 md:pb-10">
      <h2
        className="text-lg md:text-xl font-extrabold tracking-tight text-slate-900"
        style={{ fontFamily: "var(--heading-font)" }}
      >
        Our Services
      </h2>

      <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] items-start">
        {/* LEFT – tabs */}
        <div className="flex flex-col gap-2">
          {SERVICES.map((svc) => {
            const isActive = svc.id === active;
            return (
              <button
                key={svc.id}
                type="button"
                onClick={() => setActive(svc.id)}
                className={[
                  "w-full text-left rounded-2xl border px-3.5 py-3 transition shadow-sm",
                  "flex flex-col gap-1",
                  isActive
                    ? "border-[#1E4DB7] bg-gradient-to-r from-[#F3F7FF] to-[#E7F8F6] shadow-md"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50",
                ].join(" ")}
              >
                <span
                  className="text-sm font-semibold text-slate-900"
                  style={{ fontFamily: "var(--heading-font)" }}
                >
                  {svc.label}
                </span>
                <span className="text-xs text-slate-600">{svc.sublabel}</span>
              </button>
            );
          })}
        </div>

        {/* RIGHT – active panel */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
          <h3
            className="text-base md:text-lg font-semibold text-slate-900"
            style={{ fontFamily: "var(--heading-font)" }}
          >
            {current.label}
          </h3>
          {current.content}

          <Link
            href={current.href}
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#1E4DB7] to-[#2FB7B2] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
          >
            {current.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
