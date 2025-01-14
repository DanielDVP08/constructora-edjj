'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  link: string
  icon: LucideIcon
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, link, icon: Icon }) => {
  return (
    <Link href={link}>
      <motion.div
        className="bg-amber-400 rounded-lg shadow-md p-6 h-full cursor-pointer flex flex-col items-center text-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Icon className="w-12 h-12 text-white mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </motion.div>
    </Link>
  )
}

export default ServiceCard

