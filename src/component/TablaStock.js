import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  where,
  doc,
  deleteDoc,
  addDoc,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";

export default function TablaStock({ codigoCaucho, nombre }) {
  const [data, setData] = useState([]);

  const consulta = collection(db, "cargados");

  const q = query(
    consulta,
    where("Codigo", "==", codigoCaucho),
    orderBy("Serie", "desc")
  );

  const consumidos = collection(db, "consumidos");

  const cargaData = (a) => {
    addDoc(consumidos, { ...a });
  };

  useEffect(() => {
    const unsub = onSnapshot(
      q,
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  const kilos = data.map((mov) => {
    return mov.Kilos;
  });

  const totalKilos = kilos.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  const deleteData = async (pallet) => {
    try {
      //setLoading((prev) => ({ ...prev, [nanoid]: true }));
      const docRef = doc(db, "cargados", `${pallet}`);
      await deleteDoc(docRef);
      //setData(data.filter((doc) => doc.pallet !== pallet));
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickDelete = async (pallet) => {
    console.log("click delete");
    await deleteData(pallet);
  };

  // const getMaleUsers = async () => {
  //   try {
  //     const q = query(collection(db, "cargados"));
  //     const querySnapshot = await getDocs(q);

  //     const datos = querySnapshot.docs.map((doc) => doc.data());
  //     setData(datos);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  //console.log(data);
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-2">
          Compuesto {nombre} {codigoCaucho}
        </div>
        <div className="col-2">
          <h1>Stock: {totalKilos}</h1>
        </div>
        <div className="col-8">
          <div style={{ height: "100%", width: "100%" }}>
            <table className="table table-sm">
              <thead>
                <tr style={{ width: "7%", height: "10px" }}>
                  <th className="w-25" scope="col">
                    Kilos
                  </th>
                  <th className="w-0" scope="col">
                    Serie
                  </th>
                  <th className="w-0" scope="col">
                    Lote
                  </th>
                  <th className="w-0" scope="col">
                    Caducidad
                  </th>
                  <th className="w-0" scope="col">
                    Solicitud
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((d) => (
                  <tr key={d.id}>
                    <th>
                      {d.Kilos}
                      <button
                        onClick={() => {
                          cargaData(d);
                          handleClickDelete(d.id);
                        }}
                      >
                        ???
                      </button>
                    </th>
                    <th>{d.Serie}</th>
                    <th>{d.Lote}</th>
                    <th>{d.Caducidad}</th>
                    <th>{d.Solicitud}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* <button onClick={getMaleUsers}>pedir</button> */}
        </div>
      </div>
      <hr />
    </div>
  );
}
