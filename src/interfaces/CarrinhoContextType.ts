import Produtos from "./Produtos";

export default interface CarrinhoContextType {
  listaCarrinho: Produtos[];
  adicionaItemNoCarrinho: (item: Produtos) => void;
  removeItemDoCarrinho: (id: number) => void;
}
