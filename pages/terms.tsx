import Link from "next/link"
import { useState } from "react";

//terms and conditions page
export default function Terms() {
    const [read, setRead] = useState(false);

    //set read to true if user has scrolled to the bottom of element
    const handleScroll = (e: React.UIEvent<HTMLParagraphElement, UIEvent>) => {
        if (!read && e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight) {
            setRead(true);
        }
    }

    return (
        <div className="w-screen h-screen bg-blue-100">
            <main className="container w-min h-4/5 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg flex flex-col gap-3 items-center mt-24">
                    <h1 className="text-3xl font-bold text-center whitespace-nowrap px-24">
                        Terms and Conditions
                    </h1>
                    <p onScroll={e => handleScroll(e)} className="text-xs h-96 overflow-y-scroll border-y-2 py-2">
                    Sahara Prime offers technologies and products that offer access to the latest fashion trends, enabling the growth of communities.

Please read these Terms of Use (these "Terms") carefully as they govern your use of (which includes access to) Sahara Prime's personalized products and services, including all of our websites that incorporate or link to these Terms (collectively, the "Sahara Prime Service") and any material that is made available through the Sahara Prime Service (the "Content").

Use of the Sahara Prime Service may be subject to additional terms and conditions presented by Sahara Prime, which are hereby incorporated by this reference into these Terms.

By signing up for, or otherwise using, the Sahara Prime Service, you agree to these Terms. If you do not agree to these Terms, then you must not use the Sahara Prime Service or access any Content.

Service Provider: These Terms are between you and Sahara Prime USA Inc.

These Terms Contain A Mandatory Arbitration Provision That, As Further Set Forth In Section 6 Below, Requires The Use Of Arbitration On An Individual Basis To Resolve Disputes, Rather Than Jury Trials Or Any Other Court Proceedings, Or Class Actions Of Any Kind.

Age And Eligibility Requirements: By Using The Sahara Prime Service, You Affirm That You Are 18 Years Or Older To Enter Into These Terms, Or, If You Are Not, That You Are 13 Years Or Older And Have Obtained Parental Or Guardian Consent To Enter Into These Terms. Additionally, In Order To Use The Sahara Prime Service And Access Any Content, You Represent That: Any Registration And Account Information That You Submit To Sahara Prime Is True, Accurate, And Complete, And You Agree To Keep It That Way At All Times.

We engage in research to develop, test, and improve our Products. This includes analyzing the data we have about our users and understanding how people use our Products, for example by conducting surveys and testing and troubleshooting new features. Our Data Policy explains how we use data to support this research for the purposes of developing and improving our services.
Provide consistent and seamless experiences across the Sahara Prime Company Products:
Our Products help you find and connect with people, groups, businesses, organizations, and others that are important to you. We design our systems so that your experience is consistent and seamless across the different Sahara Prime Company Products that you use.

To operate our global service, we need to store and distribute content and data in our data centers and systems around the world, including outside your country of residence. This infrastructure may be operated or controlled by Sahara Prime Platforms, Inc or its affiliates.


Our Data Policy explains how we collect and use your personal data to determine some of the ads you see and provide all of the other services described below. You can also go to your settings at any time to review the privacy choices you have about how we use your data.

We don’t sell your contact information and personally identifiable information to advertisers if you revoke your consent via our customer service provider. Businesses and organizations pay us to show you ads for their products and services. By using our Products, you agree that we can show you ads that we think will be relevant to you and your interests. We use your personal data to help determine which ads to show you. Advertisers can tell us things like the kind of audience they want to see their ads, and we show those ads to people who may be interested. We provide advertisers with reports about the performance of their ads that help them understand how people are interacting with their content.  We may also offer special promotional plans, memberships, or services, including offerings of third-party products and services. We are not responsible for the products and services provided by such third parties.

Third-Party applications, devices and open source software
The Sahara Prime Service may be integrated with, or may otherwise interact with, third-party applications, websites, and services ("Third-Party Applications") and third-party personal computers, mobile handsets, tablets, wearable devices, speakers, and other devices ("Devices"). Your use of such Third-Party Applications and Devices may be subject to additional terms, conditions, and policies provided to you by the applicable third party. Sahara Prime does not guarantee that Third-Party Applications and Devices will be compatible with the Sahara Prime Service.

Service limitations and modifications
We use reasonable efforts to keep the Sahara Prime Service operational and to provide you with a personalized, immersive experience. However, our service offerings and their availability may change from time to time, without liability to you; for example:

The Sahara Prime Services may experience temporary interruptions due to technical difficulties, maintenance or testing, or updates, including those required to reflect changes in relevant laws and regulatory requirements.
We aim to evolve and improve the Sahara Prime Service constantly, and we may modify, suspend, or stop (permanently or temporarily) providing all of part of the Sahara Prime Service (including particular functions, features, subscription plans, and promotional offerings);
Sahara Prime has no obligation to provide any specific content through the Sahara Prime Service, and Sahara Prime or the applicable owners may remove particular Content without notice.
If you have prepaid fees directly to Sahara Prime for a Paid Subscription that Sahara Prime permanently discontinues prior to the end of your Pre-Paid Period (as that term is defined in the Payments and cancellations section below), Sahara Prime will refund you the prepaid fees for the Pre-Paid Period after such discontinuation. Your account and billing information must be up to date in order for us to refund you.

Sahara Prime has no liability to you, nor any obligation to provide a refund to you, in connection with internet or other service outages or failures that are caused by the actions of government authorities, other third parties, or events beyond our control.


Creating a Sahara Prime account: You may need to create a Sahara Prime account to use all or part of the Sahara Prime Service. Your username and password are for your personal use only and should be kept confidential. You understand that you are responsible for all use (including any unauthorized use) of your username and password. Notify our Customer Service team immediately if your username or password is lost or stolen, or if you believe there has been unauthorized access to your account.

Sahara Prime may reclaim, or require you to change, your username for any reason.


Access to the Sahara Prime Services: Subject to your compliance with these Terms (including any other applicable terms and conditions), we grant to you limited, non-exclusive, revocable permission to make personal, non-commercial use of the Sahara Prime Service and the Content (collectively, "Access"). This Access shall remain in effect unless and until terminated by you or Sahara Prime. You agree that you will not redistribute or transfer the Sahara Prime Service or the Content.

The Sahara Prime software applications and the Content are licensed, not sold or transferred to you, and Sahara Prime and its licensors retain ownership of all copies of the Sahara Prime software applications and Content even after installation on your Devices.

Sahara Prime's Proprietary Rights: The Sahara Prime Service and the Content are the property of Sahara Prime or Sahara Prime's licensors. All Sahara Prime trademarks, service marks, trade names, logos, domain names, and any other features of the Sahara Prime brand ("Sahara Prime Brand Features") are the sole property of Sahara Prime or its licensors. These Terms do not grant you any rights to use any Sahara Prime Brand Features whether for commercial or non-commercial use.

You agree to abide by the Sahara Prime User Guidelines and not to use the Sahara Prime Service, the Content, or any part thereof in any manner not expressly permitted by these Terms.


Billing: 
Tax rates are calculated based on the information you provide and the applicable rate at the time of your monthly charge. Tax rates are based on the rates applicable at the time of your monthly charge. These amounts can change over time with local tax requirements in your country, state, territory, county, or city. Any change in tax rate will be automatically applied based on the account information you provide.

User guidelines: We've established guidelines for using the Sahara Prime Service, to make sure the Sahara Prime Service stays enjoyable for everyone ("Sahara Prime User Guidelines"). In using the Sahara Prime Service, you must comply with the Sahara Prime User Guidelines, as well as all applicable laws, rules, and regulations, and respect the intellectual property, privacy, and other rights of third parties.

Brand accounts: If you establish a Sahara Prime account on behalf of a company, organization, entity, or brand (a "Brand," and such account a "Brand Account"), the terms "you" and "your," as used throughout these Terms (including other Sahara Prime terms and conditions incorporated by reference herein), apply to both you and the Brand.

If you create a Brand Account, you represent and warrant that you are authorized to grant all permissions and licenses provided in these Terms (including any other applicable Sahara Prime terms and conditions) and to bind the Brand to these Terms.

Export control and sanctions: Sahara Prime's products may be subject to U.S. export and re-export control laws and regulations or similar laws applicable in other jurisdictions, including the Export Administration Regulations ("EAR") maintained by the U.S. Department of Commerce, trade and economic sanctions maintained by the Treasury Department's Office of Foreign Assets Control ("OFAC"), and the International Traffic in Arms Regulations ("ITAR") maintained by the Department of State. You warrant that you are (1) not located in any country to which the United States has embargoed goods or has otherwise applied any economic sanctions; and (2) not a denied party as specified in any applicable export or re-export laws or regulations or similar laws applicable in other jurisdictions or otherwise listed on any U.S. government list of prohibited or restricted parties.

You agree to comply with all applicable export and reexport control laws and regulations, including without limitation the EAR and trade and economic sanctions maintained by OFAC. Specifically, you agree not to – directly or indirectly – use, sell, export, reexport, transfer, divert, release, or otherwise dispose of any products, software, or technology (including products derived from or based on such technology) received from Sahara Prime under these Terms to any destination, entity, or person or for any end-use prohibited by the EAR, trade and economic sanctions maintained by OFAC, or any applicable laws or regulations of the United States or any other jurisdiction without obtaining any required prior authorization from the competent government authorities as required by those laws and regulations.

4. Content and Intellectual Property Rights
User Content: The content you post on the Sahara Prime Service
Sahara Prime users may post, upload, or otherwise contribute content to the Sahara Prime Service ("User Content"). For the avoidance of doubt, "User Content" includes all information, materials and other content that is added, created, uploaded, submitted, distributed, or posted to the Sahara Prime Service (including to the Sahara Prime Support Community) by users.

You are solely responsible for all User Content that you post.

You promise that, with respect to any User Content you post on Sahara Prime, (1) you own or have the right to post such User Content; and (2) such User Content, or its use by Sahara Prime pursuant to the license granted below, does not: (i) violate these Terms, including the Sahara Prime User Guidelines, applicable law, or the intellectual property or other rights of any third party; or (ii) imply any affiliation with or endorsement of you or your User Content by Sahara Prime or any artist, band, label, or other individual or entity without the prior express written consent from Sahara Prime or such individual or entity.

In posting or sharing User Content or other information on the Sahara Prime Service, please keep in mind that content and other information will be publicly accessible, and may be used and re-shared by others on the Sahara Prime Service and across the web, so please use caution in posting or sharing on the Sahara Prime Service, and be mindful of your account settings. Sahara Prime is not responsible for what you or others post or share on the Sahara Prime Service.

Monitoring user content
Sahara Prime may, but has no obligation to, monitor or review User Content. Sahara Prime reserves the right to remove or disable access to any User Content for any or no reason. Sahara Prime may take these actions without prior notification to you.

Licenses that you grant to us
User Content
You retain ownership of your User Content when you post it to the Sahara Prime Service. However, in order for us to make your User Content available on the Sahara Prime Service, we do need a limited license from you to that User Content. Accordingly, you hereby grant to Sahara Prime a non-exclusive, transferable, sub-licensable, royalty-free, fully paid, irrevocable, worldwide license to reproduce, make available, perform and display, translate, modify, create derivative works from, distribute, and otherwise use any such User Content through any medium, whether alone or in combination with other Content or materials, in any manner and by any means, method or technology, whether now known or hereafter created, in connection with the Sahara Prime Service. Where applicable and to the extent permitted under applicable law, you also agree to waive, and not to enforce, any "moral rights" or equivalent rights, such as your right to be identified as the author of any User Content, including Feedback, and your right to object to derogatory treatment of such User Content.

Feedback
If you provide ideas, suggestions, or other feedback in connection with your use of the Sahara Prime Service or any Content ("Feedback"), such Feedback is not confidential and may be used by Sahara Prime without restriction and without payment to you. Feedback is considered a type of User Content under these Terms.

Your Device
You also grant to us the right (1) to allow the Sahara Prime Service to use the processor, bandwidth, and storage hardware on your Device in order to facilitate the operation of the Sahara Prime Service, (2) to provide advertising and other information to you, and (3) to allow our business partners to do the same.

Content experience
In any part of the Sahara Prime Service, the Content that you access, including its selection and placement, may be influenced by commercial considerations, including Sahara Prime's agreements with third parties.

Some Content licensed by, provided to, created by, or otherwise made available by Sahara Prime (e.g., podcasts or shows) may incorporate advertising or other promotional messages.

Infringement claims
Sahara Prime respects the rights of intellectual property owners. If you believe that any Content infringes your copyright rights, please see the Sahara Prime Copyright Policy.

Customer support, information, questions, complaints
For customer support with account- and payment-related questions ("Customer Support Queries"), please use Customer Support resources listed on the About Us section of our website.

If you have any questions concerning the Sahara Prime Service or these Terms (including any additional Sahara Prime terms and conditions incorporated herein), please contact Sahara Prime Customer Service by visiting the About Us section of our website. You may also contact us at the mailing address set forth in the "Service Provider" section at the start of these Terms.

In addition, under California Civil Code Section 1789.3, you may contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 N. Market Blvd., Suite N 112, Sacramento, California 95834, or by telephone at 1-800-952-5210 in order to resolve a complaint regarding the service or to receive further information regarding use of the service.

Problems and Disputes
Suspending and terminating the Sahara Prime Service
These Terms will continue to apply to you until terminated by either you or Sahara Prime. Sahara Prime may terminate these Terms (including any additional terms and conditions incorporated herein) or suspend your access to the Sahara Prime Service at any time if we believe you have breached any of these Terms, if we stop providing the Sahara Prime Service or any material component thereof, or as we believe necessary to comply with applicable law. If you or Sahara Prime terminate these Terms, or if Sahara Prime suspends your access to the Sahara Prime Service, you agree that Sahara Prime shall have no liability or responsibility to you, and (except as expressly provided in these Terms) Sahara Prime will not refund any amounts that you have already paid. You may terminate these Terms at any time, in which case you may not continue accessing or using the Sahara Prime Service. To learn how to terminate your Sahara Prime account, please use the Customer Support resources on our About Us page.

The following sections shall survive termination: Sections 2 (The Sahara Prime Service Provided by Us), 3 (Your Use of the Sahara Prime Service) (except as set forth therein), 4 (Content and Intellectual Property Rights), 6 (Problems and Disputes), 7 (About These Terms), as well as any other sections of these Terms that, either explicitly or by their nature, must remain in effect even after termination of these Terms.

Warranty disclaimers
THE Sahara Prime SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. FURTHER, Sahara Prime AND ALL OWNERS OF THE CONTENT DISCLAIM ANY EXPRESS, IMPLIED, AND STATUTORY WARRANTIES REGARDING THE CONTENT, INCLUDING WARRANTIES OF SATISFACTORY QUALITY, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. NEITHER Sahara Prime NOR ANY OWNER OF CONTENT WARRANTS THAT THE Sahara Prime SERVICE OR CONTENT IS FREE OF MALWARE OR OTHER HARMFUL COMPONENTS. IN ADDITION, Sahara Prime MAKES NO REPRESENTATION REGARDING, NOR DOES IT WARRANT OR ASSUME ANY RESPONSIBILITY FOR, ANY THIRD-PARTY APPLICATIONS (OR THE CONTENT THEREOF), USER CONTENT, DEVICES OR ANY PRODUCT OR SERVICE ADVERTISED, PROMOTED OR OFFERED BY A THIRD PARTY ON OR THROUGH THE Sahara Prime SERVICE OR ANY HYPERLINKED WEBSITE, AND Sahara Prime IS NOT RESPONSIBLE FOR ANY TRANSACTIONS BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF THE FOREGOING. NO ADVICE OR INFORMATION WHETHER ORAL OR IN WRITING OBTAINED BY YOU FROM Sahara Prime SHALL CREATE ANY WARRANTY ON BEHALF OF Sahara Prime. WHILE USING THE Sahara Prime SERVICE, YOU MAY HAVE ACCESS TO EXPLICIT CONTENT FILTERING FEATURES, BUT USE OF THESE FEATURES MAY STILL RESULT IN SOME EXPLICIT CONTENT BEING SERVED AND YOU SHOULD NOT RELY ON SUCH FEATURES TO FILTER ALL EXPLICIT CONTENT. THIS SECTION APPLIES TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW.

Some jurisdictions do not allow the exclusion of implied warranties or limitations on applicable statutory rights of a consumer, so the exclusion and limitations in this section may not apply to you.

Limitation of liability and time for filing a claim
YOU AGREE THAT YOUR SOLE AND EXCLUSIVE REMEDY FOR ANY PROBLEMS OR DISSATISFACTION WITH THE Sahara Prime SERVICE IS TO UNINSTALL ANY Sahara Prime SOFTWARE AND TO STOP USING THE Sahara Prime SERVICE. YOU AGREE THAT Sahara Prime HAS NO OBLIGATION OR LIABILITY ARISING FROM OR RELATED TO THIRD-PARTY APPLICATIONS OR THE CONTENT THEREOF MADE AVAILABLE THROUGH OR IN CONNECTION WITH THE Sahara Prime SERVICE, AND WHILE YOUR RELATIONSHIP WITH SUCH THIRD-PARTY APPLICATIONS MAY BE GOVERNED BY SEPARATE AGREEMENTS WITH SUCH THIRD PARTIES, YOUR SOLE AND EXCLUSIVE REMEDY, AS WITH RESPECT TO Sahara Prime, FOR ANY PROBLEMS OR DISSATISFACTION WITH ANY THIRD-PARTY APPLICATIONS OR THE CONTENT THEREOF, IS TO UNINSTALL OR STOP USING SUCH THIRD-PARTY APPLICATIONS.

IN NO EVENT WILL Sahara Prime, ITS OFFICERS, SHAREHOLDERS, EMPLOYEES, AGENTS, DIRECTORS, SUBSIDIARIES, AFFILIATES, SUCCESSORS, ASSIGNS, SUPPLIERS, OR LICENSORS BE LIABLE FOR (1) ANY INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, EXEMPLARY, OR CONSEQUENTIAL DAMAGES; (2) ANY LOSS OF USE, DATA, BUSINESS, OR PROFITS (WHETHER DIRECT OR INDIRECT), IN ALL CASES ARISING OUT OF THE USE OF OR INABILITY TO USE THE Sahara Prime SERVICE, DEVICES, THIRD-PARTY APPLICATIONS, OR THIRD-PARTY APPLICATION CONTENT, REGARDLESS OF LEGAL THEORY, WITHOUT REGARD TO WHETHER Sahara Prime HAS BEEN WARNED OF THE POSSIBILITY OF THOSE DAMAGES, AND EVEN IF A REMEDY FAILS OF ITS ESSENTIAL PURPOSE; OR (3) AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE Sahara Prime SERVICE, THIRD-PARTY APPLICATIONS, OR THIRD-PARTY APPLICATION CONTENT MORE THAN THE GREATER OF (A) THE AMOUNTS PAID BY YOU TO Sahara Prime DURING THE TWELVE MONTHS PRIOR TO THE FIRST CLAIM; OR $30.00.

For clarification, these Terms do not limit Sahara Prime's liability for fraud, fraudulent misrepresentation, death or personal injury to the extent that applicable law would prohibit such a limitation.

ANY CLAIM ARISING UNDER THESE TERMS MUST BE COMMENCED (BY FILING A DEMAND FOR ARBITRATION OR FILING AN INDIVIDUAL ACTION UNDER THE ARBITRATION AGREEMENT BELOW) WITHIN ONE (1) YEAR AFTER THE DATE THE PARTY ASSERTING THE CLAIM FIRST KNOWS OR REASONABLY SHOULD KNOW OF THE ACT, OMISSION, OR DEFAULT GIVING RISE TO THE CLAIM; AND THERE SHALL BE NO RIGHT TO ANY REMEDY FOR ANY CLAIM NOT ASSERTED WITHIN THAT TIME PERIOD.

Third party rights
You acknowledge and agree that the owners of the Content and certain distributors (such as app store providers) are intended beneficiaries of these Terms and have the right to enforce these Terms directly against you. Other than as set out in this section, these Terms are not intended to grant rights to anyone except you and Sahara Prime, and in no event shall these Terms create any third-party beneficiary rights.

If you have downloaded any of our mobile software applications (each, an "App") from the Apple Inc. ("Apple") App Store or if you are using the App on an iOS device, you acknowledge that you have read, understood, and agree to the following notice regarding Apple. These Terms are between you and Sahara Prime only, not with Apple, and Apple is not responsible for the Sahara Prime Service and the content thereof. Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the Sahara Prime Service. In the event of any failure of the Sahara Prime Service to conform to any applicable warranty, you may notify Apple and Apple will refund the applicable purchase price for the App to you; and, to the maximum extent permitted by applicable law, Apple has no other warranty obligation whatsoever with respect to the Sahara Prime Service. Apple is not responsible for addressing any claims by you or any third party relating to the Sahara Prime Service or your possession or use of the Sahara Prime Service, including: (1) product liability claims; (2) any claim that the Sahara Prime Service fails to conform to any applicable legal or regulatory requirement; (3) claims arising under consumer protection or similar legislation; and (4) claims with respect to intellectual property infringement. Apple is not responsible for the investigation, defense, settlement, and discharge of any third-party claim that the Sahara Prime Service or your possession and use of the App infringe that third party's intellectual property rights. You agree to comply with any applicable third-party terms, when using the Sahara Prime Service. Apple, and Apple's subsidiaries, are third-party beneficiaries of these Terms, and upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary of these Terms.

Indemnification
You agree to indemnify and hold Sahara Prime harmless from and against all damages, losses, and expenses of any kind (including reasonable attorney fees and costs) arising out of or related to: (1) your breach of any of these Terms (including any additional Sahara Prime terms and conditions incorporated herein); (2) any User Content you post or otherwise contribute; (3) any activity in which you engage on or through the Sahara Prime Service; and (4) your violation of any law or the rights of a third party.

Governing law, mandatory arbitration and venue
Governing law and jurisdiction
These Terms are governed by and shall be construed in accordance with the laws of the State of California, United States of America, without regard to California's choice or conflicts of law principles. Further, you and Sahara Prime agree to the jurisdiction of the federal and state courts located in Northern California, California, to resolve any dispute, claim, or controversy that relates to or arises in connection with these Terms or the Sahara Prime Service that is not subject to mandatory arbitration under the Arbitration Agreement below, and waive any jurisdictional, venue or inconvenient forum objections to such courts.

ARBITRATION AGREEMENT
This Arbitration Agreement section sets forth the terms and conditions pursuant to which disputes, claims and controversies between you and Sahara Prime will be resolved through arbitration ("Arbitration Agreement").

Dispute resolution and arbitration
You and Sahara Prime agree that any dispute, claim, or controversy between you and Sahara Prime arising in connection with or relating in any way to these Terms or to your relationship with Sahara Prime as a user of the Sahara Prime Service (whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory, and whether the claims arise during or after the termination of these Terms) will be determined by mandatory binding individual (not class) arbitration. You and Sahara Prime further agree that the arbitrator shall have the exclusive power to rule on his or her own jurisdiction, including any objections with respect to the existence, scope or validity of the Arbitration Agreement or to the arbitrability of any claim or counterclaim. THERE IS NO JUDGE OR JURY IN ARBITRATION, AND COURT REVIEW OF AN ARBITRATION AWARD IS LIMITED. The arbitrator must follow these Terms and can award the same damages and relief as a court (including attorney fees and costs only where allowable under applicable law), except that the arbitrator may not award any relief, including declaratory or injunctive relief, benefiting anyone but the parties to the arbitration. This arbitration provision will survive termination of these Terms.

Exceptions
You and Sahara Prime both agree that nothing in this Arbitration Agreement will be deemed to waive, preclude, or otherwise limit either of our rights, at any time, to bring an individual action (1) in a U.S. small claims court or (2) in a court of law, in accordance with the jurisdiction and venue described in the Dispute Resolution and Arbitration section above, seeking (a) only temporary or preliminary individualized injunctive relief, pending a final ruling from the arbitrator or (b) public injunctive relief, pending a ruling on the substance of such claim from the arbitrator. In addition, this Arbitration Agreement doesn't stop you or us from bringing issues to the attention of federal, state, or local agencies. Such agencies can, if the law allows, seek relief against us on your behalf (or vice versa).

No class Or representative proceedings; class action waiver
YOU AND Sahara Prime AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE ACTION. Unless both you and Sahara Prime agree, no arbitrator or judge may consolidate more than one person's claims or otherwise preside over any form of a representative or class proceeding. The arbitrator may award injunctive relief only in favor of the individual party seeking relief and only to the extent necessary to provide relief warranted by that party's individual claim. If a court decides that applicable law precludes enforcement of any of this paragraph's limitations as to a particular claim for relief, then that claim (and only that claim) must be severed from the arbitration and may be brought in court.

Arbitration rules
Either you or we may start arbitration proceedings. Any arbitration between you and Sahara Prime will take place under the Consumer Arbitration Rules of the American Arbitration Association ("AAA") then in force (the "AAA Rules"), as modified by this Arbitration Agreement. You and Sahara Prime agree that the Federal Arbitration Act applies and governs the interpretation and enforcement of this provision (despite the choice of law provision above). The AAA Rules, as well as instructions on how to file an arbitration proceeding with the AAA, appear at adr.org, or you may call the AAA at 1-800-778-7879.

Any arbitration hearings will be conducted by phone or videoconference to the extent possible, but if the arbitrator determines that a hearing should be conducted in person, the locale for such hearing shall be determined by the arbitrator in accordance with the AAA Rules.

If you choose to file an arbitration proceeding and you are required to pay a filing fee, Sahara Prime will reimburse you for that filing fee, unless your claim is for greater than US $10,000, in which case you will be responsible for the filing fee. Sahara Prime will pay any other arbitration fees, including your share of arbitrator compensation, unless otherwise required by AAA Rules or court order. Regardless of the manner in which the arbitration is conducted, the arbitrator shall issue a reasoned written decision sufficient to explain the essential findings and conclusions on which the decision and award, if any, are based. The arbitrator may make rulings and resolve disputes as to the payment and reimbursement of fees or expenses at any time during the proceeding and upon request from either party made within 14 days of the arbitrator's ruling on the merits.

Notice; process
A party who intends to seek arbitration must first send a written notice of the dispute to the other, by electronic mail to legal@Sahara Prime.com and by certified mail, Federal Express, UPS, or Express Mail (signature required) to the address below ("Notice"). Sahara Prime's address for Notice is: Sahara Prime USA Inc., Attn: General Counsel, 4 World Trade Center, 150 Greenwich Street, 62nd Floor, New York, New York 10007, USA. The Notice must (1) describe the nature and basis of the claim or dispute; and (2) set forth the specific relief sought ("Demand"). We agree to use good faith efforts to resolve the claim directly, but if we do not reach an agreement to do so within 30 days after the Notice is received, you or Sahara Prime may commence an arbitration proceeding. During the arbitration, the amount of any settlement offer made by you or Sahara Prime shall not be disclosed to the arbitrator until after the arbitrator makes a final decision and award, if any. In the event our dispute is finally resolved through arbitration in your favor, and the arbitrator issues you an award that is greater than the value of Sahara Prime's last written settlement offer, then Sahara Prime will instead pay you either the amount of the award or $1,000, whichever is greater. All documents and information disclosed in the course of the arbitration shall be kept strictly confidential by the recipient and shall not be used by the recipient for any purpose other than for purposes of the arbitration or the enforcement of the arbitrator's decision and award and shall not be disclosed except in confidence to persons who have a need to know for such purposes or as required by applicable law.

Enforceability
If this Arbitration Agreement is invalidated in whole or in part, the parties agree that the exclusive jurisdiction and venue described in the 'Governing law and jurisdiction' section above shall govern with respect to any aspect of any dispute, claim or controversy that, as a result of such invalidation, is no longer governed by this Arbitration Agreement.

7. About These Terms
Under applicable law, you may have certain rights that can't be limited by a contract. These Terms are in no way intended to restrict those rights.

Changes
We may make changes to these Terms (including any additional Sahara Prime terms and conditions incorporated by reference herein) from time to time by notifying you of such changes by any reasonable means, including by posting the revised Terms on the applicable Sahara Prime Service (provided that, for material changes, we will seek to supplement such notice by email, an in-service pop-up message or other prominent notice within the Service, or other means). Any such changes will not apply to any dispute between you and us arising prior to the date on which the Terms were changed. Your use of the Sahara Prime Service following any changes to these Terms will constitute your acceptance of such changes. If you do not wish to continue using the Sahara Prime Service under the updated Terms, you may terminate your account by contacting us. The effective date set forth at the top of this document indicates when these Terms were last changed.

Entire agreement
Other than as stated in this section or as explicitly agreed upon in writing between you and Sahara Prime, these Terms constitute all the terms and conditions agreed upon between you and Sahara Prime and supersede any prior agreements in relation to the subject matter of these Terms, whether written or oral. As noted above, other terms and conditions governing use of the Sahara Prime Service are incorporated herein by reference, including the following terms and conditions: the Sahara Prime Premium Promotional Offer Terms; Sahara Prime's Card Terms; the Sahara Prime User Guidelines; the Sahara Prime Copyright Policy; and the Sahara Prime Support Community Terms.

Severability and waiver: Unless as otherwise stated in these Terms, should any provision of these Terms be held invalid or unenforceable for any reason or to any extent, the remaining provisions of these Terms will not be affected, and the application of that provision shall be enforced to the extent permitted by law.

Any failure by Sahara Prime or any third-party beneficiary to enforce these Terms or any provision thereof shall not waive Sahara Prime's or the applicable third-party beneficiary's right to do so.

Assignment: Sahara Prime may assign any or all of these Terms, and may assign or delegate, in whole or in part, any of its rights or obligations under these Terms. You may not assign these Terms, in whole or in part, nor transfer or sub-license your rights under these Terms, to any third party.

                    </p>
                    <Link href={read ? "/survey" : "/terms"}>
                        <button className={"px-3 py-1 text-xl rounded-lg w-min whitespace-nowrap duration-150 "
                            + (read ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-400")}>
                            I agree to Terms and Conditions
                        </button>
                    </Link>
                    <p className="italic text-red-500">
                        {!read && "You must read the terms and conditions to continue"}
                    </p>
                </div>
            </main>
        </div>
    )
}
