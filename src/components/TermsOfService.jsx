import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="bg-dark min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-dark-200 rounded-xl p-8 shadow-dark-lg border border-dark-300"
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-200 text-center">
            Astrix Group Terms of Service
          </h1>
          <p className="text-gray-400 italic text-center mb-8">
            Last Updated: April 13, 2025
          </p>

          <div className="text-gray-300 space-y-6">
            <p>
              Welcome to Astrix Group ("Astrix Group," "we," "us," or "our"). By accessing our website (the "Site") or purchasing our services or products, you ("User," "you," or "your") agree to be bound by these Terms of Service ("ToS" or "Terms"). If you do not agree with these Terms, please do not use our Site or services.
            </p>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">1. Services and Products</h2>
              <p>
                Astrix Group provides custom application development, application rebuilding, and source code purchase services. All services and products are delivered digitally and are subject to the terms outlined herein.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">2. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cryptocurrency Only</strong>: We accept payments exclusively in cryptocurrencies as specified at the time of purchase (e.g., Bitcoin, Ethereum). You are responsible for ensuring accurate and timely payment.</li>
                <li><strong>No Chargebacks</strong>: Due to the nature of cryptocurrency transactions, all payments are final except as outlined in our Refund Policy (Section 3).</li>
                <li><strong>Transaction Fees</strong>: You are responsible for any blockchain or network fees associated with cryptocurrency payments.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">3. Refund Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>2-Day Refund Window</strong>: You may request a refund within two (2) calendar days from the date of purchase or delivery of the service/product, whichever is later, provided the service or product has not been used, modified, or deployed.</li>
                <li><strong>Refund Process</strong>: To request a refund, contact us with your order details. Refunds will be processed in the same cryptocurrency used for payment, based on the market rate at the time of refund processing.</li>
                <li><strong>Non-Refundable Cases</strong>: No refunds will be issued after the 2-day period, or if the source code, app, or service has been used, copied, modified, or deployed. Custom development services are non-refundable once work has commenced.</li>
                <li><strong>Disputes</strong>: If a refund is denied, we will provide a written explanation. All refund decisions are final.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">4. Source Code Purchases</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>License</strong>: Purchased source code is provided under a non-exclusive, non-transferable license for your personal or business use. You may not resell, redistribute, or sublicense the source code without our written consent.</li>
                <li><strong>Delivery</strong>: Source code will be delivered digitally upon confirmation of payment. You are responsible for verifying compatibility and functionality before purchase.</li>
                <li><strong>No Warranty</strong>: Source code is provided "as is" without warranties of any kind, express or implied, including fitness for a particular purpose or merchantability.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">5. Custom Development and Rebuilding Services</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Scope</strong>: Custom app development or rebuilding services are based on the specifications agreed upon in writing. Changes to scope may incur additional fees.</li>
                <li><strong>Ownership</strong>: Upon full payment, you own the delivered app or rebuilt app, excluding any proprietary tools or libraries owned by Astrix Group, which remain under our license.</li>
                <li><strong>Timeline</strong>: Delivery timelines are estimates. Delays due to client feedback or unforeseen technical issues do not constitute grounds for a refund.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">6. User Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You agree to provide accurate specifications, materials, and timely feedback for custom services.</li>
                <li>You warrant that you have the legal right to use any materials provided to us for development.</li>
                <li>You are responsible for securing your cryptocurrency wallets and transactions.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">7. Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All original content on our Site, including designs and documentation, is owned by Astrix Group and protected by copyright and intellectual property laws.</li>
                <li>Custom deliverables become your property upon full payment, except for proprietary components as noted in Section 5.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">8. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Astrix Group shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our Site, services, or products, including loss of profits, data, or cryptocurrency value. Our total liability shall not exceed the amount paid by you for the specific service or product.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">9. Disclaimer of Warranties</h2>
              <p>
                Our Site, services, and products are provided "as is" and "as available" without warranties of any kind, express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">10. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to our Site or services if you violate these Terms, engage in fraudulent activity, or fail to make payment. Upon termination, no refunds will be issued except as required by our Refund Policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">11. Governing Law and Dispute Resolution</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Governing Law</strong>: These Terms are governed by the laws of Delaware, USA, without regard to conflict of law principles.</li>
                <li><strong>Disputes</strong>: Any disputes arising under these Terms shall be resolved through good-faith negotiation. If unresolved, disputes will be submitted to binding arbitration under the rules of the American Arbitration Association. Each party shall bear its own costs.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">12. Modifications to Terms</h2>
              <p>
                We may update these Terms at any time by posting the revised version on our Site. Continued use of our Site or services after such changes constitutes your acceptance of the new Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">13. Contact Us</h2>
              <p>
                For questions, support, or refund requests, contact us through our Discord server: <a href="https://discord.gg/RsM2TXmr3t" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://discord.gg/RsM2TXmr3t</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">14. Miscellaneous</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Entire Agreement</strong>: These Terms, along with our Privacy Policy, constitute the entire agreement between you and Astrix Group.</li>
                <li><strong>Severability</strong>: If any provision of these Terms is found invalid, the remaining provisions remain in effect.</li>
                <li><strong>No Waiver</strong>: Our failure to enforce any right or provision does not waive that right or provision.</li>
              </ul>
            </div>

            <p className="mt-8 text-center">
              By using our Site or services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
