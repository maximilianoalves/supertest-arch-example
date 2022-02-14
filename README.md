<h1 align="center">Architecture example using SuperTest for api tests</h1>

[![CI para executar o teste e salvar o report no gh-pages.](https://github.com/maximilianoalves/supertest-arch-example/actions/workflows/deploy.yml/badge.svg)](https://github.com/maximilianoalves/supertest-arch-example/actions/workflows/deploy.yml)


<b>Para acessar a versão em Português do Brasil, basta clicar [aqui](/docs/README-pt_BR.md)! :brazil:</b>

<p>This project has with main objective show a simple architecture for api tests using SuperTest framework.</p>

## Technologies and tools used:

- [ServeRest](https://github.com/ServeRest/ServeRest/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Supertest](https://github.com/visionmedia/supertest#readme)
- [chai](https://github.com/chaijs/chai)
- [joi](https://github.com/sideway/joi)
- [faker.js](https://github.com/marak/Faker.js/)
- [mocha](https://github.com/mochajs/mocha)
- [mochawesome](https://github.com/adamgruber/mochawesome)

## File Structure

📦 supertest-arch-example  
 ┣ 📂 .github  
 ┃ ┗ 📂 workflows  
 ┃ ┃ ┗ 📜 deploy.yml  
 ┣ 📂 env  
 ┃ ┗ 📜 production.env.json  
 ┣ 📂 report  
 ┃ ┣ 📂 assets  
 ┃ ┗ 📜 index.html  
 ┣ 📂 test  
 ┃ ┣ 📂 login  
 ┃ ┃ ┣ 📂 payloads  
 ┃ ┃ ┃ ┗ 📜 login.payload.js  
 ┃ ┃ ┣ 📂 requests  
 ┃ ┃ ┃ ┗ 📜 login.request.js  
 ┃ ┃ ┗ 📂 tests  
 ┃ ┃ ┃ ┣ 📜 login.post.test.js  
 ┃ ┣ 📂 produtos  
 ┃ ┗ 📂 usuarios  
 ┃ ┃ ┣ 📂 schemas  
 ┃ ┃ ┃ ┣ 📜 usuario.schema.js  
 ┃ ┃ ┃ ┗ 📜 usuarios.schema.js  
 ┃ ┃ ┣ 📂 payloads  
 ┃ ┃ ┃ ┗ 📜 usuario.payload.js  
 ┃ ┃ ┣ 📂 requests  
 ┃ ┃ ┃ ┗ 📜 usuarios.request.js  
 ┃ ┃ ┗ 📂 tests   
 ┃ ┃ ┃ ┣ 📜 usuarios.delete.test.js  
 ┃ ┃ ┃ ┣ 📜 usuarios.get.test.js  
 ┃ ┃ ┃ ┗ 📜 usuarios.post.test.js  
 ┣ 📂 utils  
 ┃ ┗ 📜 global.js  
 ┣ 📜 .gitignore  
 ┣ 📜 .mocharc.js  
 ┣ 📜 README.md  
 ┣ 📜 package-lock.json  
 ┗ 📜 package.json  
  
 ## Execution Examples

- ### By npm:
  - To run all tests suite: 
    - ```npm run test:prod```
  - Only json schema tests suite:
    - ```npm run test:prod:schema```
- ### By the command line:
  - To run all tests suite:
    - ```NODE_ENV=production mocha```
  - Only json schema tests suite:
    - ```NODE_ENV=production mocha --grep=schema```


## Execution report

Using the mochawesome and git workflows:   
  - Job:
    - https://github.com/maximilianoalves/supertest-arch-example/actions/workflows/deploy.yml
  - Report: 
    - https://maximilianoalves.github.io/supertest-arch-example/ 

## Doubts or improvements !? contact me: 

[![Twitter](https://badgen.net/badge/Twitter/%40max_dacruz?icon=twitter)](https://twitter.com/max_dacruz) [![Medium](https://badgen.net/badge/Medium/%40maximilianoalves?icon=medium)](https://medium.com/@maximilianoalves) [![Linkedin](https://badgen.net/badge/Linkedin/maximilianodacruz?icon=linkedin)](https://www.linkedin.com/in/maximilianodacruz/) [![Instagram](https://badgen.net/badge/Instagram/max_dacruz?icon=instagram)](https://www.instagram.com/max_dacruz/) [![Facebook](https://badgen.net/badge/Facebook/maximilianoalvesdacruz?icon=facebook)](https://www.facebook.com/maximilianoalvesdacruz)
 


