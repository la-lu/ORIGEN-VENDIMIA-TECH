export const currency = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0
});

export const formatPrice = (value: number) => currency.format(value);

export const stars = (rating: number) =>
  Array.from({ length: 5 }, (_, index) => index < rating);

export const buildOrderNumber = () =>
  `ORG-${Math.floor(100000 + Math.random() * 900000)}`;
