import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "О салоне", href: "#about" },
  { label: "Мастера", href: "#masters" },
  { label: "Прайс", href: "#pricing" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-paper/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="font-display text-lg font-extrabold tracking-tight">
          Atelier Beauty
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-black/65 transition-colors hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button className="px-5 py-2.5 text-xs uppercase tracking-[0.12em]">Записаться</Button>
      </Container>
    </header>
  );
}
