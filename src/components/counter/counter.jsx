import style from "./counter.module.css";

const Counter = () => {
  return (
    <div className={style.Counter}>
      <div className={style.CounterContainer}>
        <div className={style.CounterOption}>
            <img src="https://www.golestan.com/wp-content/uploads/2023/01/statistics-icon-4.png" alt="سرمایه-انسانی" />
            <h2>سرمایه انسانی</h2>
        </div>
        <div className={style.CounterOption}>
            <img src="https://www.golestan.com/wp-content/uploads/2023/01/statistics-icon-3.png" alt="سرمایه-انسانی" />
            <h2>سرمایه انسانی</h2>
        </div>
        <div className={style.CounterOption}>
            <img src="https://www.golestan.com/wp-content/uploads/2023/01/statistics-icon-2.png" alt="سرمایه-انسانی" />
            <h2>سرمایه انسانی</h2>
        </div>
        <div className={style.CounterOption}>
            <img src="https://www.golestan.com/wp-content/uploads/2023/01/statistics-icon-1.png" alt="سرمایه-انسانی" />
            <h2>سرمایه انسانی</h2>
        </div>
      </div>
    </div>
  );
};

export default Counter;
