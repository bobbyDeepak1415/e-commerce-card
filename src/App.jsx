import { cardsData } from "./data/cardsData";

function App() {
  return <div className="p-8 min-h-screen bg-gray-100">
<div>

    {cardsData.map((card)=>(
      <Card>{card}</Card>
    ))}
</div>
  </div>;
}

export default App;
