import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { pricing } from "@/data/site";

export default function PricingSection() {
  return (
    <section id="pricing" className="section-space bg-white">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Прайс" title="Прозрачная стоимость услуг." />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pricing.map((group, groupIndex) => (
            <Reveal key={group.category} delay={groupIndex * 90}>
              <article className="surface rounded-[var(--radius-xl)] border border-black/10 bg-[#faf9f7] p-6">
                <h3 className="text-2xl font-semibold tracking-tight">{group.category}</h3>
                <ul className="mt-5">
                  {group.items.map((row) => (
                    <li
                      key={row.service}
                      className="flex items-start justify-between gap-4 border-b border-black/10 py-3 transition-colors hover:bg-black/[0.03]"
                    >
                      <span className="text-sm text-black/70">{row.service}</span>
                      <span className="whitespace-nowrap text-sm font-semibold">{row.price}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
