import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Sync Your Truth</h1>
      <p className="text-lg mb-6 text-center max-w-2xl">
        Log synchronicities, share with your community, and unlock alignment.
      </p>
      <Link href="/subscribe" className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors">
        Subscribe Now
      </Link>
    </div>
  )
}
