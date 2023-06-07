import React from 'react';

import { createAnimation } from "@/components/animation/helper";

import { HEADER, LIST_BULLET } from "@/data/mock/terms-conditions";

import { Container } from "react-bootstrap";
import HeadingOffset from "@/components/common/heading/headingOffset/HeadingOffset";
import ListBullet from "@/components/common/list/listBullet/ListBullet";
import HeaderBanner from "@/components/common/banner/headerBanner/HeaderBanner";
import { FadeIn } from "@/components/animation";
import LogoHeartLineDiagonal from "@/components/common/logo/logoHeartLineDiagonal/LogoHeartLineDiagonal";
import HeaderHead from "@/components/layout/header/headerHead/HeaderHead";

export type TermsConditionsProps = {};

const TermsConditions = ({}: TermsConditionsProps): React.ReactElement => (
    <>
        <HeaderHead title="Terms And Conditions" />

        <HeaderBanner
            className="header-banner--terms"
            color="secondary"
            breadcrumb={HEADER.breadcrumb}>

            <LogoHeartLineDiagonal
                className="decorative--flip decorative--bent-left"
                color="tertiary"
                options={{ variant: 'bent-left', animation: { type: 'fade-in', direction: 'left' } }} />
            <LogoHeartLineDiagonal
                className="decorative--bent-right"
                color="secondary"
                options={{ variant: 'bent-right', animation: { type: 'fade-in', direction: 'right' } }} />

            <HeadingOffset
                className="mb-4 text-center text-md-start"
                option={{ level: "h1", variant: "regular", animation: { position: 'top' } }}>Terms and
                conditions</HeadingOffset>
            <ListBullet
                className="mt-5"
                options={{
                    color: "secondary",
                    variant: 'inline',
                    animation: { type: 'fade-in', direction: 'right', position: "top" }
                }}
                items={HEADER.list} />
        </HeaderBanner>

        <Container
            as="section"
            className="section-terms"
            {...createAnimation({ type: "fade-in", direction: "up", delay: .5 })} >

            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <p><strong>Elitely</strong> (henceforth referred to as “the Platform” or “We” or “Us”) is a dating
                    website with the
                    browsing experience of social media, which offers pay-to-unlock chat and pay-to-unlock meet options.
                    It also includes a feature for influencers/micro-influencers to chat and interact with their fans
                    for a fee. </p>
                <p><strong>Definitions</strong></p>
                <p>“Personality” and/or “Influencer” is henceforth referred as ”Service Provider”. “Lurker” is referred
                    to as “User”, a user engaging the services under Elitely. “You” and/or “Your” collectively refers to
                    all users on the Platform.</p>
                <p>By using the service from the website, the you agree to be bound by these Terms of Agreement (“Terms”
                    or “Agreement”).</p>
                <p><strong>Please read these Terms carefully</strong> as they govern your use of the Platform and
                    <a href="mailto:admin@elitelysg.com"> contact us</a> if you have
                    any questions. By creating an account under these Terms or by accessing or using the service, you
                    agree to be bound by these Terms. </p>
            </FadeIn>

            <HeadingOffset
                className="mt-4 mb-3 text-start"
                option={{ level: "h2", variant: "regular" }}>Acceptance of Terms and Conditions</HeadingOffset>
            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <p>By using the Platform, you agree to be bound by these terms and conditions, our privacy policy, and
                    any additional terms and conditions that may apply to specific areas of the Platform (“the
                    Agreement”). If you do not accept and agree to be bound by all of the terms of this Agreement,
                    please do not use the Service.</p>
                <p>The Terms are an electronic contract that sets out the legally between you and the Platform. We
                    reserve the right to modify these Terms at any time, without notice, and such modifications shall be
                    effective immediately upon posting on the Platform. We are not obliged to, notify you with updates
                    to the changes to the revised Terms. Your continued use of the Platform after such modifications
                    shall constitute your acceptance of these modified terms and conditions. You are responsible to
                    regularly review the Terms and your continued use of the Service after the posting of modifications
                    to this Agreement will constitute your acceptance of the revised Terms. If you do not agree to the
                    new terms and conditions, you are no longer authorized to use the Platform.</p>
                <p>If the changes include material changes to your rights or obligations, we will notify you at least 30
                    days in advance of the changes by reasonable means, which could include notification through the
                    Service or via email. If you continue to use the Service after the changes become effective, then
                    you agree to the revised Agreement.</p>
            </FadeIn>

            <HeadingOffset
                className="mt-4 mb-3 text-start"
                option={{ level: "h2", variant: "regular" }}>Eligibility</HeadingOffset>
            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <p>To use the Platform, you must be at least <strong>eighteen (18) years old</strong>. By using the
                    Platform, you represent and warrant that you are at least 18 years old and that you have the legal
                    capacity to enter into this agreement.</p>
                <p>You cannot use the Platform if you are not at least eighteen (18) years of age and/or the age of
                    majority and legal consent in the jurisdiction in which you live or reside and have the legal
                    capacity to enter into this agreement.</p>
                <p>Whilst the Platform requires all users or Service Providers to be at least eighteen 18 years old, we
                    are not responsible or liable for any misrepresentations regarding a user’s age or for the
                    unauthorized use of the Platform by a minor, even if we have taken reasonable steps to prevent such
                    use, except to the extent required by applicable law, and to the best of our effort.</p>
                <p>It is your duty to comply with, including but not limited to, this Agreement and all International
                    and National laws, rules, by-laws and regulations.</p>
            </FadeIn>

            <HeadingOffset
                className="mt-4 mb-3 text-start"
                option={{ level: "h2", variant: "regular" }}>Roles</HeadingOffset>
            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <ol className="list-alphabetical">
                    <li>When a Service Provider makes or accepts a booking, they are entering into a contract directly
                        with the User. The Platform is not and does not become a party to or participant in any
                        contractual relationship between the User and the Service Provider.
                    </li>
                    <li>The Platform is not acting as an agent for any Service Provider except for payments where the
                        Platform acts as a collection agent (via its payment processing providers Stripe and
                        Transferwise). The Platform does not and is not liable for the conduct of User and Service
                        Providers and do not guarantee:
                        <ol>
                            <li>the existence, quality, safety, suitability, punctuality, or legality.</li>
                            <li>the truth or accuracy of any listing descriptions, reviews, or other content provided by
                                the Service Providers and User.
                            </li>
                        </ol>
                    </li>
                    <li>You acknowledge that the Platform has no general obligation to monitor the use of the Platform
                        and verify information provided by each User, but has the rights to review, disable access to,
                        remove, or edit content to:
                        <ol>
                            <li>operate, secure and improve the platform (including for fraud prevention, risk
                                assessment, investigation and customer support purposes).
                            </li>
                            <li>ensure your compliance with these Terms.</li>
                            <li>comply with applicable law or the order or requirement of a court, law enforcement or
                                other administrative agency or governmental body.
                            </li>
                            <li>address your content that we determine is harmful or objectionable.</li>
                            <li>maintain and enforce any quality or eligibility criteria, including by removing listings
                                that do not meet the quality and eligibility criteria.
                            </li>
                        </ol>
                    </li>
                    <li>You are solely responsible for your interactions with other members. You understand that the
                        platform does not conduct criminal background checks on its members or otherwise inquire into
                        the background of its members. The platform makes no representations or warranties as to the
                        conduct or compatibility of members.
                    </li>
                </ol>
            </FadeIn>


            <HeadingOffset
                className="mt-4 mb-3 text-start"
                option={{ level: "h2", variant: "regular" }}>Content</HeadingOffset>
            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <ol className="list-alphabetical">
                    <li>You are solely responsible for any content, including without limitation, text, graphics,
                        photos, videos, or other materials, that you post on or through the Platform (collectively,
                        ”User Content”). You represent and warrant that:
                        <ol>
                            <li>you either are the sole and exclusive owner of all User Content or you have all rights,
                                licenses, consents, and releases that are necessary to grant to us the rights in such
                                User Content, as contemplated under these terms and conditions.
                            </li>
                            <li>neither the User Content, nor your submission, uploading, publishing or otherwise making
                                available of such User Content, nor our use of the User Content as permitted herein will
                                infringe, misappropriate or violate a third party&apos;s patent, copyright, trademark,
                                trade
                                secret, moral rights or other proprietary or intellectual property rights, or rights of
                                publicity or privacy, or result in the violation of any applicable law or regulation.
                            </li>
                            <li>By posting or transmitting content through the Platform, you grant us a non-exclusive,
                                transferable, sub-licensable, royalty-free, worldwide license to use, copy, modify,
                                create derivative works based on, distribute, publicly display, publicly perform, and
                                otherwise exploit in any manner such content in all formats and distribution channels
                                now known or hereafter devised (including in connection with the Platform and the
                                Platform&apos;s business and on third-party sites and services), without further notice
                                to or
                                consent from you, and without the requirement of payment to you or any other person or
                                entity.
                            </li>
                            <li>You agree to abide by the following content standards when using the Platform:
                                <ol>
                                    <li>You will not post any User Content that is defamatory, obscene, pornographic,
                                        abusive, or offensive.
                                    </li>
                                    <li>You will not post any User Content that promotes or facilitates illegal
                                        activities or violates any applicable laws, rules, or regulations.
                                    </li>
                                    <li>You will not post any User Content that infringes on any third party&apos;s
                                        rights,
                                        including without limitation, intellectual property rights, privacy rights, or
                                        publicity rights.
                                    </li>
                                    <li>You will not post any User Content that contains viruses, malware, or any other
                                        harmful code.
                                    </li>
                                </ol>
                            </li>
                            <li>We reserve the right, but not the obligation, to review and remove any User Content that
                                violates these content standards or is otherwise inappropriate or objectionable.
                            </li>
                        </ol>
                    </li>
                </ol>
            </FadeIn>

            <HeadingOffset
                className="mt-4 mb-3 text-start"
                option={{ level: "h2", variant: "regular" }}>Conduct</HeadingOffset>
            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <p>In your use of the Platform, you agree to act responsibly in a manner demonstrating the exercise of
                    good judgment. You agree and warrant that you will not:</p>
                <ListBullet
                    options={{ color: 'primary', weight: 'normal' }}
                    items={LIST_BULLET} />
            </FadeIn>

            <HeadingOffset
                className="mt-4 mb-3 text-start"
                option={{ level: "h2", variant: "regular" }}>Credits and Payments</HeadingOffset>
            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <ol className="list-alphabetical">
                    <li>The Platform utilizes a credit system for you to access certain features and content. You may
                        purchase credits through the Platform using our designated payment methods, which include but
                        are not limited to Stripe and/or Transferwise. The pricing for credits and payment methods may
                        be subject to change at any time without prior notice.
                    </li>
                    <li>All credits purchased on the Platform are non-refundable and non-withdrawable, except in the
                        case of technical errors or other issues as determined by us. The Platform’s decision shall be
                        final and we shall be under no obligation to provide a full refund for payment received. You
                        agree that any credits purchased are for your personal use and are non-transferable.
                    </li>
                    <li> You agree to provide accurate and complete billing information, including your legal name,
                        address, telephone number, and credit card or other payment information as necessary. By
                        submitting such payment information, you grant us the right to provide such information to third
                        parties for purposes of facilitating payment.
                    </li>
                    <li> We may suspend or terminate your account or access to the Platform if we determine, in our sole
                        discretion, that you have engaged in fraudulent, abusive, or other unlawful activity related to
                        the Platform or our payment system.
                    </li>
                </ol>
            </FadeIn>


            <HeadingOffset
                className="mt-4 mb-3 text-start"
                option={{ level: "h2", variant: "regular" }}>Refunds</HeadingOffset>
            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <p>We will evaluate such requests on a case-by-case basis, and we reserve the right to make a decision
                    at our sole discretion. <strong>If a refund is granted, it will be in the form of credits on the
                        Platform,
                        and no cash or other refunds will be given</strong>. By using the Platform, you agree that our
                    decision on
                    any refund request is final and binding. However, for meetups between Users and Service Providers
                    facilitated by the Platform, <strong>the following refund policy may apply at our
                        discretion</strong>:</p>
                <ListBullet
                    options={{ color: 'primary', weight: 'normal' }}
                    items={[
                        'A 30% credit refund is given if you cancelled the meetup more than 24 hours before the scheduled meet-up time. A 100% credit refund is applicable if the Service Provider did not turn up or when the Service Provider cancelled the meetup.',
                        'If the cancellation is made less than 24 hours to the scheduled meet-up time, no refunds of credits will be made.',
                        'In an event where the Service Provider is late, for instance, 15 minutes, he/she will stay 15 minutes more to compensate for the time gone, however no refund is applicable for this event.'
                    ]} />
                <p>By using the Platform, you agree to the above refund policy for meetups facilitated by the Platform.
                    We reserve the right to modify the refund policy at any time, without prior notice. Any changes to
                    the refund policy will be effective immediately upon posting on the Platform. It is your
                    responsibility to review the refund policy regularly to ensure your continued acceptance of the
                    policy.</p>
            </FadeIn>

            <HeadingOffset
                className="mt-4 mb-3 text-start"
                option={{ level: "h2", variant: "regular" }}>Disputes</HeadingOffset>
            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <p>In the event of a dispute between a User and a Service Provider, both agree to first attempt to
                    resolve the dispute through good faith discussion. If the parties are unable to reach a resolution
                    through discussion, the dispute may be referred to the Platform for resolution. The Platform will
                    evaluate the dispute on a case-by-case basis and make a decision, which shall be final and binding
                    on both parties. Both parties agree to comply with any decision made by the Platform.</p>
            </FadeIn>

            <HeadingOffset
                className="mt-4 mb-3 text-start"
                option={{ level: "h2", variant: "regular" }}>Termination</HeadingOffset>
            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <p>We reserve the right to terminate or suspend your account or access to the Platform at any time, with
                    or without cause, and without prior notice or liability without any liability or further obligation
                    of any kind whatsoever to you or any other party. Upon termination, your right to use the Platform
                    will immediately cease.</p>
            </FadeIn>

            <HeadingOffset
                className="mt-4 mb-3 text-start"
                option={{ level: "h2", variant: "regular" }}>Severability</HeadingOffset>
            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <p>If any provision of these terms and conditions is held to be invalid or unenforceable, such provision
                    shall be struck and the remaining provisions shall be enforced to the fullest extent under the
                    law.</p>
            </FadeIn>

            <HeadingOffset
                className="mt-4 mb-3 text-start"
                option={{ level: "h2", variant: "regular" }}>Waiver</HeadingOffset>
            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <p>Our failure to enforce any right or provision in these Terms shall not constitute a waiver of such
                    right or provision unless acknowledged and agreed to by us in writing.</p>
            </FadeIn>


            <HeadingOffset
                className="mt-4 mb-3 text-start"
                option={{ level: "h2", variant: "regular" }}>Disclaimers</HeadingOffset>
            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <p><strong>THE PLATFORM IS PROVIDED ON AN “AS IS“ AND “AS AVAILABLE“ BASIS. WE MAKE NO REPRESENTATIONS
                    OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE PLATFORM OR THE
                    INFORMATION, CONTENT, MATERIALS, OR PRODUCTS INCLUDED ON THE PLATFORM. TO THE FULL EXTENT
                    PERMISSIBLE BY APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT
                    LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.</strong>
                </p>
                <p>You agree and acknowledge that your use of the service is at your sole risk. The Platform does not
                    warrant that the service will meet your specific requirements or/and expectations.</p>
                <p>The Platform takes no responsibility and assumes no liability for any user content that you or any
                    other user or third-party posts or sends using our
                    You understand and agree that you may be exposed to user content that is inaccurate, objectionable,
                    inappropriate for children, or otherwise unsuited to your purpose.</p>
            </FadeIn>

            <HeadingOffset
                className="mt-4 mb-3 text-start"
                option={{ level: "h2", variant: "regular" }}>Limitations of Liability</HeadingOffset>
            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <p>You acknowledge and agree that the Platform shall not be liable for any direct, indirect damages or
                    losses, arising from the use of the service. To the fullest extent permitted by applicable law, in
                    no event will the Platform, its affiliates, employees, licensors or You be liable for any indirect,
                    consequential, exemplary, incidental, special, punitive, or enhanced damages, including, without
                    limitation, loss of profits, whether incurred directly or indirectly, or any loss of data, use,
                    goodwill, or other intangible losses, resulting from: </p>
                <ol className="list-alphabetical">
                    <li>your access to or use of or inability to access or use the Platform</li>
                    <li>unauthorized access, use or alteration of your content, even if the Platform has been advised of
                        the possibility of such damages. In no event will Platform’s aggregate liability to you for all
                        claims relating to the service exceed the greater of the amount paid, if any, by you to the
                        Platform for the service and SGD 100 while you have an account. Some jurisdictions do not allow
                        the exclusion or limitation of certain damages, so some or all of the exclusions and limitations
                        in this section may not apply to you.
                    </li>
                </ol>
                <p><strong>IN NO EVENT WILL WE OR OUR DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE TO
                    YOU OR ANY THIRD PARTY FOR ANY INDIRECT, CONSEQUENTIAL, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES,
                    INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, LOSS OF REVENUE, LOSS OF DATA, OR OTHER DAMAGES
                    ARISING FROM YOUR USE OF THE PLATFORM, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
                    DAMAGES</strong></p>
            </FadeIn>

            <HeadingOffset
                className="mt-4 mb-3 text-start"
                option={{ level: "h2", variant: "regular" }}>Indemnification</HeadingOffset>
            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <p>You agree to indemnify, defend, and hold harmless us, our affiliates, and our respective officers,
                    directors, employees, agents, licensors, and service providers from and against any claims,
                    liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable
                    attorneys&apos; fees) arising out of or relating to your violation of these terms and conditions or
                    your
                    use of the Platform, including, but not limited to, your User Content, any use of the
                    Platform&apos;s
                    content, services, and products other than as expressly authorized in these terms and conditions, or
                    your use of any information obtained from the Platform.</p>
            </FadeIn>

            <HeadingOffset
                className="mt-4 mb-3 text-start"
                option={{ level: "h2", variant: "regular" }}>Intellectual Property</HeadingOffset>
            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <p>All content on the Platform, including without limitation the text, graphics, photos, sounds, music,
                    videos, interactive features and the like (“Content“) and the trademarks, service marks and logos
                    contained therein (“Marks“), are owned by or licensed to us, subject to copyright and other
                    intellectual property rights under Singapore and foreign laws and international conventions. Content
                    on the Platform is provided to you AS IS for your information and personal use only and may not be
                    used, copied, reproduced, distributed, transmitted, broadcast, displayed, sold, licensed, or
                    otherwise exploited for any other purposes whatsoever without our prior written consent. We reserve
                    all rights not expressly granted in and to the Platform and the Content. You may not use or
                    reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
                    republish, download, store, or transmit any of the material on our Platform without our express
                    prior written consent.</p>
            </FadeIn>

            <HeadingOffset
                className="mt-4 mb-3 text-start"
                option={{ level: "h2", variant: "regular" }}>Third-Party Links</HeadingOffset>
            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <p>The Platform may contain links to third-party websites or resources. We are not responsible for the
                    availability of these websites or resources or their content, and we do not endorse and are not
                    responsible or liable for any content, advertising, products, or other materials on or available
                    from these websites or resources. You agree that we shall not be responsible or liable, directly or
                    indirectly, for any damage or loss caused or alleged to be caused by or in connection with your use
                    of or reliance on any content, goods, or services available on or through any third-party websites
                    or resources.</p>
            </FadeIn>

            <HeadingOffset
                className="mt-4 mb-3 text-start"
                option={{ level: "h2", variant: "regular" }}>Governing Law and Jurisdiction</HeadingOffset>
            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <p>These terms and conditions shall be governed by and construed in accordance with the laws of
                    Singapore. Any dispute arising out of or in connection with these terms and conditions shall be
                    resolved, first, by means of arbitration. If parties are unable to reach an agreement by means of
                    arbitration, the matter shall be adjudicated by the courts of Singapore.</p>
            </FadeIn>

            <HeadingOffset
                className="mt-4 mb-3 text-start"
                option={{ level: "h2", variant: "regular" }}>Miscellaneous</HeadingOffset>
            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <p>If any provisions of these Terms are held by any Court of competent
                    jurisdiction to be invalid or unenforceable in part, the remaining provisions of this contract of
                    services shall continue in full force and effect.</p>
                <p>Our failure to enforce any right or provision of these terms and conditions will not be deemed a
                    waiver
                    of such right or provision.</p>
                <p>Our Platform is controlled and operated from Singapore and we make no representations or warranties
                    that
                    the Platform is appropriate or available for use in other locations. If you access or use the
                    Platform
                    from other jurisdictions, you do so at your own risk and are responsible for compliance with local
                    law.</p>
                <p>Any provision of this Terms that contemplates performance or observance
                    subsequent to the termination of this Terms, shall survive any termination
                    of this Terms and continue for such time as they may remain applicable.</p>
            </FadeIn>

            <HeadingOffset
                className="mt-4 mb-3 text-start"
                option={{ level: "h2", variant: "regular" }}>Entire Agreement</HeadingOffset>
            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <p>These terms and conditions, together with our privacy policy below, constitute the entire agreement
                    between you and us with respect to the use of the Platform and supersede all prior or
                    contemporaneous
                    communications and proposals, whether oral or written, between you and us.</p>
                <p>If you have any questions or concerns regarding these terms and conditions, please contact us
                    at <a href="mailo:admin@elitelysg.com">admin@elitelysg.com</a>.</p>
            </FadeIn>

            <HeadingOffset
                className="mt-4 mb-3 text-start"
                option={{ level: "h2", variant: "regular" }}>Privacy Policies</HeadingOffset>
            <FadeIn options={{ type: "fade-in", direction: 'up' }}>
                <p>We require all users to provide accurate and up-to-date personal information, including their name,
                    contact information, and age. We collect this information to verify the identity and eligibility of
                    our
                    users to use our services.</p>
                <p>We take the privacy and security of your personal information seriously and implement reasonable
                    measures to protect it. We will not disclose your personal information to any third party without
                    your
                    consent, except where required by law or to provide our services.</p>
                <p>Any updates or changes to the Privacy Policy will be posted on our Platform, and it is your
                    responsibility to review our Privacy Policy periodically to stay informed of any changes that may
                    affect
                    your use of our Platform.</p>
                <p>By using the Platform, you acknowledge and agree to our collection, use, and disclosure of your
                    personal
                    information as described in our Privacy Policy. If you do not agree to the terms of our Privacy
                    Policy,
                    please do not use our Platform.</p>
            </FadeIn>

        </Container>
    </>
);

export default TermsConditions;