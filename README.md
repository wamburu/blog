[![Netlify Status](https://api.netlify.com/api/v1/badges/a2088d26-b049-4181-8347-f11d57f808b1/deploy-status)](https://app.netlify.com/sites/wamburu/deploys)

### About

Collected and sorted out notes, essays on daily thinking, readings, brain holes and technical topics. Scoping but not limited to innovation, technology, markets, the future, music, etc.



## Developing
Blog built using [Novela Theme](https://github.com/narative/gatsby-theme-novela)

### Step 1:

##### With `git clone`:

```sh
git clone git@github.com:narative/gatsby-starter-novela.git novela-site

cd novela-site

yarn
```

### Step 2:

Once installed or cloned locally and all packages are installed you can begin developing your site.

```sh
# Run localhost
yarn dev

# Build your Gatsby site
yarn build
```

If wanting to use Netlify CMS as the content editor, then you need to be run the proxy in another terminal tab. Then visit
http://localhost:8000/admin to view the editor.
```sh
# Run proxy
yarn proxy
```