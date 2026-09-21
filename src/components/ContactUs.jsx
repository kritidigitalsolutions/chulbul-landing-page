import { useState, useEffect } from 'react';
import {
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <main className="simple-page contact-us-page">
      <div className="container contact-container">
        {/* Breadcrumb Navigation */}
        <div className="privacy-breadcrumb">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <span className="breadcrumb-divider">/</span>
          <span className="current-crumb">Contact Us</span>
        </div>

        {/* Page Hero Header */}
        <header className="about-header">
          <div className="about-badge">
            <Sparkles size={16} />
            <span>Get In Touch</span>
          </div>
          <h1>We’re Here to Help You Stream Seamlessly</h1>
          <p className="about-lead">
            Have questions about your subscription, technical support, content suggestions, or partnership queries? Reach out to us.
          </p>
        </header>

        <div className="contact-main-grid">
          {/* Left Column: Contact Information Cards */}
          <div className="contact-info-column">
            {/* Address Card */}
            <div className="contact-info-card highlighted-address-card">
              <div className="contact-card-icon-wrap">
                <MapPin size={26} />
              </div>
              <div>
                <span className="contact-card-tag">Corporate &amp; Registered Office</span>
                <h3>Our Location</h3>
                <p className="contact-address-text">
                  <strong>Chulbul Play</strong><br />
                  Shastri Nagar, Goregaon West,<br />
                  Mumbai - 400104,<br />
                  Maharashtra, India
                </p>
              </div>
            </div>

            {/* Email Support Card */}
            <div className="contact-info-card">
              <div className="contact-card-icon-wrap">
                <Mail size={24} />
              </div>
              <div>
                <span className="contact-card-tag">24x7 Customer Support</span>
                <h3>Email Us</h3>
                <p>
                  General &amp; Technical Support:<br />
                  <a href="mailto:support@chulbulplay.in" className="contact-direct-link">
                    support@chulbulplay.in
                  </a>
                </p>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="contact-info-card">
              <div className="contact-card-icon-wrap">
                <Clock size={24} />
              </div>
              <div>
                <span className="contact-card-tag">Helpdesk Timings</span>
                <h3>Operating Hours</h3>
                <p>
                  Monday – Saturday: <strong>9:00 AM – 8:00 PM IST</strong><br />
                  Sunday: <strong>10:00 AM – 4:00 PM IST</strong><br />
                  <small className="text-muted">Streaming &amp; app access is available 24x7x365.</small>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Send Message Form */}
          <div className="contact-form-column">
            <div className="contact-form-card">
              <div className="contact-form-header">
                <span className="eyebrow">
                  <span className="eyebrow-dot" /> Send a message
                </span>
                <h2>Let’s Start a Conversation</h2>
                <p>Fill out the form below and our customer support team will get back to you within 24 hours.</p>
              </div>

              {submitted ? (
                <div className="contact-success-state">
                  <CheckCircle2 size={54} className="text-success-glow" />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting Chulbul Play. Our support team will review your query and reply to your email shortly.</p>
                  <button
                    className="button button-primary"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="styled-contact-form">
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="contact-name">Full Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email">Email Address *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="contact-phone">Phone / Mobile (Optional)</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-subject">Topic / Subject *</label>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        placeholder="Subscription, Playback, Content..."
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Your Message *</label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      placeholder="Please describe how we can assist you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="button button-primary contact-submit-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      'Sending Message...'
                    ) : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
