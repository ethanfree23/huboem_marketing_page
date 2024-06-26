// import { Profiler } from 'react';
import PartsOne from '../../img/bottlingPlant.jpg';
import PartsTwo from '../../img/partTwo.jpeg';
import notification from '../../img/notification.png';

const features = [
    {
        name: 'Order serial-specific parts',
        description:
            "From your machine's profile, easily order spare parts, knowing with full confidence the part you are ordering is the proper fit and generation for your machine.",
        imageSrc: PartsOne,
        imageAlt: 'Machine parts.',
    },
    {
        name: 'Save days worth of down time',
        description:
            "Using HubOEM, users experience a 60% decrease in order fullfillment time. That is a 60% decrease in downtime due to part failure.",
        imageSrc: PartsTwo,
        imageAlt: 'Machine parts.',
    },
    {
        name: 'Receive notifications based on usage history',
        description:
            "Based on how you are ordering parts across your machines, we can help prepare your business for potential risks. A notification can be the difference between the line running and costing money.",
        imageSrc: notification,
        imageAlt: 'Machine parts.',
    },
]

function Parts() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="max-w-3xl">
                        {/* <h2 className="font-semibold text-gray-500"></h2> */}
                        <h2 className="font-semibold text-gray-500">Parts</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Repalcements and upgrades</p>
                        <p className="mt-4 text-gray-500">
                            Having the right parts on hand before any issues arise is our goal at HubOEM. We want to ensure the CPG avoids as much downtime as possible through expedient fullfillment, recurring orders, and notifications.
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

export default Parts;