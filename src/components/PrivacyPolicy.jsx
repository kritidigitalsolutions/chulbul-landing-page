import React, { useEffect } from 'react';
import { ShieldCheck, Lock, Eye, FileText, Mail, CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="simple-page privacy-page">
      <div className="container privacy-container">
        {/* Back Link & Breadcrumb */}
        <div className="privacy-breadcrumb">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <span className="breadcrumb-divider">/</span>
          <span className="current-crumb">Privacy Policy</span>
        </div>

        {/* Hero / Header */}
        <header className="privacy-header">
          <div className="privacy-badge">
            <ShieldCheck size={18} />
            <span>Privacy & Security</span>
          </div>
          <h1>Privacy Policy</h1>
          <p className="privacy-lead">
            This Privacy Policy applies to the services provided by <strong>Chulbul Play</strong> (&quot;Chulbul Play,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) through our website, mobile application, and related services (collectively, the &quot;Services&quot;). This Policy outlines how we collect, use, and protect your information when you use our Services.
          </p>
          <div className="privacy-meta-bar">
            <span>Effective Date: September 2024</span>
            <span>•</span>
            <span>Applicable to: Chulbul Play Web & App</span>
          </div>
        </header>

        {/* Quick Highlights Box */}
        <div className="privacy-highlights">
          <div className="highlight-card">
            <div className="highlight-icon">
              <Lock size={20} />
            </div>
            <div>
              <h4>Data Security</h4>
              <p>Standard encryption and security measures to protect your personal information.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <Eye size={20} />
            </div>
            <div>
              <h4>Transparency</h4>
              <p>Clear visibility into what data we collect and how it improves your streaming experience.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <FileText size={20} />
            </div>
            <div>
              <h4>Your Control</h4>
              <p>Full rights to manage preferences, cookies, and promotional communications anytime.</p>
            </div>
          </div>
        </div>

        {/* Policy Body Sections */}
        <div className="privacy-content-card">
          {/* Section 1 */}
          <section className="policy-section" id="info-we-collect">
            <div className="section-title-wrap">
              <span className="section-num">01</span>
              <h2>1. Information We Collect</h2>
            </div>
            <div className="policy-subsection">
              <h3>1.1. Personal Information</h3>
              <p>
                When you use our Services, we may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and payment information.
              </p>
            </div>
            <div className="policy-subsection">
              <h3>1.2. Non-Personal Information</h3>
              <p>
                We may also collect non-personal information automatically when you use our Services, including your IP address, device type, browser type, operating system, and usage data.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="policy-section" id="use-of-info">
            <div className="section-title-wrap">
              <span className="section-num">02</span>
              <h2>2. Use of Information</h2>
            </div>
            <p className="section-intro">
              2.1. We may use the information we collect for the following purposes:
            </p>
            <ul className="policy-list">
              <li>
                <CheckCircle2 size={17} className="list-icon" />
                <span>To provide and personalize our Services.</span>
              </li>
              <li>
                <CheckCircle2 size={17} className="list-icon" />
                <span>To process payments and fulfill orders.</span>
              </li>
              <li>
                <CheckCircle2 size={17} className="list-icon" />
                <span>To communicate with you about your account, orders, and promotions.</span>
              </li>
              <li>
                <CheckCircle2 size={17} className="list-icon" />
                <span>To analyze usage patterns and trends to improve our Services.</span>
              </li>
              <li>
                <CheckCircle2 size={17} className="list-icon" />
                <span>To comply with legal obligations and protect our rights.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="policy-section" id="data-sharing">
            <div className="section-title-wrap">
              <span className="section-num">03</span>
              <h2>3. Data Sharing</h2>
            </div>
            <div className="policy-subsection">
              <p>
                <strong>3.1.</strong> We may share your information with third-party service providers who assist us in operating our Services, such as payment processors and customer support providers. We require these service providers to use your information only for the purposes of providing services to us and to maintain the confidentiality and security of your information.
              </p>
            </div>
            <div className="policy-subsection">
              <p>
                <strong>3.2.</strong> We may also disclose your information in response to lawful requests from government authorities, subpoenas, court orders, or other legal process, to protect our rights or property, or to enforce our terms of service.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="policy-section" id="data-security">
            <div className="section-title-wrap">
              <span className="section-num">04</span>
              <h2>4. Data Security</h2>
            </div>
            <p>
              <strong>4.1.</strong> We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 5 */}
          <section className="policy-section" id="data-retention">
            <div className="section-title-wrap">
              <span className="section-num">05</span>
              <h2>5. Data Retention</h2>
            </div>
            <p>
              <strong>5.1.</strong> We retain your information for as long as necessary to fulfill the purposes for which it was collected, including to provide you with the Services, to comply with legal obligations, to resolve disputes, and to enforce our agreements.
            </p>
          </section>

          {/* Section 6 */}
          <section className="policy-section" id="your-choices">
            <div className="section-title-wrap">
              <span className="section-num">06</span>
              <h2>6. Your Choices</h2>
            </div>
            <div className="policy-subsection">
              <p>
                <strong>6.1.</strong> You may choose to opt out of receiving promotional communications from us by following the unsubscribe instructions provided in the communication or by contacting us directly.
              </p>
            </div>
            <div className="policy-subsection">
              <p>
                <strong>6.2.</strong> You may also choose to disable cookies or adjust your device settings to limit the collection of certain types of information.
              </p>
            </div>
          </section>

          {/* Consent and Key Legal Provisions */}
          <section className="policy-section policy-clauses-grid" id="consent-clauses">
            <div className="clause-card">
              <h3>Consent</h3>
              <p>
                When you provide us with personal information to complete a transaction or verify your credit card, you consent to our collecting and using it for that specific purpose only. By registering, opting in, or signing up, you agree to give us your consent to contact you.
              </p>
            </div>

            <div className="clause-card">
              <h3>Withdrawal of Consent</h3>
              <p>
                If you change your mind after opting in, you may withdraw your consent for us to contact you or for the continued collection, use, or disclosure of your information by emailing us at{' '}
                <a href="mailto:support@chulbulplay.in" className="policy-link">support@chulbulplay.in</a> or contacting us at the address provided on the website.
              </p>
            </div>

            <div className="clause-card">
              <h3>Disclosure</h3>
              <p>
                We may disclose your personal information if required by law or if you violate our Terms of Service.
              </p>
            </div>

            <div className="clause-card">
              <h3>Links</h3>
              <p>
                Clicking on links on our website may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.
              </p>
            </div>

            <div className="clause-card">
              <h3>Cookies</h3>
              <p>
                We use cookies to maintain session of users but do not use them to personally identify you on other websites.
              </p>
            </div>

            <div className="clause-card">
              <h3>Age of Consent</h3>
              <p>
                By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you have given us consent to allow any of your minor dependents to use this site.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="policy-section" id="policy-updates">
            <div className="section-title-wrap">
              <span className="section-num">07</span>
              <h2>7. Updates to this Policy</h2>
            </div>
            <p>
              <strong>7.1.</strong> We may update this Privacy Policy from time to time to reflect changes in our practices or to comply with legal requirements. We will notify you of any material changes by posting the updated Policy on our website or app.
            </p>
          </section>

          {/* Section 8 - Contact Us */}
          <section className="policy-section contact-policy-section" id="contact-us">
            <div className="section-title-wrap">
              <span className="section-num">08</span>
              <h2>8. Contact Us</h2>
            </div>
            <p>
              <strong>8.1.</strong> If you have any questions or concerns about our Privacy Policy or data practices, or if you would like to exercise your rights regarding your information, please contact us:
            </p>
            <div className="policy-contact-box">
              <div className="contact-box-item">
                <Mail size={22} className="contact-icon" />
                <div>
                  <span className="contact-label">Email Support</span>
                  <a href="mailto:support@chulbulplay.in" className="contact-value">support@chulbulplay.in</a>
                </div>
              </div>
              <div className="contact-box-item">
                <Mail size={22} className="contact-icon" />
                <div>
                  <span className="contact-label">General Inquiries</span>
                  <a href="mailto:hello@chulbulplay.com" className="contact-value">hello@chulbulplay.com</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
