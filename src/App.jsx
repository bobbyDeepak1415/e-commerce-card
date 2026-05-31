import { cardsData } from "./data/cardsData";
import Card from './components/Card/Card'

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
          {cardsData.map((card)=>(
            <Card key={card.id}>

            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
