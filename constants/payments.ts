interface Payment {
  title: string;
  url: string;
}

export const donatePayLink: Payment = {
  title: "Donate Now",
  url: "https://buy.stripe.com/test_fZeg2S80z05E4mYeUY",
};
export const ticketPayLink: Payment = {
  title: "Bay a ticket",
  url: "https://buy.stripe.com/test_dR65oea8Hf0y7za146",
};
export const monthlyDonatePayLink: Payment = {
  title: "Become a sponsor",
  url: "https://buy.stripe.com/test_6oEaIy2Gf8Ca4mYbIL",
};
