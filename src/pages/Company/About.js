import OurPeople from './OurPeople.js'

const timeline = [
    {
        name: 'First Steps',
        description:
            'Began working on the software solution based on first-hand experience in the OEM industry.',
        date: 'Aug 2020',
        dateTime: '2020-08',
    },
    {
        name: 'Founded the company',
        description:
            'After establishing trials with prospect OEM and CPGs, HubOEM was formally founded.',
        date: 'Jan 2021',
        dateTime: '2021-01',
    },
    {
        name: 'Released beta',
        description:
            'Our first offical OEM customer came onboard, validating the applications vailidity both functionally and practically.',
        date: 'May 2023',
        dateTime: '2023-05',
    },
    {
        name: 'First group onboarded',
        description:
            'We successfully onboarded a family of five OEM brands under the same leadership: 20,000 machines, 50 distributors, & 8,000 end users.',
        date: 'Apr 2024',
        dateTime: '2024-04',
    },
]

function About() {
    return (
        <div className="bg-white">
            <main className="isolate">
                {/* Hero section */}
                <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
                    <div
                        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
                        aria-hidden="true"
                    />
                    <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                                We are a global team of professionals revolutionizing customer care in manufacturing
                                <span className="whitespace-nowrap"></span>.
                            </h1>
                            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                                <p className="text-lg leading-8 text-gray-600">
                                    Years ago, we noticed there was an missing tool in the aftermarket procurement process. After experiencing first hand the frustrations of downtime due to a part slowly making its way to the factory, we decided to create the solution ourselves. We are now one of the largest aftermarket platform for the food processing and packaging industry.
                                </p>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
                                alt=""
                                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                            />
                        </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
                </div>

                {/* Logo cloud */}
                {/* Need to choose new logos! */}
                <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Our customers love us
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                            Whether you are selling, ordering, or installing parts, our customers find HubOEM extremely useful to their business, helping improve customer service while also increasing revenue.
                        </p>
                        <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5">
                            <img
                                className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                                src="https://media.licdn.com/dms/image/D560BAQH6Et8nS0vY7w/company-logo_200_200/0/1699557231129/del_packaging_ltd_logo?e=2147483647&v=beta&t=qvcirycvJd9mw2OKoIZoADj-cqVJxhPdrB6HjQpjO94"
                                alt="Del Packaging"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                                src="https://www.probrewer.com/wp-content/uploads/2018/08/SD-logo-Palmer_Beverage_Badge_Logo_2_BlackRGB.jpg"
                                alt="Palmer Beverage Systems"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                                src="https://media.licdn.com/dms/image/C4E0BAQG1aMJ8AuMzPQ/company-logo_200_200/0/1630616721227/phoenix_stretch_wrapping_equipment_logo?e=2147483647&v=beta&t=PodB-0Eoj0K4Z-lVoSKRPfcxcDfNXwbWcv6_WOUL7i0"
                                alt="Phoenix"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1"
                                src="https://res.cloudinary.com/zoominfo-com/image/upload/w_140,h_140,c_fit/doverco.ca"
                                alt="Doverco"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 col-start-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1"
                                src="https://media.licdn.com/dms/image/D5612AQEIcgrWfNoJNg/article-cover_image-shrink_720_1280/0/1673197920965?e=2147483647&v=beta&t=Q3aW8jBhMLtI7KIEGgu-PteuZ6Enpv7YIB9UBWnLGyw"
                                alt="Pepsico"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 col-start-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1"
                                src="https://mma.prnewswire.com/media/271488/Abbott_Logo.jpg?p=twitter"
                                alt="Abbott"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 col-start-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvdyCEKJwf-ah1uSlgUgvM_iW8dSUqrA1PQg&s"
                                alt="McCormick"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 col-start-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1"
                                src="https://www.beaconjournal.com/gcdn/presto/2020/09/22/NABJ/fc21f59a-c159-448c-a3f1-e76a9ae137cc-JMSmuckerCo_Primary_Logo.jpg"
                                alt="Smuckers"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 col-start-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1"
                                src="https://media.licdn.com/dms/image/C4E0BAQHjQjWHObASeA/company-logo_200_200/0/1631306406245?e=2147483647&v=beta&t=D6PDntwfrVL-JqkuHD_5Em5cErf1QkIT1f8_nZ1dAHc"
                                alt="Daisy Brand"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 col-start-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1"
                                src="https://download.logo.wine/logo/Campbell_Soup_Company/Campbell_Soup_Company-Logo.wine.png"
                                alt="Campbell's"
                                width={158}
                                height={48}
                            />
                        </div>
                        <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                            <div
                                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                                style={{
                                    clipPath:
                                        'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Content section */}
                <div className="mt-32 overflow-hidden sm:mt-40">
                    <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our people</h2>
                                <p className="mt-6 text-xl leading-8 text-gray-600">
                                    We are a team of engineers, sales people, and operations experts. Seeing this application being used by so many people, and having the chance to work with such great professionals to improve their processes is our motivation.
                                </p>
                                <p className="mt-6 text-base leading-7 text-gray-600">
                                    We are capable to handle enterprise level accounts. From the architecture and structure of our software, through to the customer support, we are capable of delivering excellent follow through for your organization, so all the customer sees is your brand going above and beyond others.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                                    <img
                                        src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                                        alt=""
                                        className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                    />
                                </div>
                                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                                    <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                        <img
                                            src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                                            alt=""
                                            className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                        />
                                    </div>
                                    <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                        <img
                                            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                                            alt=""
                                            className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                        />
                                    </div>
                                    <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                        <img
                                            src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                                            alt=""
                                            className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <OurPeople /> */}
            </main>
        </div>
    )
}

export default About;