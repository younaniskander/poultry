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
            <div className="privacy-policy-container">
                <h1 className="privacy-policy-title">Privacy Policy for The Poultry</h1>
                <ColoredLine color="black" />
                <br />

                <h2 className='privacy-policy-title'> Privacy Policy</h2>
                <p><strong>Last updated: February 2025</strong></p>
                <p>This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>

                <p>We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>

                <div>
                    <h2 className='privacy-policy-subtitle'>Interpretation and Definitions</h2>

                    <p><strong>Personal Data</strong> means data about a living individual who can be identified from those data.</p>

                    <p><strong>Account</strong> means a unique account created for You to access our Service.</p>

                    <p><strong>Application</strong> refers to The Poultry, the software program provided by the Company.</p>

                    <p><strong>Company</strong> refers to The Poultry.</p>

                    <p><strong>Country</strong> refers to: Egypt.</p>

                    <p><strong>Device</strong> means any device that can access the Service.</p>

                    <p><strong>Service</strong> refers to the Application.</p>
                </div>
                <h2 className='privacy-policy-subtitle'>Collecting and Using Your Personal Data</h2>

                <h3 className='privacy-policy-subtitle' >Types of Data Collected</h3>
                <h4><strong>Personal Data</strong></h4>
                <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information, including:</p>
                <ul>
                    <li>Name</li>
                    <li>Phone number</li>
                    <li>Country</li>
                    <li>Job</li>
                    <li>Profile image</li>
                    <li>Email address (verification code sent to email)</li>
                </ul>

                <h4 className='privacy-policy-subtitle'>Usage Data</h4>
                <p>Usage Data is collected automatically when using the Service, including IP address, device type, browser type, and interactions with the app.</p>

                <h3 className='privacy-policy-subtitle'>Information Collected while Using the Application</h3>
                <p>With Your permission, we may collect:</p>
                <ul>
                    <li>Pictures and videos from your device's camera and gallery for uploads.</li>
                    <li>Storage access to save and share PDF files generated within the app.</li>
                </ul>
                <p>You can enable or disable access through Your Device settings.</p>

                <h3 className='privacy-policy-subtitle'>Permissions Required</h3>
                <p>With your permission, we may collect:</p>
                <ul>
                    <li><strong>Camera & Gallery Access</strong> – To allow you to upload images and videos.</li>
                    <li><strong>Storage Access</strong> – To enable saving and sharing PDF files generated in the app.</li>
                </ul>
                <p>You can enable or disable these permissions in your device settings.</p>

                <h3 className='privacy-policy-subtitle'>AI Camera Image Storage</h3>
                <p>The app saves images taken with the AI Camera feature to provide users with a history of their images and to enhance the AI model for improved results, ultimately helping users achieve better outcomes.</p>

                <h2 className='privacy-policy-subtitle'>Authentication and Deep Linking</h2>
                <p>Our application uses <strong>deep linking</strong> to facilitate authentication with third-party services, such as Google Sign-In. When you choose to log in using Google, you may be redirected to an external authentication page. Once authentication is complete, you will be returned to our app via a <strong>secure deep link</strong> that carries your login credentials.</p>

                <p>We do not store your Google password. Instead, we receive an <strong>authentication token</strong> from our backend to verify your identity and allow you to access our services securely.</p>

                <p>If you do not wish to use deep linking for authentication, you may choose alternative sign-in options where available.</p>

                <h2 className='privacy-policy-subtitle'>Use of Your Personal Data</h2>
                <p>The Company may use Personal Data for:</p>
                <ul>
                    <li>Providing and maintaining our Service</li>
                    <li>Managing Your Account</li>
                    <li>Verifying user identity through email confirmation</li>
                    <li>Facilitating social media interactions and user-generated content</li>
                    <li>Providing AI-powered chat assistance through Gemini AI</li>
                    <li>Allowing users to generate, save, and share PDF files</li>
                    <li><strong>To Provide and Maintain the Service</strong> – Ensuring smooth functionality of the app.</li>
                    <li><strong>To Manage Your Account</strong> – Verifying your identity through email confirmation.</li>
                    <li><strong>To Improve User Experience</strong> – Enhancing app features based on user feedback.</li>
                    <li><strong>For AI Chat Assistance</strong> – Enabling AI-powered responses via Gemini AI.</li>
                    <li><strong>For Advertising Purposes</strong> – We use Google AdMob, which may collect data for personalized ads.</li>
                    <li><strong>To Enhance AI Model Performance</strong> – The AI Camera images are used to improve AI accuracy and user assistance.</li>
                </ul>

                <h2 className='privacy-policy-subtitle'>AI Chat Feature</h2>
                <p>The Poultry includes an AI-powered chat feature (Gemini AI). Conversations may be processed to improve responses, but no personally identifiable data is stored beyond necessary processing.</p>

                <h2 className='privacy-policy-subtitle'>Advertising</h2>
                <p>We use third-party advertising services such as <strong>Google AdMob</strong>, which may collect data for personalized ads.</p>

                <h2 className='privacy-policy-subtitle'>3. Data Sharing & Third-Party Services</h2>
                <p>We do not sell your personal data to third parties. However, we may share information with:</p>
                <ul>
                    <li><strong>Google AdMob</strong> – For advertising and analytics.</li>
                    <li><strong>Cloud Storage Services</strong> – To store and process user-generated content securely.</li>
                </ul>
                <p>All third-party services comply with relevant data protection laws.</p>

                <h2>Security and Compliance</h2>
                <p>We take reasonable measures to secure Your data but remind You that no method of data transmission is 100% secure.</p>

                <h2 className='privacy-policy-subtitle'>4. How to Delete Your Account & Data</h2>
                <p>You have the right to delete your data at any time. Follow these steps to remove your account permanently:</p>
                <ol>
                    <li><strong>Open the App</strong>: Launch The Poultry app on your device.</li>
                    <li><strong>Access the Menu</strong>: Tap the menu button located at the top of the home screen.</li>
                    <li><strong>Select "Delete Your Account"</strong>: Choose the option to delete your account.</li>
                    <li><strong>Confirm Deletion</strong>: Click "Yes" to confirm.</li>
                    <li><strong>Data Removal</strong>: Once confirmed, all your data will be permanently erased from our servers.</li>
                    
                </ol>
                <p>Account deletion is fully managed within the app. Users can delete their account and all personal data directly from the app’s settings, and no additional steps are required outside the app.</p>
                <p>Users can delete their account and all associated data directly from the app. No additional steps are required outside the app.</p>
                <p>If you need assistance with data deletion, you can also email us at <a href="mailto:aiot.agri@gmail.com">aiot.agri@gmail.com</a> with the subject <strong>"Data Deletion Request"</strong>.</p>

                <h2 className='privacy-policy-subtitle'>5. Data Security</h2>
                <p>We take reasonable measures to protect your data against unauthorized access, alteration, and disclosure. However, no online service is completely secure, and we cannot guarantee absolute protection.</p>

                <h2 className='privacy-policy-subtitle'>6. Children's Privacy</h2>
                <p>Our service is not intended for users under the age of 13. We do not knowingly collect data from children. If you believe that a child has provided us with personal data, please contact us for removal.</p>

                <h2 className='privacy-policy-subtitle'>7. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted in the app, and we encourage you to review this policy periodically.</p>

                <h2 className='privacy-policy-subtitle'>8. Contact Us</h2>
                <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at:</p>
                <ul>
                    <li>Email: <a href="mailto:aiot.agri@gmail.com">aiot.agri@gmail.com</a></li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default PrivacyPolicy;
