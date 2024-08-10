import LogoImg from '../img/logo.png'


const footerNavigation = {
    solutions: [
      { name: 'Parts', href: '/parts' },
      { name: 'Documents', href: '/Documents' },
      { name: 'Services', href: '/Services' },
    ],
    support: [
      { name: 'Demonstration', href: '/Demonstration' },
      { name: 'Pricing', href: '/Pricing' },
      { name: 'Whitepapers', href: '/Whitepapers' },
    //   { name: 'API Reference', href: '/Api_Reference' },
    ],
    company: [
      { name: 'About', href: '/About' },
      { name: 'Blog', href: '/Blog' },
      { name: 'Partners', href: '/Partners' },
    ],
    // legal: [
    //   { name: 'Claim', href: '/Claim' },
    //   { name: 'Privacy', href: '/Privacy' },
    //   { name: 'Terms', href: '/Terms' },
    // ],
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
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <img
                        className="h-7"
                        src={LogoImg}
                        alt="Company name"
                    />
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
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
                            <div className="mt-10 md:mt-0">
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
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
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
                            {/* <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                                <ul className="mt-6 space-y-4">
                                    {footerNavigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )

}

export default Footer;