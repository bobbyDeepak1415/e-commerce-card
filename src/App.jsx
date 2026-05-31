import { cardsData } from "./data/cardsData";
import Card from "./components/Card/Card";
import CardImage from "./components/Card/CardImage";
import CardHeader from "./components/Card/CardHeader";
import CardTitle from "./components/Card/CardTitle";
import CardBody from "./components/Card/CardBody";
import CardFooter from "./components/Card/CardFooter";

function App() {
  return (
    <div className="p-8 min-h-screen bg-linear-to-br from-gray-200 to-gray-400">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4 font-bold text-gray-800">
            Travel Destinations
          </h1>
          <p className="text-xl text-gray-600">
            Reusable card Component with dynamic data
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              variant={card.id % 2 === 0 ? "primary" : "default"}
              padding="none"
            >
              {card.image && <CardImage src={card.image} alt={card.title} />}
              <div className="p-6">
                <CardHeader>
                  {card.category && (
                    <span className="text-sm inline-block rounded-full mb-2 font-semibold px-3 py-1 bg-blue-100 text-blue-700">
                      {card.category}
                    </span>
                  )}
                  <CardTitle
                    className={card.id % 2 === 0 ? "text-blue-800" : ""}
                  >
                    {card.title}
                  </CardTitle>
                  {card.rating && (
                    <div className="flex items-center gap-1">
                      <span>⭐</span>
                      <span>{card.rating}/5.0</span>
                    </div>
                  )}
                </CardHeader>
                {card.description ? (
                  <CardBody
                    className={card.id % 2 === 0 ? "text-blue-800" : ""}
                  >
                    {card.description}
                  </CardBody>
                ) : (
                  <CardBody className="italic text-gray-400">
                    No description for this destination
                  </CardBody>
                )}
                <CardFooter
                  className={card.id % 2 === 0 ? "border-blue-200" : ""}
                >
                  <div className="flex items-center justify-between">
                    {card.price ? (
                      <span className="text-2xl font-bold text-gray-800">{card.price}</span>
                    ) : (
                      <span className="text-gray-500 text-sm">Contact for pricing</span>
                    )}
                    <button className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors  text-white font-medium">Book now</button>
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
        <div>
          <Card></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
