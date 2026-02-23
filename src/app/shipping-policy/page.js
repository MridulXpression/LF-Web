"use client";
import React from "react";

const ShippingPolicyPage = () => {
  const navItems = [
    { id: "definitions", label: "Definitions & Interpretation" },
    { id: "purpose", label: "Purpose" },
    { id: "order-processing", label: "Order Processing" },
    {
      id: "modification-cancellation",
      label: "Order Modification, Cancellation & Pre-Order",
    },
    {
      id: "shipping-methods",
      label: "Shipping Methods, Delivery Timelines & Courier Tracking",
    },
    { id: "shipping-charges", label: "Shipping Charges" },
    {
      id: "third-party-disclaimer",
      label: "Third-Party Shipping & Transit Disclaimer",
    },
    {
      id: "failed-delivery",
      label: "Failed Delivery, RTO & Lost or Damaged Packages",
    },
    { id: "return-shipping", label: "Return Shipping Responsibility" },
    {
      id: "dispatch-disclaimer",
      label: "Estimated Dispatch & Delivery Disclaimer",
    },
    { id: "force-majeure", label: "Force Majeure" },
    { id: "public-holidays", label: "Public Holidays Observed" },
    { id: "customer-support", label: "Customer Support & Contact Information" },
    { id: "grievance", label: "Grievance Redressal Mechanism" },
    { id: "governing-law", label: "Governing Law & Jurisdiction" },
    { id: "amendments", label: "Review and Amendments" },
    { id: "annexure", label: "Annexure A – Public Holidays" },
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
            Shipping Policy
          </h1>
          <p style={{ color: "#ccc", marginTop: 16, fontSize: 15 }}>
            This Shipping Policy ("Policy") will be effective from{" "}
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
            LaFetch ("Company") is committed to conducting its business
            operations with transparency, customer focus, and operational
            efficiency. As part of this commitment, the Company ensures that the
            shipment and delivery of its products are handled in a manner that
            respects consumer rights, maintains clarity in logistics, and
            complies with all applicable legal and regulatory standards in
            India.
          </p>
          <p
            style={{
              color: "#bbb",
              marginTop: 12,
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            The Shipping & Delivery Policy ("Shipping Policy") governs the
            shipment and delivery of products purchased by customers
            ("Customers") through the Lafetch platform, operated by AS10
            Techretail Private Limited. ("LaFetch", "Platform", "We", "Us").
          </p>
          <p
            style={{
              color: "#bbb",
              marginTop: 12,
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            LaFetch operates as an intermediary marketplace platform
            facilitating logistics and delivery on behalf of independent brands.
            ("Brands").
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
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: "#333",
              marginBottom: 16,
            }}
          >
            While LaFetch strives to ensure timely and reliable delivery, the
            Company partners with an independent third-party shipping
            aggregator, for logistics and last-mile fulfillment. Accordingly,
            this Policy includes important disclaimers regarding the Company's
            limited liability in transit-related matters once the order has been
            handed over to the delivery partner.
          </p>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: "#333",
              marginBottom: 16,
            }}
          >
            This Policy is formulated in alignment with the{" "}
            <strong>Consumer Protection Act, 2019</strong>, the{" "}
            <strong>Consumer Protection (E-Commerce) Rules, 2020</strong>, and
            other applicable Indian laws. It is designed to provide a
            transparent, fair, and practical framework for order handling and
            logistics, ensuring consistent and informed expectations for all
            customers engaging with the Company's platform.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#333" }}>
            <strong>NOW THEREFORE</strong>, LaFetch hereby adopts this Shipping
            Policy to establish a clear, reliable, and legally compliant
            framework for the processing, dispatch, and delivery of customer
            orders. This Policy reinforces the Company's values of transparency,
            customer satisfaction, and operational accountability while
            addressing its obligations under applicable Indian consumer
            protection and e-commerce laws. It also clarifies the Company's role
            and limited liability in logistics operations executed by
            third-party partners.
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
                    '"Company"',
                    "shall mean LaFetch, a business entity engaged in the online sale of apparel and related goods through its official website.",
                  ],
                  [
                    '"Customer"',
                    "shall mean any individual or entity who places an order for goods offered by the Company through its online platform.",
                  ],
                  [
                    '"Order"',
                    "shall mean a confirmed request placed by a Customer through the Company's website for the purchase of one or more products, subject to successful payment verification and acceptance.",
                  ],
                  [
                    '"Dispatch"',
                    "shall mean the physical handover of the packaged Order by the Company to its designated logistics partner for shipment and delivery to the Customer.",
                  ],
                  [
                    '"Delivery"',
                    "shall mean the successful handing over of the ordered product to the Customer or their representative at the delivery address specified at the time of placing the Order.",
                  ],
                  [
                    '"Third-Party Logistics Provider" or "Shipping Partner"',
                    "shall mean an independent logistics aggregator engaged by the Company for facilitating shipping, transit, and delivery of Orders. This shall also include any affiliated or sub-contracted carriers operating under or through the said shipping partner.",
                  ],
                  [
                    '"Transit Issues"',
                    "shall mean any delay, damage, loss, theft, or non-delivery of the product occurring after the Order has been dispatched from the Company's facility and while in the custody or control of the Third-Party Logistics Provider.",
                  ],
                  [
                    '"Working Days"',
                    "shall mean all days excluding Saturdays, Sundays, and public holidays observed by the Company, during which order processing and shipping activities are undertaken.",
                  ],
                  [
                    '"Return to Origin (RTO)"',
                    "shall mean the process by which an undelivered Order is returned to the Company's warehouse due to non-availability of the Customer, incorrect address, or repeated delivery failure.",
                  ],
                  [
                    '"Force Majeure Event"',
                    "shall mean any event beyond the reasonable control of the Company that prevents or delays the performance of its shipping obligations, including but not limited to natural calamities, strikes, lockdowns, war, cyber incidents, governmental orders, or carrier disruptions.",
                  ],
                ].map(([term, def], i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: 12,
                      fontSize: 15,
                      lineHeight: 1.8,
                      color: "#333",
                    }}
                  >
                    <strong>{term}</strong> {def}
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
              This Shipping Policy sets out the terms and conditions governing
              the processing, handling, dispatch, and delivery of products
              ordered through the official website of LaFetch. It aims to
              provide transparency to customers regarding the Company's
              logistical operations, expected delivery timelines, shipping
              methods, third-party involvement, and the allocation of
              responsibilities between LaFetch and its shipping partner.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              The Policy is intended to establish uniform standards for managing
              customer expectations, minimizing disputes, and ensuring
              compliance with the Consumer Protection Act, 2019, the Consumer
              Protection (E-Commerce) Rules, 2020, and other applicable legal
              and contractual obligations. It also outlines the limitations of
              the Company's liability in relation to transit-related delays,
              damage, or loss, and affirms LaFetch's commitment to providing
              timely support and clarity throughout the post-purchase
              experience.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              In the event of any inconsistency between this Policy and other
              internal or external policies of the Company, the provisions of
              this Policy shall prevail to the extent of such inconsistency in
              matters concerning shipping mechanisms.
            </p>
          </section>

          {/* Order Processing */}
          <section id="order-processing" style={{ marginBottom: 60 }}>
            <SectionTitle title="ORDER PROCESSING" />
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
                <strong>Order Confirmation and Payment Verification:</strong>{" "}
                Upon successful placement of an order on the Company's website,
                the Customer shall receive an automated order confirmation email
                at the registered email address. This confirmation is subject to
                verification of payment, product availability, and internal
                review. The Company reserves the right to cancel any order where
                payment verification fails, stock is unavailable, or the order
                appears suspicious or non-compliant with applicable terms.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Processing Timeline:</strong> Orders are generally
                processed within 1 to 3 business days from confirmation, unless
                otherwise stated, excluding Saturdays, Sundays, and public
                holidays as detailed in Annexure A, observed by the Company.
                Dispatch timelines may vary depending on product category, brand
                fulfilment timelines, Made-to-Order status, and availability.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Order Modifications and Cancellations:</strong>{" "}
                Customers may request modifications or cancellations to their
                order only before the order has been marked as 'processed' as
                set forth in clause 4(a) by the Company's fulfilment team. Once
                an order has entered the processing stage, it cannot be modified
                or cancelled. The Company reserves the right to decline
                cancellation requests received post-processing.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Inventory and Stock Availability:</strong> All products
                are offered for sale subject to availability. In the event that
                an item becomes unavailable after an order has been placed and
                paid for, the Company shall notify the Customer and initiate a
                refund as detailed in "Return & Exchange Policy" within 7 to 10
                business days. The Company shall not be held liable for any
                damages or claims resulting from stock unavailability.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Fraud and Security Review:</strong> All orders are
                subject to review by the Company's internal fraud prevention and
                security protocols. The Company may, at its sole discretion,
                cancel any order that raises security concerns, involves
                suspicious activity, or violates the terms and conditions of the
                platform. In such cases, a refund will be issued to the original
                method of payment.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Pre-Dispatch Communication:</strong> Once the order is
                successfully processed and ready for dispatch, the Customer will
                receive a shipping confirmation email containing the shipment
                tracking link and other relevant details. It is the Customer's
                responsibility to monitor delivery status using the tracking
                information provided.
              </li>
            </ol>
          </section>

          {/* Order Modification, Cancellation, Pre-Order */}
          <section id="modification-cancellation" style={{ marginBottom: 60 }}>
            <SectionTitle title="ORDER MODIFICATION, CANCELLATION, AND PRE-ORDER POLICY" />
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
                <strong>
                  Right to Modify or Cancel Orders Prior to Dispatch:
                </strong>{" "}
                Customers are permitted to request modifications or
                cancellations to their order before the order has entered the
                processing stage or is dispatched from the Company's facility.
                Modification or cancellation requests must be raised promptly by
                contacting the Company's customer support team at{" "}
                <a href="mailto:customersupport@la-fetch.com" style={linkStyle}>
                  customersupport@la-fetch.com
                </a>
                , and such requests shall be honored at the sole discretion of
                the Company, provided the order has not been processed.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Restrictions on Cancellation Post-Processing:</strong>{" "}
                Once an order has been marked as "processed" and is queued for
                dispatch, the Company shall not accept any requests for
                cancellation or modification. This is because the logistics
                workflow with the third-party shipping aggregator becomes
                non-reversible at this stage. Customers are therefore advised to
                verify all order details, including shipping address and product
                selection, prior to completing the checkout process.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Pre-Order Terms and Conditions:</strong> Certain
                products listed on the Company's platform may be made available
                on a pre-order basis, clearly marked as such on the product
                description page. By placing a pre-order, the Customer
                acknowledges that the item is not currently in stock and will be
                dispatched only upon arrival at the Company's facility, as per
                the estimated timeline indicated at the time of purchase.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Cancellation and Refund of Pre-Orders:</strong> Once
                placed, pre-orders cannot be cancelled, modified, or refunded,
                except in cases where:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>
                    The Company is unable to procure or deliver the pre-order
                    item within the estimated availability window; or
                  </li>
                  <li>
                    The product is discontinued or otherwise withdrawn by the
                    manufacturer or supplier.
                  </li>
                </ol>
                <p style={{ ...textStyle, marginTop: 8 }}>
                  In such cases, the Customer will be notified, and a full
                  refund will be processed to the original method of payment
                  within 7 to 10 business days, or as otherwise required under
                  applicable law.
                </p>
              </li>
            </ol>
          </section>

          {/* Shipping Methods */}
          <section id="shipping-methods" style={{ marginBottom: 60 }}>
            <SectionTitle title="SHIPPING METHODS, DELIVERY TIMELINES, AND COURIER TRACKING" />
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
                <strong>Shipping Partner:</strong> All orders are shipped using
                LaFetch-authorised third-party logistics partners. Delivery
                timelines and serviceability depend on partner networks and
                operational conditions. LaFetch does not control the internal
                operations of these courier partners and does not guarantee
                performance once the package is dispatched from its facility.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Shipping Coverage:</strong> LaFetch delivers products
                across India, subject to the serviceability of the customer's
                pin code by authorized logistics partners. Certain locations may
                not be serviceable due to operational or regulatory constraints.
                If a specific delivery location is not serviceable, the Customer
                will be informed and a full refund will be issued.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Note:</strong> The estimated delivery period begins
                after the order has been processed and dispatched from the
                Company's facility. It does not include order processing time.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Order Processing & Dispatch:</strong> All orders are
                generally processed within 1 – 3 business days from
                confirmation, unless otherwise stated. Dispatch timelines may
                vary depending on product category, brand fulfillment timelines,
                Made-to-Order status, and availability.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Delivery Timelines:</strong> Estimated delivery
                timeframes are outlined below and are calculated based on the
                product type and selected shipping option.
                <div style={{ overflowX: "auto", marginTop: 12 }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr style={{ background: "#0f1110", color: "#fff" }}>
                        <th style={thStyle}>PRODUCT TYPE</th>
                        <th style={thStyle}>ESTIMATED DELIVERY</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Standard Products", "3–7 Business Days"],
                        ["Express/Priority Orders", "As displayed at checkout"],
                        [
                          "Made-to-Order Products",
                          "15–30 business days as specified",
                        ],
                      ].map(([type, timeline], i) => (
                        <tr
                          key={i}
                          style={{
                            background: i % 2 === 0 ? "#fff" : "#f8f8f5",
                          }}
                        >
                          <td style={tdStyle}>{type}</td>
                          <td style={{ ...tdStyle, fontWeight: 600 }}>
                            {timeline}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Courier Tracking and Status Updates:</strong> Once the
                order has been dispatched, Customers will receive an email
                containing:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>The tracking number,</li>
                  <li>The courier partner's name, and</li>
                  <li>
                    A direct link to the tracking page hosted by shipping
                    partner or its affiliated carrier.
                  </li>
                </ol>
                <p style={{ ...textStyle, marginTop: 8 }}>
                  Customers are encouraged to monitor delivery status regularly.
                  Any delay or issue observed in tracking post-dispatch should
                  be first addressed with the delivery provider using the
                  tracking interface.
                </p>
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Non-Guarantee of Timelines:</strong> The Company makes
                commercially reasonable efforts to meet the estimated delivery
                timelines. However, delivery times are not guaranteed, and
                delays may occur due to unforeseen logistical or regulatory
                issues, particularly in the case of remote deliveries,
                cross-border shipments, or customs clearance for international
                orders.
              </li>
            </ol>
          </section>

          {/* Shipping Charges */}
          <section id="shipping-charges" style={{ marginBottom: 60 }}>
            <SectionTitle title="SHIPPING CHARGES" />
            <p style={textStyle}>
              Shipping charges, if applicable, will be disclosed at checkout.
              Promotional campaigns may include free shipping, subject to
              communicated terms.
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
                <strong>Domestic Shipping Charges:</strong> Shipping charges for
                domestic orders are calculated at checkout and are based on the
                delivery location, order value, and weight of the shipment. The
                applicable shipping charge will be clearly displayed before the
                customer proceeds with final payment.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>International Shipping Charges:</strong> International
                shipping charges vary based on the destination country, product
                weight, and delivery mode selected (Express/Economy). The exact
                charge will be calculated and shown to the customer at checkout.
                Customers are solely responsible for all customs duties, import
                taxes, and any local levies that may be applicable in the
                destination country.{" "}
                <em>
                  Note: LaFetch does not guarantee delivery timelines for
                  international shipments, and customs delays are beyond the
                  Company's control.
                </em>
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Non-Refundable Shipping Charges:</strong> All shipping
                charges, once paid, are non-refundable, including but not
                limited to:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>
                    Orders returned to origin (RTO) due to delivery failure,
                  </li>
                  <li>Orders refused by the recipient,</li>
                  <li>
                    Orders returned for reasons not attributable to the Company,
                    such as incorrect address, recipient unavailable, or failure
                    to respond to delivery attempts,
                  </li>
                  <li>
                    Orders in which products were delivered late due to courier
                    delays, weather, strikes, or force majeure events.
                  </li>
                </ol>
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Multiple Orders and Consolidated Shipping:</strong> If
                multiple orders are placed by the same customer to the same
                shipping address within a short time frame, LaFetch may, at its
                discretion, consolidate them into a single shipment. In such
                cases, applicable shipping charges will be adjusted accordingly,
                where applicable.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Shipping Charges Modifications:</strong> The Company
                reserves the right to modify the shipping charges at any time
                without prior notice. However, any such change shall not apply
                to orders already placed and confirmed prior to such
                modification.
              </li>
            </ol>
          </section>

          {/* Third-Party Disclaimer */}
          <section id="third-party-disclaimer" style={{ marginBottom: 60 }}>
            <SectionTitle title="THIRD-PARTY SHIPPING & TRANSIT DISCLAIMER" />

            {/* Warning box */}
            <div
              style={{
                background: "#fff8e1",
                border: "1px solid #f0c040",
                borderLeft: "4px solid #e6a817",
                borderRadius: 6,
                padding: "16px 20px",
                marginBottom: 20,
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
                <strong>Important Notice:</strong> Once an order has been
                dispatched to a third-party logistics partner, LaFetch's
                liability for transit-related issues is limited as described in
                this section. Please read carefully.
              </p>
            </div>

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
                <strong>Third-Party Logistics Engagement:</strong> LaFetch
                partners a third-party logistics aggregator, for the
                facilitation of shipping and last-mile delivery of customer
                orders. The said partner may, in turn, engage various
                independent courier service providers to execute deliveries.
                LaFetch does not own, control, or operate these logistics
                providers and acts solely as the dispatching party.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Transfer of Risk Post-Dispatch:</strong> Once an order
                has been successfully processed, packaged, and handed over to
                shipping partner or its affiliated carrier partners, the
                responsibility for the shipment, including all transit-related
                risks such as delay, damage, misplacement, or theft, shall pass
                to the logistics provider. LaFetch does not assume
                responsibility for the performance, negligence, or delay on the
                part of shipping partner or its partners.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>No Refund or Replacement for Transit Issues:</strong>{" "}
                LaFetch shall not offer any refund, replacement, compensation,
                or redelivery in cases where:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>The product is delayed in transit by the courier;</li>
                  <li>The product is damaged during shipping;</li>
                  <li>
                    The shipment is marked as delivered by the courier, but the
                    Customer claims non-receipt;
                  </li>
                  <li>
                    The package is lost, stolen, or mishandled while in the
                    custody of the courier.
                  </li>
                </ol>
                <p style={{ ...textStyle, marginTop: 8 }}>
                  Customers expressly acknowledge and accept that these are
                  events beyond the control of the Company, and remedies, if
                  any, must be sought directly from the concerned logistics
                  provider.
                </p>
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Tracking and Customer Responsibility:</strong> LaFetch
                shall provide the Customer with a shipment tracking link via
                email upon dispatch. It is the Customer's responsibility to
                monitor the shipment status and escalate any delivery concerns
                promptly with the carrier. LaFetch may, on a goodwill basis,
                assist the Customer in coordinating with shipping partner, but
                does not guarantee any outcome or assume liability.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Limitation of Liability:</strong> To the fullest extent
                permitted under applicable law, LaFetch disclaims any liability
                for consequential, indirect, or incidental losses arising due to
                failure or delays in shipping or delivery performed by
                third-party logistics partners. This disclaimer is a material
                term of the transaction and is expressly accepted by the
                Customer at the time of placing the order.
              </li>
            </ol>
          </section>

          {/* Failed Delivery / RTO */}
          <section id="failed-delivery" style={{ marginBottom: 60 }}>
            <SectionTitle title="FAILED DELIVERY, RETURN TO ORIGIN (RTO), AND LOST OR DAMAGED PACKAGES" />
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
                <strong>Delivery Attempts and Failed Delivery:</strong> The
                Company's logistics partner (including its associated courier
                agencies), typically attempt delivery twice. Failed deliveries
                due to incorrect address, unavailability, or refusal may result
                in return-to-origin (RTO) and cancellation, with applicable
                deductions.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Return to Origin (RTO) Handling:</strong> In the event
                of an RTO, the Customer will be notified via email. The original
                shipping charges shall remain non-refundable, and any additional
                charges for re-shipment shall be borne by the Customer.
                Re-dispatch of an RTO package shall be processed only upon
                confirmation of a revised address and advance payment of
                applicable re-shipping charges.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Responsibility for Delivery Failures:</strong> The
                Customer is solely responsible for ensuring that the shipping
                address provided is accurate, complete, and accessible. LaFetch
                shall not be held liable for delivery failures due to Customer
                error, including but not limited to:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>Incorrect or incomplete address,</li>
                  <li>Refusal to accept delivery,</li>
                  <li>Unavailability during delivery window.</li>
                </ol>
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Lost, Damaged, or Tampered Packages:</strong> Once an
                order is dispatched and handed over to shipping partner or its
                associated carrier, LaFetch disclaims all liability for any
                loss, theft, damage, or tampering of the product during transit.
                If the package is marked as "delivered" by the courier but the
                Customer claims non-receipt, an internal grievance redressal
                mechanism shall be initiated in case the Customer reports
                non-receipt of the package despite it being marked as
                "delivered" by the courier. This involves an internal
                investigation and discussion (including escalation) with the
                shipping aggregator. If the non-receipt is substantiated through
                evidence, a refund may be issued. However, if no conclusive
                evidence is found to support the claim, company shall not be
                responsible or liable for replacement or refund.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Reporting and Support:</strong> In the event of a
                delivery issue, Customers are encouraged to raise the concern
                directly with the delivery partner using the tracking and
                complaint mechanism provided in the shipping confirmation email.
                LaFetch may assist, on a best-effort basis, by facilitating
                communication between the Customer and shipping partner but
                shall not be held responsible for the final resolution or any
                consequential loss arising from failed or defective delivery.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>No Liability for Transit Defects:</strong> LaFetch shall
                not process refunds or replacements for orders impacted by
                in-transit defects, including delay, tampering, breakage, theft,
                or misplacement, once the package has been handed over to the
                courier partner. All such risks are transferred to the logistics
                provider at the time of dispatch.
              </li>
            </ol>
          </section>

          {/* Return Shipping */}
          <section id="return-shipping" style={{ marginBottom: 60 }}>
            <SectionTitle title="RETURN SHIPPING RESPONSIBILITY" />
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
                <strong>General Return Eligibility:</strong> Return requests are
                accepted only under the Company's published Return & Exchange
                Policy, which is separate from and read in conjunction with this
                Shipping Policy. Returns may be permitted in cases of:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>Manufacturing defect or quality issue,</li>
                  <li>Incorrect product delivered,</li>
                  <li>Eligible size exchange (as per availability).</li>
                </ol>
                <p style={{ ...textStyle, marginTop: 8 }}>
                  Return requests for reasons such as change of mind, delay in
                  delivery, or dislike of color/style may not be accepted as
                  stated in the Return & Exchange Policy.
                </p>
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Who Bears Return Shipping Charges?</strong> The
                responsibility for bearing the cost of return shipping shall
                vary depending on the nature of the return:
                <div style={{ overflowX: "auto", marginTop: 12 }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr style={{ background: "#0f1110", color: "#fff" }}>
                        <th style={thStyle}>RETURN SCENARIO</th>
                        <th style={thStyle}>RETURN SHIPPING RESPONSIBILITY</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Product delivered is defective, damaged, or incorrect",
                          "Company",
                        ],
                        ["Return requested due to size exchange", "Company"],
                        ["Unserviceable Location", "Customer"],
                        [
                          "Return due to customer error (wrong address, refusal to accept, etc.)",
                          "Customer (both original and return shipping non-refundable)",
                        ],
                        [
                          "Unauthorized return or return made without approval",
                          "Customer (Company not liable for receipt, replacement, or refund)",
                        ],
                      ].map(([scenario, responsibility], i) => (
                        <tr
                          key={i}
                          style={{
                            background: i % 2 === 0 ? "#fff" : "#f8f8f5",
                          }}
                        >
                          <td style={tdStyle}>{scenario}</td>
                          <td style={{ ...tdStyle, fontWeight: 600 }}>
                            {responsibility}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>The Method of Return:</strong> For approved returns
                where the Company bears the shipping cost, the Company shall
                arrange a reverse pickup through its courier partner, subject to
                serviceability. In areas where reverse pickup is not available,
                the Customer may be asked to self-ship the product to the
                address provided, along with a valid proof of dispatch.
                Reimbursement for return shipping (if applicable) shall be
                processed only upon receipt and inspection of the returned item.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Condition of Returned Products:</strong> All returned
                products must be:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>Unused and in original condition,</li>
                  <li>Accompanied by original packaging, tags, and invoice,</li>
                  <li>
                    Returned within the timelines prescribed in the Return &
                    Exchange Policy.
                  </li>
                </ol>
                <p style={{ ...textStyle, marginTop: 8 }}>
                  The Company reserves the right to reject the return if these
                  conditions are not met, and in such cases, no shipping cost or
                  refund shall be reimbursed.
                </p>
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Non-Refundable Shipping Charges:</strong> In all cases,
                original shipping charges paid at the time of purchase shall
                remain non-refundable, unless the return is a result of a
                verified error on the part of the Company (e.g., wrong product
                or manufacturing defect), as set forth in Return & Exchange
                Policy.
              </li>
            </ol>
          </section>

          {/* Dispatch Disclaimer */}
          <section id="dispatch-disclaimer" style={{ marginBottom: 60 }}>
            <SectionTitle title="ESTIMATED DISPATCH & DELIVERY DISCLAIMER" />
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
                <strong>Dispatch Timeline Disclaimer:</strong> All orders placed
                on the Company's website are subject to a standard processing
                period of 24 to 48 working hours before dispatch. Processing
                includes order verification, payment confirmation, quality
                checks, and packaging. The Company endeavors to dispatch all
                orders within this timeline; however, processing delays may
                occur during high-demand periods, technical issues, or
                unforeseen operational constraints.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Delivery Timeline Estimates:</strong> The delivery
                timelines communicated at checkout or elsewhere on the website
                are only indicative and do not constitute binding commitments.
                These estimates begin only after the dispatch of the order and
                do not include order processing time. The following factors may
                impact delivery timelines:
                <ol
                  style={{
                    listStyle: "lower-roman",
                    paddingLeft: 24,
                    marginTop: 8,
                  }}
                >
                  <li>Location-specific transit durations,</li>
                  <li>Courier service disruptions,</li>
                  <li>Weather conditions,</li>
                  <li>Public holidays or non-working days,</li>
                  <li>
                    Customs clearance delays (in case of international orders),
                  </li>
                  <li>Force majeure events.</li>
                </ol>
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>No Guarantee of Delivery Date:</strong> While the
                Company takes all reasonable efforts to meet the estimated
                delivery dates, LaFetch does not guarantee the arrival of any
                order on a specific date or within a specified timeframe. The
                actual delivery time may vary depending on factors beyond the
                Company's control, particularly as deliveries are fulfilled by
                third-party logistics partners.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>No Compensation for Delay:</strong> The Company shall
                not be liable for any direct or indirect loss, inconvenience, or
                damages resulting from delays in delivery, irrespective of the
                nature or cause of the delay. No compensation, discount, refund,
                or return shall be provided solely on the grounds of late
                delivery.
              </li>
              <li style={{ marginBottom: 14 }}>
                <strong>Customer Responsibility to Track:</strong> Customers are
                expected to use the shipment tracking link provided via email at
                the time of dispatch to monitor their order status. In case of
                any substantial delay observed post-dispatch, customers should
                promptly escalate the issue with the logistics partner or notify
                the Company's support team for coordination assistance.
              </li>
            </ol>
          </section>

          {/* Force Majeure */}
          <section id="force-majeure" style={{ marginBottom: 60 }}>
            <SectionTitle title="FORCE MAJEURE" />
            <p style={textStyle}>
              The LaFetch is not liable for delays caused by events beyond
              reasonable control, ("Force Majeure Events"). Such events include,
              natural disasters, government restrictions, strikes pandemics or
              logistics disruption.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              During the occurrence of a Force Majeure Event, the Company's
              obligations under this Policy shall be deemed suspended for the
              duration of the event, and the estimated timelines for dispatch or
              delivery may be extended without penalty. The Company will make
              commercially reasonable efforts to inform affected Customers of
              such delays and resume operations as soon as the situation
              permits. In such cases, the Company shall not be liable to offer
              any refund, compensation, penalty, or damages for non-performance
              or delay resulting from a force majeure event.
            </p>
          </section>

          {/* Public Holidays */}
          <section id="public-holidays" style={{ marginBottom: 60 }}>
            <SectionTitle title="PUBLIC HOLIDAYS OBSERVED" />
            <p style={textStyle}>
              The Company observes the public holidays listed in Annexure A
              during which order processing, dispatch, and customer service may
              be unavailable. Orders placed immediately before or during these
              holidays may experience delays in processing or shipping.
            </p>
          </section>

          {/* Customer Support */}
          <section id="customer-support" style={{ marginBottom: 60 }}>
            <SectionTitle title="CUSTOMER SUPPORT & CONTACT INFORMATION" />
            <p style={textStyle}>
              For shipping related queries, concerns, or assistance, customers
              may reach out to the Company's support team during the following
              business hours:
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
              <p style={{ margin: 0, fontSize: 15 }}>
                <strong>Customer Support Email:</strong>{" "}
                <a href="mailto:customersupport@la-fetch.com" style={linkStyle}>
                  customersupport@la-fetch.com
                </a>
              </p>
              <p style={{ margin: "8px 0 0", fontSize: 15 }}>
                <strong>Business Hours:</strong> Monday to Friday, 10:00 AM –
                6:00 PM IST
              </p>
              <p style={{ margin: "8px 0 0", fontSize: 15 }}>
                <strong>Closed on:</strong> Weekends and public holidays listed
                under Annexure A.
              </p>
            </div>
            <p style={{ ...textStyle, marginTop: 16 }}>
              All inquiries will be addressed in the order received, and the
              Company endeavors to respond within 24 – 48 business hours.
            </p>
          </section>

          {/* Grievance Redressal */}
          <section id="grievance" style={{ marginBottom: 60 }}>
            <SectionTitle title="GRIEVANCE REDRESSAL MECHANISM" />
            <p style={textStyle}>
              The Company is committed to addressing and resolving customer
              concerns in a transparent, fair, and time-bound manner. In
              accordance with Rule 5(3) of the Consumer Protection (E-Commerce)
              Rules, 2020, LaFetch has appointed a Grievance Officer to handle
              complaints related to shipping, delivery, logistics failures, and
              other issues arising under this Shipping Policy.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              Customers who have unresolved concerns related to:
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
              <li>Delayed or failed deliveries,</li>
              <li>Shipping defects,</li>
              <li>Courier non-cooperation,</li>
              <li>Issues with order tracking,</li>
              <li>
                Non-receipt of goods marked as "delivered" by the courier,
              </li>
              <li>Breach of obligations under this Shipping Policy,</li>
            </ol>
            <p style={{ ...textStyle, marginTop: 12 }}>
              may escalate their grievance to the Grievance Officer at the
              contact details provided below:
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
                Grievance Officer Details:
              </p>
              <p style={{ margin: "8px 0 0", fontSize: 15 }}>
                <strong>Name:</strong> Maneet Oberoi
              </p>
              <p style={{ margin: "4px 0 0", fontSize: 15 }}>
                <strong>Designation:</strong> Grievance Redressal, LaFetch
              </p>
              <p style={{ margin: "4px 0 0", fontSize: 15 }}>
                <strong>Email:</strong>{" "}
                <a href="mailto:legal@la-fetch.com" style={linkStyle}>
                  legal@la-fetch.com
                </a>
              </p>
              <p style={{ margin: "4px 0 0", fontSize: 15 }}>
                <strong>Working Hours:</strong> Monday to Friday, 10:00 AM to
                6:00 PM IST (excluding public holidays)
              </p>
            </div>

            <p style={{ ...textStyle, marginTop: 20 }}>
              Upon receipt of a complaint, the Grievance Officer shall:
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
              <li>Acknowledge the complaint within 48 hours of receipt,</li>
              <li>
                Endeavour to resolve the complaint within one month from the
                date of receipt.
              </li>
            </ol>
            <p style={{ ...textStyle, marginTop: 12 }}>
              All complaints must be made in writing and must include the order
              number, registered email address, contact number, nature of
              grievance, and any supporting documentation or screenshots where
              applicable. Complaints made via unofficial channels (such as
              social media comments or private DMs) shall not be considered
              formal grievances unless subsequently submitted via the designated
              email address.
            </p>
            <p style={{ ...textStyle, marginTop: 12 }}>
              The Grievance Officer's role is to ensure that every complaint is
              evaluated fairly and that appropriate action is taken in
              accordance with this Shipping Policy, applicable laws, and the
              Company's internal protocols.
            </p>
          </section>

          {/* Governing Law */}
          <section id="governing-law" style={{ marginBottom: 60 }}>
            <SectionTitle title="GOVERNING LAW & JURISDICTION" />
            <p style={textStyle}>
              This Shipping Policy shall be governed by and construed in
              accordance with the laws of India, without reference to conflict
              of laws principles. Any disputes arising out of or in connection
              with this Policy shall be subject to the exclusive jurisdiction of
              the courts located in [Gurgaon, Haryana], India.
            </p>
          </section>

          {/* Review and Amendments */}
          <section id="amendments" style={{ marginBottom: 60 }}>
            <SectionTitle title="REVIEW AND AMENDMENTS" />
            <p style={textStyle}>
              The Company reserves the right to amend, modify, or update this
              Shipping Policy at any time, without prior notice, in order to
              reflect changes in legal requirements, business practices, or
              logistics processes. Any such changes shall be effective
              immediately upon being published on the Company's official
              website. Customers are encouraged to review this Policy
              periodically to remain informed of its current terms. Continued
              use of the website or placing orders after changes are posted
              shall be deemed acceptance of the revised Policy.
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
              <strong>NOW THEREFORE</strong>, by placing an order through the
              Company's website, the Customer acknowledges and agrees to be
              bound by the terms set forth in this Shipping Policy. If the
              Customer does not agree with any part of this Policy, they are
              advised not to proceed with the transaction. Use of the Company's
              website or any associated purchase shall constitute deemed
              acceptance of this Shipping Policy, as amended from time to time.
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
                marginBottom: 24,
                textDecoration: "underline",
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              PUBLIC HOLIDAYS
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: 12,
              }}
            >
              {[
                "New Year's Day",
                "Lohri",
                "Makar Sankranti",
                "Republic Day",
                "Basant Panchami",
                "Mahashivratri",
                "Holi",
                "Id-ul-Fitr",
                "Ram Navmi",
                "Vaisakhi",
                "Mahavir Jayanti",
                "Good Friday",
                "Buddha Purnima",
                "Raksha Bandhan",
                "Independence Day",
                "Janmashtami",
                "Ganesh Chaturthi",
                "Gandhi Jayanti",
                "Dussehra",
                "Diwali",
                "Guru Nanak Jayanti",
                "Christmas Eve",
                "Christmas Day",
                "New Year's Eve",
              ].map((holiday, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    border: "1px solid #e0dfd6",
                    borderLeft: "3px solid #c8a96e",
                    borderRadius: 4,
                    padding: "10px 14px",
                    fontSize: 14,
                    color: "#333",
                  }}
                >
                  {holiday}
                </div>
              ))}
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

export default ShippingPolicyPage;
