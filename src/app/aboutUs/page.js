'use client';

import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-4xl font-bold text-center">About KartGen</h1>
      <p className="text-lg text-gray-600 text-center">
        KartGen is a modern, high-performance e-commerce engine built for the future of online shopping.
      </p>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-gray-700">
            At KartGen, our mission is to empower businesses of all sizes with a seamless platform to manage, showcase, and sell their products. We believe e-commerce should be fast, flexible, and beautiful — for both admins and customers.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Why KartGen?</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>⚡ Built with Next.js for blazing-fast performance</li>
            <li>📦 Rich product features including images, reviews, and dynamic filters</li>
            <li>🛠️ Admin-first design for easy management</li>
            <li>📱 Fully responsive for all devices</li>
            <li>🧩 Extensible and developer-friendly architecture</li>
          </ul>
        </CardContent>
      </Card>

      <div className="text-center pt-6">
        <p className="text-gray-600">
          We're not just building a product. We're building the future of online retail — one feature at a time.
        </p>
      </div>
    </section>
  );
}
