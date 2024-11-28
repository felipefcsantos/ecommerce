import { CarrinhoProvider } from "./contexts/Carrinho";
import { EcommerceProvider } from "./contexts/Ecommerce";
import Router from "./routes/router";

function App() {
  return (
    <>
      <EcommerceProvider>
        <CarrinhoProvider>
          <Router />
        </CarrinhoProvider>
      </EcommerceProvider>
    </>
  );
}

export default App;
