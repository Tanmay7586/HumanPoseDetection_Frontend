import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import GymCard from "./GymCard"; // Create a GymCard component similarly to YogaCard

// Import exercise images
import squat from "../../assets/squat.png";
import deadlift from "../../assets/deadlift.png";
import benchpress from "../../assets/benchpress.png";
import pullup from "../../assets/pullup.png";
import plank from "../../assets/plank.png";

const Gyms = () => {
  const gymExercises = [
    {
      id: 1,
      imageSrc: squat,
      title: "Squat",
      description:
        "A fundamental exercise that strengthens the legs, glutes, and core, while improving balance and mobility.",
      advantages: [
        "Strengthens legs and glutes",
        "Improves mobility and posture",
        "Increases core strength",
      ],
      howToPerform: `
        Stand with feet shoulder-width apart.
        Bend your knees and lower your hips as if sitting in a chair.
        Keep your chest up and back straight.
        Push through your heels to return to a standing position.
      `,
    },
    {
      id: 2,
      imageSrc: deadlift,
      title: "Deadlift",
      description:
        "A compound movement that targets the entire posterior chain, including the back, glutes, and hamstrings.",
      advantages: [
        "Strengthens lower back and hamstrings",
        "Improves posture",
        "Increases core stability",
      ],
      howToPerform: `
        Stand with feet hip-width apart.
        Hinge at your hips, keeping your back flat as you lower to grip the barbell.
        Lift the barbell by extending your hips and knees, keeping the bar close to your body.
        Lower the bar back down in a controlled manner.
      `,
    },
    {
      id: 3,
      imageSrc: benchpress,
      title: "Bench Press",
      description:
        "A popular upper-body exercise that strengthens the chest, shoulders, and triceps.",
      advantages: [
        "Builds chest and shoulder strength",
        "Enhances upper body endurance",
        "Improves overall pressing power",
      ],
      howToPerform: `
        Lie flat on a bench with feet planted firmly on the floor.
        Grip the barbell with hands shoulder-width apart.
        Lower the bar to your chest, then press it back up to the starting position.
      `,
    },
    {
      id: 4,
      imageSrc: pullup,
      title: "Pull-Up",
      description:
        "An effective bodyweight exercise for building back, shoulder, and arm strength.",
      advantages: [
        "Strengthens upper back and shoulders",
        "Improves grip strength",
        "Enhances overall pulling power",
      ],
      howToPerform: `
        Grip the pull-up bar with hands shoulder-width apart, palms facing away.
        Hang with arms fully extended.
        Pull yourself up until your chin is above the bar, then lower down with control.
      `,
    },
    {
      id: 5,
      imageSrc: plank,
      title: "Plank",
      description:
        "A core-strengthening exercise that improves stability, balance, and endurance.",
      advantages: [
        "Strengthens core muscles",
        "Improves posture",
        "Enhances balance and stability",
      ],
      howToPerform: `
        Start in a push-up position with forearms on the ground.
        Keep your body in a straight line from head to heels.
        Engage your core and hold the position without letting your hips sag.
      `,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl py-6">
      <div>
        <h1
          id="gym-poses"
          className="text-center text-indigo-600 font-extrabold text-4xl pb-9"
        >
          Gym Exercises
        </h1>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
          {gymExercises.map((exercise) => (
            <GymCard
              key={exercise.id}
              id={exercise.id}
              imageSrc={exercise.imageSrc}
              title={exercise.title}
              description={exercise.description}
              advantages={exercise.advantages}
              howToPerform={exercise.howToPerform}
            />
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
};

export default Gyms;
