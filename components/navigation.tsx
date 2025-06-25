import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-black">
              Sync Your Truth
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/privacy" className="text-gray-600 hover:text-black">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-black">
              Terms
            </Link>
            <Link
              href="/subscribe"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
