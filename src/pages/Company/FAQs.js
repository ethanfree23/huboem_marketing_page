const faqs = [
    {
        id: 1,
        question: "What size company is best for this application?",
        answer:
            "We work with a wide variety of OEMs from startups putting their first handful of machines into the field to established industry leaders with thousands of machines in their install base.",
    },
    {
        id: 2,
        question: "What if we already have a store on our website?",
        answer:
            "We aren’t afraid of a little competition! Your website store probably did not completely eliminate orders by phone and email, HubOEM is intended to work in concert with your other sales channels to drive after sales revenue growth.",
    },
    {
        id: 3,
        question: "Our machines are all custom built, will this solution still work for us?",
        answer:
            "Yes! This is exactly the problem HubOEM was designed to solve. Parts lists and manuals can be tracked at the machine specific/serial number level and tailored to each individual install. In fact, we now offer an integration that allows your to export your assembly drawings right from SolidWorks or other design software and we can pull all your individual parts directly into our system.",
    },
    {
        id: 4,
        question: "We like to be the main point of contact with our customers. Will this application facilitate direct communication?",
        answer:
            "If you are already using email and social media to interact with your customers, then this is really just another tool in that toolbox. Your machine’s view will still show your logo and all POs and messages go right to you.",
    },
    {
        id: 5,
        question: "We already have a CRM, how is this any different?",
        answer:
            "HubOEM is NOT a CRM. It is a customer service platform to better support your existing install base. In fact, we offer easy integration with many of the leading CRM providers to easily and seamlessly manage your customer data.",
    },
    {
        id: 6,
        question: "We sell plenty of parts already, why should we change what works?",
        answer:
            "Horses could get you from one place to another, but cars made it faster, easier and more reliable. HubOEM clients consistently sell more parts with less effort on the part of their aftersale team.",
    },
    {
        id: 7,
        question: "Our customers are large public companies. How do I know they will be open to using your product?",
        answer:
            "HubOEM is already working with large consumer-facing brands",
    },
    {
        id: 8,
        question: "Our machines have been in the field forever?",
        answer:
            "No Problem! Implementing HubOEM provides a great opportunity to connect with your install base, provide needed parts and service and assess opportunities for new equipment sales!",
    },
    {
        id: 9,
        question: "Our machines do not require any wear part replacements. How does HubOEM add value?",
        answer:
            "HubOEM provides a centralized point for viewing manuals and documentation as well as service requests.",
    },
    {
        id: 10,
        question: "Does HubOEM have API capabilities?",
        answer:
            "Yes, HubOEM has API integrations for easy connection to many common enterprise applications.",
    },
]
function FAQs() {
    return (
        <div className="mt-24">
        <div id="faq-section" className="mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
            <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
                {faqs.map((faq) => (
                    <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                        <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
                        <dd className="mt-4 lg:col-span-7 lg:mt-0">
                            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
        </div>
    )
};

export default FAQs;