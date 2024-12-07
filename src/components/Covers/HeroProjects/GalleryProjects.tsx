"use client";

// import { Image } from "@nextui-org/react";
// import { useState, useCallback } from 'react'
// import PhotoAlbum from 'react-photo-album'
// import Lightbox from "yet-another-react-lightbox"
// import Zoom from "yet-another-react-lightbox/plugins/zoom"
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
// import { div } from 'framer-motion/client'
// import Image from "next/image";

const photos = [
  {
    src: "https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733351667/project14_adgvny.jpg",
    width: 800,
    height: 600,
    title: "Modern Office Complex",
  },
  {
    src: "https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733352297/project16_m9udmm.jpg",
    width: 800,
    height: 600,
    title: "Luxury Residential Tower",
  },
  {
    src: "https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733351667/project12_nejuaf.jpg",
    width: 800,
    height: 600,
    title: "Sustainable Shopping Center",
  },
  {
    src: "https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733351667/project13_omfyfh.jpg",
    width: 800,
    height: 400,
    title: "State-of-the-Art Hospital",
  },
  {
    src: "https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733351665/project10_sjxsl5.jpg",
    width: 800,
    height: 600,
    title: "Innovative Research Facility",
  },
  {
    src: "https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733351665/project11_hc8a1q.jpg",
    width: 800,
    height: 600,
    title: "Eco-Friendly School Campus",
  },
  {
    src: "https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733351665/project9_bbihvz.jpg",
    width: 800,
    height: 600,
    title: "Eco-Friendly School Campus",
  },
  {
    src: "https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733351665/project8_qj2aif.jpg",
    width: 800,
    height: 600,
    title: "Eco-Friendly School Campus",
  },
  {
    src: "https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733351665/project7_muqflx.jpg",
    width: 800,
    height: 600,
    title: "Eco-Friendly School Campus",
  },
  {
    src: "https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733351664/project4_iywcwh.jpg",
    width: 800,
    height: 600,
    title: "Eco-Friendly School Campus",
  },
  {
    src: "https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733351665/project6_piimzf.jpg",
    width: 800,
    height: 600,
    title: "Eco-Friendly School Campus",
  },
  {
    src: "https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733351665/project5_spb4m6.jpg",
    width: 800,
    height: 600,
    title: "Eco-Friendly School Campus",
  },
  {
    src: "https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733351664/project3_lhyyae.jpg",
    width: 800,
    height: 600,
    title: "Eco-Friendly School Campus",
  },
  {
    src: "https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733351664/project2_tdpui0.jpg",
    width: 800,
    height: 600,
    title: "Eco-Friendly School Campus",
  },
  {
    src: "https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733351664/project1_zayulx.jpg",
    width: 800,
    height: 600,
    title: "Eco-Friendly School Campus",
  },
];

export default function GalleryProjects() {
  //   const [index, setIndex] = useState(-1)

  //   const handleClick = useCallback((index: number) => {
  //     setIndex(index)
  //   }, [])

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Nuestros Proyectos
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {photos.map((photo, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              {/* <Image
                src={photo.src}
                alt={photo.title}
                width={photo.width}
                height={photo.height}
                // layout="fill"
                objectFit="cover"
                className="w-auto h-auto"
                // isZoomed
              /> */}
              <CldImage
                alt={photo.title}
                src={photo.src}
                width={photo.width}
                height={photo.height}
                // fill
                // priority
                crop={{
                  type: "fit",
                  source: true,
                }}
              />
            </motion.div>
          ))}

          {/* <PhotoAlbum
            photos={photos}
            layout="rows"
            targetRowHeight={300}
            onClick={({ index }) => handleClick(index)}
            renderPhoto={({ photo, wrapperStyle, imageProps }) => (
              <div style={{ position: 'relative', ...wrapperStyle }}>
                <Image {...imageProps} alt={photo.title} />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                  {photo.title}
                </div>
              </div>
            )}
          /> */}
        </motion.div>

        {/* <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Zoom, Thumbnails]}
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, .8)" },
            slideContainer: { padding: "40px" },
            closeButton: { color: "#fff" },
          }}
        /> */}
      </div>
    </section>
  );
}

// export default ProjectShowcase
