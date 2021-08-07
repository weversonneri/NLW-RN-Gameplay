<h1 align="center">
  <img alt="Gameplay" height="80" style="border-radius:20%" title="Gameplay" src=".github/logo.png" />
</h1>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias-utilizadas">Tecnologias</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias-utilizadas">Funcionalidades</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<h1 align="center">
  <img alt="Preview" src="https://res.cloudinary.com/weversonneri/image/upload/v1628294144/gameplay-demo.gif" width="220" height="400" />
</h1>

## 📃 Sobre o projeto

O GamePlay é um aplicativo que ajuda a organizar a jogatina com os amigos. Possui integração com o Discord para autenticação e disponibilização de informações dos grupos de jogatina. 
>Desenvolvido durante a NLW#6 da [Rocketseat](https://rocketseat.com.br/) na trilha React Native.

## 🔖 Layout
O layout do projeto está disponivel através do link abaixo:
  * [Layout Figma](https://www.figma.com/file/0kv33XYjvOgvKGKHBaiR07/GamePlay-NLW-Together?node-id=58913%3A83)
  

## ✨ Tecnologias utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [OAuth2 Discord](https://discord.com/developers/docs/topics/oauth2)
- [Axios](https://axios-http.com/)

## ⚙ Funcionalidades

- Autenticação Social OAuth2 com Discord.
- Preenchimento dos dados do perfil com dados do Discord
- Listagem dos servidores do Discord;
- Agendamento de partidas;
- Filtragem de agendamentos por categoria;
- Compartilhamento de convite para o servidor do Discord;
- Botão para redirecionamento para o servidor;
- Gravação de dados do perfil e agendamento no AsyncStorage.

#### Extras
- Extras adicionados após o NLW
  - Validações do formulário
  - Modal de função de logout seguindo o design do sistema
  - Adição de efeito de Swipe no componente de Appointment da Home 
  - Função de remover agendamento 

## 🚀 Como usar
``` bash
  # Clonar o projeto:
  $ git clone https://github.com/weversonneri/NLW-RN-Gameplay.git

  # Entrar no diretório:
  $ cd NLW-RN-Gameplay

  # Instalar as dependências:
  $ yarn

  # Rodar a aplicação:
  $ expo start
```
