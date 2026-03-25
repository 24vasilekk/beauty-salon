import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/site";

export default function ServicesSection() {
  return (
    <section id="services" className="section-space bg-paper">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Услуги" title="Аккуратный сервис для идеального результата." />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 70}>
              <article className="surface rounded-[var(--radius-xl)] border border-black/10 bg-white p-6">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 text-black/65">
                  {service.icon}
                </span>
                <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/60">{service.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
