import LogoImg from '../img/logoFooter.jpeg'


const footerNavigation = {
    solutions: [
        { name: 'Parts', href: '/parts' },
        { name: 'Documents', href: '/Documents' },
        { name: 'Service', href: '/Service' },
    ],
    support: [
        { name: 'Demonstration', href: '/Demonstration' },
        //   { name: 'Pricing', href: '/Pricing' },
        { name: 'Whitepapers', href: '/Whitepapers' },
        //   { name: 'API Reference', href: '/Api_Reference' },
    ],
    company: [
        { name: 'About', href: '/About' },
        { name: 'Blog', href: '/Blog' },
        //   { name: 'Partners', href: '/Partners' },
    ],
    legal: [
        { name: 'Claim', href: '/Claim' },
        { name: 'Privacy', href: '/Privacy' },
        { name: 'Terms', href: '/Terms' },
    ],
}

function Footer() {
    return (
        <div className="mx-auto lg:mt-8 max-w-7xl px-6 lg:px-8">
            <footer
                aria-labelledby="footer-heading"
                className="relative border-t border-gray-900/10 py-24 sm:mt-56 sm:py-32"
            >
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>
                <div className="xl:grid xl:grid-cols-4 xl:gap-8">
                    {/* Logo */}
                    <div>
                        <img
                            className="h-32 w-auto pl-0 sm:pl-10"
                            src={LogoImg}
                            alt="Company name"
                        />
                    </div>

                    {/* Navigation Sections */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:col-span-3 xl:mt-0 sm:pl-10 md:pl-10">
                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
                            <ul className="mt-6 space-y-4">
                                {footerNavigation.solutions.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                            <ul className="mt-6 space-y-4">
                                {footerNavigation.support.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                            <ul className="mt-6 space-y-4">
                                {footerNavigation.company.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold leading-6 text-gray-900">Contact</h3>
                            <ul className="mt-6 space-y-2 text-sm leading-6 text-gray-600">
                                <li>
                                    <span className="font-medium text-gray-900">Headquarters:</span> Corpus Christi, Texas 78336
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900">Phone:</span>{' '}
                                    <a href="tel:7193395617" className="hover:text-gray-900">719-339-5617</a>
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900">Email:</span>{' '}
                                    <a href="mailto:info@huboem.com" className="hover:text-gray-900">info@huboem.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )

}

export default Footer;