import React from 'react';

import {HEADER, LIST_BULLET} from "@/data/mock/terms-conditions";

import {Container} from "react-bootstrap";
import HeadingOffset from "@/components/common/heading/headingOffset/HeadingOffset";
import ListBullet from "@/components/common/list/listBullet/ListBullet";
import HeaderBanner from "@/components/common/banner/headerBanner/HeaderBanner";

export type TermsConditionsProps = {};

const TermsConditions = ({}: TermsConditionsProps): React.ReactElement => (
    <>
        <HeaderBanner
            className='header-banner--terms'
            color='secondary'
            breadcrumb={HEADER.breadcrumb}>
            <HeadingOffset
                className='mb-4 text-center text-md-start'
                option={{level: "h1", variant: "regular", animation: {position: 'top'}}}>Terms and
                conditions</HeadingOffset>
            <ListBullet
                className='mt-5 text-center text-md-start'
                options={{
                    color: "secondary",
                    variant: 'inline',
                    animation: {type: 'fade-in', direction: 'right', position: "top"}
                }}
                items={HEADER.list} />
        </HeaderBanner>

        <Container
            as='section'
            className='section-terms'>
            <p><strong>Elitely</strong> (henceforth referred to as “Platform” or “We” or “Us” or “We”) is a dating
                website with the browsing
                experience of social media, which offers pay-to-unlock chat and pay-to-unlock-meet options. It also
                includes
                a feature for influencers/micro-influencers to chat and interact with their fans for a fee.
                “Personality”
                and/or “Influencer” is henceforth referred as &quot;Service Provider&quot;. “Lurker” is referred to as
                “User”, a
                user
                engaging the services under Elitely. “You” and/or “Your” collectively refers to all users on the
                Platform.
                By using the service from the website, the you agree to be bound by these Terms of Agreement (“Terms” or
                “Agreement”).</p>

            <p><strong>Please read these Terms carefully</strong> as they govern your use of the Platform and contact us
                if you have any
                questions. By creating an account under these Terms or by accessing or using the service, you agree to
                be
                bound by these Terms.</p>

            <p><strong>Please read this Terms carefully before accessing or using the Service</strong>. You must read,
                agree with, and
                accept all of the terms and conditions contained in this Terms, which includes those terms and
                conditions expressly set out below and those incorporated by reference before you use any part of the
                Service.</p>

            <HeadingOffset
                className='mt-4 mb-3 text-start'
                option={{level: "h2", variant: "regular"}}>Acceptance of Terms and Conditions</HeadingOffset>
            <p>By using the Platform, you agree to be bound by these terms and conditions, our privacy policy, and any
                additional terms and conditions that may apply to specific areas of the Platform.</p>

            <HeadingOffset
                className='mt-4 mb-3 text-start'
                option={{level: "h2", variant: "regular"}}>Eligibility</HeadingOffset>
            <p>To use the Platform, you must be at least eighteen (18) years old. By using the Platform, you represent
                and warrant that you are at least <strong><em>18 years old</em></strong> and that you have the legal
                capacity to enter into this
                agreement. You cannot use the Platform if you are not at least eighteen (18) years of age and/or the age
                of majority and legal consent in the jurisdiction in which you live or reside and have the legal
                capacity to enter into this agreement. Whilst the Platform requires all users or Service Providers to be
                at least eighteen 18 years old, we are not responsible or liable for any misrepresentations regarding a
                user’s age or for the unauthorized use of the Platform by a minor, even if we have taken reasonable
                steps to prevent such use, except to the extent required by applicable law, and to the best of our
                effort.</p>

            <HeadingOffset
                className='mt-4 mb-3 text-start'
                option={{level: "h2", variant: "regular"}}>Roles</HeadingOffset>
            <ol className='list-alphabetical'>
                <li>When a Service Provider makes or accepts a booking, they are entering into a contract directly with
                    the User. The Platform is not and does not become a party to or other participant in any contractual
                    relationship between the User and the Service Providers.
                </li>
                <li>The Platform is not acting as an agent for any Service Provider except for payments where the
                    Platform acts as a collection agent (via its payment processing providers Stripe and Transferwise).
                    The Platform does not and is not liable for the conduct of User and Service Providers and do not
                    guarantee:
                    <ol>
                        <li>operate, secure and improve the platform (including for fraud prevention, risk assessment,
                            investigation and customer support purposes);
                        </li>
                        <li>ensure your compliance with these Terms;</li>
                    </ol>
                </li>
                <li>You acknowledge that the Platform has no general obligation to monitor the use of the Platform and
                    verify information provided by each User, but has the rights to review, disable access to, remove,
                    or edit content to:
                    <ol>
                        <li>operate, secure and improve the platform (including for fraud prevention, risk assessment,
                            investigation and customer support purposes);
                        </li>
                        <li>ensure your compliance with these Terms;</li>
                        <li>comply with applicable law or the order or requirement of a court, law enforcement or other
                            administrative agency or governmental body;
                        </li>
                        <li>address your content that we determine is harmful or objectionable.</li>
                        <li>maintain and enforce any quality or eligibility criteria, including by removing listings
                            that do not meet the quality and eligibility criteria.
                        </li>
                    </ol>
                </li>
            </ol>

            <HeadingOffset
                className='mt-4 mb-3 text-start'
                option={{level: "h2", variant: "regular"}}>Roles</HeadingOffset>
            <p>In your use of the Platform, you agree to act responsibly in a manner demonstrating the exercise of good
                judgment. You agree and warrant that you will not:</p>
            <ListBullet
                options={{color: 'primary', weight: 'normal'}}
                items={LIST_BULLET} />

            <HeadingOffset
                className='mt-4 mb-3 text-start'
                option={{level: "h2", variant: "regular"}}>Disclaimers</HeadingOffset>
            <p><strong>THE PLATFORM IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. WE MAKE
                NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE PLATFORM OR
                THE INFORMATION, CONTENT, MATERIALS, OR PRODUCTS INCLUDED ON THE PLATFORM. TO THE FULL EXTENT
                PERMISSIBLE BY APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT
                LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.</strong></p>
            <p>You agree and acknowledge that your use of the service is at your sole risk. The Platform does not
                warrant that the service will meet your specific requirements or/and expectations.</p>
            <p>The Platform takes no responsibility and assumes no liability for any user content that you or any other
                user or third-party posts or sends using our.</p>
            <p>You understand and agree that you may be exposed to user content that is inaccurate, objectionable,
                inappropriate for children, or otherwise unsuited to your purpose.</p>

            <HeadingOffset
                className='mt-4 mb-3 text-start'
                option={{level: "h2", variant: "regular"}}>Entire Agreement</HeadingOffset>
            <p>These terms and conditions, together with our privacy policy below, constitute the entire agreement
                between you and us with respect to the use of the Platform and supersede all prior or contemporaneous
                communications and proposals, whether oral or written, between you and us. If you have any questions or
                concerns regarding these terms and conditions, please contact us
                at <a href="mailto:admin@elitelysg.com">admin@elitelysg.com</a>.</p>

            <HeadingOffset
                className='mt-4 mb-3 text-start'
                option={{level: "h2", variant: "regular"}}>Privacy Policies</HeadingOffset>
            <p>We require all users to provide accurate and up-to-date personal information, including their name,
                contact information, and age. We collect this information to verify the identity and eligibility of our
                users to use our services.</p>
            <p>We take the privacy and security of your personal information seriously and implement reasonable measures
                to protect it. We will not disclose your personal information to any third party without your consent,
                except where required by law or to provide our services.
                Any updates or changes to the Privacy Policy will be posted on our Platform, and it is your
                responsibility to review our Privacy Policy periodically to stay informed of any changes that may affect
                your use of our Platform.</p>
            <p>By using the Platform, you acknowledge and agree to our collection, use, and disclosure of your personal
                information as described in our Privacy Policy. If you do not agree to the terms of our Privacy Policy,
                please do not use our Platform.</p>

        </Container>
    </>
);

export default TermsConditions;