import cardSource from "../Source/cardSource";

const Card = () => {

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
        {cardSource.map((item, index) => (
          <div key={index} className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img className="w-full object-cover " src={item.imageSrc} alt={item.altText} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base">
                {item.address}
              </p>
              <h1 className="font-bold text-xl mb-2">
                {item.money}
              </h1>
            </div>
            <div className="px-6 pt-4 pb-2">
              {item.tags && item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 transition-transform transform hover:scale-105"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;


