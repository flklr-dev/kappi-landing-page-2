import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <div className="text-xl font-bold text-foreground">KAPPI</div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 md:px-12 lg:px-24 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground mb-8">
            Last Updated: November 24, 2025
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg mb-6">
              Welcome to KAPPI ("we," "our," or "us"). Please read these Terms & Conditions ("Terms") 
              carefully before using our mobile application ("App"). By downloading or using the App, 
              you agree to be bound by these Terms.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the App, you confirm that you accept these Terms and agree to comply 
                with them. If you do not agree, you must not use the App.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                You must be at least 13 years old to use the App. By using the App, you represent that you 
                meet this requirement. Users under 18 should have parental consent before creating an account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. License to Use the App</h2>
              <p className="text-muted-foreground leading-relaxed">
                We grant you a limited, non-exclusive, non-transferable, revocable license to use the App 
                for personal, non-commercial agricultural purposes, in accordance with these Terms. You may 
                not sell, transfer, or sublicense this license to any third party.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To access certain features, you may need to create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information during registration</li>
                <li>Keep your login credentials confidential and secure</li>
                <li>Notify us immediately of unauthorized access or use of your account</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Maintain accurate contact information for password recovery</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We reserve the right to suspend or terminate accounts that violate these Terms or engage 
                in suspicious activity.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Prohibited Activities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use the App for unlawful, illegal, or unethical purposes</li>
                <li>Attempt to reverse-engineer, decompile, modify, or disrupt the App</li>
                <li>Upload harmful, abusive, defamatory, or infringing content</li>
                <li>Exploit the App for commercial gain without prior permission</li>
                <li>Use automated tools or bots to scrape data or bypass security measures</li>
                <li>Harass, threaten, or abuse other users</li>
                <li>Impersonate any person or organization</li>
                <li>Transmit malware, viruses, or harmful code</li>
                <li>Violate agricultural or pesticide regulations in your jurisdiction</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content, trademarks, logos, code, algorithms, machine learning models, and materials 
                within the App are owned by or licensed to KAPPI. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>The disease detection ML models (ResNet50 and MobileNetV2 U-Net)</li>
                <li>The application interface and user experience design</li>
                <li>All proprietary technology and methods</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You may not copy, distribute, modify, or create derivative works without prior written consent. 
                You retain ownership of images and data you upload, but grant KAPPI a perpetual license to use 
                them for service improvement and aggregated research.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Image Uploads and Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">When you upload coffee leaf images:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You confirm you have the right to upload and share these images</li>
                <li>You grant KAPPI a worldwide, perpetual, royalty-free license to use images for disease detection, model training, and service improvement</li>
                <li>Images are encrypted during transfer and storage</li>
                <li>Images are stored in Cloudinary cloud servers</li>
                <li>KAPPI may use anonymized aggregated data for agricultural research</li>
                <li>You can delete uploaded images and scan records from your history at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. In-App Purchases</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The App is currently provided free of charge. If we introduce premium features or paid services in the future:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Purchases are processed through the app store (Apple App Store or Google Play)</li>
                <li>Purchases are generally non-refundable unless required by law or app store policy</li>
                <li>Prices may change with 30 days' notice</li>
                <li>Billing is managed by the respective app store platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your use of the App is also governed by our Privacy Policy, which describes how we collect, 
                use, and protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Location data (GPS coordinates)</li>
                <li>Email and account credentials</li>
                <li>Uploaded images and scan history</li>
                <li>Authentication data from social logins</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By using the App, you agree to the collection and use of information as described in the 
                Privacy Policy. Data is encrypted and stored securely in MongoDB Atlas and Cloudinary.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The App integrates with third-party services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Firebase Authentication (user login and credential management)</li>
                <li>Cloudinary (image storage and CDN delivery)</li>
                <li>Nodemailer (email delivery for OTP and password recovery)</li>
                <li>Social Login Providers (Google, Facebook)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We are not responsible for the content, policies, practices, or security of third-party 
                platforms. You agree to review their terms and privacy policies independently.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Machine Learning Disclaimers</h2>
              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded mb-4">
                <p className="font-semibold text-foreground mb-2">Important:</p>
                <p className="text-muted-foreground">
                  KAPPI provides a decision-support tool, not professional agricultural or medical advice.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">You acknowledge that:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Disease detection results are estimates based on machine learning models</li>
                <li>Results may not be 100% accurate and depend on image quality, lighting, and other factors</li>
                <li>You should consult qualified agricultural professionals before making treatment decisions</li>
                <li>KAPPI makes no warranty regarding accuracy, reliability, or suitability of results</li>
                <li>Crop losses or failed treatments are not the responsibility of KAPPI</li>
                <li>Results vary by coffee plant variety, disease type, and environmental conditions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Offline Functionality</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The App can perform disease detection offline using on-device ML models. When you regain 
                internet connection:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Scan records are automatically synced to our servers</li>
                <li>Failed uploads are retried automatically with exponential backoff</li>
                <li>Maximum 3 retry attempts before marking as failed</li>
                <li>You may manually retry or delete failed scans</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not guarantee continuous syncing or data recovery if the device is reset or uninstalled 
                without backing up data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To the fullest extent permitted by law, KAPPI is not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or business opportunities</li>
                <li>Damage to crops or loss of agricultural yield from disease misidentification</li>
                <li>Errors, interruptions, or loss of function in the App</li>
                <li>Damages resulting from unauthorized access or use of your account</li>
                <li>Losses from third-party service outages or failures</li>
                <li>Damage or loss resulting from device malfunction or factory reset</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Use the App at your own risk. In no case shall our total liability exceed the amount paid 
                by you in the preceding 12 months (or $0 if no payment was made).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Data Encryption and Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                KAPPI employs industry-standard security measures:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>HTTPS/TLS encryption for all data in transit</li>
                <li>AES-256 encryption for sensitive data at rest (GPS, addresses)</li>
                <li>Bcrypt password hashing with 10 salt rounds</li>
                <li>JWT token-based authentication with auto-refresh</li>
                <li>Rate limiting on sensitive endpoints to prevent abuse</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You are responsible for maintaining the security of your login credentials and account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may suspend or terminate your access at any time without notice if:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You violate these Terms or applicable laws</li>
                <li>You engage in fraud, abuse, or harmful activity</li>
                <li>It is necessary for security, legal compliance, or system integrity</li>
                <li>You have not accessed the App for more than 12 months</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Upon termination, your right to use the App ceases immediately. Your data will be soft-deleted 
                and permanently removed after 90 days unless you request earlier deletion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">16. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of the Philippines, without regard to conflict-of-law 
                principles. Any legal action must be brought in the courts of the Philippines, and you consent 
                to exclusive jurisdiction and venue in these courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">17. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about these Terms or to report violations, contact us at:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li><strong>Email:</strong> support@kappi-app.com</li>
                <li><strong>In-App Support:</strong> Settings → Help & Support</li>
                <li><strong>Response Time:</strong> We aim to respond within 48 business hours</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">18. Acknowledgment</h2>
              <p className="text-muted-foreground leading-relaxed">
                By downloading and using KAPPI, you acknowledge that you have read, understood, and agreed 
                to these Terms and Conditions.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Button
              onClick={() => navigate("/")}
              variant="default"
              size="lg"
              className="w-full sm:w-auto"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default TermsAndConditions;
