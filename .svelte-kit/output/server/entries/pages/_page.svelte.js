import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { page = "" } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  return `<div class="column is-narrow"><a href="."><b style="font-weight: 800" class="title is-3">${escape("STawalbeh")}</b></a></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="columns" data-svelte-h="svelte-hqy2qi"><div class="column is-3"><div class="box has-text-centered"><figure class="image is-128x128 is-inline-block"><img class="is-rounded" src="profile.jpg" alt="me :)"></figure> <h4 class="subtitle is-4"><b>Saja Tawalbeh</b></h4>  <h6 class="subtitle is-6">Machine Learning Researcher</h6> <hr> <div class="block"><span class="icon"><i class="fas fa-envelope"></i></span> <span><a href="mailto:sajatawalbeh91@gmail.com">Email</a></span></div> <div class="block"><span class="icon"><i class="fab fa-linkedin"></i></span> <span><a href="https://www.linkedin.com/in/saja-tawalbeh-b744a1151/">LinkedIn</a></span></div> <div class="block"><span class="icon"><i class="fab fa-github"></i></span> <span><a href="https://github.com/STawalbeh">GitHub</a></span></div></div></div> <div class="column"><div class="box"><div class="content"><p>My name is Saja Tawalbeh. I received my bachelor’s in computer science in Jordan. Then, I completed my master’s in AI, specifically in natural language processing, and worked as a research assistant in the same area for two years at Jordan University of Science and  Technology.</p> <p>I&#39;m currently a senior research fellow and pursuing my Ph.D. in Explainable Artificial Intelligence (XAI) at the Faculty of Science, University of Antwerp, sqIRL/IDLab, imec, Antwerp, Belgium.
                    Additionally, she is a lecturer in the Department of Applied Computer Science at Karel de Grote University of Applied Sciences, Antwerp, Belgium.</p> <p>My research interests include NLP, computer vision, and XAI, with a focus on Capsule Networks, Convolutional Neural Networks, and text-based analysis.</p> <p>I’m passionate about photography, playing chess, and exploring new places on long walks, which helps me feel more connected to the world around me. 
                     Walking also proves to be an excellent way to brainstorm new ideas or troubleshoot research-related challenges</p></div></div></div></div>`;
});
export {
  Page as default
};
