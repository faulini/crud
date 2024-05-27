# Olá, meu nome é Lucas !!

Você esta prestes a ver um CRUD (Create, Read, Update e Delete), é um aplicativo WEB básico, que vai permitir ao usuário cadastras pessoas de uma equipe, com alguns dados básicos, como nome, e-mail e telefone, e tambem ao fim editar os cadastros e tambem deletar algum destes.

# Ferramentas Utilizadas

Html, Css, JavaScript, Node e React e o banco de dados em MYSQL

# Conexão com o Banco de Dados MySQL

Algumas configurações abaixo que devem estar no seu banco de dados, e o banco de dados, obrigatoriamente deve ser "crud":

host: "localhost",
user: "root",
password: "admin",
database: "crud",

A tabela, deve ser com o nome de "users", e as colunas "id, name, email e phone".

# Instruções

Para executar o projeto, execute os comandos abaixo em cada diretório no terminal do VSCode:

Ponto importante: execute primeiro o backend e depois o frontend, nesta sequência para os dados do banco de dados aparecer corretamente na pagina inicial do localhost.

crud/backend -> yarn start
crud/frontend -> yarn start

O frontend iniciará como base no endereço http://localhost:3000/, caso algum outro programa no seu computador utilizar essa porta, o proprio terminal do VSCode identificará e fará a pergunta uma pergunta se deseja iniciar nesta porta, caso sim, basta apertar "y" e o sistema iniciará em outra por "3001" por exemplo.

# Versões Utilizadas

- Frontend
    axios: 1.7.2
    react: 18.3.1

- Backend
    cors: 2.8.5
    express: 4.19.2
    mysql: 2.18.1
    nodemon: 3.1.0

## Atualizações Futuras

Gostaria de deixar aqui registrado, algumas atualizações que gostaria de realizar no projeto, a fim de registrar minhas idéias.

1 - Realizar "check" no banco de dados para cadastros duplicados no e-mail e telefone, informando o usuario na tela e impossibilitando o cadastro;
2 - Organizar a tabela com um limite de linhas e colocando um "scroll" lateral e na base, tornando mais responsivo;
3 - Colocar novos campos para o cadastro, como CEP, endereço, CPF, RG entre outros campos;
4 - Integrar com APIs ja existentes, e colocar em novos campos como CEP, e coletar o endereço altomaticamente;
5 - Deixar o site mais responsivo quando ao uso em determinadas resoluções;
6 - implementar o "Dark-mode" automatico com o sistema do usuário, ou utilizar o "check-box" para ativar e desativar;
7 - Refatorar os componentes para serem mais reutilizáveis e modulares;
8 - Usar bibliotecas como Formik e Yup para tratar com formulários e validação de dados;
9 - Adicionar comentários e documentações no código para facilitar a manutenção e entendimento depois;
10- Adicionar mais paginas e mais funcionalidades como por exemplo: Login, Logout, Paginas expecificas e ações especificas para cada usuário (Ex: Usuário "X" somente visualização dos resultados, Usuário "Y" somente edição, e usuário "Z" somente exclusão, e por fim usuário "A" realizando todas as opções)
