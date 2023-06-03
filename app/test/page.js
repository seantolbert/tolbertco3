import { getShirts } from "../hooks/usePrintify";

const page = async () => {
  const products = await getShirts();

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex gap-5 justify-center">
        {products.map((prod, idx) => (
          <div key={idx} className="w-1/4 flex flex-col items-center">
            <span>{prod.type}</span>
            <img src={prod.images[0].src} alt="" className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default page;
