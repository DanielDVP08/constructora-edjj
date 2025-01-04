'use client'

import { useRouter } from 'next/navigation'
import { CheckCircle } from 'lucide-react'
import { FieldValues } from 'react-hook-form'

export default function CheckBusiness(data:FieldValues) {
  const router = useRouter()

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="flex items-center justify-center mb-6">
        <CheckCircle className="w-16 h-16 text-green-500 mr-2" />
        <h2 className="text-3xl font-bold">Profile Created Successfully!</h2>
      </div>
      <div className="space-y-4 mb-8">
        <p className="text-xl">Thank you for creating your business profile, {data.businessName}!</p>
        <p>Your account has been set up and is ready to use.</p>
      </div>
      <button onClick={() => router.push('/business/dashboard')} className="w-full border rounded py-2 bg-black text-white">
        Go to Dashboard
      </button>
    </div>
  )
}

