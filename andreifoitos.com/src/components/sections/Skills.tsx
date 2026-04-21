export default function Skills() {
  const groups = {
    "AI / ML": ["PyTorch", "TensorFlow", "Deep Learning"],
    "Backend": ["Python", "Django", "REST"],
    "Frontend": ["React", "TypeScript", "Tailwind"],
    "Tools": ["Docker", "Git", "Linux"],
  };

  return (
    <section className="py-24">
      <h2 className="text-3xl font-semibold mb-12">Skills</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(groups).map(([group, skills]) => (
          <div key={group}>
            <h3 className="font-semibold mb-3">{group}</h3>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}