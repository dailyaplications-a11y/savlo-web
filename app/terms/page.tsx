import type { Metadata } from "next"
import { SiteHeader } from "@/components/savlo/site-header"
import { SiteFooter } from "@/components/savlo/site-footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service — Savlo",
  description:
    "Read the Terms of Service for Savlo, the AI-powered personal finance mobile application.",
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsPage() {
  const tocItems = [
    { id: "1-our-services", label: "1. OUR SERVICES" },
    { id: "2-intellectual-property-rights", label: "2. INTELLECTUAL PROPERTY RIGHTS" },
    { id: "3-user-representations", label: "3. USER REPRESENTATIONS" },
    { id: "4-user-registration", label: "4. USER REGISTRATION" },
    { id: "5-purchases-and-payment", label: "5. PURCHASES AND PAYMENT" },
    { id: "6-subscriptions", label: "6. SUBSCRIPTIONS" },
    { id: "7-software", label: "7. SOFTWARE" },
    { id: "8-prohibited-activities", label: "8. PROHIBITED ACTIVITIES" },
    { id: "9-user-generated-contributions", label: "9. USER-GENERATED CONTRIBUTIONS" },
    { id: "10-contribution-license", label: "10. CONTRIBUTION LICENSE" },
    { id: "11-mobile-application-license", label: "11. MOBILE APPLICATION LICENSE" },
    { id: "12-third-party-websites-and-content", label: "12. THIRD-PARTY WEBSITES AND CONTENT" },
    { id: "13-services-management", label: "13. SERVICES MANAGEMENT" },
    { id: "14-privacy-policy", label: "14. PRIVACY POLICY" },
    { id: "15-term-and-termination", label: "15. TERM AND TERMINATION" },
    { id: "16-modifications-and-interruptions", label: "16. MODIFICATIONS AND INTERRUPTIONS" },
    { id: "17-governing-law", label: "17. GOVERNING LAW" },
    { id: "18-dispute-resolution", label: "18. DISPUTE RESOLUTION" },
    { id: "19-corrections", label: "19. CORRECTIONS" },
    { id: "20-disclaimer", label: "20. DISCLAIMER" },
    { id: "21-limitation-of-liability", label: "21. LIMITATION OF LIABILITY" },
    { id: "22-indemnification", label: "22. INDEMNIFICATION" },
    { id: "23-user-data", label: "23. USER DATA" },
    { id: "24-communications-transactions-and-signatures", label: "24. COMMUNICATIONS, TRANSACTIONS, AND ELECTRONIC SIGNATURES" },
    { id: "25-california-users-and-residents", label: "25. CALIFORNIA USERS AND RESIDENTS" },
    { id: "26-miscellaneous", label: "26. MISCELLANEOUS" },
    { id: "27-user-financial-decisions", label: "27. USER FINANCIAL DECISIONS" },
    { id: "28-contact-us", label: "28. CONTACT US" },
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
            <li className="text-foreground/80">Terms of Service</li>
          </ol>
        </nav>

        {/* Top Header */}
        <header className="border-b border-border/60 pb-10">
          <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl uppercase">
            TERMS OF SERVICE
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated May 24, 2026
          </p>
        </header>

        {/* Document Body */}
        <div className="mt-10 space-y-10 leading-relaxed text-muted-foreground">
          {/* Aceptación */}
          <section className="space-y-5 text-[15px] text-foreground/90">
            <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground uppercase">
              ACCEPTANCE OF OUR LEGAL TERMS
            </h2>
            <p>
              We are Savlo (&ldquo;<strong>Company</strong>,&rdquo; &ldquo;<strong>we</strong>,&rdquo; &ldquo;<strong>us</strong>,&rdquo; or &ldquo;<strong>our</strong>&rdquo;), a company registered in Argentina, located in Bahía Blanca, Buenos Aires 8000.
            </p>
            <p>
              We operate the Savlo mobile application (the &ldquo;<strong>Application</strong>&rdquo;), as well as any other related product or service that references or links to these legal terms (the &ldquo;<strong>Legal Terms</strong>&rdquo;) (collectively, the &ldquo;<strong>Services</strong>&rdquo;).
            </p>
            <p>
              Savlo is a personal finance application that helps users track and manage their expenses and income, set savings goals, and gain valuable AI-powered insights about their spending habits.
            </p>
            <p>
              You can contact us by email at{" "}
              <a href="mailto:support@savloapp.com" className="text-primary hover:text-primary-hover underline transition-colors">
                support@savloapp.com
              </a>{" "}or by mail to Bahía Blanca, Buenos Aires 8000, Argentina.
            </p>
            <p>
              These Legal Terms constitute a legally binding agreement entered into between you, either individually or on behalf of an entity (&ldquo;<strong>you</strong>&rdquo;), and Savlo, concerning your access to and use of the Services. By accessing them, you agree that you have read, understood, and commit to comply with all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND MUST DISCONTINUE YOUR USE IMMEDIATELY.
            </p>
            <p>
              The terms and conditions or supplementary documents that may be published on the Services from time to time are expressly incorporated into this document by reference. We reserve the right, at our sole discretion, to make changes or modifications to these Legal Terms. We will notify you of any changes by updating the date of &ldquo;Last updated.&rdquo; By continuing to use the Services after the date these revised Legal Terms are posted, you waive any right to receive specific notice of each change. It is your responsibility to review these Legal Terms periodically to stay informed of updates.
            </p>
            <p>
              The Services are intended for users over the age of 18. Individuals under 18 years of age are not authorized to use or register for the Services.
            </p>
            <p>We recommend that you print a copy of these Legal Terms for your records.</p>
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

          {/* ── 1 ── */}
          <section id="1-our-services" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">1. OUR SERVICES</h2>
            <p>
              The information provided when using the Services is not intended to be distributed or used by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulations, or would subject us to any registration requirement in such jurisdiction or country. Accordingly, those who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if applicable.
            </p>
            <p>
              The Services are not designed to comply with industry-specific regulations (Health Insurance Portability and Accountability Act [HIPAA], Federal Information Security Management Act [FISMA], etc.), so if your interactions are subject to such laws, you may not use the Services. You also may not use the Services in a manner that violates the Gramm-Leach-Bliley Act (GLBA).
            </p>
          </section>

          {/* ── 2 ── */}
          <section id="2-intellectual-property-rights" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">2. INTELLECTUAL PROPERTY RIGHTS</h2>

            <h3 className="font-semibold text-foreground text-[15px]">Our intellectual property</h3>
            <p>
              We own or license all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the &ldquo;Content&rdquo;), as well as the trademarks, service marks, and logos contained therein (the &ldquo;Marks&rdquo;).
            </p>
            <p>
              Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property and unfair competition laws) and treaties in the United States and around the world.
            </p>
            <p>
              The Content and Marks are provided on or through the Services &ldquo;AS IS&rdquo; for your personal and non-commercial use only.
            </p>

            <h3 className="font-semibold text-foreground text-[15px] pt-2">Your use of our Services</h3>
            <p>
              Subject to your compliance with these Legal Terms, including the section{" "}
              <a href="#8-prohibited-activities" className="text-primary hover:underline font-semibold uppercase">&ldquo;PROHIBITED ACTIVITIES&rdquo;</a>{" "}below, we grant you a non-exclusive, nontransferable, and revocable license to:
            </p>
            <ul className="pl-6 space-y-2 list-disc marker:text-primary">
              <li>access the Services; and</li>
              <li>download or print a copy of any portion of the Content to which you have properly accessed,</li>
            </ul>
            <p>solely for your personal and non-commercial use.</p>
            <p>
              Except as expressly set out in this section or any other part of our Legal Terms, no part of the Services, Content, or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or exploited for any commercial purpose whatsoever, without our prior express written authorization.
            </p>
            <p>
              If you wish to use the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please direct your request to:{" "}
              <a href="mailto:support@savloapp.com" className="text-primary hover:text-primary-hover underline transition-colors">support@savloapp.com</a>. If we ever grant you permission to publish, reproduce, or publicly display any portion of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible when you publish, reproduce, or display our Content.
            </p>
            <p>We reserve all rights not expressly granted to you with respect to the Services, Content, and Marks.</p>
            <p>Any violation of these Intellectual Property Rights will constitute a serious violation of our Legal Terms and your right to use our Services will terminate immediately.</p>

            <h3 className="font-semibold text-foreground text-[15px] pt-2">Your submissions</h3>
            <p>
              Please review this section and the section{" "}
              <a href="#8-prohibited-activities" className="text-primary hover:underline font-semibold uppercase">&ldquo;PROHIBITED ACTIVITIES&rdquo;</a>{" "}carefully before using our Services to understand (a) the rights you give us and (b) your obligations when you post or upload any content through the Services.
            </p>
            <p>
              <strong className="text-foreground">Submissions:</strong> By sending us directly any question, comment, suggestion, idea, feedback, or other information about the Services (&ldquo;Submissions&rdquo;), by submitting this material, you agree to transfer all intellectual property rights to us. You also agree that we will own this material and will have the right to its unrestricted use and dissemination for any lawful, commercial, or other purpose, without the need for recognition or compensation.
            </p>
            <p>
              <strong className="text-foreground">You are responsible for what you post or upload:</strong> By sending us Submissions through any part of the Services, you:
            </p>
            <ul className="pl-6 space-y-2 list-disc marker:text-primary">
              <li>Confirm that you have read and accept our terms and conditions (&ldquo;PROHIBITED ACTIVITIES&rdquo;) and will not post, send, disclose, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, intimidating, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, misleading, or deceptive;</li>
              <li>to the extent permitted by applicable law, waive all moral rights to any such Submission;</li>
              <li>warrant that any such submission is original to you or that you have the necessary rights and licenses to submit such submissions and that you have full authority to grant us the rights mentioned above with respect to your Submissions; and</li>
              <li>warrant and represent that your Submissions do not constitute confidential information.</li>
            </ul>
            <p>
              You are solely responsible for your Submissions, and you expressly agree to indemnify us for any and all losses we may incur due to your breach of (a) this section, (b) any intellectual property rights of any third party, or (c) applicable law.
            </p>
          </section>

          {/* ── 3 ── */}
          <section id="3-user-representations" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">3. USER REPRESENTATIONS</h2>
            <p>
              By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Services through automated or non-human means, whether through a bot, script, or otherwise; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation.
            </p>
            <p>
              If you provide any information that is false, inaccurate, outdated, or incomplete, we have the right to suspend or cancel your account and to refuse any present or future use of the Services (or any portion thereof).
            </p>
          </section>

          {/* ── 4 ── */}
          <section id="4-user-registration" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">4. USER REGISTRATION</h2>
            <p>
              You may need to register to use the Services. You commit to maintaining the confidentiality of your password and will be responsible for all use of your account and password. We reserve the right to delete, recover, or change the username you select if, at our sole discretion, we consider that such username is inappropriate, obscene, or objectionable in any way.
            </p>
          </section>

          {/* ── 5 ── */}
          <section id="5-purchases-and-payment" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">5. PURCHASES AND PAYMENT</h2>
            <p>We accept the following forms of payment:</p>
            <ul className="pl-6 space-y-2 list-disc marker:text-primary">
              <li>Google Play Store / Apple App Store</li>
            </ul>
            <p>
              You agree to provide current, complete, and accurate purchase and account information for all purchases made through the Services. You also agree to promptly update account and payment information, including email address, payment method, and credit card expiration date, so we can complete your transactions and contact you when necessary. Sales tax will be added to the purchase price as we deem necessary. We may change prices at any time. All payments will be made in U.S. dollars.
            </p>
            <p>
              You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge such amounts to your selected payment provider when you place your order. We reserve the right to correct any pricing errors, even if we have already requested or received payment.
            </p>
            <p>
              We reserve the right to refuse any order placed through the Services. We may, at our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, at our sole discretion, appear to be placed by merchants, resellers, or distributors.
            </p>
          </section>

          {/* ── 6 ── */}
          <section id="6-subscriptions" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">6. SUBSCRIPTIONS</h2>

            <h3 className="font-semibold text-foreground text-[15px]">Billing and Renewal</h3>
            <p>
              Your subscription will continue and renew automatically unless canceled. You agree that we may charge your payment method on a recurring basis without requiring your prior approval for each recurring charge, until you cancel the corresponding order. The length of your billing cycle will depend on the type of subscription plan you choose when you subscribe to the Services.
            </p>

            <h3 className="font-semibold text-foreground text-[15px] pt-2">Free Trial</h3>
            <p>
              We offer a 14-day free trial for new users who register for the Services. Charges to your account will be made in accordance with the subscription chosen by the user at the end of the free trial period.
            </p>

            <h3 className="font-semibold text-foreground text-[15px] pt-2">Cancellation</h3>
            <p>
              You can cancel your subscription at any time by logging into your account. Your cancellation will take effect at the end of your current paid period. If you have any questions or are not satisfied with our Services, please email us at{" "}
              <a href="mailto:support@savloapp.com" className="text-primary hover:text-primary-hover underline transition-colors">support@savloapp.com</a>.
            </p>

            <h3 className="font-semibold text-foreground text-[15px] pt-2">Changes in Fees</h3>
            <p>
              Occasionally, we may modify the subscription fee and will communicate any price changes in accordance with applicable law.
            </p>
          </section>

          {/* ── 7 ── */}
          <section id="7-software" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">7. SOFTWARE</h2>
            <p>
              We may include software for use in connection with our Services. If such software is accompanied by an end-user license agreement (&ldquo;EULA&rdquo;), the terms of the EULA will govern your use of the software. If such software is not accompanied by an EULA, then we grant you a non-exclusive, revocable, personal, and nontransferable license to use such software solely in connection with our services and in compliance with these Legal Terms. Any software and any related documentation is provided &ldquo;AS IS&rdquo; without any warranty of any kind, either express or implied, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. You accept all and any risks arising from the use or operation of any software. You may not reproduce or redistribute any software except in compliance with the EULA or these Legal Terms.
            </p>
          </section>

          {/* ── 8 ── */}
          <section id="8-prohibited-activities" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">8. PROHIBITED ACTIVITIES</h2>
            <p>
              You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavor except those specifically endorsed or approved by us.
            </p>
            <p>As a user of the Services, you agree not to:</p>
            <ul className="pl-6 space-y-2 list-disc marker:text-primary">
              <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without our written permission.</li>
              <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
              <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
              <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
              <li>Misuse our support services or submit false reports of abuse or misconduct.</li>
              <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
              <li>Engage in unauthorized framing of or linking to the Services.</li>
              <li>Upload or transmit (or attempt to upload or transmit) viruses, Trojan horses or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party&apos;s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
              <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
              <li>Delete the copyright or other proprietary rights notice from any Content.</li>
              <li>Attempt to impersonate another user or person or use the username of another user.</li>
              <li>Upload or transmit (or attempt to upload or transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation clear graphics interchange formats (&ldquo;gifs&rdquo;), 1x1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as &ldquo;spyware&rdquo; or &ldquo;passive collection mechanisms&rdquo; or &ldquo;PCMs&rdquo;).</li>
              <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
              <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
              <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
              <li>Copy or adapt the Services&apos; software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
              <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any software comprising or in any way making up a part of the Services or that in any manner integrates it.</li>
              <li>Except as the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</li>
              <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
              <li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
              <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
              <li>Sell or otherwise transfer your profile.</li>
            </ul>
          </section>

          {/* ── 9 ── */}
          <section id="9-user-generated-contributions" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">9. USER-GENERATED CONTRIBUTIONS</h2>
            <p>
              The Service does not offer users the possibility to submit or publish content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions or personal information or other material (collectively, &ldquo;Contributions&rdquo;). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Services&rsquo; Privacy Policy. When you create or make any Contribution available, you represent and warrant that:
            </p>
            <ul className="pl-6 space-y-2 list-disc marker:text-primary">
              <li>The creation, distribution, transmission, public display or performance, and the accessing, downloading or copying of your Contributions, do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret or moral rights of any third party.</li>
              <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases and permissions to use and to authorize us, the Services and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
              <li>You have the written consent, authorization and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
              <li>Your Contributions are not false, inaccurate or misleading.</li>
              <li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings or other forms of solicitation.</li>
              <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent or harassing and do not otherwise violate general standards of acceptability or decency.</li>
              <li>Your Contributions do not ridicule, mock, disparage, intimidate or abuse anyone.</li>
              <li>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a particular person or class of people.</li>
              <li>Your Contributions do not violate any applicable law, regulation or rule.</li>
              <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
              <li>Your Contributions do not violate any applicable law concerning child pornography or otherwise intended to protect the health or well-being of minors.</li>
              <li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference or physical handicap.</li>
              <li>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms or any applicable law or regulation.</li>
            </ul>
            <p>
              Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.
            </p>
          </section>

          {/* ── 10 ── */}
          <section id="10-contribution-license" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">10. CONTRIBUTION LICENSE</h2>
            <p>
              You and the Services agree that we may access, store, process and use any information and personal data that you provide in accordance with the terms of the Privacy Policy and your choices (including settings).
            </p>
            <p>
              By submitting suggestions or other feedback regarding the Services, you agree that we may use and share such feedback for any purpose without any obligation to you or compensation.
            </p>
            <p>
              We do not claim ownership of your Contributions. You retain full ownership of all your Contributions and any intellectual property rights or other proprietary rights associated with them. We are not responsible for any statements or representations you provide in your Contributions in any area of the Services. You are solely responsible for your Contributions to the Services and you expressly agree to indemnify us from any and all losses we may suffer due to your breach of (a) this section, (b) any intellectual property rights of any third party, or (c) applicable law.
            </p>
          </section>

          {/* ── 11 ── */}
          <section id="11-licencia-de-aplicacion-movil" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">11. LICENCIA DE APLICACIÓN MÓVIL</h2>

            <h3 className="font-semibold text-foreground text-[15px]">Usar Licencia</h3>
            <p>
              Si accede a los Servicios a través de la Aplicación, le otorgamos un derecho revocable, no exclusivo, intransferible y limitado para instalar y usar la Aplicación en dispositivos electrónicos inalámbricos de su propiedad o bajo su control, y para acceder y usar la Aplicación en dichos dispositivos estrictamente de acuerdo con los términos y condiciones de esta licencia de aplicación móvil contenido en estos Términos Legales. Usted no deberá: (1) excepto según lo permita la ley aplicable, descompilar, aplicar ingeniería inversa, desensamblar, intentar derivar el código fuente de, o descifrar la Aplicación; (2) realizar ninguna modificación, adaptación, mejora, optimización, traducción u obra derivada de la Aplicación; (3) violar ninguna ley, norma o reglamento aplicable en relación con su acceso o uso de la Aplicación; (4) eliminar, alterar u ocultar ningún aviso de propiedad (incluido cualquier aviso de derechos de autor o marca registrada) publicado por nosotros o los licenciantes de la Aplicación; (5) utilizar la Aplicación para ninguna actividad generadora de ingresos, empresa comercial u otro propósito para el que no está diseñado o previsto; (6) poner la Aplicación a disposición a través de una red u otro entorno que permita el acceso o uso por parte de múltiples dispositivos o usuarios al mismo tiempo; (7) usar la Aplicación para crear un producto, servicio o software que sea, directa o indirectamente, competitivo con o de alguna manera un sustituto de la Aplicación; (8) usar la Aplicación para enviar consultas automatizadas a cualquier sitio web o para enviar cualquier correo electrónico comercial no solicitado; o (9) usar cualquier información de propiedad exclusiva o cualquiera de nuestras interfaces u otra propiedad intelectual nuestra en el diseño, desarrollo, fabricación, licencia o distribución de cualquier aplicación, accesorio o dispositivo para usar con la Aplicación.
            </p>

            <h3 className="font-semibold text-foreground text-[15px] pt-2">Dispositivos Apple y Android</h3>
            <p>
              Los siguientes términos se aplican cuando usted utiliza la aplicación obtenida de Apple Store o Google Play (cada una de ellas, una &ldquo;aplicación&rdquo; y un &ldquo;Distribuidor de aplicaciones&rdquo;) para acceder a los Servicios: (1) la licencia: el derecho que se le otorga para nuestra aplicación está limitado a un uso no transferible para usar la aplicación en un dispositivo que utilice los sistemas operativos Apple iOS o Android, según corresponda, y de conformidad con las reglas de uso establecidas en los términos de servicio del Distribuidor de la aplicación correspondiente; (2) somos responsables de proporcionar cualquier servicio de mantenimiento y soporte con respecto a la aplicación según lo especificado en los términos y condiciones de esta aplicación móvil de licencia contenido en estos Términos Legales o según lo exija la ley aplicable, y usted reconoce que cada Distribuidor de Aplicaciones no tiene ninguna obligación de proporcionar ningún servicio de mantenimiento y soporte con respecto a la Aplicación; (3) en caso de que la Aplicación no cumpla con ninguna garantía aplicable, usted puede notificar al Distribuidor de Aplicaciones correspondiente, y el Distribuidor de Aplicaciones, de acuerdo con sus términos y políticas, puede reembolsar el precio de compra, si lo hubiere, pagado por la Aplicación, y en la máxima medida permitida por la ley aplicable, el Distribuidor de Aplicaciones no tendrá ninguna otra obligación de garantía con respecto a la Aplicación; (4) usted declara y garantiza que (i) no se encuentra en un país sujeto a un embargo del gobierno de los EE. UU., o que haya sido designado por el gobierno de los EE. UU. como &ldquo;apoyo al terrorismo&rdquo; país y (ii) usted no figura en ninguna lista del gobierno de EE. UU. de personas o entidades prohibidas o restringidas; (5) debe cumplir con los términos de acuerdo de terceros aplicables al usar la aplicación, por ejemplo, si tiene una aplicación VoIP, no debe infringir su contrato de servicio de datos inalámbricos al usar la aplicación; y (6) usted reconoce y acepta que los distribuidores de la aplicación son beneficiarios terceros de los términos y condiciones de esta aplicación móvil de licencia contenidos en estos Términos Legales, y que cada Distribuidor de la Aplicación tendrá el derecho (y se considerará que ha aceptado el derecho) de hacer cumplir los términos y condiciones en esta aplicación móvil de licencia contenido en estos Términos Legales en su contra como beneficiario tercero de los mismos.
            </p>
          </section>

          {/* ── 12 ── */}
          <section id="12-sitios-web-y-contenido-de-terceros" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">12. SITIOS WEB Y CONTENIDO DE TERCEROS</h2>
            <p>
              Los Servicios pueden contener (o se le pueden enviar a través de la Aplicación) enlaces a otros sitios web (&ldquo;Sitios web de terceros&rdquo;) así como artículos, fotografías, texto, gráficos, imágenes, diseños, música, sonido, video, información, aplicaciones, software y otros contenidos o elementos pertenecientes a terceros o procedentes de ellos (&ldquo;Contenido de terceros&rdquo;). Dichos sitios web y contenido de terceros no son investigados, monitoreados ni verificados por nosotros en cuanto a su exactitud, idoneidad o integridad, y no somos responsables de ningún sitio web de terceros al que se acceda a través de los Servicios ni de ningún contenido de terceros publicado, disponible o instalado desde los Servicios, incluyendo el contenido, la exactitud, el carácter ofensivo, las opiniones, la fiabilidad, las prácticas de privacidad u otras políticas de los sitios web o el contenido de terceros. La inclusión, el enlace o la autorización del uso o la instalación de cualquier sitio web o contenido de terceros no implica nuestra aprobación o respaldo. Si decide abandonar los Servicios y acceder a sitios web de terceros o utilizar o instalar contenido de terceros, lo hace bajo su propio riesgo, y debe tener en cuenta que estos Términos Legales ya no rigen. Debe revisar los términos y políticas aplicables, incluyendo las prácticas de privacidad y recopilación de datos, de cualquier sitio web al que acceda desde los Servicios o en relación con cualquier aplicación que utilice o instale desde los Servicios. Las compras que realice a través de sitios web de terceros se gestionarán mediante dichos sitios web y a través de otras empresas, y no asumimos ninguna responsabilidad al respecto, ya que dichas compras son exclusivamente entre usted y el tercero correspondiente. Usted acepta y reconoce que no respaldamos los productos o servicios ofrecidos en sitios web de terceros y nos exime de toda responsabilidad por cualquier daño causado por la compra de dichos productos o servicios. Asimismo, nos exime de toda responsabilidad por cualquier pérdida o daño que usted sufra en relación con el contenido de terceros o con cualquier contacto con sitios web de terceros.
            </p>
          </section>

          {/* ── 13 ── */}
          <section id="13-services-management" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">13. SERVICES MANAGEMENT</h2>
            <p>
              We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or that are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
            </p>
          </section>

          {/* ── 14 ── */}
          <section id="14-privacy-policy" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">14. PRIVACY POLICY</h2>
            <p>
              We care about data privacy and security. Please review our{" "}
              <Link href="/privacy" className="text-primary hover:text-primary-hover underline transition-colors">Privacy Policy</Link>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be aware that the Services are hosted in the United States. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from the laws applicable in the United States, then through your continued use of the Services, you are transferring your data to the United States and you expressly consent to have your data transferred to and processed in the United States.
            </p>
          </section>

          {/* ── 15 ── */}
          <section id="15-term-and-termination" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">15. TERM AND TERMINATION</h2>
            <p>
              These Legal Terms will remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES) TO ANY PERSON FOR ANY REASON OR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, AT OUR SOLE DISCRETION.
            </p>
            <p>
              If we cancel or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to canceling or suspending your account, we reserve the right to take appropriate legal action, including without limitation civil, criminal and injunctive redress.
            </p>
          </section>

          {/* ── 16 ── */}
          <section id="16-modifications-and-interruptions" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">16. MODIFICATIONS AND INTERRUPTIONS</h2>
            <p>
              We reserve the right to change, modify, or remove the contents of the Services at any time and for any reason at our sole discretion and without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, change of price, suspension, or interruption of the Services.
            </p>
            <p>
              We cannot guarantee that the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, which may result in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, interrupt, or modify the Services at any time and for any reason without prior notice. You agree that we have no liability whatsoever for any loss, damage or inconvenience caused by your inability to access or use the Services during any downtime or interruption of the Services. Nothing in these Legal Terms will be construed as an obligation on our part to maintain and provide support for the Services, or to provide any corrections, updates or new versions of them.
          </section>

          {/* ── 17 ── */}
          <section id="17-governing-law" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">17. GOVERNING LAW</h2>
            <p>
              These Legal Terms shall be governed by and defined following the laws of Argentina. Savlo and you irrevocably consent that the courts of Argentina shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
            </p>
          </section>

          {/* ── 18 ── */}
          <section id="18-dispute-resolution" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">18. DISPUTE RESOLUTION</h2>

            <h3 className="font-semibold text-foreground text-[15px]">Informal Negotiations</h3>
            <p>
              To expedite resolution and control the cost of any dispute, controversy or claim related to these Legal Terms (each a "Dispute" and, collectively, the "Disputes") brought by you or us (individually, a "Party" and, collectively, the "Parties"), the Parties agree to attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice of a Party to the other.
            </p>

            <h3 className="font-semibold text-foreground text-[15px] pt-2">Binding Arbitration</h3>
            <p>
              Any dispute arising out of or in connection with these Legal Terms, including any question regarding its existence, validity or termination, shall be submitted and finally resolved by international commercial arbitration administered by the International Commercial Arbitration Court of the European Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) in accordance with the Rules of that Court, which, as a result of the reference thereto, is considered to be an integral part of this clause. The number of arbitrators shall be one (1). The seat, or judicial seat, or place of arbitration shall be Bahía Blanca, Argentina. The language of the proceedings shall be English. The law that will be applied in these Legal Terms shall be the substantive law of Argentina.
            </p>

            <h3 className="font-semibold text-foreground text-[15px] pt-2">Restrictions</h3>
            <p>
              The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the maximum extent permitted by law, (a) no arbitration shall be combined with any other proceeding; (b) there is no right or authority for any Dispute to be submitted to arbitration on a class action basis or to use class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
            </p>

            <h3 className="font-semibold text-foreground text-[15px] pt-2">Exceptions to Informal Negotiations and Binding Arbitration</h3>
            <p>
              The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations and binding arbitration: (a) any Dispute seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising out of, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither of the Parties will opt to arbitrate any Dispute that falls within the portion of this provision found to be illegal or unenforceable, and such Dispute shall be decided by a court of competent jurisdiction within the courts listed above, and the Parties agree to submit to the personal jurisdiction of that court.
            </p>
          </section>

          {/* ── 19 ── */}
          <section id="19-corrections" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">19. CORRECTIONS</h2>
            <p>
              There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and other diverse information. We reserve the right to correct any error, inaccuracy, or omission and to change or update the information on the Services at any time without prior notice.
            </p>
          </section>

          {/* ── 20 ── */}
          <section id="20-disclaimer" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">20. DESCARGO DE RESPONSABILIDAD</h2>
            <p>
              LOS SERVICIOS SE PROPORCIONAN &laquo;TAL CUAL&raquo; Y &laquo;SEGÚN DISPONIBILIDAD&raquo;. USTED ACEPTA QUE EL USO DE LOS SERVICIOS SERÁ BAJO SU PROPIO RIESGO. EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY, RENUNCIAMOS A TODAS LAS GARANTÍAS, EXPRESAS O IMPLÍCITAS, EN RELACIÓN CON LOS SERVICIOS Y SU USO, INCLUIDAS, ENTRE OTRAS, LAS GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN PARTICULAR Y NO VIOLACIÓN DE DERECHOS. NO OFRECEMOS GARANTÍAS NI DECLARACIONES SOBRE LA EXACTITUD O INTEGRIDAD DEL CONTENIDO DE LOS SERVICIOS NI DEL CONTENIDO DE NINGÚN SITIO WEB O APLICACIÓN MÓVIL VINCULADA A LOS SERVICIOS, Y NO ASUMIREMOS NINGUNA RESPONSABILIDAD POR (1) ERRORES, EQUIVOCACIONES O INEXACTITUDES DEL CONTENIDO Y LOS MATERIALES, (2) LESIONES PERSONALES O DAÑOS A LA PROPIEDAD, DE CUALQUIER NATURALEZA, QUE RESULTEN DE SU ACCESO Y USO DE LOS SERVICIOS, (3) CUALQUIER NO AUTORIZADO ACCESO O USO DE NUESTROS SERVIDORES SEGUROS Y/O CUALQUIER INFORMACIÓN PERSONAL Y/O INFORMACIÓN FINANCIERA ALMACENADA EN ELLOS, (4) CUALQUIER INTERRUPCIÓN O CESE DE LA TRANSMISIÓN HACIA O DESDE LOS SERVICIOS, (5) CUALQUIER ERROR, VIRUS, CABALLO DE TROYA O SIMILAR QUE PUEDA SER TRANSMITIDO A TRAVÉS DE LOS SERVICIOS POR CUALQUIER TERCERO, Y/O (6) CUALQUIER ERROR U OMISIÓN EN CUALQUIER CONTENIDO Y MATERIAL O POR CUALQUIER PÉRDIDA O DAÑO DE CUALQUIER TIPO INCURRIDO COMO RESULTADO DEL USO DE CUALQUIER CONTENIDO PUBLICADO, TRANSMITIDO O PUESTO A DISPOSICIÓN DE OTRO MODO A TRAVÉS DE LOS SERVICIOS. NO GARANTIZAMOS, RESPALDAMOS, ASEGURAMOS NI ASUMIMOS RESPONSABILIDAD ALGUNA POR NINGÚN PRODUCTO O SERVICIO ANUNCIADO U OFRECIDO POR UN TERCERO A TRAVÉS DE LOS SERVICIOS, NINGÚN SITIO WEB CON HIPERVÍNCULOS, NI NINGÚN SITIO WEB O APLICACIÓN MÓVIL PRESENTADA EN NINGÚN BANNER U OTRO ANUNCIO, Y NO SEREMOS PARTE NI RESPONSABLES DE NINGUNA MANERA DE MONITOREAR NINGUNA TRANSACCIÓN ENTRE USTED Y CUALQUIER PROVEEDOR TERCERO DE PRODUCTOS O SERVICIOS. AL IGUAL QUE CON LA COMPRA DE UN PRODUCTO O SERVICIO A TRAVÉS DE CUALQUIER MEDIO O EN CUALQUIER ENTORNO, USTED DEBE USAR SU MEJOR JUICIO Y TOME PRECAUCIONES CUANDO CORRESPONDA.
            </p>
          </section>

          {/* ── 21 ── */}
          <section id="21-limitation-of-liability" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">21. LIMITATION OF LIABILITY</h2>
            <p>
              IN NO EVENT SHALL WE OR OUR DIRECTORS, EMPLOYEES OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOST DATA OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
            </p>
          </section>

          {/* ── 22 ── */}
          <section id="22-indemnification" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">22. INDEMNIFICATION</h2>
            <p>
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates and all of our respective officers, agents, partners and employees, from and against any loss, damage, liability, claim or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will make reasonable efforts to notify you of any such claim, action or proceeding subject to this indemnification as soon as we become aware of it.
            </p>
          </section>

          {/* ── 23 ── */}
          <section id="23-user-data" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">23. USER DATA</h2>
            <p>
              We will maintain certain data that you transmit to the Services for the purpose of managing performance of the Services, as well as data relating to your use of the Services. Although we perform regular backups, you are the sole responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall not be liable to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any loss or corruption of such data.
            </p>
          </section>

          {/* ── 24 ── */}
          <section id="24-communications-transactions-and-signatures" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">24. COMMUNICATIONS, TRANSACTIONS, AND ELECTRONIC SIGNATURES</h2>
            <p>
              Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications and you agree that all agreements, notices, disclosures, and other communications that we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR BY YOU THROUGH THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or payment or the granting of credit by other than electronic means.
            </p>
          </section>

          {/* ── 25 ── */}
          <section id="25-california-users-and-residents" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">25. CALIFORNIA USERS AND RESIDENTS</h2>
            <p>
              If any complaint with us is not resolved satisfactorily, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
            </p>
          </section>

          {/* ── 26 ── */}
          <section id="26-miscellaneous" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">26. MISCELLANEOUS</h2>
            <p>
              These Legal Terms and any policies or operating rules posted by us on the Services or with respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms does not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
            </p>
          </section>

          {/* ── 27 ── */}
          <section id="27-user-financial-decisions" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">27. USER FINANCIAL DECISIONS</h2>
            <p>
              The company is not responsible for the financial decisions that users make based on information provided by the application, including predictions generated by artificial intelligence. The application is a personal budget management tool and does not constitute financial advice.
            </p>
          </section>

          {/* ── 28 ── */}
          <section id="28-contact-us" className="border-t border-border/40 pt-10 scroll-mt-24 space-y-4 text-[14px]">
            <h2 className="font-serif text-xl font-semibold text-foreground uppercase">28. CONTACT US</h2>
            <p>
              To resolve a complaint regarding the Services or to receive further information about use of the Services, please contact us at:
            </p>
            <address className="not-italic text-foreground/90 leading-relaxed">
              Savlo<br />
              Bahía Blanca<br />
              Bahía Blanca, Buenos Aires 8000<br />
              Argentina<br />
              <a href="mailto:support@savloapp.com" className="text-primary hover:text-primary-hover underline transition-colors">
                support@savloapp.com
              </a>
            </address>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
