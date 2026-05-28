import AssignmentCard
from "./AssignmentCard";

interface Props {
  assignments: any[];
}

export default function AssignmentGrid({
  assignments,
}: Props) {

  if (!assignments.length) {
    return (
      <div
        className="
        flex
        min-h-[420px]
        items-center
        justify-center
        rounded-3xl
        border
        border-dashed
        border-zinc-800
        bg-[#0F0F0F]
      "
      >
        <div className="text-center">

          <div
            className="
            mx-auto
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            border
            border-zinc-800
            bg-[#151515]
          "
          >
            <div
              className="
              h-3
              w-3
              rounded-full
              bg-zinc-600
            "
            />
          </div>

          <h3
            className="
            mt-5
            text-lg
            font-semibold
            text-white
          "
          >
            No assignments found
          </h3>

          <p
            className="
            mt-2
            max-w-sm
            text-sm
            leading-6
            text-zinc-500
          "
          >
            Generate your first AI-powered
            assignment to start building
            your assignment workspace.
          </p>

          <button
            className="
            mt-6
            rounded-2xl
            bg-white
            px-5
            py-3
            text-sm
            font-semibold
            text-black
            transition-all
            hover:bg-zinc-200
          "
          >
            Create Assignment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
      grid
      grid-cols-1
      gap-5
      md:grid-cols-2
      2xl:grid-cols-3
    "
    >
      {assignments.map(
        (assignment) => (

          <div
            key={assignment._id}
            className="
            group
            relative
            transition-all
            duration-300
            hover:-translate-y-1
          "
          >

            {/* Glow */}
            <div
              className="
              absolute
              -inset-[1px]
              rounded-[28px]
              bg-gradient-to-r
              from-blue-500/0
              via-blue-500/10
              to-violet-500/0
              opacity-0
              blur-xl
              transition-all
              duration-500
              group-hover:opacity-100
            "
            />

            {/* Card */}
            <div className="relative">
              <AssignmentCard
                assignment={
                  assignment
                }
              />
            </div>
          </div>
        )
      )}
    </div>
  );
}