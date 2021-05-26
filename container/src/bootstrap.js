import { mount as productMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

productMount(document.getElementById("my-products"));
cartMount(document.getElementById("my-cart"));
