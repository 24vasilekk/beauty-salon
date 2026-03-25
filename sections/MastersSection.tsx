import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { masters } from "@/data/site";

export default function MastersSection() {
  return (
    <section id="masters" className="section-space bg-paper">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Мастера" title="Команда, которой доверяют красоту." />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {masters.map((master, index) => (
            <Reveal key={master.name} delay={index * 85}>
              <article className="group surface rounded-[var(--radius-xl)] border border-black/10 bg-white p-4">
                <div className={`h-64 rounded-2xl bg-gradient-to-br ${master.gradient} sm:h-72`}>
                  <span className="ml-3 mt-3 inline-flex rounded-full border border-black/15 bg-white/80 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-black/55">
                    Placeholder
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{master.name}</h3>
                <p className="mt-1 text-sm text-black/60">{master.role}</p>
                <div className="mt-4 opacity-0 transition duration-300 group-hover:opacity-100">
                  <Button className="w-full">Записаться</Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
