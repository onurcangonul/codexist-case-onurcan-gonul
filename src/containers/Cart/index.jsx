// Redux Import
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectSubtotal,
  selectTotal,
  removeFromCart,
} from "../../redux/cartSlice";
// Thirtparty Import
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ShopingCart = () => {
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(selectSubtotal);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();

  const handleRemoveClick = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
    toast.info("Book Successfully Deleted!");
  };
  return (
    <>
      {cartItems.length > 0 ? (
        <section className="h-full bg-gray-100 py-12 sm:py-16 lg:py-5">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <h1 className="text-2xl font-semibold text-gray-900">
                Sepetiniz
              </h1>
            </div>
            <div className="mx-auto mt-8 max-w-2xl md:mt-12">
              <div className="bg-white shadow">
                <div className="px-4 py-6 sm:px-8 sm:py-10">
                  {cartItems &&
                    cartItems.map((val) => (
                      <div key={val.id} className="flow-root gap-2">
                        <ul className="mb-2 -mt-8">
                          <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                            <div className="shrink-0">
                              <img
                                className="h-24 w-24 max-w-full rounded-lg object-cover"
                                src={val.image ?? ""}
                                alt=""
                              />
                            </div>
                            <div className="relative flex flex-1 flex-col justify-between">
                              <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                <div className="pr-8 sm:pr-5">
                                  <p className="text-base font-semibold text-gray-900">
                                    {val.title ?? ""}
                                  </p>
                                  <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                    {val.id ?? ""}
                                  </p>
                                </div>

                                <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                  <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                    {val.price.amount + " TL" ?? ""}
                                  </p>
                                </div>
                              </div>
                              <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                <button
                                  onClick={() => handleRemoveClick(val.id)}
                                  className="flex rounded p-2 text-center text-red-500 underline transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                                >
                                  Kaldır
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    ))}

                  <div className="mt-6 border-t border-b py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-400">Ara Toplam</p>
                      <p className="text-lg font-semibold text-gray-900">{`${subtotal.toFixed(
                        2
                      )} TL`}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-400">Kargo</p>
                      <p className="text-lg font-semibold text-gray-900">
                        8.00 TL
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Toplam</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      <p className="text-2xl font-semibold text-gray-900">{`${total.toFixed(
                        2
                      )} TL`}</p>
                    </p>
                  </div>
                  <div className="mt-6 text-center">
                    <Link to="/checkout">
                      <button
                        type="button"
                        className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                      >
                        Ödeme
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-5">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <span className="h-screen flex justify-center items-center font-semibold text-3xl">
              Sepetiniz Boş
            </span>
          </div>
        </section>
      )}
    </>
  );
};

export default ShopingCart;
