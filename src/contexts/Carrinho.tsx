import { createContext, ReactNode, useContext, useState } from "react";
import CarrinhoContextType from "../interfaces/CarrinhoContextType";
import Produtos from "../interfaces/Produtos";

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(
  undefined
);

const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [listaCarrinho, setListaCarrinho] = useState<Produtos[]>([]);
  const storageKey = "carrinhoEcommerce";
  const carrinho = JSON.parse(localStorage.getItem(storageKey) || "[]");

  const adicionaItemNoCarrinho = (item: Produtos) => {
    const existe = carrinho.some(
      (carrinhoItem: Produtos) => carrinhoItem.id === item.id
    );

    if (!existe) {
      carrinho.push({ ...item, qtd: 1 });
      localStorage.setItem(storageKey, JSON.stringify(carrinho));
      setListaCarrinho(carrinho);
    }
  };

  const removeItemDoCarrinho = (id: number) => {
    const novoCarrinho = carrinho.filter(
      (carrinhoItem: Produtos) => carrinhoItem.id !== id
    );
    localStorage.setItem(storageKey, JSON.stringify(novoCarrinho));
    setListaCarrinho(novoCarrinho);
  };

  return (
    <CarrinhoContext.Provider
      value={{
        listaCarrinho,
        adicionaItemNoCarrinho,
        removeItemDoCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

const useCarrinhoContext = (): CarrinhoContextType => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error(
      "useCarrinhoContext deve ser usado dentro CarrinhoProvider"
    );
  }
  return context;
};

export { CarrinhoProvider, useCarrinhoContext };
