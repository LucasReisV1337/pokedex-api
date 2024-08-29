# Documentação do Backend

Este backend é desenvolvido com NestJS e fornece uma API RESTful para obter detalhes sobre Pokémon. A seguir, está uma visão geral dos principais componentes e funcionalidades do sistema.
Por padrão, a branch mais estávael para testes e a "master".

## Visão Geral

O backend é responsável por oferecer uma interface para consultar informações sobre Pokémon utilizando a PokéAPI. Ele inclui um controlador, um serviço, e uma configuração de módulo para gerenciar a comunicação e processamento dos dados.

## Componentes Principais

### 1. Controlador

O controlador, `AppController`, gerencia as requisições HTTP para o endpoint `/pokemon/:name`. Ele recebe o nome de um Pokémon como parâmetro e retorna os detalhes do Pokémon ou uma mensagem de erro caso ocorra um problema durante a busca. Ele utiliza o serviço para obter os dados necessários e lida com exceções, garantindo que erros sejam tratados de forma adequada e informativa.

### 2. Serviço

O serviço, `AppService`, é responsável por fazer a requisição para a PokéAPI e processar a resposta. Ele realiza a busca dos detalhes do Pokémon, que incluem habilidades, tipos, estatísticas e o sprite do Pokémon. O serviço encapsula a lógica de comunicação com a API externa e a transformação dos dados para o formato necessário pela aplicação.

### 3. Módulo

O módulo, `AppModule`, configura o aplicativo NestJS, importando o `HttpModule` para permitir requisições HTTP e definindo o controlador e o serviço como parte da aplicação. Ele é o ponto de entrada para a configuração e inicialização dos componentes do backend.

### 4. Inicialização

A aplicação é iniciada e configurada para aceitar requisições CORS, permitindo a comunicação com um frontend hospedado em `http://localhost:3001`. O backend escuta na porta 3000.

## Como Utilizar

1. **Executar o Backend**: Inicie o backend com o comando padrão do NestJS. Certifique-se de que todas as dependências estão instaladas.
2. **Fazer Requisições**: Utilize o endpoint `/pokemon/:name` para buscar informações sobre um Pokémon específico. Substitua `:name` pelo nome do Pokémon desejado. O backend retornará os detalhes ou uma mensagem de erro em caso de falha.

## Contribuição

Contribuições são bem-vindas! Para contribuir, você pode abrir issues para relatar problemas ou melhorias e submeter pull requests para propor alterações. Siga as diretrizes do repositório para garantir que as contribuições sejam aceitas e integradas de forma eficiente.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE). Veja o arquivo LICENSE para mais detalhes.
