
"use client";

import { useState } from "react";

const sizes = ["175/65 R14", "185/65 R15", "195/65 R15", "205/55 R16", "215/60 R16"];

const tires = [
  { id: 1, name: "إطار سيارة اقتصادي", brand: "اقتصادي", price: 6500, image: "◉" },
  { id: 2, name: "إطار سيارة مريح", brand: "مميز", price: 8200, image: "◉" },
  { id: 3, name: "إطار سيارة عالي الأداء", brand: "أداء عالٍ", price: 10500, image: "◉" },
];

export default function Home() {
  const [size, setSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(2);
  const [selected, setSelected] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const tire = tires.find((item) => item.id === selected) ?? tires[0];

  return (
    <main dir="rtl" className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-3">
          <a href="#" className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center text-2xl font-black">م</span>
            <span>
              <strong className="block text-xl font-black">محطتي</strong>
              <small className="text-slate-500">دليل خدمات الإطارات</small>
            </span>
          </a>
          <a href="https://e-mahata.naftal.dz/" target="_blank" rel="noreferrer"
            className="bg-emerald-700 text-white px-4 py-3 rounded-xl text-sm font-bold">
            المنصة الرسمية ↗
          </a>
        </div>
      </header>

      <section className="bg-emerald-950 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <p className="text-emerald-300 font-bold">خدمات الإطارات</p>
          <h1 className="text-3xl md:text-5xl font-black mt-4 leading-tight">
            اعثر على الإطار المناسب لمركبتك
          </h1>
          <p className="mt-4 max-w-2xl text-emerald-100 leading-8">
            اختر المقاس، واستعرض المنتجات والأسعار التوضيحية، ثم راجع تفاصيل طلبك.
          </p>
          <a href="#catalog" className="inline-block mt-7 bg-white text-emerald-950 px-6 py-3 rounded-xl font-bold">
            استعراض الإطارات ↓
          </a>
        </div>
      </section>

      <section id="catalog" className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white border rounded-2xl p-5 md:p-7">
          <h2 className="text-2xl font-black">1. اختر مقاس الإطار</h2>
          <p className="text-slate-500 mt-2">راجع دليل المركبة للتأكد من المقاس الصحيح.</p>
          <label className="block font-bold mt-5 mb-2" htmlFor="size">مقاس الإطار</label>
          <select id="size" value={size} onChange={(e) => setSize(e.target.value)}
            className="w-full md:w-96 border rounded-xl p-4 bg-white">
            {sizes.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>

        <div className="mt-9 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-emerald-700 font-bold">كتالوج المنتجات</p>
            <h2 className="text-2xl font-black mt-1">2. اختر الإطار</h2>
          </div>
          <span className="text-sm text-slate-500">المقاس المختار: {size}</span>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-5">
          {tires.map((item) => (
            <button key={item.id} type="button" onClick={() => setSelected(item.id)}
              className={`text-right bg-white border-2 rounded-2xl p-5 transition ${selected === item.id ? "border-emerald-700 shadow-md" : "border-slate-200"}`}>
              <div className="h-36 rounded-xl bg-slate-100 flex items-center justify-center">
                <span className="text-7xl text-slate-700">{item.image}</span>
              </div>
              <p className="text-sm text-emerald-700 font-bold mt-4">{item.brand}</p>
              <h3 className="text-lg font-black mt-1">{item.name}</h3>
              <p className="text-slate-500 mt-2">المقاس: {size}</p>
              <p className="text-xl font-black mt-3">{item.price.toLocaleString("ar-DZ")} دج</p>
              <p className="mt-3 font-bold text-sm">{selected === item.id ? "✓ تم الاختيار" : "اختيار هذا المنتج"}</p>
            </button>
          ))}
        </div>

        <div className="mt-8 bg-white border rounded-2xl p-5 md:p-7">
          <h2 className="text-2xl font-black">3. حدد الكمية</h2>
          <div className="flex items-center gap-5 mt-5">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-12 h-12 border rounded-xl text-2xl font-bold" aria-label="تقليل الكمية">−</button>
            <span className="text-2xl font-black">{quantity}</span>
            <button onClick={() => setQuantity(Math.min(20, quantity + 1))}
              className="w-12 h-12 border rounded-xl text-2xl font-bold" aria-label="زيادة الكمية">+</button>
          </div>
          <div className="mt-6 bg-emerald-50 rounded-xl p-5">
            <div className="flex justify-between gap-3">
              <span className="text-slate-600">سعر الوحدة التوضيحي</span>
              <strong>{tire.price.toLocaleString("ar-DZ")} دج</strong>
            </div>
            <div className="flex justify-between gap-3 mt-3 text-lg">
              <span className="font-bold">المجموع التوضيحي</span>
              <strong className="text-emerald-800">{(tire.price * quantity).toLocaleString("ar-DZ")} دج</strong>
            </div>
            <p className="text-xs text-slate-500 mt-3">هذه أسعار تجريبية وليست أسعارًا رسمية أو عرض شراء فعليًا.</p>
          </div>
        </div>
      </section>

      <section id="order" className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-white border rounded-2xl p-5 md:p-7">
          <p className="text-emerald-700 font-bold">تفاصيل الطلب</p>
          <h2 className="text-2xl font-black mt-2">4. معلومات صاحب الطلب</h2>
          {submitted ? (
            <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <h3 className="font-black text-xl">تم إعداد ملخص تجريبي ✓</h3>
              <p className="mt-3 leading-8">الاسم: {name}</p>
              <p>الولاية: {wilaya}</p>
              <p>المقاس: {size}</p>
              <p>الكمية: {quantity}</p>
              <p className="mt-3 text-sm text-slate-600">لم يُرسل الطلب إلى أي جهة ولم تُحفظ بياناتك في خادم.</p>
              <button onClick={() => setSubmitted(false)} className="mt-4 underline font-bold">العودة للتعديل</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-6 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <label className="block font-bold">الاسم الكامل
                  <input required value={name} onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full border rounded-xl p-3 font-normal" placeholder="أدخل الاسم الكامل" />
                </label>
                <label className="block font-bold">رقم الهاتف
                  <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                    className="mt-2 w-full border rounded-xl p-3 font-normal" placeholder="05 xx xx xx xx" />
                </label>
                <label className="block font-bold">الولاية
                  <input required value={wilaya} onChange={(e) => setWilaya(e.target.value)}
                    className="mt-2 w-full border rounded-xl p-3 font-normal" placeholder="اسم الولاية" />
                </label>
                <label className="block font-bold">مقاس الإطار
                  <input readOnly value={size} className="mt-2 w-full border rounded-xl p-3 bg-slate-100" />
                </label>
              </div>

              <div className="border border-amber-300 bg-amber-50 rounded-xl p-5">
                <h3 className="font-black">معاينة حقول التحقق الرسمية</h3>
                <p className="text-sm leading-7 text-slate-600 mt-2">
                  تظهر الحقول التالية للمعاينة فقط. هي معطّلة ولا تقبل إدخال بيانات حقيقية ولا ترسلها أو تحفظها.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <label className="block font-bold text-slate-500">رقم بطاقة التعريف
                    <input disabled placeholder="معطّل في النسخة التجريبية" className="mt-2 w-full border rounded-xl p-3 bg-slate-100" />
                  </label>
                  <label className="block font-bold text-slate-500">رقم البطاقة الذهبية
                    <input disabled placeholder="معطّل في النسخة التجريبية" className="mt-2 w-full border rounded-xl p-3 bg-slate-100" />
                  </label>
                  <label className="block font-bold text-slate-500">تاريخ انتهاء البطاقة
                    <input disabled placeholder="معطّل في النسخة التجريبية" className="mt-2 w-full border rounded-xl p-3 bg-slate-100" />
                  </label>
                </div>
              </div>

              <button type="submit" className="w-full bg-emerald-700 text-white rounded-xl p-4 font-black hover:bg-emerald-800">
                إعداد ملخص الطلب التجريبي
              </button>
              <p className="text-xs text-slate-500 leading-6">
                هذا الموقع نموذج تجريبي مستقل. لا ينفذ عمليات شراء أو دفع، ولا يرسل الطلب إلى نفطال.
                المنتجات والأسعار المعروضة أمثلة توضيحية.
              </p>
            </form>
          )}
        </div>
      </section>

      <footer className="bg-emerald-950 text-white">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-4 justify-between">
          <div>
            <p className="font-black text-lg">محطتي</p>
            <p className="text-sm text-emerald-200 mt-2">دليل تجريبي لخدمات الإطارات.</p>
          </div>
          <a href="https://e-mahata.naftal.dz/" target="_blank" rel="noreferrer" className="underline text-emerald-200">
            زيارة منصة نفطال الرسمية ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
