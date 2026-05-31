import Card from "./components/Card/Card";

function App() {
  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <Card variant="primary" padding="large">
        <p>Hello</p>

        <h2>This is working</h2>
      </Card>
    </div>
  );
}

export default App;
