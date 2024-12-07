import { Mail } from 'lucide-react'

export default function VerificactionEmailPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <div className="bg-white p-6 rounded-full shadow-md inline-block mb-6">
          <Mail className="w-16 h-16 text-primary" aria-hidden="true" />
        </div>
        <h1 className="text-2xl font-bold mb-2 text-gray-800">Revisa tu Correo Electronico</h1>
        <p className="text-gray-600">Verifica tu cuenta para continuar</p>
      </div>
    </div>
  )
}