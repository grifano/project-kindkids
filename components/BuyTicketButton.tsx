import { useState } from "react";

const BuyTicketButton = () => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    const res = await fetch("/api/checkout", { method: "POST" });
    const { url } = await res.json();
    window.location.href = url; // Redirect to Stripe Checkout
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-purple px-6 py-3 font-bold text-white transition-all hover:saturate-150"
    >
      {loading ? "Processing..." : "Buy a Ticket"}
    </button>
  );
};

export default BuyTicketButton;
