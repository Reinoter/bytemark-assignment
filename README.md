# Bytemark Assignment
Assignment created for Bytemark INC.

## Application comments
- Given the size of the application I chose to use insertable components in the main view to display requested information. Normally I would create a different "route" for Articles. This seemed unnatural in this case, because one can't fetch single article data from the provided API. 


- Icons used are from Google Material **https://google.github.io/material-design-icons/**


- Usually we would create a REST backend to not expose the API Token given by **https://newsapi.org**, but for this application we skipped this step. In this application the NewsService constructor saves the Auth Token.


- Folder structure:
  - **[app/compoents/site](./src/app/components/site)** is used by the router
  - **[app/compoents/insert](./src/app/components/insert)** is page elements

## Install development environment
1. Install `NodeJS`

2. Run `npm install` to install required packages:

3. Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help
1. To get more help on the Angular CLI use `npm run help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
2. To contact the developer, reach out to `rein@otter.productions`
