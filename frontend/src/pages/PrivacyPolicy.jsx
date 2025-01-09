import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 text-gray-800 px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-4">Last Updated: [03/01/2025]</p>
      <p className="mb-6">
        At <strong>Samayyatra</strong>, your privacy is of utmost importance to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our services and interact with ads on our website. By accessing or using <strong>Samayyatra</strong>, you agree to the practices outlined in this Privacy Policy.
      </p>

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>Personal Information:</strong> Includes your name, email address, and any content you upload to create your time capsules.
          </li>
          <li>
            <strong>Usage Data:</strong> Data on how you interact with our website and ads, such as click patterns, time spent on pages, and the type of device you use.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> Cookies, web beacons, and similar technologies to enhance your experience and display relevant advertisements. Third-party ad networks may also place cookies to serve tailored ads.
          </li>
        </ul>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside ml-4">
          <li>To personalize and deliver targeted ads based on your interests and past interactions.</li>
          <li>To improve advertising campaigns and website functionality using usage data.</li>
          <li>To provide personalized services and enhance user experience.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Advertising Partners and Third-Party Cookies</h2>
        <p>
          We work with third-party advertisers and ad networks to display ads. These advertisers may use cookies or similar tracking technologies to show you ads relevant to your interests:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>Google Ads:</strong> Uses cookies and web beacons to collect non-personally identifiable information for ads based on your visits to our site and others.
          </li>
          <li>
            <strong>Social Media Ads:</strong> Platforms like Facebook and Instagram use tracking technologies to display targeted ads based on your preferences.
          </li>
          <li>
            <strong>Ad Networks:</strong> Other third-party ad networks may collect non-personal data to tailor ads.
          </li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Your Choices Regarding Ads</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Opt out of personalized ads through Google Ad Settings or the Network Advertising Initiative’s Opt-Out Tool.</li>
          <li>Adjust browser settings to block or delete cookies, though it may affect functionality.</li>
          <li>Manage ad preferences via platforms like Facebook Ad Preferences.</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
        <p>
          We take reasonable steps to protect your personal data and that collected by our advertising partners. However, no method of transmission over the internet is 100% secure.
        </p>
      </section>

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Children's Privacy</h2>
        <p>
          <strong>Samayyatra</strong> is not intended for users under 13. We do not knowingly collect personal information from children. If such data is discovered, it will be promptly deleted.
        </p>
      </section>

      {/* Section 7 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Changes to This Privacy Policy</h2>
        <p>
          This Privacy Policy may be updated to reflect changes in practices or legal requirements. Continued use of the site after updates indicates acceptance of the revised terms.
        </p>
      </section>

      {/* Section 8 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, contact us at <a href="mailto:[probindhakal04@gmail.com]" className="text-blue-500 underline">[probindhakal04@gmail.com]</a> or at:
        </p>
        <address className="ml-4">
          Guwahati, Assam
        </address>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        By continuing to use our Service, you agree to the terms outlined in this Privacy Policy.
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
