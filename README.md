<h1 align="center">Exemplo de arquitetura utilizando SuperTest</h1>

<p>Este projeto tem por objetivo apresentar uma arquitetura de testes de API utilizando SuperTest.</p>

## Tecnologias utilizadas

- [ServeRest](https://github.com/ServeRest/ServeRest/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Supertest](https://github.com/visionmedia/supertest#readme)
- [chai](https://github.com/chaijs/chai)
- [joi](https://github.com/sideway/joi)
- [faker.js](https://github.com/marak/Faker.js/)
- [mocha](https://github.com/mochajs/mocha)
- [mochawesome](https://github.com/adamgruber/mochawesome)

## Estrutura de arquivos.

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
 ┃ ┃ ┣ 📂 contracts 
 ┃ ┃ ┃ ┣ 📜 usuario.contract.js   
 ┃ ┃ ┃ ┗ 📜 usuarios.contract.js  
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
  
 ## Exemplos de execução

- ### Por npm:
  - Todos os testes: 
    - ```npm run test:prod```
  - Somente a suite de testes de contratos:
    - ```npm run test:prod:contract```
- ### Por linha de comando:
  - Todos os testes:
    - ```NODE_ENV=production mocha```
  - Somente a suite de testes de contratos:
    - ```NODE_ENV=production mocha --grep=contract```


## Relatório de execução

Utilizando o mochawesome e git workflows:   
  - Job:
    - https://github.com/maximilianoalves/supertest-arch-example/actions/workflows/deploy.yml
  - Relatório: 
    - https://maximilianoalves.github.io/supertest-arch-example/ 

## Melhorias, criticas ou dúvidas: 

Não hesite em abrir uma issue ou entrar em contato comigo: 

[![Twitter](https://badgen.net/badge/Twitter/%40max_dacruz?icon=twitter)](https://twitter.com/max_dacruz)
[![Medium](https://badgen.net/badge/Medium/%40maximilianoalves?icon=medium)](https://medium.com/@maximilianoalves)
[![Linkedin](https://badgen.net/badge/Linkedin/maximilianodacruz?icon=linkedin)](https://www.linkedin.com/in/maximilianodacruz/)
[![Instagram](https://badgen.net/badge/Instagram/max_dacruz?icon=instagram)](https://www.instagram.com/max_dacruz/)
[![Facebook](https://badgen.net/badge/Facebook/maximilianoalvesdacruz?icon=facebook)](https://www.facebook.com/maximilianoalvesdacruz)
 


