// src/slidesData.ts
import type { SlideData } from "./Slide";

const slidesData: SlideData[] = [
  {
    title: "Currency Conversion Rates",
    kicker: "Finance",
    heading: "All currency conversion rates are indicative",
    description:
      "Final amounts are calculated at payment using our bank’s actual rate. Any extra commissions or fees are for the customer’s account.",
    bullets: [
      "Quotes show <strong>estimated</strong> conversions.",
      "Charged at the <strong>bank’s live rate</strong> when you pay.",
      "<strong>Bank/transfer fees</strong> aren’t included."
    ],
    bg: "/assets/Finance.svg"
  },
  {
    title: "Delivery Schedule",
    kicker: "Logistics",
    heading: "Delivery Schedule",
    description:
      "We provide an ETA once you accept the quote. Timing depends on <strong>stock availability</strong> and <strong>payment clearance</strong>.",
    bullets: [
      "ETA confirmed after <strong>quote acceptance</strong>.",
      "Subject to <strong>availability</strong> &amp; <strong>funds received</strong>.",
      "We’ll update you promptly if the schedule shifts."
    ],
    bg: "/assets/Logistics.svg"
  },
  {
    title: "Risk of Loss",
    kicker: "Responsibility",
    heading: "Risk of Loss",
    description:
      "The risk of loss or damage passes to you once goods are <strong>delivered to your specified location</strong>.",
    bullets: [
      "<strong>Ownership risk</strong> transfers on delivery.",
      "Inspect on arrival; report issues <strong>immediately</strong>.",
      "Consider <strong>insurance</strong> for added protection."
    ],
    bg: "/assets/Loss.svg"
  },
  {
    title: "Client Cancellation",
    kicker: "Changes",
    heading: "Modification or Cancellation (by Client)",
    description:
      "After accepting a quote but before delivery, a <strong>cancellation fee may apply</strong> to cover costs or losses incurred by GFS Marketing (Pty) Ltd.",
    bullets: [
      "Notify us in writing to request changes.",
      "Fees reflect <strong>work done &amp; commitments</strong>.",
      "We’ll confirm any costs before proceeding."
    ],
    bg: "/assets/Changes.svg"
  },
  {
    title: "Company Modification",
    kicker: "Assurance",
    heading: "If We Must Modify or Cancel",
    description:
      "In rare, unforeseen circumstances, we’ll <strong>notify you immediately</strong>. Any deposits paid will be <strong>fully refunded</strong>.",
    bullets: [
      "Clear communication, swift next steps.",
      "<strong>Full refund</strong> of deposits if we cancel.",
      "We’ll offer <strong>alternatives</strong> where possible."
    ],
    bg: "/assets/Assurance.svg"
  },
  {
    title: "Terms & Conditions",
    kicker: "Updated Legal Terms",
    heading: "Terms & Conditions",
    description: `
      <p><strong>1. Payment Terms:</strong><br/>
      Payment for all confirmed orders must be made within forty-five (45) days from the invoice date, unless otherwise agreed in writing. Payments must be made in full and received without any deduction, set-off, or delay.</p>

      <p><strong>2. Late Payment Charges:</strong><br/>
      If payment is not received by the due date, GFS Marketing (Pty) Ltd may charge interest at a rate of 1.5% per month, calculated daily, or the maximum rate permitted by law.</p>

      <p><strong>3. Suspension of Orders:</strong><br/>
      GFS reserves the right to suspend, withhold, or cancel pending or future orders in the event of overdue payments until all outstanding amounts have been settled.</p>

      <p><strong>4. Claims Notification:</strong><br/>
      The Buyer must inspect goods upon receipt and notify GFS of any defects or discrepancies within 24 hours. Claims submitted after this period may not be accepted due to the perishable nature of the products.</p>

      <p><strong>5. Investigation &amp; Response:</strong><br/>
      Upon receiving a valid claim, GFS will conduct an investigation and provide a formal response within five (5) working days. Supporting evidence may be required.</p>

      <p><strong>6. Accepted Claims (Liability):</strong><br/>
      If GFS accepts liability, the Buyer will receive either a replacement shipment (subject to availability) or a refund of the affected portion of the goods. Liability shall not exceed the invoice value of the affected goods.</p>

      <p><strong>7. Storage &amp; Handling:</strong><br/>
      GFS is not liable for deterioration or damage after delivery caused by improper storage, delayed unloading, temperature abuse, or mishandling by the Buyer or third parties.</p>

      <p><strong>8. Availability:</strong><br/>
      All quotations and orders are subject to fruit availability, quality, seasonal factors, and market conditions. GFS may revise or cancel orders under exceptional circumstances.</p>

      <p><strong>9. Regulatory Requirements:</strong><br/>
      Shipments are subject to all applicable export, import, sanitary, phytosanitary, and government regulations. Required documentation may include phytosanitary certificates, PPECB inspection reports, and customs declarations.</p>

      <p><strong>10. Buyer Responsibilities:</strong><br/>
      The Buyer must comply with all import laws, duties, distribution requirements, and storage regulations applicable in their jurisdiction.</p>

      <p><strong>11. Dispute Resolution:</strong><br/>
      All disputes shall be resolved through arbitration under the Rules of the International Chamber of Commerce (ICC). The arbitral decision will be final and binding on both parties.</p>

      <p>www.gfs.marketing</p>
    `,
    bullets: null,
    bg: "/assets/Terms.svg"
  }
];

export default slidesData;
