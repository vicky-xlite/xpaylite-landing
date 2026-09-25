import NavLayout from "../layouts/NavLayout";
import {
    Box,
    Typography,
    Link
} from "@mui/material";

export default function Products({ comingFrom, title, subtitle }) {
    const pp = comingFrom === "PrivacyPolicy"
    return (

        <>

            <NavLayout title={pp ? title : "Shop"} subtitle={pp ? subtitle : "Home -> Shop"}>
                <Box sx={{ display: 'flex', justifyContent: pp ? 'space-between': 'flex-end' }}>
                    {pp ? (
                        <Box sx={{ pr: 4 }}>

                            <Typography sx={{ fontSize: "18px", fontWeight: 600, mb: 1, color: "#1e3a8a" }}>
                                1. Introduction
                            </Typography>
                            <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
                                Mudramarvel Pvt Ltd. (“Xpaylite”, “we”, “us”, “our”) is committed to protecting your personal data and privacy. This Privacy Policy describes how we collect, use, store, share, and safeguard your information when you use our platform, which includes:
                                <p>
                                    1. Website:{" "}
                                    <Link
                                        href="https://xpaylite.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ color: "#3b82f6", fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                                    >
                                        https://xpaylite.com
                                    </Link>
                                </p>
                                <p>
                                    2. Merchant Portal:{" "}
                                    <Link
                                        href="https://merchant.xpaylite.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ color: "#3b82f6", fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                                    >
                                        https://merchant.xpaylite.com
                                    </Link>
                                </p>
                                <p>
                                    3. Mobile Application:{" "}
                                    <Link
                                        href="https://play.google.com/store/apps/details?id=com.banking.xpaylite"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ color: "#3b82f6", fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                                    >
                                        https://play.google.com/store/apps/details?id=com.banking.xpaylite
                                    </Link>
                                </p>
                                <p>By accessing or using the  Xpaylite  platform or availing any of our services, you hereby expressly and unequivocally agree to the terms outlined in this Privacy Policy. The platform and the services offered are intended solely for use and delivery within the territory of India, and are not designed or authorized for access or use outside India.</p>
                                <p>The collection, use, storage, processing, retrieval, transfer, or disclosure of your personal information shall be governed strictly in accordance with this Policy and shall comply with all relevant laws in force, including but not limited to the Digital Personal Data Protection Act, 2023 (“DPDP Act”), the Information Technology Act, 2000 (“IT Act”), and the rules framed thereunder, as amended from time to time. Further, our data handling practices conform to the applicable directions, circulars, regulations, guidelines, and frameworks issued by regulatory authorities such as the Reserve Bank of India (“RBI”), and any other competent regulators or bodies in India, along with any other applicable laws, rules or enactments of the Parliament or Government of India (collectively referred to as “Applicable Laws”).</p>
                                <p>All terms and conditions, and policies governing the use of the  Xpaylite  platform (as defined in the Terms & Conditions and other applicable company policies) are incorporated herein by reference and form an integral part of this Privacy Policy. You are strongly advised to carefully read and understand this Policy to comprehend how your personal information will be handled.</p>
                                <p>Your continued use of the platform or any of our services shall be deemed to signify that you have read, understood, and accepted this Policy. By accessing or using the  Xpaylite   platform or entering into any partnership or engagement with us, you explicitly provide your informed consent for the collection, processing, use, storage, transfer, disclosure, and management of your personal information in accordance with this Policy.</p>
                                <p>If you do not agree with any part of this Policy or the data handling practices mentioned herein, you are requested to refrain from accessing or using the platform or our services, and from providing any personal data to us.</p>
                            </Typography>

                            <Typography sx={{ fontSize: "18px", fontWeight: 600, mt: 3, mb: 1, color: "#1e3a8a" }}>
                                Your Representations and Warranties
                            </Typography>

                            <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
                                By accessing or using the platform and by submitting your information to us, you hereby declare, represent, and warrant the following:
                                <p><strong>Accuracy and Legitimacy of Information</strong><br />
                                    The personal data and sensitive personal data that you provide to us is accurate, authentic, complete, and up to date. You have full authority, rights, and all necessary consents required under law to provide such information to Xpaylite.</p>
                                <p><strong>Lawful Submission and Processing</strong><br />
                                    The submission of your information to us and our consequent collection, storage, usage, access, processing, and transfer of the same will not violate any applicable laws, binding agreements, charter documents, judicial or regulatory orders, or decrees.</p>
                                <p><strong>Obligation to Maintain Updated Information</strong><br />
                                    You shall ensure, at all times, that the information provided by you remains correct, accurate, and up to date. You shall notify us immediately of any changes or updates to such information.</p>
                                <p><strong>Storage of Information</strong><br />
                                    Your personal data will primarily be stored in electronic/digital format; however, in certain cases, we may store physical copies of relevant documents (e.g., KYC). We may engage third-party service providers for the purpose of storage and/or processing of your data. You acknowledge and understand that such third parties may maintain their own data protection and security protocols, and we shall take reasonable steps to ensure that such third parties comply with the Applicable Laws to safeguard your personal information.</p>
                                <p><strong>Eligibility to Use the Platform</strong><br />
                                    The platform and services are not intended for persons under the age of 18 years, or for individuals who have previously been suspended or removed from using the platform by us. By continuing to use the platform or our services, you represent and warrant that you are at least 18 years of age, and are not currently suspended, blocked, or otherwise ineligible to use the platform or services for any reason.</p>
                                <p><strong>Capacity to Contract and Lawful Identity</strong><br />
                                    You confirm that you have the legal right, authority, and capacity to enter into this agreement and to comply with all the terms and conditions outlined in this Privacy Policy. You further agree that you shall not impersonate any person or entity, nor misrepresent your age, identity, or affiliation with any person or organization. You shall not unlawfully access, attempt to access, or misappropriate any personal data of others.</p>
                                <p><em>Note: "Personal Information" shall include both "personal data" and "sensitive personal data or information" as defined under the Applicable Laws and as submitted by you to us during the course of accessing, registering on, or using the Xpaylite platform and services.</em></p>
                            </Typography>

                            <Typography sx={{ fontSize: "18px", fontWeight: 600, mt: 3, mb: 1, color: "#1e3a8a" }}>
                                2. What We Collect
                            </Typography>
                            <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
                                By accessing or using our platform and services, you voluntarily consent to the collection, access, processing, and recording of the following categories of information, either provided directly by you, submitted through our agents or collected automatically through your interactions with Xpaylite :
                                <p><strong>For KYC, Service Activation, and Delivery</strong></p>
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li><strong>Personal Identification Details:</strong> Full name, email address, contact numbers, residential/business address, date of birth, and identity documents such as Aadhaar card, PAN card, Voter ID, Passport, Driving License, and education-related documents, as applicable. These may be collected directly from you or via authorized field representatives, distributors, or RMs.</li>
                                    <li><strong>Photographs & Visual KYC:</strong> Images or photographs of your identity documents, live photo captures, and video KYC recordings submitted through the platform or captured during field visits for KYC and activation of services.</li>
                                    <li><strong>Demographic & Financial Data:</strong> Information such as your income bracket, business profile, occupation, GST registration details, GST number (or extracted data via PAN/GST lookup), credit history, employment information, business location, and nature of services availed. This may be required for service eligibility or mandated by law.</li>
                                    <li><strong>Communication Metadata:</strong> Mobile number verification, promotional or transactional SMS/app notifications, and any communication exchanged with support or agents during the service lifecycle.</li>
                                    <li><strong>Transaction & Account Records:</strong> Your complete transaction history, virtual account/trade wallet balances, settlement details, reward earnings, and payment records, maintained as required under Applicable Laws (such as FIU-IND, KYC Master Direction, Income Tax Act).</li>
                                </ul>
                                <p><strong>For Fraud Detection & Prevention</strong></p>
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li><strong>Device Identifiers:</strong> IMEI number, device model and make, SIM serial number, OS version, carrier/network details, and other unique identifiers required to authenticate your session and protect against impersonation or misuse.</li>
                                    <li><strong>Device Permissions & Storage Access:</strong> Access to storage (e.g. files, photos, camera) and communication logs (such as SMS) may be requested with your consent to verify specific transactions or authenticate users for secure services.</li>
                                    <li><strong>Wi‑Fi Details (SSID):</strong> Information about your current Wi‑Fi network (e.g. SSID) may be accessed to notify you of unsecured or suspicious networks and enhance transaction safety.</li>
                                    <li><strong>Location Data:</strong> We may collect your precise or approximate location, using GPS, IP address, mobile network triangulation, or Wi‑Fi signals. This helps in geo‑verifying users for onboarding, agent mapping, and location‑based service delivery.</li>
                                </ul>
                                <p><strong>For Feedback, Analytics & Behavioural Use</strong></p>
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li><strong>User Feedback & Survey Responses:</strong> Any suggestions, feedback, complaints, reviews, or responses to customer surveys shared by you through our platform or support system.</li>
                                    <li><strong>User Behavioural Insights:</strong> We may conduct behavioural analysis, including usage patterns, service preferences, and engagement metrics, to customize your experience and ensure effective delivery of services, subject to your consent.</li>
                                </ul>
                                <p>Note: While providing personal information is voluntary, refusing to provide certain data may limit your ability to access or use some services that require mandatory KYC, authentication, or compliance checks.</p>
                                <p>You may withdraw your consent for the collection and use of your personal data at any time, as described in Section J (User Rights). However, certain data may continue to be stored by us for:</p>
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li>Compliance with legal/regulatory mandates</li>
                                    <li>KYC and transaction records</li>
                                    <li>Prevention and investigation of fraud</li>
                                    <li>Audit and taxation purposes</li>
                                </ul>
                                <p>Such retention shall be done strictly in accordance with Applicable Laws.</p>
                            </Typography>

                            <Typography sx={{ fontSize: "18px", fontWeight: 600, mt: 3, mb: 1, color: "#1e3a8a" }}>
                                3. What We Do with the Personal Information we gather
                            </Typography>
                            <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
                                We collect and process your personal data for the following purposes, in accordance with your consent and legal grounds:
                                <p><strong>Core Operations & Service Delivery</strong></p>
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li>To process your financial and non-financial transactions via AEPS, DMT, MATM, Recharge, Bill Pay, and other services.</li>
                                    <li>To personalize and administer your user account, dashboards, preferences, and service experience.</li>
                                    <li>For internal troubleshooting and technical support.</li>
                                    <li>To process your requests, service activations, upgrades, or verifications.</li>
                                    <li>To respond to customer support queries or feedback raised through any channel.</li>
                                    <li>To notify you about important updates related to services, including policy changes, pricing, commissions, settlements, and technical updates.</li>
                                </ul>
                                <p><strong>Regulatory & Legal Compliance</strong></p>
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li>To comply with KYC norms, RBI circulars, NPCI/UIDAI mandates, and financial reporting standards.</li>
                                    <li>To perform due diligence, background checks, or verification required by partner banks or regulators.</li>
                                    <li>For conducting internal audits, regulatory filings, financial reporting, and data reconciliations.</li>
                                    <li>For responding to court orders, government inquiries, or law enforcement requirements.</li>
                                </ul>
                                <p><strong>Risk, Fraud & Security Monitoring</strong></p>
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li>To detect, investigate, and prevent fraudulent, suspicious, or illegal activities.</li>
                                    <li>To validate user authenticity via biometric, OTP, or multi-factor authentication.</li>
                                    <li>To analyze usage anomalies and take corrective security measures.</li>
                                </ul>
                                <p><strong>Marketing, Analytics & Customization</strong></p>
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li>To conduct data analytics for service improvement and performance optimization.</li>
                                    <li>To send you targeted offers, relevant advertisements, referral rewards, and promotional materials (with your consent).</li>
                                    <li>To share newsletters, surveys, or engagement campaigns.</li>
                                    <li>To perform search result optimization, in-app promotions, and location-based notifications.</li>
                                </ul>
                            </Typography>

                            <Typography sx={{ fontSize: "18px", fontWeight: 600, mt: 3, mb: 1, color: "#1e3a8a" }}>
                                4. Collection and Use of Non-Personal Information
                            </Typography>
                            <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
                                In addition to Personal Information, we may collect certain Non-Personal Information during your interaction with the Xpaylite platform. This refers to information that does not, on its own, identify you personally. It may include:
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li>Your browser type and version</li>
                                    <li>Device and hardware details (e.g. type of computer, device model)</li>
                                    <li>Operating system information</li>
                                    <li>Technical data related to the means and medium used to access our platform (e.g., internet service provider, network type, IP address)</li>
                                </ul>
                                This Non-Personal Information may be automatically collected whenever you engage with our services or interact with the platform. It helps us ensure effective delivery of services, maintain security, monitor performance, and improve overall user experience.
                                <p>We may use such aggregated, anonymized Non-Personal Information to:</p>
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li>Understand user preferences and behaviour</li>
                                    <li>Identify features or content of most interest to users</li>
                                    <li>Personalize the platform and services accordingly</li>
                                </ul>
                                In cases where Non-Personal Information is combined with Personal Information, the combined dataset will be treated as Personal Information for as long as the two remain linked.
                                <p><strong>Sharing of Information with Government Authorities</strong></p>
                                Xpaylite may disclose your Personal Information to government departments, courts, law enforcement agencies, regulatory bodies, or other statutory authorities when such disclosure is:
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li>Mandated under Applicable Laws</li>
                                    <li>Required in connection with an investigation, legal proceeding, or regulatory request</li>
                                    <li>Necessary to comply with a judicial or administrative order</li>
                                </ul>
                            </Typography>

                            <Typography sx={{ fontSize: "18px", fontWeight: 600, mt: 3, mb: 1, color: "#1e3a8a" }}>
                                5. Data Security
                            </Typography>
                            <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
                                We are committed to safeguarding the confidentiality, integrity, and availability of your Personal Information. To that end, we implement appropriate technical, managerial, and physical security controls in accordance with Applicable Laws.
                                <p>These include, but are not limited to:</p>
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li>Encryption of data in transit and at rest</li>
                                    <li>Role-based access controls and user authentication mechanisms</li>
                                    <li>Firewall and intrusion detection systems</li>
                                    <li>Regular internal audits and external security assessments</li>
                                    <li>Employee background verification and security training</li>
                                </ul>
                                Xpaylite maintains a comprehensive information security program and documented information security policies that are commensurate with the nature and sensitivity of the data we collect and the services we provide.
                                <p>In the course of providing services, your Personal Information may be accessible to authorized third-party service providers, facilitators, or vendors. All such parties are contractually bound to comply with data protection obligations and must adhere to standards required by Applicable Laws.</p>
                                <p><strong>Caution:</strong> If you voluntarily disclose Personal Information on public forums or features (e.g., blogs, discussion boards) associated with the platform, that data becomes public. You are solely responsible for the information you share in such spaces.</p>
                                While we strive to protect your data, no method of transmission over the Internet or electronic storage is entirely secure. Therefore, we cannot guarantee absolute security. In case of any unauthorized access, breach, or data disclosure, we will promptly inform affected users in accordance with Applicable Laws and will take all reasonable steps to mitigate any harm.
                            </Typography>

                            <Typography sx={{ fontSize: "18px", fontWeight: 600, mt: 3, mb: 1, color: "#1e3a8a" }}>
                                6. Retention and Sharing of Personal Information
                            </Typography>
                            <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
                                <p><strong>Retention</strong></p>
                                Your Personal Information will be retained:
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li>For as long as necessary to fulfill the purposes outlined in this Privacy Policy</li>
                                    <li>For the duration required under Applicable Laws (e.g. KYC, FIU-IND, RBI guidelines)</li>
                                    <li>Until such time as your consent is withdrawn, except where retention is legally mandated</li>
                                    <li>For record keeping, auditing, regulatory compliance, fraud detection, or tax purposes</li>
                                </ul>
                                If you request deletion of your information, we will securely erase it, subject to legal exceptions as specified in Section 11.
                                <p><strong>Sharing with Third Parties</strong></p>
                                We may engage authorized third-party service providers to help us operate our business and deliver our services. These entities are granted access to your Personal Information strictly on a need-to-know basis and are permitted to use it solely for the specific purposes authorized by us.
                                <p>These may include:</p>
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li>Cloud hosting and IT infrastructure providers</li>
                                    <li>CRM and customer support platforms</li>
                                    <li>SMS, email, or notification service providers</li>
                                    <li>Analytics and business intelligence platforms</li>
                                    <li>Marketing and campaign partners (only with your prior consent)</li>
                                    <li>Payment processors and gateways</li>
                                    <li>Verification, KYC, or identity authentication agencies</li>
                                </ul>
                                You acknowledge that certain partners (e.g., banks, NBFCs, payment aggregators) may have their own privacy policies governing how they use your information. We recommend reviewing those policies directly for clarity on their practices.
                                <p>Once you are redirected to a third-party website, app, or service, your data will be governed by the terms and policies of that respective entity. Xpaylite shall not be liable for any acts, omissions, or misuse of information occurring on such third-party platforms.</p>
                                <p><strong>Specific Disclosures</strong></p>
                                We may disclose your Personal Information to the following categories of third parties, as required for business or compliance purposes:
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li><strong>Payment Processing Entities:</strong> Card issuers, banking partners, UPI service providers, wallet aggregators</li>
                                    <li><strong>IT and Infrastructure Vendors:</strong> For application development, maintenance, hosting, and cybersecurity</li>
                                    <li><strong>Verification & KYC Partners:</strong> For identity authentication, eKYC, video KYC, or GSTIN/PAN validation</li>
                                    <li><strong>Regulatory Bodies:</strong> Government authorities, tax departments, FIU, law enforcement, courts, and auditors</li>
                                    <li><strong>Sales & Marketing Affiliates:</strong> With your consent, for promotions, campaigns, or incentive programs</li>
                                    <li><strong>Group Companies & Subsidiaries:</strong> For internal business operations, restructuring, or service expansion</li>
                                    <li><strong>Any Other Entities:</strong> When such disclosure is expressly authorized by you or necessary under law</li>
                                </ul>
                            </Typography>

                            <Typography sx={{ fontSize: "18px", fontWeight: 600, mt: 3, mb: 1, color: "#1e3a8a" }}>
                                7. Third-Party Websites
                            </Typography>
                            <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
                                Our platform may contain links to external websites, partner services, or advertisements that redirect you to third-party platforms. Please be aware:
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li>We do not control or endorse the content, security, or data handling practices of these external sites</li>
                                    <li>Such platforms may collect their own data, use cookies, and track your interactions</li>
                                    <li>You are governed by their respective terms and privacy policies, not ours</li>
                                </ul>
                                We advise you to read the privacy policies of such websites before sharing any information.
                            </Typography>

                            <Typography sx={{ fontSize: "18px", fontWeight: 600, mt: 3, mb: 1, color: "#1e3a8a" }}>
                                8. Changes to This Privacy Policy
                            </Typography>
                            <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
                                Xpaylite reserves the right to modify, update, or revise this Privacy Policy at its sole discretion. Changes may reflect updates in technology, regulatory developments, or service enhancements.
                                <p>When updates are made:</p>
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li>Where required, we will notify you via email, SMS, platform notice, or app notification</li>
                                    <li>Your continued use of the platform constitutes acknowledgment and acceptance of the revised policy</li>
                                </ul>
                                We encourage you to periodically review this page for any updates.
                            </Typography>

                            <Typography sx={{ fontSize: "18px", fontWeight: 600, mt: 3, mb: 1, color: "#1e3a8a" }}>
                                9. Your Acceptance of These Terms
                            </Typography>
                            <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li>You have read and understood this Privacy Policy</li>
                                    <li>You explicitly and specifically consent to our collection, use, storage, processing, and sharing of your Personal and Non-Personal Information in accordance with this Policy</li>
                                    <li>Your consent is given freely, unconditionally, and with full knowledge of the purpose and consequences</li>
                                    <li>If you do not agree with the terms herein, you must immediately stop using the platform and services</li>
                                    <li>Continued use of the platform following changes to this Policy constitutes your agreement to be bound by such changes</li>
                                </ul>
                            </Typography>

                            <Typography sx={{ fontSize: "18px", fontWeight: 600, mt: 3, mb: 1, color: "#1e3a8a" }}>
                                10. Your Rights
                            </Typography>
                            <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
                                As a Data Principal under the Digital Personal Data Protection Act, 2023 and other Applicable Laws, you have the right to access, review, correct, update, withdraw, or restrict the use of your Personal Information stored with us.
                                <p>You may exercise these rights by submitting a written request to: support@navajowhite-weasel-499375.hostingersite.com</p>
                                <p>Upon receiving your request:</p>
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li>We will review and respond to your request within the timelines prescribed by Applicable Laws (typically within 30 days).</li>
                                    <li>If you request correction or completion of inaccurate data, we will update our records accordingly.</li>
                                    <li>If you request withdrawal of consent or deletion of your Personal Information, we will cease further processing of such data for the relevant purposes.</li>
                                </ul>
                                Please note that:
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li>Withdrawal of consent may result in the discontinuation of certain services that rely on such information.</li>
                                    <li>Despite such withdrawal or deletion requests, we may retain your Personal Information for the duration required to comply with legal, regulatory, or audit obligations — including but not limited to KYC retention, tax filings, transaction records, fraud detection, and dispute resolution.</li>
                                </ul>
                            </Typography>

                            <Typography sx={{ fontSize: "18px", fontWeight: 600, mt: 3, mb: 1, color: "#1e3a8a" }}>
                                11. Contact Us
                            </Typography>
                            <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
                                <p><strong>Phone:</strong>  +91 9762357400</p>
                                <p><strong>Address:</strong> A-14, First Floor, Major Dhyanchand Nagar, Meerut, Uttar Pradesh - 250002</p>
                                <p>You may contact us to:</p>
                                <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '20px' }}>
                                    <li>Inquire about how your personal data is being processed</li>
                                    <li>Request access to or updates of your personal data</li>
                                    <li>Revoke or withdraw consent previously provided</li>
                                    <li>Obtain a summary of your Personal Information and related processing activities</li>
                                    <li>Raise any other concern related to the handling of your data</li>
                                </ul>
                                We will strive to resolve your request or grievance within 30 (thirty) days from the date of receipt.
                                <p><strong>Grievance Officer</strong></p>
                                <p>Name: Mr. Amit Sharma<br />
                                    Designation: Head – Operations<br />
                                    Email: amit.sharma@xpaylite.com<br />
                                    Address : A-14, First Floor, Major Dhyanchand Nagar, Meerut, Uttar Pradesh - 250002</p>
                            </Typography>

                            <Typography sx={{ fontSize: "18px", fontWeight: 600, mt: 3, mb: 1, color: "#1e3a8a" }}>
                                12. Governing Law and Dispute Resolution
                            </Typography>
                            <Typography sx={{ mb: 2, color: "#555", lineHeight: 1.8 }}>
                                This Privacy Policy shall be governed by and construed in accordance with the laws of India.
                                <p>All disputes or claims arising out of or in connection with this Policy shall be subject to the exclusive jurisdiction of the competent courts at Meerut, Uttar Pradesh, India.</p>
                                <p>© Mudramarvel Pvt. Ltd.(xpaylite)</p>
                            </Typography>
                        </Box>
                    ) : null}
                    {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', mx: pp? '30px' : 0 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography
                                sx={{
                                    mb: 2,
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    letterSpacing: "1px",
                                    // textTransform: "uppercase",
                                    // opacity: 0.9,
                                    color: '#1e3a8a'
                                    // width:'50%'
                                }}
                            >
                                Archives
                            </Typography>
                            <Typography
                                sx={{
                                    mb: 1,
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    letterSpacing: "1px",
                                    // textTransform: "uppercase",
                                    opacity: 0.7,
                                    // color: '#1e3a8a'
                                    // width:'50%'
                                }}
                            >
                                January 2023
                            </Typography>
                            <Typography
                                sx={{
                                    mb: 4,
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    letterSpacing: "1px",
                                    // textTransform: "uppercase",
                                    opacity: 0.7,
                                    // color: '#1e3a8a'
                                    // width:'50%'
                                }}
                            >
                                December 2022
                            </Typography>

                            <Typography
                                sx={{
                                    mb: 2,
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    letterSpacing: "1px",
                                    // textTransform: "uppercase",
                                    // opacity: 0.9,
                                    color: '#1e3a8a'
                                    // width:'50%'
                                }}
                            >
                                Categories
                            </Typography>
                            <Typography
                                sx={{
                                    mb: 1,
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    letterSpacing: "1px",
                                    // textTransform: "uppercase",
                                    opacity: 0.7,
                                    // color: '#1e3a8a'
                                    // width:'50%'
                                }}
                            >
                                Business Insurance
                            </Typography>
                            <Typography
                                sx={{
                                    mb: 1,
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    letterSpacing: "1px",
                                    // textTransform: "uppercase",
                                    opacity: 0.7,
                                    // color: '#1e3a8a'
                                    // width:'50%'
                                }}
                            >
                                Car Insurance
                            </Typography>
                            <Typography
                                sx={{
                                    mb: 1,
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    letterSpacing: "1px",
                                    // textTransform: "uppercase",
                                    opacity: 0.7,
                                    // color: '#1e3a8a'
                                    // width:'50%'
                                }}
                            >
                                Fire Insurance
                            </Typography>
                            <Typography
                                sx={{
                                    mb: 1,
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    letterSpacing: "1px",
                                    // textTransform: "uppercase",
                                    opacity: 0.7,
                                    // color: '#1e3a8a'
                                    // width:'50%'
                                }}
                            >
                                Home Insurance
                            </Typography>
                            <Typography
                                sx={{
                                    mb: 1,
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    letterSpacing: "1px",
                                    // textTransform: "uppercase",
                                    opacity: 0.7,
                                    // color: '#1e3a8a'
                                    // width:'50%'
                                }}
                            >
                                Life Insurance
                            </Typography>
                            <Typography
                                sx={{
                                    mb: 1,
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    letterSpacing: "1px",
                                    // textTransform: "uppercase",
                                    opacity: 0.7,
                                    // color: '#1e3a8a'
                                    // width:'50%'
                                }}
                            >
                                Medical Insurance
                            </Typography>
                            <Typography
                                sx={{
                                    mb: 1,
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    letterSpacing: "1px",
                                    // textTransform: "uppercase",
                                    opacity: 0.7,
                                    // color: '#1e3a8a'
                                    // width:'50%'
                                }}
                            >
                                Payments
                            </Typography>
                        </Box>
                    </Box> */}
                </Box>

            </NavLayout>
        </>
    )
}