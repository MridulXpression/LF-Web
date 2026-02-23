"use client";
import React from "react";

const TermsAndConditionsPage = () => {
  const navItems = [
    { id: "definitions", label: "Definitions & Interpretation" },
    { id: "purpose", label: "Purpose" },
    { id: "user-eligibility", label: "User Eligibility" },
    { id: "account-security", label: "Account Creation & Security" },
    {
      id: "third-party-disclaimer",
      label: "Third Party Seller / Marketplace Disclaimer",
    },
    { id: "product-information", label: "Product Information & Availability" },
    { id: "pricing-payments", label: "Pricing & Payments" },
    { id: "order-acceptance", label: "Order Acceptance & Confirmation" },
    { id: "shipping-delivery", label: "Shipping & Delivery" },
    { id: "return-refund", label: "Return, Replacement & Refund Policy" },
    { id: "cancellation", label: "Cancellation Policy" },
    { id: "user-conduct", label: "User Conduct" },
    { id: "intellectual-property", label: "Intellectual Property" },
    { id: "limitation-liability", label: "Limitation of Liability" },
    { id: "privacy", label: "Privacy Policy & Data Use" },
    { id: "indemnity", label: "Indemnity" },
    { id: "grievance", label: "Grievance Redressal" },
    { id: "miscellaneous", label: "Miscellaneous" },
  ];

  return (
    <div
      style={{
        fontFamily: "'Georgia', serif",
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
            Terms & Conditions
          </h1>
          <p style={{ color: "#ccc", marginTop: 16, fontSize: 15 }}>
            These terms and conditions will be effective from [.] ("Effective
            Date") and were last updated{" "}
            <strong style={{ color: "#fff" }}>13.01.2026</strong>.
          </p>
          <p
            style={{
              color: "#bbb",
              marginTop: 16,
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            Lafetch is India's premier online marketplace for authentic luxury
            apparel, streetwear, and curated lifestyle collectables. These Terms
            and Conditions ("Terms") constitute a legal agreement between you
            (the "User") and{" "}
            <strong style={{ color: "#fff" }}>
              AS10 TECHRETAIL PRIVATE LIMITED
            </strong>
            , a company incorporated under the Companies Act, 2013, having its
            registered office at 122, Ist Floor, Universal, Trade Tower, Sector
            49, Gurgaon, Gurgaon, Gurgaon, Haryana, India, 122018 (hereinafter
            referred to as "lafetch", "we", "us" or "our"), which owns and
            operates the online platform{" "}
            <a href="https://la-fetch.com/" style={{ color: "#c8a96e" }}>
              https://la-fetch.com/
            </a>
            , including its mobile applications and all related services, tools,
            and content (collectively, the "Platform").
          </p>
          <p
            style={{
              color: "#bbb",
              marginTop: 12,
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            At Lafetch, the aim is to provide every customer with a secure,
            transparent, and trustworthy shopping experience. The company is
            committed to ensuring the authenticity of every product through a
            thorough verification process, protecting customer rights, and
            building a safe and ethical community of buyers and sellers. These
            Terms reflect Company's dedication to compliance, transparency, and
            accountability as the company continues to expand marketplace with
            integrity.
          </p>
          <p
            style={{
              color: "#bbb",
              marginTop: 12,
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            Lafetch which functions solely as an intermediary platform in
            accordance with the Information Technology Act, 2000 and the
            Information Technology (Intermediary Guidelines and Digital Media
            Ethics Code) Rules, 2021. The Platform facilitates the listing,
            sale, and purchase of goods by Users and does not own, stock, or
            directly sell the products listed by independent sellers. These
            Terms are formulated in accordance with the Information Technology
            Act, 2000 and the rules framed thereunder (such as the Information
            Technology [Intermediary Guidelines and Digital Media Ethics Code]
            Rules, 2021), the Consumer Protection Act, 2019, and the Consumer
            Protection (E-Commerce) Rules, 2020, along with other applicable
            laws, rules, and regulations. These Terms are also aligned with
            international best practices for e-commerce ethics and user data
            protection.
          </p>
          <p
            style={{
              color: "#bbb",
              marginTop: 12,
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            Violation of these Terms, shall constitute a material breach of this
            agreement. Lafetch reserves the right to take appropriate legal
            action, including but not limited to suspension or termination of
            user accounts, cancellation of orders, forfeiture of applicable
            refunds, and initiation of civil or criminal proceedings under
            relevant laws.
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
            <li style={{ marginBottom: 14 }}>
              Lafetch is an online marketplace, engaged in the business of
              facilitating the same and purchase of premium and authenticated
              lifestyle products, through its digital platform accessible at{" "}
              <a href="https://la-fetch.com/" style={linkStyle}>
                https://la-fetch.com/
              </a>
            </li>
            <li style={{ marginBottom: 14 }}>
              The User intends to access, browse, interact with, and/or make
              purchases through the said platform and acknowledges that such use
              shall be governed by a set of binding legal obligations.
            </li>
            <li style={{ marginBottom: 14 }}>
              Lafetch is committed to providing a secure, transparent, and
              law-compliant environment for its users, and has formulated these
              Terms and Conditions in accordance with applicable Indian laws,
              including but not limited to the Information Technology Act, 2000,
              the Consumer Protection Act, 2019, the Consumer Protection
              (E-Commerce) Rules, 2020, and other allied regulations.
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
            <strong>NOW, THEREFORE</strong>, by accessing or using the Lafetch
            Platform, the User agrees to be legally bound by these Terms and
            Conditions and to comply with all applicable laws and policies
            herein stated.
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
          {/* Definitions */}
          <section id="definitions" style={{ marginBottom: 60 }}>
            <SectionTitle title="DEFINITIONS & INTERPRETATION" />

            <SubSection title="Definitions">
              <p style={textStyle}>
                Unless the context otherwise requires, the following terms shall
                have the meanings assigned to them below throughout this
                Agreement:
              </p>
              <ol style={{ listStyle: "none", paddingLeft: 0, marginTop: 16 }}>
                {[
                  [
                    '"Applicable Laws"',
                    "means all relevant laws, statutes, rules, regulations, ordinances, notifications, circulars, guidelines, and directives issued by competent authorities in India. This includes but is not limited to the Information Technology Act, 2000, the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, the Consumer Protection Act, 2019, the Consumer Protection (E-Commerce) Rules, 2020, and the Digital Personal Data Protection Act, 2023.",
                  ],
                  [
                    '"Business Day"',
                    "means any day other than a Saturday, Sunday, or public holiday on which commercial banks are open for business in Gurgaon, Haryana.",
                  ],
                  [
                    '"Company"',
                    "refers to Lafetch, a business entity operating the online Platform, including its directors, employees, licensors, agents, and affiliates.",
                  ],
                  [
                    '"Courier Partner(s)"',
                    "refers to third-party logistics service providers engaged by the Company or Sellers to carry out shipping and delivery functions.",
                  ],
                  [
                    '"Force Majeure"',
                    "refers to any event beyond the reasonable control of Lafetch, including but not limited to acts of God, war, pandemics, strikes, labor unrest, cyberattacks, earthquakes, floods, governmental actions, embargoes, or other unforeseeable events that prevent or delay performance under these Terms.",
                  ],
                  [
                    '"Order"',
                    "means a request placed by the User on the Platform to purchase one or more Products, which is subject to confirmation, availability, and acceptance by the Company or Seller.",
                  ],
                  [
                    '"Platform"',
                    "refers to the platform https://la-fetch.com/, including all subdomains, digital interfaces, mobile applications, and any features, content, tools, or services made available by the Company.",
                  ],
                  [
                    '"Policy" or "Policies"',
                    "refers to all policies published by Lafetch, and any other rules and guidelines framed by the Company and updated from time to time.",
                  ],
                  [
                    '"Product(s)"',
                    "means any sneakers, apparel, accessories, perfumes, collectibles, or other items listed for sale on the Platform by the Company or third-party Sellers.",
                  ],
                  [
                    '"Seller" or "Third-Party Seller"',
                    "refers to any independent vendor, merchant, or business entity that lists, displays, or sells Products on the Platform and is solely responsible for the quality, description, pricing, and fulfillment of such Products.",
                  ],
                  [
                    '"Service(s)"',
                    "means all services provided by the Company through the Platform, including listing, ordering, authentication, packaging, shipping, customer support, and transaction facilitation.",
                  ],
                  [
                    '"Terms" or "Terms & Conditions"',
                    "refers to this agreement, including all schedules, annexures, and incorporated policies as updated from time to time.",
                  ],
                  [
                    '"User"',
                    "means any individual or legal entity who accesses, browses, registers on, transacts with, or otherwise uses the Platform in any manner.",
                  ],
                  [
                    '"Working Hours"',
                    "refers to the official operating hours of Lafetch's customer support team, typically Monday to Friday.",
                  ],
                  [
                    '"Cancellation"',
                    "refers to the act of the User or the Company terminating an order, either partially or fully, before the product has been dispatched. Cancellations may be subject to specific conditions, time limits, and deductions as per Cancellation Policy (Clause 11).",
                  ],
                  [
                    '"Return"',
                    "refers to the process by which a User requests to send back a delivered product due to defects, damage, incorrect item, or any other valid reason accepted under the Company's Return Policy. Returns are subject to eligibility criteria, including timeframes and product condition requirements.",
                  ],
                  [
                    '"Refund"',
                    "means the reimbursement of the paid amount by the Company to the User for a returned, cancelled, or undelivered product, subject to applicable deductions such as shipping fees or transaction charges. Refunds are processed to the original method of payment or as otherwise specified in the Refund Policy.",
                  ],
                  [
                    '"Replacement"',
                    "refers to the provision of an identical or similar product to the User in exchange for a returned product that was damaged, defective, or materially different from what was ordered, subject to inventory availability and eligibility under the Replacement Policy.",
                  ],
                ].map(([term, def], i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: 12,
                      fontSize: 15,
                      lineHeight: 1.8,
                      color: "#333",
                      paddingBottom: 12,
                      borderBottom: "1px solid #f0f0ec",
                    }}
                  >
                    <strong>{term}</strong> {def}
                  </li>
                ))}
              </ol>
            </SubSection>

            <SubSection title="Interpretation">
              <p style={textStyle}>
                The following rules of interpretation shall apply to these Terms
                & Conditions unless the context requires otherwise:
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
                <li style={{ marginBottom: 8 }}>
                  Headings and Subheadings are inserted for convenience only and
                  shall not affect the construction or interpretation of any
                  provision herein.
                </li>
                <li style={{ marginBottom: 8 }}>
                  Words importing the singular shall include the plural and vice
                  versa; words denoting one gender shall include all genders;
                  and words denoting natural persons shall include legal
                  persons, entities, and vice versa.
                </li>
                <li style={{ marginBottom: 8 }}>
                  The terms "including", "includes", "such as", "in particular"
                  or any similar expression shall be construed as illustrative
                  and shall not limit the scope of the preceding words.
                </li>
                <li style={{ marginBottom: 8 }}>
                  A reference to a clause, sub-clause, schedule, or annexure is
                  a reference to a clause, sub-clause, schedule, or annexure of
                  these Terms, unless stated otherwise.
                </li>
                <li style={{ marginBottom: 8 }}>
                  A reference to any law, statute, enactment, or regulation
                  shall include all amendments, modifications, re-enactments, or
                  replacements thereof, whether before or after the date of
                  these Terms.
                </li>
                <li style={{ marginBottom: 8 }}>
                  References to "writing" or "written communication" include
                  emails and electronic messages sent via the Platform or to the
                  official email addresses provided by either party.
                </li>
                <li style={{ marginBottom: 8 }}>
                  Any obligation not to do something includes an obligation not
                  to permit or cause that thing to be done.
                </li>
              </ol>
            </SubSection>
          </section>

          {/* Purpose */}
          <section id="purpose" style={{ marginBottom: 60 }}>
            <SectionTitle title="PURPOSE" />
            <p style={textStyle}>
              The purpose of these Terms & Conditions is to define the legally
              binding agreement between Lafetch and the User governing the
              access, use, browsing, registration, purchase, and all other
              interactions with the Lafetch Platform, including its platform and
              related services.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              These Terms set forth the rights, responsibilities, and
              obligations of both the User and the Company with respect to the
              listing, sale, purchase, payment, shipping, cancellation, returns,
              and overall use of the products and services offered through the
              Platform. They are intended to ensure transparency, protect User
              interests, promote fair trade practices, and outline the
              procedures for handling disputes, refunds, and liability.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              By accessing or using the Platform in any manner, the User
              acknowledges that they have read, understood, and agreed to be
              bound by these Terms and all related policies incorporated by
              reference, including but not limited to the Refund & Exchange
              Policy, Shipping Policy, and Privacy Policy.
            </p>
          </section>

          {/* User Eligibility */}
          <section id="user-eligibility" style={{ marginBottom: 60 }}>
            <SectionTitle title="USER ELIGIBILITY" />
            <p style={textStyle}>
              Use of the Lafetch Platform is permitted only to individuals who
              are 18 years of age or older and are legally competent to enter
              into a binding contract. By accessing or using the platform, the
              User represents and warrants that they meet this eligibility
              requirement.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              Minors may use the platform only under the supervision and
              guidance of a parent or legal guardian who agrees to be bound by
              these Terms and assumes responsibility for the minor's actions.
              Lafetch reserves the right to refuse access, suspend, or terminate
              accounts if it has reasonable grounds to believe that a User does
              not meet the eligibility criteria, has provided false information,
              or is engaging in activities that violate these Terms or
              applicable laws.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              The platform is currently intended for use within India. Any
              access or use from jurisdictions where such services are
              restricted or prohibited by law is the sole responsibility of the
              User, and Lafetch shall not be held liable for any consequences
              arising therefrom.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              Lafetch does not collect or store any personal data from Users,
              except for the limited information necessary to process
              transactions, verify orders, and ensure compliance with applicable
              legal requirements. All such data, if collected, is handled in
              accordance with its Privacy Policy.
            </p>
          </section>

          {/* Account Creation & Security */}
          <section id="account-security" style={{ marginBottom: 60 }}>
            <SectionTitle title="ACCOUNT CREATION & SECURITY" />
            <p style={textStyle}>
              To access certain features of the Lafetch platform, including
              placing orders, tracking shipments, and managing preferences,
              Users may be required to create an account by providing accurate
              and complete information, including their name, contact details,
              and shipping address. By registering, the User agrees to maintain
              the accuracy of such information and update it as needed to ensure
              it remains current and true.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              The User is solely responsible for maintaining the confidentiality
              of their login credentials, including their username and password,
              and for all activities that occur under their account. Lafetch
              shall not be liable for any loss or damage arising from
              unauthorized access to a User's account due to the User's failure
              to secure their credentials.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              Users agree to email us in the event of any unauthorized use of
              their account or any other breach of security. Lafetch reserves
              the right to suspend or terminate any account suspected of misuse,
              impersonation, fraudulent activity, or violation of these Terms.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              Creating multiple accounts without authorization, sharing login
              details with others, or using another person's credentials is
              strictly prohibited and may lead to account suspension or legal
              action as deemed appropriate.
            </p>
          </section>

          {/* Third Party Disclaimer */}
          <section id="third-party-disclaimer" style={{ marginBottom: 60 }}>
            <SectionTitle title="THIRD PARTY SELLER/MARKETPLACE DISCLAIMER" />
            <p style={textStyle}>
              Lafetch is a curated marketplace platform that facilitates the
              listing, display, and sale of lifestyle products, and accessories
              by third-party sellers and partners. While Lafetch strives to
              ensure a high standard of authenticity, quality, and reliability,
              it does not manufacture, own, or directly sell most of the
              products displayed on the Platform.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              Each product listed on the platform may be sold by an independent
              third-party seller. Lafetch acts only as an intermediary and
              aggregator, enabling transactions between Users and sellers in
              accordance with the provisions of the Information Technology Act,
              2000 and the Consumer Protection (E-Commerce) Rules, 2020.
              Therefore, Lafetch shall not be held liable for any
              representations, warranties, delivery obligations, or product
              liabilities arising directly from third-party sellers.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              The responsibility for authenticity, condition, accurate
              description, pricing, and fulfillment of the product lies solely
              with the respective seller, unless specifically stated otherwise.
              Users are advised to carefully review product information and
              seller policies before making a purchase.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              By using the platform, the User acknowledges and agrees to this
              marketplace model and releases Lafetch from any direct liability
              relating to the conduct or products of third-party sellers, except
              as provided under applicable laws.
            </p>
          </section>

          {/* Product Information */}
          <section id="product-information" style={{ marginBottom: 60 }}>
            <SectionTitle title="PRODUCT INFORMATION & AVAILABILITY" />
            <p style={textStyle}>
              Lafetch strives to provide accurate, up-to-date, and detailed
              information regarding all products listed on its platform,
              including but not limited to product names, brand details, sizes,
              colors, prices, and descriptions. While the Company makes every
              effort to ensure the accuracy of such information, the Company
              does not warrant that the content on the Platform is always
              complete, reliable, current, or error-free.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              Product images are for reference only and may differ slightly in
              appearance, color, or texture due to lighting, screen settings, or
              manufacturer variations. In cases where products are sourced from
              third-party sellers or global marketplaces, actual packaging or
              labelling may also vary.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              All products displayed on the platform are subject to
              availability. Lafetch does not guarantee the continued
              availability of any product and reserves the right to limit the
              quantity of items available for purchase, discontinue or modify
              listings at any time without prior notice, or cancel an order in
              case of unavailability or stock issues.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              In the event a product becomes unavailable after an order has been
              placed, Lafetch will notify the User and issue a full refund or
              offer an alternative solution, at its sole discretion. Listing a
              product on the Platform does not constitute a binding offer and
              does not obligate Lafetch to fulfill any order unless it has been
              confirmed and processed in accordance with these Terms.
            </p>
          </section>

          {/* Pricing & Payments */}
          <section id="pricing-payments" style={{ marginBottom: 60 }}>
            <SectionTitle title="PRICING & PAYMENTS" />
            <ol
              style={{
                listStyle: "lower-alpha",
                paddingLeft: 24,
                lineHeight: 1.9,
                fontSize: 15,
                color: "#333",
              }}
            >
              <li style={{ marginBottom: 14 }}>
                <strong>Price Listings:</strong> All prices displayed on the
                Lafetch platform are listed in Indian Rupees (INR) unless
                otherwise stated and are inclusive of applicable GST and
                standard packaging charges. Prices may vary depending on the
                seller, product rarity, size availability, and are subject to
                change at any time without prior notice. The price applicable at
                the time of placing the order and as confirmed in the order
                summary shall be final.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Modes of Payment:</strong> Lafetch accepts various modes
                of payment including credit/debit cards, UPI, net banking,
                digital wallets, EMI and other payment gateways as may be
                enabled from time to time. All payments must be completed at the
                time of order placement. For high-value transactions, additional
                verification or approval may be required, and Lafetch reserves
                the right to delay or cancel such orders pending confirmation.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Pricing errors:</strong> In the event of pricing errors,
                whether due to technical glitches, system issues, or seller
                discrepancies, Lafetch reserves the right to cancel the order
                even after confirmation as per Cancellation policy (Clause 11)
                and will issue a full refund to the User using the original
                method of payment.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Secured Payment Gateways:</strong> Lafetch uses secure,
                PCI-DSS-compliant payment gateways as per its Privacy Policy.
                While all reasonable measures are taken to protect payment data,
                Lafetch shall not be held liable for any unauthorized
                transactions or data breaches occurring due to circumstances
                beyond its control, including issues with third-party payment
                service providers.
              </li>
            </ol>
          </section>

          {/* Order Acceptance */}
          <section id="order-acceptance" style={{ marginBottom: 60 }}>
            <SectionTitle title="ORDER ACCEPTANCE & CONFIRMATION" />
            <p style={textStyle}>
              Placing an order on the Lafetch Platform constitutes an offer by
              the User to purchase the selected product(s) in accordance with
              these Terms and Conditions. However, such placement of order does
              not imply automatic acceptance by Lafetch. All orders are subject
              to verification, product availability, payment confirmation, and
              final acceptance by Lafetch or its seller partners.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              Upon successful placement of the order, the User will receive an
              order confirmation via SMS and/or email. This communication only
              confirms receipt of the order and does not guarantee dispatch or
              delivery.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              Lafetch reserves the right to accept or reject any order, in whole
              or in part, at its sole discretion, for reasons including but not
              limited to stock unavailability, pricing errors, payment failure,
              or suspected fraudulent activity. The User's order will be deemed
              accepted only upon dispatch of the product(s), at which point a
              shipping confirmation will be issued.
            </p>
          </section>

          {/* Shipping & Delivery */}
          <section id="shipping-delivery" style={{ marginBottom: 60 }}>
            <SectionTitle title="SHIPPING & DELIVERY" />
            <p style={textStyle}>
              Lafetch offers shipment and delivery services for all products
              sold on its Platform, in accordance with the terms outlined in its
              Shipment Policy. By placing an order, Users acknowledge and agree
              to the shipping terms stated therein and as supplemented by the
              provisions of this clause.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              The company provides worldwide shipping for all apparel and
              sneakers. Domestic orders are typically dispatched within 7–12
              days from company's warehouse in Gurgaon, India, or through its
              trusted seller partners.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              Once an order is placed, the User will receive a confirmation via
              email and/or SMS. Upon dispatch, a tracking number is shared to
              help Users track their shipment directly through the relevant
              courier provider's platform.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              It is the User's responsibility to provide a complete and accurate
              shipping address and contact information. Lafetch shall not be
              held liable for any loss, delay, or misdelivery caused due to
              incorrect address details. Delivery will be attempted two times;
              failure to accept the package on both attempts will result in the
              order being returned to Lafetch. Any additional shipping or
              re-delivery fees must be borne by the User, and re-dispatch will
              only occur after such charges are paid.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              Delays caused by courier companies after dispatch are beyond
              Lafetch's control. While the company will make reasonable efforts
              to expedite delivery, it shall not be held liable for any delays,
              damages, or losses occurring after the product has left its
              warehouse.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              In the event of receiving a damaged package, the User must report
              the issue to [Insert email]. Lafetch will assess the matter and
              provide a resolution as per its return or support policies.
            </p>
          </section>

          {/* Return, Replacement & Refund */}
          <section id="return-refund" style={{ marginBottom: 60 }}>
            <SectionTitle title="RETURN, REPLACEMENT & REFUND POLICY" />
            <p style={textStyle}>
              Lafetch is committed to customer satisfaction and adheres to a
              fair and transparent return and refund process in accordance with
              applicable laws and the Refund & Exchange Policy.
            </p>

            <SubSection title="Eligibility for returns">
              <p style={textStyle}>
                Items are returnable only if they meet one or more of the
                following conditions:
              </p>
              <ol
                style={{
                  listStyle: "lower-roman",
                  paddingLeft: 24,
                  lineHeight: 1.9,
                  fontSize: 15,
                  color: "#333",
                  marginTop: 8,
                }}
              >
                <li>Received in a physically damaged condition;</li>
                <li>Delivered with missing parts or accessories;</li>
                <li>Product is defective; and</li>
                <li>
                  Product is reasonably different from the description on the
                  product detail page on platform.
                </li>
              </ol>
            </SubSection>

            <SubSection title="To qualify for a return">
              <ol
                style={{
                  listStyle: "lower-roman",
                  paddingLeft: 24,
                  lineHeight: 1.9,
                  fontSize: 15,
                  color: "#333",
                }}
              >
                <li>
                  The item must be returned in its original condition, with the
                  brand's/manufacturer's box, MRP tag intact, user manual,
                  warranty card (if any), and all original accessories.
                </li>
                <li>
                  It must be established that the product was not damaged while
                  in your possession.
                </li>
                <li>
                  The product must not be different from what was originally
                  shipped to you.
                </li>
              </ol>
            </SubSection>

            <SubSection title="Returns/Exchanges are not eligible in the following cases">
              <ol
                style={{
                  listStyle: "lower-roman",
                  paddingLeft: 24,
                  lineHeight: 1.9,
                  fontSize: 15,
                  color: "#333",
                }}
              >
                <li>If the wrong size was ordered by the customer.</li>
                <li>
                  If the product has been tried on the feet, particularly for
                  sneakers or footwear.
                </li>
                <li>
                  If a remorse decision such as change of mind, wrong color
                  preference, or style choice is cited.
                </li>
                <li>Change of mind/dislike.</li>
              </ol>
              <div
                style={{
                  background: "#fff8e1",
                  border: "1px solid #f0c040",
                  borderLeft: "4px solid #e6a817",
                  borderRadius: 6,
                  padding: "14px 18px",
                  marginTop: 16,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "#5a3e00",
                  }}
                >
                  A valid unboxing video clearly showing the defect or incorrect
                  product—from start to finish without cuts—must be submitted to
                  support any return, refund, or replacement request. This is
                  mandatory for verifying the claim and coordinating with seller
                  partners.
                </p>
              </div>
            </SubSection>

            <SubSection title="Pick Up & Self-Return">
              <ol
                style={{
                  listStyle: "lower-roman",
                  paddingLeft: 24,
                  lineHeight: 1.9,
                  fontSize: 15,
                  color: "#333",
                }}
              >
                <li>
                  User's location and the product category will determine
                  whether the item is eligible for return pickup.
                </li>
                <li>
                  If return pickup is not available, a self-return option will
                  be provided. The return must be shipped back to the address
                  provided by Lafetch.
                </li>
              </ol>
            </SubSection>

            <SubSection title="Refund Process">
              <p style={textStyle}>
                Once the returned item is received and inspected:
              </p>
              <ol
                style={{
                  listStyle: "lower-roman",
                  paddingLeft: 24,
                  lineHeight: 1.9,
                  fontSize: 15,
                  color: "#333",
                  marginTop: 8,
                }}
              >
                <li>
                  A refund will be issued to the original payment method, in
                  accordance with Lafetch's Refund & Exchange Policy.
                </li>
                <li>
                  For Pay on Delivery (COD) orders, the refund will be processed
                  via NEFT (bank transfer) to the User's provided bank account.
                </li>
              </ol>
              <div
                style={{
                  background: "#f0efe9",
                  border: "1px solid #d4c5a4",
                  borderRadius: 6,
                  padding: "14px 18px",
                  marginTop: 14,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "#333",
                  }}
                >
                  <strong>NOTE:</strong> Refunds are exclusive of shipping
                  charges, if applicable, and a 3% deduction will apply to
                  account for banking and transaction fees.
                </p>
              </div>
            </SubSection>

            <SubSection title="Replacement Policy">
              <p style={textStyle}>
                Most products are eligible for a free replacement in the
                unlikely event of:
              </p>
              <ol
                style={{
                  listStyle: "lower-roman",
                  paddingLeft: 24,
                  lineHeight: 1.9,
                  fontSize: 15,
                  color: "#333",
                  marginTop: 8,
                }}
              >
                <li>A damaged item</li>
                <li>A defective product</li>
                <li>An item materially different from what was ordered</li>
                <li>
                  Ineligible MTO product (Peruse the Annexure A of the Refund &
                  Exchange Policy)
                </li>
              </ol>
              <p style={{ ...textStyle, marginTop: 12 }}>
                Replacement requests must be initiated within 7 days from the
                time of delivery. The returned product must meet the same return
                condition requirements as stated above.
              </p>
            </SubSection>

            <SubSection title="Order Cancellation">
              <p style={textStyle}>
                Orders can be cancelled by the User within 3 hours of placing
                the order or before the seller confirms the order—whichever is
                earlier. After 3 hours and/or once the seller confirms the
                order, cancellation will not be permitted as per Cancellation
                Policy (Clause 11).
              </p>
              <p style={{ ...textStyle, marginTop: 8 }}>
                Please note that once an offer has been accepted by a seller, it
                cannot be cancelled.
              </p>
            </SubSection>
          </section>

          {/* Cancellation Policy */}
          <section id="cancellation" style={{ marginBottom: 60 }}>
            <SectionTitle title="CANCELLATION POLICY" />
            <p style={textStyle}>
              This Cancellation Policy is formulated in reference to the
              official Refund & Exchange Policy available on the Lafetch
              platform. An order placed with any seller on the Lafetch Platform
              may be cancelled by the User via the "Track Your Order" page or by
              contacting support team through the email. Users are permitted to
              cancel an order within 3 hours of placing it or before it has been
              confirmed by the seller, whichever occurs earlier.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              The User's receipt of an electronic or any other form of order
              confirmation does not signify final acceptance of the order by
              Lafetch. Acceptance occurs only when the order has been shipped,
              as recorded in Lafetch's internal systems. Until then, the Company
              reserves the right to refuse or cancel the order for any reason,
              including but not limited to:
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              The Company may cancel an order under the following conditions:
            </p>
            <ol
              style={{
                listStyle: "lower-roman",
                paddingLeft: 24,
                lineHeight: 1.9,
                fontSize: 15,
                color: "#333",
                marginTop: 8,
              }}
            >
              <li>
                The product is listed at an incorrect price or contains
                incorrect details due to system or typographical errors;
              </li>
              <li>
                The product cannot be delivered due to force majeure events,
                including but not limited to natural disasters (earthquakes,
                floods, fires), pandemics, government restrictions, war,
                terrorism, civil unrest, strikes, or other unforeseeable
                disruptions;
              </li>
              <li>Any other legitimate reason deemed necessary by Lafetch.</li>
            </ol>
            <p style={{ ...textStyle, marginTop: 12 }}>
              If the user's order is cancelled after payment (whether or not the
              order was confirmed), Lafetch will initiate a full refund of the
              amount charged to the original method of payment.
            </p>
          </section>

          {/* User Conduct */}
          <section id="user-conduct" style={{ marginBottom: 60 }}>
            <SectionTitle title="USER CONDUCT" />
            <p style={textStyle}>
              By accessing or using the Lafetch Platform, the User agrees to
              conduct themselves in a lawful, respectful, and responsible manner
              at all times. The Platform is intended solely for legitimate
              purposes such as browsing, purchasing, or selling products, and
              any use that disrupts the platform's integrity or other users'
              experiences is strictly prohibited.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              The User agrees not to:
            </p>
            <ol
              style={{
                listStyle: "lower-roman",
                paddingLeft: 24,
                lineHeight: 1.9,
                fontSize: 15,
                color: "#333",
                marginTop: 8,
              }}
            >
              <li>
                Violate any applicable laws, rules, or regulations while using
                the Platform;
              </li>
              <li>
                Upload, post, or transmit any false, misleading, offensive,
                abusive, defamatory, obscene, or otherwise objectionable
                content;
              </li>
              <li>
                Use another person's account or impersonate another individual
                or entity;
              </li>
              <li>
                Engage in fraudulent transactions, including using stolen
                payment credentials or placing fake orders;
              </li>
              <li>
                Attempt to hack, disrupt, or interfere with the Platform's
                functionality, servers, systems, or networks;
              </li>
              <li>
                Harvest or collect personal information of other users without
                authorization;
              </li>
              <li>
                List or attempt to sell counterfeit, prohibited, or unauthorized
                products through the Platform;
              </li>
              <li>
                Violate any third-party intellectual property or proprietary
                rights.
              </li>
            </ol>
            <p style={{ ...textStyle, marginTop: 12 }}>
              Lafetch reserves the right to suspend, restrict, or permanently
              terminate any account found to be violating these guidelines, with
              or without notice. In serious cases, legal action may be initiated
              in accordance with applicable Indian laws.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              The User also agrees to cooperate fully with any investigation
              conducted by Lafetch into violations or suspected violations of
              this clause.
            </p>
          </section>

          {/* Intellectual Property */}
          <section id="intellectual-property" style={{ marginBottom: 60 }}>
            <SectionTitle title="INTELLECTUAL PROPERTY" />
            <p style={textStyle}>
              All content available on the Lafetch Platform, including but not
              limited to text, images, logos, product photographs, brand names,
              icons, graphics, videos, audio clips, data compilations, user
              interface design, software, and source code, is the exclusive
              property of Lafetch or its content suppliers, licensors, or
              affiliates, and is protected under applicable intellectual
              property laws in India, including the Copyright Act, 1957, the
              Trademarks Act, 1999, and other relevant legislation.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              Users are granted a limited, non-exclusive, non-transferable, and
              revocable license to access and use the platform for personal,
              non-commercial purposes only. No part of the Platform or its
              content may be copied, reproduced, republished, uploaded, posted,
              publicly displayed, encoded, translated, transmitted, or
              distributed in any way without the prior written consent of
              Lafetch.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              Unauthorized use, reproduction, or distribution of Lafetch's
              intellectual property may result in civil and/or criminal
              proceedings under applicable laws. Users are also prohibited from
              using any data mining, robots, or similar data gathering or
              extraction tools on the Platform.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section id="limitation-liability" style={{ marginBottom: 60 }}>
            <SectionTitle title="LIMITATION OF LIABILITY" />
            <div
              style={{
                background: "#f0efe9",
                border: "1px solid #d4c5a4",
                borderLeft: "4px solid #c8a96e",
                borderRadius: 6,
                padding: "20px 24px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: "#333",
                }}
              >
                Lafetch and its affiliates shall not be liable for any indirect,
                incidental, or consequential damages arising from your use of
                the platform, including delays, order issues, or third-party
                seller conduct. Company's total liability, if any, will be
                limited to the amount paid by User for the product in question.
                All services are provided on an "as is" basis, and user use the
                platform at your own risk. This clause does not limit liability
                where prohibited by law.
              </p>
            </div>
          </section>

          {/* Privacy Policy & Data Use */}
          <section id="privacy" style={{ marginBottom: 60 }}>
            <SectionTitle title="PRIVACY POLICY & DATA USE" />
            <p style={textStyle}>
              Lafetch values your privacy and ensures that your personal data is
              collected, used, and stored in accordance with applicable Indian
              laws, including the Digital Personal Data Protection Act, 2023
              (DPDP Act), the Information Technology Act, 2000 including the
              Information Technology (Reasonable Security Practices and
              Procedures and Sensitive Personal Data or Information) Rules,
              2011. The Company collects only such information that is necessary
              to process your orders, deliver products, and provide customer
              support—such as your name, phone number, address, and email.
              Company does not collect sensitive personal data or financial
              details unless essential for transaction processing through secure
              third-party payment gateways.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              The company do not sell or share your personal data with third
              parties for marketing purposes. Limited data may be shared with
              trusted partners like courier services or sellers solely for order
              fulfillment. All such processing is based on your explicit or
              deemed consent as per the DPDP Act. Users may write to the Company
              to request correction or deletion of their data, subject to
              compliance requirements.
            </p>
          </section>

          {/* Indemnity */}
          <section id="indemnity" style={{ marginBottom: 60 }}>
            <SectionTitle title="INDEMNITY" />
            <p style={textStyle}>
              The User agrees to indemnify and hold harmless Lafetch, its
              affiliates, directors, officers, employees, and agents from and
              against any claims, liabilities, damages, losses, and expenses
              (including legal fees) arising out of or related to:
            </p>
            <ol
              style={{
                listStyle: "lower-roman",
                paddingLeft: 24,
                lineHeight: 1.9,
                fontSize: 15,
                color: "#333",
                marginTop: 8,
              }}
            >
              <li>
                Breach of these Terms & Conditions or any applicable law by the
                User;
              </li>
              <li>
                Misuse of the Platform, including any fraudulent or illegal
                activity conducted through the User's account;
              </li>
              <li>
                Violation of third-party rights, including intellectual property
                or privacy rights.
              </li>
            </ol>
            <p style={{ ...textStyle, marginTop: 12 }}>
              This indemnity obligation will survive the termination or
              expiration of the User's relationship with Lafetch and use of the
              Platform.
            </p>
          </section>

          {/* Grievance Redressal */}
          <section id="grievance" style={{ marginBottom: 60 }}>
            <SectionTitle title="GRIEVANCE REDRESSAL" />
            <p style={textStyle}>
              In compliance with applicable laws, including the Information
              Technology Act, 2000, the IT Rules, 2021, and the Digital Personal
              Data Protection Act, 2023, Lafetch has appointed a Grievance
              Officer to address user complaints and concerns related to the use
              of the Platform, personal data, or any other matter.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              If user has any grievances regarding content, transactions, data
              handling, or other issues, he/she may submit a written complaint
              via email with relevant details. The grievance will be
              acknowledged within 48 hours and resolved within the prescribed
              timeline under applicable law.
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
                Grievance Officer:
              </p>
              <p style={{ margin: "8px 0 0", fontSize: 15 }}>
                Name: [Insert Full Name]
              </p>
              <p style={{ margin: "4px 0 0", fontSize: 15 }}>
                Email: [Insert Link]
              </p>
              <p style={{ margin: "4px 0 0", fontSize: 15 }}>
                Address: [Address, if applicable]
              </p>
            </div>
          </section>

          {/* Miscellaneous */}
          <section id="miscellaneous" style={{ marginBottom: 60 }}>
            <SectionTitle title="MISCELLANEOUS" />

            <SubSection title="Dispute Resolution & Governing Law">
              <p style={textStyle}>
                These Terms shall be governed by the laws of India. Any disputes
                arising out of or in connection with the use of the Lafetch
                Platform shall be subject to the exclusive jurisdiction of the
                courts located in [.]. Users agree to first attempt amicable
                resolution by contacting customer support before pursuing legal
                remedies.
              </p>
            </SubSection>

            <SubSection title="Amendments To Terms">
              <p style={textStyle}>
                Lafetch reserves the right to modify, update, or revise these
                Terms & Conditions at any time, without prior notice. Any
                changes will be effective immediately upon posting on the
                Platform. It is the User's responsibility to review the Terms
                periodically. Continued use of the Platform after any changes
                constitutes acceptance of the revised Terms.
              </p>
            </SubSection>

            <SubSection title="Entire Agreement">
              <p style={textStyle}>
                These Terms & Conditions, along with the Refund & Exchange
                Policy, Shipping Policy, Privacy Policy and any other policies
                or documents explicitly referenced herein, constitute the entire
                agreement between the User and Lafetch. They supersede all prior
                communications, understandings, and agreements, whether oral or
                written, relating to the subject matter herein.
              </p>
            </SubSection>

            <SubSection title="Force Majeure">
              <p style={textStyle}>
                Lafetch shall not be held liable for any failure or delay in
                performance of its obligations due to events beyond its
                reasonable control, including but not limited to natural
                disasters, pandemics, acts of God, war, terrorism, civil unrest,
                government restrictions, strikes, power failures, internet
                outages, or disruptions in supply or logistics. In such cases,
                affected obligations shall be suspended for the duration of the
                event.
              </p>
            </SubSection>

            <SubSection title="Contact And Information">
              <p style={textStyle}>
                For any queries, feedback, complaints, or support requests
                related to your orders, account, or the use of the Platform,
                user may reach out to company through the following channels:
              </p>
              <div
                style={{
                  background: "#f0efe9",
                  border: "1px solid #d4c5a4",
                  borderRadius: 6,
                  padding: "20px 24px",
                  marginTop: 12,
                }}
              >
                <p style={{ margin: 0, fontSize: 15 }}>Email: [Insert Link]</p>
              </div>
            </SubSection>

            <SubSection title="Severability">
              <p style={textStyle}>
                If any provision of these Terms & Conditions is found to be
                invalid, unlawful, or unenforceable by a court of competent
                jurisdiction, such provision shall be deemed severed from the
                remainder of the Terms. The validity and enforceability of the
                remaining provisions shall remain unaffected and in full force
                and effect.
              </p>
            </SubSection>
          </section>

          {/* Closing */}
          <p
            style={{
              textAlign: "center",
              fontSize: 18,
              letterSpacing: 4,
              color: "#999",
              marginTop: 40,
            }}
          >
            * * * * * *
          </p>
        </div>
      </div>

      {/* Footer */}
      {/* <div style={{ background: "#0f1110", color: "#aaa", padding: "30px 40px", textAlign: "center", fontSize: 13 }}>
        <p style={{ margin: 0 }}>© AS10 Techretail Private Limited (LaFetch) — <a href="https://www.la-fetch.com" style={{ color: "#c8a96e", textDecoration: "none" }}>www.la-fetch.com</a></p>
        <p style={{ margin: "8px 0 0" }}>Grievance Officer: [Insert Full Name] | [Insert Email]</p>
      </div> */}
    </div>
  );
};

const SectionTitle = ({ title }) => (
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
    {title}
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

export default TermsAndConditionsPage;
