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

๐ฆ supertest-arch-example  
 โฃ ๐ .github  
 โ โ ๐ workflows  
 โ โ โ ๐ deploy.yml  
 โฃ ๐ env  
 โ โ ๐ production.env.json  
 โฃ ๐ report  
 โ โฃ ๐ assets  
 โ โ ๐ index.html  
 โฃ ๐ test  
 โ โฃ ๐ login  
 โ โ โฃ ๐ payloads  
 โ โ โ โ ๐ login.payload.js  
 โ โ โฃ ๐ requests  
 โ โ โ โ ๐ login.request.js  
 โ โ โ ๐ tests  
 โ โ โ โฃ ๐ login.post.test.js  
 โ โฃ ๐ produtos  
 โ โ ๐ usuarios  
 โ โ โฃ ๐ schemas  
 โ โ โ โฃ ๐ usuario.schema.js  
 โ โ โ โ ๐ usuarios.schema.js  
 โ โ โฃ ๐ payloads  
 โ โ โ โ ๐ usuario.payload.js  
 โ โ โฃ ๐ requests  
 โ โ โ โ ๐ usuarios.request.js  
 โ โ โ ๐ tests   
 โ โ โ โฃ ๐ usuarios.delete.test.js  
 โ โ โ โฃ ๐ usuarios.get.test.js  
 โ โ โ โ ๐ usuarios.post.test.js  
 โฃ ๐ utils  
 โ โ ๐ global.js  
 โฃ ๐ .gitignore  
 โฃ ๐ .mocharc.js  
 โฃ ๐ README.md  
 โฃ ๐ package-lock.json  
 โ ๐ package.json  
  
 ## Exemplos de execuรงรฃo

- ### Por npm:
  - Todos os testes: 
    - ```npm run test:prod```
  - Somente a suite de testes de schema json:
    - ```npm run test:prod:schema```
- ### Por linha de comando:
  - Todos os testes:
    - ```NODE_ENV=production mocha```
  - Somente a suite de testes de schema json:
    - ```NODE_ENV=production mocha --grep=schema```


## Relatรณrio de execuรงรฃo

Utilizando o mochawesome e git workflows:   
  - Job:
    - https://github.com/maximilianoalves/supertest-arch-example/actions/workflows/deploy.yml
  - Relatรณrio: 
    - https://maximilianoalves.github.io/supertest-arch-example/ 

## Melhorias, criticas ou dรบvidas: 

Nรฃo hesite em abrir uma issue ou entrar em contato comigo: 

[![Twitter](https://badgen.net/badge/Twitter/%40max_dacruz?icon=twitter)](https://twitter.com/max_dacruz)
[![Medium](https://badgen.net/badge/Medium/%40maximilianoalves?icon=medium)](https://medium.com/@maximilianoalves)
[![Linkedin](https://badgen.net/badge/Linkedin/maximilianodacruz?icon=linkedin)](https://www.linkedin.com/in/maximilianodacruz/)
[![Instagram](https://badgen.net/badge/Instagram/max_dacruz?icon=instagram)](https://www.instagram.com/max_dacruz/)
[![Facebook](https://badgen.net/badge/Facebook/maximilianoalvesdacruz?icon=facebook)](https://www.facebook.com/maximilianoalvesdacruz)
 


