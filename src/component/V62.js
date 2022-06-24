import React from "react";
import TablaStock from "./TablaStock";
import TablaConsumo from "./TablaConsumo";

const V62 = () => {
  return (
    <>
      <TablaStock nombre={"V62"} codigoCaucho={409607} />
      <TablaConsumo nombre={"V62"} codigoCaucho={409607} />
    </>
  );
};

export default V62;

export const auth = getAuth(app);
export const db = getFirestore(app);

export const consulta = collection(db, "cargados");

export const consumidos = collection(db, "consumidos");
