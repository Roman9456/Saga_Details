import { useAppDispatch, useAppSelector } from "../models/hook";

export default function ErrorItem() {
  const errFunc = useAppSelector((state) => state.data.errorFunc);
  const dispatch = useAppDispatch();

  return (
    <div className="error">
      <span> Произошла ошибка</span>
      <button
        onClick={() => {
          errFunc && dispatch(errFunc);
        }}
      >
        Повторить
      </button>
    </div>
  );
}
