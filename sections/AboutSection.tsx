import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { aboutStats } from "@/data/site";

export default function AboutSection() {
  return (
    <section id="about" className="section-space bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="font-accent text-xs uppercase tracking-[0.2em] text-black/45">О салоне</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-[0.94] tracking-tight sm:text-5xl lg:text-6xl">
              Эстетика, сервис и
              <span className="text-black/45"> профессионализм</span> без компромиссов.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-black/70 sm:text-base">
              Мы создали пространство в духе премиум салонов Москвы: внимательная консультация,
              выверенная работа мастеров и комфорт, который чувствуется в каждой детали.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-black/70 sm:text-base">
              Каждый визит персонализирован под ваш запрос, чтобы результат выглядел естественно,
              дорого и актуально.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {aboutStats.map((item, index) => (
            <Reveal key={item.label} delay={index * 80}>
              <article className="surface rounded-[var(--radius-xl)] border border-black/10 bg-[#faf9f7] p-6">
                <p className="font-display text-5xl font-extrabold leading-none tracking-tight">
                  {item.value}
                  <span className="ml-1 text-2xl font-medium text-black/50">{item.suffix}</span>
                </p>
                <p className="mt-3 font-accent text-xs uppercase tracking-[0.14em] text-black/55">
                  {item.label}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
