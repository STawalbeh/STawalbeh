# My Personal Website

There's not much to say.
It's written in Svelte and I try to update this regularly.

## Development

```bash
npm install
node-sass src/styles.scss > static/styles.css
1- npm install node-sass --save-dev
2- npx node-sass src/styles.scss > static/styles.css
3- sudo npm install -g node-sass
4- npx sass --watch src/styles.scss:static/styles.css
npm run dev
```

can also use ``--watch`` for node sass

## Deployment

```bash
npm run build
npm install @sveltejs/adapter-static --save-dev
```

Then copy the build folder to github pages (should write a script for this).
