Download the zipped file structure [here](https://drive.google.com/uc?id=1Gj88RE7ExY4T-6BjduZqqElqApPFYu_d&export=download)

## Steps to get up and running

1. Download the zipped file structure
1. Unzip the contents of `next-base` folder into your project folder
1. Update the `name` in the `package.json` file 
```
  {
    "name": "next-base", // change this to the actual project name
    "version": "0.1.0",
    ...
  }
  
```
4. Run `npm i` or `pnpm install` to install the dependencies
1. Run `npm run dev` or `pnpm dev` to iniciate the hot reload server
1. Open `localhost:3000` in your browser
1. Time to code, Enjoy 😎

<br />

## Customization:
1. change the `API_BASE_URL` prop at `next.config.js`
1. change the app name at `src/components/common/Page/Page.tsx`
1. change the theme and theme overrides with the files at `src/theme`

## How to add components from this repo to your project

1. Go to `components` folder
1. Choose `visual` (layouts, menus, sidebars) or `functional` (react-hooks, utils, redux)
1. Each components has a `README.md` file where you gonna find instructions to use the component

Links <br />
[react components using MUI](https://github.com/Braint-Tech/template-web/tree/main/components)
