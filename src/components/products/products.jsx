import style from "./prodducts.module.css";

const productData = [
  {
    name: "برنج گلستان",
    image:
      "https://www.golestan.com/wp-content/uploads/2023/01/image2-new-1.jpg",
    title: "رکن اول غذای ایرانی",
    FirstDescription:
      "مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند.",
    button: {
      FirstButton: "محصولات برنج",
      SecondButton: "آشپزخانه گلستان",
    },
  },
  {
    name: "چای گلستان",
    image: "https://www.golestan.com/wp-content/uploads/2023/01/image3-new.jpg",
    title: "سابقه‌ای به قدمت یک عمر",
    FirstDescription:
      "چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین نوشیدنی دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌ حس خوب آرامش را به همراه دارد.",
    SecondDescription:
      " برای مردمان ایران زمین نام گلستان با چای پیوند خورده است؛‌ قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و بهداشتی‌ترین دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، ‌عطر و طعم به یادماندنی آن است.",
    button: {
      FirstButton: "محصولات چای",
    },
  },
  {
    name: "پسته گلستان",
    image: "https://www.golestan.com/wp-content/uploads/2023/01/image4-new.jpg",
    title: "آجيل‌های خوش خنده",
    FirstDescription:
      "خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب.",
    SecondDescription:
      " پسته گلستان اما حسابش از دیگر پسته‌های بازار جداست. مرغوب‌ترین پسته خام از بهترین باغ‌های پسته ایران دستچین می‌شود.‌ پس از كنترل كیفیت در آزمایشگاه و اطمینان از سلامت محصول،‌ با زعفران درجه یک و نمک، بوداده و برشته شده و‌ پسته گلستان را با طعم و رنگ و عطری بی‌نظیر به ارمغان می‌آورد.",
    button: {
      FirstButton: "ناتس گلستان",
    },
  },
];

const Products = () => {
  return (
    <div className={style.Products}>
      <div className={style.ProductsContainer}>
        {productData.map((product, index) => (
          <div key={index} className={style.ProductCard}>
            <div className={style.ProductBanner}>
              <img src={product.image} alt={product.name} />
              <div className={style.ProductHead}>
                <h2>{product.name}</h2>
                <span>معرفی محصول</span>
              </div>
            </div>
            <div className={style.ProductDes}>
              <h2>{product.title}</h2>
              <p>{product.FirstDescription}</p>
              <p>{product.SecondDescription}</p>
              <div className={style.ProductButtons}>
                <button>{product.button.FirstButton}</button>
                <button>{product.button.SecondButton}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
