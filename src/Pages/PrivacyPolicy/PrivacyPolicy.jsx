import { useState } from "react";

function PrivacyPolicy() {
    const [openIndex, setOpenIndex] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);

    const toggleIndex = (index) => {
        if(openIndex.includes(index)){
            setOpenIndex(([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]));
            let dex=openIndex.filter((i)=>{
                return i!==index
            });
            setOpenIndex(dex);
        }
        else{
            let dex = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
            // dex.push(index);
            setOpenIndex(dex);
        }
    };

    return (
        <div className="mx-auto mb-8 px-4 lg:px-36">
            <h1 className="px-4 text-blue-900 font-semibold text-4xl lg:text-7xl text-center my-12 mt-20">
                Privacy Policy
            </h1>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex.includes(0)}
                    onChange={() => toggleIndex(0)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium text-center">
                    No surprises!
                </div>
                {openIndex.includes(0) && (
                    <div className="collapse-content">
                        <p className="mr-4 text-xl text-justify">
                            Welcome to Last Call’s privacy policy. <br /><br />

                            Last Call respects your privacy and is committed to protecting your personal data. This privacy policy will inform you how we look after your personal data when you visit our website and other services (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                            Please use the Glossary, located at the end of this privacy policy, to understand the meaning of some of the terms used.

                        </p>
                    </div>
                )}
            </div>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex.includes(1)}
                    onChange={() => toggleIndex(1)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium  text-center">
                    Who are we, and Other Important Information
                </div>
                {openIndex.includes(1) && (
                    <div className="collapse-content">
                        <div className="py-3">
                            <h3 className="text-3xl font-semibold pb-2">About this privacy policy</h3>
                            <p className="mr-4 text-xl text-justify">
                                This policy explains how we collect and handle your information across all of our websites and other services. We’ll review this policy from time to time to make sure it’s up-to-date. If we make changes, we’ll post the latest version here. When we make significant changes, we’ll let you know when you next access our services, or by other communications. This version was last updated on the date stated at the beginning of it. <br />
                                Our website is not intended for children, and we do not knowingly collect data relating to children.<br />
                                It is important that you read this privacy policy together with any other privacy policy or fair processing policy we may provide on specific occasions when we are collecting or processing personal data about you so that you are fully aware of how and why we are using your data. This privacy policy supplements other notices and privacy policies and is not intended to override them.<br />
                                It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us.

                            </p>
                        </div>
                        <div className="py-3">
                            <h3 className="text-3xl font-semibold pb-2">Controller</h3>
                            <p className="mr-4 text-xl text-justify">
                                Last Call is made up of different legal entities. This privacy policy is issued on behalf of Novus Solutions Inc. so when we mention "Last Call”, "we", "us" or "our" in this privacy policy, we are referring to the relevant party responsible for processing your data. We will let you know which entity will be the controller for your data when you purchase a product or service with us. Novus Solutions Inc. is the controller and responsible for this website. <br />
                                We have appointed a data privacy manager who is responsible for overseeing questions in relation to this privacy policy. If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact the data privacy manager using the details set out below.<br />
                            </p>
                        </div>
                        <div className="py-3">
                            <h3 className="text-3xl font-semibold pb-2">Contact Details</h3>
                            <p className="mr-4 text-xl text-justify">
                                If you have any questions about this privacy policy or our privacy practices, please contact our data privacy manager in the following ways: <br />
                                Full name of Canada entity: Novus Solutions Inc. <br />
                                Email address: privacy@novussss.com <br />
                                You can also contact us via our Contact Us page. <br />

                            </p>
                        </div>
                    </div>
                )}
            </div>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex.includes(2)}
                    onChange={() => toggleIndex(2)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium text-center">
                    Third Party Links
                </div>
                {openIndex.includes(2) && (
                    <div className="collapse-content">
                        <p className="mr-4 text-xl text-justify">
                            This website, may include links to third-party websites, plug-ins and further applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
                        </p>
                    </div>
                )}
            </div>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex.includes(3)}
                    onChange={() => toggleIndex(3)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium text-center">
                    What personal data do we collect?
                </div>
                {openIndex.includes(3) && (
                    <div className="collapse-content">
                        <p className="mr-4 text-xl text-justify">
                            Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data). Everyone who uses our services will have bits and pieces of information about them collected, stored and processed. However, we do not collect more information than we need.
                            We have grouped together the different kinds of personal data that we may use, collect, store and transfer, as follows:
                        </p>
                        <ol className="text-justify list-decimal pl-5 py-4 text-xl">
                            <li><span className="font-semibold">Identity Data</span> includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth and gender.</li>
                            <li><span className="font-semibold">Contact Data</span> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><span className="font-semibold">Financial Data</span> includes bank account and payment card details. However, please note that Last Call uses secure third-party gateways to process credit card information and does not store or process credit cards itself.</li>
                            <li><span className="font-semibold">Transaction Data</span> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                            <li><span className="font-semibold">Technical Data</span> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                            <li><span className="font-semibold">Profile Data</span> includes your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses.</li>
                            <li><span className="font-semibold">Usage Data</span> includes information about how you use our website, products and services.</li>
                            <li><span className="font-semibold">Marketing and Communications Data</span> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
                        </ol>
                        <p className="mr-4 text-xl text-justify">
                            We also collect, use and share Aggregated Data such as statistical or demographic data for any purpose. Aggregated Data could be derived from your personal data but is not considered personal data in law as this data will not directly or indirectly reveal your identity. For example, we may aggregate your Usage Data to calculate the percentage of users accessing a specific website feature. However, if we combine or connect Aggregated Data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this privacy policy. <br />
                            We do not collect any Special Categories of Personal Data about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health, and genetic and biometric data). Nor do we collect any information about criminal convictions and offences. <br />
                            Payments are processed by Stripe. Any credit card details stored for recurring payments are done so on Stripe's system. No credit card information is stored by Last Call. Payments must be received prior to reservations being confirmed.
                        </p>
                    </div>
                )}
            </div>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex.includes(4)}
                    onChange={() => toggleIndex(4)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium text-center">
                    What if you don’t provide your personal data?
                </div>
                {openIndex.includes(4) && (
                    <div className="collapse-content">
                        <p className="mr-4 text-xl text-justify">
                            Where we need to collect personal data by law, or under the terms of a contract we have with you, and you fail to provide that data when requested, we may not be able to perform the contract we have, or are trying to enter into, with you (for example, to provide you with goods or services). In this case, we may have to cancel a product or service you have with us, but we will notify you if this is the case at the time.
                        </p>
                    </div>
                )}
            </div>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex.includes(5)}
                    onChange={() => toggleIndex(5)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium text-center">
                    How do we collect your personal data?
                </div>
                {openIndex.includes(5) && (
                    <div className="collapse-content">
                        <p className="mr-4 text-xl text-justify">
                            We use different methods to collect data from and about you, including through:
                        </p>
                        <ol className="text-justify list-decimal pl-5 py-4 text-xl">
                            <li>
                                <span className="font-semibold">Directly from you</span>
                                You may give us your Identity, Contact and Financial Data by filling in forms or by corresponding with us by post, phone, email or otherwise. This includes personal data you provide when you: <br />
                                <ul className="text-justify list-disc pl-5 py-4 text-xl">
                                    <li>apply to use our products or services;</li>
                                    <li>create an account on our website and/or mobile apps;</li>
                                    <li>subscribe to our service or publications;</li>
                                    <li>request marketing to be sent to you;</li>
                                    <li>enter a competition, promotion or survey; or</li>
                                    <li>give us feedback or contact us</li>
                                </ul>
                            </li>
                            <li>
                                <span className="font-semibold">Automated technologies or interactions</span>
                                We will receive personal data (including Technical Data) about you from various third parties as set out below: <br />
                                <ul className="text-justify list-disc pl-5 py-4 text-xl">
                                    <li>analytics providers, such as Google; and</li>
                                    <li>advertising networks, such as Facebook</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                )}
            </div>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex.includes(6)}
                    onChange={() => toggleIndex(6)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium text-center">
                    How and why do we use your personal data?
                </div>
                {openIndex.includes(6) && (
                    <div className="collapse-content">
                        <p className="mr-4 text-xl text-justify">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ol className="text-justify list-decimal pl-5 py-4 text-xl">
                            <li>Where we need to perform the contract that we are about to enter, or have entered, into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal obligation.</li>
                        </ol>
                        <p className="mr-4 text-xl text-justify">
                            Please see the Glossary, at the end of this privacy policy, to find out more about the types of lawful basis that we will rely on to process your personal data. <br />
                            Generally, as detailed in the “using your personal data” table below, we do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message. <br />
                            You have the right to withdraw consent to marketing at any time by contacting us. <br />
                        </p>
                        <h3 className="text-3xl font-semibold py-2">Using your personal data</h3>
                        <p className="mr-4 text-xl text-justify">
                            We have set out below, in a table format, a description of all the ways we plan to use your personal data, and which of the legal bases we rely on to do so. We have also identified what our legitimate interests are where appropriate.
                            We may process your personal data for more than one lawful ground depending on the specific purpose for which we are using your data. Please contact us if you need details about the specific legal ground we are relying on to process your personal data where more than one ground has been set out in the table below.
                        </p>
                        <div className="overflow-x-auto mt-5">
                            <table className="table border border-slate-100">
                                <tbody>
                                    {/* row 1 */}
                                    <tr className="font-semibold">
                                        <td>Purpose/Activity</td>
                                        <td>Type of data</td>
                                        <td>Lawful basis for processing including basis of legitimate interest</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td>To register you as a new customer</td>
                                        <td>
                                            <p>(a) Identity</p>
                                            <p>(b) Contact</p>
                                        </td>
                                        <td>Performance of a contract with you</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <td>
                                            <p>To process and deliver our goods and/or services to you, including:</p>
                                            <p>(a) Manage payments, fees and charges; and</p>
                                            <p>(b) Collect and recover money owed to us</p>
                                        </td>
                                        <td>
                                            <p>(a) Identity</p>
                                            <p>(b) Contact</p>
                                            <p>(c) Financial</p>
                                            <p>(d) Transaction</p>
                                            <p>(e) Marketing & Communications</p>
                                        </td>
                                        <td>
                                            <p>(a) Performance of a contract with you</p>
                                            <p>(b) Necessary for our legitimate interests (to recover debts due to us)</p>
                                        </td>
                                    </tr>
                                    {/* row 4 */}
                                    <tr>
                                        <td>To provide you with access to, and enable you to use, our website and our mobile app</td>
                                        <td>
                                            <p>(a) Identity</p>
                                            <p>(b) Contact</p>
                                            <p>(c) Financial</p>
                                            <p>(d) Transaction</p>
                                        </td>
                                        <td>
                                            <p>(a) Performance of a contract with you</p>
                                            <p>(b) Necessary for our legitimate interests (to provide you with access to the content and information on our website and/or mobile apps)</p>
                                        </td>
                                    </tr>
                                    {/* row 5 */}
                                    <tr>
                                        <td>
                                            <p>To manage our relationship with you which will include:</p>
                                            <p>(a) Notifying you about changes to our terms or privacy policy; and</p>
                                            <p>(b) Asking you to leave a review or take a survey</p>
                                        </td>
                                        <td>
                                            <p>(a) Identity</p>
                                            <p>(b) Contact</p>
                                            <p>(c) Profile</p>
                                            <p>(d) Marketing & Communications</p>
                                        </td>
                                        <td>
                                            <p>(a) Performance of a contract with you</p>
                                            <p>(b) Necessary to comply with a legal obligation</p>
                                            <p>(c) Necessary for our legitimate interests (to keep our records updated and to study how customers use our products/services)</p>
                                        </td>
                                    </tr>
                                    {/* row 6 */}
                                    <tr>
                                        <td>To enable you to partake in a prize draw, competition or complete a survey</td>
                                        <td>
                                            <p>(a) Identity</p>
                                            <p>(b) Contact</p>
                                            <p>(c) Profile</p>
                                            <p>(d) Usage</p>
                                            <p>(e) Marketing & Communications</p>
                                        </td>
                                        <td>
                                            <p>(a) Performance of a contract with you</p>
                                            <p>(b) Necessary for our legitimate interests (to study how customers use our products/services, to develop them and grow our business)</p>
                                        </td>
                                    </tr>
                                    {/* row 7 */}
                                    <tr>
                                        <td>To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data)</td>
                                        <td>
                                            <p>(a) Identity</p>
                                            <p>(b) Contact</p>
                                            <p>(c) Technical</p>
                                        </td>
                                        <td>
                                            <p>(a) Necessary for our legitimate interests (for running our business, provision of administration and IT services, network security, to prevent fraud and in the context of a business reorganisation or group restructuring exercise)</p>
                                            <p>(b) Necessary to comply with a legal obligation</p>
                                        </td>
                                    </tr>
                                    {/* row 8 */}
                                    <tr>
                                        <td>To deliver relevant website and mobile app content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you</td>
                                        <td>
                                            <p>(a) Identity</p>
                                            <p>(b) Contact</p>
                                            <p>(c) Profile</p>
                                            <p>(d) Usage</p>
                                            <p>(e) Marketing & Communications</p>
                                            <p>(f) Technical</p>
                                        </td>
                                        <td>Necessary for our legitimate interests (to study how customers use our products/services, to develop them, to grow our business and to inform our marketing strategy)</td>
                                    </tr>
                                    {/* row 9 */}
                                    <tr>
                                        <td>To use data analytics to improve our website, products/services, marketing, customer relationships and experiences</td>
                                        <td>
                                            <p>(a) Technical</p>
                                            <p>(b) Usage</p>
                                        </td>
                                        <td>Necessary for our legitimate interests (to define types of customers for our products and services, to keep our website updated and relevant, to develop our business and to inform our marketing strategy)</td>
                                    </tr>
                                    {/* row 10 */}
                                    <tr>
                                        <td>To make suggestions and recommendations to you about our services, or our restaurant partners, that may be of interest to you</td>
                                        <td>
                                            <p>(a) Identity</p>
                                            <p>(b) Contact</p>
                                            <p>(c) Technical</p>
                                            <p>(d) Usage</p>
                                            <p>(e) Profile</p>
                                            <p>(f) Marketing & Communications</p>
                                        </td>
                                        <td>Necessary for our legitimate interests (to develop our products/services and grow our business)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex.includes(7)}
                    onChange={() => toggleIndex(7)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium text-center">
                    Marketing
                </div>
                {openIndex.includes(7) && (
                    <div className="collapse-content">
                        <p className="mr-4 text-xl text-justify">
                            We strive to provide you with choices regarding certain personal data uses, particularly around marketing and advertising. We have established the following personal data control mechanisms: <br />

                            Promotional offers from us <br />
                            We may use your Identity, Contact, Technical, Usage and Profile Data to form a view on what we think you may want or need, or what may be of interest to you. This is how we decide which products, services and offers may be relevant for you (we call this marketing). <br />
                            You will receive marketing communications from us if you have requested information from us or purchased goods or services from us, and you have not opted out of receiving that marketing. <br />

                            Third-party marketing <br />
                            We will get your express opt-in consent before we share your personal data with any third party for marketing purposes. <br />

                            Opting out <br />
                            You can ask us or third parties to stop sending you marketing messages at any time by contacting us at any time. <br />
                            Where you opt-out of receiving these marketing messages, this will not apply to the personal data provided to us as a result of a product/service purchase, warranty registration, product/service experience or other transactions. <br />

                        </p>
                    </div>
                )}
            </div>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex.includes(8)}
                    onChange={() => toggleIndex(8)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium text-center">
                    Do we use cookies or similar technologies?
                </div>
                {openIndex.includes(8) && (
                    <div className="collapse-content">
                        <p className="mr-4 text-xl text-justify">
                            We use cookies and similar technologies to help deliver, optimise, personalise and analyse our services and for advertising purposes. We use a combination of cookies and other technologies such as pixels/web beacons and tracking codes to collect information for use in line with the purposes set out in this policy. <br />
                            You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly. For more information about the cookies we use, please see our cookies policy.
                        </p>
                    </div>
                )}
            </div>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex.includes(9)}
                    onChange={() => toggleIndex(9)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium text-center">
                    Change of purpose
                </div>
                {openIndex.includes(9) && (
                    <div className="collapse-content">
                        <p className="mr-4 text-xl text-justify">
                            We will only use your personal data for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose. If you wish to get an explanation as to how the processing for the new purpose is compatible with the original purpose, please contact us. <br />
                            If we need to use your personal data for an unrelated purpose, we will notify you and we will explain the legal basis which allows us to do so. <br />
                            Please note that we may process your personal data without your knowledge or consent, in compliance with the above rules, where this is required or permitted by law.
                        </p>
                    </div>
                )}
            </div>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex.includes(10)}
                    onChange={() => toggleIndex(10)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium text-center">
                    Disclosing your personal data
                </div>
                {openIndex.includes(10) && (
                    <div className="collapse-content">
                        <p className="mr-4 text-xl text-justify">
                            We may share your personal data with the parties set out below for the purposes set out in the table in the “Why and how do we use your personal data” section above.
                        </p>
                        <ul className="text-justify list-disc pl-5 py-4 text-xl">
                            <li>Internal Third Parties as set out in the Glossary.</li>
                            <li>External Third Parties as set out in the Glossary.</li>
                            <li>Specific third parties as set out in the Glossary.</li>
                            <li>Third parties to whom we may choose to sell, transfer or merge parts of our business or our assets. Alternatively, we may seek to acquire other businesses or merge with them. If a change happens to our business, then the new owners may use your personal data in the same way as set out in this privacy policy.</li>
                        </ul>
                        <p className="mr-4 text-xl text-justify">
                            We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions. <br />
                            If you are booking a table at a restaurant from within our services’ booking platform, any personal data you submit as part of the booking process will be shared with the relevant restaurant and/or a third party contracted to provide services on their behalf, in order to enable the booking to be processed. Before completing any booking, we encourage you to carefully review that restaurant's privacy policy so that you understand how that restaurant will use your information.
                        </p>
                    </div>
                )}
            </div>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex.includes(11)}
                    onChange={() => toggleIndex(11)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium text-center">
                    How do we keep your personal data secure?
                </div>
                {openIndex.includes(11) && (
                    <div className="collapse-content">
                        <p className="mr-4 text-xl text-justify">
                            Safeguarding your privacy is embedded in our culture and we use a combination of industry-standard methods to protect it and prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who must come into contact with your information to do their jobs and deliver our services. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality. <br />
                            Keeping your personal data secure is our highest priority. We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so. <br />
                            To make sure we maintain a culture of ‘Privacy by Design’, we provide thorough data protection and privacy training to all Novus Solutions Inc. employees. We develop our services with the goal of using the minimum amount of personal data possible, including through use of data minimisation techniques like anonymisation and pseudonymisation. Also, whenever we develop or update our services in ways that involve the collection or use of new forms of personal data, we conduct a privacy impact assessment to understand, and reduce, the likelihood of any unintended impact on you.
                        </p>
                    </div>
                )}
            </div>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex.includes(12)}
                    onChange={() => toggleIndex(12)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium text-center">
                    How long, and where, do we store your personal data?
                </div>
                {openIndex.includes(12) && (
                    <div className="collapse-content">
                        <p className="mr-4 text-xl text-justify">
                            We only keep your data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you. <br />
                            To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements. <br />
                            By law we have to keep basic information about our customers (including Contact, Identity, Financial and Transaction Data) for six years after they cease being customers for tax purposes. <br />
                            In some circumstances you can ask us to delete your data; see our “your legal rights” section below for further information. <br />
                            In some circumstances, we will anonymise your personal data (so that it can no longer be associated with you) for research or statistical purposes, in which case we may use this information indefinitely without further notice to you. <br />
                            Your data is securely stored in data centers around the world - the exact location depends on where you are when you use Last Call. Sometimes your data may be stored in countries with different levels of security to your own but we always make sure their standards meet ours, as set out in the “transferring your data internationally” section above.
                        </p>
                    </div>
                )}
            </div>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex.includes(13)}
                    onChange={() => toggleIndex(13)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium text-center">
                    Your Legal Rights
                </div>
                {openIndex.includes(13) && (
                    <div className="collapse-content">
                        <p className="mr-4 text-xl text-justify">
                            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                        </p>
                        <ol className="text-justify list-decimal pl-5 py-4 text-xl">
                            <li><span className="font-semibold">request access to your personal data</span>(commonly known as a "data subject access request"). This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.</li>
                            <li><span className="font-semibold">request correction of your personal data</span> that we hold about you. This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.</li>
                            <li><span className="font-semibold">request erasure of your personal data</span> This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your personal data to comply with local law. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.</li>
                            <li><span className="font-semibold">object to processing of your personal data</span> where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are processing your personal data for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate grounds to continue to process your information after receiving your objection (in accordance with data privacy laws), however, in such cases, we will provide reasons for our decision.</li>
                            <li>
                                <span className="font-semibold">request restriction of processing your personal data</span>
                                This enables you to ask us to suspend the processing of your personal data in the following scenarios:
                                <ul className="text-justify list-disc pl-5 py-4 text-xl">
                                    <li>If you want us to establish the data's accuracy.</li>
                                    <li>Where our use of the data is unlawful but you do not want us to erase it.</li>
                                    <li>Where you need us to hold the data even if we no longer require it as you need it to establish, exercise or defend legal claims.</li>
                                    <li>You have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it.</li>
                                </ul>
                            </li>
                            <li><span className="font-semibold">request transfer of your personal data</span> to you or to a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format. Note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.</li>
                            <li><span className="font-semibold">withdraw consent</span> where we are relying on consent to process your personal data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.</li>
                            <li>
                                <span className="font-semibold">Automated technologies or interactions</span>
                                We will receive personal data (including Technical Data) about you from various third parties as set out below: <br />
                                <ul className="text-justify list-disc pl-5 py-4 text-xl">
                                    <li>analytics providers, such as Google; and</li>
                                    <li>advertising networks, such as Facebook</li>
                                </ul>
                            </li>
                        </ol>
                        <p className="mr-4 text-xl text-justify">
                            If you wish to exercise any of the rights set out above, please contact us using the details in the “contact details” section, at the start of this privacy policy. <br />
                            To erase your data via our website, log in to your account, view your profile information, and under "Deactivate your account", click "Continue".
                        </p>
                        <div className="py-5">
                            <h3 className="text-3xl font-semibold pb-2">No fee usually required</h3>
                            <p className="mr-4 text-xl text-justify">
                                You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. Alternatively, we could refuse to comply with your request in these circumstances.
                            </p>
                        </div>
                        <div className="py-5">
                            <h3 className="text-3xl font-semibold pb-2">What we may need from you</h3>
                            <p className="mr-4 text-xl text-justify">
                                We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.
                            </p>
                        </div>
                        <div className="py-5">
                            <h3 className="text-3xl font-semibold pb-2">Time limit to respond</h3>
                            <p className="mr-4 text-xl text-justify">
                                We try to respond to all legitimate requests within one month. Occasionally it could take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.
                            </p>
                        </div>
                    </div>
                )}
            </div>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex.includes(14)}
                    onChange={() => toggleIndex(14)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium text-center">
                    GLOSSARY Lawful Basis
                </div>
                {openIndex.includes(14) && (
                    <div className="collapse-content">
                        <p className="mr-4 text-xl text-justify">
                            Legitimate Interest means the interest of our business in conducting and managing our business to enable us to give you the best service/product and the best and most secure experience. We make sure we consider and balance any potential impact on you (both positive and negative) and your rights before we process your personal data for our legitimate interests. We do not use your personal data for activities where our interests are overridden by the impact on you (unless we have your consent or are otherwise required or permitted to by law). You can obtain further information about how we assess our legitimate interests against any potential impact on you in respect of specific activities by contacting us. <br />
                            Performance of Contract means processing your data where it is necessary for the performance of a contract to which you are a party or to take steps at your request before entering into such a contract. <br />
                            Comply with a legal obligation means processing your personal data where it is necessary for compliance with a legal obligation that we are subject to.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PrivacyPolicy;
