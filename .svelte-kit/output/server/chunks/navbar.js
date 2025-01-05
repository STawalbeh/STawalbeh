import { c as create_ssr_component, e as escape, d as add_attribute } from "./ssr.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { page = "" } = $$props;
  const is_active = (name) => page === name ? "is-active" : "";
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  return `<div class="column is-narrow"><a href="."><b style="font-weight: 800" class="title is-3">${escape("STawalbeh")}</b></a></div> <div class="columns"><div class="column"><div class="tabs is-boxed is-left"><ul><li${add_attribute("class", is_active("research"), 0)}><a href="/research" class="is-flex is-align-items-center" data-svelte-h="svelte-gqa0h3"><span class="icon is-small"><i class="fas fa-atom" aria-hidden="true"></i></span> <span>Research</span></a></li></ul></div></div></div>`;
});
export {
  Navbar as N
};
