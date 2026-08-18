import Link from "next/link";

const BRAND_LOGOS = [
  { slug: "honda", name: "Honda", href: "/brands/honda", Mark: HondaMark },
  { slug: "toyota", name: "Toyota", href: "/brands/toyota", Mark: ToyotaMark },
  { slug: "bmw", name: "BMW", href: "/brands/bmw", Mark: BmwMark },
  { slug: "nissan", name: "Nissan", href: "/brands/nissan", Mark: NissanMark },
  {
    slug: "hyundai",
    name: "Hyundai",
    href: "/brands/hyundai",
    Mark: HyundaiMark,
  },
] as const;

export default function BrandLogoStrip() {
  return (
    <section
      aria-label="Brands we import"
      className="border-t border-neutral-200 bg-white"
    >
      <ul className="logo-strip-scroll mx-auto flex w-full max-w-7xl flex-nowrap items-center gap-10 overflow-x-auto overscroll-x-contain px-8 py-5 sm:gap-12 sm:px-10 sm:py-6 lg:justify-evenly lg:gap-6">
        {BRAND_LOGOS.map(({ slug, name, href, Mark }) => (
          <li key={slug} className="shrink-0">
            <Link
              href={href}
              aria-label={`${name} collection`}
              className="flex h-8 items-center justify-center opacity-80 transition-opacity hover:opacity-100 sm:h-9"
            >
              <Mark />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function HondaMark() {
  return (
    <svg
      viewBox="0 0 140 36"
      className="h-7 w-auto sm:h-8"
      aria-hidden
    >
      <rect width="36" height="36" rx="4" fill="#E40521" />
      <path
        fill="#fff"
        d="M10 7h6.2v9.2h9.6V7H32v22h-6.2v-9.2h-9.6V29H10V7z"
      />
      <text
        x="46"
        y="25"
        fontSize="16"
        fontWeight="600"
        letterSpacing="0.22em"
        className="fill-[#111827] font-display"
      >
        HONDA
      </text>
    </svg>
  );
}

function ToyotaMark() {
  return (
    <svg
      viewBox="0 0 148 36"
      className="h-7 w-auto sm:h-8"
      aria-hidden
    >
      <g
        fill="none"
        stroke="#EB0A1E"
        strokeWidth="2.4"
        transform="translate(0 2)"
      >
        <ellipse cx="22" cy="16" rx="20" ry="9.5" />
        <ellipse cx="22" cy="14" rx="8.5" ry="13.5" />
        <ellipse cx="22" cy="14" rx="3.6" ry="13.5" />
      </g>
      <text
        x="50"
        y="25"
        fontSize="16"
        fontWeight="600"
        letterSpacing="0.18em"
        className="fill-[#111827] font-display"
      >
        TOYOTA
      </text>
    </svg>
  );
}

function BmwMark() {
  return (
    <svg
      viewBox="0 0 108 36"
      className="h-7 w-auto sm:h-8"
      aria-hidden
    >
      <circle cx="18" cy="18" r="17" fill="#1C1C1C" />
      <circle cx="18" cy="18" r="12.2" fill="#fff" />
      <path d="M18 5.8V18h12.2A12.2 12.2 0 0 0 18 5.8Z" fill="#1C69D4" />
      <path d="M18 18v12.2H5.8A12.2 12.2 0 0 1 18 18Z" fill="#1C69D4" />
      <text
        x="42"
        y="25"
        fontSize="16"
        fontWeight="600"
        letterSpacing="0.28em"
        className="fill-[#111827] font-display"
      >
        BMW
      </text>
    </svg>
  );
}

function NissanMark() {
  return (
    <svg
      viewBox="0 0 132 36"
      className="h-7 w-auto sm:h-8"
      aria-hidden
    >
      <circle cx="18" cy="18" r="16" fill="none" stroke="#C3002F" strokeWidth="2.2" />
      <path
        d="M6 18h24"
        stroke="#C3002F"
        strokeWidth="2.2"
        strokeLinecap="square"
      />
      <path
        d="M18 4.5c3.4 4.2 5.2 8.6 5.2 13.5S21.4 27.3 18 31.5C14.6 27.3 12.8 22.9 12.8 18S14.6 8.7 18 4.5Z"
        fill="none"
        stroke="#C3002F"
        strokeWidth="1.8"
      />
      <text
        x="42"
        y="25"
        fontSize="16"
        fontWeight="600"
        letterSpacing="0.18em"
        className="fill-[#111827] font-display"
      >
        NISSAN
      </text>
    </svg>
  );
}

function HyundaiMark() {
  return (
    <svg
      viewBox="0 0 156 36"
      className="h-7 w-auto sm:h-8"
      aria-hidden
    >
      <ellipse cx="20" cy="18" rx="18" ry="16" fill="#002C5F" />
      <path
        fill="#fff"
        d="M11.2 11.2c2.4-1.8 6.2-2 8.6.2l8 6.4v7.2l-9.2-7.4v7.4H14.4V17.4l-3.2 2.6v-8.8z"
      />
      <text
        x="46"
        y="25"
        fontSize="15"
        fontWeight="600"
        letterSpacing="0.16em"
        className="fill-[#111827] font-display"
      >
        HYUNDAI
      </text>
    </svg>
  );
}
