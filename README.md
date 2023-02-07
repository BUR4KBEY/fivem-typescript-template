# FiveM Typescript Template

This template had inspired by [**project-error/fivem-typescript-boilerplate**](https://github.com/project-error/fivem-typescript-boilerplate) and customized for general usage.

This template uses [**React**](https://reactjs.org/) (with [**Vite**](https://vitejs.dev/)), [**TailwindCSS**](https://tailwindcss.com/) and [**QBCore**](https://docs.qbcore.org/qbcore-documentation/) with Typescript.

## Folder Structure

-   `client`: Client-side scripts
-   `server`: Server-side scripts
-   `web`: Front-end files
-   `scripts`: Helpful scripts for the project
-   `dist`: Builded version of `client` and `server`

## Installation

-   Install `yarn` if you haven't installed it yet. (`npm install yarn -g`)
-   Go to `server-data/resources/[my-resources]`
-   Run `git clone https://github.com/BUR4KBEY/fivem-typescript-template template`
-   Run these commands:
    ```powershell
    cd template
    yarn install
    cd web
    yarn install
    yarn build
    cd..
    yarn build
    ```
-   Type these commands to FiveM console:
    ```
    refresh
    ensure template
    ```

If the installation succeeds, you can use `template` command in the game. (F8 > `template`)

## Development

-   You can develop the UI using `dev` command (in `web` folder) on browser. After you finish the development process, you can run `build` command to build.

-   You can use `watch` command to build your `server` and `client` folders automatically.
