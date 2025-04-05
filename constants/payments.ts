interface Payment {
  title: string;
  url: string;
}

export const donatePayLink: Payment = {
  title: "Donate Now",
  url: "https://donate.stripe.com/5kAdTwbPqeVLgKseUU",
};
export const ticketPayLink: Payment = {
  title: "Bay a ticket",
  url: "https://book.stripe.com/00gg1EbPqaFvam4aEG",
};
export const monthlyDonatePayLink: Payment = {
  title: "Become a sponsor",
  url: "https://buy.stripe.com/dR6cPs4mYeVL79S5kn",
};
