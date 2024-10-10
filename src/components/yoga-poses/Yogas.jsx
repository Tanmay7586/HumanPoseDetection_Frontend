import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import YogaCard from "./YogaCard";
import utkatasana from "../../assets/utkatasana.png";
import utkatasanavid from "../../assets/utkatasana.gif";
import bhujangasana from "../../assets/bhujangasana.png";
import bhujangasanavid from "../../assets/bhujangasana.gif";
import adhomukhasvanasana from "../../assets/adhomukhasvanasana.png";
import adhomukhasvanasanavid from "../../assets/adhomukhasvanasana.gif";
import vrikshasana from "../../assets/vrikshasana1.png";
import vrikshasanavid from "../../assets/vrikshasana.gif";
import trikonasana from "../../assets/trikonasana.png";
import trikonasanavid from "../../assets/trikonasana.gif";
import virabhadrasana from "../../assets/virabhadrasana.png";
import virabhadrasanavid from "../../assets/virabhadrasana.gif";

const Yogas = () => {
  const yogaPoses = [
    {
      id: 1,
      imageSrc: utkatasana,
      gifSrc: utkatasanavid, // Added GIF source
      title: "Utkatasana",
      description:
        "Also known as Chair Pose, Utkatasana engages the core and strengthens the legs while promoting good posture.",
      advantages: [
        "Strengthens thighs and ankles",
        "Stretches shoulders and chest",
        "Stimulates the abdominal organs, heart, and diaphragm",
      ],
      howToPerform: `
        Stand with your feet together.
        Bend your knees and lower your hips as if sitting in a chair.
        Raise your arms above your head, keeping them straight.
        Hold the position while breathing deeply.
      `,
    },
    {
      id: 2,
      imageSrc: bhujangasana,
      gifSrc: bhujangasanavid, // Added GIF source
      title: "Bhujangasana",
      description:
        "Cobra Pose, or Bhujangasana, opens the heart and stretches the chest while strengthening the spine.",
      advantages: [
        "Strengthens the spine",
        "Opens up the chest and lungs",
        "Improves circulation",
      ],
      howToPerform: `
        Lie face down with your legs straight and feet hip-width apart.
        Place your hands under your shoulders.
        Gently lift your chest off the ground while keeping your pelvis down.
        Hold for a few breaths, then lower back down.
      `,
    },
    {
      id: 3,
      imageSrc: adhomukhasvanasana,
      gifSrc: adhomukhasvanasanavid, // Added GIF source
      title: "Adho Mukha Svanasana",
      description:
        "Commonly known as Downward-Facing Dog, this pose rejuvenates the body by stretching the spine and hamstrings.",
      advantages: [
        "Calms the brain and helps relieve stress",
        "Energizes the body",
        "Stretches shoulders, hamstrings, calves, arches, and hands",
      ],
      howToPerform: `
        Start on your hands and knees.
        Tuck your toes and lift your hips up and back.
        Straighten your legs and press your heels towards the ground.
        Keep your head between your arms and hold the position.
      `,
    },
    {
      id: 4,
      imageSrc: vrikshasana,
      gifSrc: vrikshasanavid, // Added GIF source
      title: "Vrikshasana",
      description:
        "Tree Pose, or Vrikshasana, enhances balance and concentration while grounding the practitioner.",
      advantages: [
        "Improves balance and stability",
        "Strengthens the legs and core",
        "Increases focus and concentration",
      ],
      howToPerform: `
        Stand tall with your feet together.
        Shift your weight to your left leg.
        Place your right foot on your left inner thigh or calf (avoid the knee).
        Bring your hands together in front of your chest or raise them overhead.
        Hold the position and focus on a point in front of you.
      `,
    },
    {
      id: 5,
      imageSrc: trikonasana,
      gifSrc: trikonasanavid, // Added GIF source
      title: "Trikonasana",
      description:
        "Triangle Pose, or Trikonasana, opens the hips, stretches the sides of the body, and promotes stability.",
      advantages: [
        "Stretches and strengthens the thighs, knees, and ankles",
        "Relieves backache and neck pain",
        "Improves digestion",
      ],
      howToPerform: `
        Stand with your feet wide apart.
        Turn your right foot out and your left foot slightly in.
        Extend your arms parallel to the ground.
        Reach your right hand towards your right foot, keeping your left arm extended upwards.
        Hold the position and switch sides.
      `,
    },
    {
      id: 6,
      imageSrc: virabhadrasana,
      gifSrc: virabhadrasanavid, // Added GIF source
      title: "Virabhadrasana",
      description:
        "Warrior Pose, or Virabhadrasana, builds strength, confidence, and focus while opening the heart.",
      advantages: [
        "Strengthens the legs and core",
        "Improves balance and stability",
        "Increases stamina and concentration",
      ],
      howToPerform: `
        Stand tall and step your left foot back about 3-4 feet.
        Bend your right knee, keeping it over your ankle.
        Extend your arms out to the sides, parallel to the ground.
        Turn your head to look over your right hand.
        Hold the position and switch sides.
      `,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl py-6">
      <div>
        <h1
          id="yoga-poses"
          className="text-center text-indigo-600 font-extrabold text-4xl pb-9"
        >
          Yoga Poses
        </h1>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
          {yogaPoses.map((pose) => (
            <YogaCard
              key={pose.id}
              id={pose.id}
              imageSrc={pose.imageSrc}
              gifSrc={pose.gifSrc} // Pass the GIF source to YogaCard
              title={pose.title}
              description={pose.description}
              advantages={pose.advantages}
              howToPerform={pose.howToPerform}
            />
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
};

export default Yogas;
