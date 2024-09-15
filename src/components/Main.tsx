import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../models/hook";
import { getItems } from "../redux/DataSlice";
import { Link } from "react-router-dom";
import loadingPic from "../assets/loading-loading-gif.gif";
import ErrorItem from "./ErrorItem";

export default function Main() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.data.items);
  const isError = useAppSelector((state) => state.data.error);
  const loading = useAppSelector((state) => state.data.loading);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h2>Список услуг</h2>
        {loading && (
          <img src={loadingPic} style={{ width: "50px", height: "50px" }} />
        )}
        {isError && <ErrorItem />}
        <ul>
          {items.map((item) => (
            <Link to={`/${item.id}/detail`} key={item.id}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
