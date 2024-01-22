
const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
              loading="lazy"
              width=""
              height=""
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Connecting Readers with Worlds of Imagination
            </h2>
            <p className="mt-6 text-gray-600">
              At Book Store, our passion for literature is at the heart of
              everything we do. Established with a vision to create a haven for
              bibliophiles, we have been curating a diverse collection of books
              that transcend genres and ignite the imaginations of readers since
              our inception. Our bookstore is more than just a retail space;
              it's a community hub where book enthusiasts, both seasoned and
              novice, come together to explore the boundless realms of
              storytelling.
            </p>
            <p className="mt-4 text-gray-600">
              {" "}
              We pride ourselves on offering an extensive range of titles, from
              timeless classNameics to contemporary bestsellers, ensuring that every
              visit to Book Store is a journey of discovery. Our knowledgeable
              and friendly staff are dedicated to assisting you in finding the
              perfect read, whether you seek an escape into a fantastical realm,
              a thought-provoking exploration, or a literary masterpiece. At
              Book Store, we believe in the transformative power of books and
              strive to foster a love for reading that transcends generations.
              Join us on this literary adventure, where every book is a key to
              unlocking new worlds of imagination and knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;