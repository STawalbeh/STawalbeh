import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { N as Navbar } from "../../chunks/navbar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="columns" data-svelte-h="svelte-dktgvp"><div class="column is-3"><div class="box has-text-centered"><figure class="image is-128x128 is-inline-block" style="margin-bottom: 15px;"><img class="is-rounded" src="profile.jpg" alt="Saja Tawalbeh's Profile Picture"></figure> <h4 class="subtitle is-4"><b>Saja Tawalbeh</b></h4> <h6 class="subtitle is-6">Machine Learning Researcher
                <a href="https://idlab.technology/" target="_blank" rel="noopener">sqIRL/IDLab</a></h6> <h6 class="subtitle is-6">Lecturer 
                <a href="https://www.kdg.be" target="_blank" rel="noopener">Karel de Grote Hogeschool</a></h6> <hr> <div class="block"><span class="icon"><i class="fas fa-envelope"></i></span> <span><a href="mailto:sajatawalbeh91@gmail.com">Email</a></span></div> <div class="block"><span class="icon"><i class="fab fa-linkedin"></i></span> <span><a href="https://www.linkedin.com/in/saja-tawalbeh-b744a1151/">LinkedIn</a></span></div> <script lang="ts">const papers = [
  {
    "title": "Towards the Characterization of Representations Learned via Capsule-based Network Architectures",
    "date": "Nov 2024"
  }
];<\/script> <section>…</section> <div class="block"><span class="icon"><i class="fab fa-github"></i></span> <span><a href="https://github.com/STawalbeh">GitHub</a></span></div> <div class="block"><span class="icon"><i class="fab fa-scholar.google"></i></span> <span><a href="https://scholar.google.com/citations?user=p6PVOMEAAAAJ&hl=en">Google Scholar</a></span></div> <div class="block"><span class="icon"><i class="fab fa-orcid"></i></span> <span><a href="https://orcid.org/0000-0001-6278-0768">ORCID</a></span></div> <div class="block"><span class="icon"><i class="fab fa-researchgate"></i></span> <span><a href="https://www.researchgate.net/profile/Saja-Tawalbeh">Research Gate</a></span></div></div></div> <div class="column"><div class="box"><div class="content"><h3 class="title is-4">Biography</h3> <p>My name is Saja Tawalbeh. I received my bachelor’s in computer science in Jordan. Then, I completed my master’s in AI, specifically in natural language processing, and worked as a research assistant in the same area for two years at Jordan University of Science and Technology.</p> <p>I&#39;m currently a senior research fellow and pursuing my Ph.D. in Explainable Artificial Intelligence (XAI) at the Faculty of Science, University of Antwerp, sqIRL/IDLab, imec, Antwerp, Belgium.
                    Additionally, she is a lecturer in the Department of Applied Computer Science at Karel de Grote University of Applied Sciences, Antwerp, Belgium.</p> <h3 class="title is-4">Research Interests</h3> <p>My research interests include NLP, computer vision, and XAI, with a focus on Capsule Networks, Convolutional Neural Networks, and text-based analysis.</p> <ul><li>Explainable AI (XAI)</li> <li>NLP</li> <li>Computer Vision</li></ul> <h3 class="title is-4">Hobbies</h3> <p>I’m passionate about photography, playing chess, and exploring new places on long walks, which helps me feel more connected to the world around me. 
                     Walking also proves to be an excellent way to brainstorm new ideas or troubleshoot research-related challenges</p></div></div></div></div>`;
});
export {
  Page as default
};
