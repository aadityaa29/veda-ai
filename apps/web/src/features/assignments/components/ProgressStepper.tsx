interface Props {
  currentStep: string;
}

const steps = [
  "Upload",
  "Processing",
  "Generating",
  "Completed",
];

export default function ProgressStepper({
  currentStep,
}: Props) {

  return (
    <div
      className="
      flex
      items-center
      gap-4
      mb-8
    "
    >
      {steps.map((step) => (

        <div
          key={step}
          className="
          flex
          items-center
          gap-2
        "
        >
          <div
            className={`
            w-4
            h-4
            rounded-full

            ${
              currentStep === step
                ? "bg-blue-500"
                : "bg-gray-600"
            }
          `}
          />

          <span>
            {step}
          </span>
        </div>
      ))}
    </div>
  );
}