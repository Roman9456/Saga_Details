import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../models/hook";
import { getItemDetail } from "../redux/DataSlice";
import { useParams } from "react-router-dom";
import loadingPic from "../assets/loading-loading-gif.gif";
import ErrorItem from "./ErrorItem";

export default function ItemDetail() {
  const dispatch = useAppDispatch();
  const detail = useAppSelector((state) => state.data.detail);
  const isError = useAppSelector((state) => state.data.error);
  const loading = useAppSelector((state) => state.data.loading);
  const { id } = useParams();

  useEffect(() => {
    id && dispatch(getItemDetail(id));
  }, [id, dispatch]);

  if (loading) {
    return <img src={loadingPic} style={{ width: "50px", height: "50px" }} />;
  }
  if (isError) {
    return <ErrorItem />;
  }
  if (detail) {
    return (
      <div>
        <h2>{detail.name}</h2>
        <div>{detail.content}</div>
        <div>{"Цена :" + detail.price}</div>
      </div>
    );
  }
}
