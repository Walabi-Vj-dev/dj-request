// Textos editables de la página pública: [clave, etiqueta en el admin, valor por defecto]
export const TXT = [
  ["eyebrow",      "Línea chica arriba del título",   c => `${c.count} números`],
  ["subtitle",     "Texto debajo del título",         c => c.prize ? `Premio: ${c.prize}` : ""],
  ["priceLabel",   "Etiqueta del precio",             () => "Valor"],
  ["perLabel",     "Debajo del precio",               () => "por número"],
  ["dateLabel",    "Antes de la fecha del sorteo",    () => "Sorteo"],
  ["prizesTitle",  "Título de la sección de premios", () => "Premios"],
  ["sponsorLabel", "Antes del nombre de la empresa",  () => "Colabora"],
  ["gridTitle",    "Título arriba de los números",    () => "Elegí tus números"],
  ["step1",        "Paso 1",                          () => "Elegí uno o varios números libres."],
  ["step2",        "Paso 2",                          () => "Reservalos con tu nombre y celular. Quedan en amarillo y nadie más los puede tomar."],
  ["step3",        "Paso 3",                          () => "Transferí y mandá el comprobante por WhatsApp. Cuando se confirma el pago, el número pasa a verde."],
  ["payTitle",     "Título de la sección de pago",    () => "Para pagar"],
  ["footer",       "Texto al final de la página",     () => "Los números reservados se confirman cuando el organizador recibe el pago."],
];

export function txt(C, k){
  const v = C[k];
  if (v !== undefined && v !== null) return v;
  const d = TXT.find(t => t[0] === k);
  return d ? d[2](C) : "";
}

export const prizeList = C =>
  Object.entries(C.prizes || {}).map(([id, p]) => ({ id, ...p })).sort((a, b) => (a.o ?? 0) - (b.o ?? 0));

export const winMap = W =>
  W == null || W === "" ? {} : typeof W === "object" ? W : { main: W };

export const prizeLabel = (p, i) => (p && p.label) || `${i + 1}° premio`;
