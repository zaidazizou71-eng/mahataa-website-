
"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "تعرّف على الخدمة",
    description:
      "اطّلع على المعلومات المتاحة حول الإطارات والمقاسات وطريقة تقديم الطلب.",
    icon: "◉",
  },
  {
    number: "02",
    title: "اختر المقاس المناسب",
    description:
      "تحقق من مقاس الإطار المدوّن في وثائق مركبتك قبل بدء أي إجراء.",
    icon: "⌕",
  },
  {
    number: "03",
    title: "تابع عبر المنصة الرسمية",
    description:
      "انتقل إلى موقع نفطال الرسمي لمعرفة الإجراءات والشروط المعتمدة.",
    icon: "↗",
  },
];

const faqs = [
  {
    question: "ما هي منصة E-MAHATA؟",
    answer:
      "هي منصة رقمية مرتبطة بخدمة اقتناء الإطارات. تحقّق من تفاصيل الخدمة والشروط الحالية مباشرة عبر الموقع الرسمي لنفطال.",
  },
  {
    question: "كيف أعرف مقاس الإطار المناسب؟",
    answer:
      "راجع المقاس المكتوب على الإطار الحالي ودليل المركبة. عند الشك، استشر مختصًا قبل اختيار إطار بديل.",
  },
  {
    question: "هل يمكنني تقديم طلب من هذا الموقع؟",
    answer:
      "لا. هذا الموقع دليل إرشادي مستقل، ولا يستقبل طلبات الشراء أو البيانات الشخصية. استخدم المنصة الرسمية لأي إجراء فعلي.",
  },
  {
    question: "كيف أتحقق من الرابط الرسمي؟",
    answer:
      "تأكد من أن عنوان الموقع هو e-mahata.naftal.dz قبل إدخال أي معلومات. لا تشارك بيانات بطاقتك البنكية في مواقع غير موثوقة.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#f7f8fa] text-[#172b27]">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <a href="#" className="flex items-center gap-3" aria-label="محطتي - الرئيسية">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#087e62] text-2xl font-black text-white">
              م
            </span>
            <span>
              <span className="block text-xl font-black">محطتي</span>
              <span className="text-xs text-gray-500">دليل خدمات الإطارات</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a className="hover:text-[#087e62]" href="#about">عن الدليل</a>
            <a className="hover:text-[#087e62]" href="#steps">طريقة العمل</a>
            <a className="hover:text-[#087e62]" href="#faq">الأسئلة الشائعة</a>
            <a className="hover:text-[#087e62]" href="#contact">التواصل</a>
          </nav>

          <a
            href="https://e-mahata.naftal.dz/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-[#087e62] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#06664f]"
          >
            الموقع الرسمي ↗
          </a>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-[#087e62]">
              <span className="h-2 w-2 rounded-full bg-[#087e62]" />
              دليل معلوماتي مستقل
            </span>

            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              اختيار إطارك
              <span className="mt-2 block text-[#087e62]">يبدأ بالمعلومة الصحيحة</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-9 text-gray-600">
              تعرّف على مقاسات الإطارات، وافهم خطوات الخدمة، واعرف أين تتحقق
              من المعلومات قبل اتخاذ قرارك.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="https://e-mahata.naftal.dz/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-[#087e62] px-6 py-4 font-bold text-white shadow-lg shadow-emerald-900/10 transition hover:-translate-y-0.5 hover:bg-[#06664f]"
              >
                زيارة المنصة الرسمية ↗
              </a>
              <a
                href="#steps"
                className="rounded-xl border border-gray-300 bg-white px-6 py-4 font-bold transition hover:border-[#087e62]"
              >
                اكتشف الخطوات
              </a>
            </div>

            <p className="mt-5 text-xs leading-6 text-gray-500">
              هذا الموقع مستقل وليس الموقع الرسمي لشركة نفطال.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[3rem] bg-emerald-100/70 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-[#103d32] p-7 text-white shadow-2xl sm:p-10">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-emerald-200">دليل السائق</p>
                  <h2 className="mt-2 text-2xl font-black">سلامتك أولًا</h2>
                </div>
                <span className="text-4xl">◉</span>
              </div>

              <div className="my-9 flex items-center justify-center">
                <div className="flex h-48 w-48 items-center justify-center rounded-full border-[16px] border-[#26332f] bg-[#182a25] shadow-inner">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border-[12px] border-gray-500 bg-gray-200 text-5xl text-gray-700">
                    ◎
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-emerald-100">الخطوة الأولى</p>
                  <p className="mt-2 font-bold">تحقق من المقاس</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-emerald-100">الخطوة الثانية</p>
                  <p className="mt-2 font-bold">راجع المصدر الرسمي</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-gray-200 bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-3">
          {[
            ["معلومات واضحة", "محتوى مبسّط يساعدك على فهم الخطوات."],
            ["تجربة مناسبة للهاتف", "تصميم متجاوب مع مختلف أحجام الشاشات."],
            ["مصدر رسمي", "رابط مباشر للتحقق من الإجراءات المعتمدة."],
          ].map(([title, description]) => (
            <article key={title} className="rounded-2xl border border-gray-100 p-6">
              <span className="text-2xl text-[#087e62]">✓</span>
              <h3 className="mt-4 text-xl font-extrabold">{title}</h3>
              <p className="mt-2 leading-7 text-gray-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="steps" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-bold text-[#087e62]">طريقة العمل</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            ثلاث خطوات لتبدأ بثقة
          </h2>
          <p className="mt-4 leading-8 text-gray-600">
            اتبع هذه الخطوات الإرشادية، وتأكد من المعلومات قبل تقديم أي طلب.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black text-[#087e62]">{step.icon}</span>
                <span className="text-3xl font-black text-gray-200">{step.number}</span>
              </div>
              <h3 className="mt-7 text-xl font-extrabold">{step.title}</h3>
              <p className="mt-3 leading-8 text-gray-600">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="bg-[#edf4f1] py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <p className="font-bold text-[#087e62]">هل لديك سؤال؟</p>
            <h2 className="mt-3 text-3xl font-black">الأسئلة الشائعة</h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => (
              <article key={faq.question} className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  className="flex w-full items-center justify-between gap-4 p-5 text-right font-bold"
                >
                  <span>{faq.question}</span>
                  <span className="text-xl text-[#087e62]">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <p className="border-t border-gray-100 px-5 py-4 leading-8 text-gray-600">
                    {faq.answer}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#103d32] p-8 text-white sm:p-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-black sm:text-3xl">هل تحتاج إلى معلومات معتمدة؟</h2>
            <p className="mt-3 max-w-xl leading-8 text-emerald-100">
              انتقل إلى المنصة الرسمية للاطلاع على أحدث التفاصيل والإجراءات.
            </p>
          </div>
          <a
            href="https://e-mahata.naftal.dz/"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-xl bg-white px-6 py-4 font-bold text-[#103d32] transition hover:bg-emerald-50"
          >
            فتح الموقع الرسمي ↗
          </a>
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} محطتي — دليل إرشادي مستقل.</p>
          <a
            href="https://e-mahata.naftal.dz/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-[#087e62] hover:underline"
          >
            المنصة الرسمية لنفطال ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
