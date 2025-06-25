import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-3">Ownership</h2>
            <p className="mb-4">
              Sync Your Truth is owned and operated by Meagan. All rights to data, features, and branding are
              exclusively reserved to Meagan.
            </p>

            <h2 className="text-xl font-semibold mb-3">Service Description</h2>
            <p className="mb-4">
              Sync Your Truth provides a platform for logging synchronicities, sharing with your community, and
              exploring alignment through meaningful coincidences and patterns in your life.
            </p>

            <h2 className="text-xl font-semibold mb-3">Subscription Terms</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Subscription fee: $6.99 every 2 weeks</li>
              <li>Automatic renewal unless cancelled</li>
              <li>Access to all premium features included</li>
              <li>Cancellation available at any time</li>
            </ul>

            <h2 className="text-xl font-semibold mb-3">User Responsibilities</h2>
            <p className="mb-4">
              Users are responsible for maintaining the confidentiality of their account information and for all
              activities that occur under their account.
            </p>

            <h2 className="text-xl font-semibold mb-3">Limitation of Liability</h2>
            <p className="mb-4">
              The service is provided "as is" without warranties of any kind. Meagan shall not be liable for any
              indirect, incidental, or consequential damages.
            </p>

            <h2 className="text-xl font-semibold mb-3">Changes to Terms</h2>
            <p className="mb-4">
              These terms may be updated from time to time. Continued use of the service constitutes acceptance of any
              changes.
            </p>

            <p className="text-sm text-gray-600 mt-8">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
