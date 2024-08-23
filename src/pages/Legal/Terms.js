import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

function Terms() {
    return (
        <div className="relative bg-white mt-12">
            <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
                <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
                    <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                        <img
                            className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
                            alt=""
                        />
                    </div>
                </div>
                <div className="px-6 lg:contents">
                    <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
                        <p className="text-base font-semibold leading-7 text-indigo-600">Legal</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Terms</h1>
                        <p className="mt-6 text-xl leading-8 text-gray-700">
                            These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our platform, you agree to comply with and be bound by these Terms.
                        </p>
                        <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                            <p>
                                We reserve the right to update these Terms at any time without prior notice. Continued use of the service after any changes are made will constitute your acceptance of the new Terms.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Account Usage.</strong> You are responsible for maintaining the confidentiality of your account and password, and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Content Ownership.</strong> All content provided on our platform, including text, graphics, logos, and software, is the property of our company or its content suppliers and is protected by intellectual property laws.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Prohibited Activities.</strong> You agree not to use the service for any unlawful purpose or to engage in any activity that could harm the service, other users, or our company.
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8">
                                We may terminate or suspend your account and access to the service at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users of the service, us, or third parties.
                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Limitation of Liability</h2>
                            <p className="mt-6">
                                In no event will our company be liable for any damages of any kind arising from the use of this service, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Terms;