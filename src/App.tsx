import { EcommerceProvider } from "./contexts/Ecommerce";
import Router from "./routes/router";

function App() {
  return (
    <>
    <EcommerceProvider>
      <Router />
      </EcommerceProvider>
    </>
  );
}

export default App;
