import React from "react";
import { SimpleGrid } from "@chakra-ui/react"; // Import SimpleGrid from Chakra UI
import YogaCard from "./YogaCard"; // Import the YogaCard component
import utkatasana from "../../assets/utkatasana.png";
import bhujangasana from "../../assets/bhujangasana.png";
import adhomukhasvanasana from "../../assets/adhomukhasvanasana.png";
import vrikshasana from "../../assets/vrikshasana1.png";
import trikonasana from "../../assets/trikonasana.png";
import virabhadrasana from "../../assets/virabhadrasana.png";

const Yogas = () => {
  // Example data for different yoga poses
  const yogaPoses = [
    {
      imageSrc: utkatasana,
      title: "Utkatasana",
      description:
        "Also known as Chair Pose, Utkatasana engages the core and strengthens the legs while promoting good posture.",
    },
    {
      imageSrc: bhujangasana,
      title: "Bhujangasana",
      description:
        "Cobra Pose, or Bhujangasana, opens the heart and stretches the chest while strengthening the spine.",
    },
    {
      imageSrc: adhomukhasvanasana,
      title: "Adho Mukha Svanasana",
      description:
        "Commonly known as Downward-Facing Dog, this pose rejuvenates the body by stretching the spine and hamstrings.",
    },
    {
      imageSrc: vrikshasana,
      title: "Vrikshasana",
      description:
        "Tree Pose, or Vrikshasana, enhances balance and concentration while grounding the practitioner.",
    },
    {
      imageSrc: trikonasana,
      title: "Trikonasana",
      description:
        "Triangle Pose, or Trikonasana, opens the hips, stretches the sides of the body, and promotes stability.",
    },
    {
      imageSrc: virabhadrasana,
      title: "Virabhadrasana",
      description:
        "Warrior Pose, or Virabhadrasana, builds strength, confidence, and focus while opening the heart.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl py-6">
      <div>
        <h1 className="text-center text-indigo-600 font-extrabold text-4xl pb-9">
          Yoga Poses
        </h1>
        {/* Use SimpleGrid to layout cards in rows */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
          {yogaPoses.map((pose, index) => (
            <YogaCard
              key={index}
              imageSrc={pose.imageSrc}
              title={pose.title}
              description={pose.description}
            />
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
};

export default Yogas;
