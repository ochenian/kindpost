import React from 'react'
import Layout from '../layouts/index'
import Link from 'gatsby-link'
import styled from 'styled-components'

const PrivacyPolicy = ({}) => {

  const List = styled.ul`
    list-style-type: '- ';
    list-style-position: inside;
    margin-left: 20px;
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

        <p>Last Updated: August 9, 2020</p>
      </section>
    </div>
  </Layout>
  )
}

export default PrivacyPolicy
