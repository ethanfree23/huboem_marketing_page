import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

function Privacy() {
    return (
        <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
            <div
                className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
                aria-hidden="true"
            >
                <div
                    className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    style={{
                        clipPath:
                            'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <p className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Legal</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Privacy</h1>
                    <p className="mt-6 text-xl leading-8 text-gray-700">
                        We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines the types of data we collect, how we use it, and the measures we take to safeguard your information.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
                    <div className="relative lg:order-last lg:col-span-5">
                        <svg
                            className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                                    width={200}
                                    height={200}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path d="M0.5 0V200M200 0.5L0 0.499983" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" />
                        </svg>
                        <figure className="border-l border-indigo-600 pl-8">
                            <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                                <p>
                                    “Your privacy is our priority. We take all necessary steps to ensure that your data is handled with care and respect.”
                                </p>
                            </blockquote>
                            <figcaption className="mt-8 flex gap-x-4">
                                <img
                                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                    className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                                />
                                <div className="text-sm leading-6">
                                    <div className="font-semibold text-gray-900">Development Team</div>
                                    <div className="text-gray-600">@HubOEM_Dev</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
                        <p>
                            We collect personal information that you voluntarily provide when you register for an account, purchase a license, or use our service. This may include your name, email address, payment information, and any other information necessary to provide you with access to your machine profiles.
                        </p>
                        <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                            <li className="flex gap-x-3">
                                <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                <span>
                                    <strong className="font-semibold text-gray-900">Data Collection.</strong> We may also collect non-personal information such as your IP address, browser type, and usage data to help improve our service and enhance your experience on our platform.
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                <span>
                                    <strong className="font-semibold text-gray-900">Data Usage.</strong> The data we collect is used to provide access to your machine profiles, process transactions, send you related information, communicate updates, and improve our platform.
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                <span>
                                    <strong className="font-semibold text-gray-900">Data Security.</strong> We implement various security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
                                </span>
                            </li>
                        </ul>
                        <p className="mt-8">
                            We do not sell, trade, or otherwise transfer your personal information to third parties unless it is necessary to provide our service, comply with legal obligations, or protect our rights.
                        </p>
                        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Your Rights</h2>
                        <p className="mt-6">
                            You have the right to access, correct, or delete your personal information stored on our platform. If you wish to exercise these rights, please contact our support team.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Privacy;