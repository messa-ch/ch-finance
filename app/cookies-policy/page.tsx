// app/cookies-policy/page.tsx
import PublicHeader from "@/components/PublicHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Our Cookies Policy · CHFinance",
};

export default function CookiesPolicyPage() {
  return (
    <main className="page">
      <PublicHeader />

      <section className="section section-white">
        <div className="container" style={{ maxWidth: "820px" }}>
          <h1 className="section-title" style={{ marginBottom: "2rem" }}>
            Our Cookies Policy
          </h1>

          <div className="cookies-content">
            <p>
              We use cookies and similar technologies on this responsive
              website.
            </p>

            <p>
              Cookies are text files containing small amounts of information
              which your computer or mobile device downloads when you visit a
              website. When you return to websites – or visit websites that use
              the same cookies – they recognise these cookies and, therefore,
              your browsing device.
            </p>

            <p>
              We use cookies to do many different things, including, but not
              limited to, helping you navigate through the website more
              quickly, remembering your preferences and improving how the
              website works for you.
            </p>

            <p>
              By visiting our website, we use these details to improve your use
              of our website by adjusting the way you view the website to the
              device you are using to access the website. When you visit our
              website from any device (desktop, tablet, or mobile), we collect
              information about your use of this site, such as information about
              the device or browser you use to access the site (including device
              type, operating system, screen resolution etc.), the way you
              interact with this site, and the IP address your device connects
              from.
            </p>

            <p>
              You may not be able to initiate or complete some activities within
              our website unless these cookies are installed.
            </p>

            <p>We use cookies to:</p>
            <ol>
              <li>
                Ensure your security and privacy when using the secure sections
                of our website.
              </li>
              <li>
                Store login details for the secure sections of our website.
              </li>
              <li>
                Temporarily store input information in our forms and
                calculators.
              </li>
              <li>
                Understand how you use our website so we can identify ways to
                improve.
              </li>
            </ol>

            <p>
              On the other hand, there are several types of cookies which are
              used with our website, including but not limited to:
            </p>

            <ol>
              <li>
                <strong>Session cookies</strong> – these are stored on your
                computer or device (e.g. mobile phone) while you are active in
                your current session. Once you close your browser session,
                cookies are deleted.
              </li>
              <li>
                <strong>Persistent cookies / permanent / stored cookies</strong>{" "}
                – these are stored on your computer or device until they expire
                or until you delete cookies in your browser options. They
                usually store preferences that dictate how our website appears
                when you visit it.
              </li>
              <li>
                <strong>Performance cookies</strong> – these cookies collect
                information about how many visitors use a website and which
                parts of the website are viewed the most. They help us see how
                you use our website and if you encounter any error messages. In
                most cases, the information collected by these cookies is
                anonymous.
              </li>
              <li>
                <strong>Functionality and profile cookies</strong> – these
                remember the choices you make when using the website (such as
                your username, language, or region) and help us tailor the
                website for you and remember the choices you make when using the
                website.
              </li>
            </ol>

            <h2>Managing cookies</h2>
            <p>
              You can control and manage cookies in various ways. Please remember
              that removing or blocking cookies can impact your experience and
              parts of this website may no longer be fully accessible.
            </p>
            <p>
              Most browsers will allow you to see what cookies you have and
              delete them on an individual basis, block third-party cookies or
              cookies from particular sites, accept all cookies, or reject all
              cookies. For more information on how to manage cookies in your
              browser, please refer to your browser’s help section.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this Cookies Policy from time to time to reflect
              changes in technology, law or our services. Any changes we may
              make to our Cookies Policy in the future will be posted on this
              page, and where appropriate, notified to you by email.
            </p>

            <p>
              If you have any questions about how we use cookies, please contact
              us using the details on our contact page.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
