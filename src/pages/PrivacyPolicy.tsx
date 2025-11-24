import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">
            Last Updated: November 24, 2025
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg mb-6">
              This Privacy Policy describes how KAPPI collects, uses, and protects your information. 
              By using the App, you agree to these practices.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Personal Information:</p>
                  <p className="text-muted-foreground">Name, email, account credentials</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Location Data:</p>
                  <p className="text-muted-foreground">GPS coordinates, barangay, city, province (all encrypted)</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Images & Scans:</p>
                  <p className="text-muted-foreground">Coffee leaf photos, disease detection results, scan history</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Usage Data:</p>
                  <p className="text-muted-foreground">Device info, app version, interaction patterns, crash logs</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Authentication Data:</p>
                  <p className="text-muted-foreground">Social login IDs (Google, Facebook), OTP codes</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide disease detection and scan management services</li>
                <li>Process account authentication and password recovery</li>
                <li>Improve app performance and ML model accuracy</li>
                <li>Detect fraud and prevent unauthorized access</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Sharing Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We share data with service providers only:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong>Firebase:</strong> User authentication</li>
                <li><strong>Cloudinary:</strong> Image storage and CDN delivery</li>
                <li><strong>Nodemailer:</strong> Password reset emails</li>
                <li><strong>MongoDB Atlas:</strong> Cloud database hosting</li>
              </ul>
              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                <p className="font-semibold text-foreground">
                  We do NOT sell your personal information to third parties.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">In Transit:</p>
                  <p>HTTPS/TLS 1.3 encryption</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">At Rest:</p>
                  <p>AES-256 encryption for sensitive fields (GPS, addresses)</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Passwords:</p>
                  <p>Bcrypt hashing (10 salt rounds)</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Tokens:</p>
                  <p>Stored in device-encrypted secure storage</p>
                </div>
              </div>
              <p className="text-muted-foreground mt-4 italic">
                No method is completely secure. Use the App at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Retention</h2>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">Active Accounts:</p>
                  <p>Data retained for account duration</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Deleted Accounts:</p>
                  <p>Soft-deleted for 90 days, then permanently removed</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Images:</p>
                  <p>Stored in Cloudinary indefinitely (can request deletion)</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Temporary Data:</p>
                  <p>OTP codes and reset tokens expire within 10 minutes</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Children's Privacy</h2>
              <p className="text-muted-foreground">
                The App is not intended for children under 13. We do not knowingly collect data from 
                children under this age. Parents/guardians should supervise users aged 13-18.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Privacy Rights</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your region, you may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Access your personal data</li>
                <li>Correct or update your information</li>
                <li>Delete your account and data</li>
                <li>Withdraw consent for location sharing</li>
                <li>Receive your data in a portable format</li>
              </ul>
              <p className="text-muted-foreground">
                To make a request, contact us at: <strong className="text-foreground">support@kappi-app.com</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Location Data</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>GPS data is encrypted with AES-256 before storage</li>
                <li>Used for disease distribution maps and scan context</li>
                <li>Not shared with advertisers or third parties</li>
                <li>Disable location access anytime in device settings</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Machine Learning Models</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your scan images may be used to improve disease detection models</li>
                <li>All training data is anonymized and aggregated</li>
                <li>Individual scans are not attributed to you in research</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">
                The App uses third-party services. We are not responsible for their privacy practices:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Firebase - Google Privacy Policy</li>
                <li>Cloudinary - Cloudinary Privacy Policy</li>
                <li>Social login providers' privacy policies apply</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Offline Functionality</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Scan results are cached locally on your device</li>
                <li>Data syncs to servers when internet is restored</li>
                <li>We are not responsible for data loss from device failure or factory reset</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. International Data Transfers</h2>
              <p className="text-muted-foreground">
                Your information may be processed in countries outside your own (US, EU). By using the App, 
                you consent to international data transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Policy at any time. Changes are posted in the App and take effect 
                immediately. Continued use means you accept the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                For privacy questions or to exercise your rights:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li><strong>Email:</strong> support@kappi-app.com</li>
                <li><strong>In-App:</strong> Settings → Help & Support</li>
                <li><strong>Response Time:</strong> Within 30 days</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="bg-secondary/30 border border-border rounded-lg p-6">
                <p className="text-foreground font-medium">
                  By using KAPPI, you acknowledge that you have read and agreed to this Privacy Policy.
                </p>
              </div>
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

export default PrivacyPolicy;
