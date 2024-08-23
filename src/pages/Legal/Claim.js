import {
    CloudArrowUpIcon,
    // LockClosedIcon,
    // ServerIcon
} from '@heroicons/react/20/solid'

function Claim() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600">Legal</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Claims</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                The content provided on our platform is offered "as-is" and "as available." We are not liable for any inaccuracies, errors, or omissions in the data related to the machines listed on our site. All machine information, including but not limited to bill of materials (BOM), parts, and documents, is provided by the manufacturers and distributors. We do not warrant or guarantee the completeness, accuracy, availability, or reliability of this information.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                        alt=""
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p>
                                Under no circumstances shall we be held responsible for any direct, indirect, incidental, consequential, or special damages that may arise from the use of our platform. This includes, but is not limited to, any issues related to pricing, availability, or data accuracy. The users of our platform agree that they use the service at their own risk.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">No Endorsement.</strong> We do not endorse, certify, or guarantee the quality, safety, or legality of any machine, product, or service provided through our platform. Any opinions, advice, statements, offers, or other information or content made available through our platform are those of the respective manufacturers or distributors and not of our company.
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8">
                                By using our platform, you acknowledge that any reliance on the information provided is at your own risk. We strongly recommend that users verify all information with the machine manufacturers or distributors before making any decisions based on the data provided on our platform.
                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Legal Limitations.</h2>
                            <p className="mt-6">
                                These disclaimers and limitations of liability are an essential part of our agreement with you. If any of these terms are found to be unenforceable under applicable law, the remaining terms will still apply to the fullest extent possible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Claim;