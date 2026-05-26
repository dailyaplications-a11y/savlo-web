import type { Metadata } from "next"
import { SiteHeader } from "@/components/savlo/site-header"
import { SiteFooter } from "@/components/savlo/site-footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Review the privacy policy and data-processing notice for Savlo, the personal finance mobile app.",
  alternates: {
    canonical: "/privacy",
  },
}

export default function PrivacyPage() {
  const tocItems = [
    { id: "1-what-information-do-we-collect", label: "1. WHAT INFORMATION DO WE COLLECT?" },
    { id: "2-how-do-we-process-your-information", label: "2. HOW DO WE PROCESS YOUR INFORMATION?" },
    {
      id: "3-what-legal-bases-do-we-rely-on-to-process-your-personal-information",
      label: "3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?",
    },
    {
      id: "4-when-and-with-whom-do-we-share-your-personal-information",
      label: "4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
    },
    { id: "5-do-we-offer-artificial-intelligence-based-products", label: "5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?" },
    { id: "6-how-do-we-handle-your-social-logins", label: "6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?" },
    { id: "7-is-your-information-transferred-internationally", label: "7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?" },
    { id: "8-how-long-do-we-keep-your-information", label: "8. HOW LONG DO WE KEEP YOUR INFORMATION?" },
    { id: "9-how-do-we-keep-your-information-safe", label: "9. HOW DO WE KEEP YOUR INFORMATION SAFE?" },
    { id: "10-do-we-collect-information-from-minors", label: "10. DO WE COLLECT INFORMATION FROM MINORS?" },
    { id: "11-what-are-your-privacy-rights", label: "11. WHAT ARE YOUR PRIVACY RIGHTS?" },
    { id: "12-controls-for-do-not-track-features", label: "12. CONTROLS FOR DO-NOT-TRACK FEATURES" },
    {
      id: "13-do-united-states-residents-have-specific-privacy-rights",
      label: "13. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
    },
    { id: "14-do-we-make-updates-to-this-notice", label: "14. DO WE MAKE UPDATES TO THIS NOTICE?" },
    { id: "15-how-can-you-contact-us-about-this-notice", label: "15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" },
    {
      id: "16-how-can-you-review-update-or-delete-the-data-we-collect-from-you",
      label: "16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?",
    },
  ]

  return (
    <div className="bg-grain relative min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:pt-36">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-[12px] text-muted-foreground">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
            </li>
            <li aria-hidden>·</li>
            <li className="text-foreground/80">Privacy Policy</li>
          </ol>
        </nav>

        {/* Top Header */}
        <header className="border-b border-border/60 pb-10">
          <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl uppercase">
            PRIVACY POLICY
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated May 23, 2026
          </p>
        </header>

        {/* Document Body */}
        <div className="mt-10 space-y-10 leading-relaxed text-muted-foreground">
          {/* Introductory Paragraphs */}
          <section className="space-y-5 text-[15px] text-foreground/90">
            <p>
              This Privacy Notice for Savlo (&ldquo;<strong>we</strong>,&rdquo; &ldquo;<strong>us</strong>,&rdquo; or &ldquo;<strong>our</strong>&rdquo;), describes how and why we might access, collect, store, use, and/or share (&ldquo;<strong>process</strong>&rdquo;) your personal information when you use our services (&ldquo;<strong>Services</strong>&rdquo;), including when you:
            </p>
            <ul className="space-y-3 pl-6 list-disc marker:text-primary">
              <li>
                Download and use our mobile application (Savlo), or any other application of ours that links to this Privacy Notice
              </li>
              <li>
                Use Savlo. Savlo is a personal finance app that helps users track and manage expenses and income, set savings goals, and gain AI-powered insights into their spending habits.
              </li>
              <li>
                Engage with us in other related ways, including any marketing or events
              </li>
            </ul>
            <p className="mt-6">
              <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:support@savloapp.com" className="text-primary hover:text-primary-hover underline transition-colors">support@savloapp.com</a>.
            </p>
          </section>

          {/* Summary of Key Points */}
          <section className="border-t border-border/40 pt-10">
            <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground uppercase">
              SUMMARY OF KEY POINTS
            </h2>
            <p className="mt-4 italic text-sm text-muted-foreground">
              This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our <a href="#table-of-contents" className="text-primary hover:underline font-semibold">table of contents</a> below to find the section you are looking for.
            </p>

            <div className="mt-6 space-y-6 text-[14px]">
              <div>
                <p className="font-semibold text-foreground">
                  What personal information do we process?
                </p>
                <p className="mt-1">
                  When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <a href="#1-what-information-do-we-collect" className="text-primary hover:underline">personal information you disclose to us</a>.
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground">
                  Do we process any sensitive personal information?
                </p>
                <p className="mt-1">
                  Some of the information may be considered &ldquo;special&rdquo; or &ldquo;sensitive&rdquo; in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about <a href="#1-what-information-do-we-collect" className="text-primary hover:underline">sensitive information we process</a>.
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground">
                  Do we collect any information from third parties?
                </p>
                <p className="mt-1">
                  We do not collect any information from third parties.
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground">
                  How do we process your information?
                </p>
                <p className="mt-1">
                  We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about <a href="#2-how-do-we-process-your-information" className="text-primary hover:underline">how we process your information</a>.
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground">
                  In what situations and with which types of parties do we share personal information?
                </p>
                <p className="mt-1">
                  We may share information in specific situations and with specific categories of third parties. Learn more about <a href="#4-when-and-with-whom-do-we-share-your-personal-information" className="text-primary hover:underline">when and with whom we share your personal information</a>.
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground">
                  How do we keep your information safe?
                </p>
                <p className="mt-1">
                  We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about <a href="#9-how-do-we-keep-your-information-safe" className="text-primary hover:underline">how we keep your information safe</a>.
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground">
                  What are your rights?
                </p>
                <p className="mt-1">
                  Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <a href="#11-what-are-your-privacy-rights" className="text-primary hover:underline">your privacy rights</a>.
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground">
                  How do you exercise your rights?
                </p>
                <p className="mt-1">
                  The easiest way to exercise your rights is by visiting <a href="mailto:support@savloapp.com" className="text-primary hover:underline font-mono text-[13px]">support@savloapp.com</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                </p>
              </div>

              <div className="border-t border-border/40 pt-4">
                <p className="text-foreground font-medium">
                  Want to learn more about what we do with any information we collect?{" "}
                  <a href="#table-of-contents" className="text-primary hover:underline font-semibold">
                    Review the Privacy Notice in full
                  </a>.
                </p>
              </div>
            </div>
          </section>

          {/* Table of Contents */}
          <section id="table-of-contents" className="border-t border-border/40 pt-10 scroll-mt-24">
            <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground uppercase">
              TABLE OF CONTENTS
            </h2>
            <nav className="mt-6">
              <ul className="space-y-3.5 text-[14px]">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-primary hover:text-primary-hover hover:underline transition-colors font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {/* ── SECTION 1 ── */}
          <section id="1-what-information-do-we-collect" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-6 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">
              1. WHAT INFORMATION DO WE COLLECT?
            </h2>

            {/* Personal information you disclose to us */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-[15px]">Personal information you disclose to us</h3>
              <p className="italic text-muted-foreground">
                <strong>In Short:</strong> We collect personal information that you provide to us.
              </p>
              <p>
                We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
              </p>
              <p>
                <strong className="text-foreground">Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
              </p>
              <ul className="pl-6 space-y-2 list-disc marker:text-primary">
                <li>email addresses</li>
                <li>usernames</li>
                <li>contact or authentication data</li>
                <li>passwords</li>
                <li>names</li>
              </ul>
              <p>
                <strong className="text-foreground">Sensitive Information.</strong> When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:
              </p>
              <ul className="pl-6 space-y-2 list-disc marker:text-primary">
                <li>biometric data</li>
              </ul>
              <p>
                <strong className="text-foreground">Social Media Login Data.</strong> We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider, as described in the section called{" "}
                <a href="#6-how-do-we-handle-your-social-logins" className="text-primary hover:underline font-semibold uppercase">
                  &ldquo;HOW DO WE HANDLE YOUR SOCIAL LOGINS?&rdquo;
                </a>{" "}below.
              </p>
              <p>
                <strong className="text-foreground">Application Data.</strong> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
              </p>
              <ul className="pl-6 space-y-4 list-disc marker:text-primary">
                <li>
                  <em className="text-foreground/80">Mobile Device Access.</em> We may request access or permission to certain features from your mobile device, including your mobile device&apos;s microphone, storage, sensors, sms messages, and other features. If you wish to change our access or permissions, you may do so in your device&apos;s settings.
                </li>
                <li>
                  <em className="text-foreground/80">Mobile Device Data.</em> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device&apos;s operating system or platform, the type of mobile device you use, your mobile device&apos;s unique device ID, and information about the features of our application(s) you accessed.
                </li>
                <li>
                  <em className="text-foreground/80">Push Notifications.</em> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device&apos;s settings.
                </li>
              </ul>
              <p>
                This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.
              </p>
              <p>
                All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
              </p>
            </div>

            {/* Information automatically collected */}
            <div className="space-y-4 border-t border-border/30 pt-6">
              <h3 className="font-semibold text-foreground text-[15px]">Information automatically collected</h3>
              <p className="italic text-muted-foreground">
                <strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
              </p>
              <p>
                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
              </p>
              <p>The information we collect includes:</p>
              <ul className="pl-6 space-y-4 list-disc marker:text-primary">
                <li>
                  <em className="text-foreground/80">Log and Usage Data.</em> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called &ldquo;crash dumps&rdquo;), and hardware settings).
                </li>
                <li>
                  <em className="text-foreground/80">Device Data.</em> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
                </li>
              </ul>
            </div>

            {/* Google API */}
            <div className="space-y-3 border-t border-border/30 pt-6">
              <h3 className="font-semibold text-foreground text-[15px]">Google API</h3>
              <p>
                Our use of information received from Google APIs will adhere to{" "}
                <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Google API Services User Data Policy
                </a>
                , including the{" "}
                <a href="https://developers.google.com/terms/api-services-user-data-policy#limited-use" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Limited Use requirements
                </a>.
              </p>
            </div>
          </section>

          {/* ── SECTION 2 ── */}
          <section id="2-how-do-we-process-your-information" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-5 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">
              2. HOW DO WE PROCESS YOUR INFORMATION?
            </h2>
            <p className="italic text-muted-foreground">
              <strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process the personal information for the following purposes listed below. We may also process your information for other purposes only with your prior explicit consent.
            </p>
            <p className="font-semibold text-foreground">
              We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
            </p>
            <ul className="pl-6 space-y-4 list-disc marker:text-primary">
              <li>
                <strong className="text-foreground">To facilitate account creation and authentication and otherwise manage user accounts.</strong>{" "}
                We may process your information so you can create and log in to your account, as well as keep your account in working order.
              </li>
              <li>
                <strong className="text-foreground">To deliver and facilitate delivery of services to the user.</strong>{" "}
                We may process your information to provide you with the requested service.
              </li>
              <li>
                <strong className="text-foreground">To respond to user inquiries/offer support to users.</strong>{" "}
                We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
              </li>
              <li>
                <strong className="text-foreground">To send administrative information to you.</strong>{" "}
                We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.
              </li>
              <li>
                <strong className="text-foreground">To request feedback.</strong>{" "}
                We may process your information when necessary to request feedback and to contact you about your use of our Services.
              </li>
              <li>
                <strong className="text-foreground">To protect our Services.</strong>{" "}
                We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.
              </li>
              <li>
                <strong className="text-foreground">To identify usage trends.</strong>{" "}
                We may process information about how you use our Services to better understand how they are being used so we can improve them.
              </li>
              <li>
                <strong className="text-foreground">To save or protect an individual&apos;s vital interest.</strong>{" "}
                We may process your information when necessary to save or protect an individual&apos;s vital interest, such as to prevent harm.
              </li>
            </ul>
          </section>

          {/* ── SECTION 3 ── */}
          <section id="3-what-legal-bases-do-we-rely-on-to-process-your-personal-information" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-6 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">
              3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
            </h2>
            <p className="italic text-muted-foreground">
              <strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.
            </p>

            {/* EU/UK Subsection */}
            <div className="space-y-4">
              <p className="italic underline text-foreground font-semibold">
                If you are located in the EU or UK, this section applies to you.
              </p>
              <p>
                The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
              </p>
              <ul className="pl-6 space-y-4 list-disc marker:text-primary">
                <li>
                  <strong className="text-foreground">Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about{" "}
                  <a href="#11-what-are-your-privacy-rights" className="text-primary hover:underline font-semibold">
                    withdrawing your consent
                  </a>.
                </li>
                <li>
                  <strong className="text-foreground">Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.
                </li>
                <li>
                  <strong className="text-foreground">Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:
                  <ul className="pl-6 mt-2 space-y-2 list-disc marker:text-primary/70">
                    <li>Analyze how our Services are used so we can improve them to engage and retain users</li>
                    <li>Diagnose problems and/or prevent fraudulent activities</li>
                    <li>Understand how our users use our products and services so we can improve user experience</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-foreground">Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.
                </li>
                <li>
                  <strong className="text-foreground">Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.
                </li>
              </ul>
            </div>

            {/* Canada Subsection */}
            <div className="space-y-4 border-t border-border/30 pt-6">
              <p className="italic underline text-foreground font-semibold">
                If you are located in Canada, this section applies to you.
              </p>
              <p>
                We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time. Learn more about{" "}
                <a href="#11-what-are-your-privacy-rights" className="text-primary hover:underline font-semibold">
                  withdrawing your consent
                </a>.
              </p>
              <p>
                In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:
              </p>
              <ul className="pl-6 space-y-3 list-disc marker:text-primary">
                <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
                <li>For investigations and fraud detection and prevention</li>
                <li>For business transactions provided certain conditions are met</li>
                <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
                <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
                <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
                <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
                <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
                <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
                <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
                <li>If the information is publicly available and is specified by the regulations</li>
                <li>We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments</li>
              </ul>
            </div>
          </section>

          {/* ── SECTION 4 ── */}
          <section id="4-when-and-with-whom-do-we-share-your-personal-information" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-6 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">
              4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </h2>
            <p className="italic text-muted-foreground">
              <strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following categories of third parties.
            </p>

            <div className="space-y-4">
              <p>
                <strong className="text-foreground">Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents (&ldquo;<strong>third parties</strong>&rdquo;) who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.
              </p>
              <p>
                The categories of third parties we may share personal information with are as follows:
              </p>
              <ul className="pl-6 space-y-2 list-disc marker:text-primary">
                <li>AI Platforms</li>
                <li>Cloud Computing Services</li>
                <li>Data Analytics Services</li>
                <li>Data Storage Service Providers</li>
                <li>Performance Monitoring Tools</li>
                <li>User Account Registration & Authentication Services</li>
              </ul>
              <p className="pt-2">
                We also may need to share your personal information in the following situations:
              </p>
              <ul className="pl-6 space-y-4 list-disc marker:text-primary">
                <li>
                  <strong className="text-foreground">Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                </li>
                <li>
                  <strong className="text-foreground">Offer Wall.</strong> Our application(s) may display a third-party hosted &ldquo;offer wall.&rdquo; Such an offer wall allows third-party advertisers to offer virtual currency, gifts, or other items to users in return for the acceptance and completion of an advertisement offer. Such an offer wall may appear in our application(s) and be displayed to you based on certain data, such as your geographic area or demographic information. When you click on an offer wall, you will be brought to an external website belonging to other persons and will leave our application(s). A unique identifier, such as your user ID, will be shared with the offer wall provider in order to prevent fraud and properly credit your account with the relevant reward.
                </li>
              </ul>
            </div>
          </section>

          {/* ── SECTION 5 ── */}
          <section id="5-do-we-offer-artificial-intelligence-based-products" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-6 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">
              5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
            </h2>
            <p className="italic text-muted-foreground">
              <strong>In Short:</strong> We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.
            </p>

            <div className="space-y-4">
              <p>
                As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, &ldquo;<strong>AI Products</strong>&rdquo;). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.
              </p>

              <div className="space-y-2">
                <h3 className="font-semibold text-foreground text-[15px]">Use of AI Technologies</h3>
                <p>
                  We provide the AI Products through third-party service providers (&ldquo;<strong>AI Service Providers</strong>&rdquo;), including Google Cloud AI. As outlined in this Privacy Notice, your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products for purposes outlined in{" "}
                  <a href="#3-what-legal-bases-do-we-rely-on-to-process-your-personal-information" className="text-primary hover:underline font-semibold">
                    &ldquo;WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?&rdquo;
                  </a>{" "}
                  You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-foreground text-[15px]">Our AI Products</h3>
                <p>Our AI Products are designed for the following functions:</p>
                <ul className="pl-6 space-y-2 list-disc marker:text-primary">
                  <li>AI insights</li>
                  <li>AI predictive analytics</li>
                  <li>AI search</li>
                  <li>Text analysis</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-foreground text-[15px]">How We Process Your Data Using AI</h3>
                <p>
                  All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data&apos;s safety.
                </p>
              </div>
            </div>
          </section>

          {/* ── SECTION 6 ── */}
          <section id="6-how-do-we-handle-your-social-logins" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-6 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">
              6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
            </h2>
            <p className="italic text-muted-foreground">
              <strong>In Short:</strong> If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.
            </p>

            <div className="space-y-4">
              <p>
                Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.
              </p>
              <p>
                We will use the information we receive only for the purposes that are described in this Privacy Notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.
              </p>
            </div>
          </section>

          {/* ── SECTION 7 ── */}
          <section id="7-is-your-information-transferred-internationally" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-6 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">
              7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
            </h2>
            <p className="italic text-muted-foreground">
              <strong>In Short:</strong> We may transfer, store, and process your information in countries other than your own.
            </p>

            <div className="space-y-4">
              <p>
                Our servers are located in the United States. Regardless of your location, please be aware that your information may be transferred to, stored by, and processed by us in our facilities and in the facilities of the third parties with whom we may share your personal information (see{" "}
                <a href="#4-when-and-with-whom-do-we-share-your-personal-information" className="text-primary hover:underline font-semibold">
                  &ldquo;WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?&rdquo;
                </a>{" "}
                above), including facilities in the United States, and other countries.
              </p>
              <p>
                If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this Privacy Notice and applicable law.
              </p>
              <p className="font-medium text-foreground">
                European Commission&apos;s Standard Contractual Clauses:
              </p>
              <p>
                We have implemented measures to protect your personal information, including by using the European Commission&apos;s Standard Contractual Clauses for transfers of personal information between our group companies and between us and our third-party providers. These clauses require all recipients to protect all personal information that they process originating from the EEA or UK in accordance with European data protection laws and regulations. Our Standard Contractual Clauses can be provided upon request. We have implemented similar appropriate safeguards with our third-party service providers and partners and further details can be provided upon request.
              </p>
            </div>
          </section>

          {/* ── SECTION 8 ── */}
          <section id="8-how-long-do-we-keep-your-information" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-6 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">
              8. HOW LONG DO WE KEEP YOUR INFORMATION?
            </h2>
            <p className="italic text-muted-foreground">
              <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.
            </p>

            <div className="space-y-4">
              <p>
                We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
              </p>
              <p>
                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
              </p>
            </div>
          </section>

          {/* ── SECTION 9 ── */}
          <section id="9-how-do-we-keep-your-information-safe" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-6 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">
              9. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </h2>
            <p className="italic text-muted-foreground">
              <strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.
            </p>

            <div className="space-y-4">
              <p>
                We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
              </p>
            </div>
          </section>

          {/* ── SECTION 10 ── */}
          <section id="10-do-we-collect-information-from-minors" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-6 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">
              10. DO WE COLLECT INFORMATION FROM MINORS?
            </h2>
            <p className="italic text-muted-foreground">
              <strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction.
            </p>

            <div className="space-y-4">
              <p>
                We do not knowingly collect, solicit data from, or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or the equivalent age as specified by law in your jurisdiction or that you are the parent or guardian of such a minor and consent to such minor dependent&apos;s use of the Services. If we learn that personal information from users less than 18 years of age or the equivalent age as specified by law in your jurisdiction has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18 or the equivalent age as specified by law in your jurisdiction, please contact us at{" "}
                <a href="mailto:support@savloapp.com" className="text-primary hover:text-primary-hover underline transition-colors">
                  support@savloapp.com
                </a>.
              </p>
            </div>
          </section>

          {/* ── SECTION 11 ── */}
          <section id="11-what-are-your-privacy-rights" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-6 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">
              11. WHAT ARE YOUR PRIVACY RIGHTS?
            </h2>
            <p className="italic text-muted-foreground">
              <strong>In Short:</strong> Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.
            </p>

            <div className="space-y-4">
              <p>
                In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. If a decision that produces legal or similarly significant effects is made solely by automated means, we will inform you, explain the main factors, and offer a simple way to request human review. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section{" "}
                <a href="#15-how-can-you-contact-us-about-this-notice" className="text-primary hover:underline font-semibold">
                  &ldquo;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&rdquo;
                </a>{" "}
                below.
              </p>
              <p>
                We will consider and act upon any request in accordance with applicable data protection laws.
              </p>
              <p>
                If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your{" "}
                <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Member State data protection authority
                </a>{" "}
                or{" "}
                <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  UK data protection authority
                </a>.
              </p>
              <p>
                If you are located in Switzerland, you may contact the{" "}
                <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Federal Data Protection and Information Commissioner
                </a>.
              </p>

              <div className="space-y-2 pt-2">
                <p>
                  <strong className="text-foreground underline">Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section{" "}
                  <a href="#15-how-can-you-contact-us-about-this-notice" className="text-primary hover:underline font-semibold">
                    &ldquo;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&rdquo;
                  </a>{" "}
                  below.
                </p>
                <p>
                  However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                </p>
              </div>

              <div className="space-y-2 border-t border-border/30 pt-6">
                <h3 className="font-semibold text-foreground text-[15px]">Account Information</h3>
                <p>
                  If you would at any time like to review or change the information in your account or terminate your account, you can:
                </p>
                <ul className="pl-6 space-y-1 list-disc marker:text-primary">
                  <li>Contact us using the contact information provided.</li>
                  <li>Log in to your account settings and update your user account.</li>
                </ul>
                <p className="pt-2">
                  Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
                </p>
                <p className="pt-2">
                  If you have questions or comments about your privacy rights, you may email us at{" "}
                  <a href="mailto:support@savloapp.com" className="text-primary hover:text-primary-hover underline transition-colors">
                    support@savloapp.com
                </a>.
                </p>
              </div>
            </div>
          </section>

          {/* ── SECTION 12 ── */}
          <section id="12-controls-for-do-not-track-features" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-6 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">
              12. CONTROLS FOR DO-NOT-TRACK FEATURES
            </h2>
            <div className="space-y-4">
              <p>
                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&ldquo;DNT&rdquo;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
              </p>
              <p>
                California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.
              </p>
            </div>
          </section>

          {/* ── SECTION 13 ── */}
          <section id="13-do-united-states-residents-have-specific-privacy-rights" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-6 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">
              13. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </h2>
            <p className="italic text-muted-foreground">
              <strong>In Short:</strong> If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.
            </p>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-[15px]">Categories of Personal Information We Collect</h3>
              <p>
                The table below shows the categories of personal information we have collected in the past twelve (12) months. The table includes illustrative examples of each category and does not reflect the personal information we collect from you. For a comprehensive inventory of all personal information we process, please refer to the section{" "}
                <a href="#1-what-information-do-we-collect" className="text-primary hover:underline font-semibold">
                  &ldquo;WHAT INFORMATION DO WE COLLECT?&rdquo;
                </a>.
              </p>

              {/* Status Table */}
              <div className="overflow-x-auto rounded-lg border border-border/40 bg-surface/20">
                <table className="w-full border-collapse text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-border/40 bg-muted/20 font-semibold text-foreground">
                      <th className="px-4 py-3 min-w-[150px]">Category</th>
                      <th className="px-4 py-3">Examples</th>
                      <th className="px-4 py-3 text-center min-w-[90px]">Collected</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/20 text-muted-foreground">
                    <tr className="hover:bg-muted/5 transition-colors">
                      <td className="px-4 py-3 font-semibold text-foreground">A. Identifiers</td>
                      <td className="px-4 py-3">
                        Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-muted-foreground/10 text-muted-foreground/60">NO</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/5 transition-colors">
                      <td className="px-4 py-3 font-semibold text-foreground">B. Personal information as defined in the California Customer Records statute</td>
                      <td className="px-4 py-3">
                        Name, contact information, education, employment, employment history, and financial information
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-muted-foreground/10 text-muted-foreground/60">NO</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/5 transition-colors">
                      <td className="px-4 py-3 font-semibold text-foreground">C. Protected classification characteristics under state or federal law</td>
                      <td className="px-4 py-3">
                        Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-muted-foreground/10 text-muted-foreground/60">NO</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/5 transition-colors">
                      <td className="px-4 py-3 font-semibold text-foreground">D. Commercial information</td>
                      <td className="px-4 py-3">
                        Transaction information, purchase history, financial details, and payment information
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-muted-foreground/10 text-muted-foreground/60">NO</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/5 transition-colors">
                      <td className="px-4 py-3 font-semibold text-foreground">E. Biometric information</td>
                      <td className="px-4 py-3">
                        Fingerprints and voiceprints
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-muted-foreground/10 text-muted-foreground/60">NO</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/5 transition-colors">
                      <td className="px-4 py-3 font-semibold text-foreground">F. Internet or other similar network activity</td>
                      <td className="px-4 py-3">
                        Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-muted-foreground/10 text-muted-foreground/60">NO</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/5 transition-colors">
                      <td className="px-4 py-3 font-semibold text-foreground">G. Geolocation data</td>
                      <td className="px-4 py-3">
                        Device location
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-muted-foreground/10 text-muted-foreground/60">NO</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/5 transition-colors">
                      <td className="px-4 py-3 font-semibold text-foreground">H. Audio, electronic, sensory, or similar information</td>
                      <td className="px-4 py-3">
                        Images and audio, video or call recordings created in connection with our business activities
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-muted-foreground/10 text-muted-foreground/60">NO</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/5 transition-colors">
                      <td className="px-4 py-3 font-semibold text-foreground">I. Professional or employment-related information</td>
                      <td className="px-4 py-3">
                        Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-muted-foreground/10 text-muted-foreground/60">NO</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/5 transition-colors">
                      <td className="px-4 py-3 font-semibold text-foreground">J. Education Information</td>
                      <td className="px-4 py-3">
                        Student records and directory information
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-muted-foreground/10 text-muted-foreground/60">NO</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/5 transition-colors">
                      <td className="px-4 py-3 font-semibold text-foreground">K. Inferences drawn from collected personal information</td>
                      <td className="px-4 py-3">
                        Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual&apos;s preferences and characteristics
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded bg-primary/20 text-primary">YES</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/5 transition-colors">
                      <td className="px-4 py-3 font-semibold text-foreground">L. Sensitive personal Information</td>
                      <td className="px-4 py-3">
                        Account login information, biometric data and financial information including account access details
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded bg-primary/20 text-primary">YES</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="pt-2">
                We only collect sensitive personal information, as defined by applicable privacy laws or the purposes allowed by law or with your consent. Sensitive personal information may be used, or disclosed to a service provider or contractor, for additional, specified purposes. You may have the right to limit the use or disclosure of your sensitive personal information. We do not collect or process sensitive personal information for the purpose of inferring characteristics about you.
              </p>
              <p>
                We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:
              </p>
              <ul className="pl-6 space-y-2 list-disc marker:text-primary">
                <li>Receiving help through our customer support channels;</li>
                <li>Participation in customer surveys or contests; and</li>
                <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
              </ul>
              <p>
                We will use and retain the collected personal information as needed to provide the Services or for:
              </p>
              <ul className="pl-6 space-y-2 list-disc marker:text-primary">
                <li>Category K - As long as the user has an account with us</li>
                <li>Category L - As long as the user has an account with us</li>
              </ul>

              <div className="space-y-2 border-t border-border/30 pt-6">
                <h3 className="font-semibold text-foreground text-[15px]">Sources of Personal Information</h3>
                <p>
                  Learn more about the sources of personal information we collect in{" "}
                  <a href="#1-what-information-do-we-collect" className="text-primary hover:underline font-semibold">
                    &ldquo;WHAT INFORMATION DO WE COLLECT?&rdquo;
                  </a>
                </p>
              </div>

              <div className="space-y-3 border-t border-border/30 pt-6">
                <h3 className="font-semibold text-foreground text-[15px]">How We Use and Share Personal Information</h3>
                <p>
                  Learn more about how we use your personal information in the section,{" "}
                  <a href="#2-how-do-we-process-your-information" className="text-primary hover:underline font-semibold">
                    &ldquo;HOW DO WE PROCESS YOUR INFORMATION?&rdquo;
                  </a>
                </p>
              </div>

              <div className="space-y-4 border-t border-border/30 pt-6">
                <h3 className="font-semibold text-foreground text-[15px]">Will your information be shared with anyone else?</h3>
                <p>
                  We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section,{" "}
                  <a href="#4-when-and-with-whom-do-we-share-your-personal-information" className="text-primary hover:underline font-semibold">
                    &ldquo;WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?&rdquo;
                  </a>
                </p>
                <p>
                  We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be &ldquo;selling&rdquo; of your personal information.
                </p>
                <p>
                  We have not sold or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We have disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months:
                </p>
                <p>
                  The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under{" "}
                  <a href="#4-when-and-with-whom-do-we-share-your-personal-information" className="text-primary hover:underline font-semibold">
                    &ldquo;WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?&rdquo;
                  </a>
                </p>
              </div>

              <div className="space-y-4 border-t border-border/30 pt-6">
                <h3 className="font-semibold text-foreground text-[15px]">Your Rights</h3>
                <p>
                  You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:
                </p>
                <ul className="pl-6 space-y-2 list-disc marker:text-primary">
                  <li><strong className="text-foreground">Right to know</strong> whether or not we are processing your personal data</li>
                  <li><strong className="text-foreground">Right to access</strong> your personal data</li>
                  <li><strong className="text-foreground">Right to correct</strong> inaccuracies in your personal data</li>
                  <li><strong className="text-foreground">Right to request</strong> the deletion of your personal data</li>
                  <li><strong className="text-foreground">Right to obtain a copy</strong> of the personal data you previously shared with us</li>
                  <li><strong className="text-foreground">Right to non-discrimination</strong> for exercising your rights</li>
                  <li>
                    <strong className="text-foreground">Right to opt out</strong> of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California&apos;s privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects (&ldquo;profiling&rdquo;)
                  </li>
                </ul>

                <p className="pt-2">
                  Depending upon the state where you live, you may also have the following rights:
                </p>
                <ul className="pl-6 space-y-2 list-disc marker:text-primary">
                  <li>Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)</li>
                  <li>Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)</li>
                  <li>Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)</li>
                  <li>Right to obtain a list of third parties to which we have sold personal data (as permitted by applicable law, including the privacy law in Connecticut)</li>
                  <li>Right to review, understand, question, and depending on where you live, correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Connecticut and Minnesota)</li>
                  <li>Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)</li>
                  <li>Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)</li>
                </ul>
              </div>

              <div className="space-y-3 border-t border-border/30 pt-6">
                <h3 className="font-semibold text-foreground text-[15px]">How To Exercise Your Rights</h3>
                <p>
                  To exercise these rights, you can contact us by visiting{" "}
                  <a href="mailto:support@savloapp.com" className="text-primary hover:underline font-mono text-[13px]">
                    mailto:support@savloapp.com
                  </a>
                  , by emailing us at{" "}
                  <a href="mailto:support@savloapp.com" className="text-primary hover:underline">
                    support@savloapp.com
                  </a>
                  , or by referring to the contact details at the bottom of this document.
                </p>
                <p>
                  Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.
                </p>
              </div>

              <div className="space-y-3 border-t border-border/30 pt-6">
                <h3 className="font-semibold text-foreground text-[15px]">Request Verification</h3>
                <p>
                  Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.
                </p>
                <p>
                  If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.
                </p>
              </div>

              <div className="space-y-3 border-t border-border/30 pt-6">
                <h3 className="font-semibold text-foreground text-[15px]">Appeals</h3>
                <p>
                  Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at{" "}
                  <a href="mailto:support@savloapp.com" className="text-primary hover:underline">
                    support@savloapp.com
                  </a>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.
                </p>
              </div>

              <div className="space-y-2 border-t border-border/30 pt-6">
                <h3 className="font-semibold text-foreground text-[15px]">California &ldquo;Shine The Light&rdquo; Law</h3>
                <p>
                  California Civil Code Section 1798.83, also known as the &ldquo;Shine The Light&rdquo; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section{" "}
                  <a href="#15-how-can-you-contact-us-about-this-notice" className="text-primary hover:underline font-semibold uppercase">
                    &ldquo;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&rdquo;
                  </a>.
                </p>
              </div>
            </div>
          </section>

          {/* ── SECTION 14 ── */}
          <section id="14-do-we-make-updates-to-this-notice" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-6 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">
              14. DO WE MAKE UPDATES TO THIS NOTICE?
            </h2>
            <p className="italic text-muted-foreground">
              <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
            </p>

            <div className="space-y-4">
              <p>
                We may update this Privacy Notice from time to time. The updated version will be indicated by an updated &ldquo;Revised&rdquo; date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
              </p>
            </div>
          </section>

          {/* ── SECTION 15 ── */}
          <section id="15-how-can-you-contact-us-about-this-notice" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-6 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">
              15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </h2>

            <div className="space-y-4">
              <p>
                If you have questions or comments about this notice, you may email us at{" "}
                <a href="mailto:support@savloapp.com" className="text-primary hover:text-primary-hover underline transition-colors">
                  support@savloapp.com
                </a>{" "}
                or contact us by post at:
              </p>
              <div className="pl-6 border-l-2 border-primary/20 text-muted-foreground space-y-1 font-mono text-[13px]">
                <p className="font-sans font-semibold text-foreground text-[14px]">Savlo</p>
                <p>Bahia Blanca</p>
                <p>Bahia Blanca, Buenos Aires 8000</p>
                <p>Argentina</p>
              </div>
            </div>
          </section>

          {/* ── SECTION 16 ── */}
          <section id="16-how-can-you-review-update-or-delete-the-data-we-collect-from-you" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-6 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">
              16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
            </h2>

            <div className="space-y-4">
              <p>
                Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please visit:{" "}
                <a href="mailto:support@savloapp.com" className="text-primary hover:underline font-mono text-[13px]">
                  mailto:support@savloapp.com
                </a>.
              </p>
            </div>
          </section>

          {/* Footer note */}
          <div className="border-t border-border/20 pt-8 text-center text-[12px] text-muted-foreground/60">
            This Privacy Policy was created using Termly&apos;s{" "}
            <a href="https://termly.io/products/privacy-policy-generator/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Privacy Policy Generator
            </a>.
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
