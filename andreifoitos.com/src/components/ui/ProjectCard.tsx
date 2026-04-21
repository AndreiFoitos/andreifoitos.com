type Props = {
  title: string;
  problem: string;
  impact: string;
  tech: string[];
};

export default function ProjectCard({
  title,
  problem,
  impact,
  tech,
}: Props) {
  return (
    <div className="border rounded-2xl p-6 hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-gray-600">
        <span className="font-medium text-black">Problem:</span> {problem}
      </p>

      <p className="mt-2 text-gray-600">
        <span className="font-medium text-black">Impact:</span> {impact}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-sm px-3 py-1 bg-gray-100 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}