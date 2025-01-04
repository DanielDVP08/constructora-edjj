import { Check } from 'lucide-react'

export default function ProgressBar({ steps, currentStep }:{ steps:{title:string,icon:string}[], currentStep:number }) {
  return (
    <div className="relative">
      
      <div className="hidden sm:flex justify-between items-center z-10">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                index <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
              }`}
            >
              {index < currentStep ? (
                <Check className="w-6 h-6" />
              ) : (
                index + 1
              )}
            </div>
            <span className="mt-2 text-sm text-gray-600">{step.title}</span>
          </div>
        ))}
      </div>
      <div className="sm:hidden flex justify-center items-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            'bg-blue-500 text-white'
          }`}
        >
          {currentStep + 1}
        </div>
      </div>

      {/* <div className="absolute top-5 left-0 right-0 h-1 bg-gray-300 z-0">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        ></div>
      </div> */}
    </div>
  )
}
