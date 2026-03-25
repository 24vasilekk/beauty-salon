import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="section-space bg-[#101012] text-white">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] p-7 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_42%)]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-accent text-xs uppercase tracking-[0.2em] text-white/65">Booking</p>
                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
                  Запишитесь прямо сейчас
                </h2>
              </div>
              <Button className="bg-white text-black hover:bg-white/90" fullWidthMobile>
                Записаться
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 lg:grid-cols-12">
          <Reveal className="rounded-[var(--radius-xl)] border border-white/15 bg-white/[0.04] p-6 sm:p-8 lg:col-span-5">
            <p className="font-accent text-xs uppercase tracking-[0.18em] text-white/55">Контакты</p>
            <div className="mt-6 space-y-5 text-white/88">
              <p>
                Москва, ул. Петровка, 21
                <br />
                Beauty Space, 2 этаж
              </p>
              <a href="tel:+74951234567" className="inline-block transition hover:text-white">
                +7 (495) 123-45-67
              </a>
            </div>
          </Reveal>
          <Reveal delay={110} className="rounded-[var(--radius-xl)] border border-white/15 bg-white/[0.04] p-3 lg:col-span-7">
            <div className="relative h-[280px] rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] sm:h-[340px]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:34px_34px]" />
              <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.16)]" />
              <p className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/70">
                Map placeholder
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
