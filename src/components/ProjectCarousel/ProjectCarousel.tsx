"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button, Image } from "@nextui-org/react";

interface Project {
  id: number;
  title: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Office Complex",
    type: "image",
    src: "/assets/HeroFondo.jpg",
  },
  {
    id: 2,
    title: "Shopping Mall Renovation",
    type: "image",
    src: "/assets/HeroFondo.jpg",
  },
  {
    id: 3,
    title: "Industrial Warehouse",
    type: "image",
    src: "/assets/HeroFondo.jpg",
  },
  {
    id: 4,
    title: "Eco-Friendly Housing",
    type: "image",
    src: "/assets/HeroFondo.jpg",
  },
  {
    id: 5,
    title: "Historic Building Restoration",
    type: "image",
    src: "/assets/HeroFondo.jpg",
  },
  {
    id: 5,
    title: "Historic Building Restoration",
    type: "image",
    src: "/assets/HeroFondo.jpg",
  },
  {
    id: 6,
    title: "Historic Building Restoration",
    type: "image",
    src: "/assets/HeroFondo.jpg",
  },
  {
    id: 7,
    title: "Historic Building Restoration",
    type: "image",
    src: "/assets/HeroFondo.jpg",
  },
  {
    id: 8,
    title: "Historic Building Restoration",
    type: "image",
    src: "/assets/HeroFondo.jpg",
  },
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = projects.length - 3;
  //   const [isPlaying, setIsPlaying] = useState<number | null>(null)

  //   const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  //   const handlePlayVideo = (index: number) => {
  //     if (isPlaying !== null && isPlaying !== index) {
  //       videoRefs.current[isPlaying]?.pause()
  //     }
  //     if (isPlaying === index) {
  //       videoRefs.current[index]?.pause()
  //       setIsPlaying(null)
  //     } else {
  //       videoRefs.current[index]?.play()
  //       setIsPlaying(index)
  //     }
  //   }

  //   useEffect(() => {
  //     videoRefs.current = videoRefs.current.slice(0, projects.length);
  //   }, [projects]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* <h2 className="text-3xl font-bold text-center mb-8">Proyectos</h2> */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {projects.map((project) => (
              <div key={project.id} className="w-1/3 flex-shrink-0 px-2">
                <div className="relative aspect-video">
                  {project.type === "image" ? (
                    <Image
                      isZoomed
                      src={project.src}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                      width={600}
                      height={200}
                    />
                  ) : (
                    <>
                      {/* <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={project.src}
                        className="w-full h-full object-cover rounded-lg"
                        poster={project.thumbnail}
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute inset-0 m-auto bg-black/50 hover:bg-black/70 text-white"
                        onClick={() => handlePlayVideo(index)}
                        aria-label={isPlaying === index ? "Pause video" : "Play video"}
                      >
                        <Play className="h-8 w-8" />
                      </Button> */}
                    </>
                  )}
                </div>
                {/* <h3 className="mt-2 text-lg font-semibold">Proyecto</h3> */}
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="light"
          size="sm"
          radius="full"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={prevSlide}
          disabled={currentIndex === 0}
          aria-label="Previous projects"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="light"
          size="sm"
          radius="full"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={nextSlide}
          disabled={currentIndex === maxIndex}
          aria-label="Next projects"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
              index === currentIndex ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to project set ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
