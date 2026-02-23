"use client";
import React from "react";

const TermsAndConditionsPage = () => {
  const sections = [
    {
      id: "use-of-platform",
      title: "1. Use of Platform",
      content: [
        {
          text: `Welcome to LAFETCH ("Site" or "Platform"). The website www.la-fetch.com and mobile application Lafetch available on Apple and Android App Store is owned and operated by AS10 Techretail Pvt Ltd ("Lafetch"), a company incorporated under the Companies Act, 2013 with its registered office at 122, First Floor, Universal Trade Tower, Sohna Road, Omaxe City Centre, Sector-49, Manesar, Gurugram, Haryana, 122101.`,
        },
        {
          text: `The Platform is to be used only for personal, non-commercial purposes. By accessing or using the Platform, you agree to be bound by these Terms of Use along with the Privacy Policy, Shipping Policy, and Cancellation, Return, Exchange & Refund Policy.`,
        },
        {
          text: `ACCESSING, BROWSING OR OTHERWISE USING THE PLATFORM INDICATES YOUR UNCONDITIONAL AGREEMENT TO ALL TERMS.`,
        },
        {
          text: `Lafetch reserves the right to modify these Terms at any time without notice. Continued use constitutes acceptance.`,
        },
      ],
    },

    {
      id: "privacy",
      title: "2. Privacy Practices",
      content: [
        {
          text: `Your use of the Platform is governed by Lafetch’s Privacy Policy. By continuing to use the Site, you consent to collection and use of personal information as per the Privacy Policy.`,
        },
      ],
    },

    {
      id: "account",
      title: "3. Your Account",
      content: [
        {
          text: `This Site is intended for adult use only. You are responsible for maintaining confidentiality of your account credentials and all activities conducted under your account.`,
        },
        {
          text: `Lafetch reserves the right to suspend or terminate accounts without notice if these Terms are violated.`,
        },
      ],
    },

    {
      id: "products",
      title: "4. Product & Services Information",
      content: [
        {
          text: `Lafetch attempts to provide accurate product descriptions but does not warrant accuracy, completeness, or reliability. Product images are indicative.`,
        },
      ],
    },

    {
      id: "product-use",
      title: "5. Product Use & Services",
      content: [
        {
          text: `Products and services are for personal use only and not for resale. Lafetch shall not be responsible for manufacturer-related side effects.`,
        },
        {
          text: `Lafetch does not provide medical advice. Any beauty, skincare, health, or wellness-related information made available on the Platform is for informational purposes only.`,
        },
        {
          text: `Users are advised to consult a certified medical or healthcare professional before using any health or cosmetic products purchased through the Platform.`,
        },
        {
          text: `Lafetch shall not be liable for any adverse reactions, allergies, health complications, or misuse of products purchased through the Platform.`,
        },
      ],
    },

    {
      id: "recommendations",
      title: "6. Recommendation of Products & Services",
      content: [
        {
          text: `Recommendations provided on the Platform are informational only and do not constitute endorsements.`,
        },
      ],
    },

    {
      id: "pricing",
      title: "7. Pricing Information",
      content: [
        {
          text: `Prices and availability are subject to change. Lafetch reserves the right to cancel orders due to pricing errors.`,
        },
        {
          text: `In the event of incorrect pricing due to technical error, typographical error, or system malfunction, Lafetch reserves the right to cancel the order and refund any amounts paid.`,
        },
        {
          text: `If an order is cancelled after payment due to pricing error, the amount shall be refunded to the original mode of payment.`,
        },
        {
          subtitle: "7.2 Convenience Fee",
          text: `A non-refundable Convenience Fee is charged on every order. The fee covers operational costs and shall not be refunded under any circumstances.`,
        },
      ],
    },

    {
      id: "cancellation-policy",
      title: "8. Cancellation, Return, Exchange & Refund Policy",
      content: [
        {
          text: `Please refer to our Cancellation, Return, Exchange & Refund Policy available on the Site.`,
        },
      ],
    },

    {
      id: "payments",
      title: "9. Mode of Payment",
      content: [
        {
          subpoints: [
            "Payments via Credit/Debit Cards, Net Banking, Wallets, e-Gift Cards.",
            "COD mode is currently unavailable.",
          ],
        },
      ],
    },

    {
      id: "shipping",
      title: "10. Shipping & Delivery",
      content: [
        {
          text: `Please refer to our Shipping & Delivery Policy provided on the Platform.`,
        },
      ],
    },

    {
      id: "chat",
      title: "11. Chat/Call Functionality",
      content: [
        {
          subpoints: [
            "Chat/Call service may be suspended without notice.",
            "Communication may be recorded.",
            "Objectionable communication is prohibited.",
            "You authorize Lafetch to contact you for order updates.",
          ],
        },
      ],
    },

   {
      id: "user-content",
      title: "12. User Content & Conduct",
      content: [
        {
          text: `Users are solely responsible for content posted, uploaded, or transmitted through the Platform.`,
        },
        {
          text: `Users shall not post or transmit any content that:`,
          subpoints: [
            "Is unlawful, harmful, threatening, abusive, defamatory, obscene, or invasive of privacy.",
            "Violates intellectual property rights of any third party.",
            "Contains viruses, malware, or harmful code.",
            "Encourages illegal activity.",
            "Violates the sovereignty, integrity, or security of India.",
            "Impersonates another person or entity.",
            "Contains misleading or false information.",
          ],
        },
        {
          text: `Lafetch reserves the right to remove any user-generated content at its sole discretion and may suspend or terminate accounts for violations.`,
        },
      ],
    },


    {
      id: "ip",
      title: "13. Intellectual Property Rights",
      content: [
        {
          text: `All trademarks, content, and materials on the Site are owned or licensed by Lafetch and protected under applicable laws.`,
        },
      ],
    },

    {
      id: "license",
      title: "14. Limited License",
      content: [
        {
          text: `Lafetch grants a limited, non-exclusive, non-transferable license for personal use only.`,
        },
      ],
    },

    {
      id: "warranties",
      title: "15. Representations & Warranties",
      content: [
        {
          text: `The Site is provided "AS IS" without warranties. Lafetch is not responsible for reliance on content.`,
        },
      ],
    },

    {
      id: "liability",
      title: "16. Disclaimer of Warranty & Limitation of Liability",
      content: [
        {
          text: `Lafetch shall not be liable for indirect, incidental, or consequential damages. Maximum liability shall not exceed amounts paid.`,
        },
      ],
    },

    {
      id: "third-party",
      title: "17. Links & Third-Party Sites",
      content: [
        {
          text: `Third-party links are provided for convenience. Lafetch does not endorse or control third-party content.`,
        },
      ],
    },

    {
      id: "termination",
      title: "18. Termination",
      content: [
        {
          text: `Lafetch may terminate access at any time without notice. Obligations prior to termination remain enforceable.`,
        },
      ],
    },

    {
      id: "indemnity",
      title: "19. Indemnity",
      content: [
        {
          text: `You agree to indemnify Lafetch against claims arising from breach of these Terms or applicable laws.`,
        },
      ],
    },

    {
      id: "law",
      title: "20. Governing Law & Jurisdiction",
      content: [
        {
          text: `These Terms are governed by Indian law with exclusive jurisdiction of courts in New Delhi.`,
        },
      ],
    },

    {
      id: "arbitration",
      title: "21. Dispute Resolution & Arbitration",
      content: [
        {
          text: `Any dispute, controversy, or claim arising out of or relating to these Terms shall be resolved by arbitration in accordance with the Arbitration and Conciliation Act, 1996 of India.`,
        },
        {
          text: `The seat and venue of arbitration shall be New Delhi, India. The proceedings shall be conducted in English. The arbitration shall be conducted by a sole arbitrator appointed by Lafetch.`,
        },
        {
          text: `The award rendered by the arbitrator shall be final and binding on the parties. Nothing in this clause shall prevent Lafetch from seeking injunctive or equitable relief before a court of competent jurisdiction.`,
        },
      ],
    },


    {
      id: "security",
      title: "22. Site Security",
      content: [
        {
          text: `You are prohibited from violating Site security. Violations may lead to civil or criminal liability.`,
        },
      ],
    },

    {
      id: "entire-agreement",
      title: "23. Entire Agreement",
      content: [
        {
          text: `These Terms constitute the entire agreement and supersede all prior communications.`,
        },
      ],
    },

    {
      id: "general",
      title: "24. General",
      content: [
        {
          text: `Failure to enforce any provision shall not constitute waiver. Headings are for convenience only.`,
        },
      ],
    },

    {
      id: "contact",
      title: "25. Contact Information",
      content: [
        {
          text: `Email: info@la-fetch.com`,
        },
        {
          text: `Address: First Floor, Universal Trade Tower, Sohna-Gurgaon Road, Sector 49, Gurugram, Haryana 122018`,
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
            Terms & Conditions
          </h1>
          <p className="text-gray-300 mt-4 max-w-3xl">
            Please read these Terms & Conditions carefully before using the
            Lafetch Platform.
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
                    <h3 className="font-semibold text-lg">{item.subtitle}</h3>
                  )}
                  {item.text && (
                    <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                      {item.text}
                    </p>
                  )}
                  {item.subpoints && (
                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
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
    </div>
  );
};

export default TermsAndConditionsPage;
