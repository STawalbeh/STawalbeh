import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="container mt-5">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
