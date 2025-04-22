import React from "react";

const FulfillmentPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 py-12">
      <h1 className="text-2xl font-bold mb-4 text-center">Fulfillment Policy</h1>
      <p className="mb-6">
        WME Solutions is committed to delivering high-quality consultancy services to optimize business processes and achieve organizational goals. This fulfillment policy outlines the terms and conditions for our service delivery, payments, and client obligations.
      </p>

      <section className="mb-6">
        <h2 className="text-lg font-bold mb-2">1. Service Delivery</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            We deliver services as outlined in the selected package or agreement.
          </li>
          <li>
            Package validity, service hours, and included features are clearly
            specified in the agreement.
          </li>
          <li>
            Services may include consultation, workflow development, support,
            training, or other specified tasks.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold mb-2">2. Payment Policy</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Initial Payment:</strong> Full payment for the selected
            package or initial deposit is required before services begin.
            Payments may include a commitment fee, which is non-refundable.
          </li>
          <li>
            <strong>Pay As You Go Billing:</strong> For hourly services, charges
            will be billed weekly based on actual hours used, with a monthly
            retainer to secure on-demand support.
          </li>
          <li>
            <strong>Payment Methods:</strong> Payments can be made via wire
            transfer or credit card. Credit card payments incur an additional
            3% processing fee.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold mb-2">3. Unused Hours</h2>
        <p>
          Hours included in prepaid packages or initial payments are
          non-refundable but may be repurposed for additional services (e.g.,
          training or support) within the package validity period or specified
          timeframe (e.g., three months for Pay As You Go).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold mb-2">4. Cancellations and Refunds</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Packages are non-refundable once purchased.</li>
          <li>
            Pay As You Go services can be canceled with one month’s notice.
            Unused hours in the current billing cycle can be utilized until the
            cycle ends but are not refundable.
          </li>
          <li>
            Services can be paused or terminated without additional charges
            beyond the current billing period.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold mb-2">5. Client Involvement</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Successful delivery requires active participation, including regular consultations and timely feedback.
          </li>
          <li>
            Clients must maintain active subscriptions for relevant platforms (e.g., Monday.com, Make.com) and notify us of any required adjustments in support capacity.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold mb-2">6. Transparency and Tracking</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            All tasks are logged using a time-tracking system (e.g., Toggl),
            providing clients with real-time visibility of service utilization.
          </li>
          <li>
            Clients will receive a live reporting link and can schedule
            consultations through Calendly.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold mb-2">7. Confidentiality</h2>
        <p>
          All client information and data shared during engagements are treated
          as confidential and will not be disclosed to third parties without
          explicit consent.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold mb-2">8. Limitations of Liability</h2>
        <p>
          WME Solutions is not liable for indirect, incidental, or consequential damages resulting from service provision, except as required by applicable law.        </p>
      </section>
    </div>
  );
};

export default FulfillmentPolicy;
