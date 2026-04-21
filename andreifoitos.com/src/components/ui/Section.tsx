type Props = {
  children: React.ReactNode;
};

export default function Section({ children }: Props) {
  return <section className="py-28">{children}</section>;
}