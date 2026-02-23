"use client";
import React from "react";

const RefundExchangePolicyPage = () => {
  const navItems = [
    { id: "definitions", label: "Definitions & Interpretation" },
    { id: "purpose", label: "Purpose" },
    { id: "eligibility", label: "Scope of Eligibility for Exchange" },
    { id: "non-eligibility", label: "Non-Eligibility for Exchange" },
    { id: "wrong-product", label: "Wrong Product Delivered" },
    { id: "exchange-procedure", label: "Step-by-Step Exchange Procedure" },
    { id: "obligations", label: "Obligations of the Customer" },
    { id: "limitations", label: "Refund and Exchange Limitations" },
    { id: "timelines", label: "Processing Timelines" },
    { id: "grievance", label: "Grievance Redressal Mechanism" },
    { id: "governing-law", label: "Governing Law & Jurisdiction" },
    { id: "amendments", label: "Policy Amendment Clause" },
    { id: "consent", label: "Customer Consent Clause" },
    { id: "annexure", label: "Annexure A – Made-to-Order (MTO) Policy" },
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
            Refund & Exchange Policy
          </h1>
          <p style={{ color: "#ccc", marginTop: 16, fontSize: 15 }}>
            This Refund & Exchange Policy ("Policy") will be effective from{" "}
            <strong style={{ color: "#fff" }}>[●]</strong> ("Effective Date").
          </p>
          <p
            style={{
              color: "#bbb",
              marginTop: 16,
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            This Refund & Exchange Policy ("Policy") is issued by{" "}
            <strong style={{ color: "#fff" }}>
              AS10 TECHRETAIL PRIVATE LIMITED
            </strong>
            , a company incorporated under the laws of India and having its
            registered office at [Insert Address], which owns and operates the
            website{" "}
            <a href="https://la-fetch.com/" style={{ color: "#c8a96e" }}>
              https://la-fetch.com/
            </a>{" "}
            and its relevant mobile application ("Lafetch" or "Company").
          </p>
          <p
            style={{
              color: "#bbb",
              marginTop: 12,
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            Lafetch is a curated marketplace that connects customers with
            premium fashion and lifestyle products from trusted third-party
            sellers. While we do not manufacture or directly sell the products
            listed on our platform, we are committed to ensuring a smooth and
            satisfactory post-purchase experience for all our customers. This
            policy outlines the conditions under which refunds or exchanges may
            be requested, the timelines involved, and the documentation required
            to initiate such claims.
          </p>
          <p
            style={{
              color: "#bbb",
              marginTop: 12,
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            By placing an order through{" "}
            <a href="https://la-fetch.com/" style={{ color: "#c8a96e" }}>
              https://la-fetch.com/
            </a>
            , customers agree to the terms detailed in this Refund and Exchange
            Policy. As an intermediary, our role is to facilitate communication
            and resolution between the buyer and the seller in cases of eligible
            claims involving product damage, defects, or incorrect items. All
            refund and exchange requests are handled in accordance with Indian
            consumer protection laws and in alignment with our commitment to
            fairness, clarity, and prompt support.
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
              Lafetch (the "Company") recognizes the significance of customer
              satisfaction and consumer protection and is dedicated to upholding
              legal compliance, accountability, and ethical practices in all
              post-sale procedures.
            </li>
            <li style={{ marginBottom: 14 }}>
              The Consumer Protection Act, 2019 and the Consumer Protection
              (E-Commerce) Rules, 2020 mandate obligations on sellers to ensure
              fair and time-bound redressal of consumer grievances.
            </li>
            <li style={{ marginBottom: 14 }}>
              This Policy sets forth the conditions, procedures, and limitations
              governing exchange requests and refunds issued to customers.
            </li>
            <li style={{ marginBottom: 14 }}>
              The Policy applies to all purchases made through the official
              Lafetch website or authorized platforms and defines the
              responsibilities of both the Company and its customers regarding
              exchanges, returns, and redressal processes.
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
            <strong>NOW THEREFORE</strong>, Lafetch hereby adopts this Refund &
            Exchange Policy to ensure a fair, lawful, and efficient experience
            for all customers seeking resolution with respect to post-purchase
            concerns, and to reinforce its ongoing commitment to ethical
            commerce, customer trust, and legal compliance.
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
            <SectionTitle title="DEFINITIONS AND INTERPRETATION" />

            <SubSection title="Definitions">
              <p style={textStyle}>
                In this Policy (including the recitals above hereto), except
                where the context otherwise requires, the following words and
                expressions shall bear the meaning assigned to them below:
              </p>
              <ol style={{ listStyle: "none", paddingLeft: 0, marginTop: 16 }}>
                {[
                  [
                    '"Act"',
                    "shall mean the Consumer Protection Act, 2019 and applicable rules.",
                  ],
                  [
                    '"Customer"',
                    "Any individual/entity placing an order on the official Lafetch website or authorized channels.",
                  ],
                  [
                    '"Exchange"',
                    "Replacement for a different size or issuance of refund, subject to inspection and eligibility.",
                  ],
                  [
                    '"Return Request"',
                    "A formal request initiated within the timeline set in this Policy.",
                  ],
                  [
                    '"Reverse Shipping"',
                    "Return of the product by the customer at their own cost.",
                  ],
                  [
                    '"Eligible Product"',
                    "Unused, unwashed, undamaged product with original tags and packaging intact.",
                  ],
                  [
                    '"Non-Returnable Product"',
                    "Items excluded from exchange, including those notified as final sale, customized, or hygiene-sensitive.",
                  ],
                  [
                    '"GRO"',
                    "Grievance Redressal Officer, appointed under applicable rules.",
                  ],
                  [
                    '"Products"',
                    "Apparel, cultural merchandise, or any other items listed on the official website of Lafetch.",
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
                    <strong>{term}</strong> – {def}
                  </li>
                ))}
              </ol>
            </SubSection>

            <SubSection title="Interpretation">
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

          {/* Purpose */}
          <section id="purpose" style={{ marginBottom: 60 }}>
            <SectionTitle title="PURPOSE" />
            <p style={textStyle}>
              The purpose of this Refund & Exchange Policy is to establish a
              transparent, fair, and legally compliant framework for addressing
              post-sale consumer concerns related to product exchanges and
              non-cash refunds. This Policy is designed to ensure that customers
              of Lafetch ("Company") are fully informed of their rights and
              responsibilities in the event they are dissatisfied with a
              delivered product due to size mismatch, receipt of a damaged item,
              or other legitimate concerns qualifying for exchange. The Policy
              is further aimed at aligning Company's return and exchange
              practices with applicable Indian consumer protection laws,
              particularly the Consumer Protection Act, 2019 and the Consumer
              Protection (E-Commerce) Rules, 2020, which mandate clarity,
              fairness, and responsiveness in e-commerce operations.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              This Policy also reinforces Lafetch commitment to customer
              satisfaction while safeguarding its commercial interests through
              reasonable limitations on refunds and shipping responsibilities.
              The Company follows a non-cash refund model, wherein eligible
              returns result in the issuance of refund equivalent to the value
              of the returned product, rather than a direct monetary refund.
              Additionally, this Policy outlines the role of the customer in
              facilitating the return process, including the responsibility for
              reverse shipping, and prescribes the timeline, condition, and
              procedural requirements for initiating a valid exchange. Through
              this Policy, Lafetch seeks to maintain a consistent and principled
              approach to after-sale engagement with its customers.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              In the event of any inconsistency between this Policy and other
              internal or external policies of the Company, the provisions of
              this Policy shall prevail to the extent of such inconsistency in
              matters concerning refund & exchange mechanisms.
            </p>
          </section>

          {/* Eligibility */}
          <section id="eligibility" style={{ marginBottom: 60 }}>
            <SectionTitle title="SCOPE OF THE ELIGIBILITY FOR EXCHANGE" />
            <p style={textStyle}>
              Lafetch recognizes that customers may occasionally require an
              exchange due to reasons such as size issues, receipt of a damaged
              product, or other legitimate concerns. To maintain fairness,
              transparency, and compliance with applicable consumer protection
              laws, the following conditions and procedures govern the
              eligibility for exchange:
            </p>

            <ol
              style={{
                listStyle: "lower-alpha",
                paddingLeft: 24,
                lineHeight: 1.9,
                fontSize: 15,
                color: "#333",
                marginTop: 16,
              }}
            >
              <li style={{ marginBottom: 14 }}>
                <strong>Size Issues:</strong> If the product delivered does not
                fit, customers may request an exchange for a different size,
                subject to availability.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Receipt of Damaged or Defective Product:</strong> If a
                product is received in a damaged or defective condition,
                customers are eligible to request an exchange, provided the
                damage is reported in accordance with the timelines and
                procedures outlined herein.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Incorrect Product Delivered:</strong> If the product
                received does not match the order placed (e.g., wrong item or
                colour), customers may initiate an exchange as per Clause 5 of
                this Policy.
              </li>
            </ol>

            <SubSection title="To qualify for an exchange, the product must satisfy all of the following conditions:">
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
                  The product must be unused, and free from stains, or any
                  visible signs of tampering.
                </li>
                <li>
                  The product must be returned in secure, tamper-proof packaging
                  to prevent any damage during transit.
                </li>
                <li>
                  Any product that fails to meet the above conditions shall be
                  deemed ineligible for exchange, and the return shall be
                  rejected without any issuance of replacement. Lafetch will not
                  be liable for any products lost or damaged during return
                  transit arranged by the customer.
                </li>
              </ol>
            </SubSection>

            <SubSection title="Timelines and Procedural Requirements:">
              <ol
                style={{
                  listStyle: "lower-roman",
                  paddingLeft: 24,
                  lineHeight: 1.9,
                  fontSize: 15,
                  color: "#333",
                }}
              >
                <li style={{ marginBottom: 8 }}>
                  Customers must initiate an exchange request within{" "}
                  <strong>7 days</strong> of receiving the product.
                </li>
                <li style={{ marginBottom: 8 }}>
                  The approved product must be dispatched to Lafetch within{" "}
                  <strong>three (3) calendar days</strong> of receiving exchange
                  approval from the Company.
                </li>
                <li style={{ marginBottom: 8 }}>
                  Requests raised after the stipulated timeline or products
                  dispatched beyond the prescribed period will be considered
                  invalid and shall not be processed.
                </li>
                <li style={{ marginBottom: 8 }}>
                  Customers are required to provide clear evidence of the
                  product's condition, including video of the product packaging
                  and invoice, at the time of initiating the exchange request.
                </li>
                <li style={{ marginBottom: 8 }}>
                  In cases of damage or defect, the Company may request an
                  unboxing video clearly showing the package being opened from a
                  sealed state, with the product, invoice, and tags visibly
                  identifiable. Failure to provide such proof upon request may
                  lead to rejection of the claim.
                </li>
                <li style={{ marginBottom: 8 }}>
                  The customer shall be solely responsible for arranging and
                  bearing the cost of return shipping to Lafetch's designated
                  address. The Company does not provide reverse pickup services
                  at this time.
                </li>
                <li style={{ marginBottom: 8 }}>
                  The customer must use a courier service and share the valid
                  tracking ID and shipping partner details with the Lafetch
                  support team upon dispatch.
                </li>
              </ol>
            </SubSection>

            <LegalNotice text="LAFETCH RESERVES THE RIGHT TO INSPECT ALL RETURNED PRODUCTS AND ACCEPT OR REJECT EXCHANGE REQUESTS AT ITS SOLE DISCRETION BASED ON THE CONDITION OF THE RETURNED GOODS AND COMPLIANCE WITH THE PRESCRIBED TIMELINE AND RETURN PROCEDURE." />
          </section>

          {/* Non-Eligibility */}
          <section id="non-eligibility" style={{ marginBottom: 60 }}>
            <SectionTitle title="NON-ELIGIBILITY FOR EXCHANGE" />
            <p style={textStyle}>
              Lafetch is committed to maintaining the highest standards of
              quality, hygiene, and customer satisfaction across all product
              categories. However, in order to ensure operational efficiency,
              fairness, and compliance with applicable laws, certain
              circumstances and product conditions will render items ineligible
              for exchange. Customers are advised to thoroughly review the
              exclusions listed below before initiating any exchange request.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              An exchange request shall not be permitted and will be summarily
              rejected under the following conditions:
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
              <li style={{ marginBottom: 10 }}>
                Any product that exhibits visible signs of use, wear,
                application, or tampering including stains, shall be
                automatically disqualified from exchange. Products must be
                returned in their original, unused, and unwashed state to
                qualify for exchange.
              </li>
              <li style={{ marginBottom: 10 }}>
                Products returned without the invoice/order confirmation
                accompanying the original purchase shall be deemed
                non-exchangeable. The presence of all original components is
                mandatory for processing any exchange request.
              </li>
              <li style={{ marginBottom: 10 }}>Change of mind and dislike.</li>
              <li style={{ marginBottom: 10 }}>
                Exchange requests that are not raised within the stipulated
                timeline as specified in this Policy, or where the approved
                product is not dispatched to Lafetch within the prescribed
                period, will be considered invalid. Requests initiated after the
                permitted window or delays in return shipment will result in
                automatic rejection of the exchange.
              </li>
              <li style={{ marginBottom: 10 }}>
                Products that are damaged due to improper handling, cutting,
                staining, exposure to chemicals, or any other form of damage
                attributable to the customer will not be accepted for exchange.
                The Company reserves the right to determine, at its sole
                discretion, whether the damage is customer-induced.
              </li>
            </ol>

            <LegalNotice text="ANY PRODUCT RECEIVED BY LAFETCH THAT VIOLATES ANY OF THE ABOVE CONDITIONS SHALL BE RETURNED TO THE CUSTOMER AT THEIR OWN COST, AND REPLACEMENT SHALL BE ISSUED IN SUCH CASES. THE COMPANY SHALL NOT BE LIABLE FOR ANY LOSS OR DAMAGE TO PRODUCTS RETURNED IN CONTRAVENTION OF THESE EXCLUSIONS." />
          </section>

          {/* Wrong Product */}
          <section id="wrong-product" style={{ marginBottom: 60 }}>
            <SectionTitle title="WRONG PRODUCT DELIVERED" />
            <p style={textStyle}>
              The company is committed to ensuring the accuracy and integrity of
              every order dispatched. In the unlikely event that a customer
              receives an incorrect product, the following procedure and
              conditions shall apply to facilitate prompt redressal.
            </p>
            <ol
              style={{
                listStyle: "lower-alpha",
                paddingLeft: 24,
                lineHeight: 1.9,
                fontSize: 15,
                color: "#333",
                marginTop: 16,
              }}
            >
              <li style={{ marginBottom: 14 }}>
                Customers must notify the company of any instance of a wrong
                item delivered within <strong>7 days</strong> of receipt of the
                order. The notification must be sent via email to the official
                customer support address as listed on the Lafetch website.
                Requests received after this stipulated period shall not be
                entertained, and the Company shall not be liable for any claims
                arising thereafter.
              </li>
              <li style={{ marginBottom: 14 }}>
                To substantiate the claim, the customer is required to provide
                clear photographic evidence of the product received, along with
                a video of the original invoice and packaging. The photographs
                must clearly display the product, its tags, and any
                distinguishing features that indicate the error. Failure to
                provide adequate proof may result in the rejection of the
                exchange or redressal request at the sole discretion of the
                Company.
              </li>
              <li style={{ marginBottom: 14 }}>
                In cases where reverse shipping is arranged, the customer must
                ensure the product is securely packaged and handed over to the
                designated courier as instructed by the Company.
              </li>
              <li style={{ marginBottom: 14 }}>
                This clause applies strictly to cases where the product
                delivered does not match the order placed by the customer in
                terms of item, size, colour, or style. Claims pertaining to
                minor variations in colour due to digital display differences,
                or dissatisfaction with product features not expressly
                misrepresented, shall not qualify under this Clause.
              </li>
            </ol>

            <LegalNotice text="LAFETCH RESERVES THE RIGHT TO REJECT ANY CLAIM OF WRONG ITEM DELIVERY IF THE REQUEST IS NOT RAISED WITHIN THE STIPULATED TIMELINE, OR IF THE SUPPORTING DOCUMENTATION IS INCOMPLETE OR INCONSISTENT WITH THE ORIGINAL ORDER DETAILS. THE COMPANY'S DECISION IN THIS REGARD SHALL BE FINAL AND BINDING." />
          </section>

          {/* Exchange Procedure Table */}
          <section id="exchange-procedure" style={{ marginBottom: 60 }}>
            <SectionTitle title="STEP-BY-STEP EXCHANGE PROCEDURE" />

            <div style={{ overflowX: "auto", marginTop: 16 }}>
              <table style={tableStyle}>
                <thead>
                  <tr style={{ background: "#0f1110", color: "#fff" }}>
                    <th style={{ ...thStyle, width: 60 }}>STEP</th>
                    <th style={thStyle}>ACTION REQUIRED</th>
                    <th style={thStyle}>DETAILS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "1",
                      "Customer initiates exchange",
                      "Email must be sent within 7 days of delivery to Lafetch's support address. Must include:\n• Order number\n• Reason for exchange\n• Clear videos of product, original tags, packaging, and invoice.",
                    ],
                    [
                      "2",
                      "Review & Response",
                      "The support team will review the details and respond with approval or rejection within 2 business days. Additional proof (e.g., unboxing video) may be requested.",
                    ],
                    [
                      "3",
                      "Return shipment",
                      "Upon approval, the company will arrange reverse ship within 3 calendar days.",
                    ],
                    [
                      "4",
                      "Receipt & Inspection",
                      "Product is inspected for compliance with:\n• Original condition\n• Intact packaging and tags\n• Invoice included\n\nInspection is completed within 2 business days of receipt. If rejected, the product is returned to the customer at their cost.",
                    ],
                    [
                      "5",
                      "Refund Processing",
                      "If the product passes inspection, a refund for the product value (excluding shipping) is processed to the original payment method.",
                    ],
                    [
                      "6",
                      "Timeline",
                      "The complete process, from initiation to refund, is completed within 5–7 working days, barring delays. Customers are advised to monitor email for updates.",
                    ],
                    [
                      "7",
                      "Other conditions",
                      "• Company not liable for return transit damage if self-shipped\n• Shipping and return costs are non-refundable\n• Non-compliance with any step may lead to rejection of the exchange request",
                    ],
                  ].map(([step, action, details], i) => (
                    <tr
                      key={i}
                      style={{ background: i % 2 === 0 ? "#fff" : "#f8f8f5" }}
                    >
                      <td
                        style={{
                          ...tdStyle,
                          textAlign: "center",
                          fontWeight: 700,
                          fontSize: 16,
                          color: "#c8a96e",
                        }}
                      >
                        {step}
                      </td>
                      <td style={{ ...tdStyle, fontWeight: 600 }}>{action}</td>
                      <td style={{ ...tdStyle, whiteSpace: "pre-line" }}>
                        {details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Obligations */}
          <section id="obligations" style={{ marginBottom: 60 }}>
            <SectionTitle title="OBLIGATIONS OF THE CUSTOMER" />
            <p style={textStyle}>
              In order to initiate and complete a valid exchange request under
              this Policy, the Customer must comply with the following
              obligations, which are mandatory and non-negotiable. These
              obligations ensure that Lafetch can process returns and exchanges
              efficiently while maintaining quality, hygiene, and logistical
              integrity.
            </p>

            <SubSection title="Product Condition Requirements">
              <p style={textStyle}>
                The Customer shall ensure that any product being returned to
                Lafetch for the purpose of exchange is:
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
                <li>In unused condition,</li>
                <li>
                  Free from stains, damage, or any signs of wear or tampering,
                </li>
                <li>Accompanied by all original tags,</li>
                <li>
                  Returned in secure packaging to prevent any damage during
                  transit.
                </li>
              </ol>
              <LegalNotice text="THE COMPANY RESERVES THE RIGHT TO REJECT ANY EXCHANGE OR RETURN REQUEST IF THE RETURNED PRODUCT FAILS TO MEET THE ABOVE CONDITIONS. SUCH PRODUCTS WILL BE RETURNED TO THE CUSTOMER AT THEIR OWN COST, WITHOUT ISSUANCE OF REFUND." />
            </SubSection>

            <SubSection title="Proof of Condition and Unboxing Video">
              <p style={textStyle}>
                To substantiate claims of product damage, or incorrect delivery,
                Lafetch, at its discretion, request the Customer to provide an
                unboxing video clearly showing the package being opened from a
                sealed state, with the product, invoice, and tags visibly
                identifiable.
              </p>
              <p style={{ ...textStyle, marginTop: 8 }}>
                While this requirement is not mandatory for all exchange
                requests, it may be enforced in specific cases to validate the
                authenticity of damage-related claims. Failure to provide the
                video upon request may lead to rejection of such claims.
              </p>
            </SubSection>

            <SubSection title="Non-Refundability of Shipping Charges">
              <p style={textStyle}>
                The Customer acknowledges and agrees that original shipping
                charges paid at the time of purchase are non-refundable. These
                charges are incurred towards third-party logistics services and
                are not eligible for credit note issuance or reimbursement,
                regardless of the reason for exchange.
              </p>
              <p style={{ ...textStyle, marginTop: 8 }}>
                Any reverse shipping cost or incidental charges incurred by the
                Customer during the return process shall not be compensated or
                refunded by Lafetch.
              </p>
            </SubSection>

            <SubSection title="Made-to-Order Products">
              <div
                style={{
                  background: "#fff8e1",
                  border: "1px solid #f0c040",
                  borderLeft: "4px solid #e6a817",
                  borderRadius: 6,
                  padding: "16px 20px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: "#5a3e00",
                  }}
                >
                  <strong>MADE-TO-ORDER PRODUCTS:</strong> Cancellations are
                  permitted only within two (2) hours of order placement and
                  strictly before production, customization, or processing has
                  commenced, whichever occurs earlier. Once production has
                  begun, the order shall be deemed final and non-cancellable.
                  Returns are accepted only in cases where the product delivered
                  is defective, damaged in transit, or materially incorrect
                  compared to the specifications confirmed at the time of order
                  placement. Claims for such returns must be raised within the
                  time period and in the manner specified in Annexure A, along
                  with supporting evidence as required therein.
                </p>
              </div>
            </SubSection>

            <LegalNotice text="FAILURE TO COMPLY WITH ANY OF THE ABOVE OBLIGATIONS MAY RESULT IN THE REJECTION OF THE EXCHANGE REQUEST AT THE SOLE DISCRETION OF LAFETCH. THE COMPANY'S DECISION REGARDING THE ACCEPTANCE OR REJECTION OF RETURNED PRODUCTS SHALL BE FINAL AND BINDING." />
          </section>

          {/* Limitations */}
          <section id="limitations" style={{ marginBottom: 60 }}>
            <SectionTitle title="REFUND AND EXCHANGE LIMITATIONS" />
            <p style={{ ...textStyle, fontStyle: "italic", color: "#666" }}>
              [Business to confirm]
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              Lafetch adopts a transparent exchange model in which refunds are
              not issued in cash and only in the original mode of payment. The
              Company's operational framework, logistics cost structure, and
              customer policies are designed around efficiency, clarity, and
              legal compliance. This Clause sets forth the limitations
              applicable to all refund and exchange transactions initiated under
              this Policy.
            </p>

            <div
              style={{
                background: "#f0efe9",
                border: "1px solid #d4c5a4",
                borderLeft: "4px solid #c8a96e",
                borderRadius: 6,
                padding: "16px 20px",
                marginTop: 16,
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
                Under no circumstances shall Lafetch provide refunds in the form
                of cash, digital wallet credit, card reversal and only through
                NEFT or original payment method.
              </p>
            </div>

            <SubSection title="Exclusion of Shipping Costs">
              <ol
                style={{
                  listStyle: "lower-roman",
                  paddingLeft: 24,
                  lineHeight: 1.9,
                  fontSize: 15,
                  color: "#333",
                }}
              >
                <li style={{ marginBottom: 8 }}>
                  The Customer acknowledges and agrees that all shipping charges
                  paid at the time of the original order are strictly
                  non-refundable, irrespective of whether the exchange was
                  requested due to size, dissatisfaction, or defect.
                </li>
                <li style={{ marginBottom: 8 }}>
                  Shipping fees represent the cost of third-party logistics
                  services and shall not be included in the value of any refund
                  issued as a result of an exchange.
                </li>
                <li style={{ marginBottom: 8 }}>
                  Any reverse shipping cost or incidental charges incurred by
                  the Customer during the return process shall not be
                  compensated or refunded by Lafetch.
                </li>
              </ol>
            </SubSection>

            <SubSection title="Right to Deny Exchange">
              <p style={textStyle}>
                Lafetch expressly reserves the right to deny or reject any
                exchange request if the returned product:
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
                  Fails to meet the eligibility criteria laid out under Clause 3
                  (Scope of Eligibility for Exchange) or violates Clause 4
                  (Non-Eligibility for Exchange);
                </li>
                <li>Is found to be used or damaged;</li>
                <li>
                  Is returned without original tags, packaging, or invoice;
                </li>
                <li>
                  Is received after the prescribed timelines for initiating and
                  dispatching returns; or
                </li>
                <li>
                  Is otherwise non-compliant with any provision of this Policy.
                </li>
              </ol>
              <p style={{ ...textStyle, marginTop: 8 }}>
                In such cases, the product shall be returned to the Customer at
                their own cost.
              </p>
            </SubSection>

            <LegalNotice text="THE COMPANY'S DECISION REGARDING THE ACCEPTANCE OR REJECTION OF ANY EXCHANGE OR REFUND REQUEST SHALL BE FINAL AND BINDING. LAFETCH SHALL NOT BE LIABLE FOR ANY LOSS, INCONVENIENCE, OR EXPENSE ARISING FROM THE REJECTION OF NON-COMPLIANT RETURNS." />
          </section>

          {/* Processing Timelines */}
          <section id="timelines" style={{ marginBottom: 60 }}>
            <SectionTitle title="PROCESSING TIMELINES" />
            <p style={textStyle}>
              Lafetch is committed to providing a transparent and efficient
              exchange process for all eligible product returns. The following
              timelines outline the standard processing durations for each stage
              of the exchange procedure. These timelines are indicative and may
              be subject to reasonable extensions in the event of unforeseen
              circumstances, public holidays, or force majeure events.
            </p>

            <div style={{ overflowX: "auto", marginTop: 20 }}>
              <table style={tableStyle}>
                <thead>
                  <tr style={{ background: "#0f1110", color: "#fff" }}>
                    <th style={thStyle}>STAGE</th>
                    <th style={thStyle}>DETAILS</th>
                    <th style={thStyle}>TIMELINE</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Order Processing",
                      "All new orders placed on the official Lafetch website or authorized platforms are processed and dispatched. Customers will receive a shipping confirmation email with tracking details once the order is dispatched.",
                      "5–7 days from order confirmation (excluding weekends and public holidays)",
                    ],
                    [
                      "Inspection of Returned Products",
                      "Upon receipt of the returned product at the designated Lafetch address, the Company will conduct a thorough inspection to verify compliance with all eligibility criteria, including product condition, original tags, packaging, and invoice. If the returned product fails to meet the prescribed conditions, the exchange request will be rejected, and the product will be returned to the customer at their expense.",
                      "Within 2 business days from date of receipt",
                    ],
                    [
                      "Refund Processing",
                      "Upon successful completion of the inspection and approval of the returned product, Lafetch shall issue a refund equivalent to the value of the returned product (excluding shipping charges). The refund may be redeemed for future purchases on the Lafetch website, subject to the terms and validity period outlined in this Policy.",
                      "Within 3 business days following completion of inspection",
                    ],
                    [
                      "Overall Exchange Timeline",
                      "Lafetch endeavours to complete the entire exchange process, from initiation to issuance of the refund, provided that all steps are completed promptly by the customer and there are no unforeseen delays.",
                      "7–10 working days from initiation",
                    ],
                  ].map(([stage, details, timeline], i) => (
                    <tr
                      key={i}
                      style={{ background: i % 2 === 0 ? "#fff" : "#f8f8f5" }}
                    >
                      <td
                        style={{
                          ...tdStyle,
                          fontWeight: 600,
                          whiteSpace: "nowrap",
                          width: "15%",
                        }}
                      >
                        {stage}
                      </td>
                      <td style={{ ...tdStyle, width: "60%" }}>{details}</td>
                      <td
                        style={{
                          ...tdStyle,
                          fontWeight: 600,
                          color: "#0f1110",
                          whiteSpace: "normal",
                          wordBreak: "break-word",
                          width: "25%",
                        }}
                      >
                        {timeline}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <LegalNotice text="ALL TIMELINES MENTIONED ABOVE ARE EXCLUSIVE OF WEEKENDS AND PUBLIC HOLIDAYS. DELAYS CAUSED BY INCOMPLETE DOCUMENTATION, NON-COMPLIANCE WITH PROCEDURAL REQUIREMENTS, OR EXTERNAL FACTORS BEYOND THE COMPANY'S CONTROL MAY RESULT IN EXTENSIONS OF THE STANDARD PROCESSING PERIODS. THE COMPANY'S DECISION REGARDING THE TIMELINES AND COMPLETION OF EACH STAGE SHALL BE FINAL AND BINDING." />
          </section>

          {/* Grievance Redressal */}
          <section id="grievance" style={{ marginBottom: 60 }}>
            <SectionTitle title="GRIEVANCE REDRESSAL MECHANISM" />
            <p style={textStyle}>
              In accordance with the Consumer Protection Act, 2019 and the
              Consumer Protection (E-Commerce) Rules, 2020, Lafetch is committed
              to providing a transparent, fair, and timely mechanism for the
              redressal of customer grievances. The Company has appointed a
              dedicated Grievance Redressal Officer ("GRO") to address and
              resolve all post-purchase concerns related to exchanges, refunds,
              and any other aspect of this Policy.
            </p>

            <div
              style={{
                background: "#f0efe9",
                border: "1px solid #d4c5a4",
                borderRadius: 6,
                padding: "20px 24px",
                marginTop: 20,
                marginBottom: 24,
              }}
            >
              <p style={{ margin: 0, fontWeight: 700, fontSize: 15 }}>
                Grievance Redressal Officer Details
              </p>
              <p style={{ margin: "8px 0 0", fontSize: 15 }}>
                <strong>Designation:</strong> Grievance Redressal Officer,
                Lafetch
              </p>
              <p style={{ margin: "4px 0 0", fontSize: 15 }}>
                <strong>Email:</strong>{" "}
                <a href="mailto:legal@la-fetch.com" style={linkStyle}>
                  legal@la-fetch.com
                </a>
              </p>
            </div>

            <SubSection title="Communication and Office Hours">
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
                  Customers may submit their grievances, complaints, or requests
                  for redressal by sending an email to the official GRO email
                  address provided above.
                </li>
                <li>
                  The Grievance Redressal Officer is available to address
                  queries during standard business hours, i.e.,{" "}
                  <strong>Monday to Friday, 10:00 AM to 6:00 PM</strong>{" "}
                  (excluding public holidays).
                </li>
              </ol>
            </SubSection>

            <SubSection title="Acknowledgement and Resolution Timelines">
              <ol
                style={{
                  listStyle: "lower-roman",
                  paddingLeft: 24,
                  lineHeight: 1.9,
                  fontSize: 15,
                  color: "#333",
                }}
              >
                <li style={{ marginBottom: 8 }}>
                  All grievances received by the Grievance Redressal Officer
                  shall be acknowledged in writing (via email) within{" "}
                  <strong>forty-eight hours</strong> of receipt.
                </li>
                <li style={{ marginBottom: 8 }}>
                  The Company endeavours to resolve all grievances within{" "}
                  <strong>fifteen days</strong> from the date of receipt of the
                  complaint, subject to the complexity of the issue and the
                  completeness of information provided by the customer.
                </li>
                <li style={{ marginBottom: 8 }}>
                  If additional information or documentation is required from
                  the customer to process the grievance, the resolution timeline
                  shall be calculated from the date of receipt of such complete
                  information.
                </li>
              </ol>
              <p style={{ ...textStyle, marginTop: 8 }}>
                If a customer is dissatisfied with the resolution provided by
                the Grievance Redressal Officer, the matter may be further
                escalated to the Compliance Officer or a higher authority as
                notified on the official Lafetch website.
              </p>
            </SubSection>

            <LegalNotice text="THE DECISION OF THE GRIEVANCE REDRESSAL OFFICER AND/OR THE COMPLIANCE OFFICER SHALL BE FINAL AND BINDING IN ALL MATTERS PERTAINING TO THE REDRESSAL OF GRIEVANCES UNDER THIS POLICY. LAFETCH REMAINS COMMITTED TO UPHOLDING THE HIGHEST STANDARDS OF CUSTOMER SERVICE, LEGAL COMPLIANCE, AND ETHICAL BUSINESS PRACTICES." />
          </section>

          {/* Governing Law */}
          <section id="governing-law" style={{ marginBottom: 60 }}>
            <SectionTitle title="GOVERNING LAW & JURISDICTION" />
            <p style={textStyle}>
              This Refund & Exchange Policy and any disputes or claims arising
              out of or in connection with it shall be governed by and construed
              in accordance with the laws of India.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              The parties agree that the courts at Gurgaon, Haryana (or such
              other city as may be notified as the principal place of business
              of Lafetch) shall have exclusive jurisdiction over all disputes,
              claims, or proceedings arising out of or relating to this Policy,
              the transactions contemplated herein, or any matters incidental
              thereto.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              Customers expressly consent to the jurisdiction of such courts and
              waive any objection to the laying of venue or the convenience of
              forum.
            </p>
          </section>

          {/* Policy Amendment */}
          <section id="amendments" style={{ marginBottom: 60 }}>
            <SectionTitle title="POLICY AMENDMENT CLAUSE" />
            <p style={textStyle}>
              Lafetch reserves the right to amend, modify, or update this Refund
              & Exchange Policy at its sole discretion, without prior notice to
              customers.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              Any such amendment, modification, or update shall take effect
              immediately upon being posted or updated on the official Lafetch
              website, unless otherwise specified. Customers are advised to
              review this Policy periodically to ensure awareness of any
              changes.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              In the event of any material or significant changes to the Policy
              that may affect customer rights or obligations, Lafetch will
              endeavour to notify customers through appropriate means, including
              but not limited to email notifications or prominent website
              banners.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              Continued use of the Lafetch website or services after the
              effective date of any amendments shall constitute acceptance of
              those changes.
            </p>
            <LegalNotice text="THE LATEST VERSION OF THIS POLICY, AS PUBLISHED ON THE OFFICIAL LAFETCH WEBSITE, SHALL PREVAIL IN THE EVENT OF ANY CONFLICT OR INCONSISTENCY WITH PREVIOUS VERSIONS OR ANY OTHER COMMUNICATION." />
            <p style={{ ...textStyle, marginTop: 16 }}>
              In the event of any conflict or inconsistency between this Policy
              and any prior versions, statements, or representations, the
              provisions of this Policy shall prevail to the extent of such
              conflict or inconsistency.
            </p>
          </section>

          {/* Consent */}
          <section id="consent" style={{ marginBottom: 60 }}>
            <SectionTitle title="CUSTOMER CONSENT CLAUSE" />
            <p style={textStyle}>
              By placing an order on the official Lafetch website or through any
              authorized sales channel, the Customer acknowledges that they have
              read, understood, and agreed to be bound by the terms and
              conditions set forth in this Refund & Exchange Policy.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              The act of purchase and/or use of Lafetch's products and services
              shall be deemed as explicit acceptance of this Policy in its
              entirety, including all amendments, updates, and annexures as may
              be published from time to time.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              If the Customer does not agree with any provision of this Policy,
              they are advised not to proceed with the purchase.
            </p>
          </section>

          {/* Closing */}
          <div
            style={{
              borderTop: "2px solid #e8e8e0",
              paddingTop: 32,
              marginBottom: 60,
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: 18,
                letterSpacing: 4,
                color: "#999",
                marginBottom: 24,
              }}
            >
              * * * * * *
            </p>
            <p style={{ ...textStyle, fontStyle: "italic" }}>
              <strong>NOW THEREFORE</strong>, this Refund & Exchange Policy is
              effective as of [Insert Date] and shall remain in force until
              amended or withdrawn by the Company. It supersedes all prior
              customer-facing policies, communications, or representations,
              whether oral or written, concerning the subject matter addressed
              herein. By placing an order through the Lafetch website or
              application, the customer acknowledges that they have read,
              understood, and agreed to abide by the terms of this Policy in its
              entirety.
            </p>
          </div>

          {/* Annexure A */}
          <section id="annexure" style={{ marginBottom: 60 }}>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                borderBottom: "3px solid #0f1110",
                paddingBottom: 10,
                marginBottom: 8,
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
                marginBottom: 24,
                textDecoration: "underline",
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Made-to-Order (MTO) Policy
            </h3>

            <div style={{ overflowX: "auto" }}>
              <table style={tableStyle}>
                <thead>
                  <tr style={{ background: "#0f1110", color: "#fff" }}>
                    <th style={{ ...thStyle, width: 80 }}>CLAUSE NO.</th>
                    <th style={thStyle}>CATEGORY</th>
                    <th style={thStyle}>DETAILS / CONDITIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "A.1",
                      "Definition of MTO Products",
                      '"Made-to-Order (MTO)" products refer to goods that are manufactured, customized, printed, assembled, or procured specifically against a confirmed customer order and are not held as ready stock.',
                    ],
                    [
                      "A.2",
                      "Order Confirmation",
                      "An order shall be deemed confirmed once payment (full or partial, as applicable) is successfully received and an order acknowledgment is issued.",
                    ],
                    [
                      "A.3",
                      "Production Commencement",
                      "Production is considered to have commenced once raw materials are allocated, customization begins, or the order is released to manufacturing/processing. This determination shall be at the sole discretion of the company.",
                    ],
                    [
                      "A.4",
                      "Cancellation Window",
                      "Cancellation requests are permitted only within two (2) hours of order placement and before production has commenced, whichever occurs earlier.",
                    ],
                    [
                      "A.5",
                      "Post-Production Cancellation",
                      "Once production has commenced, the order becomes non-cancellable and non-reversible under all circumstances.",
                    ],
                    [
                      "A.6",
                      "Non-Returnable Nature",
                      "All MTO products are inherently non-returnable, except in cases of verified defects or material errors attributable to the company.",
                    ],
                    [
                      "A.7",
                      "Eligible Return Scenarios",
                      "Returns will be considered only if the product is:\n• materially different from confirmed specifications, or\n• defective due to manufacturing fault, or\n• damaged during transit (where risk has not passed to the customer).",
                    ],
                    [
                      "A.8",
                      "Non-Eligible Return Scenarios",
                      "Returns shall not be accepted for:\n• minor variations in color, texture, size, or finish inherent to MTO goods,\n• customer-approved proofs/mock-ups,\n• customer-provided incorrect specifications,\n• change of mind, or\n• normal wear and tear.",
                    ],
                    [
                      "A.9",
                      "Return Request Timeline",
                      "Any return request must be raised within [X] days of delivery (recommended: 24–72 hours), along with supporting photographic/video evidence.",
                    ],
                    [
                      "A.10",
                      "Inspection & Verification",
                      "All return requests are subject to internal inspection and verification. The company's decision on eligibility shall be final and binding.",
                    ],
                    [
                      "A.11",
                      "Refund Policy",
                      "Monetary refunds are not available for MTO products under any circumstances.",
                    ],
                    [
                      "A.12",
                      "Remedies Offered",
                      "If a return claim is approved, the company may, at its sole discretion:\n• replace the product, or\n• issue store credit of equivalent value.",
                    ],
                    [
                      "A.13",
                      "Store Credit Terms",
                      "Store credit shall be non-transferable, non-redeemable for cash, and must be used within the validity period specified at issuance.",
                    ],
                    [
                      "A.14",
                      "Replacement Timelines",
                      "Replacement timelines shall depend on production capacity, material availability, and logistics and may mirror the original MTO lead time.",
                    ],
                    [
                      "A.15",
                      "Risk & Title",
                      "Risk and title in MTO products shall pass as per the principal agreement / shipping terms, except where transit damage claims are accepted.",
                    ],
                    [
                      "A.16",
                      "Limitation of Liability",
                      "The company's liability shall be strictly limited to replacement or store credit value of the affected product and shall not include consequential or indirect damages.",
                    ],
                    [
                      "A.17",
                      "Customer Acknowledgement",
                      "By placing an MTO order, the customer expressly acknowledges and agrees to the non-cancellable, non-refundable nature of MTO products as set out in this Annexure.",
                    ],
                    [
                      "A.18",
                      "Governing Clause",
                      "This Annexure A shall form an integral part of the main Terms & Conditions and shall prevail in case of any inconsistency relating to MTO products.",
                    ],
                  ].map(([clause, category, details], i) => (
                    <tr
                      key={i}
                      style={{ background: i % 2 === 0 ? "#fff" : "#f8f8f5" }}
                    >
                      <td
                        style={{
                          ...tdStyle,
                          fontWeight: 700,
                          textAlign: "center",
                          color: "#c8a96e",
                        }}
                      >
                        {clause}
                      </td>
                      <td style={{ ...tdStyle, fontWeight: 600 }}>
                        {category}
                      </td>
                      <td style={{ ...tdStyle, whiteSpace: "pre-line" }}>
                        {details}
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
          Grievance Redressal Officer |{" "}
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

/* ── Reusable Components ── */

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
  <div style={{ marginBottom: 24, marginTop: 20 }}>
    <h3
      style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, color: "#333" }}
    >
      {title}
    </h3>
    {children}
  </div>
);

const LegalNotice = ({ text }) => (
  <div
    style={{
      background: "#1a1a1a",
      color: "#e8e8e0",
      borderRadius: 6,
      padding: "16px 20px",
      marginTop: 20,
      marginBottom: 8,
    }}
  >
    <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, letterSpacing: 0.3 }}>
      {text}
    </p>
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
  tableLayout: "fixed",
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
  lineHeight: 1.7,
};

export default RefundExchangePolicyPage;
