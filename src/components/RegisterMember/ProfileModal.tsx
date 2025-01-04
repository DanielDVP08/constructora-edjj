import { X } from "lucide-react";

interface ProfileModalProps {
  profile: {
    name: string;
    profession: string;
    location: string;
    bio: string;
    skills: string[];
    experience: string[];
    education: string[];
  };  
  onClose: () => void;
}

export default function ProfileModal({ profile, onClose }: ProfileModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X />
            </button>
          </div>
          <div className="mb-4">
            <p className="text-xl text-gray-600">{profile.profession}</p>
            <p className="text-gray-500">{profile.location}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Bio</h3>
            <p>{profile.bio}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Experience</h3>
            <ul className="list-disc list-inside">
              {profile.experience.map((exp, index) => (
                <li key={index}>{exp}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Education</h3>
            <ul className="list-disc list-inside">
              {profile.education.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
