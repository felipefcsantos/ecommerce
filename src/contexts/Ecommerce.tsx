import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Produtos from "../interfaces/Produtos";
import { buscarProdutos } from "../api/api-ecomerce";

interface EcommerceContextType {
  initialState: Produtos[];
  listaProdutos: Produtos[];
  listaCategorias: string[];
}

const EcommerceContext = createContext<EcommerceContextType | undefined>(
  undefined
);

const EcommerceProvider = ({ children }: { children: ReactNode }) => {
  const [initialState, setInitialState] = useState<Produtos[]>([]);
  const [listaProdutos, setListaProdutos] = useState<Produtos[]>([]);
  const [listaCategorias, setListaCategorias] = useState<string[]>([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      const response = await buscarProdutos();
      setInitialState(response)
      setListaProdutos(response);
      const categorias = response.reduce((acc: string[], item: Produtos) => {
        if (!acc.includes(item.category)) {
          acc.push(item.category);
        }
        return acc;
      }, []);
      setListaCategorias(categorias);
    };
    fetchProdutos();
  }, []);

  return (
    <EcommerceContext.Provider
      value={{
        initialState,
        listaProdutos,
        listaCategorias,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};

const useEcommerceContext = (): EcommerceContextType => {
  const context = useContext(EcommerceContext);
  if (!context) {
    throw new Error(
      "useEcommerceContext deve ser usado dentro EcommerceProvider"
    );
  }
  return context;
};

export { EcommerceProvider, useEcommerceContext };
