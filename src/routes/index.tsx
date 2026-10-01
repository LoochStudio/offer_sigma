import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, ArrowUpRight, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Коммерческое предложение для Sigma — Студия Луч" },
      { name: "description", content: "Перезапуск бренда и UX/UI AI-платформы Sigma за 3 месяца: этапы, смета и релевантные кейсы Студии Луч." },
      { property: "og:title", content: "Коммерческое предложение для Sigma — Студия Луч" },
      { property: "og:description", content: "Перезапуск бренда и UX/UI AI-платформы Sigma за 3 месяца: этапы, смета и релевантные кейсы." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navigation = [
  ["Контекст", "#context"], ["Этапы", "#roadmap"], ["Смета", "#pricing"], ["Кейсы", "#cases"], ["Контакты", "#contacts"],
];

const contextItems = [
  { title: "Контекст", text: "Переводим внутреннюю ИИ-платформу в коммерческий B2B-продукт. Цель спринта — найти PMF за 3 месяца силами компактной команды с использованием AI-инструментов." },
  { title: "Каналы продаж", text: "Готовим продукт под два направления: B2B-сделки через интеграторов (бренд, презентации, лендинги) и Self-service с платным трафиком (бесшовный онбординг от рекламы до первой ценности)." },
  { title: "Ориентиры", text: "Смотрим на стандарты лидеров AI-рынка (Glean, Dust.tt, Gumloop). Проектируем генеративный UI и собираем дизайн-систему поверх существующего кода, сохраняя единую базу." },
];

const tracks = [
  { title: "Маркетинг, бренд и self-service", months: [
    ["Октябрь", "Нейминг, логотип, мини-брендбук, общий лендинг и дизайн-скиллы для сборки презентаций."],
    ["Ноябрь", "Шаблоны сегментных лендингов, рекламные креативы, онбординг v2 с квалификацией лида через AI-агента."],
    ["Декабрь", "Запуск платного трафика, оптимизация онбординга на основе аналитики."],
  ] },
  { title: "UX/UI продукта", months: [
    ["Октябрь", "UX-аудит, фиксация принципов chat-first, проектирование библиотеки генеративного UI."],
    ["Ноябрь", "Визуальный слой дизайн-системы (токены, компоненты), мобильная адаптация (PWA)."],
    ["Декабрь", "Непрерывные UX-итерации в ритме релизов разработчиков (каждые 2–3 дня), передача спецификаций."],
  ] },
];

const pricing = [
  ["Арт-директор / Product Lead", "$75 / ч", "48 ч", "36 ч", "24 ч", "108 ч", ""],
  ["Senior Product Designer", "$40 / ч", "160 ч", "168 ч", "152 ч", "480 ч", ""],
  ["Brand Designer", "$40 / ч", "160 ч", "80 ч", "0 ч", "240 ч", ""],
  ["МАКСИМУМ ПО ПРОЕКТУ", "", "368 ч", "284 ч", "176 ч", "828 ч", "$36 900"],
];

import gurugrowImg from "@/assets/gurugrow.png.asset.json";
import box82Img from "@/assets/82box.png.asset.json";
import hircostImg from "@/assets/hircost.png.asset.json";
const caseImages = [gurugrowImg.url, box82Img.url, hircostImg.url];

const cases = [
  { title: "Айдентика и гайдбук для GuruGrow", href: "https://loo.ch/cases/gurugrow", label: "GURUGROW", category: "Бренд-система · Гайдбук", about: "Разработали дизайн-систему с нуля: зафиксировали визуальную модель, стандартизировали презентационные материалы, описали логику масштабирования.", relevance: "Показывает, как мы собираем бренд-систему. Делаем не просто картинки, а правила и шаблоны, чтобы вы могли сами верстать слайды и промо без нашего постоянного участия." },
  { title: "Редизайн сайта и UX для 82Box", href: "https://loo.ch/cases/82box", label: "82BOX", category: "Сайт · Конверсия", about: "Обновление визуального языка и UX. Спроектировали интуитивный интерфейс, оптимизировали конверсионную воронку и внедрили mobile-first.", relevance: "Похожий сценарий онбординга. Разбирали, как провести человека от первого касания до целевого действия так, чтобы он не отвалился по дороге." },
  { title: "Проектирование интерфейсов Hircost", href: "https://loo.ch/cases/hircost", label: "HIRCOST", category: "E-commerce · Продукт", about: "Разработка UX/UI для e-commerce-продукта. Систематизировали данные, спроектировали модульную систему и библиотеку компонентов поверх готового кода.", relevance: "Пример работы со сложным e-commerce-сервисом. Навели порядок в интерфейсе и отдали разработчикам компоненты прямо в формате их кодовой базы." },
  { title: "UX/UI для платежной и POS-экосистемы", label: "NDA", category: "Продукт · NDA", about: "Усилили продуктовую команду в период активного роадмапа: переработали интерфейсы кассовых терминалов, личный кабинет мерчанта, аналитику и программу лояльности. Спроектировали онбординг для регистрации пользователей в маркетплейсе.", relevance: "Пример того, как мы встраиваемся в плотный роадмап, сохраняем единый опыт на разных устройствах и проектируем сценарии онбординга, квалификации и сбора данных." },
];

function SectionHeading({ label, title, description }: { label: string; title: string; description?: string }) {
  return <div className="mb-10 md:mb-12"><span className="eyebrow">{label}</span><h2 className="mt-4 max-w-3xl text-[30px] leading-[1.12] font-normal md:text-[42px]">{title}</h2>{description && <p className="mt-5 max-w-3xl text-[15px] leading-[1.7] text-muted-foreground md:text-base">{description}</p>}</div>;
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="header-glass fixed inset-x-0 top-0 z-50 border-b border-border">
        <div className="proposal-container flex min-h-[64px] items-center justify-between gap-6 py-3 md:py-0">
          <a href="#top" className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-card px-3.5 py-2 text-[13px] font-medium text-foreground transition-colors hover:bg-accent" aria-label="Студия Луч x Sigma — наверх"><span className="size-2 rounded-full bg-positive" />Студия Луч <span className="text-muted-foreground">×</span> Sigma</a>
          <nav aria-label="Оглавление" className="hidden items-center gap-6 lg:flex">{navigation.map(([label, href]) => <a key={href} href={href} className="text-[13px] text-foreground/75 transition-colors hover:text-foreground">{label}</a>)}</nav>
          <a href="#contacts" className="flex shrink-0 items-center gap-1 text-[13px] font-medium lg:hidden">Контакты <ArrowUpRight className="size-3.5" /></a>
        </div>
        <nav aria-label="Оглавление для мобильных устройств" className="proposal-container flex gap-5 overflow-x-auto pb-3 lg:hidden">{navigation.map(([label, href]) => <a key={href} href={href} className="shrink-0 text-xs text-muted-foreground hover:text-foreground">{label}</a>)}</nav>
      </header>

      <main id="top">
        <section className="proposal-container pb-20 pt-44 md:pb-24 md:pt-44">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium">Коммерческое предложение · Sigma</span>
          <h1 className="mt-7 max-w-[1000px] text-[40px] leading-[1.09] font-normal md:text-[58px] lg:text-[68px]">Перезапуск бренда и UX/UI AI-платформы Sigma за 3 месяца</h1>
          <p className="mt-7 max-w-[750px] text-[17px] leading-[1.6] text-foreground/80 md:text-lg">Выводим технологический продукт на B2B-рынок: ребрендинг, self-service онбординг, конверсионные лендинги и chat-first интерфейс.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg" className="h-11 rounded-full px-6 shadow-none"><a href="#pricing">Изучить смету <ArrowDownRight /></a></Button><Button asChild variant="outline" size="lg" className="h-11 rounded-full border-border bg-card px-6 shadow-none"><a href="#contacts">Согласовать запуск <ArrowDownRight /></a></Button></div>
          <div className="mt-14 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-4">
            {[["Срок проекта", "3 месяца"], ["Период", "Октябрь — декабрь"], ["Потолок бюджета", "$36 900"], ["Формат", "Time & Material"]].map(([label, value]) => <div key={label} className="flex min-h-28 flex-col justify-between rounded-lg border border-border bg-card p-4 md:p-5"><span className="eyebrow">{label}</span><strong className="mt-4 text-base font-medium md:text-lg">{value}</strong></div>)}
          </div>
        </section>

        <section id="context" className="section-rule"><div className="proposal-container"><SectionHeading label="Вводные" title="Контекст и фокус" /><div className="grid gap-4 md:grid-cols-3">{contextItems.map(item => <article key={item.title} className="rounded-lg border border-border bg-card p-6 md:min-h-64 md:p-7"><h3 className="text-lg font-medium">{item.title}</h3><p className="mt-5 text-[15px] leading-[1.7] text-foreground/75">{item.text}</p></article>)}</div></div></section>

        <section id="roadmap" className="section-rule"><div className="proposal-container"><SectionHeading label="План работы" title="Два трека. Один запуск." /><div className="grid gap-x-5 gap-y-8 md:grid-cols-2 md:grid-rows-[auto_repeat(3,auto)]">{tracks.map(track => <div key={track.title} className="grid min-w-0 grid-rows-[auto_repeat(3,auto)] md:row-span-4 md:grid-rows-subgrid"><div className="flex min-h-20 items-center border-y border-border py-4"><h3 className="max-w-sm text-xl font-medium leading-snug">{track.title}</h3></div>{track.months.map(([month, text]) => <div key={month} className="grid grid-cols-[86px_1fr] gap-4 border-b border-border py-6 sm:grid-cols-[105px_1fr] sm:gap-6"><span className="text-[13px] font-medium text-muted-foreground">{month}</span><p className="text-[15px] leading-[1.65]">{text}</p></div>)}</div>)}</div></div></section>

        <section id="pricing" className="section-rule"><div className="proposal-container"><SectionHeading label="Смета" title="Смета и формат работы" description="Мы работаем по модели Time & Material с фиксацией жесткого потолка бюджета ($36 900). В таблице указана максимальная оценка в часах. Вы платите только за фактически отработанное время по итогам еженедельных отчетов. Если задачи закрываются быстрее — итоговая стоимость проекта снижается. Любые дополнительные часы сверх оценки согласовываются заранее." /><div className="overflow-x-auto border-t border-border"><table className="w-full min-w-[840px] border-collapse text-left text-[14px]"><thead><tr className="text-xs text-muted-foreground">{["Позиция", "Ставка", "Октябрь", "Ноябрь", "Декабрь", "Итого часов", "Потолок бюджета"].map(heading => <th key={heading} scope="col" className="whitespace-nowrap border-b border-border px-3 py-5 font-medium first:pl-0 last:pr-0 last:text-right">{heading}</th>)}</tr></thead><tbody>{pricing.map((row, index) => <tr key={row[0]} className={index === pricing.length - 1 ? "font-semibold" : ""}>{row.map((cell, cellIndex) => <td key={cellIndex} className="whitespace-nowrap border-b border-border px-3 py-5 first:pl-0 last:pr-0 last:text-right">{cell}</td>)}</tr>)}</tbody></table></div><p className="mt-4 text-xs text-muted-foreground md:hidden">Таблицу можно прокрутить в сторону →</p></div></section>

        <section id="cases" className="section-rule"><div className="proposal-container"><SectionHeading label="Опыт студии" title="Релевантные кейсы" /><div className="grid gap-x-5 gap-y-12 md:grid-cols-2">{cases.map((item, index) => <article key={item.title} className="min-w-0">{caseImages[index] ? <div className="aspect-video overflow-hidden rounded-lg border border-border"><img src={caseImages[index]} alt={item.title} loading="lazy" className="size-full object-cover" /></div> : <div className={`relative flex aspect-video flex-col justify-between overflow-hidden rounded-lg border p-6 ${index === 3 ? "border-preview-dark bg-preview-dark text-primary-foreground" : "border-border preview-surface text-foreground"}`}><span className={`text-xs font-medium ${index === 3 ? "text-primary-foreground/65" : "text-muted-foreground"}`}>{item.category}</span>{index === 3 ? <div className="mb-auto mt-auto max-w-xs translate-y-4"><LockKeyhole className="mb-3 size-6 stroke-[1.4]" /><p className="text-sm leading-snug sm:text-base">Проект под NDA. Подробно покажем и разберем кейс на звонке</p></div> : <span className="self-center text-[34px] font-medium tracking-normal opacity-30 sm:text-[48px]">{item.label}</span>}<span className={`text-xs ${index === 3 ? "text-primary-foreground/65" : "text-muted-foreground"}`}>Студия Луч / {item.label}</span></div>}<div className="pt-6">{item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-start gap-2 text-xl font-medium leading-snug hover:underline">{item.title}<ArrowUpRight className="mt-1 size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a> : <h3 className="text-xl font-medium leading-snug">{item.title}</h3>}<p className="mt-4 text-[15px] leading-[1.65] text-foreground/75">{item.about}</p><div className="mt-6 border-t border-border pt-5"><span className="eyebrow">Контекст для Sigma</span><p className="mt-2 text-xs leading-[1.55] text-muted-foreground sm:text-[13px]">{item.relevance}</p></div></div></article>)}</div></div></section>

        <section id="contacts" className="section-rule"><div className="proposal-container"><span className="eyebrow">Контакты</span><div className="mt-5 flex flex-col items-start justify-between gap-8 md:flex-row md:gap-16"><div><h2 className="max-w-2xl text-[30px] leading-[1.15] md:text-[42px]">Готовы начать<br />5 октября.</h2><div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[15px]"><a className="underline decoration-border underline-offset-4 hover:text-muted-foreground" href="mailto:hello@loo.ch">hello@loo.ch</a><a className="underline decoration-border underline-offset-4 hover:text-muted-foreground" href="https://t.me/genue" target="_blank" rel="noopener noreferrer">Telegram @genue</a></div></div><Button asChild size="lg" className="h-11 shrink-0 rounded-full px-6 shadow-none"><a href="mailto:hello@loo.ch">Написать на почту <ArrowRight /></a></Button></div></div></section>
      </main>
      <footer className="border-t border-border py-7"><div className="proposal-container flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground"><span>Студия Луч × Sigma</span><a href="#top" className="inline-flex items-center gap-1 hover:text-foreground">Наверх ↑</a></div></footer>
    </div>
  );
}