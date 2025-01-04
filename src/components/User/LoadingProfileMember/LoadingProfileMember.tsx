'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { User, Mail, Lock, Cog, Bell, Calendar, FileText} from 'lucide-react'
// import { updateSession } from '../../../../actions/auth-action'

export default function LoadingPage() {
  const [currentIconIndex, setCurrentIconIndex] = useState(0)
  const router = useRouter()

  const icons = [
    <User key="user" />,
    <Mail key="mail" />,
    <Lock key="lock" />,
    <Cog key="cog" />,
    <Bell key="bell" />,
    <Calendar key="calendar" />,
    <FileText key="file-text" />,    
  ]

  useEffect(() => {
    const iconInterval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length)
    }, 500)

    const redirectTimeout = setTimeout(() => {
      // updateSession()
      router.push('/user/account') // Redirige al perfil
    }, 10000)

    return () => {
      clearInterval(iconInterval)
      clearTimeout(redirectTimeout)
    }
  }, [router,icons.length])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
      <div className="text-center space-y-8">
        <div className="relative w-48 h-48">
          {icons.map((icon, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full flex items-center justify-center text-6xl text-blue-600 dark:text-blue-400 transition-all duration-500 ease-in-out ${
                index === currentIconIndex
                  ? 'opacity-100 scale-100 rotate-0'
                  : 'opacity-0 scale-50 rotate-180'
              }`}
            >
              {icon}
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Welcome
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300">
            Your profile is being created
          </p>
        </div>
      </div>
    </div>
  )
}