import { CheckIcon } from '@heroicons/react/20/solid'
import {
    ArrowTrendingUpIcon,
    HandRaisedIcon,
    MagnifyingGlassIcon,
    LockClosedIcon,
    ShieldCheckIcon,
    CloudIcon,
} from '@heroicons/react/24/outline'
import AutomationImg from '../img/automation.jpg'
// import OrderingDashboardImg from '../img/orderingDashboard.png'
import HubOem from '../img/HubOem.png'
import DelLogo from '../img/logoDel.png'
// import MadeWestLogo from '../img/logoMadeWest.png'
// import SchneiderLogo from '../img/logoSchneider.png'
import PhoenixLogo from '../img/phoenixLogo.png'
import PalmerLogo from '../img/logoPalmer.png'
import AbbottLogo from '../img/abbottLogo.jpg'
import DaisyLogo from '../img/daisyLogo.jpg'
// import CircleBreweryLogo from '../img/logoCircleBrewery.png'


const features = [
    {
        name: 'All in one place',
        description:
            'HubOEM allows your customers to view manuals and warranties, schedule service, and order parts, for all the equipment in their facility. They can perform these critical maintenance tasks from the convenience of their laptop, tablet or mobile device.',
        icon: CloudIcon,
    },
    {
        name: 'Drive parts sales',
        description:
            'HubOEM pulls wear parts data and customer data to create timely, targeted order prompts. By streamlining the ordering process, HubOEM can also drive increased ordering in key wear components. A simplified ordering mechanism can drive 40%+ sales increases for some products!',
        icon: ArrowTrendingUpIcon,
    },
    {
        name: 'Handle service requests',
        description:
            'Customers can request service, send messages, photos and videos on a common platform with a common history for faster responses and more effective site visits.',
        icon: HandRaisedIcon,
    },
    {
        name: 'Gain insight with analytics',
        description:
            'In their May 6th issue, The Economist referred to Data as the world’s most valuable commodity. Our team of packaging industry experts and data scientists uses your historical sales information to find patterns and trends to help you determine how best to price your parts and services to maximize your revenue.',
        icon: MagnifyingGlassIcon,
    },
    {
        name: 'Create lock-in with your customers',
        description:
            'Increase customer retention, not just for parts and services, but for capital sales as well. When customers use HubOEM, they experience better customer service and their machines run more smoothly, leading them to stick with the OEM.',
        icon: LockClosedIcon,
    },
    {
        name: 'Handle warranties with ease',
        description:
            'Customers can accept and initiate their warranties on the app. When they purchase parts or request for services, we will keep track of what is covered under the warranty, so they can focus on getting their machines functioning.',
        icon: ShieldCheckIcon,
    },
]
const tiers = [
    {
        name: 'Starter',
        id: 'tier-freelancer',
        href: '#',
        priceMonthly: '$0',
        description: 'The essentials to provide documentation access for your customers.',
        features: ['Up to 50 licenses', 'Documents-only', 'No analytics', '48hr+ support response time'],
        mostPopular: false,
    },
    {
        name: 'Basic',
        id: 'tier-startup',
        href: '#',
        priceMonthly: '$1',
        description: 'A plan that scales with your rapidly growing business.',
        features: [
            'Ordering capabilities',
            'Analytics and reporting',
            '24hr support response time',
            'Recurring order automation capability',
        ],
        mostPopular: true,
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '?',
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Unlimited access to each machine',
            'Unlimited advanced features',
            'Advanced analytics',
            '1hr, dedicated support response time',
            'Free integrations',
        ],
        mostPopular: false,
    },
]
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
            "No Problem! Implementing HubOEM provides a great opportunity to connect with your install base, provide needed parts and services and assess opportunities for new equipment sales!",
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

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Homepage() {
    return (
        <div className="bg-white">
            <main className="isolate">
                {/* Hero section */}
                <div className="relative pt-14">
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5ED797] to-[#7FA4E7] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl text-center">
                                <h1 id="about-section" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Aftermarket Customer Service Platform
                                </h1>
                                <h2 className="text-xl sm:text-2xltracking-tight text-gray-900 sm:text-3xl pt-4">
                                    Parts, Service, Documents.
                                    {/* <br/> Cloud with confidence. */}
                                </h2>
                                <p className="mt-6 text-md sm:text-lg leading-8 text-gray-600">
                                    Boost your customer satisfaction while driving up your high margin revenue all while taking stress off of your parts and service team!
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <a
                                        href="#signup-section"
                                        className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                                    >
                                        Get started
                                    </a>
                                </div>
                            </div>
                            <div className="mt-16 flow-root sm:mt-24">
                                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                    <img
                                        src={HubOem}
                                        alt="App screenshot"
                                        width={2432}
                                        height={1442}
                                        className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#5ED797] to-[#7FA4E7] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>

                {/* Logo cloud */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={DelLogo}
                            alt="Transistor"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={PhoenixLogo}
                            alt="Reform"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={PalmerLogo}
                            alt="Tuple"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                            src={AbbottLogo}
                            alt="SavvyCal"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                            src={DaisyLogo}
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                    </div>
                    <div className="mt-16 flex justify-center">
                        <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
                            <span className="hidden md:inline">
                                OEMs, distributors, and CPGs save money, spend less, and are happier.
                            </span>
                            <a href="#" className="font-semibold text-blue-500">
                                <span className="absolute inset-0" aria-hidden="true" /> Learn more{' '}
                                <span aria-hidden="true">&rarr;</span>
                            </a>
                        </p>
                    </div>
                </div>

                {/* Feature section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 id="features-section" className="text-base font-semibold leading-7 text-blue-500">Deploy quickly</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Everything you need to manage your aftermarket business
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            OEMs can easily convert your manual aftermarket process into a digital, semi-automated flow. All it takes is sending us the data.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>

                {/* Testimonial section */}
                <div id="testimonials-section" className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
                        <img
                            className="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
                            src={AutomationImg}
                            alt=""
                        />
                        <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
                        <div className="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">
                            <div
                                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#5ED797] to-[#7FA4E7] opacity-[0.45]"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>
                        <div
                            className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
                            aria-hidden="true"
                        >
                            <div
                                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#5ED797] to-[#7FA4E7] opacity-25"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>
                        <div className="relative mx-auto max-w-2xl lg:mx-0">
                            {/* <img className="h-12 w-auto" src="https://tailwindui.com/img/logos/workcation-logo-white.svg" alt="" /> */}
                            <figure>
                                <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                                    <p>
                                        “HubOEM is an excellent tool to provide your aftermarket or maintenance team. Easily access a profile for each machine to view documents, order parts, and request for services. We help your effort in preventing down time and ensuring your machines are running optimally.”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-6 text-base text-white">
                                    <div className="font-semibold">Alex Johnson</div>
                                    <div className="mt-1">CEO of HubOEM</div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>

                {/* Pricing section */}
                <div className="py-24 sm:pt-48">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center">
                            <h2 id="pricing-section" className="text-base font-semibold leading-7 text-blue-500">Pricing</h2>
                            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Pricing plans for teams of&nbsp;all&nbsp;sizes
                            </p>
                        </div>
                        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
                            Our focus is to provide a great software to an industry that despirately needs it.
                            <br /> For this reason, we have priced out product to be extremely approachable and easy to start.
                        </p>
                        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {tiers.map((tier, tierIdx) => (
                                <div
                                    key={tier.id}
                                    className={classNames(
                                        tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                                        tierIdx === 0 ? 'lg:rounded-r-none' : '',
                                        tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                                        'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
                                    )}
                                >
                                    <div>
                                        <div className="flex items-center justify-between gap-x-4">
                                            <h3
                                                id={tier.id}
                                                className={classNames(
                                                    tier.mostPopular ? 'text-blue-500' : 'text-gray-900',
                                                    'text-lg font-semibold leading-8'
                                                )}
                                            >
                                                {tier.name === 'Enterprise' ? 'Enterprise' : tier.name}
                                            </h3>
                                            {tier.mostPopular ? (
                                                <p className="rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-500">
                                                    Most popular
                                                </p>
                                            ) : null}
                                        </div>
                                        <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                                        <p className="mt-6 flex items-baseline gap-x-1">
                                            {/* <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price[frequency.value]}</span> */}
                                            <span className="sm:text-2xl text-xl font-bold tracking-tight text-gray-900">
                                                {tier.name === 'Enterprise' ? 'Request for Quote' : tier.priceMonthly}
                                            </span>
                                            <span className="text-sm font-semibold leading-6 text-gray-600">
                                                {tier.name === 'Enterprise' ? '' : '/machine'}
                                            </span>
                                        </p>
                                        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                            {tier.features.map((feature) => (
                                                <li key={feature} className="flex gap-x-3">
                                                    <CheckIcon className="h-6 w-5 flex-none text-blue-500" aria-hidden="true" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <a
                                        href={tier.href}
                                        aria-describedby={tier.id}
                                        className={classNames(
                                            tier.mostPopular
                                                ? 'bg-blue-500 text-white shadow-sm hover:bg-blue-400'
                                                : 'text-blue-500 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                                            'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'
                                        )}
                                    >
                                        Buy plan
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQs */}
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

                {/* CTA section */}
                <div className="relative -z-10 mt-32 px-6 lg:px-8">
                    <div
                        className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#5ED797] to-[#7FA4E7] opacity-25"
                            style={{
                                clipPath:
                                    'polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)',
                            }}
                        />
                    </div>
                    <div id="signup-section" className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Boost your productivity.
                            <br />
                            Start using HubOEM today.
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            The time between "getting started" and starting is very minimal. Reach out today to see about a demo, a trial, or just getting straight to it!
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="https://calendly.com/ethan-huboem/30min"
                                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                            >
                                Get started
                            </a>
                            {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a> */}
                        </div>
                    </div>
                    <div
                        className="absolute left-1/2 right-0 top-full -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#5ED797] to-[#7FA4E7] opacity-30"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
            </main>
        </div>
    )

}

export default Homepage;
