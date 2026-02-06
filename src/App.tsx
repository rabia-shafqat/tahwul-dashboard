import { Routes, Route } from "react-router-dom";
import Dashboard from "./features/Dashboard";
import { AppLayout } from "./layout";
import StrategicPlanning from "./features/DetailsPage";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/details/strategicPlanning"
          element={<StrategicPlanning />}
        />
      </Routes>
    </AppLayout>
  );
}

export default App;
