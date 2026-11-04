export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9]" />
        {eyebrow}
      </span>
      <h2 className="h2 mt-5">{title}</h2>
      {subtitle && <p className="lead mt-5">{subtitle}</p>}
    </div>
  );
}
