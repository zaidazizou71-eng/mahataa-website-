
"use client";

import { useMemo, useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronLeft,
  CircleCheck,
  CreditCard,
  MapPin,
  Minus,
  Package,
  Phone,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Truck,
  UserRound,
  Wallet,
} from "lucide-react";

const tires = [
  { id: 1, name: "إطار سيارة اقتصادي", brand: "اقتصادي", price: 6500, description: "للاستخدام اليومي", color: "#e6edf5" },
  { id: 2, name: "إطار سيارة متميز", brand: "متميز", price: 8500, description: "توازن بين الراحة والأداء", color: "#e7eee7" },
  { id: 3, name: "إطار سيارة عالي الأداء", brand: "عالي الأداء", price: 11500, description: "للقيادة والأداء المحسن", color: "#f4e9df" },
];

const sizes = [
  "165/65 R14",
  "175/65 R14",
  "185/65 R15",
  "195/65 R15",
  "205/55 R16",
  "205/60 R16",
  "215/55 R17",
  "225/45 R17",
  "225/55 R18",
];

const wilayas = [
  "أدرار", "الشلف", "الأغواط", "أم البواقي", "باتنة", "بجاية",
  "بسكرة", "بشار", "البليدة", "البويرة", "تمنراست", "تبسة",
  "تلمسان", "تيارت", "تيزي وزو", "الجزائر", "الجلفة", "جيجل",
  "سطيف", "سعيدة", "سكيكدة", "عنابة", "قالمة", "قسنطينة",
  "المدية", "مستغانم", "المسيلة", "معسكر", "ورقلة", "وهران",
  "البيض", "إليزي", "برج بوعريريج", "بومرداس", "الطارف",
  "تندوف", "تيسمسيلت", "الوادي", "خنشلة", "سوق أهراس",
  "تيبازة", "ميلة", "عين الدفلى", "النعامة", "عين تموشنت",
  "غرداية", "غليزان", "تيميمون", "برج باجي مختار",
  "أولاد جلال", "بني عباس", "عين صالح", "عين قزام",
  "تقرت", "جانت", "المغير", "المنيعة",
];

type Customer = {
  fullName: string;
  phone: string;
  secondPhone: string;
  wilaya: string;
  commune: string;
  address: string;
};

const initialCustomer: Customer = {
  fullName: "",
  phone: "",
  secondPhone: "",
  wilaya: "",
  commune: "",
  address: "",
};

const money = (value: number) =>
  new Intl.NumberFormat("fr-DZ").format(value) + " دج";

export default function Home() {
  const [size, setSize] = useState("205/55 R16");
  const [selectedTire, setSelectedTire] = useState(1);
  const [quantity, setQuantity] = useState(4);
  const [customer, setCustomer] = useState<Customer>(initialCustomer);
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [orderNumber, setOrderNumber] = useState("");

  const tire = tires.find((item) => item.id === selectedTire)!;
  const total = useMemo(() => tire.price * quantity, [tire, quantity]);

  function updateCustomer(field: keyof Customer, value: string) {
    setCustomer((previous) => ({ ...previous, [field]: value }));
  }

  function continueToCustomer() {
    setError("");
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function reviewOrder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !customer.fullName.trim() ||
      !customer.phone.trim() ||
      !customer.wilaya ||
      !customer.commune.trim() ||
      !customer.address.trim()
    ) {
      setError("يرجى ملء جميع الحقول المطلوبة.");
      return;
    }

    if (!/^(0[567])\d{8}$/.test(customer.phone.replace(/\s/g, ""))) {
      setError("يرجى إدخال رقم هاتف جزائري صحيح.");
      return;
    }

    setError("");
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function confirmDemoOrder() {
    // معاينة محلية فقط؛ لا يُرسل الطلب إلى خادم.
    setOrderNumber(
      "DEMO-" + Math.random().toString(36).slice(2, 8).toUpperCase()
    );
    setStep(4);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  const labelClass = "block text-sm font-semibold text-gray-700";

  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f7fa] text-gray-800">
      <div className="bg-[#102d52] px-4 py-2 text-center text-xs text-white sm:text-sm">
        واجهة تجريبية مستقلة — لا تمثل بوابة الطلب الرسمية
      </div>

      <header className="sticky top-0 z-20 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#123c70] text-white">
              <Truck size={25} />
            </div>
            <div>
              <div className="text-xl font-black tracking-tight text-[#123c70]">
                محطتي
              </div>
              <div className="text-[11px] text-gray-500">
                خدمة طلب الإطارات
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-2 text-sm text-gray-600 sm:flex">
            <ShieldCheck size={18} className="text-green-600" />
            <span>واجهة تجريبية للطلب</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-blue-50 px-3 py-2 text-sm font-bold text-[#123c70]">
            <ShoppingCart size={18} />
            {quantity}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:pt-10">
        <nav className="mb-8 flex items-center justify-center gap-2 sm:gap-4">
          {[
            { n: 1, title: "اختيار الإطار" },
            { n: 2, title: "معلومات الزبون" },
            { n: 3, title: "مراجعة الطلب" },
          ].map((item) => (
            <div key={item.n} className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                  step >= item.n
                    ? "bg-[#123c70] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step > item.n ? <Check size={17} /> : item.n}
              </div>
              <span
                className={`hidden text-xs font-semibold sm:inline sm:text-sm ${
                  step >= item.n ? "text-[#123c70]" : "text-gray-400"
                }`}
              >
                {item.title}
              </span>
              {item.n < 3 && (
                <div className="mx-1 h-px w-5 bg-gray-300 sm:w-12" />
              )}
            </div>
          ))}
        </nav>

        {step === 1 && (
          <>
            <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-l from-[#0e2b4f] to-[#205b91] px-6 py-9 text-white sm:px-10 sm:py-12">
              <div className="relative z-10 max-w-xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs">
                  <Package size={15} />
                  خدمة اختيار الإطارات
                </div>
                <h1 className="text-3xl font-black leading-tight sm:text-5xl">
                  اختر إطارك
                  <br />
                  بكل سهولة
                </h1>
                <p className="mt-4 max-w-md text-sm leading-7 text-blue-100 sm:text-base">
                  اختر المقاس المناسب لسيارتك، حدّد الكمية، وراجع تفاصيل
                  طلبك في خطوات بسيطة.
                </p>
                <button
                  onClick={() =>
                    document.getElementById("products")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#123c70] transition hover:bg-blue-50"
                >
                  ابدأ الاختيار
                  <ChevronLeft size={18} />
                </button>
              </div>
              <div className="pointer-events-none absolute -left-10 -top-16 h-64 w-64 rounded-full border-[35px] border-white/5" />
              <div className="pointer-events-none absolute -left-2 -bottom-28 h-64 w-64 rounded-full border-[25px] border-white/5" />
            </section>

            <section id="products" className="grid gap-6 lg:grid-cols-[1fr_330px]">
              <div className="space-y-6">
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#123c70]">
                      <Package size={21} />
                    </div>
                    <div>
                      <h2 className="text-lg font-black">مقاس الإطار</h2>
                      <p className="mt-1 text-xs text-gray-500">
                        اختر المقاس المكتوب على إطار سيارتك
                      </p>
                    </div>
                  </div>

                  <label className={labelClass} htmlFor="size">
                    مقاس الإطار
                  </label>
                  <div className="relative">
                    <select
                      id="size"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      className={`${inputClass} appearance-none`}
                    >
                      {sizes.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
                  <div className="mb-5">
                    <h2 className="text-lg font-black">اختر نوع الإطار</h2>
                    <p className="mt-1 text-xs text-gray-500">
                      المنتجات والأسعار التالية تجريبية للعرض فقط
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {tires.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setSelectedTire(item.id)}
                        className={`relative rounded-2xl border-2 p-4 text-right transition ${
                          selectedTire === item.id
                            ? "border-[#205b91] bg-blue-50/60"
                            : "border-gray-100 bg-white hover:border-gray-300"
                        }`}
                      >
                        {selectedTire === item.id && (
                          <span className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#123c70] text-white">
                            <Check size={14} />
                          </span>
                        )}
                        <div
                          className="mb-4 flex h-28 items-center justify-center rounded-xl"
                          style={{ backgroundColor: item.color }}
                        >
                          <div className="flex h-20 w-20 items-center justify-center rounded-full border-[12px] border-gray-800 bg-gray-300 shadow-lg">
                            <div className="h-9 w-9 rounded-full border-4 border-gray-500 bg-gray-100" />
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">{item.brand}</div>
                        <div className="mt-1 text-sm font-black">{item.name}</div>
                        <div className="mt-3 text-base font-black text-[#123c70]">
                          {money(item.price)}
                        </div>
                        <div className="mt-1 text-[11px] text-gray-500">
                          {item.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
                  <h2 className="text-lg font-black">الكمية المطلوبة</h2>
                  <p className="mt-1 text-xs text-gray-500">
                    حدّد عدد الإطارات التي تحتاجها
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div>
                      <div className="font-bold">{tire.name}</div>
                      <div className="mt-1 text-sm text-gray-500">
                        المقاس: {size}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-2">
                      <button
                        aria-label="إنقاص الكمية"
                        disabled={quantity <= 1}
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 disabled:opacity-40"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="min-w-5 text-center font-black">
                        {quantity}
                      </span>
                      <button
                        aria-label="زيادة الكمية"
                        disabled={quantity >= 20}
                        onClick={() => setQuantity((q) => Math.min(20, q + 1))}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#123c70] text-white disabled:opacity-40"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="h-fit rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:sticky lg:top-24">
                <h2 className="text-lg font-black">ملخص الطلب</h2>
                <div className="my-5 flex items-center justify-between gap-3 text-sm">
                  <span className="text-gray-500">نوع الإطار</span>
                  <span className="text-left font-bold">{tire.brand}</span>
                </div>
                <div className="my-4 flex items-center justify-between text-sm">
                  <span className="text-gray-500">المقاس</span>
                  <span className="font-bold">{size}</span>
                </div>
                <div className="my-4 flex items-center justify-between text-sm">
                  <span className="text-gray-500">الكمية</span>
                  <span className="font-bold">{quantity}</span>
                </div>
                <div className="my-4 flex items-center justify-between text-sm">
                  <span className="text-gray-500">سعر الوحدة</span>
                  <span className="font-bold">{money(tire.price)}</span>
                </div>
                <div className="my-5 border-t border-dashed border-gray-200" />
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold">الإجمالي التجريبي</span>
                  <span className="text-xl font-black text-[#123c70]">
                    {money(total)}
                  </span>
                </div>
                <button
                  onClick={continueToCustomer}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#123c70] px-5 py-4 font-bold text-white transition hover:bg-[#0d2c50]"
                >
                  متابعة الطلب
                  <ChevronLeft size={19} />
                </button>
                <p className="mt-4 text-center text-xs leading-6 text-gray-500">
                  الأسعار غير رسمية، ولا يتم إرسال أي طلب فعلي.
                </p>
              </aside>
            </section>
          </>
        )}

        {step === 2 && (
          <section className="mx-auto max-w-3xl">
            <div className="mb-6">
              <h1 className="text-2xl font-black sm:text-3xl">
                معلومات الزبون
              </h1>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                أدخل معلومات الاتصال والعنوان لإكمال معاينة الطلب.
              </p>
            </div>

            <form
              onSubmit={reviewOrder}
              className="space-y-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-3 border-b border-gray-100 pb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#123c70]">
                  <UserRound size={22} />
                </div>
                <div>
                  <h2 className="font-black">المعلومات الشخصية</h2>
                  <p className="mt-1 text-xs text-gray-500">
                    الحقول التي تحمل * مطلوبة
                  </p>
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="fullName">
                  الاسم واللقب *
                </label>
                <input
                  id="fullName"
                  autoComplete="name"
                  className={inputClass}
                  placeholder="أدخل الاسم واللقب"
                  value={customer.fullName}
                  onChange={(e) => updateCustomer("fullName", e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="phone">
                    رقم الهاتف *
                  </label>
                  <div className="relative">
                    <Phone
                      size={17}
                      className="absolute right-3 top-1/2 mt-1.5 text-gray-400"
                    />
                    <input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      className={`${inputClass} pr-10`}
                      placeholder="05XXXXXXXX"
                      value={customer.phone}
                      onChange={(e) => updateCustomer("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass} htmlFor="secondPhone">
                    رقم هاتف إضافي (اختياري)
                  </label>
                  <input
                    id="secondPhone"
                    type="tel"
                    inputMode="tel"
                    className={inputClass}
                    placeholder="أدخل رقمًا إضافيًا"
                    value={customer.secondPhone}
                    onChange={(e) =>
                      updateCustomer("secondPhone", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 border-b border-gray-100 pb-5 pt-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#123c70]">
                  <MapPin size={22} />
                </div>
                <div>
                  <h2 className="font-black">عنوان الزبون</h2>
                  <p className="mt-1 text-xs text-gray-500">
                    حدّد مكان الإقامة
                  </p>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="wilaya">
                    الولاية *
                  </label>
                  <div className="relative">
                    <select
                      id="wilaya"
                      className={`${inputClass} appearance-none`}
                      value={customer.wilaya}
                      onChange={(e) => updateCustomer("wilaya", e.target.value)}
                      required
                    >
                      <option value="">اختر الولاية</option>
                      {wilayas.map((w) => (
                        <option key={w} value={w}>
                          {w}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={17}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass} htmlFor="commune">
                    البلدية *
                  </label>
                  <input
                    id="commune"
                    className={inputClass}
                    placeholder="أدخل اسم البلدية"
                    value={customer.commune}
                    onChange={(e) => updateCustomer("commune", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="address">
                  العنوان بالتفصيل *
                </label>
                <textarea
                  id="address"
                  rows={3}
                  autoComplete="street-address"
                  className={inputClass}
                  placeholder="الحي، الشارع، رقم المنزل..."
                  value={customer.address}
                  onChange={(e) => updateCustomer("address", e.target.value)}
                  required
                />
              </div>

              <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    size={21}
                    className="mt-0.5 shrink-0 text-[#123c70]"
                  />
                  <div>
                    <h3 className="text-sm font-bold">حماية معلوماتك</h3>
                    <p className="mt-1 text-xs leading-6 text-gray-600">
                      هذه معاينة مستقلة. لا تدخل رقم بطاقة التعريف أو بيانات
                      البطاقة الذهبية أو الرقم السري أو تاريخ انتهاء البطاقة
                      هنا. لا توجد عملية دفع أو إرسال طلب حقيقي في هذه النسخة.
                    </p>
                  </div>
                </div>
              </div>

              {error && (
                <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
                  {error}
                </p>
              )}

              <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-5 sm:flex-row">
                <button
                  type="button"
                  onClick={() => {
                    setError("");
                    setStep(1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 font-bold hover:bg-gray-50"
                >
                  <ChevronDown size={17} className="rotate-[-90deg]" />
                  العودة
                </button>
                <button
                  type="submit"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#123c70] px-5 py-3 font-bold text-white hover:bg-[#0d2c50]"
                >
                  مراجعة الطلب
                  <ChevronLeft size={18} />
                </button>
              </div>
            </form>
          </section>
        )}

        {step === 3 && (
          <section className="mx-auto max-w-2xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-9">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#123c70]">
                <ShoppingCart size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-black">مراجعة الطلب</h1>
                <p className="mt-1 text-sm text-gray-500">
                  تأكد من التفاصيل قبل إنهاء المعاينة
                </p>
              </div>
            </div>

            <div className="space-y-4 rounded-xl bg-gray-50 p-5">
              <h2 className="font-black">تفاصيل الإطارات</h2>
              <div className="flex justify-between gap-3 text-sm">
                <span className="text-gray-500">المنتج</span>
                <span className="font-bold">{tire.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">المقاس</span>
                <span className="font-bold">{size}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">الكمية</span>
                <span className="font-bold">{quantity}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">سعر الوحدة</span>
                <span className="font-bold">{money(tire.price)}</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between gap-3">
                  <span className="font-bold">الإجمالي التجريبي</span>
                  <span className="text-lg font-black text-[#123c70]">
                    {money(total)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-gray-100 p-5">
              <h2 className="mb-4 font-black">معلومات الزبون</h2>
              {[
                ["الاسم واللقب", customer.fullName],
                ["رقم الهاتف", customer.phone],
                ["هاتف إضافي", customer.secondPhone || "غير محدد"],
                ["الولاية", customer.wilaya],
                ["البلدية", customer.commune],
                ["العنوان", customer.address],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 border-b border-gray-100 py-3 text-sm last:border-0">
                  <span className="shrink-0 text-gray-500">{label}</span>
                  <span className="text-left font-semibold">{value}</span>
                </div>
              ))}
            </div>

            <p className="mt-5 rounded-xl bg-amber-50 p-4 text-xs leading-6 text-amber-800">
              هذا تأكيد تجريبي فقط. لن يتم إرسال الطلب إلى نفطال أو إلى أي جهة،
              والأسعار المعروضة ليست أسعارًا رسمية.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => {
                  setStep(2);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 font-bold"
              >
                تعديل المعلومات
              </button>
              <button
                onClick={confirmDemoOrder}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#123c70] px-5 py-3 font-bold text-white"
              >
                إنهاء المعاينة
                <Check size={18} />
              </button>
            </div>
          </section>
        )}

        {step === 4 && (
          <section className="mx-auto max-w-xl rounded-2xl border border-gray-100 bg-white px-6 py-10 text-center shadow-sm sm:px-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600">
              <CircleCheck size={44} />
            </div>
            <h1 className="mt-6 text-2xl font-black">اكتملت معاينة الطلب</h1>
            <p className="mt-3 text-sm leading-7 text-gray-500">
              تم إنشاء رقم تجريبي للعرض داخل هذه الصفحة فقط. لم يُرسل أي طلب
              حقيقي ولم تُحفظ المعلومات على خادم.
            </p>
            <div className="mt-6 rounded-xl bg-gray-50 p-5">
              <div className="text-xs text-gray-500">رقم المعاينة</div>
              <div className="mt-2 text-xl font-black tracking-wider text-[#123c70]">
                {orderNumber}
              </div>
              <div className="mt-4 border-t border-gray-200 pt-4 text-sm">
                <div className="flex justify-between gap-3">
                  <span className="text-gray-500">عدد الإطارات</span>
                  <span className="font-bold">{quantity}</span>
                </div>
                <div className="mt-3 flex justify-between gap-3">
                  <span className="text-gray-500">الإجمالي التجريبي</span>
                  <span className="font-black">{money(total)}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setStep(1);
                setError("");
                setOrderNumber("");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mt-6 w-full rounded-xl bg-[#123c70] px-5 py-3 font-bold text-white"
            >
              إنشاء معاينة جديدة
            </button>
          </section>
        )}

        <footer className="mt-12 border-t border-gray-200 pt-6 text-center">
          <div className="flex items-center justify-center gap-2 text-sm font-bold text-[#123c70]">
            <Truck size={18} />
            محطتي
          </div>
          <p className="mt-2 text-xs leading-6 text-gray-500">
            مشروع تجريبي مستقل وغير تابع رسميًا لشركة نفطال.
            <br />
            لا تُستخدم هذه الصفحة لإتمام الدفع أو إرسال طلبات حقيقية.
          </p>
        </footer>
      </div>
    </main>
  );
}
