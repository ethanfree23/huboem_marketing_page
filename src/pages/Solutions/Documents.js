import quickAccess from '../../img/quickAccess.webp'
import forgetting from '../../img/forgetting.webp'


const features = [
    {
        name: 'Quick access',
        description:
            'Rapidly locate the document you need for any machine in your factory, all from one portal.',
        imageSrc: quickAccess,
        imageAlt: 'Quick access',
    },
    {
        name: 'Forget about losing docs',
        description:
            "No longer will there be an issue finding the information you need for your organization. It's all right there.",
        imageSrc: forgetting,
        imageAlt: 'Person finding stuff.',
    },
]

function Documents() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="max-w-3xl">
                        {/* <h2 className="font-semibold text-gray-500"></h2> */}
                        <h2 className="font-semibold text-gray-500">Documents</h2>
                        <p className="mt-2 text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get the Information</p>
                        <p className="mt-4 text-gray-500">
                            Sometimes, a quick glance helps avoid wasting time reworking. But accessing the information can cost even more time. Now, easily scan the qr code and get the information you need.
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

export default Documents;