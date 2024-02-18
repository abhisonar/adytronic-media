import React from "react";
import "./page.scss";
const TermsOfUseComponent = () => {
  return (
    <div className="mt-3 refund">
      <h1 className="text-xl font-bold mb-3">Sales and Refunds Policy</h1>
      <ul>
        <li>
          <strong>Sales:</strong> All sales of products or services on our website are final. We
          strive to provide accurate product/service descriptions, but if you encounter any issues
          with your purchase, please contact our customer support at info@adytronic.com
        </li>
        <li>
          <strong>Refunds:</strong> Refunds will be considered on a case-by-case basis and the basis
          of agreement. To be eligible for a refund, you must contact us within 1-2 days of the
          purchase date. Refunds are not guaranteed and will be issued at our sole discretion.
        </li>
        <li>
          <strong>Cancellation Policy:</strong> You may cancel your order within 2 hours of purchase
          by contacting us at info@adytronic.com. Cancellations made after this period may not be
          accepted.
        </li>
        <li>
          <strong>Shipping and Delivery:</strong> All Digital products will be delivered
          electronically.
        </li>
        <li>
          <strong>Contact Us:</strong> If you have any questions about our sales and refund policy,
          please contact us at{" "}
          <a href="mailto:info@adytronic.com" className="text-primary-default">
            info@adytronic.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TermsOfUseComponent;
