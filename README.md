# UITEC - Desafio

### Descrição do projeto

Desenvolver um aplicativo de CRUD (Create, Read, Update, Delete) de produtos, utilizando uma arquitetura desacoplada entre o frontend e o backend. O frontend será desenvolvido em Angular, utilizando TypeScript como linguagem de programação, enquanto o backend será desenvolvido em PHP Laravel. O banco de dados utilizado será o PostgreSQL.

### Execução

#### Backend

Navegue para a pasta backend e instale as dependências:

`cd backend`

`composer update`

Você pode inicializar a aplicação utilizando o comando sail:

`./vendor/bin/sail up -d`

Para migrar e popular as tabelas do banco de dados:

`./vendor/bin/sail php artisan migrate:refresh --seed`

O acesso é pelo endereço: http://localhost:3001.

### Frontend

Navegue para a pasta frontend:

`cd frontend`

Para instalar as dependências:

`npm install`

Você pode inicializar a aplicação com o comando:

`ng serve`

O acesso é pelo endereço: http://localhost:4200.
