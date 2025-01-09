import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="bg-gray-100 text-gray-800 px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Cookie Policy</h1>
      <p className="text-sm text-gray-500 mb-4">Last Updated: [03/01/2025]</p>
      <p className="mb-6">
        Welcome to <strong>Samayyatra</strong>. This Cookie Policy explains how we use cookies and similar technologies to enhance your experience when using our website, services, or mobile applications (collectively, the "Service"). By using the Service, you agree to the use of cookies as outlined in this policy.
      </p>

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device (computer, tablet, or mobile) that help us recognize you and provide a better browsing experience. Cookies may include identifiers and other data used to track your preferences and activities.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Types of Cookies We Use</h2>
        <p>We use the following types of cookies on our Service:</p>
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>Essential Cookies:</strong> Necessary for the functioning of the Service. Without these cookies, some features may not work.
          </li>
          <li>
            <strong>Performance Cookies:</strong> Collect information about how you use the Service, helping us improve its performance.
          </li>
          <li>
            <strong>Functional Cookies:</strong> Enable enhanced functionality and personalization, such as remembering your preferences.
          </li>
          <li>
            <strong>Advertising Cookies:</strong> Track your online activity to deliver relevant ads and measure the effectiveness of ad campaigns.
          </li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Cookies</h2>
        <p>
          We use cookies to:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Provide and improve our Service.</li>
          <li>Remember your preferences and login details.</li>
          <li>Analyze usage patterns to enhance user experience.</li>
          <li>Deliver personalized content and advertisements.</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Managing Cookies</h2>
        <p>
          You can manage or disable cookies through your browser settings. However, please note that disabling cookies may limit the functionality of our Service. For more information on how to manage cookies, visit the help section of your browser.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Third-Party Cookies</h2>
        <p>
          Our Service may include cookies set by third parties, such as analytics providers and advertisers. These third-party cookies are subject to the privacy policies of their respective providers, and we are not responsible for their practices.
        </p>
      </section>

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. Please review this page periodically for the latest information on our use of cookies.
        </p>
      </section>

      {/* Section 7 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
        <p>
          If you have any questions or concerns about our Cookie Policy, please contact us at <a href="mailto:[probindhakal04@gmail.com]" className="text-blue-500 underline">[probindhakal04@gmail.com]</a> or through our contact page.
        </p>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        By continuing to use our Service, you consent to our use of cookies as outlined in this policy.
      </footer>
    </div>
  );
};

export default CookiePolicy;
