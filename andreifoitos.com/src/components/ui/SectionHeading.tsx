type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 className="text-3xl font-semibold">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-gray-600">{subtitle}</p>
      )}
    </div>
  );
}