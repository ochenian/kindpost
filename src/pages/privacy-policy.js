import React from 'react'
import Layout from '../layouts/index'
import Link from 'gatsby-link'
import styled from 'styled-components'

const PrivacyPolicy = ({}) => {

  const List = styled.ul`
    list-style-type: '- ';
    list-style-position: outside;
    margin-left: 32px;
    font-size: 0.875rem;
    margin-bottom: 2rem;

    & a {
      color: blue;
      cursor: pointer;
    }

    & li {
      padding-left: 16px;
    }
  `
  const OrderedList = styled.ol`
    list-style: decimal;
    margin-left: 32px;
    margin-bottom: 2rem;
    font-size: 0.875rem;

    & a {
      color: blue;
      cursor: pointer;
    }

    & li {
      padding-left: 16px;
    }
  `

  return (
  <Layout site="kindpost" headerClass="Header light">
    <div className="legal-container">
      <h1>PRIVACY POLICY</h1>
      <section>
        <h3>Effective Date: September 7, 2020</h3>
        <p>
          Kindpost owns and operates this website http://www.kindpost.com (“Site”). This page hereby informs you
          of our policies regarding the collection, use, and disclosure of Personal Information (as that term is defined
          below) that we receive from users of the Site. We refer to these policies as our “Privacy Policy.”
        </p>

        <p>
          We use your Personal Information for operating, maintaining, and improving the Site and to share our
          latest updates (only with your authorization once you provide us with your Personal Information). Please
          read this Privacy Policy carefully before accessing and/or using any portion of the Site. By accessing and/or
          using any part of the Site, you agree to the collection and use of Personal Information in accordance with
          the privacy Policy.
        </p>

        <p>
          If you have not done so already, please also review our <Link to="/terms-and-conditions">Terms of Service</Link>,
          as they contain important information regarding your access to and use of the Site.
        </p>

        <h3>Information Collection</h3>
        <p>
          We collect information you give to use and information we get from your use of the Site, as more fully described below.
          We refer to this information as “Personal Information.”
        </p>

        <h3>Personally Identifiable Information</h3>
        <p>
          While you use the Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you.
          Personally identifiable information may include, but is not limited to, your name, email address, company name, role in the company, phone number,
          billing address, residential address, and business address.
        </p>

        <h3>Log Data; Advertising and Analytics</h3>
        <p>
          Like many site operators, we may collect information that your browser sends whenever you visit our Site (“Log Data”).
          We may also engage third-parties to serve advertisements on our behalf across the internet and to provide analytics services.
          These third-party entities may use cookies, web beacons, and other technologies to collect Log Data about your use of the Site.
          Log Data may include, but is not limited to, your computer’s Internet Protocol (“IP”) address, browser type, browser version,
          the pages of our Site that you visit, the time and date of your visit, the time spent on pages, links clicked, conversion information, and other statistics.
          This Log Data may be used by us and others to, among other things, analyze and track data, determine the popularity of certain content, deliver advertising
          and content targeted to your interest on our Site and other websites, and better understand your online or offline activity.  We may also work with third-parties
          to serve ads to you as part of a customized campaign on other websites or platforms.
        </p>

        <h3>Cookies</h3>
        <p>
          We reserve the right to use functional and analytical cookies to provide for the best user experience. We, as well as third-parties,
          may also use tracking cookies on our Site or related websites to show you customized advertisements and offers on our Site or related
          websites, as well as on third-party websites and apps.  Most web browsers are set to accept cookies by default.  If you prefer, you
          can instruct set your browser to remove or reject cookies or to indicate when a cookie is being sent, but note that doing so does not
          necessarily affect third-party flash cookies used in connection with our Site or related websites. Please note that if you choose to
          remove or reject cookies or to indicate when a cookie is being sent, this could affect the availability and functionality of all or a
          portion of our Site and/or any related websites. In addition, many web browsers support Do Not Track technology. If you enable Do Not Track,
          please note, however, that third-party companies may not recognize browser “Do Not Track” signals. If you would like to opt out of the collection
          and use of tracking data for ad targeting, please visit www.aboutads.info/choices/.
        </p>

        <h3>Use of Personal Information</h3>
        <p>We may, but are not obligated to, use your Personal Information to operate, maintain, and improve the Site and to promote the mission of Kindpost.
          This use includes, but is not limited to, the following:
        </p>
        <List>
          <li>
            To present the Site to you and to customize, improve, and develop content and functionality that helps us to better serve your needs;
          </li>
          <li>
            To troubleshoot problems with the Site;
          </li>
          <li>
            To facilitate communication between Kindpost and you;
          </li>
          <li>
            To send emails and other communications that display content that we think will interest you, such as news about our mission, products, and services;
          </li>
          <li>
            To generate statistical information about how users interact with the Site and conduct analyses to support, improve, and enhance the Site;
          </li>
          <li>
          To carry out our obligations and protect our rights arising from any contracts entered into between you and us, including our Terms of Service;
          </li>
          <li>
          To protect the safety, security, and legal rights of other users of the Site;
          </li>
          <li>
          To send you important information regarding the Site, such as changes to this Privacy Policy or any other policies;
          </li>
          <li>
          To prevent, detect, and investigate prohibited or illegal activities, including, but not limited to, copyright infringement and security breaches; and/or
          </li>
          <li>
            To fulfill any other purpose for which you provide information to us or to which you consent.
          </li>
        </List>

        <h3>Information We Share</h3>
        <p>We do not share Personal Information with companies, organizations, and individuals outside of Kindpost, unless one of the following circumstances applies:</p>
        <List>
          <li>To third party service providers that we retain to perform functions on our behalf, such as web hosting, data analyses and promotion services providers, communications services providers, e-commerce vendors, and/or technology and data service providers, based on our instructions and in compliance with our Privacy Policy and any other appropriate confidentiality and security measures;</li>
          <li>To companies, organizations, or individuals outside of Kindpost, if we have a good-faith belief that access, use, preservation, and/or disclosure of the Personal Information is reasonably necessary to: (i) Enforce applicable Terms of Service, including, but not limited to, investigation of potential violations; (ii) Detect, prevent, or otherwise address fraud, security, or technical issues; and/or (iii) Protect against harm to the rights, property, or safety of Kindpost, our users, or to the public, as required or permitted by law; and/or </li>
          <li>To meet any applicable law, regulation, legal process, enforceable governmental request, or other legal reason.</li>
        </List>
        <p>We may share non-Personally Identifiable Information publicly.  For example, we may share information publicly to show trends about the general use of the Site or support for Kindpost. </p>

        <h3>Credit Card Information</h3>
        <p>Kindpost does not process your credit card information.  Kindpost uses [INSERT NAME OF COMPANY(S)], a third-party payment processing service to collect, store, process, and transmit your credit card data when you make a purchase with us.  [INSERT NAME OF COMPANY(S)] certifies as adhering to the Payment Card Industry Data Security Standards.  Kindpost may transfer Personal Information to [INSERT NAME OF COMPANY(S)] for the purpose of facilitating the transaction.</p>

        <h3>Third-Party Links</h3>
        <p>In accordance with our Terms of Service at [insert link], our Site may redirect or link to other websites on the internet, or may otherwise include references to information, content, products, or services made available by third-parties unaffiliated with Kindpost.  Our Privacy Policy does not apply to the practices of other websites and Kindpost is not responsible for and assumes no liability, obligation, or responsibility for the actions and privacy policies of third-parties.  We encourage you to be aware of when you leave our Site and to read the privacy policies of each website that you visit.</p>

        <h3>Security</h3>
        <p>The security of your Personal Information is important to Kindpost.  We take reasonable measures to help protect your Personal Information from loss, theft, misuse and unauthorized access, disclosure, alteration, and destruction.  We use organizational, procedural, and technical safeguards to secure data in our possession, consistent with the sensitivity level of such data.  Regardless of the precautions we take, no transmission of data over the internet, or method of electronic storage, is guaranteed to be completely secure.  It may be possible for third-parties not under our control to intercept or access transmissions or private communications unlawfully.  While we strive to use commercially acceptable means to protect Personal Information, we cannot ensure, warrant, or guarantee the security of any information that you transmit to us.</p>

        <h3>Children</h3>
        <p>We do not knowingly collect any Personal Information from children under the age of 13.  We do not sell products for purchase by children, and all children’s products we sell are for purchase by adults only.  If you are under 13 years old, please do not provide your information on our Site.  If we become aware that an individual is under the age of 13 and has submitted any information to Kindpost for any purposes, we will delete his or her information from our files.  If you believe that we might have any Personal Information for a child under 13, please contact us at <a href="mailto:help@kindpostco.com" >help@kindpostco.com</a>.</p>

        <h3>Site Users Outside the United States</h3>
        <p>In accordance with our Terms of Service at [insert link], although this Site may be accessible worldwide, we make no representation that materials on this Site are appropriate or available for use or purchase in locations outside the United States.  Those who choose to access this Site from other locations do so on their own initiative and at their own risk.  If you choose to access this Site from outside the United States, you are responsible for compliance with local laws in your jurisdiction, including but not limited to the taxation of any products purchased over the internet.  Any offer for any product, Service, and/or information made in connection with this Site is void where prohibited.</p>
        <p>By accessing the Site and providing us with data as a non-United States user, you acknowledge and agree that your Personal Information may be processed for the purposes identified in this Privacy Policy.  We are based in the United States and the information we collect is governed by United States federal and California state law.  By accessing or using the Site or otherwise providing information to us, you consent to the processing and transfer of information in and to the United States and other countries.</p>
        <p>You may have the following data protection rights:</p>
        <List>
          <li>
          To access, correct, update, or request deletion of Personal Information.  We take reasonable steps to ensure that the data we collect is reliable for its intended use, and is accurate, complete, and up-to-date.  To request corrections, amendments or deletions to any Personal Information that you have provided through the Site, please contact us at <a href="mailto:help@kindpostco.com" >help@kindpostco.com</a>.  Kindpost will use reasonable efforts to supply you with requested Personal Information and correct any factual inaccuracy or delete your Personal Information from our databases. To honor your request, we will need the exact information you wish to correct, amend or delete.
          </li>
          <li>
          In addition, individuals who are residents of the European Economic Area (“EEA”) can object to processing of their Personal Information, ask to restrict processing of their Personal Information, or request portability of their Personal Information.  You can exercise these rights by contacting us at <a href="mailto:help@kindpostco.com" >help@kindpostco.com</a>.
          </li>
          <li>
          Similarly, if Personal Information is collected or processed on the basis of consent, you can withdraw consent at any time.  Withdrawing your consent will not affect the lawfulness of any collection and/or processing that we conducted prior to your withdrawal, nor will it affect collection and/or processing of your Personal Information conducted in reliance on lawful collection and/or processing grounds other than consent.
          </li>
          <li>
          EEA residents have the right to submit a complaint to a data protection authority about the collection and use of Personal Information.  For more information, please contact your local data protection authority.  Contact data for data protection authorities in the EEA is available here:  <a href="https://ec.europa.eu/justice/article-29/structure/data-protection-authorities/index_en.htm" >https://ec.europa.eu/justice/article-29/structure/data-protection-authorities/index_en.htm</a>.
          </li>
        </List>

        <p>We shall make reasonable efforts to respond to all requests we receive from individuals wishing to exercise their data protection rights in accordance with applicable data protection law.  We may ask you to verify your identity in order to help us respond efficiently to your request.</p>

        <h3>Changes to this Privacy Policy</h3>
        <p>
        This Privacy Policy is effective as of the Effective Date and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. You can review the most current version of the Privacy Policy at any time on this page.
        </p>

        <p>We reserve the right, at our sole discretion, to update, change, revise, or replace any part of our Privacy Policy, at any time, by posting updates and changes to our Site.  It is your responsibility to check our Site periodically for changes.  Your continued use of or access to our Site or the Service following the posting of any changes to this Privacy Policy will constitute your acknowledgment of those changes and your consent to abide and be bound by the modified Privacy Policy.</p>

        <p>If we make any material changes to this Privacy Policy, we will notify you either through the email address that you have provided to us, or by placing a prominent notice on the Site.</p>

        <h3>Opting-Out</h3>
        <p>IF YOU DO NOT WISH TO RECEIVE EMAIL COMMUNICATIONS FROM KINDPOST, YOU CAN USE THE LINKS PROVIDED IN EACH EMAIL COMMUNICATION TO OPT-OUT OF ANY FUTURE COMMUNICATIONS.</p>

        <h3>California Consumer Rights Information</h3>
        <p>
        California Civil Code section 1798.83 permits residents of California to opt-out of disclosure of Personal Information to third-parties for their direct marketing purposes.  You may choose to opt-out of the sharing of your Personal Information with third-parties for marketing purposes at any time by submitting a request in writing to our contact address below or by emailing us at help@kindpostco.com.  We honor such opt-out requests and it is our policy not to share Personal Information with third-parties for direct marketing purposes where you have submitted such a request.  Please note that this opt-out does not prohibit disclosure made for non-marketing purposes.
        </p>

        <OrderedList>
          <li>The Service and Site are owned and/or operated by Kindpost, 200 S. Barrington Avenue #491367, Los Angeles, CA 90049.</li>
          <li>Unless otherwise expressly stated, the Site is provided without charge.</li>
          <li>To file a complaint regarding the Site or to receive further information regarding use of the Site, please send a letter to Kindpost at 200 S. Barrington Avenue #491367, Los Angeles, CA 90049, or contact us via email at <a href="mailto:help@kindpostco.com" >help@kindpostco.com</a>.  You may also contact the Consumer Information Division of California’s Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, CA 95834 or by telephone at (800) 952-5210.  Hearing-impaired persons may call TDD (800) 326-2297.</li>
        </OrderedList>

        <p>
        In accordance with California Civil Code section 1789.3, we hereby provide California residents with the following specific consumer rights information:
        </p>

        <h3>Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, the practices of this Site, or your dealings with this Site, please contact us at <a href="mailto:help@kindpostco.com" >help@kindpostco.com</a>.</p>

        <p>Last Updated: August 9, 2020</p>
      </section>
    </div>
  </Layout>
  )
}

export default PrivacyPolicy
