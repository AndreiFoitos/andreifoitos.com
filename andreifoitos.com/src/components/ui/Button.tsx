export default function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ease-out";

  const styles = {
    primary:
      "bg-black text-white hover:opacity-90 active:scale-[0.98]",
    secondary:
      "border border-neutral-300 hover:bg-neutral-100 active:scale-[0.98]",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}