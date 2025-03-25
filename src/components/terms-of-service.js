import React from 'react';
import './privacy-policy.css';
export const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
);
const PrivacyPolicy = () => {
    return (
        <React.Fragment>
            <div className="terms-of-service">
                <h1 className="privacy-policy-container">Terms of Service for The Poultry</h1>
                <p><strong>Last Updated: February 2025</strong></p>
                <p>Welcome to The Poultry! These Terms of Service ("Terms") govern your access to and use of our application, services, and website. By using The Poultry, you agree to comply with these Terms. If you do not agree, please do not use our services.</p>
                <ColoredLine color="black" />
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing or using The Poultry, you agree to be bound by these Terms and our <strong>Privacy Policy</strong>. If you are using the service on behalf of an organization, you represent that you have the authority to bind that organization.</p>
                <ColoredLine color="black" />
                <h2>2. Description of Service</h2>
                <p>The Poultry is a digital platform that provides AI-powered assistance, social media interactions, and various tools for users in the poultry industry. The application may require access to certain personal data, which is managed according to our Privacy Policy.</p>
                <ColoredLine color="black" />
                <h2>3. User Accounts & Responsibilities</h2>
                <ul>
                    <li>You must provide accurate and complete information when creating an account.</li>
                    <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                    <li>You agree not to use the app for any illegal or unauthorized purposes.</li>
                </ul>
                <ColoredLine color="black" />
                <h2>4. User-Generated Content</h2>
                <ul>
                    <li>You retain ownership of the content you submit. However, by using The Poultry, you grant us a non-exclusive, worldwide license to use, modify, and distribute your content to operate the service.</li>
                    <li>You agree not to upload or share harmful, abusive, or illegal content.</li>
                </ul>
                <ColoredLine color="black" />
                <h2>5. AI Chat and Data Usage</h2>
                <ul>
                    <li>The Poultry includes an AI-powered chatbot feature (Gemini AI). While we do not store personal chat data beyond necessary processing, we may analyze usage patterns to improve services.</li>
                    <li>Users should not share sensitive personal information through the chatbot.</li>
                </ul>
                <ColoredLine color="black" />
                <h2>6. Advertising & Third-Party Services</h2>
                <ul>
                    <li>The Poultry may display ads through Google AdMob and other third-party providers.</li>
                    <li>By using our service, you agree that these third-party services may collect data based on your interactions.</li>
                </ul>
                <ColoredLine color="black" />
                <h2>7. Security and Privacy</h2>
                <ul>
                    <li>We take reasonable security measures to protect your data, but we cannot guarantee absolute security.</li>
                    <li>You can review our <strong>Privacy Policy</strong> for more details on data collection and processing.</li>
                </ul>
                <ColoredLine color="black" />
                <h2>8. Termination</h2>
                <p>We reserve the right to suspend or terminate your access to The Poultry if you violate these Terms or engage in harmful behavior.</p>
                <ColoredLine color="black" />
                <h2>9. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, The Poultry and its owners shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the service.</p>
                <ColoredLine color="black" />
                <h2>10. Changes to Terms</h2>
                <p>We may update these Terms from time to time. Any changes will be posted on our website or app. Your continued use of the service constitutes acceptance of the revised Terms.</p>
                <ColoredLine color="black" />
                <h2>11. Contact Information</h2>
                <p>If you have any questions about these Terms, please contact us:</p>
                <p>📧 Email: <a href="mailto:aiot.agri@gmail.com">aiot.agri@gmail.com</a></p>
            </div>
        </React.Fragment>
    );
};

export default PrivacyPolicy;
