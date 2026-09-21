import { Link } from 'react-router-dom';
import { ArrowUpRight, Camera, Mail, Play, Send, Video } from 'lucide-react';

export default function Footer() {
  return <footer className="site-footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/#hero" className="brand"><img src="/assets/logo/chulbul-play.png" alt="Chulbul Play" /><span>Chulbul <b>Play</b></span></Link>
          <p>Your colorful home for big stories, binge-worthy series and the next thing you cannot stop talking about.</p>
          <div className="socials"><a href="https://instagram.com" aria-label="Instagram"><Camera size={17} /></a><a href="https://youtube.com" aria-label="YouTube"><Video size={17} /></a><a href="mailto:hello@chulbulplay.com" aria-label="Email"><Mail size={17} /></a></div>
        </div>
        <div className="footer-col"><h4>Explore</h4><Link to="/#trending">Trending now</Link><Link to="/#categories">Categories</Link><Link to="/#originals">Chulbul Originals</Link><Link to="/#download">Get the app</Link></div>
        <div className="footer-col"><h4>Company</h4><Link to="/about">About us</Link><Link to="/contact">Contact us</Link><Link to="/privacy-policy">Privacy policy</Link><Link to="/terms-and-conditions">Terms & conditions</Link><Link to="/refund-policy">Refund policy</Link><Link to="/delete-account">Delete account</Link></div>
        <div className="footer-newsletter"><h4>Stay in the loop</h4><p>New drops, recommendations and a little fun in your inbox.</p><form onSubmit={(event) => event.preventDefault()}><input type="email" placeholder="Your email address" aria-label="Your email address" /><button className="icon-button button-primary" aria-label="Subscribe"><Send size={17} /></button></form></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Chulbul Play. All rights reserved.</span><span>Made for movie nights <Play size={12} fill="currentColor" /></span><a href="#hero" className="back-top">Back to top <ArrowUpRight size={15} /></a></div>
    </div>
  </footer>;
}
