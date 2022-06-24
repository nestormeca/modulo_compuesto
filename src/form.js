export const columns = [
  //   { field: "id", headerName: "ID", width: 70 },
  { field: "compuesto", headerName: "Compuesto", width: 130 },
  { field: "semana1", headerName: "Semana 1", type: "number", width: 90 },
  {
    field: "semana2",
    headerName: "Semana 2",
    type: "number",
    width: 90,
  },
  {
    field: "semana3",
    headerName: "Semana 3",
    type: "number",
    width: 90,
  },
  {
    field: "semana4",
    headerName: "Semana 4",
    type: "number",
    width: 90,
  },
  {
    field: "semana5",
    headerName: "Semana 5",
    type: "number",
    width: 90,
  },
  {
    field: "consumototal",
    headerName: "Consumo del Mes",
    type: "number",
    width: 150,
  },

  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 60,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

export const rows = [
  {
    id: 1,
    compuesto: "V62 (409607)",
    semana1: 5,
    semana2: 35,
    semana3: 1,
    semana4: 35,
    semana5: 123,
    consumototal: 123,
  },
  {
    id: 2,
    compuesto: "V63 (409521)",
    semana1: 5,
    semana2: 35,
    semana3: 1,
    semana4: 35,
    semana5: 123,
    consumototal: 123,
  },
  {
    id: 3,
    compuesto: "V1-63 (400894)",
    semana1: 5,
    semana2: 35,
    semana3: 1,
    semana4: 35,
    semana5: 123,
    consumototal: 123,
  },
  {
    id: 4,
    compuesto: "V65 (409547)",
    semana1: 5,
    semana2: 35,
    semana3: 1,
    semana4: 35,
    semana5: 123,
    consumototal: 123,
  },
  {
    id: 5,
    compuesto: "PR2 (409829)",
    semana1: 5,
    semana2: 35,
    semana3: 1,
    semana4: 35,
    semana5: 123,
    consumototal: 123,
  },
  {
    id: 6,
    compuesto: "V057 (451004)",
    semana1: 5,
    semana2: 35,
    semana3: 1,
    semana4: 35,
    semana5: 123,
    consumototal: 123,
  },
  {
    id: 7,
    compuesto: "V064 (450287)",
    semana1: 5,
    semana2: 35,
    semana3: 1,
    semana4: 35,
    semana5: 123,
    consumototal: 123,
  },
  {
    id: 8,
    compuesto: "V066 (450289)",
    semana1: 5,
    semana2: 35,
    semana3: 1,
    semana4: 35,
    semana5: 123,
    consumototal: 123,
  },
  {
    id: 9,
    compuesto: "TOTAL:",
    semana1: 5,
    semana2: 35,
    semana3: 1,
    semana4: 35,
    semana5: 35,
    consumototal: 123,
  },
];
