import React from 'react'
import Layout from '../layouts/index'
import Link from 'gatsby-link'
import styled from 'styled-components'

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

const TermsAndConditions = () => (
  <Layout site="kindpost" headerClass="Header light">
    <div className="legal-container">
      <h1>TERMS OF SERVICE</h1>
      <section>
        <h3>EFFECTIVE DATE: 11/07/20</h3>
        <h3>Section 1.  General Conditions</h3>
        <p>
        Thank you for visiting Kindpost.  This website, <a href="https://www.kindpostco.com">https://www.kindpostco.com</a> (“Site”), is owned and operated by Kindpost.  Kindpost (referred to as “We,” “Us,” and “Our”) offers this Site, including all information, tools, and services available from this Site, to you, the user, conditioned upon your acceptance of and compliance with all terms, conditions, policies, and notices stated herein.
        </p>
        <p>
        By accessing and/or using any part of Our Site and/or purchasing something from Us, you engage in Our “Service” and agree to be bound by the following terms and conditions (i.e., “Terms of Service,” “Terms,” or “Agreement”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink.  These Terms of Service apply to all users of the Site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.  These Terms govern each party’s respective rights, responsibilities, and obligations involving the Service and in accessing and using this Site. Accordingly, please read these Terms of Service carefully before accessing or using any portion of Our Site and/or purchasing something from Our Site.  If you do not agree to all the terms and conditions of this Agreement, then you may not access the Site or use any services.
        </p>
        <p>
        These Terms are effective as of the Effective Date and will remain in effect except with respect to any changes in their provisions in the future, which will be in effect immediately after being posted on this page. You can review the most current version of these Terms at any time on this page.
        </p>
        <p>
        We reserve the right, at our sole discretion, to update, change, revise, or replace any part of the Terms, at any time, by posting updates and changes to our Site.  It is your responsibility to check our Site periodically for changes.  Your continued use of or access to our Site or the Service following the posting of any changes to these Terms will constitute your acknowledgment of those changes and your consent to abide and be bound by the modified Terms.Any new features or tools that are added to the Site shall also be subject to the Terms of Service.
        </p>
        <p>
        BY ACCESSING AND/OR USING ANY PART OF THIS SITE AND/OR PURCHASING ANYTHING FROM THIS SITE, YOU AGREE TO BE BOUND BY THESE TERMS.  IF YOU DO NOT WISH TO BE BOUND BY THESE TERMS, PLEASE EXIT THE SITE.  YOUR SOLE REMEDY FOR DISSATISFACTION WITH THIS SITE, SERVICE, PRODUCTS, OR THESE TERMS IS TO CEASE ACCESSING AND/OR USING THIS SITE, AND/OR SERVICE, AND/OR THOSE PARTICULAR PRODUCTS.
        </p>
        <p>
        Please note that We reserve the right to refuse service to anyone for any reason at any time.
        </p>
      </section>
      <section>
        <h3>Section 2.  Site Availability and Use</h3>
        <p>
        By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given Us your consent to allow any of your minor dependents to use this Site.
        </p>
        <p>
        You may not use Our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction, including, but not limited to, copyright laws.  A breach or violation of any of the Terms will result in an immediate termination of your Services.  A breach or violation of any of the Terms may also be grounds for reporting you to the property authorities, if necessary.
        </p>
        <p>
        All content of this Site, and the Site itself, are protected by copyright laws, trademarks, and/or intellectual property rights.  This Site and all its content are owned, controlled, or licensed by or to Kindpost and/or its affiliates, which solely reserves the right to authorize third-party usage.  Such content includes, but is not limited to, photographs, images, text, graphics, button icons, software, audio clips, video clips, designs, logos, trademarks, trade dress, user interfaces, visual interfaces, design, and other content contained in this Site, as well as the software and computer code used to design, structure, and develop this Site.  All rights are reserved worldwide.  Unauthorized use, reproduction, modification, posting, distribution, duplication, or any other misuse of this Site, the Service, any related website or social media, or the products is strictly prohibited.  Any use of this Site, the Service, any related website or social media, or the products other than as expressly permitted by Kindpost in writing, may constitute copyright, trademark, and/or patent infringement.
        </p>
        <p>
        You agree not to reproduce, duplicate, copy, sell, resell, distribute, duplicate, use, or exploit any portion of the Service, use of the Service, or access to the Service or any content on the Site through which the Service is provided, without express written permission by Us.
        </p>
      </section>
      <section>
        <h3>Section 3.  Products or Services; Modifications to Products, Services, or Prices</h3>
        <p>Certain products or services may be available exclusively online through the Site.  These products or services may have limited quantities.  Once purchased, the products and services on Our Site are non-refundable and may not be exchanged for any other item.  All sales are final.</p>
        <p>Please note that all pictures shown on Our Site are for illustration purposes only and may not be an exact representation of the product.  Actual products may vary.  We reserve the right to change product images and specifications at any time without notice.  The final product received being different from the product image on Our Site is not a reason that We will accept a return nor provide a refund.</p>
        <p>We reserve the right, but are not obligated, to limit the sales of Our products or services to any person, geographic region, or jurisdiction.  We may exercise this right on a case-by-case basis.  We reserve the right to limit the quantities of any products or services that We offer.  All descriptions of products or product pricing are subject to change at any time without notice, at Our sole discretion.  We reserve the right to discontinue any product at any time.  Any offer for any product or service made on this Site is void where prohibited.</p>
        <p>We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations or that errors in the Service will be corrected. </p>
        <p>Prices for Our products are subject to change without notice.  We reserve the right at any time to modify or discontinue the Service, or any part or content thereof, without notice at any time.  We shall not be liable to you or any third-party for any modification, price change, suspension, or discontinuance of the Service.</p>
      </section>
      <section>
        <h3>Section 4.  Accuracy, Completeness, and Timeliness of Information</h3>
        <p>We strive to provide complete, accurate, and up-to-date information on the Site.  Unfortunately, we are not able to ensure that the Site is completely free of human or technological errors.  Occasionally, there may be information on Our Site or in the Service that contains typographical errors, inaccuracies, or omissions that may relate to, without limitation, product descriptions, pricing, availability, promotions, offers, product shipping charges, and/or transit times, and some information may not be complete or current.  We reserve the right, without prior notice, to correct any errors, inaccuracies, or omissions and to change or update information or cancel orders if any information in the Service, on the Site, or on any related website or social media is inaccurate at any time, including after you have submitted your order.</p>
        <p>We undertake no obligation to update, amend, or clarify information in the Service, on the Site, or on any related website or social media, including without limitation, pricing information, except as required by law.  No specified update or refresh date applied in the Service, on the Site, or on any related website or social media, should be taken to indicate that all information in the Service, on the Site, or on any related website or social media has been modified or updated.</p>
        <p>We are not responsible if information made available on this Site is not accurate, complete, or current.  The material on this Site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete, or more timely sources of information.  Any reliance on the material on this Site is at your own risk.</p>
        <p>This Site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only.</p>
      </section>
      <section>
        <h3>Section 5.  Accuracy of Billing and Account Information</h3>
        <p>We reserve the right to refuse any order that you place with Us.  We may, in Our sole discretion, limit and/or cancel quantities purchased per person, per household, per order, or any other basis.  These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address.  In the event that We make a change to and/or cancel an order, We may attempt to notify you by contacting the email, billing address, and/or phone number provided at the time the order was made.  We reserve the right to limit and/or prohibit orders that, in Our sole judgment, appear to be placed by dealers, resellers, and/or distributors.</p>
        <p>You agree to provide current, complete, and accurate purchase and account information for all purchases made on or through Our Site.  You agree to promptly update your account and other information, including your email address and credit card number(s) and expiration date(s), so that We can complete your transactions and contact you as needed.</p>
      </section>
      <section>
        <h3>Section 6.  Return Policy</h3>
        <p>Because all items are handwritten to order, we are unable to accept returns or exchanges.  All orders are final sale and cannot be cancelled, exchanged, or returned under any circumstances.  Any items returned to Kindpost without prior notification will not be accepted and may be returned to sender.</p>
        <p>If you feel that there was a mistake on our end that caused a problem with your order, please email us at <a href="mailto:help@kindpostco.com">help@kindpostco.com.</a></p>
      </section>
      <section>
        <h3>Section 7.  E-Commerce</h3>
        <p>Our store is hosted on Shopify, which provides Us with the online e-commerce platform that allows Us to sell Our products and services to you.</p>
      </section>
      <section>
        <h3>Section 8.  Optional Tools</h3>
        <p>We may provide you with access to third-party tools over which We neither monitor nor have any control nor input.</p>
        <p>You acknowledge and agree that We provide access to such tools “as is” and “as available” without any warranties, representations, or conditions of any kind and without any endorsement.  We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.</p>
        <p>Any use by you of optional tools offered through the Site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which the tools are provided by the relevant third-party provider(s).</p>
        <p>We may also, in the future, offer new services and/or features through the Site, including but not limited to the release of new tools and resources.  Such new features and/or services shall also be subject to these Terms of Service.</p>
      </section>
      <section>
        <h3>Section 9.  Third-Party Links; Third-Party Promotions</h3>
        <p>This Site may redirect or link to other websites on the internet, or may otherwise include references to information, content, products, or services made available by third-parties unaffiliated with Kindpost.  While We make every effort to work with trusted, reputable providers, from time to time such sites may contain goods, services, resources, content, or policies that some may find inappropriate or personally objectionable.  We are not responsible for examining or evaluating the accuracy, completeness, decency, or legality of content hosted by third-party websites.  We are also not responsible for errors or omissions in any references on those websites.</p>
        <p>We are not liable or responsible for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites.  Please carefully review the third-party’s policies and practices and make sure you understand them before you engage in any transaction.  Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party. The inclusion of such a link or reference is provided merely as a convenience and does not imply endorsement of or any association with the third-party website or third-party by Us or any warranty of any kind, either express or implied.</p>
        <p>From time to time, this Site may include advertisements offered by third-parties.  You may enter into correspondence with or participate in promotions of the advertisers showing their products on this Site.  Any such correspondence or promotions, including the delivery of and the payment for goods and services by those third-parties, and any other terms, conditions, warranties, or representations associated therewith, are solely between you and the advertiser.  We assume no liability, obligation, or responsibility for any part of any such correspondence or promotion.</p>
      </section>
      <section>
        <h3>Section 10.  User Comments, Feedback, and Other Submissions</h3>
        <p>Except for information necessary to place an order, any comments, suggestions, ideas, designs, proposals, plans, materials, or other submissions sent to us, whether online, by email, by postal mail, by social media, or otherwise (collectively, “Comments”), shall be deemed non-confidential and shall be the property of Kindpost, including worldwide rights in all intellectual properties for any purpose whatsoever, regardless of the form or medium in which it is used.  We may, at any time, without restriction, edit, copy, publish, distribute, translate, and otherwise use in any medium any Comments that you send to Us.  We are and shall be under no obligation to (i) maintain any Comments in confidence; (ii) pay compensation for any Comments; or (iii) respond to any Comments.</p>
        <p>We may, but have no obligation to, monitor, edit, or remove Comments or other content that We determine in Our sole discretion to be unlawful, offensive, threatening, abusive, harassing, libelous, defamatory, deceptive, fraudulent, tortious, pornographic, obscene, invasive of another’s privacy, or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.  We are not responsible for any failure or delay in removing such postings.</p>
        <p>You agree that your Comments will not violate any right of any third-party, including copyright, trademark, privacy, personality, or other personal or proprietary right.  You further agree that your Comments will not contain unlawful, offensive, threatening, abusive, harassing, libelous, defamatory, deceptive, fraudulent, tortious, pornographic, obscene, invasive of another’s privacy, or otherwise objectionable material, or contain any computer virus or other malware that could in any way affect the operation of the Service, the Site, or any related website or social media.  You may not use a false email address, pretend to be someone other than yourself, or otherwise mislead Us or third-parties as to the origin of any Comments.  You are solely responsible for any Comments you make and their accuracy.</p>
        <p>We take no responsibility and assume no liability whatsoever for any Comments posted by you or by any third-party.  Kindpost neither endorses nor assumes any liability for any Comments submitted by users on any part of the Site.</p>
        <p>Please do not submit confidential or proprietary information to Us (including patentable ideas, new content suggestions, or business proposals), unless We have mutually agreed in writing otherwise.  Ideas that we receive unsolicited will be treated as property owned by Kindpost and may not be returned to you.</p>
      </section>
      <section>
        <h3>Section 11.  Personal Information; Privacy and Security</h3>
        <p>In order to access some of the features on this Site, you may be asked to set up an account and password.  Our account registration page may request certain personal information from you (“Registration Information”).  You will have the ability to maintain and periodically update your Registration Information as you see fit.  By registering, you agree that all information provided by you as Registration Information is true and accurate and that you will maintain and update this information as required in order to keep it current, complete, and accurate.</p>
        <p>If you register for an account on this Site, you agree that you are responsible for maintaining the security and confidentiality of your password, and that you are fully responsible for all activities or charges that are incurred under your account.  Therefore, you must take reasonable steps to ensure that others do not gain access to your password and account.  Our employees will never ask you for your password.</p>
        <p>Your submission of information through the store and/or this Site, including your Registration Information, is governed by and subject to Our Privacy Policy, which is specifically incorporated by reference herein.  For more information, please view Our <Link to="/privacy-policy">Privacy Policy</Link>.</p>
      </section>
      <section>
        <h3>Section 12.  Prohibited Uses</h3>
        <p>In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the Site or its content: (i) for any unlawful purpose; (ii) to solicit others to perform or participate in any unlawful acts; (iii) to violate any international, federal, state, or local regulations, rules, laws, or ordinances; (iv) to infringe upon or violate Our intellectual property rights or the intellectual property rights of others; (v) to harass, abuse, insult, harm, slander, disparage, intimidate, or discriminate based on race, color, religion, gender, gender identity, gender expression, sexual orientation, marital status, medical condition, military or veteran status, national origin, ancestry, age, or physical or mental disability; (vi) to submit false or misleading information; (vii) to upload or transmit viruses, worms, or any other type of malicious and/or destructive code that will or may be used in any way that will affect the functionality or operation of the Service, of the Site, or of any related website, other websites, social media, or the Internet; (viii) to collect or track the personal information of others; (ix) to spam, phish, pharm, pretext, spider, crawl, or scrape; (x) to breach the security of, compromise, or otherwise allow access to secured, protected, or inaccessible areas of this Site, or attempt to gain access to other network or server via your account on this Site; (xi) to impersonate any person or entity, including any of Our employees or representatives; (xii) for any obscene or immoral purpose; or (xiii) to interfere with or circumvent the security features of the Service, of the Site, or any related website, other websites, social media, or the Internet.  We reserve the right to terminate your use of the Service, the Site, or any related website or social media for violating any of the prohibited uses.</p>
      </section>
      <section>
        <h3>Section 13.  Disclaimer of Warranties; Limitation of Liability</h3>
        <p>THE SITE, SERVICE, CONTENT, AND ALL PRODUCTS AND SERVICES DELIVERED TO YOU THROUGH THE SITE AND/OR THE SERVICE ARE, EXCEPT AS EXPRESSLY STATED HEREIN THESE TERMS, PROVIDED “AS IS” AND “AS AVAILABLE” FOR YOUR USE, WITHOUT ANY REPRESENTATION, WARRANTIES, OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, MERCHANTABLE QUALITY, FITNESS FOR A PARTICULAR PURPOSE, DURABILITY, TIME, AND NON-INFRINGEMENT. WITHOUT LIMITING THE FOREGOING, WE DO NOT GUARANTEE, REPRESENT, OR WARRANTY THAT (I) THE SITE, SERVICE, CONTENT, PRODUCTS, OR SERVICES WILL MEET YOUR REQUIREMENTS; (II) THE SITE, SERVICE, CONTENT, PRODUCTS, OR SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; (III) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE OR SITE WILL BE EFFECTIVE, ACCURATE, OR RELIABLE; OR (IV) THE QUALITY OF THE SITE, SERVICE, CONTENT, PRODUCTS, OR SERVICES WILL MEET YOUR EXPECTATIONS OR BE FREE FROM MISTAKES, ERRORS, OR DEFECTS.</p>
        <p>You expressly agree that your use of, or inability to use, the Site, Service, products, and related websites are at your sole risk.  You further acknowledge that Kindpost shall not be liable for damages of any kind related to your use of the Site, Service, products, and related websites.  We may remove the Service for indefinite periods of time or cancel the Service at any time, without notice to you.</p>
        <p>We have no responsibility or liability for the deletion or failure to store any content maintained or transmitted on or through this Site.  We reserve the right to remove or terminate accounts that remain inactive for longer than one (1) year, or in cases where you have violated one or more terms of this Agreement.</p>
        <p>In no cases shall Kindpost and/or Our directors, officers, employees, affiliates, assigns, partners, agents, contactors, interns, sponsors, advertisers, suppliers, service providers, or licensors be liable for any injury, loss, or claim or any direct, indirect, incidental, punitive, special, consequential, or any other damages of any kind, including without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability, or otherwise, arising from your use of the Site, related websites, the Service, any products procured using the Service, or for any other claim related in any way to your use of the Service or any product or service, including, but not limited to, any errors or omissions in any content, any loss or damage of any kind incurred as a result of the use of the Site and/or the Service, or any content or product posted, transmitted, or otherwise made available via the Site and/or the Service, that you or others may suffer, even if advised of their possibility.  Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, Our liability shall be limited to the maximum extent permitted by law.</p>
      </section>
      <section>
        <h3>Section 14.  Indemnification</h3>
        <p>You agree to indemnify, defend, and hold Kindpost and Our directors, officers, employees, affiliates, assigns, partners, agents, contractors, interns, sponsors, advertisers, suppliers, service providers, and licensors free and harmless from any and all claims or demands, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service, the documents they incorporate by reference, your violation of any law, or your violation of the rights of a third-party.</p>
      </section>
      <section>
        <h3>Section 15.  Severability</h3>
        <p>In the event that any provision of these Terms of Service is determined to be unlawful, void, or unenforceable,the unenforceable portion shall be deemed to be severed from these Terms of Service, and the remaining portion shall be enforceable to the fullest extent permitted by applicable law.  Determination of an unlawful, void, or unenforceable provision shall not affect the validity and enforceability of any other remaining provisions of these Terms of Service.</p>
      </section>
      <section>
        <h3>Section 16.  Termination</h3>
        <p>These Terms of Service are effective unless and until terminated by either you or Us.  You may terminate these Terms of Service at any time by providing Us written notice that you no longer wish to use Our Service and/or when you cease using Our Site.</p>
        <p>If, in Our sole judgment, you fail, or We suspect that you have failed, to comply with any term or provision of these Terms of Service, We may also terminate this Agreement at any time without notice and for any reason, and you shall remain liable for all amounts due up to and including the date of termination and/or We may accordingly deny you access to Our Service or any part thereof.</p>
        <p>Upon termination, and regardless of the reason(s) motivating such termination, your right to use the Site and Service shall immediately cease.  We shall not be liable to you or any third-party for any claims for damages arising out of any termination or suspension or any other actions taken by Us in connection therewith. The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this Agreement for all purposes.</p>
      </section>
      <section>
        <h3>Section 17.  Entire Agreement</h3>
        <p>Any failure by Us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.</p>
        <p>These Terms of Service and any policies or operating rules posted by Us on this Site or in respect to the Services constitute the entire agreement and understanding between you and Us, and govern your use of the Service, superseding any prior or contemporaneous agreements, communications, understandings, and proposals, whether oral or written, between you and Us (including, but not limited to, any prior versions of the Terms of Service).</p>
        <p>Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party. </p>
      </section>
      <section>
        <h3>Section 18.  Governing Law</h3>
        <p>By visiting this Site, you agree that the laws of the state of California will govern these Terms of Service and any dispute of any sort that might arise between you and Kindpost or any of our affiliates, without regarding principles of conflict of law.</p>
      </section>
      <section>
        <h3>Section 19.  International Use</h3>
        <p>Although this Site may be accessible worldwide, We make no representation that materials on this Site are appropriate or available for use or purchase in locations outside the United States.  Those who choose to access this Site from other locations do so on their own initiative and at their own risk.  If you choose to access this Site from outside the United States, you are responsible for compliance with local laws in your jurisdiction, including but not limited to the taxation of products purchased over the internet.  Any offer for any product, Service, and/or information made in connection with this Site is void where prohibited.</p>
      </section>
      <section>
        <h3>Section 20.  Privacy Policy; California Consumer Rights Information</h3>
        <p>Please view our Privacy Policy, which provides California residents with specific consumer rights information, in accordance with applicable law.  For more information, please view Our <Link to="/privacy-policy">Privacy Policy</Link>.</p>
      </section>
      <section>
        <h3>Section 21.  Force Majeure</h3>
        <p>In addition to any excuse provided by applicable law, we shall be excused from liability for non-delivery or delay in delivery of products available through Our Site arising from any event beyond Our reasonable control, whether or not foreseeable by either party, including but not limited to labor disturbance, war, fire, accident, adverse weather, acts of God, pandemic, inability to secure transportation, governmental act or regulation, and other causes or events beyond Our reasonable control, whether or not similar to those which are enumerated above.</p>
      </section>
      <section>
        <h3>Section 22.  Headings</h3>
        <p>The headings used in this Agreement are included for convenience only and will not limit or otherwise affect these terms. </p>
      </section>
      <section>
        <h3>Section 23.  Contact Information</h3>
        <p>Questions about the Terms of Service should be sent to Us at <a href="mailto:help@kindpostco.com">help@kindpostco.com.</a></p>
      </section>
    </div>
  </Layout>
)

export default TermsAndConditions
