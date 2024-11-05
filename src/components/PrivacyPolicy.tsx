import React from "react";

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      <div className="w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-white p-6 md:p-8 rounded-lg shadow-lg relative">
        
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-semibold"
        >
          &times;
        </button>

        <h1 className="text-3xl font-bold text-darkslategray mb-6 text-left">
          Privacy Policy
        </h1>

        <section className="mb-6 text-left">
          <h2 className="text-xl font-semibold mb-2">Your Privacy is Important to Us</h2>
          <p className="text-gray-700 leading-relaxed">
            We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our robotics lab booking portal.
          </p>
        </section>

        <section className="mb-6 text-left">
          <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We may collect the following personal information from you:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li><strong>Personal Information:</strong> Name, contact information (email address, phone number), school affiliation, and other relevant details.</li>
            <li><strong>Booking Information:</strong> Details about the robotics lab sessions you book, including dates, times, and the number of students participating.</li>
          </ul>
        </section>

        <section className="mb-6 text-left">
          <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We use your personal information for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li><strong>Booking Management:</strong> To process and manage your robotics lab bookings.</li>
            <li><strong>Communication:</strong> To communicate with you regarding your bookings, updates, and important information.</li>
            <li><strong>Data Analysis:</strong> To analyze booking trends and improve our services.</li>
            <li><strong>Compliance:</strong> To comply with legal and regulatory requirements.</li>
          </ul>
        </section>

        <section className="mb-6 text-left">
          <h2 className="text-xl font-semibold mb-2">Information Sharing</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not share your personal information with third parties for marketing or advertising purposes. However, we may share your information with authorized government agencies or law enforcement officials if required by law or to protect our rights.
          </p>
        </section>

        <section className="mb-6 text-left">
          <h2 className="text-xl font-semibold mb-2">Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li><strong>Secure Data Storage:</strong> We store your information on secure servers with access controls.</li>
            <li><strong>Data Encryption:</strong> We use encryption techniques to protect your sensitive information.</li>
            <li><strong>Regular Security Audits:</strong> We conduct regular security audits to identify and address potential vulnerabilities.</li>
          </ul>
        </section>

        <section className="mb-6 text-left">
          <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li><strong>Access:</strong> Request access to your personal information.</li>
            <li><strong>Correction:</strong> Request correction of any inaccuracies in your personal information.</li>
            <li><strong>Erasure:</strong> Request deletion of your personal information.</li>
            <li><strong>Restriction:</strong> Request restriction of processing your personal information.</li>
            <li><strong>Data Portability:</strong> Request data portability of your personal information.</li>
          </ul>
        </section>

        <section className="mb-6 text-left">
          <h2 className="text-xl font-semibold mb-2">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be posted on this website.
          </p>
        </section>

        <section className="mb-6 text-left">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            By using Amazon Future Engineer Makerspace portal, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us.
          </p>
        </section>
        
        <div className="mt-8 text-center">
          <a href="/amazon/makerspace-blr" className="text-blue-500 hover:underline">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
