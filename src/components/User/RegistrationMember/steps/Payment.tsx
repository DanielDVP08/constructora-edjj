'use client'

import { useState } from 'react'
import { CreditCard } from 'lucide-react'
// import { FieldValues } from 'react-hook-form'

// Mock function to simulate payment processing
const processPayment = (cardDetails:CardProps) => {
  return new Promise<PaymentResponse>((resolve) => {
    setTimeout(() => {
      // Simulate a successful payment 80% of the time
      console.log(cardDetails)
      const isApproved = Math.random() < 0.8
      resolve({ success: isApproved, message: isApproved ? 'Payment approved' : 'Payment declined' })
    }, 2000)
  })
}

interface PaymentProps{
    onNext: ({})=>void
    onPrevious: ()=>void
    // data : FieldValues
}

interface CardProps {
    number: string;
    name: string;
    expiry: string;
    cvc: string;
}

interface PaymentResponse{
  success:boolean
  message:string
}

export default function Payment({ onNext, onPrevious }:PaymentProps) {
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
  })
  const [paymentStatus, setPaymentStatus] = useState<PaymentResponse>()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e:React.SyntheticEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    const result = await processPayment(cardDetails)
    setPaymentStatus(result)
    setIsProcessing(false)
    if (result.success) {
      onNext({ paymentApproved: true })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold flex items-center">
        <CreditCard className="mr-2" /> Payment
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Card Number"
          value={cardDetails.number}
          onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Cardholder Name"
          value={cardDetails.name}
          onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Expiry (MM/YY)"
            value={cardDetails.expiry}
            onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="CVC"
            value={cardDetails.cvc}
            onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>
      {paymentStatus && (
        <div
          className={`p-4 rounded ${
            paymentStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {paymentStatus.message}
        </div>
      )}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPrevious}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          Previous
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={isProcessing || (paymentStatus && !paymentStatus.success)}
        >
          {isProcessing ? 'Processing...' : 'Pay and Continue'}
        </button>
      </div>
    </form>
  )
}

