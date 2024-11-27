import Categorias from "./Categorias";
import Produtos from "./Produtos";

export default interface EcommerceContextType {
    initialState: Produtos[];
    listaProdutos: Produtos[];
    setListaProdutos: React.Dispatch<React.SetStateAction<Produtos[]>>;
    listaCategorias: Categorias[];
    setListaCategorias: React.Dispatch<React.SetStateAction<Categorias[]>>;
    favoritarProduto: (id: number) => void;
  }