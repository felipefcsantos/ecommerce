import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Produtos from "../interfaces/Produtos";
import { buscarProdutos } from "../api/api-ecomerce";
import EcommerceContextType from "../interfaces/EcommerceContextType";
import Categorias from "../interfaces/Categorias";

const EcommerceContext = createContext<EcommerceContextType | undefined>(
  undefined
);

const EcommerceProvider = ({ children }: { children: ReactNode }) => {
  const [initialState, setInitialState] = useState<Produtos[]>([]);
  const [listaProdutos, setListaProdutos] = useState<Produtos[]>([]);
  const [listaCategorias, setListaCategorias] = useState<Categorias[]>([]);
  const storageKey = "favoritosEcommerce";

  useEffect(() => {
    const fetchProdutos = async () => {
      const response = await buscarProdutos();
      const responseComFavorito = response.map((item: Produtos) => {
        const listaFavoritos = JSON.parse(
          localStorage.getItem(storageKey) || "[]"
        );
        const index = listaFavoritos.indexOf(item.id);
        return { ...item, fav: index === -1 ? false : true };
      });
      setInitialState(responseComFavorito);
      setListaProdutos(responseComFavorito);
      const categorias = response.reduce((acc: Categorias[], item: Produtos) => {
        if (!acc.some((categoria) => categoria.name === item.category)) {
          acc.push({name: item.category, checked: false});
        }
        return acc;
      }, []);
      setListaCategorias(categorias);
    };
    fetchProdutos();
  }, []);

  const favoritarProduto = (id: number) => {
    const favoritos = JSON.parse(localStorage.getItem(storageKey) || "[]");
    const index = favoritos.indexOf(id);
  
    if (index === -1) {
      favoritos.push(id);
    } else {
      favoritos.splice(index, 1);
    }
    localStorage.setItem(storageKey, JSON.stringify(favoritos));
  
    setListaProdutos((prevState) =>
      prevState.map((produto) =>
        produto.id === id ? { ...produto, fav: index === -1 } : produto
      )
    );
  };

  return (
    <EcommerceContext.Provider
      value={{
        initialState,
        listaProdutos,
        setListaProdutos,
        listaCategorias,
        setListaCategorias,
        favoritarProduto,
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
