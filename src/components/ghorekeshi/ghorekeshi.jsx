import style from "./Ghorekeshi.module.css";

const Ghorekeshi = () => {
  return (
    <div className={style.ghorekeshi}>
      <div className={style.ghorekeshiContainer}>
        <div className={style.ghorekeshiTitle}>
          <h2>قرعه‌کشی مصرف‌کنندگان گلستان</h2>
          <h3>قرعه‌کشی دوره‌ای مصرف‌کنندگان چای گلستان </h3>
          <p>
            هر یک از مصرف‌کنندگان محصولات چای و چای کیسه‌ای گلستان می‌توانند با
            ارسال کد قرعه‌کشی روی بسته به شماره 30007405 در قرعه کشی‌های دوره‌ای
            گلستان شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی
            است.
          </p>
          <button>اطلاعات بیشتر</button>
        </div>
        <div className={style.ghorekeshiImage}>
          <img
            src="https://www.golestan.com/wp-content/uploads/2023/07/tea-pic1.png"
            alt="tea-golestan"
          />
        </div>
      </div>
    </div>
  );
};

export default Ghorekeshi;
