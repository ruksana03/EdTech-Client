/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DetailModal from "../../components/modal/DetailModal";
import { useSelector } from "react-redux";
import Loader from "../../components/shared/Loader";
import { FaStar } from "react-icons/fa";
import { TbWorldCheck } from "react-icons/tb";
import { MdFreeCancellation } from "react-icons/md";
import { BiPurchaseTag } from "react-icons/bi";

const DetailsInfo = ({ detailInfo }) => {
  const { title, image, price, details, name, email, requirements, duration } = detailInfo || {};

  console.log(detailInfo);

  const [isOpen, setIsOpen] = useState(false);

  const user = useSelector((state) => state.data.user.user);

  const closeModal = () => {
    setIsOpen(false);
  };

  const [itemInfo, setItemInfo] = useState(null);

  useEffect(() => {
    if (user && detailInfo) {
      const newInfo = {
        stName: user.name || "",
        stEmail: user.email || "",
        stImage: user.photo || "",
        title: detailInfo?.title,
        name: detailInfo?.name,
        price: detailInfo?.price,
        image: detailInfo?.image,
        details: detailInfo?.details,
        email: detailInfo?.email,
        classId: detailInfo?._id,
      };
      setItemInfo(newInfo);
    }
    window.scrollTo(0, 0);
  }, [user, detailInfo]);

  if (!itemInfo) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <section className="section-container py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <nav className="flex">
          <div className="-m-1">
            <p className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">
              Course
              <span className="mx-2 text-gray-400">/</span>
              <span>Details</span>
              <span className="mx-2 text-gray-400">/</span>
              <span>Payment</span>
            </p>
          </div>
        </nav>

        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden rounded-lg">
                  <img
                    className="h-full w-full max-w-full object-cover"
                    src={image}
                    alt=""
                  />
                </div>
              </div>

              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row items-start lg:flex-col">
                  <button
                    type="button"
                    className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                  >
                    <img
                      className="h-full w-full object-cover"
                      src={image}
                      alt=""
                    />
                  </button>
                  <button
                    type="button"
                    className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                  >
                    <img
                      className="h-full w-full object-cover"
                      src={image}
                      alt=""
                    />
                  </button>
                  <button
                    type="button"
                    className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                  >
                    <img
                      className="h-full w-full object-cover"
                      src={image}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
              {title}
            </h1>

            <div className="mt-5 flex items-center">
              <div className="flex items-center">
                <FaStar className="block h-4 w-4 align-middle text-yellow-500" />{" "}
                {/* StarIcon */}
                <FaStar className="block h-4 w-4 align-middle text-yellow-500" />{" "}
                {/* StarIcon */}
                <FaStar className="block h-4 w-4 align-middle text-yellow-500" />{" "}
                {/* StarIcon */}
                <FaStar className="block h-4 w-4 align-middle text-yellow-500" />{" "}
                {/* StarIcon */}
                <span className="ml-2 block text-sm font-medium text-gray-500">
                  1,209 Reviews
                </span>
              </div>
            </div>

            <h2 className="mt-8 text-base text-gray-900 font-semibold">
              Instructor: {name}
            </h2>
            <h2 className="text-base text-gray-900 mt-3 font-semibold">
              Email: {email}
            </h2>

            <div className="mt-4 flex select-none flex-wrap items-center gap-1">
              <p className="font-semibold text-base">Duration: {duration} months</p>
            </div>

            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <h1 className="text-3xl font-bold">${price}</h1>
              </div>

              <button
                onClick={() => setIsOpen(true)}
                type="button"
                className="inline-flex items-center justify-center btn-style"
              >
                <BiPurchaseTag className="text-lg" />
                <span className="ml-2">Purchase Now</span>
              </button>
              <DetailModal
                isOpen={isOpen}
                itemInfo={itemInfo}
                closeModal={closeModal}
              ></DetailModal>
            </div>

            <ul className="mt-8 space-y-2">
              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                <TbWorldCheck className="text-lg" />

                <span className="ml-2"> Learn Anytime, Anywhere</span>
              </li>

              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                <MdFreeCancellation className="text-lg"/>
                <span className="ml-2">Cancel Anytime</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="border-b border-gray-300">
              <nav className="flex gap-4">
                <a
                  href="#"
                  title=""
                  className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
                >
                  Description
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
                >
                  Reviews
                  <span className="ml-2 block rounded-full bg-second px-2 py-px text-xs font-bold text-gray-100">
                    1,209
                  </span>
                </a>
              </nav>
            </div>

            <div className="mt-8 flow-root sm:mt-12">
              <h1 className="text-3xl font-bold">Course Description</h1>
              <p className="mt-4">{details}</p>
              <h1 className="text-3xl font-semibold mt-5">Requirments</h1>
              <p className="mt-4 font-medium">{requirements}</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DetailsInfo;
