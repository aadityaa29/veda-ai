export default function StudentInfoSection() {

  return (
    <div
      className="
      grid
      grid-cols-1
      md:grid-cols-3
      gap-6
      mb-12
    "
    >

      <div>
        <p
          className="
          text-sm
          text-gray-400
          mb-2
        "
        >
          Student Name
        </p>

        <div
          className="
          border-b
          border-white/20
          h-8
        "
        />
      </div>

      <div>
        <p
          className="
          text-sm
          text-gray-400
          mb-2
        "
        >
          Roll Number
        </p>

        <div
          className="
          border-b
          border-white/20
          h-8
        "
        />
      </div>

      <div>
        <p
          className="
          text-sm
          text-gray-400
          mb-2
        "
        >
          Class / Section
        </p>

        <div
          className="
          border-b
          border-white/20
          h-8
        "
        />
      </div>
    </div>
  );
}