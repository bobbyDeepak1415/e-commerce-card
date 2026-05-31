import Card from "./components/Card/Card";
import CardHeader from "./components/Card/CardHeader";

function App() {
  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <Card variant="primary" padding="large">
        <p>Hello</p>

        <h2>This is working</h2>
        <CardHeader>
          <p>header</p>
        </CardHeader>
        <CardHeader className="text-red-800 italic">
          <p>header</p>
        </CardHeader>
      </Card>
    </div>
  );
}

export default App;
