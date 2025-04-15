export default function Products() {
    return (
      <section className="px-6 py-12 max-w-4xl mx-auto text-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-center">🚀 What <span className="text-primary">KartGen</span> Offers</h2>
  
        <div className="space-y-10">
  
          <div>
            <h3 className="text-xl font-semibold mb-2">🛒 Dynamic Product Management</h3>
            <p>
              Easily create, update, and organize your product listings through a seamless admin dashboard and a powerful backend.
              Whether you're managing 10 products or 10,000, KartGen scales with you.
            </p>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold mb-2">⚡ Real-time Performance</h3>
            <p>
              Built with cutting-edge technologies like <strong>Next.js</strong>, <strong>PostgreSQL</strong>, and <strong>Prisma</strong>,
              KartGen delivers ultra-fast loading, smooth user interactions, and efficient data handling — even under heavy traffic.
            </p>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold mb-2">📦 Rich Product Displays</h3>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>High-quality images & interactive galleries</li>
              <li>Detailed descriptions</li>
              <li>Feature highlights and technical specs</li>
              <li>Price breakdowns with discounts or offers</li>
              <li>Tags, customer ratings, and user reviews</li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold mb-2">🔍 Smart Filtering & Search</h3>
            <p>
              Empower users to find exactly what they need with intuitive filtering by category, price, ratings, and more — backed by lightning-fast search.
            </p>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold mb-2">📱 Fully Responsive</h3>
            <p>
              From wide desktops to compact mobile screens, KartGen ensures a consistent and beautiful experience across all devices.
            </p>
          </div>
  
        </div>
      </section>
    );
  }
  