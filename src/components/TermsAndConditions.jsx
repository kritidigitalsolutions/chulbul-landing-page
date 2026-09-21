import React, { useEffect } from 'react';
import {
  FileCheck,
  ShieldAlert,
  Scale,
  CreditCard,
  Tv,
  AlertTriangle,
  Mail,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
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
          <span className="current-crumb">Terms & Conditions</span>
        </div>

        {/* Page Header */}
        <header className="privacy-header">
          <div className="privacy-badge">
            <FileCheck size={18} />
            <span>Legal & Terms of Use</span>
          </div>
          <h1>Terms & Conditions</h1>
          <p className="privacy-lead">
            Chulbul Play provides a personalized subscription service that allows our members to access Films, Short Films, Web Series and TV shows (&quot;Content&quot;) streamed over the Internet to certain Internet-connected devices (&quot;Chulbul Play ready devices&quot;). These Terms of Use govern your use of our service.
          </p>
          <div className="privacy-meta-bar">
            <span>Effective Date: September 2024</span>
            <span>•</span>
            <span>Governing Law: Laws of India &amp; Jurisdiction of Maharashtra</span>
          </div>
        </header>

        {/* Highlights Cards */}
        <div className="privacy-highlights">
          <div className="highlight-card">
            <div className="highlight-icon">
              <Tv size={20} />
            </div>
            <div>
              <h4>Personal Streaming</h4>
              <p>Non-commercial access to movies, web series, and originals for your personal household.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <Scale size={20} />
            </div>
            <div>
              <h4>Intellectual Property</h4>
              <p>Content is protected by Indian and International copyright and trademark laws.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <CreditCard size={20} />
            </div>
            <div>
              <h4>Transparent Billing</h4>
              <p>Flexible subscription packages, clear renewals, and standard non-refundable terms.</p>
            </div>
          </div>
        </div>

        {/* Terms Content Container */}
        <div className="privacy-content-card">
          {/* Preamble / General Service Overview */}
          <section className="policy-section">
            <div className="section-title-wrap">
              <span className="section-num">00</span>
              <h2>Service Overview &amp; Proprietary Rights</h2>
            </div>
            <p>
              As used in these Terms of Use, &quot;Chulbul Play service&quot;, &quot;our service&quot; or &quot;the service&quot; means the personalized service provided by Chulbul Play for discovering and watching Chulbul Play content, including all features and functionalities, recommendations and reviews, the website, and user interfaces, as well as all content and software associated with our service.
            </p>
            <p>
              The content on Chulbul Play and all copyrights, patents, trademarks, service marks, trade names and all other intellectual property rights therein are owned by Chulbul Play and/or its licensors or group companies and are protected by applicable Indian and international copyright and other intellectual property laws. You acknowledge, understand and agree that you shall not have, nor be entitled to claim, any rights in and to the Website/ Application content/ services and/or any portion thereof.
            </p>
            <p>
              You agree not to copy, reproduce, duplicate, stream, capture, archive, upload, download, publish, broadcast, sell, resell, edit, modify, manipulate, translate, decompile, disassemble, reverse engineer or exploit for any purposes the content or any portion of Website/ Application, including, without limitation, the Content and the Marks, except as authorized by these TERMS or as otherwise authorized in writing by Chulbul Play.
            </p>
            <p>
              In addition, You are strictly prohibited from creating derivative works, or materials that otherwise are derived from or based on in any way the Content and the Marks, including montages, mash-ups and similar videos, wallpaper, desktop themes, greeting cards, and merchandise, except as authorized by these TERMS or as otherwise authorized in writing by Chulbul Play.
            </p>
            <p>
              You must abide by all copyright notices, information, and restrictions contained in or associated with any Content. You must not remove, alter, interfere with, or circumvent any copyright, trademark, or other proprietary notices marked on the Content or any digital rights management mechanism, device or other content protection or access control measure (including, without limitation, Geo-filtering and/or encryption) associated with the Content. You hereby agree that all intellectual property rights, title and interest in the user-generated content published or generated on Website/ Application by You shall vest with Chulbul Play.
            </p>
          </section>

          {/* 1. AGE */}
          <section className="policy-section" id="term-age">
            <div className="section-title-wrap">
              <span className="section-num">01</span>
              <h2>1. Age &amp; Viewer Discretion</h2>
            </div>
            <p>
              Unless otherwise specified, Chulbul Play is available for individuals who have attained the age of majority in their jurisdiction. In the case of Indian jurisdiction, this service is restricted to Users below the age of 18 also referred to as minors. If You are under the relevant age of majority in Your jurisdiction, You may only access the Website/ Application and avail the Services only in accordance with applicable law which enables a minor in your jurisdiction to access such a service. In India, by browsing or downloading and/or installing and/or using Chulbul Play, You represent and warrant that YOU are 18 years of age or older and in case YOU are less than 18 years of age, You have taken consent of Your parent or guardian.
            </p>
            <div className="policy-alert-box">
              <AlertTriangle size={20} className="alert-icon" />
              <div>
                <strong>Viewer Discretion &amp; Parental Guidance:</strong>
                <p>
                  SOME CONTENT OFFERED ON THE SITE MAY NOT BE SUITABLE FOR SOME VIEWERS AND THEREFORE VIEWER&apos;S DISCRETION IS ADVISED. ALSO, SOME CONTENT OFFERED ON THE SITE MAY NOT BE APPROPRIATE FOR VIEWERSHIP BY MINORS. PARENTS AND/OR LEGAL GUARDIANS ARE ADVISED TO EXERCISE DISCRETION BEFORE ALLOWING THEIR CHILDREN AND/OR WARDS TO ACCESS CONTENT ON THIS WEBSITE.
                </p>
              </div>
            </div>
          </section>

          {/* 2. PERSONAL USE */}
          <section className="policy-section" id="term-personal-use">
            <div className="section-title-wrap">
              <span className="section-num">02</span>
              <h2>2. Personal Use</h2>
            </div>
            <p>
              The Chulbul Play service and any content viewed through the service are for your personal and non-commercial use only and may not be shared with individuals beyond your household. During your Chulbul Play membership we grant you a limited, non-exclusive, non-transferable right to access the Chulbul Play service and view Chulbul Play content. Except for the foregoing, no right, title or interest shall be transferred to you.
            </p>
            <p>
              You agree not to use the service for public performances. You further agree not to use our packages for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction including but not limited to copyright laws. You must not transmit any worms or viruses or any code of a destructive nature. A breach or violation of any of the Terms will result in immediate termination of your Services and further actions and remedies as provided in law. Chulbul Play shall have the discretion to make certain or all Content that is a part of the Subscription available to You on either one or limited number of end user device concurrently.
            </p>
          </section>

          {/* 3. MEMBERSHIP */}
          <section className="policy-section" id="term-membership">
            <div className="section-title-wrap">
              <span className="section-num">03</span>
              <h2>3. Membership &amp; Device Compatibility</h2>
            </div>
            <p>
              You will be solely responsible for obtaining and maintaining the Device and Internet connection needed in order to access and use Chulbul Play and paying for all such charges in relation thereto. Internet charges will depend on the plan subscribed by You from the internet service provider.
            </p>
            <p>
              Chulbul Play is compatible on selected operating systems and specific versions and Device(s). The download procedure of the Application shall be subject to the process specified by the operating system of Your Device(s). You need to have a Device connected with Internet for download of Chulbul Play Application to begin and complete.
            </p>
            <p>
              Chulbul Play shall not be responsible in case of any fluctuation in the Internet connection speed leading to corruption of Application file download or any delayed or defective download of the Application on Your Device(s). Chulbul Play may, at its sole discretion, make bug fixes, updates for the installed Application. In the event Chulbul Play has upgraded the Application or any features thereof, You will be required to update Your Device in order to make the Device compatible with such upgrades. Chulbul Play shall not be responsible or liable to You in the event You are unable to access Chulbul Play or view the Content on Chulbul Play due to Your failure to upgrade Your Device.
            </p>
          </section>

          {/* 4. REGISTRATION */}
          <section className="policy-section" id="term-registration">
            <div className="section-title-wrap">
              <span className="section-num">04</span>
              <h2>4. Registration &amp; Account Security</h2>
            </div>
            <p>
              To register for the Chulbul Play Website/ Application, You shall be required to open an account by completing the registration process by providing us with your current, complete and accurate information as prompted by the applicable registration form; You shall also choose a password and a user name.
            </p>
            <p>
              Chulbul Play reserves the right to suspend or terminate Your registration as Registered User without assigning any reason (including for provision of inaccurate, not current or incomplete information during the registration process or thereafter). As a Registered User, You shall be responsible for safeguarding Your password and for all transactions undertaken using Your Username and password. You agree not to disclose Your password to any third party and to take sole responsibility for any activities or actions under Your account, whether or not You have authorized such activities or actions.
            </p>
            <p>
              In particular, as a parent or legal guardian, you acknowledge and assume sole responsibility to ensure that content which is meant for mature audiences, i.e., above the age of majority, is not accessed by children. Hence, you may not share your log in credentials with your children. It is Your sole responsibility to change Your password immediately if You believe that Your password has been compromised. Chulbul Play will not be responsible for any financial loss, inconvenience or mental agony resulting from misuse of Your Username and password in any circumstances. You expressly agree to absolve Chulbul Play and/or the Chulbul Play Website/ Application of any responsibility/ liability in this regard. We reserve the right to refuse service to anyone for any reason at any time.
            </p>
          </section>

          {/* 5. BILLING AND ACCOUNT INFORMATION */}
          <section className="policy-section" id="term-billing">
            <div className="section-title-wrap">
              <span className="section-num">05</span>
              <h2>5. Billing and Account Information</h2>
            </div>
            <p>
              By subscribing to Chulbul Play, you are expressly agreeing that Chulbul Play is authorized to charge you subscription fee as per your selected plan, any other fees for additional services you may purchase, and any applicable taxes in connection with your use of Chulbul Play&apos;s Service through any such payment method/ instrument including but not limited to credit/debit card, net banking or other payment method/ instrument accepted by Chulbul Play (&quot;Payment Method&quot;) that you have provided.
            </p>
            <p>
              The Payment Methods will differ from platform to platform (operating systems). The length of the Billing cycle will depend on the type of Subscription that you choose when you sign up for services. The Subscription Fee will be billed at the beginning of Your Subscription membership and on each subsequent renewal (as per the Subscription plan chosen by You) unless and until You cancel Your Subscription or the Subscription is otherwise suspended or discontinued pursuant to these Terms.
            </p>
            <p>
              In the event you desire to discontinue your subscription, you may contact us at <a href="mailto:support@chulbulplay.in" className="policy-link">support@chulbulplay.in</a> in order to obtain assistance in this regard. Depending on packages and/or value added services and the term of the proposed subscription, You will be required to make payment via a Payment Method provided by Chulbul Play for accessing and browsing Chulbul Play.
            </p>
            <p>
              If You wish to avail Chulbul Play after the expiry of the initial term of Subscribed Packages, You shall prior to the expiry of such term, recharge Your account with the then prevailing subscription charges. The Subscription or any information with respect to same is not transferable to any new or existing account under any circumstances.
            </p>
            <p>
              However, Any changes in the Subscription Plan opted by You is effective only after the expiry of the current Subscription period for which You have already been billed. Accordingly, the Subscription as per revised plan opted by You shall be effective only after the expiry of the then current Subscription period. You agree to provide current, complete and accurate account information for all subscriptions. You agree to promptly update your account and other information, including your email address and payment information, so that we can complete your transactions and contact you as needed.
            </p>
          </section>

          {/* 6. SUBSCRIPTION */}
          <section className="policy-section" id="term-subscription">
            <div className="section-title-wrap">
              <span className="section-num">06</span>
              <h2>6. Subscription &amp; Content Management</h2>
            </div>
            <p>
              To be able to view certain premium content (&quot;Premium Content&quot;), you will be required to subscribe to any one subscription plan (&quot;Plan&quot;) on Chulbul Play Website/ Application. Any Registered User can avail the Subscription Package (&quot;Subscription User&quot;). As Subscription User, you will be required to subscribe to Subscription Packages made available by Chulbul Play from time to time. The subscription to Subscription Packages may be subject to additional terms specified by Chulbul Play.
            </p>
            <p>
              Chulbul Play reserves the right to modify or discontinue Website/ Application at its sole discretion with or without notice to You. Chulbul Play shall not be liable to You or any third party in any manner, should Chulbul Play exercise its right to modify or discontinue Website/ Application. Further, Chulbul Play reserves the right, at any time, with or without notice and without any liability to change, terminate or otherwise amend the Subscription Plans, Subscription Fees for the Subscription, billing Cycle and any part of Chulbul Play Services at its sole discretion and at any time. Such amendments shall be effective upon posting on the site/app and your continued use of the services shall be deemed to be your acceptance of such amendments.
            </p>
            <p>
              Further, Chulbul Play reserves the right to change, supplement, alter or remove packaging and introduce base and add on packages and/or offer content on individual basis that is subject to subscription as it deems fit. Chulbul Play does not guarantee the availability of a specific content or minimum amount of content that is subject to subscription fees.
            </p>
            <p>
              Additionally, Chulbul Play shall have the right, but not the obligation, to refrain from providing to You any Content in the interest of national security or in the event of emergency/ war or similar situation or if the Content is anti-national, promotes political/ religious propaganda, is against public policy, is banned or restricted from being distributed under any applicable law or Chulbul Play otherwise determine that it is objectionable or is derogatory to any person or class of persons, hurts the religious sentiments of any religious group or infringes the privacy rights of any individual(s) or is not in the interest of Chulbul Play&apos;s subscribers or the general public.
            </p>
          </section>

          {/* 7. NO REFUNDS */}
          <section className="policy-section" id="term-refunds">
            <div className="section-title-wrap">
              <span className="section-num">07</span>
              <h2>7. No Refunds</h2>
            </div>
            <div className="clause-card" style={{ background: '#fff9f0', borderColor: 'rgba(255, 140, 0, 0.25)' }}>
              <p>
                <strong>The Subscription Fees once billed are non-refundable</strong> irrespective of whether the Subscription has been used by You or not and there are no refunds or credits for partially used periods. Following any cancellation, however, you will continue to have access to the service through the end of current billing period.
              </p>
            </div>
          </section>

          {/* 8. ACCOUNT ACCESS */}
          <section className="policy-section" id="term-account-access">
            <div className="section-title-wrap">
              <span className="section-num">08</span>
              <h2>8. Account Access &amp; Security</h2>
            </div>
            <p>
              The member who created the Chulbul Play account and whose Payment Method is charged (the &quot;Account Owner&quot;) has access and control over the Chulbul Play account and the Chulbul Play ready devices that are used to access our service and is responsible for any activity that occurs through the Chulbul Play account. To maintain control over the account and to prevent anyone from accessing the account (which would include information on viewing history for the account), the Account Owner should maintain control over the Chulbul Play ready devices that are used to access the service and not reveal the password or details of the Payment Method associated with the account to anyone.
            </p>
            <p>
              You are responsible for updating and maintaining the accuracy of the information you provide to us relating to your account. If Chulbul Play reasonably believes that an account and password is being misused in any manner, Chulbul Play reserves the right to cancel access rights immediately without notice, and block access to all users from that IP address.
            </p>
            <p>
              You agree to notify Chulbul Play immediately of any unauthorized use of your account or any other breach of security. Chulbul Play will not be liable for any loss that you may incur as a result of someone else using your password or account, however, you could be held liable for losses incurred by Chulbul Play or another party due to someone else using your account or password.
            </p>
          </section>

          {/* 9. AVAILABILITY & QUALITY */}
          <section className="policy-section" id="term-quality">
            <div className="section-title-wrap">
              <span className="section-num">09</span>
              <h2>9. Availability &amp; Quality</h2>
            </div>
            <p>
              The availability of content(s) to view through Website/ Application will change from time to time at the sole discretion of Chulbul Play. The quality of the display of the streaming video may vary from computer to computer, and device to device, and may be affected by a variety of factors, such as your location, the bandwidth available through and/ or speed of your internet connection, and/ or quality of user&apos;s hardware.
            </p>
            <p>
              You are responsible for all internet access charges. Please check with your internet provider for information on possible internet data usage charges. The time it takes to begin watching Chulbul Play content will vary based on a number of factors, including your location, available bandwidth at the time, the content you have selected and the configuration of your Chulbul Play ready device.
            </p>
          </section>

          {/* 10. RESTRICTIONS & PROHIBITED USES */}
          <section className="policy-section" id="term-restrictions">
            <div className="section-title-wrap">
              <span className="section-num">10</span>
              <h2>10. Restrictions &amp; Prohibited Uses</h2>
            </div>
            <p>
              You agree not to, either directly or through the use of any device, software, web-based service, or by other means, copy, download, archive, perform, display, upload, publish, transmit or retransmit the Content or create any work or material that is derived from or based on the Content, rent, lease, duplicate, sub-license, assign, pledge, loan, or resell the Content of Chulbul Play. You shall only use Chulbul Play on Device(s) that is under Your exclusive control and ownership.
            </p>
            <p>
              You shall not permit any third party to benefit from the use or functionality of Chulbul Play, either directly or via any facility management, time-sharing, service bureau or any other arrangement. If You transfer possession of any copy of Chulbul Play to another party, Your subscription of Chulbul Play shall automatically get terminated and further actions shall be taken against you as prescribed in law and legal remedies available.
            </p>
            <p>
              You shall not use any &quot;deep-link&quot;, &quot;page-scrape&quot;, &quot;robot&quot;, &quot;spider&quot; or other automatic device(s), program, algorithm or methodology, or any similar or equivalent manual process, to access, acquire, copy or monitor any portion of Chulbul Play or any Content, or in any way reproduce or circumvent the navigational structure or presentation of Chulbul Play or any Content.
            </p>
            <p>
              You shall not probe, scan or test the vulnerability of Chulbul Play website or any network connected to Chulbul Play nor breach the security or authentication measures on Chulbul Play or any network connected to Chulbul Play. You may not reverse look-up, trace or seek to trace any information on any other user of or visitor to Chulbul Play to its source.
            </p>
            <p>
              In addition to other prohibitions as set forth in the Terms of Service, you are strictly prohibited from using the site or its content:
            </p>
            <ul className="policy-list">
              <li><XCircle size={17} className="list-icon-prohibited" /> <span>i. For any unlawful purpose;</span></li>
              <li><XCircle size={17} className="list-icon-prohibited" /> <span>ii. To solicit others to perform or participate in any unlawful acts;</span></li>
              <li><XCircle size={17} className="list-icon-prohibited" /> <span>iii. To violate any international, federal, provincial or state regulations, rules, laws, or local ordinances;</span></li>
              <li><XCircle size={17} className="list-icon-prohibited" /> <span>iv. To infringe upon or violate our intellectual property rights or the intellectual property rights of others;</span></li>
              <li><XCircle size={17} className="list-icon-prohibited" /> <span>v. To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability;</span></li>
              <li><XCircle size={17} className="list-icon-prohibited" /> <span>vi. To submit false or misleading information;</span></li>
              <li><XCircle size={17} className="list-icon-prohibited" /> <span>vii. To upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service;</span></li>
              <li><XCircle size={17} className="list-icon-prohibited" /> <span>viii. To collect or track the personal information of others;</span></li>
              <li><XCircle size={17} className="list-icon-prohibited" /> <span>ix. To spam, phish, harm, pretext, spider, crawl, or scrape;</span></li>
              <li><XCircle size={17} className="list-icon-prohibited" /> <span>x. For any obscene or immoral purpose, or to interfere with or circumvent the security features of the Service.</span></li>
            </ul>
          </section>

          {/* 11. WARRANTIES AND LIMITATIONS ON LIABILITY */}
          <section className="policy-section" id="term-warranties">
            <div className="section-title-wrap">
              <span className="section-num">11</span>
              <h2>11. Warranties and Limitations on Liability</h2>
            </div>
            <p>
              You expressly agree that your use of the website/ application is at your sole risk. The Chulbul Play service, website, application and access to optional tools is provided &quot;as is&quot; and &quot;as available&quot; without warranty, representations or condition of any kind and without any endorsement. Its affiliates expressly disclaim any and all warranties of any kind, whether express or implied (including, without limitation, the implied warranties of merchantability, fitness for a particular use or purpose and non-infringement).
            </p>
            <p>
              Neither Chulbul Play nor any of its affiliates make any warranties or representations about the accuracy or completeness of content available on or through the Website/ Application or the content of any web sites, Personal Social Media or other internet or mobile resources linked to the Website/ Application and assume no liability or responsibility for any errors, mistakes, or inaccuracies of content.
            </p>
            <p>
              In no case shall Chulbul Play, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages.
            </p>
          </section>

          {/* 12. THIRD-PARTY LINKS */}
          <section className="policy-section" id="term-third-party">
            <div className="section-title-wrap">
              <span className="section-num">12</span>
              <h2>12. Third-Party Links</h2>
            </div>
            <p>
              You acknowledge and agree that certain content, products and services available via our Service may include materials from third-parties. Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.
            </p>
            <p>
              We are not liable for any harm or damages related to the subscriptions or use of services, resources, content, or any other transactions made in connection with any third-party websites.
            </p>
          </section>

          {/* 13. USER COMMENTS, FEEDBACK AND SUBMISSIONS */}
          <section className="policy-section" id="term-feedback">
            <div className="section-title-wrap">
              <span className="section-num">13</span>
              <h2>13. User Comments, Feedback &amp; Submissions</h2>
            </div>
            <p>
              If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans or other materials, whether online, by email, by postal mail, or otherwise (collectively, &apos;comments&apos;), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation:
            </p>
            <ul className="policy-list">
              <li><CheckCircle2 size={16} className="list-icon" /> <span>i. To maintain any comments in confidence;</span></li>
              <li><CheckCircle2 size={16} className="list-icon" /> <span>ii. To pay compensation for any comments; or</span></li>
              <li><CheckCircle2 size={16} className="list-icon" /> <span>iii. To respond to any comments.</span></li>
            </ul>
          </section>

          {/* 14. CHANGES TO TERMS */}
          <section className="policy-section" id="term-changes">
            <div className="section-title-wrap">
              <span className="section-num">14</span>
              <h2>14. Changes to Terms of Service</h2>
            </div>
            <p>
              You can review the most current version of the Terms of Service at any time at this page. We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.
            </p>
          </section>

          {/* 15. PRIVACY POLICY */}
          <section className="policy-section" id="term-privacy">
            <div className="section-title-wrap">
              <span className="section-num">15</span>
              <h2>15. Privacy Policy</h2>
            </div>
            <p>
              Your submission of personal information through the subscription is governed by our <Link to="/privacy-policy" className="policy-link">Privacy Policy</Link>.
            </p>
          </section>

          {/* 16. RELATIONSHIP */}
          <section className="policy-section" id="term-relationship">
            <div className="section-title-wrap">
              <span className="section-num">16</span>
              <h2>16. Relationship</h2>
            </div>
            <p>
              The relationship between Chulbul Play and You is on a principal-to-principal basis. You are in no way Chulbul Play&apos;s legal representative, partner or agent for any reason whatsoever.
            </p>
          </section>

          {/* 17. NOTICES */}
          <section className="policy-section" id="term-notices">
            <div className="section-title-wrap">
              <span className="section-num">17</span>
              <h2>17. Notices &amp; Complaints</h2>
            </div>
            <p>
              Any notices or other communications required will be in writing and emailed to Chulbul Play at <a href="mailto:support@chulbulplay.in" className="policy-link">support@chulbulplay.in</a>. For notices made by e-mail, the date of receipt will be deemed the date on which such notice is transmitted.
            </p>
            <p>
              In the event you have any complaints with respect to any Content on Chulbul Play, please write to us at <a href="mailto:support@chulbulplay.in" className="policy-link">support@chulbulplay.in</a> with details of the objectionable content and Your details including Your name, mobile number and such other details as may be requested by Us. Based on the complaint raised, we will take reasonable measures to resolve the issue.
            </p>
          </section>

          {/* 18. TERMINATION */}
          <section className="policy-section" id="term-termination">
            <div className="section-title-wrap">
              <span className="section-num">18</span>
              <h2>18. Termination</h2>
            </div>
            <p>
              Your Membership will continue until terminated. You may terminate these Terms of Service at any time by notifying us that You no longer wish to use our Services, or when you cease using our site/ App. As Subscription User, Your right to use Chulbul Play shall automatically terminate on the expiry of the term of the Subscription Package unless you renew it.
            </p>
            <p>
              Your right to use Chulbul Play shall automatically terminate if You violate these Terms of Use or any terms, rules or guidelines published in connection with Chulbul Play. Chulbul Play reserves the right, in its sole discretion, to suspend or terminate Your access to all or any part of Chulbul Play, for any reason, with or without notice. You agree that upon suspension or termination, no amount shall be refunded to You by Chulbul Play.
            </p>
          </section>

          {/* 19. COPYRIGHT INFRINGEMENT NOTIFICATION */}
          <section className="policy-section" id="term-copyright">
            <div className="section-title-wrap">
              <span className="section-num">19</span>
              <h2>19. Copyright Infringement Notification</h2>
            </div>
            <p>
              Chulbul Play respects the intellectual property rights of others. Upon proper notice, Chulbul Play will remove User Submissions (and any other Website/ Application content) that violates copyright law. As per the provisions of Information Technology Act, 2000 and any amendments made thereto along with the rules framed thereunder and the provisions of the Copyright Act, 1957 along with all the amendments made thereto and rules framed thereunder, Chulbul Play shall remove content upon receiving written notification of claimed copyright infringement on the Website/ Application and for processing such claims in accordance with such law.
            </p>
            <p>
              If you believe a work has been copied in a way that constitutes copyright infringement, please send an Infringement Notification containing:
            </p>
            <ul className="policy-list">
              <li><CheckCircle2 size={16} className="list-icon" /> <span>(i) Identification of the copyrighted work claimed to have been infringed;</span></li>
              <li><CheckCircle2 size={16} className="list-icon" /> <span>(ii) Identification of the claimed infringing material and information reasonably sufficient to permit Chulbul Play to locate the material;</span></li>
              <li><CheckCircle2 size={16} className="list-icon" /> <span>(iii) Information reasonably sufficient to contact You (address, phone number, and email);</span></li>
              <li><CheckCircle2 size={16} className="list-icon" /> <span>(iv) A statement that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;</span></li>
              <li><CheckCircle2 size={16} className="list-icon" /> <span>(v) A statement, made under penalty of perjury, that the notification information is accurate and that You are the copyright owner or authorized to act on the owner&apos;s behalf;</span></li>
              <li><CheckCircle2 size={16} className="list-icon" /> <span>(vi) Your physical signature.</span></li>
            </ul>
          </section>

          {/* 20. ERRORS & OMISSIONS */}
          <section className="policy-section" id="term-errors">
            <div className="section-title-wrap">
              <span className="section-num">20</span>
              <h2>20. Errors, Inaccuracies and Omissions</h2>
            </div>
            <p>
              Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, availability etc. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel subscription(s) if any information in the Service or on any related website is inaccurate at any time without prior notice, including after you have subscribed the packages.
            </p>
          </section>

          {/* 21. INDEMNIFICATION */}
          <section className="policy-section" id="term-indemnification">
            <div className="section-title-wrap">
              <span className="section-num">21</span>
              <h2>21. Indemnification</h2>
            </div>
            <p>
              You agree to indemnify, defend, and hold harmless, Chulbul Play, its parent, subsidiaries, affiliates, partners, officers, directors, consultants, agents, licensors, contractors, sub-contractors, service providers, suppliers, interns and employees (&quot;indemnified parties&quot;) from and against any and all claims, liabilities, damages, losses, costs, expenses, fees (including reasonable attorneys&apos; fees and costs) arising from:
            </p>
            <ul className="policy-list">
              <li><CheckCircle2 size={16} className="list-icon" /> <span>i. Any information or content you (or anyone using your account) submit, post, or transmit;</span></li>
              <li><CheckCircle2 size={16} className="list-icon" /> <span>ii. Your (or anyone using your account&apos;s) use of Chulbul Play;</span></li>
              <li><CheckCircle2 size={16} className="list-icon" /> <span>iii. Your violation of these terms; or</span></li>
              <li><CheckCircle2 size={16} className="list-icon" /> <span>iv. Your violation of any rights of any other person or entity.</span></li>
            </ul>
          </section>

          {/* 22. SEVERABILITY */}
          <section className="policy-section" id="term-severability">
            <div className="section-title-wrap">
              <span className="section-num">22</span>
              <h2>22. Severability</h2>
            </div>
            <p>
              In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and unenforceable portion shall be deemed to be severed from these Terms of Service; such determination shall not affect the validity and enforceability of any other remaining provisions.
            </p>
          </section>

          {/* 23. GOVERNING LAW */}
          <section className="policy-section" id="term-governing-law">
            <div className="section-title-wrap">
              <span className="section-num">23</span>
              <h2>23. Governing Law &amp; Jurisdiction</h2>
            </div>
            <p>
              These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the <strong>laws of India</strong> and jurisdiction of <strong>Maharashtra</strong>.
            </p>
          </section>

          {/* 24. ENTIRE AGREEMENT */}
          <section className="policy-section" id="term-agreement">
            <div className="section-title-wrap">
              <span className="section-num">24</span>
              <h2>24. Entire Agreement</h2>
            </div>
            <p>
              The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision. These Terms of Service and any policies or operating rules posted by us on this site or in respect to the service constitutes the entire agreement and understanding between You and Chulbul Play and govern Your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between You and Chulbul Play.
            </p>
          </section>

          {/* 25. CUSTOMER SUPPORT */}
          <section className="policy-section contact-policy-section" id="term-support">
            <div className="section-title-wrap">
              <span className="section-num">25</span>
              <h2>25. Customer Support</h2>
            </div>
            <p>
              To find more information about our service and its features or if you need assistance with your account, please write to us:
            </p>
            <div className="policy-contact-box">
              <div className="contact-box-item">
                <Mail size={22} className="contact-icon" />
                <div>
                  <span className="contact-label">Customer Support</span>
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
