export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* Checkmark icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-stone-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>

        <p className="text-stone-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
          Payment Successful
        </p>
        <h1 className="text-3xl font-bold text-stone-800 mb-4">
          Thank you for your order!
        </h1>
        <p className="text-stone-500 leading-relaxed mb-8">
          Your handcrafted piece is on its way. You&apos;ll receive a confirmation email shortly. Each item is carefully packaged with love.
        </p>

        <a
          href="/"
          className="inline-block bg-stone-800 text-white font-semibold px-8 py-3 rounded-full hover:bg-stone-700 transition-colors"
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
}
