import { c as create_ssr_component, f as each, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const papers = [
    {
      "title": "Towards the Characterization of Representations Learned via Capsule-based Network Architectures",
      "date": "Nov 2024"
    }
  ];
  return `<section><h1 class="title" data-svelte-h="svelte-1tnuyjr">Research Papers</h1> <div>${each(papers, (paper) => {
    return `<div><h2>${escape(paper.title)}</h2> <p><strong data-svelte-h="svelte-cxiy68">Date:</strong> ${escape(paper.date)}</p> <p><strong data-svelte-h="svelte-dj2kai">Paper Link:</strong> <a${add_attribute("href", paper.paper, 0)} target="_blank" rel="noopener noreferrer">Read Paper</a></p> </div>`;
  })}</div></section>`;
});
export {
  Page as default
};
