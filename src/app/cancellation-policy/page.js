"use client";
import React from "react";
import Footer from "@/components/footer";
const CancellationReturnExchangeRefundPolicyPage = () => {
   const sections = [
    {
      id: "introduction",
      title: "1. APPLICABILITY",
      content: [
        {
          text: `This Policy applies to all products sold on LaFetch unless stated otherwise. Certain categories such as Made-to-Order products are governed by special conditions.`,
        },
      ],
    },
    {
      id: "return-exchange-window",
      title: "2. RETURN / EXCHANGE WINDOW",
      content: [
        {
          text: `Return or exchange requests must be initiated within 7 calendar days of delivery.`,
        },
      ],
    },
    {
      id: "eligibility-conditions",
      title: "3. ELIGIBILITY CONDITIONS",
      content: [
        {
          text: `Products must be unused, unworn, unwashed, and returned with original tags, packaging, and accessories intact.`,
        },
      ],
    },
    {
      id: "eligible-grounds",
      title: "4. ELIGIBLE GROUNDS",
      content: [
        {
          subpoints: [
            "A. Incorrect product delivered",
            "B. Damaged or defective product",
            "C. Size, fit, or style issues subject to eligibility",
          ],
        },
      ],
    },
    {
      id: "non-eligible-grounds",
      title: "5. NON-ELIGIBLE GROUNDS",
      content: [
        {
          subpoints: [
            "A. Minor colour variations",
            "B. Change of mind",
            "C. Products marked non-returnable",
          ],
        },
      ],
    },
    {
      id: "size-fit-style",
      title: "6. SIZE / FIT / STYLE EXCHANGES",
      content: [
        {
          text: `The first exchange may be facilitated without reverse logistics charges. Subsequent exchanges may attract charges. All exchanges are subject to availability.`,
        },
      ],
    },
    {
      id: "return-pickup-inspection",
      title: "7. RETURN PICKUP & INSPECTION",
      content: [
        {
          text: `Reverse pickup is arranged where serviceable. All returned products undergo quality inspection by the Brand.`,
        },
      ],
    },
    {
      id: "refunds",
      title: "8. REFUNDS",
      content: [
        {
          text: `Approved refunds are processed within 5–7 business days to the original payment method. Shipping and COD charges are non-refundable unless the fault lies with the Brand or Platform.`,
        },
      ],
    },
    {
      id: "cancellations",
      title: "9. CANCELLATIONS",
      content: [
        {
          text: `Orders may be cancelled prior to dispatch. Orders already shipped cannot be cancelled and must follow the return process.`,
        },
      ],
    },
    {
      id: "made-to-order",
      title: "10. MADE-TO-ORDER PRODUCTS",
      content: [
        {
          text: `Cancellations permitted only within 2 hours of order placement and before production begins. Returns accepted only for defective or materially incorrect products. Monetary refunds are not available; replacements or store credit may be issued.`,
        },
      ],
    },
    {
      id: "discretion-misuse",
      title: "11. DISCRETION & MISUSE",
      content: [
        {
          text: `LaFetch and the Brand retain discretion to approve or reject claims. Policy abuse may result in account restrictions.`,
        },
      ],
    },
    {
      id: "policy-hierarchy",
      title: "12. POLICY HIERARCHY",
      content: [
        {
          text: `This Policy prevails over brand-level policies, without prejudice to statutory consumer rights.`,
        },
      ],
    },
    {
      id: "customer-support",
      title: "13. CUSTOMER SUPPORT",
      content: [
        {
          text: `All return-related queries may be addressed to customersupport@la-fetch.com with responses within 24–48 business hours.`,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#0f1110] text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Cancellation, Return, Exchange & Refund Policy
          </h1>
          <p className="text-gray-300 mt-4 max-w-3xl">
            Complete policy governing cancellations, returns, exchanges,
            refunds, dispute resolution, and arbitration.
          </p>
        </div>
      </div>

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
                    <h3 className="text-lg font-semibold">{item.subtitle}</h3>
                  )}
                  {item.text && <p className="text-gray-700">{item.text}</p>}
                  {item.subpoints && (
                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                      {item.subpoints.map((p, i) => (
                        <li key={i}>{p}</li>
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

export default CancellationReturnExchangeRefundPolicyPage;
