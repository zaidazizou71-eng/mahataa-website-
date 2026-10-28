
"use client";

import { useState, type FormEvent } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  sizes: string[];
};

const products: Product[] = [
  {
    id: 1,
    name: "إطار سيارة سياحية",
    description: "للاستخدام اليومي والطرقات المعبدة",
    price: 8500,
    sizes: ["175/65 R14", "185/65 R15", "195/65 R15"],
  },
  {
    id: 2,
    name: "إطار سيارة متعددة الاستعمالات",
    description: "ثبات وأداء لمختلف ظروف القيادة",
    price: 12500,
    sizes: ["205/55 R16", "215/60 R16", "225/65 R17"],
  },
  {
    id: 3,
    name: "إطار سيارة تجارية",
    description: "مصمم لتحمل الاستعمال المتكرر",
    price: 15800,
    sizes: ["195/70 R15C", "205/65 R16C", "215/65 R16C"],
  },
];

const wilayas = [
  "أدرار", "الشلف", "الأغواط", "أم البواقي", "باتنة",
  "بجاية", "بسكرة", "بشار", "البليدة", "البويرة",
  "تمنراست", "تبسة", "تلمسان", "تيارت", "تيزي وزو",
  "الجزائر", "الجلفة", "جيجل", "سطيف", "سعيدة",
  "سكيكدة", "سيدي بلعباس", "عنابة", "قالمة", "قسنطينة",
  "المدية", "مستغانم", "المسيلة", "معسكر", "ورقلة",
  "وهران", "البيض", "إليزي", "برج بوعريريج", "بومرداس",
  "الطارف", "تندوف", "تيسمسيلت", "الوادي", "خنشلة",
  "سوق أهراس", "تيبازة", "ميلة", "عين الدفلى", "النعامة",
  "عين تموشنت", "غرداية", "غليزان",
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fr-DZ").format(price) + " دج";

export default function Home() {
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [payment, setPayment] = useState("delivery");
  const [submitted, setSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const [customer, setCustomer] = useState({
    fullName: "",
    phone: "",
    alternatePhone: "",
    wilaya: "",
    commune: "",
    address: "",
    notes: "",
  });

  const updateCustomer = (
    field: keyof typeof customer,
    value: string
  ) => {
    setCustomer((previous) => ({ ...previous, [field]: value }));
  };

  const total = selectedProduct ? selectedProduct.price * quantity : 0;

  function handleCustomerSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleOrderSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // لا تُرسل بيانات شخصية أو بيانات دفع إلى أي خادم.
    // اربط هذه الخطوة بخدمة الطلبات المعتمدة عند توفرها.
    setOrderNumber(
      "MAH-" + Math.random().toString(36).slice(2, 8).toUpperCase()
    );
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startOrder(product: Product) {
    setSelectedProduct(product);
    setSelectedSize("");
    setQuantity(1);
    setStep(1);
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main dir="rtl" className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-red-700 text-white shadow-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl font-black text-red-700">
              M
            </span>
            <span>
              <span className="block text-xl font-extrabold">
                MAHATA
              </span>
              <span className="text-sm text-red-100">
                فضاء طلب المنتجات
              </span>
            </span>
          </a>

          <a
            href="#products"
            className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-red-700 transition hover:bg-red-50"
          >
            المنتجات
          </a>
        </div>
      </header>

      <section className="bg-gradient-to-l from-red-800 to-red-600 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="mb-3 text-sm font-bold text-red-100">
              مرحباً بكم
            </p>
            <h1 className="text-3xl font-black leading-relaxed md:text-5xl">
              اختر منتجك
              <br />
              وأكمل طلبك بسهولة
            </h1>
            <p className="mt-5 max-w-xl leading-8 text-red-50">
              تصفح المنتجات المتاحة، وحدد المقاس والكمية، ثم أدخل
              معلومات التواصل والتوصيل لمراجعة تفاصيل طلبك.
            </p>
            <a
              href="#products"
              className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 font-extrabold text-red-700 transition hover:bg-red-50"
            >
              اكتشف المنتجات
            </a>
          </div>

          <div className="flex justify-center">
            <div className="flex h-64 w-64 items-center justify-center rounded-full border-8 border-red-400/40 bg-white/10 md:h-80 md:w-80">
              <div className="flex h-48 w-48 items-center justify-center rounded-full border-[18px] border-slate-900 bg-slate-700 shadow-2xl md:h-60 md:w-60">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-slate-300 bg-slate-100 text-3xl font-black text-red-700 md:h-28 md:w-28">
                  M
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-black md:text-3xl">
            المنتجات
          </h2>
          <p className="mt-2 text-slate-500">
            اختر الصنف المناسب لسيارتك.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-44 items-center justify-center bg-slate-100">
                <svg
                  viewBox="0 0 180 150"
                  className="h-36 w-44"
                  role="img"
                  aria-label="رسم توضيحي لإطار سيارة"
                >
                  <ellipse
                    cx="90"
                    cy="78"
                    rx="55"
                    ry="65"
                    fill="#1f2937"
                  />
                  <ellipse
                    cx="90"
                    cy="78"
                    rx="39"
                    ry="49"
                    fill="#475569"
                  />
                  <ellipse
                    cx="90"
                    cy="78"
                    rx="27"
                    ry="36"
                    fill="#cbd5e1"
                  />
                  <ellipse
                    cx="90"
                    cy="78"
                    rx="17"
                    ry="24"
                    fill="#64748b"
                  />
                  <ellipse
                    cx="90"
                    cy="78"
                    rx="7"
                    ry="10"
                    fill="#e2e8f0"
                  />
                  {Array.from({ length: 10 }).map((_, index) => (
                    <path
                      key={index}
                      d="M 70 23 L 82 17 L 85 27 L 75 33 Z"
                      fill="#64748b"
                      transform={`rotate(${index * 36} 90 78)`}
                    />
                  ))}
                </svg>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-extrabold">
                  {product.name}
                </h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
                  {product.description}
                </p>
                <p className="mt-4 text-xl font-black text-red-700">
                  {formatPrice(product.price)}
                </p>
                <button
                  type="button"
                  onClick={() => startOrder(product)}
                  className="mt-5 w-full rounded-xl bg-red-700 px-4 py-3 font-bold text-white transition hover:bg-red-800"
                >
                  اختيار المنتج
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-xs leading-6 text-slate-500">
          الأسعار والأصناف الظاهرة تحتاج إلى مطابقتها مع قائمة المنتجات
          والأسعار المعتمدة قبل نشر الموقع.
        </p>
      </section>

      {selectedProduct && (
        <section id="order" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-4 py-12">
            {!submitted ? (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-black">
                    إتمام الطلب
                  </h2>
                  <p className="mt-2 text-slate-500">
                    أكمل الخطوات التالية لمراجعة طلبك.
                  </p>
                </div>

                <div className="mb-8 grid grid-cols-3 gap-2">
                  {[
                    { number: 1, label: "المنتج" },
                    { number: 2, label: "معلومات الزبون" },
                    { number: 3, label: "مراجعة الطلب" },
                  ].map((item) => (
                    <div
                      key={item.number}
                      className={`rounded-xl p-3 text-center text-sm font-bold ${
                        step === item.number
                          ? "bg-red-700 text-white"
                          : step > item.number
                          ? "bg-red-100 text-red-800"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <span className="mb-1 block">
                        {item.number}
                      </span>
                      {item.label}
                    </div>
                  ))}
                </div>

                {step === 1 && (
                  <div className="space-y-6">
                    <div className="rounded-2xl border border-slate-200 p-5">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-extrabold">
                            {selectedProduct.name}
                          </h3>
                          <p className="mt-2 text-sm text-slate-500">
                            {selectedProduct.description}
                          </p>
                        </div>
                        <p className="font-black text-red-700">
                          {formatPrice(selectedProduct.price)}
                        </p>
                      </div>

                      <label className="mt-6 block text-sm font-bold">
                        المقاس
                      </label>
                      <select
                        value={selectedSize}
                        onChange={(event) =>
                          setSelectedSize(event.target.value)
                        }
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 outline-none focus:border-red-600"
                      >
                        <option value="">اختر المقاس</option>
                        {selectedProduct.sizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>

                      <label className="mt-5 block text-sm font-bold">
                        الكمية
                      </label>
                      <div className="mt-2 flex w-fit items-center overflow-hidden rounded-xl border border-slate-300">
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity((value) => Math.max(1, value - 1))
                          }
                          className="px-5 py-2 text-xl font-bold hover:bg-slate-100"
                          aria-label="تقليل الكمية"
                        >
                          −
                        </button>
                        <span className="min-w-12 text-center font-bold">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity((value) => Math.min(20, value + 1))
                          }
                          className="px-5 py-2 text-xl font-bold hover:bg-slate-100"
                          aria-label="زيادة الكمية"
                        >
                          +
                        </button>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                        <span className="font-bold">المجموع</span>
                        <span className="text-xl font-black text-red-700">
                          {formatPrice(total)}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      disabled={!selectedSize}
                      onClick={() => {
                        setStep(2);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="w-full rounded-xl bg-red-700 px-5 py-3 font-bold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:bg-slate-300"
                    >
                      متابعة
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <form
                    onSubmit={handleCustomerSubmit}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-bold">
                          الاسم واللقب *
                        </label>
                        <input
                          required
                          autoComplete="name"
                          value={customer.fullName}
                          onChange={(event) =>
                            updateCustomer("fullName", event.target.value)
                          }
                          placeholder="أدخل الاسم واللقب"
                          className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-red-600"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-bold">
                          رقم الهاتف *
                        </label>
                        <input
                          required
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          value={customer.phone}
                          onChange={(event) =>
                            updateCustomer("phone", event.target.value)
                          }
                          placeholder="مثال: 0550123456"
                          className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-red-600"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-bold">
                          رقم هاتف إضافي
                        </label>
                        <input
                          type="tel"
                          inputMode="tel"
                          value={customer.alternatePhone}
                          onChange={(event) =>
                            updateCustomer(
                              "alternatePhone",
                              event.target.value
                            )
                          }
                          placeholder="اختياري"
                          className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-red-600"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-bold">
                          الولاية *
                        </label>
                        <select
                          required
                          value={customer.wilaya}
                          onChange={(event) => {
                            updateCustomer("wilaya", event.target.value);
                            updateCustomer("commune", "");
                          }}
                          className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none focus:border-red-600"
                        >
                          <option value="">اختر الولاية</option>
                          {wilayas.map((wilaya) => (
                            <option key={wilaya} value={wilaya}>
                              {wilaya}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-bold">
                          البلدية *
                        </label>
                        <input
                          required
                          value={customer.commune}
                          onChange={(event) =>
                            updateCustomer("commune", event.target.value)
                          }
                          placeholder="أدخل اسم البلدية"
                          className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-red-600"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-bold">
                          العنوان بالتفصيل *
                        </label>
                        <input
                          required
                          autoComplete="street-address"
                          value={customer.address}
                          onChange={(event) =>
                            updateCustomer("address", event.target.value)
                          }
                          placeholder="الحي، الشارع، رقم المنزل..."
                          className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-red-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold">
                        ملاحظات إضافية
                      </label>
                      <textarea
                        rows={3}
                        value={customer.notes}
                        onChange={(event) =>
                          updateCustomer("notes", event.target.value)
                        }
                        placeholder="ملاحظات حول الطلب أو التوصيل"
                        className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-red-600"
                      />
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="rounded-xl border border-slate-300 px-5 py-3 font-bold hover:bg-slate-50 sm:flex-1"
                      >
                        رجوع
                      </button>
                      <button
                        type="submit"
                        className="rounded-xl bg-red-700 px-5 py-3 font-bold text-white hover:bg-red-800 sm:flex-1"
                      >
                        مراجعة الطلب
                      </button>
                    </div>
                  </form>
                )}

                {step === 3 && (
                  <form
                    onSubmit={handleOrderSubmit}
                    className="space-y-6"
                  >
                    <div className="rounded-2xl border border-slate-200 p-5">
                      <h3 className="mb-4 text-lg font-extrabold">
                        تفاصيل المنتج
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-500">المنتج</span>
                          <span className="font-bold">
                            {selectedProduct.name}
                          </span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-500">المقاس</span>
                          <span className="font-bold">{selectedSize}</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-500">الكمية</span>
                          <span className="font-bold">{quantity}</span>
                        </div>
                        <div className="flex justify-between gap-4 border-t pt-3">
                          <span className="font-bold">المجموع</span>
                          <span className="text-lg font-black text-red-700">
                            {formatPrice(total)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 p-5">
                      <h3 className="mb-4 text-lg font-extrabold">
                        معلومات الزبون
                      </h3>
                      <div className="space-y-3 text-sm">
                        {[
                          ["الاسم واللقب", customer.fullName],
                          ["رقم الهاتف", customer.phone],
                          ["هاتف إضافي", customer.alternatePhone || "—"],
                          ["الولاية", customer.wilaya],
                          ["البلدية", customer.commune],
                          ["العنوان", customer.address],
                          ["ملاحظات", customer.notes || "—"],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            className="flex justify-between gap-4"
                          >
                            <span className="shrink-0 text-slate-500">
                              {label}
                            </span>
                            <span className="break-words text-left font-bold">
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 p-5">
                      <h3 className="mb-4 text-lg font-extrabold">
                        طريقة الدفع
                      </h3>

                      <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4">
                        <input
                          type="radio"
                          name="payment"
                          value="delivery"
                          checked={payment === "delivery"}
                          onChange={(event) => setPayment(event.target.value)}
                          className="mt-1 accent-red-700"
                        />
                        <span>
                          <span className="block font-bold">
                            الدفع عند الاستلام
                          </span>
                          <span className="mt-1 block text-sm text-slate-500">
                            تسديد المبلغ عند استلام الطلب، إذا كانت هذه
                            الخدمة متاحة.
                          </span>
                        </span>
                      </label>

                      <label className="mt-3 flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4">
                        <input
                          type="radio"
                          name="payment"
                          value="electronic"
                          checked={payment === "electronic"}
                          onChange={(event) => setPayment(event.target.value)}
                          className="mt-1 accent-red-700"
                        />
                        <span>
                          <span className="block font-bold">
                            الدفع الإلكتروني
                          </span>
                          <span className="mt-1 block text-sm text-slate-500">
                            يتطلب بوابة دفع آمنة معتمدة لإتمام العملية.
                          </span>
                        </span>
                      </label>

                      {payment === "electronic" && (
                        <p className="mt-3 rounded-xl bg-amber-50 p-3 text-sm leading-6 text-amber-900">
                          يجب ربط خيار الدفع الإلكتروني ببوابة دفع
                          معتمدة قبل إتاحة إتمام الدفع.
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="rounded-xl border border-slate-300 px-5 py-3 font-bold hover:bg-slate-50 sm:flex-1"
                      >
                        تعديل المعلومات
                      </button>
                      <button
                        type="submit"
                        disabled={payment === "electronic"}
                        className="rounded-xl bg-red-700 px-5 py-3 font-bold text-white hover:bg-red-800 disabled:cursor-not-allowed disabled:bg-slate-300 sm:flex-1"
                      >
                        تأكيد الطلب
                      </button>
                    </div>
                  </form>
                )}
              </>
            ) : (
              <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
                  ✓
                </div>
                <h2 className="mt-5 text-2xl font-black">
                  تم تسجيل الطلب على هذه الصفحة
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  رقم المرجع:{" "}
                  <span className="font-black text-red-700">
                    {orderNumber}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  هذا الرقم للعرض فقط؛ لم يتم إرسال الطلب إلى نظام
                  خارجي أو حفظ معلومات الزبون على خادم.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setSelectedProduct(null);
                    setStep(1);
                    setCustomer({
                      fullName: "",
                      phone: "",
                      alternatePhone: "",
                      wilaya: "",
                      commune: "",
                      address: "",
                      notes: "",
                    });
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="mt-6 rounded-xl bg-red-700 px-6 py-3 font-bold text-white hover:bg-red-800"
                >
                  العودة إلى المنتجات
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      <footer className="bg-slate-900 text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <span className="font-bold text-white">MAHATA</span>
          <span>خدمات المنتجات والطلبات</span>
        </div>
      </footer>
    </main>
  );
}
