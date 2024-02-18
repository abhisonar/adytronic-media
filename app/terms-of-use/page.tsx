import React from "react";
import "./page.scss";
const TermsOfUseComponent = () => {
  return (
    <div className="terms-use mt-3">
      <h1 className="text-xl font-bold mb-3">Adytronic Terms of Use</h1>

      <h2>
        By accessing and using the Adytronic Media website, you agree to comply with and be bound by
        the following terms and conditions:
      </h2>

      <ul>
        <li>
          <strong>Use of the Website:</strong> You may use our website for lawful purposes only. You
          are prohibited from engaging in any activity that could harm, disable, or impair our
          website or interfere with others&apos; use.
        </li>
        <li>
          <strong>Intellectual Property:</strong> All content on this website, including text,
          graphics, logos, and images, is the property of [Your Company Name] and is protected by
          copyright and other intellectual property laws.
        </li>
        <li>
          <strong>Links to Third-Party Websites:</strong> Our website may contain links to
          third-party websites. We are not responsible for the content or practices of these
          websites and encourage you to review their terms of use and privacy policies.
        </li>
        <li>
          <strong> Disclaimer of Warranties:</strong> We make no representations or warranties about
          the accuracy, completeness, or reliability of the content on our website.
        </li>
        <li>
          <strong>Limitation of Liability:</strong> Adytronic is not liable for any direct,
          indirect, incidental, special, or consequential damages arising out of or in any way
          connected with the use of our website.
        </li>
        <li>
          <strong>Changes to Terms:</strong> We reserve the right to update or modify these terms at
          any time without prior notice.
        </li>
        <li>
          <strong>Contact Us:</strong> If you have any questions about these terms, please contact
          us at{" "}
          <a href="mailto:info@adytronic.com" className="text-primary-default">
            info@adytronic.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TermsOfUseComponent;
