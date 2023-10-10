
const footer = () => {
    const footerNavigation = {
        shop: [
          { name: 'Trending Movies', href: '#' },
          { name: 'Upcoming Movies', href: '#' },
          { name: 'Top rated movies', href: '#' },
          { name: 'Romantic Movies', href: '#' },
          { name: 'Accessories', href: '#' },
          { name: 'Comedy Movies', href: '#' },

        ],
        company: [
          { name: 'Who we are', href: '#' },
          { name: 'Sustainability', href: '#' },
          { name: 'Apis', href: '#' },
          { name: 'Careers', href: '#' },
          { name: 'Terms & Conditions', href: '#' },
          { name: 'Privacy', href: '#' },
        ],
        account: [
          { name: 'Manage Account', href: '#' },
          { name: 'Returns & Exchanges', href: '#' },
          { name: 'Redeem a Gift Card', href: '#' },
        ],
        connect: [
          { name: 'Contact Us', href: '#' },
          { name: 'Twitter', href: '#' },
          { name: 'Instagram', href: '#' },
          { name: 'Facebook', href: '#' },
          { name: 'Pinterest', href: '#' },

        ],
    }
      
  return (
    <footer aria-labelledby="footer-heading" className="bg-secondary">
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="grid grid-cols-2 gap-8 xl:col-span-2">
          <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <div>
              <h3 className="text-sm font-medium text-white">Movies</h3>
              <ul role="list" className="mt-6 space-y-6">
                {footerNavigation.shop.map((item) => (
                  <li key={item.name} className="text-sm">
                    <a href={item.href} className="text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white">SuiteMovies</h3>
              <ul role="list" className="mt-6 space-y-6">
                {footerNavigation.company.map((item) => (
                  <li key={item.name} className="text-sm">
                    <a href={item.href} className="text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <div>
              <h3 className="text-sm font-medium text-white">Account</h3>
              <ul role="list" className="mt-6 space-y-6">
                {footerNavigation.account.map((item) => (
                  <li key={item.name} className="text-sm">
                    <a href={item.href} className="text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white">Connect</h3>
              <ul role="list" className="mt-6 space-y-6">
                {footerNavigation.connect.map((item) => (
                  <li key={item.name} className="text-sm">
                    <a href={item.href} className="text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default footer