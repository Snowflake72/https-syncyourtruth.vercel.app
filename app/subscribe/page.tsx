export default function Subscribe() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="p-8 max-w-md bg-gray-100 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Subscribe to Access All Features</h2>
        <p className="mb-6 text-center text-lg font-semibold">$6.99 every 2 weeks</p>
        <a
          href="https://buy.stripe.com/test_5kA4iV3bffPa9IsbII"
          className="block w-full bg-blue-600 text-white px-6 py-3 rounded-xl text-center hover:bg-blue-700 transition-colors"
        >
          Subscribe with Stripe
        </a>
        <p className="text-sm text-gray-600 mt-4 text-center">Secure payment processing by Stripe</p>
      </div>
    </div>
  )
}
