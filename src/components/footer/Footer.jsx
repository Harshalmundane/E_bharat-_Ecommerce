import { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/myContext';

const Footer = () => {
  // eslint-disable-next-line no-unused-vars
  const { toggleMode, mode } = useContext(myContext);

  // Helper styles based on mode
  const darkModeStyles = {
    backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
    color: mode === 'dark' ? 'white' : '',
  };

  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray-300" style={darkModeStyles}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            {/* Categories Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                style={{ color: mode === 'dark' ? 'white' : '' }}
              >
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                {['Home', 'Order', 'Local For Vocal', 'Cart'].map((item) => (
                  <li key={item}>
                    <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>
                      {item}
                    </a>
                  </li>
                ))}
              </nav>
            </div>

            {/* Customer Service Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase"
                style={{ color: mode === 'dark' ? 'white' : '' }}
              >
                Customer Service
              </h2>
              <nav className="list-none mb-10">
                {[
                  { to: '/returnpolicy', text: 'Return Policy' },
                  { to: '/about', text: 'About' },
                  { to: '/contact', text: 'Contact Us' },
                ].map(({ to, text }) => (
                  <li key={to}>
                    <Link to={to} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>
                      {text}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>

            {/* Services Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                style={{ color: mode === 'dark' ? 'white' : '' }}
              >
                Services
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to="/privacypolicy" className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Privacy
                  </Link>
                </li>
              </nav>
            </div>

            {/* Payment Image */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <img src="https://ecommerce-sk.vercel.app/pay.png" alt="Payment Methods" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-gray-200" style={{ backgroundColor: mode === 'dark' ? 'rgb(55 57 61)' : '', color: mode === 'dark' ? 'white' : '' }}>
          <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
            <Link to="/" className="flex">
              <h1 className="text-2xl font-bold text-black px-2 py-1 rounded" style={{ color: mode === 'dark' ? 'white' : '' }}>
                E-Bharat
              </h1>
            </Link>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4" style={{ color: mode === 'dark' ? 'white' : '' }}>
              © 2023 E-bharat —
              <a
                href="https://www.ebharat.com"
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-600 ml-1"
                style={{ color: mode === 'dark' ? 'white' : '' }}
              >
                www.ebharat.com
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              {[
                { icon: 'facebook', svgPath: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { icon: 'twitter', svgPath: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                { icon: 'instagram', svgPath: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01' },
                { icon: 'linkedin', svgPath: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
              // eslint-disable-next-line no-unused-vars
              ].map(({ icon, svgPath }, index) => (
                <a key={icon} className="ml-3 text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                    <path d={svgPath} />
                  </svg>
                </a>
              ))}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
