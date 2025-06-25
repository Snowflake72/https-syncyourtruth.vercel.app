import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-3">Data Collection</h2>
            <p className="mb-4">
              This app collects only the data required to process payments and log synchronicity activity. We are
              committed to protecting your privacy and ensuring your personal information is handled responsibly.
            </p>

            <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Payment information processed securely through Stripe</li>
              <li>Synchronicity logs and entries you create</li>
              <li>Basic account information for service provision</li>
            </ul>

            <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
            <p className="mb-4">
              Your information is used solely to provide the Sync Your Truth service, process payments, and improve your
              experience with synchronicity tracking and community features.
            </p>

            <h2 className="text-xl font-semibold mb-3">Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction.
            </p>

            <p className="text-sm text-gray-600 mt-8">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
