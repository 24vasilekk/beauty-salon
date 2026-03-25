import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { reviews } from "@/data/site";

function Stars() {
  return (
    <div className="flex gap-1 text-sm text-black">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="section-space bg-paper">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Отзывы" title="Клиентский опыт, который говорит сам за себя." />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 75}>
              <article className="surface rounded-[var(--radius-xl)] border border-black/10 bg-white p-6">
                <Stars />
                <p className="mt-4 text-sm leading-relaxed text-black/65">{review.text}</p>
                <p className="mt-5 text-sm font-semibold tracking-tight">{review.name}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
