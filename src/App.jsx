import React from 'react'

const App = () => {
  return (
    <div className='min-h-screen bg-[#f5f5f5] text-gray-900'>
    <header className="bg-white py-5 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="logo">
            <img src="/images/logo.png" alt="Nexcent Logo" className="w-36" />
          </div>
          <nav className="space-x-6">
            <a href="#" className="text-gray-800 hover:text-green-600">Home</a>
            <a href="#" className="text-gray-800 hover:text-green-600">Features</a>
            <a href="#" className="text-gray-800 hover:text-green-600">Community</a>
            <a href="#" className="text-gray-800 hover:text-green-600">Blog</a>
            <a href="#" className="text-gray-800 hover:text-green-600">Pricing</a>
          </nav>
          <a href="#" className="bg-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-600">Register Now →</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Lessons and insights <br /> from <span className="text-green-500">8 years</span>
            </h1>
            <p className="mb-6">Where to grow your business as a photographer: site or social media?</p>
            <a href="#" className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600">Register</a>
          </div>
          <div className="md:w-1/2">
            <img src="/images/hero-image.png" alt="Hero" className="w-full" />
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl font-bold mb-4">Our Clients</h2>
          <p className="mb-8">We have been working with some Fortune 500+ clients</p>
          <div className="flex justify-center gap-6">
            <img src="/images/client1.png" alt="Client 1" className="w-24" />
            <img src="/images/client2.png" alt="Client 2" className="w-24" />
            <img src="/images/client3.png" alt="Client 3" className="w-24" />
            <img src="/images/client4.png" alt="Client 4" className="w-24" />
            <img src="/images/client5.png" alt="Client 5" className="w-24" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl font-bold mb-8">Manage your entire community in a single system</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Membership Organisations', 'National Associations', 'Clubs And Groups'].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">{service}</h3>
                <p className="text-gray-600">Our membership management software provides full automation of membership renewals and payments</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">The unseen of spending three years at Pixelgrade</h2>
            <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at amet justo ipsum.</p>
            <a href="#" className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600">Learn More</a>
          </div>
          <div className="md:w-1/2">
            <img src="/images/cta-image.png" alt="CTA" className="w-full" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center text-white">
        <p>© 2025 Nexcent. All rights reserved.</p>
      </footer>
  </div>
  )
}

export default App
