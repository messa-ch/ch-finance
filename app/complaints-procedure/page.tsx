// app/complaints-procedure/page.tsx
import PublicHeader from "@/components/PublicHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Complaints Procedure · CHFinance",
};

export default function ComplaintsProcedurePage() {
  return (
    <main className="page">
      <PublicHeader />

      <section className="section section-white">
        <div className="container" style={{ maxWidth: "820px" }}>
          <h1 className="section-title" style={{ marginBottom: "2rem" }}>
            Complaints Procedure
          </h1>

          <p>Version 1.7 | Dated: 18/01/2025</p>

          <h2>Complaints received by letter</h2>
          <p>Address:</p>
          <p>
            Complaints Officer
            <br />
            CHFinance
            <br />
            2nd Floor Oakhill Court
            <br />
            171 Bury New Road
            <br />
            Prestwich
            <br />
            Manchester
            <br />
            M25 9ND
          </p>
          <p>
            All complaints received by letter should be forwarded to the
            Complaints Officer for a written response.
          </p>

          <h2>Complaints received by email</h2>
          <p>
            Email:{" "}
            <a href="mailto:complaints@chfinance.co.uk">
              complaints@chfinance.co.uk
            </a>
          </p>
          <p>
            All complaints received by email should be forwarded to the
            complaints email{" "}
            <a href="mailto:complaints@chfinance.co.uk">
              complaints@chfinance.co.uk
            </a>{" "}
            and flagged as high importance.
          </p>

          <h2>Complaints received by telephone</h2>
          <p>Telephone Number: 0161 413 3519</p>
          <p>
            All complaints received by telephone should be handled with courtesy.
            If there is any doubt if the call is a complaint, the customer
            should be asked if they wish their call to be logged as a complaint.
            Details should then be forwarded to{" "}
            <a href="mailto:complaints@chfinance.co.uk">
              complaints@chfinance.co.uk
            </a>{" "}
            or to the CHFinance Complaints Officer.
          </p>

          <p>All complaints are recorded on our Complaints Log.</p>

          <p>
            On receipt of a complaint the complainant will be sent a prompt
            written acknowledgement providing early reassurance that the
            complaint has been received and is being dealt with. The complainant
            will be kept informed thereafter of the progress of the measures
            being taken for the complaint&apos;s resolution.
          </p>

          <p>
            We will aim to send the complainant a written statement providing
            the findings within 4 weeks of the date of receipt of the complaint.
          </p>

          <p>
            If the complaint is more complex, an explanatory holding response
            will be sent advising that additional time is required to
            investigate the complaint. The CHFinance Complaints Officer will
            provide a final response within 8 weeks, or a further explanatory
            letter advising of the details for the further delay. This letter
            will inform the complainant that they are entitled to contact the
            Financial Ombudsman Service (FOS) if they are not satisfied with the
            delay.
          </p>

          <p>
            Where complaints are resolved by close of the third business day, a
            summary resolution communication will be sent promptly to the
            complainant.
          </p>

          <p>
            Once the complaint has been investigated to a standard we are
            satisfied with, the findings will be reported back to the
            complainant and the complainant&apos;s response retained. We will
            keep a record of the complaint for 5 years.
          </p>

          <p>
            The final response letter sent to the customer will give the address
            and other contact details of FOS and include a copy of the FOS&apos;s
            standard explanatory leaflet so that in the event that the
            complainant is unsatisfied with the resolution of the complaint,
            they have the opportunity to pursue the complaint via the FOS scheme
            within six months of the date of the final email or letter received
            from us.
          </p>

          <p>
            For further information on the FOS please see:{" "}
            <a
              href="https://www.financial-ombudsman.org.uk/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.financial-ombudsman.org.uk/
            </a>
          </p>

          <p>
            The Financial Ombudsman Service
            <br />
            Exchange Tower
            <br />
            London
            <br />
            E14 9SR
          </p>

          <p>
            <strong>Note:</strong> The Ombudsman will not consider a case which
            has not first been referred to the Firm in the first instance.
          </p>

          <p>
            All complaints, whether considered significant or minor, will be
            reported to the CHFinance Complaints Officer (
            <a href="mailto:complaints@chfinance.co.uk">
              complaints@chfinance.co.uk
            </a>
            ) and logged using the Complaints Log. The record will detail the
            Firm&apos;s response and any action taken. Action taken will be
            recorded on the Complaints Rectification Log. This will be monitored
            and will provide Management Information where any recurring issues
            will be identified and resolved.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
