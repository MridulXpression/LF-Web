"use client";
import React, { useState } from "react";

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value to control how much space from top
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "definitions", label: "1. Definitions & Interpretation" },
    { id: "purpose", label: "2. Purpose" },
    { id: "categories", label: "3. Categories of Personal Data" },
    { id: "use", label: "4. Purpose of Data Collection & Use" },
    { id: "legal-basis", label: "5. Legal Basis for Processing" },
    { id: "consent", label: "6. Consent Management" },
    { id: "childrens-data", label: "Children's Data" },
    { id: "cookies", label: "7. Cookie & Tracking Technologies" },
    { id: "sharing", label: "8. Data Sharing & Third-Party Transfers" },
    { id: "retention", label: "9. Data Retention & Storage" },
    { id: "security", label: "10. Reasonable Security Practices" },
    { id: "breach", label: "11. Notification of Personal Data Breach" },
    { id: "rights", label: "12. Rights of Data Principals" },
    { id: "grievance", label: "13. Grievance Redressal Mechanism" },
    { id: "force-majeure", label: "14. Force Majeure" },
    { id: "governing-law", label: "15. Governing Law & Jurisdiction" },
    { id: "ownership", label: "16. Change in Ownership or Control" },
    { id: "updates", label: "17. Policy Updates & Notification" },
    { id: "contact", label: "18. Contact Us" },
    { id: "annexure", label: "Annexure A" },
  ];

  return (
    <div
      style={{
        background: "#fafaf8",
        minHeight: "100vh",
        color: "#1a1a1a",
      }}
    >
      {/* Header */}
      <div
        style={{ background: "#0f1110", color: "#fff", padding: "60px 40px" }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 13,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#aaa",
              marginBottom: 12,
            }}
          >
            AS10 Techretail Private Limited
          </p>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 700,
              margin: 0,
              letterSpacing: -1,
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: "#ccc", marginTop: 16, fontSize: 15 }}>
            This <strong style={{ color: "#fff" }}>Privacy Policy</strong>{" "}
            ("Policy") was updated at{" "}
            <strong style={{ color: "#fff" }}>January 8th, 2026</strong>{" "}
            ("Effective Date").
          </p>
          <p
            style={{
              color: "#bbb",
              marginTop: 16,
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: "#fff" }}>
              AS10 Techretail Private Limited ("LaFetch" or "Company")
            </strong>{" "}
            is committed to respecting the privacy and safeguarding the personal
            data of its customers, website visitors, vendors, employees, and all
            other stakeholders. As a responsible e-commerce brand engaged in the
            sale of apparel through its digital platform, LaFetch recognises the
            critical importance of transparency, consent, and data protection in
            building lasting trust.
          </p>
          <p
            style={{
              color: "#bbb",
              marginTop: 12,
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            This Privacy Policy is designed in compliance with the{" "}
            <strong style={{ color: "#fff" }}>
              Digital Personal Data Protection Act, 2023
            </strong>
            , the{" "}
            <strong style={{ color: "#fff" }}>
              Information Technology Act, 2000
            </strong>
            , and relevant rules including the{" "}
            <strong style={{ color: "#fff" }}>
              IT (Reasonable Security Practices and Procedures and Sensitive
              Personal Data or Information) Rules, 2011
            </strong>
            . It is also informed by global privacy standards and industry best
            practices.
          </p>
          <p
            style={{
              color: "#bbb",
              marginTop: 12,
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            LaFetch is committed to ensuring that all personal data is
            collected, stored, used, and shared in a secure, lawful, and fair
            manner. We believe in empowering our users with meaningful choices,
            data rights, and access to redressal mechanisms to protect their
            privacy interests.
          </p>
        </div>
      </div>

      {/* WHEREAS */}
      <div
        style={{
          background: "#f0efe9",
          borderTop: "3px solid #c8a96e",
          padding: "40px 40px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            WHEREAS
          </h2>
          <ol
            style={{
              listStyle: "upper-alpha",
              paddingLeft: 24,
              lineHeight: 1.9,
              fontSize: 15,
              color: "#333",
            }}
          >
            <li style={{ marginBottom: 16 }}>
              <strong>
                AS10 Techretail Private Limited ("LaFetch" or "Company")
              </strong>{" "}
              operates an online apparel platform and is committed to protecting
              the personal data and privacy rights of its users and stakeholders
              in accordance with the highest standards of transparency,
              accountability, and ethical data governance;
            </li>
            <li style={{ marginBottom: 16 }}>
              The <strong>Digital Personal Data Protection Act, 2023</strong>,
              the <strong>Information Technology Act, 2000</strong>, and the{" "}
              <strong>
                IT (Reasonable Security Practices and Procedures and Sensitive
                Personal Data or Information) Rules, 2011
              </strong>{" "}
              require data fiduciaries such as the Company to establish clear
              privacy practices, ensure security safeguards, and provide
              mechanisms for informed consent and redressal;
            </li>
            <li style={{ marginBottom: 16 }}>
              The Company acknowledges that personal data, including sensitive
              personal data such as payment information, must be processed
              lawfully, with consent or legitimate basis, and handled in a
              manner that prevents misuse, loss, or unauthorized access;
            </li>
            <li style={{ marginBottom: 16 }}>
              LaFetch aims to foster user trust and legal compliance by
              establishing this comprehensive Privacy Policy, which ensures that
              all individuals interacting with the brand—whether as buyers,
              browsers, service providers, or personnel—are informed of their
              rights, the Company's obligations, and the mechanisms available
              for grievance redressal and data protection;
            </li>
          </ol>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: "#333",
              marginTop: 8,
            }}
          >
            <strong>NOW THEREFORE</strong>, AS10 Techretail Private Limited
            hereby adopts this Privacy Policy to provide a clear, lawful, and
            user-friendly framework for the collection, processing, storage, and
            protection of personal data, thereby reinforcing its commitment to
            privacy, compliance, and responsible data stewardship.
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          gap: 0,
          alignItems: "flex-start",
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: 260,
            flexShrink: 0,
            position: "sticky",
            top: 20,
            padding: "40px 20px 40px 40px",
          }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#999",
              marginBottom: 12,
            }}
          >
            Sections
          </p>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScrollToSection(e, item.id)}
              style={{
                display: "block",
                padding: "7px 0",
                fontSize: 13,
                color: "#555",
                textDecoration: "none",
                borderBottom: "1px solid #eee",
                lineHeight: 1.4,
              }}
              onMouseEnter={(e) => (e.target.style.color = "#000")}
              onMouseLeave={(e) => (e.target.style.color = "#555")}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Content */}
        <div
          style={{
            flex: 1,
            padding: "40px 40px 80px 40px",
            borderLeft: "1px solid #e8e8e0",
          }}
        >
          {/* Section 1 */}
          <section id="definitions" style={{ marginBottom: 60 }}>
            <SectionTitle number="1" title="DEFINITIONS AND INTERPRETATION" />

            <SubSection title="1.1 Definitions">
              <p style={textStyle}>
                In this Policy (including the recitals above hereto), except
                where the context otherwise requires, the following words and
                expressions shall bear the meaning assigned to them below:
              </p>
              <ol
                style={{
                  listStyle: "lower-alpha",
                  paddingLeft: 24,
                  lineHeight: 1.9,
                  fontSize: 15,
                  color: "#333",
                  marginTop: 12,
                }}
              >
                <li style={{ marginBottom: 10 }}>
                  <strong>"Act"</strong> shall mean the{" "}
                  <strong>Digital Personal Data Protection Act, 2023</strong>,
                  including all applicable rules, notifications, and amendments
                  relating to the collection, processing, storage, transfer, and
                  protection of personal data in India, and shall include the{" "}
                  <strong>Information Technology Act, 2000</strong>, and{" "}
                  <strong>
                    IT (Reasonable Security Practices and Procedures and
                    Sensitive Personal Data or Information) Rules, 2011
                  </strong>
                  , to the extent applicable.
                </li>
                <li style={{ marginBottom: 10 }}>
                  <strong>"Data Principal"</strong> shall mean the individual to
                  whom the personal data relates, and includes any user,
                  customer, website visitor, or individual whose personal data
                  is processed by the Company.
                </li>
                <li style={{ marginBottom: 10 }}>
                  <strong>"Data Fiduciary"</strong> shall mean{" "}
                  <strong>AS10 Techretail Private Limited</strong>, which
                  determines the purpose and means of processing personal data
                  in its capacity as a data fiduciary under the Act.
                </li>
                <li style={{ marginBottom: 10 }}>
                  <strong>"Personal Data"</strong> shall mean any data about an
                  individual who is identifiable by or in relation to such data,
                  whether directly or indirectly, through reference to
                  identifiers such as name, contact details, location data,
                  online identifiers, or any other characteristic or attribute
                  of identity.
                </li>
                <li style={{ marginBottom: 10 }}>
                  <strong>"Sensitive Personal Data"</strong> shall mean personal
                  data that relates to passwords, financial information such as
                  bank account or credit card details, biometric data, and any
                  other category of data notified as sensitive under applicable
                  law.
                </li>
                <li style={{ marginBottom: 10 }}>
                  <strong>"Processing"</strong> shall mean any operation or set
                  of operations performed on personal data, whether or not by
                  automated means, including collection, recording,
                  organisation, structuring, storage, adaptation, retrieval,
                  consultation, use, disclosure by transmission, dissemination,
                  or otherwise making available, alignment or combination,
                  restriction, erasure, or destruction.
                </li>
                <li style={{ marginBottom: 10 }}>
                  <strong>"Consent"</strong> shall mean any freely given,
                  specific, informed, and unambiguous indication of the Data
                  Principal's agreement to the processing of their personal data
                  for the intended purpose, either through a clear affirmative
                  action or through any other prescribed manner under applicable
                  law.
                </li>
                <li style={{ marginBottom: 10 }}>
                  <strong>"Grievance Officer"</strong> shall mean the designated
                  individual appointed by the Company to address privacy-related
                  grievances and ensure redressal in accordance with the
                  timelines and procedures under the Act.
                </li>
                <li style={{ marginBottom: 10 }}>
                  <strong>"Third Parties"</strong> shall mean any external
                  persons or entities, including service providers, contractors,
                  consultants, logistics partners, and technology vendors, with
                  whom personal data may be shared for business purposes,
                  subject to appropriate safeguards.
                </li>
                <li style={{ marginBottom: 10 }}>
                  <strong>"Data Breach"</strong> shall mean any unauthorised or
                  accidental disclosure, alteration, loss, access, or
                  destruction of personal data that compromises its
                  confidentiality, integrity, or availability.
                </li>
                <li style={{ marginBottom: 10 }}>
                  <strong>"Website"</strong> shall mean the online platform of
                  the Company, accessible at{" "}
                  <a href="https://www.la-fetch.com" style={linkStyle}>
                    https://www.la-fetch.com
                  </a>
                  , including all subdomains and mobile applications operated by
                  or on behalf of the Company.
                </li>
                <li style={{ marginBottom: 10 }}>
                  <strong>"User"</strong> shall mean any individual who accesses
                  or uses the Company's website, interacts with its services,
                  purchases products, or otherwise provides personal data to the
                  Company.
                </li>
                <li style={{ marginBottom: 10 }}>
                  <strong>"LaFetch Team" or "Personnel"</strong> shall mean all
                  full-time, part-time, probationary, temporary, or contractual
                  employees, interns, consultants, and authorised
                  representatives of the Company, regardless of location or
                  designation.
                </li>
                <li style={{ marginBottom: 10 }}>
                  <strong>"Nominee"</strong> shall mean a person appointed by a
                  Data Principal under the Act to act on their behalf in the
                  event of their death or incapacity.
                </li>
                <li style={{ marginBottom: 10 }}>
                  <strong>"Notice"</strong> shall mean a clear and accessible
                  statement provided by the Company to the Data Principal,
                  before collecting personal data, informing them of the
                  purpose, method, legal basis, and rights in relation to such
                  processing.
                </li>
              </ol>
            </SubSection>

            <SubSection title="1.2 Interpretation">
              <ol
                style={{
                  listStyle: "lower-alpha",
                  paddingLeft: 24,
                  lineHeight: 1.9,
                  fontSize: 15,
                  color: "#333",
                }}
              >
                <li style={{ marginBottom: 8 }}>
                  In addition to the terms defined above, certain terms may be
                  defined elsewhere in this Policy, and wherever such terms are
                  used, they shall have the meaning assigned to them.
                </li>
                <li style={{ marginBottom: 8 }}>
                  Section headings are for convenience only and shall not affect
                  the construction or interpretation of any provision of this
                  Policy.
                </li>
                <li style={{ marginBottom: 8 }}>
                  References to sections or annexures are, unless the context
                  otherwise requires, references to sections or annexures of
                  this Policy.
                </li>
                <li style={{ marginBottom: 8 }}>
                  Where a word or phrase is defined, other parts of speech and
                  grammatical forms and the cognate variations of that word or
                  phrase will have corresponding meanings.
                </li>
                <li style={{ marginBottom: 8 }}>
                  Words denoting singular shall include the plural and vice
                  versa, and words denoting any gender shall include all genders
                  unless the context otherwise requires.
                </li>
                <li style={{ marginBottom: 8 }}>
                  The terms "hereof", "herein", "hereto" and derivative or
                  similar words refer to this entire Policy or specified
                  Sections of this Policy, as the case may be.
                </li>
                <li style={{ marginBottom: 8 }}>
                  All references to this Policy shall include any amendments or
                  updates to this Policy, as approved by the Compliance Officer
                  or the designated authority from time to time.
                </li>
              </ol>
            </SubSection>
          </section>

          {/* Section 2 */}
          <section id="purpose" style={{ marginBottom: 60 }}>
            <SectionTitle number="2" title="PURPOSE" />
            <ol
              style={{
                listStyle: "lower-alpha",
                paddingLeft: 24,
                lineHeight: 1.9,
                fontSize: 15,
                color: "#333",
              }}
            >
              <li style={{ marginBottom: 12 }}>
                This Privacy Policy ("Policy") applies to all Personal Data
                collected, received, processed, stored, disclosed, transferred,
                or otherwise handled by{" "}
                <strong>AS10 Techretail Private Limited</strong> ("LaFetch" or
                "Company") in the course of its operations through its website{" "}
                <a href="https://www.la-fetch.com/" style={linkStyle}>
                  https://www.la-fetch.com/
                </a>
                , mobile applications, communication platforms, or other digital
                interfaces owned or operated by the Company ("Platform"). This
                Policy governs the privacy practices adopted by the Company in
                relation to:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li style={{ marginBottom: 6 }}>
                    Individuals who visit, access, or use the Platform,
                    including those who browse the site, place an order,
                    register an account, or engage in any communication or
                    transaction with LaFetch ("Users");
                  </li>
                  <li style={{ marginBottom: 6 }}>
                    All categories of Data Principals whose Personal Data is
                    processed by the Company, including customers, prospective
                    customers, business partners, vendors, employees,
                    consultants, service providers, and visitors who voluntarily
                    provide their data;
                  </li>
                  <li style={{ marginBottom: 6 }}>
                    Personal Data collected through both online and offline
                    channels, including but not limited to customer
                    interactions, surveys, feedback forms, product inquiries,
                    email communications, social media interactions, and payment
                    gateways;
                  </li>
                  <li style={{ marginBottom: 6 }}>
                    Third parties acting on behalf of the Company (such as
                    logistics providers, payment processors, marketing
                    affiliates, or cloud service providers), to the extent that
                    they process Personal Data under the Company's instructions
                    and authority;
                  </li>
                  <li style={{ marginBottom: 6 }}>
                    Personal Data processed in India, as well as data collected
                    from Users outside India but processed or stored in India,
                    subject to applicable local and cross-border data transfer
                    laws.
                  </li>
                </ol>
              </li>
              <li style={{ marginBottom: 12 }}>
                This Policy shall apply regardless of the device, platform, or
                medium used to access the Company's services, including
                desktops, mobile phones, tablets, smart devices, and other
                digital channels.
              </li>
              <li style={{ marginBottom: 12 }}>
                This Policy does not apply to:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li style={{ marginBottom: 6 }}>
                    Aggregated or anonymised information that does not, directly
                    or indirectly, identify an individual;
                  </li>
                  <li style={{ marginBottom: 6 }}>
                    Third-party websites, platforms, or applications which may
                    be linked from the Company's Platform but are not owned or
                    operated by the Company. Users are encouraged to review the
                    privacy policies of such third-party services independently;
                  </li>
                  <li style={{ marginBottom: 6 }}>
                    Data that is collected or processed for purely personal,
                    household, or journalistic purposes by individuals and is
                    exempted under the provisions of the Digital Personal Data
                    Protection Act, 2023.
                  </li>
                </ol>
              </li>
              <li style={{ marginBottom: 12 }}>
                By accessing or using the Platform or otherwise providing
                Personal Data to the Company, the User expressly acknowledges
                and agrees to the terms of this Policy, and consents to the
                processing of their Personal Data in accordance with the terms
                stated herein.
              </li>
              <li style={{ marginBottom: 12 }}>
                In case of any conflict between this Policy and any contractual
                terms agreed between the Company and any Data Principal (such as
                employees, vendors, or consultants), the provisions offering
                higher privacy protection shall prevail, unless otherwise
                required by applicable law.
              </li>
            </ol>
          </section>

          {/* Section 3 */}
          <section id="categories" style={{ marginBottom: 60 }}>
            <SectionTitle
              number="3"
              title="CATEGORIES OF PERSONAL DATA COLLECTED"
            />
            <p style={textStyle}>
              a. In the course of providing its products, services, and
              operating its Platform, the Company may collect and process the
              following categories of Personal Data, either directly from the
              User or through third-party service providers acting on its
              behalf:
            </p>

            <div style={{ overflowX: "auto", marginTop: 20, marginBottom: 20 }}>
              <table style={tableStyle}>
                <thead>
                  <tr style={{ background: "#0f1110", color: "#fff" }}>
                    <th style={thStyle}>CATEGORY</th>
                    <th style={thStyle}>DESCRIPTION</th>
                    <th style={thStyle}>SOURCE</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Identity Data",
                      "Full name, username, gender, user ID",
                      "User during account registration or checkout",
                    ],
                    [
                      "Contact Data",
                      "Email address, mobile number, billing address, shipping address",
                      "Checkout forms, account registration",
                    ],
                    [
                      "Payment and Financial Data",
                      "Credit/debit card number (masked), UPI ID, bank account details (limited), billing transaction ID, payment timestamps",
                      "Payment gateway, order processing",
                    ],
                    [
                      "Order and Transaction Data",
                      "Purchase history, order ID, cart items, delivery tracking number, mode of payment",
                      "Platform backend, logistics partners",
                    ],
                    [
                      "Device & Technical Data",
                      "IP address, browser type, device type, operating system, screen resolution, time zone, device identifiers",
                      "Automatically via website or app",
                    ],
                    [
                      "Usage Data",
                      "Browsing behaviour, clickstream, pages visited, time spent, items added to cart or wishlist",
                      "Analytics tools, cookies",
                    ],
                    [
                      "Marketing & Communication Data",
                      "Newsletter opt-in, promotional preferences, communication logs, feedback or responses",
                      "User entries, CRM tools",
                    ],
                    [
                      "Account Credentials",
                      "Hashed passwords, OTP verification records, login timestamps",
                      "Registration & login systems",
                    ],
                    [
                      "Social Media Data",
                      "Public profile name, email ID, or linked account data when logged in via social platforms",
                      "Facebook, Google login integrations",
                    ],
                    [
                      "Customer Support Data",
                      "Chat transcripts, service tickets, complaint records, call recordings (if applicable)",
                      "Helpdesk tools, email/chat support",
                    ],
                    [
                      "Location Data (if any)",
                      "Approximate geolocation or delivery location via IP or GPS (when permitted by the user)",
                      "Device/browser during use",
                    ],
                    [
                      "Referral or Affiliate Data",
                      "Referral codes, influencer coupon usage, affiliate tracking URLs",
                      "Marketing platforms",
                    ],
                    [
                      "User-Generated Content",
                      "Product reviews, comments, feedback, testimonials, and uploaded media (images/videos)",
                      "Platform, user interaction",
                    ],
                  ].map(([cat, desc, src], i) => (
                    <tr
                      key={i}
                      style={{ background: i % 2 === 0 ? "#fff" : "#f8f8f5" }}
                    >
                      <td style={tdStyle}>
                        <strong>{cat}</strong>
                      </td>
                      <td style={tdStyle}>{desc}</td>
                      <td style={tdStyle}>{src}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ ...textStyle, marginTop: 16 }}>
              b. The above Personal Data may be collected at the time of account
              creation, while placing an order, subscribing to newsletters,
              interacting with the Platform or customer care, participating in
              surveys or contests, or otherwise voluntarily provided by the
              User.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              c. In addition to the above, the Company may collect certain{" "}
              <strong>Non-Personal Data</strong> (data that does not identify an
              individual directly or indirectly), which may include aggregated
              statistics, anonymised usage metrics, and analytics data, solely
              for internal research, service improvement, or marketing
              performance purposes.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              d. The Company does not intentionally collect or process{" "}
              <strong>biometric data</strong>, <strong>health data</strong>, or{" "}
              <strong>official government identifiers</strong> (such as Aadhaar
              or PAN), unless specifically required by law or consented to by
              the User for a legitimate purpose.
            </p>
          </section>

          {/* Section 4 */}
          <section id="use" style={{ marginBottom: 60 }}>
            <SectionTitle number="4" title="PURPOSE OF DATA COLLECTION & USE" />
            <p style={textStyle}>
              a) The Company collects and processes Personal Data only for
              specified, lawful, and legitimate purposes. Such processing is
              done either with the consent of the Data Principal or as
              reasonably necessary for the performance of a contract, compliance
              with legal obligations, or for purposes permissible under
              applicable law.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              b) The following table outlines the specific purposes for which
              each category of Personal Data may be collected and used:
            </p>

            <div style={{ overflowX: "auto", marginTop: 20, marginBottom: 20 }}>
              <table style={tableStyle}>
                <thead>
                  <tr style={{ background: "#0f1110", color: "#fff" }}>
                    <th style={thStyle}>PURPOSE OF PROCESSING</th>
                    <th style={thStyle}>CATEGORY OF PERSONAL DATA INVOLVED</th>
                    <th style={thStyle}>LEGAL BASIS UNDER DPDPA</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "To process, fulfil and deliver orders",
                      "Identity Data, Contact Data, Payment Data, Transaction Data, Location Data",
                      "Performance of contract; Consent",
                    ],
                    [
                      "To provide account registration and login functionality",
                      "Identity Data, Account Credentials, Contact Data",
                      "Consent; Legitimate use",
                    ],
                    [
                      "To communicate order updates and service-related information",
                      "Contact Data, Order Data, Transaction Data",
                      "Legitimate use; Performance of contract",
                    ],
                    [
                      "To personalise user experience and recommend products",
                      "Usage Data, Device Data, Purchase History, Wishlist",
                      "Consent (via cookies); Legitimate use",
                    ],
                    [
                      "To conduct marketing campaigns and send promotional content",
                      "Contact Data, Marketing Preferences, Purchase History",
                      "Explicit Consent",
                    ],
                    [
                      "To conduct customer satisfaction surveys, reviews, and feedback",
                      "Contact Data, Usage Data, Review Content",
                      "Consent",
                    ],
                    [
                      "To provide customer service and resolve complaints",
                      "Contact Data, Order Data, Support Data",
                      "Legitimate use; Performance of contract",
                    ],
                    [
                      "To detect and prevent fraud, abuse or policy violations",
                      "Identity Data, Device Data, Transaction Data",
                      "Legitimate use; Legal obligation",
                    ],
                    [
                      "To comply with applicable legal, regulatory and tax requirements",
                      "Identity Data, Transaction Data, Payment Data",
                      "Legal obligation",
                    ],
                    [
                      "To maintain records for audit, dispute resolution, and risk management",
                      "Identity Data, Transaction Data, Payment Data, Contact Data",
                      "Legal obligation; Legitimate interest",
                    ],
                    [
                      "To improve website performance, analytics and internal reporting",
                      "Usage Data, Device Data, Aggregated Non-Personal Data",
                      "Consent (via cookie consent); Legitimate use",
                    ],
                    [
                      "To process influencer codes and affiliate marketing programs",
                      "Referral Data, Identity Data, Transaction Data",
                      "Consent; Performance of contract",
                    ],
                  ].map(([purpose, data, basis], i) => (
                    <tr
                      key={i}
                      style={{ background: i % 2 === 0 ? "#fff" : "#f8f8f5" }}
                    >
                      <td style={tdStyle}>{purpose}</td>
                      <td style={tdStyle}>{data}</td>
                      <td style={tdStyle}>{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ ...textStyle, marginTop: 16 }}>
              c) The Company does not use Personal Data for any purpose other
              than those stated above without providing appropriate notice and,
              where applicable, obtaining specific and informed consent from the
              Data Principal.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              d) Where consent is the legal basis for processing, the User may
              withdraw such consent at any time by contacting the Grievance
              Officer or using the mechanisms provided on the Platform. However,
              withdrawal of consent may affect the ability to deliver certain
              products or services.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              e) The Company ensures that all processing of Personal Data is
              proportionate, limited to the extent necessary for the stated
              purposes, and in accordance with the principles of fairness,
              transparency, and accountability under applicable law.
            </p>
          </section>

          {/* Section 5 */}
          <section id="legal-basis" style={{ marginBottom: 60 }}>
            <SectionTitle number="5" title="LEGAL BASIS FOR PROCESSING" />
            <p style={textStyle}>
              a) The Company processes Personal Data only when there is a{" "}
              <strong>lawful basis</strong> for such processing under the
              Digital Personal Data Protection Act, 2023, or other applicable
              laws. The legal bases may include one or more of the following:
            </p>

            <ol
              style={{
                listStyle: "lower-roman",
                paddingLeft: 24,
                lineHeight: 1.9,
                fontSize: 15,
                color: "#333",
                marginTop: 12,
              }}
            >
              <li style={{ marginBottom: 16 }}>
                <strong>Consent of the Data Principal:</strong> Where the
                Company collects Personal Data directly from a User or Data
                Principal, it shall do so after obtaining the individual's free,
                specific, informed, unconditional, and unambiguous consent
                through clear affirmative action.
                <br />
                <br />
                <strong>Examples:</strong>
                <ol
                  style={{
                    listStyle: "decimal",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>Subscribing to marketing emails or newsletters;</li>
                  <li>Providing optional demographic details or feedback;</li>
                  <li>
                    Participating in surveys, contests, or promotional
                    campaigns;
                  </li>
                  <li>Creating an account on the Platform.</li>
                </ol>
              </li>
              <li style={{ marginBottom: 16 }}>
                The User may withdraw consent at any time through the settings
                panel, opt-out links, or by contacting the Grievance Officer.
                Such withdrawal shall not affect any prior lawful processing.
              </li>
              <li style={{ marginBottom: 16 }}>
                <strong>Performance of a Contract:</strong> The Company may
                process Personal Data where such processing is necessary to
                fulfil its obligations under a contract with the Data Principal
                or to take steps at their request before entering into a
                contract.
                <br />
                <br />
                <strong>Examples:</strong>
                <ol
                  style={{
                    listStyle: "decimal",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>Processing an order placed by a User;</li>
                  <li>Arranging for delivery, payment, and returns;</li>
                  <li>Providing customer support regarding the order.</li>
                </ol>
              </li>
              <li style={{ marginBottom: 16 }}>
                <strong>Compliance with Legal Obligations:</strong> The Company
                may process Personal Data where it is legally required to do so
                under applicable laws, court orders, or regulations, including
                requirements imposed by government or law enforcement agencies.
                <br />
                <br />
                <strong>Examples:</strong>
                <ol
                  style={{
                    listStyle: "decimal",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>Complying with taxation and invoicing regulations;</li>
                  <li>Retaining records for audits;</li>
                  <li>
                    Assisting law enforcement in fraud or criminal
                    investigations;
                  </li>
                  <li>
                    Compliance with obligations under the Information Technology
                    Act or applicable consumer laws.
                  </li>
                </ol>
              </li>
              <li style={{ marginBottom: 16 }}>
                <strong>
                  Legitimate Use (as permitted under Section 7 of the DPDPA,
                  2023):
                </strong>{" "}
                The Company may process Personal Data without consent for
                certain "legitimate uses" as explicitly provided under the
                DPDPA, including but not limited to:
                <div style={{ overflowX: "auto", marginTop: 12 }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr style={{ background: "#0f1110", color: "#fff" }}>
                        <th style={thStyle}>LEGITIMATE USE CATEGORY</th>
                        <th style={thStyle}>EXAMPLE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Voluntary Data Provided by User",
                          "User submits details for placing an order or contacting customer support",
                        ],
                        [
                          "Provision of Benefit or Service",
                          "Delivering a purchased product or issuing an invoice",
                        ],
                        [
                          "Legal Proceedings or Dispute Resolution",
                          "Defending legal claims, enforcing contractual rights",
                        ],
                        [
                          "Public Interest or Public Order",
                          "Co-operating with investigations, law enforcement or public safety officials",
                        ],
                        [
                          "Employment or Internal Administration",
                          "Processing employee/vendor data for internal compliance or record-keeping",
                        ],
                      ].map(([cat, ex], i) => (
                        <tr
                          key={i}
                          style={{
                            background: i % 2 === 0 ? "#fff" : "#f8f8f5",
                          }}
                        >
                          <td style={tdStyle}>
                            <strong>{cat}</strong>
                          </td>
                          <td style={tdStyle}>{ex}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </li>
              <li style={{ marginBottom: 16 }}>
                The Company ensures that any reliance on legitimate use does not
                override the fundamental rights and expectations of the Data
                Principal and is consistent with the purpose limitation and
                necessity principles.
              </li>
              <li style={{ marginBottom: 16 }}>
                <strong>
                  Public Interest or Public Health (If Applicable):
                </strong>{" "}
                In exceptional circumstances such as pandemics or emergencies,
                the Company may process Personal Data in the interest of public
                health, subject to applicable statutory permissions or
                directions from government authorities.
              </li>
              <li style={{ marginBottom: 16 }}>
                Where Personal Data is collected indirectly or through
                third-party service providers, the Company ensures that such
                third parties have obtained appropriate legal basis (including
                consent) for sharing such data with the Company. A list of
                categories of third parties (including their names, where
                applicable) with whom Personal Data may be shared is set out
                below. These third parties are contractually obligated to
                maintain the confidentiality and security of the data and to
                process such data strictly in accordance with applicable law and
                instructions issued by the Company.
                <div style={{ overflowX: "auto", marginTop: 12 }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr style={{ background: "#0f1110", color: "#fff" }}>
                        <th style={thStyle}>CATEGORY</th>
                        <th style={thStyle}>PURPOSE OF PROCESSING</th>
                        <th style={thStyle}>TYPE OF DATA SHARED</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Payment Processors",
                          "To facilitate secure payments",
                          "Name, contact, transaction ID, masked card/bank info",
                        ],
                        [
                          "Shipping & Logistics Partners",
                          "To deliver orders and provide tracking",
                          "Name, contact, address, order details",
                        ],
                        [
                          "Email & SMS Communication",
                          "To send order updates, alerts, and promotional messages",
                          "Email, phone number, communication logs",
                        ],
                        [
                          "Web Hosting & Infrastructure",
                          "Website operation, backups, and performance",
                          "Device metadata, IP address, access logs",
                        ],
                        [
                          "Marketing and Retargeting Tools",
                          "Online advertising, analytics, and promotional campaigns",
                          "IP address, browsing behavior, cookies",
                        ],
                        [
                          "Customer Support Tools",
                          "Customer query management and ticketing",
                          "Name, contact, chat logs, order info",
                        ],
                        [
                          "Analytics & Tracking Providers",
                          "Monitor website usage and improve services",
                          "IP, session data, page visits, clicks",
                        ],
                        [
                          "Affiliate/Influencer Platforms",
                          "Track referral codes, commissions",
                          "Referral ID, coupon usage, transaction data",
                        ],
                        [
                          "Internal Consultants & Auditors",
                          "Legal, tax, or compliance purposes",
                          "Financial, order, and sometimes user data",
                        ],
                        [
                          "Government or Legal Authorities",
                          "Legal compliance, law enforcement",
                          "Any legally mandated personal data, upon request",
                        ],
                      ].map(([cat, purpose, data], i) => (
                        <tr
                          key={i}
                          style={{
                            background: i % 2 === 0 ? "#fff" : "#f8f8f5",
                          }}
                        >
                          <td style={tdStyle}>
                            <strong>{cat}</strong>
                          </td>
                          <td style={tdStyle}>{purpose}</td>
                          <td style={tdStyle}>{data}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </li>
              <li style={{ marginBottom: 16 }}>
                The Company maintains detailed internal records of the legal
                basis applicable to each processing activity, and such records
                are reviewed periodically to ensure compliance.
              </li>
              <li style={{ marginBottom: 16 }}>
                In cases where the legal basis for processing changes (e.g.,
                from contract to consent), the Company shall notify the Data
                Principal and, where required, obtain fresh consent before
                proceeding.
              </li>
            </ol>
          </section>

          {/* Section 6 */}
          <section id="consent" style={{ marginBottom: 60 }}>
            <SectionTitle number="6" title="CONSENT MANAGEMENT" />
            <ol
              style={{
                listStyle: "lower-alpha",
                paddingLeft: 24,
                lineHeight: 1.9,
                fontSize: 15,
                color: "#333",
              }}
            >
              <li style={{ marginBottom: 12 }}>
                Obtaining Consent: The Company shall obtain the free, specific,
                informed, unconditional, and unambiguous consent of the Data
                Principal before collecting or processing any Personal Data,
                unless the processing is permitted under legitimate use or legal
                obligation in accordance with Section 5 of this Policy.
              </li>
              <li style={{ marginBottom: 12 }}>
                Consent is obtained in a clear and granular manner at the point
                of data collection, such as during:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>Account registration;</li>
                  <li>Checkout and payment stages;</li>
                  <li>
                    Subscription to newsletters or marketing communications;
                  </li>
                  <li>
                    Participation in contests, surveys, or referral programs;
                  </li>
                  <li>
                    Accepting cookies and similar tracking technologies on the
                    website.
                  </li>
                </ol>
              </li>
              <li style={{ marginBottom: 12 }}>
                No pre-ticked boxes, bundled consent, or inferred consent
                mechanisms are used. Consent must be affirmatively provided by
                the User.
              </li>
              <li style={{ marginBottom: 12 }}>
                Layered Notices: All consent requests are accompanied by a{" "}
                <strong>layered privacy notice</strong> that includes:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>The purpose of data collection;</li>
                  <li>The categories of data collected;</li>
                  <li>Whether the data will be shared with third parties;</li>
                  <li>A link to this Privacy Policy;</li>
                  <li>Contact details of the Grievance Officer.</li>
                </ol>
              </li>
              <li style={{ marginBottom: 12 }}>
                These notices are drafted in{" "}
                <strong>clear, plain, and concise language</strong> to ensure
                that Users understand what they are agreeing to.
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Proof and Record of Consent:</strong> The Company
                maintains <strong>verifiable records</strong> of the consent
                obtained from each Data Principal, including the time, method,
                and purpose for which consent was granted. These records are
                stored securely and may be made available to the Data Protection
                Board or other authorities in the event of a lawful request or
                audit.
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Refusal or Conditional Consent:</strong>
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>
                    Users have the right to <strong>refuse consent</strong> for
                    optional features (such as marketing communications) without
                    affecting their access to essential services (such as
                    ordering products).
                  </li>
                  <li>
                    Any conditional consent that ties unrelated services or
                    benefits to the provision of Personal Data is not enforced
                    by the Company, unless reasonably necessary for the
                    functioning of such services.
                  </li>
                </ol>
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Withdrawal of Consent:</strong>
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>
                    The Data Principal may withdraw consent at any time, without
                    any adverse consequences, by:
                    <ol
                      style={{
                        listStyle: "decimal",
                        paddingLeft: 24,
                        marginTop: 8,
                      }}
                    >
                      <li>
                        Using the unsubscribe or opt-out links in emails or
                        messages;
                      </li>
                      <li>Changing settings in the user account dashboard;</li>
                      <li>
                        Contacting the Grievance Officer directly at{" "}
                        <a href="mailto:legal@la-fetch.com" style={linkStyle}>
                          legal@la-fetch.com
                        </a>
                        .
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Upon withdrawal of consent:</strong>
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>
                    The Company shall cease processing the concerned Personal
                    Data within a reasonable time, unless required to retain it
                    under law;
                  </li>
                  <li>
                    Certain services may become unavailable to the User where
                    such services are dependent on the withdrawn data.
                  </li>
                </ol>
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Consent for Minors:</strong>
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>
                    The Company does not knowingly collect Personal Data from
                    individuals below the age of 18 years without verifiable
                    parental or guardian consent as required under Section 9 of
                    the DPDPA, 2023.
                  </li>
                  <li>
                    If the Company becomes aware that Personal Data of a minor
                    has been collected without lawful parental consent, such
                    data shall be promptly deleted.
                  </li>
                </ol>
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Cookies and Tracking Consent:</strong>
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>
                    The Company uses cookies and similar technologies for
                    enhancing User experience, analytics, and targeted
                    advertising.
                  </li>
                  <li>
                    Consent for cookies is obtained through a cookie banner that
                    allows Users to:
                    <ol
                      style={{
                        listStyle: "decimal",
                        paddingLeft: 24,
                        marginTop: 8,
                      }}
                    >
                      <li>Accept all cookies;</li>
                      <li>Manage preferences by category;</li>
                      <li>Reject non-essential cookies.</li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </section>

          {/* Children's Data */}
          <section id="childrens-data" style={{ marginBottom: 60 }}>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                borderBottom: "2px solid #c8a96e",
                paddingBottom: 10,
                marginBottom: 24,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              CHILDREN'S DATA
            </h2>
            <p style={textStyle}>
              The Company is committed to protecting the privacy of children and
              complying with the provisions of{" "}
              <strong>
                Section 9 of the Digital Personal Data Protection Act, 2023
              </strong>
              , which restricts the processing of personal data of children
              without verifiable parental or guardian consent.
            </p>
            <ol
              style={{
                listStyle: "lower-alpha",
                paddingLeft: 24,
                lineHeight: 1.9,
                fontSize: 15,
                color: "#333",
                marginTop: 12,
              }}
            >
              <li style={{ marginBottom: 12 }}>
                For the purposes of this Policy, a <strong>child</strong> is
                defined as an individual who has not completed the age of{" "}
                <strong>18 years</strong>, unless a different age threshold is
                prescribed by applicable law.
              </li>
              <li style={{ marginBottom: 12 }}>
                The Company does not knowingly collect, process, or store
                Personal Data from children unless:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>
                    It is necessary for delivering a service explicitly intended
                    for child users; and
                  </li>
                  <li>
                    Verifiable parental or guardian consent has been obtained
                    through acceptable means, such as a digitally signed
                    declaration or validated OTP-based consent process.
                  </li>
                </ol>
              </li>
              <li style={{ marginBottom: 12 }}>
                If it comes to the Company's attention that Personal Data of a
                child has been collected without lawful consent, the Company
                shall:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>
                    Promptly delete such Personal Data from its systems; and
                  </li>
                  <li>
                    Notify the parent or guardian, if identifiable, of such
                    deletion.
                  </li>
                </ol>
              </li>
              <li style={{ marginBottom: 12 }}>
                The Company does not engage in behavioural tracking, profiling,
                or targeted advertising towards children, directly or
                indirectly, in compliance with the prohibitions under Section 9
                of the DPDPA.
              </li>
            </ol>
          </section>

          {/* Section 7 */}
          <section id="cookies" style={{ marginBottom: 60 }}>
            <SectionTitle number="7" title="COOKIE AND TRACKING TECHNOLOGIES" />
            <ol
              style={{
                listStyle: "lower-alpha",
                paddingLeft: 24,
                lineHeight: 1.9,
                fontSize: 15,
                color: "#333",
              }}
            >
              <li style={{ marginBottom: 12 }}>
                The Company uses cookies and similar tracking technologies (such
                as pixels, beacons, and local storage) on its Website and mobile
                applications to enhance user experience, deliver personalized
                content, enable core functionalities, analyze usage trends, and
                facilitate marketing campaigns.
              </li>
              <li style={{ marginBottom: 12 }}>
                Users are shown a cookie consent banner upon their first visit
                to the Platform, in accordance with the notice and consent
                requirements under the Digital Personal Data Protection Act,
                2023, and the IT (Reasonable Security Practices and Procedures
                and Sensitive Personal Data or Information) Rules, 2011. This
                banner allows Users to:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>Accept all cookies;</li>
                  <li>Reject non-essential cookies;</li>
                  <li>Manage preferences granularly by category.</li>
                </ol>
              </li>
              <li style={{ marginBottom: 12 }}>
                The types of cookies used, their purposes, and the list of
                third-party tools involved are described in the{" "}
                <strong>Company's Cookie Policy</strong>, which forms an
                integral part of this Privacy Policy.
              </li>
              <li style={{ marginBottom: 12 }}>
                Users may review or update their cookie preferences at any time
                by visiting the <strong>Cookie Settings Panel</strong> available
                in the footer of the Website or in their account dashboard.
              </li>
              <li style={{ marginBottom: 12 }}>
                For more detailed information on our cookie practices, including
                how to manage or disable cookies at the browser level, please
                refer to our full Cookie Policy.
              </li>
            </ol>
          </section>

          {/* Section 8 */}
          <section id="sharing" style={{ marginBottom: 60 }}>
            <SectionTitle
              number="8"
              title="DATA SHARING AND THIRD-PARTY TRANSFERS"
            />
            <ol
              style={{
                listStyle: "lower-alpha",
                paddingLeft: 24,
                lineHeight: 1.9,
                fontSize: 15,
                color: "#333",
              }}
            >
              <li style={{ marginBottom: 12 }}>
                <strong>Internal Access and Sharing:</strong> Personal Data
                collected by the Company may be accessed by authorised internal
                teams, including but not limited to operations, customer
                support, marketing, logistics coordination, product development,
                finance, and compliance, strictly on a need-to-know basis. All
                such access is governed by internal access controls,
                confidentiality obligations, and data minimisation principles.
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Third-Party Disclosures:</strong> The Company may share
                Personal Data with trusted third-party service providers,
                vendors, and business partners (collectively, "Third Parties")
                solely for the purpose of enabling the Company to provide its
                products and services efficiently. These Third Parties process
                Personal Data on behalf of the Company and are contractually
                bound to comply with applicable data protection laws, maintain
                data confidentiality, and use the data only for the specified
                purposes. A summary of categories of Third Parties with whom
                data may be shared, and the purpose of sharing, is set out in
                Section 5(a)(viii) above.
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Categories of Third Parties May Include:</strong>
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>
                    Payment gateways and processors — to facilitate secure
                    payment transactions;
                  </li>
                  <li>
                    Shipping and logistics providers — to deliver products to
                    customers;
                  </li>
                  <li>
                    Cloud hosting and IT infrastructure providers — to securely
                    store and manage Platform data;
                  </li>
                  <li>
                    Marketing, analytics, and advertising tools — to run
                    campaigns and personalise content;
                  </li>
                  <li>
                    Customer support and CRM tools — to resolve service requests
                    and complaints;
                  </li>
                  <li>
                    Auditors, legal counsel, tax advisors — for regulatory,
                    dispute, or audit purposes;
                  </li>
                  <li>
                    Government authorities or law enforcement — when required
                    under applicable laws or court orders.
                  </li>
                </ol>
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Cross-Border Transfers:</strong>
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>
                    As of the effective date of this Policy, the Company stores
                    and processes all Personal Data on servers located within
                    India. However, certain third-party tools and service
                    providers may process data on infrastructure located outside
                    India, subject to appropriate legal safeguards.
                  </li>
                  <li>
                    Any transfer of Personal Data outside India (if required in
                    the future) shall be conducted in accordance with Section 16
                    of the Digital Personal Data Protection Act, 2023, and any
                    rules or government-issued notifications relating to
                    cross-border transfers.
                  </li>
                  <li>
                    The Company shall ensure that any such transfers are made:
                    <ol
                      style={{
                        listStyle: "decimal",
                        paddingLeft: 24,
                        marginTop: 8,
                      }}
                    >
                      <li>
                        To countries or territories recognised by the Indian
                        Government as having adequate data protection standards;
                        or
                      </li>
                      <li>
                        Pursuant to appropriate contractual arrangements (such
                        as standard contractual clauses or data protection
                        agreements) that ensure the same level of data
                        protection as applicable under Indian law.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <strong>No Sale of Personal Data:</strong> The Company does
                    not sell, rent, trade, or otherwise monetise Personal Data
                    of its users or customers to any third party for direct
                    commercial gain.
                  </li>
                  <li>
                    <strong>Aggregated and Anonymised Data:</strong> The Company
                    may share anonymised or aggregated data (which does not
                    identify an individual directly or indirectly) with business
                    partners, advertisers, or research agencies for the purpose
                    of market analysis, trend detection, or improving services.
                    Such data is outside the scope of "Personal Data" as defined
                    under applicable law.
                  </li>
                  <li>
                    <strong>Due Diligence and Oversight:</strong> The Company
                    undertakes vendor due diligence and executes appropriate
                    data processing agreements or confidentiality undertakings
                    with all Third Parties who receive or process Personal Data,
                    ensuring that:
                    <ol
                      style={{
                        listStyle: "decimal",
                        paddingLeft: 24,
                        marginTop: 8,
                      }}
                    >
                      <li>
                        Data is processed only for legitimate and stated
                        purposes;
                      </li>
                      <li>
                        Adequate security measures are in place to prevent
                        misuse or unauthorised access;
                      </li>
                      <li>
                        Processing ceases upon completion of the contractual
                        purpose or termination of engagement.
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </section>

          {/* Section 9 */}
          <section id="retention" style={{ marginBottom: 60 }}>
            <SectionTitle number="9" title="DATA RETENTION & STORAGE" />
            <ol
              style={{
                listStyle: "lower-alpha",
                paddingLeft: 24,
                lineHeight: 1.9,
                fontSize: 15,
                color: "#333",
              }}
            >
              <li style={{ marginBottom: 12 }}>
                <strong>Retention Principle:</strong> The Company retains
                Personal Data only for as long as is reasonably necessary to:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>Fulfil the purpose for which it was collected;</li>
                  <li>Comply with legal or regulatory obligations;</li>
                  <li>
                    Resolve disputes, enforce contracts, or defend legal claims;
                  </li>
                  <li>
                    Maintain records for auditing, taxation, or business
                    continuity purposes.
                  </li>
                </ol>
              </li>
              <li style={{ marginBottom: 12 }}>
                The retention period is determined by the nature of the data,
                the purpose of processing, and any applicable legal or
                contractual requirements.
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Data Retention Timelines:</strong>
                <div style={{ overflowX: "auto", marginTop: 12 }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr style={{ background: "#0f1110", color: "#fff" }}>
                        <th style={thStyle}>CATEGORY OF DATA</th>
                        <th style={thStyle}>TYPICAL RETENTION PERIOD</th>
                        <th style={thStyle}>LEGAL/OPERATIONAL BASIS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Identity and Contact Data",
                          "3 years from last activity or transaction",
                          "Statutory limitation period for claims, customer support",
                        ],
                        [
                          "Order and Transaction Data",
                          "8 years from date of transaction",
                          "Income Tax Act, accounting and audit requirements",
                        ],
                        [
                          "Payment and Financial Data (masked)",
                          "Retained as per Payment Aggregator Guidelines (RBI)",
                          "Regulatory requirements and fraud detection",
                        ],
                        [
                          "Customer Support and Complaint Logs",
                          "3 years from last contact",
                          "Dispute resolution and quality assurance",
                        ],
                        [
                          "Marketing Preferences and Opt-in Data",
                          "Until withdrawal of consent or inactivity beyond 2 years",
                          "Consent-based processing",
                        ],
                        [
                          "Analytics and Usage Data (pseudonymised)",
                          "12–18 months from date of collection",
                          "Internal performance and improvement analysis",
                        ],
                        [
                          "Account Credentials",
                          "Until account is deleted or deactivated",
                          "Contractual necessity for user authentication",
                        ],
                        [
                          "Unused or Dormant Account Data",
                          "2 years of inactivity (with 30-day prior notice before deletion)",
                          "Data minimisation and retention compliance",
                        ],
                        [
                          "Anonymised or Aggregated Data",
                          "Retained indefinitely",
                          'Outside scope of "Personal Data" under DPDPA',
                        ],
                      ].map(([cat, period, basis], i) => (
                        <tr
                          key={i}
                          style={{
                            background: i % 2 === 0 ? "#fff" : "#f8f8f5",
                          }}
                        >
                          <td style={tdStyle}>{cat}</td>
                          <td style={tdStyle}>{period}</td>
                          <td style={tdStyle}>{basis}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ ...textStyle, marginTop: 12, fontStyle: "italic" }}>
                  Note: The above periods are subject to change in case of any
                  legal proceedings, enforcement actions, or statutory hold
                  directives.
                </p>
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Deletion and De-identification:</strong> Upon expiration
                of the applicable retention period, Personal Data is either:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>
                    Permanently deleted from all systems (active and backup); or
                  </li>
                  <li>
                    Anonymised or de-identified in a way that prevents
                    re-identification of the Data Principal.
                  </li>
                </ol>
                <p style={{ ...textStyle, marginTop: 8 }}>
                  The Company ensures that deletion is performed in a secure
                  manner using industry-standard sanitisation or erasure
                  methods.
                </p>
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Right to Request Deletion:</strong>
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>
                    A Data Principal may request deletion of their Personal Data
                    where:
                    <ol
                      style={{
                        listStyle: "decimal",
                        paddingLeft: 24,
                        marginTop: 8,
                      }}
                    >
                      <li>
                        The data is no longer necessary for the purpose for
                        which it was collected;
                      </li>
                      <li>
                        Consent has been withdrawn and there is no other legal
                        basis for retention;
                      </li>
                      <li>The data has been unlawfully processed.</li>
                    </ol>
                  </li>
                  <li>
                    Such requests will be honoured subject to legal and
                    contractual retention obligations and shall be responded to
                    within a reasonable period as prescribed under the DPDPA,
                    2023.
                  </li>
                </ol>
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Storage Location and Backups:</strong> Personal Data is
                stored on secure servers operated by the Company or its
                authorised hosting providers, currently located in{" "}
                <strong>India</strong>. Periodic{" "}
                <strong>encrypted backups</strong> are maintained to ensure data
                recoverability in case of system failure, which are subject to
                the same retention and deletion practices outlined above.
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Policy Review and Updates:</strong> The Company
                periodically reviews its data retention schedules and storage
                practices to ensure compliance with evolving legal standards and
                operational needs. Any changes to retention durations will be
                notified through an update to this Policy.
              </li>
            </ol>
          </section>

          {/* Section 10 */}
          <section id="security" style={{ marginBottom: 60 }}>
            <SectionTitle number="10" title="REASONABLE SECURITY PRACTICES" />
            <ol
              style={{
                listStyle: "lower-alpha",
                paddingLeft: 24,
                lineHeight: 1.9,
                fontSize: 15,
                color: "#333",
              }}
            >
              <li style={{ marginBottom: 12 }}>
                LaFetch is committed to ensuring the security, integrity, and
                confidentiality of the Personal Data it collects and processes.
                In line with Rule 8 of the IT (Reasonable Security Practices and
                Procedures and Sensitive Personal Data or Information) Rules,
                2011, and Section 8(5) of the Digital Personal Data Protection
                Act, 2023, the Company implements appropriate technical,
                organizational, and administrative security measures to protect
                Personal Data against accidental loss, unauthorised access,
                destruction, misuse, alteration, or disclosure.
              </li>
              <li style={{ marginBottom: 12 }}>
                The Company adopts industry-standard safeguards including, but
                not limited to:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>
                    <em>
                      End-to-end encryption of sensitive data during
                      transmission (SSL/TLS protocols);
                    </em>
                  </li>
                  <li>
                    <em>Hashing and salting of passwords;</em>
                  </li>
                  <li>
                    <em>
                      Firewalls and intrusion detection systems for network
                      monitoring;
                    </em>
                  </li>
                  <li>
                    <em>
                      Access control policies based on role and need-to-know;
                    </em>
                  </li>
                  <li>
                    <em>Secure APIs and encrypted payment gateways;</em>
                  </li>
                  <li>
                    <em>
                      Multi-factor authentication (MFA) for administrative and
                      system access;
                    </em>
                  </li>
                  <li>
                    <em>
                      Logging and monitoring of access to sensitive systems;
                    </em>
                  </li>
                  <li>
                    <em>
                      Regular vulnerability assessments and penetration testing
                      (VAPT);
                    </em>
                  </li>
                  <li>
                    <em>Frequent security patching and system updates.</em>
                  </li>
                </ol>
              </li>
              <li style={{ marginBottom: 12 }}>
                Personal Data is stored in secure servers hosted on reputable
                cloud platforms that are compliant with industry frameworks such
                as ISO/IEC 27001 and SOC 2, where applicable. All third-party
                service providers processing Personal Data on the Company's
                behalf are contractually bound to adhere to similar or higher
                levels of security and confidentiality.
              </li>
            </ol>
          </section>

          {/* Section 11 */}
          <section id="breach" style={{ marginBottom: 60 }}>
            <SectionTitle
              number="11"
              title="NOTIFICATION OF PERSONAL DATA BREACH"
            />
            <ol
              style={{
                listStyle: "lower-alpha",
                paddingLeft: 24,
                lineHeight: 1.9,
                fontSize: 15,
                color: "#333",
              }}
            >
              <li style={{ marginBottom: 12 }}>
                LaFetch adopts a proactive and structured approach to
                identifying, mitigating, and responding to any personal data
                breach. A personal data breach refers to any unauthorised or
                accidental disclosure, alteration, loss, destruction, or access
                to Personal Data that compromises its confidentiality,
                integrity, or availability—whether caused by technical failures,
                malicious attacks, human error, or organisational gaps.
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Data Breach Response Procedure and Timelines:</strong>{" "}
                In the event of a suspected or confirmed data breach, the
                Company shall activate its internal Data Breach Response
                Procedure, which comprises the following steps and timeframes{" "}
                <strong>as detailed in Annexure A.</strong>
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Information Included in Notifications:</strong> Any
                notification to the Data Protection Board of India, CERT-In, or
                affected individuals (Data Principals) shall include the
                following information:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>
                    <em>Nature and categories of Personal Data affected;</em>
                  </li>
                  <li>
                    <em>Number of individuals impacted;</em>
                  </li>
                  <li>
                    <em>
                      Date and time of the breach (estimated and confirmed);
                    </em>
                  </li>
                  <li>
                    <em>Likely consequences or harm;</em>
                  </li>
                  <li>
                    <em>Actions taken to mitigate risks and limit damage;</em>
                  </li>
                  <li>
                    <em>
                      Contact information of the Grievance Officer or point of
                      contact;
                    </em>
                  </li>
                  <li>
                    <em>
                      Instructions for Users on how to protect themselves.
                    </em>
                  </li>
                </ol>
              </li>
              <li style={{ marginBottom: 12 }}>
                Breach Severity Categorisation: The Company classifies data
                breaches into three severity levels:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>
                    Level 1 — Minor: No sensitive data involved, minimal or no
                    risk;
                  </li>
                  <li>
                    Level 2 — Moderate: Involves contact or identity data,
                    limited exposure;
                  </li>
                  <li>
                    Level 3 — Critical: Involves sensitive personal data,
                    financial data, or a large number of individuals, with
                    potential for significant harm.
                  </li>
                </ol>
                <p style={{ ...textStyle, marginTop: 8 }}>
                  Only Level 2 and Level 3 breaches require mandatory external
                  notification.
                </p>
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>User Cooperation:</strong> Users who become aware of any
                potential compromise of their account, such as unauthorised
                login attempts, phishing emails, or suspicious transactions,
                must report the same immediately by emailing{" "}
                <a
                  href="mailto:info@la-fetch.com"
                  style={{
                    ...linkStyle,
                    background: "#fffde7",
                    padding: "2px 4px",
                  }}
                >
                  info@la-fetch.com
                </a>
                . The Company will investigate such reports on priority and take
                appropriate action.
              </li>
            </ol>
          </section>

          {/* Section 12 */}
          <section id="rights" style={{ marginBottom: 60 }}>
            <SectionTitle number="12" title="RIGHTS OF DATA PRINCIPALS" />
            <p style={textStyle}>
              a) As a Data Principal under the Digital Personal Data Protection
              Act, 2023, you are entitled to exercise the following rights in
              relation to your Personal Data collected and processed by LaFetch.
              These rights are subject to reasonable limitations and applicable
              legal requirements.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              b) As per the Digital Personal Data Protection Act, 2023, Data
              Principals have the following rights in relation to their Personal
              Data:
            </p>

            <div style={{ overflowX: "auto", marginTop: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr style={{ background: "#0f1110", color: "#fff" }}>
                    <th style={thStyle}>RIGHT</th>
                    <th style={thStyle}>DESCRIPTION</th>
                    <th style={thStyle}>TIMELINE FOR RESPONSE</th>
                    <th style={thStyle}>HOW TO EXERCISE THIS RIGHT</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Right to Access",
                      "To know whether the Company processes your Personal Data and request details such as categories, purpose, recipients, and retention period.",
                      "Within 15 working days",
                      "Email a request to legal@la-fetch.com or use your account dashboard (if available).",
                    ],
                    [
                      "Right to Correction",
                      "To request correction, updating, or completion of inaccurate, outdated, or incomplete Personal Data.",
                      "Within 10 working days",
                      "Submit a correction request with valid supporting documents to legal@la-fetch.com",
                    ],
                    [
                      "Right to Erasure",
                      "To request deletion of Personal Data that is no longer necessary, has been unlawfully processed, or after consent withdrawal.",
                      "Within 15 working days",
                      "Send a deletion request via email to legal@la-fetch.com with identity verification.",
                    ],
                    [
                      "Right to Withdraw Consent",
                      "To withdraw previously given consent for specific data processing activities.",
                      "Immediate upon confirmation",
                      "Use opt-out links in emails or write to legal@la-fetch.com specifying the consent to withdraw.",
                    ],
                    [
                      "Right to Grievance Redressal",
                      "To file a complaint regarding delay, denial, misuse, or mishandling of Personal Data or non-fulfilment of rights.",
                      "Acknowledgement in 48 hrs, resolution in 7 working days",
                      "Email your grievance to the Grievance Officer at legal@la-fetch.com",
                    ],
                    [
                      "Right to Nominate",
                      "To nominate another individual to exercise your rights under this Policy in the event of your death or incapacity.",
                      "As per Company records",
                      "Send a signed nomination form or declaration via email to legal@la-fetch.com",
                    ],
                    [
                      "Right to Be Informed",
                      "To receive clear, accessible information on data collection, legal basis, purpose, rights, third-party disclosures, and policy changes.",
                      "Continuous right",
                      "Review this Privacy Policy regularly and subscribe to update notifications via email or the Platform.",
                    ],
                  ].map(([right, desc, timeline, how], i) => (
                    <tr
                      key={i}
                      style={{ background: i % 2 === 0 ? "#fff" : "#f8f8f5" }}
                    >
                      <td style={{ ...tdStyle, fontWeight: 700 }}>{right}</td>
                      <td style={tdStyle}>{desc}</td>
                      <td style={tdStyle}>{timeline}</td>
                      <td style={tdStyle}>{how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 13 */}
          <section id="grievance" style={{ marginBottom: 60 }}>
            <SectionTitle number="13" title="GRIEVANCE REDRESSAL MECHANISM" />
            <ol
              style={{
                listStyle: "lower-alpha",
                paddingLeft: 24,
                lineHeight: 1.9,
                fontSize: 15,
                color: "#333",
              }}
            >
              <li style={{ marginBottom: 12 }}>
                LaFetch is committed to addressing all privacy-related concerns,
                complaints, and requests in a transparent, secure, and
                time-bound manner. In accordance with Section 13 of the Digital
                Personal Data Protection Act, 2023 and Rule 5(9) of the IT
                Rules, 2011, the Company has appointed a Grievance Officer to
                ensure proper handling of grievances related to Personal Data.
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Lodging a Grievance:</strong> If you have any concerns
                or grievances regarding:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>Denial or delay in fulfilling your data rights;</li>
                  <li>
                    Misuse, unauthorised access, or mishandling of your Personal
                    Data;
                  </li>
                  <li>Withdrawal of consent not being respected;</li>
                  <li>Violation of any terms of this Privacy Policy;</li>
                  <li>Any breach of applicable data protection laws;</li>
                </ol>
              </li>
              <li style={{ marginBottom: 12 }}>
                You may raise a grievance by sending an email to the designated
                Grievance Officer:
                <div
                  style={{
                    background: "#f0efe9",
                    border: "1px solid #d4c5a4",
                    borderRadius: 6,
                    padding: "20px 24px",
                    marginTop: 12,
                  }}
                >
                  <p style={{ margin: 0, fontWeight: 700, fontSize: 15 }}>
                    Grievance Officer
                  </p>
                  <p style={{ margin: "8px 0 0", fontSize: 15 }}>
                    Name: Maneet Oberoi
                  </p>
                  <p style={{ margin: "4px 0 0", fontSize: 15 }}>
                    Email:{" "}
                    <a href="mailto:legal@la-fetch.com" style={linkStyle}>
                      legal@la-fetch.com
                    </a>
                  </p>
                  <p style={{ margin: "4px 0 0", fontSize: 15 }}>
                    Working Hours: Monday to Friday, 10:00 AM to 6:00 PM IST
                  </p>
                </div>
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Grievance Handling Procedure and Timelines:</strong>
                <div style={{ overflowX: "auto", marginTop: 12 }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr style={{ background: "#0f1110", color: "#fff" }}>
                        <th style={thStyle}>STAGE</th>
                        <th style={thStyle}>ACTION</th>
                        <th style={thStyle}>TIMELINE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Acknowledgement",
                          "The Grievance Officer will acknowledge receipt of your complaint.",
                          "Within 48 hours",
                        ],
                        [
                          "Initial Review",
                          "Assess completeness and legitimacy of the grievance.",
                          "Within 2 working days",
                        ],
                        [
                          "Investigation and Resolution",
                          "Conduct internal inquiry, coordinate with relevant departments, resolve issue.",
                          "Within 7 working days",
                        ],
                        [
                          "Notification of Outcome",
                          "Communicate resolution decision or status update to the complainant.",
                          "Within 10 working days total",
                        ],
                      ].map(([stage, action, timeline], i) => (
                        <tr
                          key={i}
                          style={{
                            background: i % 2 === 0 ? "#fff" : "#f8f8f5",
                          }}
                        >
                          <td style={{ ...tdStyle, fontWeight: 700 }}>
                            {stage}
                          </td>
                          <td style={tdStyle}>{action}</td>
                          <td style={tdStyle}>{timeline}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </li>
              <li style={{ marginBottom: 12 }}>
                If you are dissatisfied with the resolution provided by the
                Grievance Officer or if no response is received within the
                prescribed period, you have the right to escalate the matter to
                the Data Protection Board of India under Section 13(2) of the
                Digital Personal Data Protection Act, 2023.
              </li>
            </ol>
          </section>

          {/* Section 14 */}
          <section id="force-majeure" style={{ marginBottom: 60 }}>
            <SectionTitle number="14" title="FORCE MAJEURE" />
            <p style={textStyle}>
              The Company shall not be held liable for any failure or delay in
              performing its obligations under this Privacy Policy, including
              the processing of rights requests or breach notifications, due to
              circumstances beyond its reasonable control. Such events may
              include natural disasters, war, civil unrest, pandemic,
              governmental actions, electricity or internet outages,
              cyberattacks, or other force majeure events. During such periods,
              the Company will take reasonable steps to mitigate the impact and
              restore normal operations as soon as practicable.
            </p>
          </section>

          {/* Section 15 */}
          <section id="governing-law" style={{ marginBottom: 60 }}>
            <SectionTitle number="15" title="GOVERNING LAW AND JURISDICTION" />
            <p style={textStyle}>
              This Privacy Policy shall be governed by and construed in
              accordance with the laws of India. Any disputes arising out of or
              in connection with this Policy shall be subject to the exclusive
              jurisdiction of the competent courts located in [New Delhi],
              India, without regard to conflict of law principles.
            </p>
          </section>

          {/* Section 16 */}
          <section id="ownership" style={{ marginBottom: 60 }}>
            <SectionTitle number="16" title="CHANGE IN OWNERSHIP OR CONTROL" />
            <p style={textStyle}>
              In the event of a merger, acquisition, reorganisation, or sale of
              all or a portion of the Company's assets or business, Personal
              Data held by the Company may be transferred to the successor
              entity. Such transfer will continue to be governed by the terms of
              this Privacy Policy unless and until it is amended by the
              successor with due notice to Users.
            </p>
          </section>

          {/* Section 17 */}
          <section id="updates" style={{ marginBottom: 60 }}>
            <SectionTitle number="17" title="POLICY UPDATES AND NOTIFICATION" />
            <p style={textStyle}>
              The Company may update or modify this Privacy Policy from time to
              time to reflect changes in legal requirements, business practices,
              or technological advancements. Any material changes will be
              notified to Users through:
            </p>
            <ol
              style={{
                listStyle: "lower-roman",
                paddingLeft: 24,
                lineHeight: 1.9,
                fontSize: 15,
                color: "#333",
                marginTop: 12,
              }}
            >
              <li>Prominent notices on the Platform;</li>
              <li>
                Email communication to registered Users (where applicable); and
              </li>
              <li>
                Updates to the "Last Updated" date at the top of this Policy.
              </li>
            </ol>
            <p style={{ ...textStyle, marginTop: 12 }}>
              Users are encouraged to periodically review this Policy to stay
              informed of how their Personal Data is protected.
            </p>
          </section>

          {/* Section 18 */}
          <section id="contact" style={{ marginBottom: 60 }}>
            <SectionTitle number="18" title="CONTACT US" />
            <p style={textStyle}>
              If you have any questions, concerns, or require clarification
              regarding this Privacy Policy, the processing of your Personal
              Data, or your rights as a Data Principal, you may contact our
              designated
            </p>
            <div
              style={{
                background: "#f0efe9",
                border: "1px solid #d4c5a4",
                borderRadius: 6,
                padding: "20px 24px",
                marginTop: 16,
              }}
            >
              <p style={{ margin: 0, fontWeight: 700, fontSize: 15 }}>
                Grievance Officer
              </p>
              <p style={{ margin: "8px 0 0", fontSize: 15 }}>
                Name: Maneet Oberoi
              </p>
              <p style={{ margin: "4px 0 0", fontSize: 15 }}>
                Email:{" "}
                <a href="mailto:legal@la-fetch.com" style={linkStyle}>
                  legal@la-fetch.com
                </a>
              </p>
              <p style={{ margin: "4px 0 0", fontSize: 15 }}>
                Working Hours: Monday to Friday, 10:00 AM to 6:00 PM IST
              </p>
            </div>
            <p style={{ ...textStyle, marginTop: 20 }}>
              By continuing to access or use the Platform, you acknowledge that
              you have read and understood this Privacy Policy and agree to its
              terms. Your continued use of the services constitutes your consent
              to the collection, processing, and disclosure of your Personal
              Data in accordance with this Policy.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              <strong>
                This Privacy Policy shall remain in effect until it is updated,
                superseded, or revoked by the Company.
              </strong>
            </p>
            <p
              style={{
                textAlign: "center",
                fontSize: 18,
                letterSpacing: 4,
                marginTop: 32,
                color: "#999",
              }}
            >
              * * * * * *
            </p>
          </section>

          {/* Annexure A */}
          <section id="annexure" style={{ marginBottom: 60 }}>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                borderBottom: "3px solid #0f1110",
                paddingBottom: 10,
                marginBottom: 24,
                textDecoration: "underline",
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              ANNEXURE A
            </h2>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 20,
                textDecoration: "underline",
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              DATA BREACH RESPONSE FRAMEWORK & TIMELINE
            </h3>

            <div style={{ overflowX: "auto" }}>
              <table style={tableStyle}>
                <thead>
                  <tr style={{ background: "#0f1110", color: "#fff" }}>
                    <th style={thStyle}>STAGE</th>
                    <th style={thStyle}>ACTION</th>
                    <th style={thStyle}>TIMELINE</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "1. Detection & Containment",
                      "Identify and verify the breach, isolate affected systems",
                      "Within 6 hours of detection",
                    ],
                    [
                      "2. Preliminary Risk Assessment",
                      "Assess scope, type of data affected, sensitivity, and potential impact",
                      "Within 12 hours of detection",
                    ],
                    [
                      "3. Internal Escalation",
                      "Notify Compliance Officer, Data Protection Officer, and senior management",
                      "Within 12 hours",
                    ],
                    [
                      "4. Reporting to Authorities",
                      "Notify CERT-In and/or the Data Protection Board of India, where applicable",
                      "Within 6 hours of confirming the breach (as per CERT-In guidelines)",
                    ],
                    [
                      "5. Notification to Individuals",
                      "Inform affected Data Principals of the nature of the breach, risk, and mitigation steps",
                      "Within 48 hours, where risk of harm is high",
                    ],
                    [
                      "6. Remedial Action",
                      "Contain breach, patch systems, reset credentials, and prevent recurrence",
                      "Immediate, completed within 72 hours",
                    ],
                    [
                      "7. Documentation & Audit Trail",
                      "Record breach details, investigation logs, and corrective measures taken",
                      "Within 7 days of incident",
                    ],
                    [
                      "8. Final Report & Policy Update",
                      "Root cause analysis and review of internal policies/training",
                      "Within 15 days of breach",
                    ],
                  ].map(([stage, action, timeline], i) => (
                    <tr
                      key={i}
                      style={{ background: i % 2 === 0 ? "#fff" : "#f8f8f5" }}
                    >
                      <td
                        style={{
                          ...tdStyle,
                          fontWeight: 700,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {stage}
                      </td>
                      <td style={tdStyle}>{action}</td>
                      <td style={{ ...tdStyle, whiteSpace: "nowrap" }}>
                        {timeline}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      {/* <div
        style={{
          background: "#0f1110",
          color: "#aaa",
          padding: "30px 40px",
          textAlign: "center",
          fontSize: 13,
        }}
      >
        <p style={{ margin: 0 }}>
          © AS10 Techretail Private Limited (LaFetch) —{" "}
          <a
            href="https://www.la-fetch.com"
            style={{ color: "#c8a96e", textDecoration: "none" }}
          >
            www.la-fetch.com
          </a>
        </p>
        <p style={{ margin: "8px 0 0" }}>
          Grievance Officer: Maneet Oberoi |{" "}
          <a
            href="mailto:legal@la-fetch.com"
            style={{ color: "#c8a96e", textDecoration: "none" }}
          >
            legal@la-fetch.com
          </a>
        </p>
      </div> */}
    </div>
  );
};

const SectionTitle = ({ number, title }) => (
  <h2
    style={{
      fontSize: 22,
      fontWeight: 700,
      borderBottom: "2px solid #c8a96e",
      paddingBottom: 10,
      marginBottom: 24,
      textTransform: "uppercase",
      letterSpacing: 1,
    }}
  >
    {number}. {title}
  </h2>
);

const SubSection = ({ title, children }) => (
  <div style={{ marginBottom: 24 }}>
    <h3
      style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#333" }}
    >
      {title}
    </h3>
    {children}
  </div>
);

const textStyle = {
  fontSize: 15,
  lineHeight: 1.8,
  color: "#333",
  margin: 0,
};

const linkStyle = {
  color: "#8b5e1a",
  textDecoration: "underline",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: 14,
  border: "1px solid #ddd",
};

const thStyle = {
  padding: "12px 14px",
  textAlign: "left",
  fontWeight: 600,
  letterSpacing: 0.5,
  border: "1px solid #333",
};

const tdStyle = {
  padding: "10px 14px",
  border: "1px solid #ddd",
  verticalAlign: "top",
  lineHeight: 1.6,
};

export default PrivacyPolicyPage;
