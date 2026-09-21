import React, { useEffect, useState } from 'react';
import {
  UserX,
  Mail,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Clock,
  CheckCircle2,
  ArrowLeft,
  Send,
  HelpCircle,
  Database,
  Trash2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DeleteAccount() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    identifier: '',
    reason: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:support@chulbulplay.in?subject=Account%20Deletion%20Request%20-%20${encodeURIComponent(formData.fullName)}&body=Hello%20Chulbul%20Play%20Support%20Team%2C%0A%0AI%20would%20like%20to%20request%20the%20permanent%20deletion%20of%20my%20Chulbul%20Play%20account%20and%20associated%20data.%0A%0ADetails%3A%0A-%20Full%20Name%3A%20${encodeURIComponent(formData.fullName)}%0A-%20Registered%20Email%20%2F%20Phone%3A%20${encodeURIComponent(formData.identifier)}%0A-%20Reason%20for%20Deletion%3A%20${encodeURIComponent(formData.reason || 'Not specified')}%0A%0APlease%20confirm%20once%20the%20request%20is%20processed.%0A%0AThank%20you.`;
    window.location.href = mailtoUrl;
    setFormSent(true);
  };

  return (
    <main className="simple-page privacy-page">
      <div className="container privacy-container">
        {/* Breadcrumb Navigation */}
        <div className="privacy-breadcrumb">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <span className="breadcrumb-divider">/</span>
          <span className="current-crumb">Delete Account</span>
        </div>

        {/* Page Header */}
        <header className="privacy-header">
          <div className="privacy-badge" style={{ color: '#d91b5c', borderColor: 'rgba(217, 27, 92, 0.2)', background: '#fff0f5' }}>
            <UserX size={18} />
            <span>Account Management &amp; Privacy Rights</span>
          </div>
          <h1>Delete Account Request</h1>
          <p className="privacy-lead">
            <strong>Chulbul Play</strong> users can request permanent deletion of their account and related personal information by contacting our support team. This page explains how to submit a delete account request and what happens after your request is received.
          </p>
          <div className="privacy-meta-bar">
            <span>Applicable to: Chulbul Play Android, iOS &amp; Web</span>
            <span>•</span>
            <span>Support: support@chulbulplay.in</span>
          </div>
        </header>

        {/* Quick Highlights Cards */}
        <div className="privacy-highlights">
          <div className="highlight-card">
            <div className="highlight-icon" style={{ background: '#fff0f5', color: '#d91b5c' }}>
              <Trash2 size={20} />
            </div>
            <div>
              <h4>Permanent Deletion</h4>
              <p>Irreversible removal or anonymization of your profile and personal information.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4>Ownership Verification</h4>
              <p>Security verification from your registered email before processing for safety.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <Database size={20} />
            </div>
            <div>
              <h4>Legal Retention</h4>
              <p>Statutory transaction, billing and security records retained as required by law.</p>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="privacy-content-card">
          {/* Section 1: How to Request Account Deletion */}
          <section className="policy-section" id="how-to-request">
            <div className="section-title-wrap">
              <span className="section-num">01</span>
              <h2>How to Request Account Deletion</h2>
            </div>
            <p>
              To delete your <strong>Chulbul Play</strong> account, please send an email to{' '}
              <a href="mailto:support@chulbulplay.in" className="policy-link">
                support@chulbulplay.in
              </a>{' '}
              from the email address linked to your account.
            </p>
            <p className="section-intro">
              Please include the following details in your request:
            </p>
            <ul className="policy-list">
              <li>
                <CheckCircle2 size={17} className="list-icon" />
                <span>Your full name.</span>
              </li>
              <li>
                <CheckCircle2 size={17} className="list-icon" />
                <span>Your registered email address or mobile number.</span>
              </li>
              <li>
                <CheckCircle2 size={17} className="list-icon" />
                <span>A clear request to delete your Chulbul Play account.</span>
              </li>
            </ul>

            {/* Quick Email Launcher Button */}
            <div style={{ marginTop: '24px' }}>
              <a
                href="mailto:support@chulbulplay.in?subject=Request%20for%20Chulbul%20Play%20Account%20Deletion&body=Hello%20Chulbul%20Play%20Support%2C%0A%0AI%20would%20like%20to%20request%20the%20permanent%20deletion%20of%20my%20Chulbul%20Play%20account%20and%20associated%20data.%0A%0AFull%20Name%3A%20%0ARegistered%20Email%20%2F%20Phone%3A%20%0A%0APlease%20process%20my%20request.%0A%0AThank%20you."
                className="button button-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px' }}
              >
                <Mail size={18} /> Compose Deletion Email
              </a>
            </div>
          </section>

          {/* Section 2: What Happens Next */}
          <section className="policy-section" id="what-happens-next">
            <div className="section-title-wrap">
              <span className="section-num">02</span>
              <h2>What Happens Next</h2>
            </div>
            <p>
              After we receive your request, we may contact you to verify account ownership before processing deletion. Once verified, we will delete or anonymize personal information associated with your account, subject to applicable legal, security, fraud-prevention, and accounting requirements.
            </p>
          </section>

          {/* Section 3: Data We May Retain */}
          <section className="policy-section" id="data-we-may-retain">
            <div className="section-title-wrap">
              <span className="section-num">03</span>
              <h2>Data We May Retain</h2>
            </div>
            <p>
              Some records may be retained where required by law or for legitimate business purposes, including transaction records, payment history, dispute records, security logs, or information needed to comply with legal obligations.
            </p>
          </section>

          {/* Section 4: Subscriptions and Access */}
          <section className="policy-section" id="subscriptions-and-access">
            <div className="section-title-wrap">
              <span className="section-num">04</span>
              <h2>Subscriptions and Access</h2>
            </div>
            <p>
              Deleting your account may remove access to your profile, watch history, preferences, subscriptions, and app services.
            </p>
            <div className="policy-alert-box">
              <AlertTriangle size={20} className="alert-icon" />
              <div>
                <strong>Third-Party Subscription Reminder:</strong>
                <p>
                  If you have an active subscription through a third-party app store (such as Google Play or Apple App Store) or payment provider, you may need to cancel it separately through that provider to prevent recurring charges.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Direct Deletion Request Form */}
          <section className="policy-section" id="submit-form">
            <div className="section-title-wrap">
              <span className="section-num">05</span>
              <h2>Instant Request Submission</h2>
            </div>
            <p>
              You can also fill out the quick request details below to open your email client pre-filled:
            </p>
            <form className="contact-form" onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
              <label>
                Full Name
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </label>
              <label>
                Registered Email or Mobile Number
                <input
                  type="text"
                  required
                  placeholder="e.g. you@example.com or +91 9876543210"
                  value={formData.identifier}
                  onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                />
              </label>
              <label>
                Reason for Account Deletion (Optional)
                <textarea
                  rows="3"
                  placeholder="Let us know if there's anything we could have done better..."
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                />
              </label>
              {formSent && (
                <p className="form-success">
                  <CheckCircle2 size={18} /> Request template prepared! Check your email client to send.
                </p>
              )}
              <button className="button button-primary" type="submit" style={{ alignSelf: 'flex-start' }}>
                <Send size={16} /> Submit Deletion Request
              </button>
            </form>
          </section>

          {/* Section 6: Contact Us */}
          <section className="policy-section contact-policy-section" id="contact-us">
            <div className="section-title-wrap">
              <span className="section-num">06</span>
              <h2>Contact Us</h2>
            </div>
            <p>
              If you have questions about account deletion or privacy rights, contact us at:
            </p>
            <div className="policy-contact-box">
              <div className="contact-box-item">
                <Mail size={22} className="contact-icon" />
                <div>
                  <span className="contact-label">Account Support</span>
                  <a href="mailto:support@chulbulplay.in" className="contact-value">support@chulbulplay.in</a>
                </div>
              </div>
              <div className="contact-box-item">
                <Mail size={22} className="contact-icon" />
                <div>
                  <span className="contact-label">General Contact</span>
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
