import Header from '../components/Header';
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
  title: 'About | Soulfood',
  description: 'The story behind Soulfood — handcrafted sterling silver made with purpose.',
};

export default function AboutPage() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Header />

      <section className="bg-black pb-32">

        {/* Title — centered, full width, padded top for header */}
        <div className="flex items-center justify-center pt-48 pb-16 px-6">
          <h1
            className="font-montserrat text-stone-300 tracking-[0.3em] uppercase text-center"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 400 }}
          >
            About
          </h1>
        </div>

        {/* Video — full bleed width, short height */}
        <div
          className="w-full bg-stone-900 flex items-center justify-center text-stone-700 font-montserrat text-[9px] tracking-[0.4em] uppercase mb-28"
          style={{ height: '45vh' }}
        >
          Video Coming Soon
        </div>

        {/* Quote block */}
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center px-6">
            <p className="font-montserrat text-stone-500 text-sm tracking-[0.15em] normal-case leading-loose mb-16">
              In faith, &ldquo;food&rdquo; has never referred only to the needs of<br />
              the body, but also to the sustenance of the soul.
            </p>

            <p className="font-montserrat text-stone-500 text-sm tracking-[0.15em] normal-case leading-loose mb-16">
              &ldquo;Man shall not live by bread alone, but by every word<br />
              that comes from the mouth of God.&rdquo;<br />
              <span className="text-stone-600 tracking-[0.12em]">— Matthew 4:4</span>
            </p>

            <p
              className="font-cormorant text-white font-light leading-tight"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}
            >
              To live by his word — this is Soulfood.
            </p>
          </div>
        </ScrollReveal>

        {/* Philosophy */}
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center px-6 mt-32">
            <h2
              className="font-montserrat text-stone-300 tracking-[0.3em] uppercase text-center mb-10"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 400 }}
            >
              Philosophy
            </h2>

            <p className="font-montserrat text-stone-400 text-sm tracking-[0.12em] normal-case leading-loose mb-10">
              We believe adornment is never merely decoration. Each piece
              we place in your hands carries an intention — to slow you
              down, to remind you that beauty worth keeping is beauty
              worth making by hand.
            </p>

            <p className="font-montserrat text-stone-400 text-sm tracking-[0.12em] normal-case leading-loose mb-10">
              Sterling silver was chosen for its humility: it tarnishes
              with life, softens with wear, and brightens again with care.
              It is a material that asks something of you — and gives
              something back. Like faith, it is not static.
            </p>

            <p className="font-montserrat text-stone-400 text-sm tracking-[0.12em] normal-case leading-loose">
              Every Soulfood piece is made in small batches, finished by
              hand, and sent out without rush. We would rather make fewer
              things well than many things quickly. This is our craft,
              and our commitment.
            </p>
          </div>
        </ScrollReveal>

      </section>
    </div>
  );
}
