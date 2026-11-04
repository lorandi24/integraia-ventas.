const mxn = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });
const num = new Intl.NumberFormat("es-MX", { maximumFractionDigits: 0 });

export const formatMXN = (n: number) => mxn.format(Number.isFinite(n) ? n : 0);
export const formatNum = (n: number) => num.format(Number.isFinite(n) ? n : 0);
