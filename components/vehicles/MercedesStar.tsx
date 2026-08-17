export default function MercedesStar({
  className = "",
  title = "Mercedes-Benz",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <circle cx="60" cy="60" r="56.5" stroke="currentColor" strokeWidth="2.25" />
      <circle
        cx="60"
        cy="60"
        r="51"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.45"
      />
      <g
        stroke="currentColor"
        strokeWidth="5.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="60" y1="60" x2="60" y2="14" />
        <line x1="60" y1="60" x2="100.5" y2="83.5" />
        <line x1="60" y1="60" x2="19.5" y2="83.5" />
      </g>
    </svg>
  );
}
