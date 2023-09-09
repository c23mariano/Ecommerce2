import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail";
import {useParams} from "react-router-dom";

const cars = [
    { id: 1, image: "https://tse2.mm.bing.net/th?id=OIP.v8-szzteOr-Cgczp2kPHjAHaE7&pid=Api&P=0&h=180", category: "camionetas", title: "Volkwsagen Amarok Highline V6"},
    { id: 2, image: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/l/RT_V_25a6a899dfdd43beae53fc19419db0f3.jpg", category: "camionetas", title: "Volkswagen Taos Hihgline"},
    { id: 3, image: "https://upload.autogalias.com/wp-content/uploads/2020/09/Sandero-Life-Blanco-Glacial.jpg", category: "autos", title: "Renault Sandero Life"},

];

export const ItemDetailContainter = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams;

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(cars);
            }, 3000);
        });
        getData.then(res => setData(res));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainter;