import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-gray-100 text-gray-800 px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-4">Last Updated: [03/01/2025]</p>
      <p className="mb-6">
        Welcome to <strong>Samayyatra</strong>, the platform that allows you to create, share, and rediscover your memories through digital time capsules. By accessing and using our website, services, or mobile applications (collectively, the "Service"), you agree to comply with the following Terms of Service. If you do not agree to these terms, please do not use our Service.
      </p>

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By accessing or using <strong>Samayyatra</strong>, you acknowledge and agree to be bound by these Terms of Service and our Privacy Policy. If you are using the Service on behalf of an organization or entity, you represent and warrant that you have the authority to bind that entity to these Terms.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Account Registration</h2>
        <p>
          To use the Service, you must create an account by providing accurate and complete information. You are responsible for maintaining the confidentiality of your account login credentials, and you agree to notify us immediately if you suspect any unauthorized access to your account.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Service Use</h2>
        <p>
          You agree to use the Service in accordance with all applicable laws and regulations and to respect the rights of others. Specifically, you may not:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Upload or share any content that is illegal, defamatory, discriminatory, offensive, or violates the intellectual property rights of others.</li>
          <li>Interfere with or disrupt the Service or servers.</li>
          <li>Attempt to gain unauthorized access to other users’ accounts or data.</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Content Ownership and License</h2>
        <p>
          You retain ownership of any content you upload to create your time capsules (such as photos, videos, messages, etc.), but you grant <strong>Samayyatra</strong> a worldwide, non-exclusive, royalty-free license to store, display, and distribute your content solely for the purpose of providing the Service.
        </p>
        <p>
          You agree not to upload content that you do not have the right to share. By uploading content, you confirm that you hold the necessary rights to share that content and that it does not violate any third-party rights.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Privacy and Data Security</h2>
        <p>
          We value your privacy and are committed to protecting your personal information. Our Privacy Policy outlines how we collect, use, and protect your data. By using the Service, you consent to the practices described in the Privacy Policy.
        </p>
      </section>

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Service Availability and Limitations</h2>
        <p>
          While we strive to ensure the Service is available at all times, we cannot guarantee uninterrupted access. The Service may experience downtime for maintenance, updates, or other reasons. <strong>Samayyatra</strong> is not liable for any disruptions or failures in the Service.
        </p>
      </section>

      {/* Section 7 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Termination and Account Suspension</h2>
        <p>
          We reserve the right to suspend or terminate your account if you violate these Terms of Service. Upon termination, your right to access the Service will end, but any content you have uploaded may remain in our system until the designated unlock date or until you delete your account.
        </p>
      </section>

      {/* Section 8 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Intellectual Property Rights</h2>
        <p>
          All content on the Service, including but not limited to the website design, logo, software, text, images, and other materials, is owned by <strong>Samayyatra</strong> or licensed to us. You are granted a limited, non-exclusive, non-transferable license to access and use the Service for personal, non-commercial purposes.
        </p>
      </section>

      {/* Section 9 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">9. Limitation of Liability</h2>
        <p>
          <strong>Samayyatra</strong> is not liable for any damages or losses arising from the use or inability to use the Service, including but not limited to loss of data, loss of content, or interruption of service. Our liability is limited to the maximum extent permitted by law.
        </p>
      </section>

      {/* Repeat similar for remaining sections (10-14) */}

      {/* Section 15 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">15. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding these Terms of Service, please contact us at <a href="mailto:[probindhakal04@gmail.com]" className="text-blue-500 underline">[probindhakal04@gmail.com]</a> or through our contact page.
        </p>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        By using the Service, you agree to these Terms of Service and acknowledge that you have read, understood, and accepted them.
      </footer>
    </div>
  );
};

export default TermsOfService;
