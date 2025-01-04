"use client"

import { useState } from 'react'
import { User } from 'lucide-react'

interface ProfileCardProps {
  name: string
  profession: string
  location: string
  image: string
  onViewProfile: () => void
}

// export default function ProfileCard({ name, profession, location, image, onViewProfile }: ProfileCardProps) {
export default function ProfileCard({ name, profession, location, onViewProfile }: ProfileCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`bg-orange-500 transition-all duration-300 ${isHovered ? 'mx-auto w-24 h-24 flex justify-center items-center' : 'h-full'}`}>
        {isHovered ? (
          <User className="text-white w-8 h-8" />
        ) : (
          <div className="flex justify-center items-center h-64">
            <User className="text-white w-16 h-16" />
          </div>
        )}
      </div>
      {isHovered && (
        <div className="p-4">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-600">{profession}</p>
          <p className="text-gray-500 text-sm">{location}</p>
          <button 
            onClick={onViewProfile}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            View Profile
          </button>
        </div>
      )}
    </div>
  )
}

