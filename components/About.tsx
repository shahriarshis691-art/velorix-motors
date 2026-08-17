export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 border-t border-white/5 bg-[#050505] px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-[11px] tracking-[0.4em] text-vx-red">
          THE HOUSE
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-[0.14em]">
          <span className="metallic-text">ABOUT VELORIX</span>
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-vx-silver sm:text-base">
          Founded at the intersection of aerospace composites and grand-touring
          craft, VELORIX MOTORS builds electric machines for those who refuse
          the ordinary. Every chassis is numbered. Every surface is considered.
          Drive beyond.
        </p>
        <p className="mt-10 font-display text-[10px] tracking-[0.4em] text-vx-silver/50">
          © {new Date().getFullYear()} VELORIX MOTORS
        </p>
      </div>
    </section>
  );
}
