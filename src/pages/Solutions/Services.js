import { Profiler } from 'react';
import serviceOne from '../../img/serviceOne.jpg'

const features = [
    {
        name: 'Schedule service',
        description:
            "Requesting for service has never been so easy. Simply access the machine's profile and fill out the request form.",
        imageSrc: serviceOne,
        imageAlt: 'Proud, hardworking, white man working on an American machine, helping push industry forward for himself, his family, and his nation.',
    },
]

function Service() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="max-w-3xl">
                        <h2 className="font-semibold text-gray-500">Service</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get the Guidance</p>
                        <p className="mt-4 text-gray-500">
                            Getting the help you need can make the difference in getting the job done on time. With HubOEM, you can interface with all your technicians from one platform.
                        </p>
                    </div>

                    <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                            >
                                <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                                    <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                                </div>
                                <div className="flex-auto lg:col-span-7 xl:col-span-8">
                                    <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                                        <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;