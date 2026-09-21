import React, { useEffect } from 'react';
import {
  RefreshCw,
  AlertOctagon,
  CreditCard,
  Clock,
  ShieldAlert,
  Mail,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="simple-page privacy-page">
      <div className="container privacy-container">
        {/* Breadcrumb Navigation */}
        <div className="privacy-breadcrumb">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <span className="breadcrumb-divider">/</span>
          <span className="current-crumb">Refund Policy</span>
        </div>

        {/* Page Header */}
        <header className="privacy-header">
          <div className="privacy-badge">
            <RefreshCw size={18} />
            <span>Billing &amp; Refunds</span>
          </div>
          <h1>Refund Policy</h1>
          <p className="privacy-lead">
            This Refund Policy applies to all <strong>Chulbul Play</strong> Site/App platforms, including{' '}
            <a href="https://www.chulbulplay.in" target="_blank" rel="noreferrer" className="policy-link">
              www.chulbulplay.in
            </a>{' '}
            and other related Site/s or App/s, mobile applications, and online features (&quot;Services&quot;).
          </p>
          <div className="privacy-meta-bar">
            <span>Effective Date: September 2024</span>
            <span>•</span>
            <span>Applicable to: All Chulbul Play Subscription Plans</span>
          </div>
        </header>

        {/* Highlights Cards */}
        <div className="privacy-highlights">
          <div className="highlight-card">
            <div className="highlight-icon">
              <CreditCard size={20} />
            </div>
            <div>
              <h4>Non-Refundable Plans</h4>
              <p>Standard subscription fees are non-refundable once activated for any period.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <Clock size={20} />
            </div>
            <div>
              <h4>14-15 Days Glitch Window</h4>
              <p>Support for duplicate or failed transactions reported within 14-15 days.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <ShieldAlert size={20} />
            </div>
            <div>
              <h4>Direct Dispute Resolution</h4>
              <p>Contact support directly to prevent account suspension from bank chargebacks.</p>
            </div>
          </div>
        </div>

        {/* Policy Content Card */}
        <div className="privacy-content-card">
          {/* Section 1 */}
          <section className="policy-section" id="subscription-fees">
            <div className="section-title-wrap">
              <span className="section-num">01</span>
              <h2>1. Subscription Fees</h2>
            </div>
            <div className="policy-subsection">
              <p>
                <strong>1.1.</strong> Upon subscribing to our Services, you will have access to view packages and content according to your subscription plan. Please review the available packages and content before subscribing.
              </p>
            </div>
            <div className="policy-subsection">
              <p>
                <strong>1.2.</strong> All fees paid to Chulbul Play for subscription services are non-refundable. Once a subscription fee has been paid, no refunds will be provided, except as outlined in this Refund Policy or as required by applicable law.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="policy-section" id="technical-glitches">
            <div className="section-title-wrap">
              <span className="section-num">02</span>
              <h2>2. Technical Glitches &amp; Payment Errors</h2>
            </div>
            <div className="policy-subsection">
              <p>
                <strong>2.1.</strong> In the event of a technical glitch or failure during the online transaction process, where the transaction does not occur despite payment, the amount in process of transfer will automatically be refunded to your bank account through the Payment Gateway.
              </p>
            </div>

            <div className="policy-alert-box">
              <AlertTriangle size={20} className="alert-icon" />
              <div>
                <strong>Important Claim Timeline:</strong>
                <p>
                  To request a refund, customers must contact our customer support team within <strong>14-15 days</strong> of making the additional payment(s). Refund requests made after this period will not be entertained.
                </p>
              </div>
            </div>

            <div className="policy-subsection" style={{ marginTop: '16px' }}>
              <p>
                All refund requests will be subject to verification by our team to confirm the legitimacy of multiple payments. Once eligibility is confirmed, the refund will be processed within <strong>14-15 days</strong> from the date of the refund request. We will refund the excess payment amount made in the form of the original payment method.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="policy-section" id="chargebacks">
            <div className="section-title-wrap">
              <span className="section-num">03</span>
              <h2>3. Chargebacks &amp; Disputes</h2>
            </div>
            <div className="policy-subsection">
              <p>
                <strong>3.1.</strong> If Chulbul Play receives a chargeback or payment dispute from a credit card company or bank, your service and/or subscription will be suspended without notice.
              </p>
            </div>
            <div className="policy-subsection">
              <p>
                <strong>3.2.</strong> An applicable chargeback fee will be issued to recover fees passed on to us by the credit company. Additionally, any outstanding balances accrued as a result of the chargeback(s) must be paid in full before service is restored.
              </p>
            </div>
            <div className="policy-subsection">
              <p>
                <strong>3.3.</strong> Requesting a chargeback or opening any dispute for a valid charge from us is considered fraud and is not an appropriate or legal means of obtaining a refund.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="policy-section" id="contact-us">
            <div className="section-title-wrap">
              <span className="section-num">04</span>
              <h2>4. Contact Us</h2>
            </div>
            <p>
              <strong>4.1.</strong> If you have any questions or concerns regarding our refund policy or wish to address billing issues, please contact us at <a href="mailto:support@chulbulplay.in" className="policy-link">support@chulbulplay.in</a> before subscribing to our services.
            </p>
          </section>

          {/* Section 5 */}
          <section className="policy-section" id="acknowledgement">
            <div className="section-title-wrap">
              <span className="section-num">05</span>
              <h2>5. Acknowledgement</h2>
            </div>
            <p>
              <strong>5.1.</strong> By subscribing to our Services, you acknowledge that you have read, understood, and agreed to this Refund Policy. It is your responsibility to review and understand our refund policy prior to making any payments.
            </p>
          </section>

          {/* Section 6 */}
          <section className="policy-section" id="updates">
            <div className="section-title-wrap">
              <span className="section-num">06</span>
              <h2>6. Updates to Refund Policy</h2>
            </div>
            <p>
              <strong>6.1.</strong> Chulbul Play reserves the right to modify or update this Refund Policy at any time without prior notice. Any changes to the refund policy will be effective immediately upon posting on the Chulbul Play website or app.
            </p>
            <div className="clause-card" style={{ marginTop: '18px', background: '#faf8ff' }}>
              <p>
                <strong>Please note:</strong> Please ensure that you fully understand and agree to our Refund Policy before making any payments for our Services.
              </p>
            </div>
          </section>

          {/* Quick Support Box */}
          <section className="policy-section contact-policy-section" id="refund-support">
            <div className="section-title-wrap">
              <span className="section-num">Help</span>
              <h2>Billing &amp; Refund Assistance</h2>
            </div>
            <p>
              Need help with a transaction or duplicate billing issue? Reach out to our dedicated support team:
            </p>
            <div className="policy-contact-box">
              <div className="contact-box-item">
                <Mail size={22} className="contact-icon" />
                <div>
                  <span className="contact-label">Billing Support</span>
                  <a href="mailto:support@chulbulplay.in" className="contact-value">support@chulbulplay.in</a>
                </div>
              </div>
              <div className="contact-box-item">
                <Mail size={22} className="contact-icon" />
                <div>
                  <span className="contact-label">General Support</span>
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
