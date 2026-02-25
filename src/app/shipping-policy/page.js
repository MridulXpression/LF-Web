"use client";
import React from "react";
import Footer from "@/components/footer";
const ShippingDeliveryPolicyPage = () => {
  const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: [
      {
        text: `This Shipping & Delivery Policy (“Shipping Policy”) governs the shipment and delivery of products purchased by customers (“Customers”) through the LaFetch platform, operated by AS10 Techretail Private Limited (“LaFetch”, “Platform”, “we”, “us”).`,
      },
      {
        text: `LaFetch operates as an intermediary marketplace platform facilitating logistics and delivery on behalf of independent brands (“Brands”).`,
      },
    ],
  },

  {
    id: "shipping-coverage",
    title: "2. Shipping Coverage",
    content: [
      {
        text: `LaFetch delivers products across India, subject to serviceability of the customer’s pin code by authorised logistics partners. Certain locations may not be serviceable due to operational or regulatory constraints.`,
      },
    ],
  },

  {
    id: "shipping-partners",
    title: "3. Shipping Partners",
    content: [
      {
        text: `Orders are shipped using LaFetch-authorised third-party logistics partners. Delivery timelines and serviceability depend on partner networks and operational conditions.`,
      },
    ],
  },

  {
    id: "processing-dispatch",
    title: "4. Order Processing & Dispatch",
    content: [
      {
        text: `Orders are generally processed within 1–3 business days from confirmation, unless otherwise stated. Dispatch timelines may vary depending on product category, brand fulfilment timelines, Made-to-Order status, and availability.`,
      },
    ],
  },

  {
    id: "delivery-timelines",
    title: "5. Delivery Timelines",
    content: [
      {
        subpoints: [
          "Standard Products: 3–7 business days.",
          "Express / Priority Orders: As displayed at checkout.",
          "Made-to-Order Products: 15–30 business days or as specified.",
        ],
      },
    ],
  },

  {
    id: "shipping-charges",
    title: "6. Shipping Charges",
    content: [
      {
        text: `Shipping charges, if applicable, will be disclosed at checkout. Promotional campaigns may include free shipping subject to communicated terms.`,
      },
    ],
  },

  {
    id: "cod",
    title: "7. Cash on Delivery (COD)",
    content: [
      {
        text: `COD availability depends on pin code serviceability, order value, and brand-level restrictions. LaFetch reserves the right to disable COD for certain orders.`,
      },
    ],
  },

  {
    id: "delivery-failure",
    title: "8. Delivery Attempts & Failure",
    content: [
      {
        text: `Logistics partners typically attempt delivery twice. Failed deliveries due to incorrect address, unavailability, or refusal may result in return-to-origin and cancellation, with applicable deductions.`,
      },
    ],
  },

  {
    id: "force-majeure",
    title: "9. Delays & Force Majeure",
    content: [
      {
        text: `LaFetch is not liable for delays caused by events beyond reasonable control, including natural disasters, government restrictions, strikes, pandemics, or logistics disruptions.`,
      },
    ],
  },

  {
    id: "ownership",
    title: "10. Ownership & Risk",
    content: [
      {
        text: `Risk of loss transfers upon successful delivery. Title remains with the Brand until delivery.`,
      },
    ],
  },

  {
    id: "support",
    title: "11. Customer Support",
    content: [
      {
        text: `For shipping-related queries, customers may contact customersupport@la-fetch.com. Responses are provided within 24–48 business hours.`,
      },
    ],
  },
];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#0f1110] text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Shipping & Delivery Policy
          </h1>
          <p className="text-gray-300 mt-4 max-w-3xl">
            Learn how Lafetch handles shipping, delivery timelines, tracking,
            and logistics.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {sections.map((section) => (
          <section key={section.id} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {section.title}
            </h2>

            <div className="space-y-6">
              {section.content.map((item, idx) => (
                <div key={idx} className="space-y-3">
                  {item.subtitle && (
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.subtitle}
                    </h3>
                  )}
                  {item.text && (
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {item.text}
                    </p>
                  )}
                  {item.subpoints && (
                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                      {item.subpoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ShippingDeliveryPolicyPage;
