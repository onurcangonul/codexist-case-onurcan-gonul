import React from 'react'

const Product = () => {
  return (
    <section className=" container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
      <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
        <section className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <img
            src="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1"
            alt=""
          />
          <h1 className="text-3xl my-5">Soft Plushy Cushion Chair</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            incidunt!
          </p>
          <h2 className="font-semibold mb-5">$29.99</h2>
          <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">
            Add To Cart
          </button>
        </section>
        <section className="p-5 py-10 bg-green-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <img
            src="https://www.dropbox.com/s/8ymeus1n9k9bhpd/y16625.png?dl=1"
            alt=""
          />
          <h1 className="text-3xl my-5">Comfortable Wooden Chair</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            incidunt!
          </p>
          <h2 className="font-semibold mb-5">$39.99</h2>
          <button className="p-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600">
            Add To Cart
          </button>
        </section>
        <section className="p-5 py-10 bg-red-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <img
            src="https://www.dropbox.com/s/ykdro56f2qltxys/hh2774663-87776.png?dl=1"
            alt=""
          />
          <h1 className="text-3xl my-5">Multipurpose Wooden Trolly</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            incidunt!
          </p>
          <h2 className="font-semibold mb-5">$19.99</h2>
          <button className="p-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600">
            Add To Cart
          </button>
        </section>
        <section className="p-5 py-10 bg-blue-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
          <img
            src="https://www.dropbox.com/s/1fav310i2eqkdz8/tool2.png?dl=1"
            alt=""
          />
          <h1 className="text-3xl my-5">Multipurpose Wooden Tool</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            incidunt!
          </p>
          <h2 className="font-semibold mb-5">$34.99</h2>
          <button className="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Add To Cart
          </button>
        </section>
      </section>
    </section>
  );
}

export default Product