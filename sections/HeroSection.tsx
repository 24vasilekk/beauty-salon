"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function HeroSection() {
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 14;
      const y = (event.clientY / window.innerHeight - 0.5) * 10;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#101012] text-white">
      <div ref={layerRef} className="pointer-events-none absolute inset-0 transition-transform duration-500">
        <div className="absolute -left-16 -top-24 h-72 w-72 rounded-full bg-[#e9d5c4]/35 blur-[80px]" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#c7a590]/30 blur-[95px]" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#b68770]/20 blur-[75px]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_44%),linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_45%)]" />

      <Container className="section-space relative">
        <Reveal>
          <p className="font-accent text-xs uppercase tracking-[0.22em] text-white/70">Premium Beauty Studio</p>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="mt-4 max-w-5xl font-display text-4xl font-extrabold leading-[0.92] tracking-tight sm:text-6xl lg:text-8xl">
            Салон красоты
            <br />
            нового уровня
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-7 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base lg:text-lg">
            Авторские процедуры, деликатный сервис и эстетика, в которой каждая деталь работает
            на ваше ощущение уверенности.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button fullWidthMobile>Записаться</Button>
            <Button variant="secondary" fullWidthMobile>
              Посмотреть услуги
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
