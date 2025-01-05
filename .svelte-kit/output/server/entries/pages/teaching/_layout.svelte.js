import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar } from "../../../chunks/navbar.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, { page: "teaching" }, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
