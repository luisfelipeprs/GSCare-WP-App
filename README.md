# GSCare WhatsApp API

## Descrição do Projeto

O **GSCare WhatsApp API** é um projeto desenvolvido para facilitar o envio de mensagens automatizadas via WhatsApp. Utilizando a API Business do WhatsApp, o sistema permite o envio de mensagens de texto, templates e mídias para números de telefone específicos, proporcionando uma interface para integração em sistemas de atendimento ao cliente e marketing.

### Principais Funcionalidades

- Envio de mensagens de texto personalizadas.
- Envio de mensagens de template predefinidas.
- Upload de mídias (imagens, vídeos, etc.) para envio em conversas.
- Estrutura organizada com base nos princípios do Domain-Driven Design (DDD), facilitando a manutenção e escalabilidade do código.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **Express**: Framework web para Node.js, utilizado para construir a API.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, melhorando a qualidade do código.


## Como Rodar o Projeto

### Pré-requisitos

Antes de executar o projeto, verifique se você tem os seguintes itens instalados:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

### Passos

1. **Clone o repositório:**
  ```bash
  git clone https://github.com/luisfelipeprs/GSCare-WP-App.git
  cd GSCare-WP-App
  ```
2. **Instale as dependências:**
  ```bash
  npm install
  ```
3. **Configure as variáveis de ambiente:**
Crie um arquivo .env na raiz do projeto e adicione suas configurações:
```bash
WHATSAPP_TOKEN=seu_token_aqui
PHONE_NUMBER_ID = id_numero // você precisa pegar ele no painel da Meta em https://developers.facebook.com/apps/seu-id-app/whatsapp-business/wa-dev-console/?business_id=seu-business-id
PORT=3000
```
4. **Inicie o servidor:**
```bash
 npm run dev
```
O servidor estará rodando em http://localhost:3000.

### Testando o Endpoint
Você pode testar o endpoint /send-template-message usando ferramentas como Postman ou cURL. Para enviar uma mensagem de template, faça uma requisição POST com o corpo no seguinte formato:
```bash
{
  "phoneNumber": "5511999999999",
  "templateName": "hello_world"
}

```

## Estrutura do Projeto (Padrão DDD)

```
/project-root
│
├── src
│   ├── domain                  
│   │   ├── message             # Subdomínio para mensagens
│   │   │   ├── IMessage.ts     # Interface para a entidade de mensagem
│   │   │   └── Message.ts      # Entidade Message (implementação)
│   │   ├── services            
│   │   │   └── MessageService.ts  # Serviço de domínio para a lógica de mensagens
│   │   └── interfaces          
│   │       └── IMessageRepository.ts  # Interface para o repositório de mensagens
│   │
│   ├── application             
│   │   ├── use-cases           
│   │   │   ├── SendMessage.ts         # Caso de uso para envio de mensagens
│   │   │   ├── SendTemplateMessage.ts # Caso de uso para envio de templates
│   │   │   └── UploadMedia.ts         # Caso de uso para upload de mídias
│   │   └── dtos                
│   │       └── MessageDTO.ts         # DTO para mensagens
│   │
│   ├── infrastructure          
│   │   ├── api                
│   │   │   └── whatsappApi.ts         # Cliente para a API do WhatsApp
│   │   ├── config              
│   │   │   └── env.ts                # Configuração de variáveis de ambiente
│   │   └── repositories        
│   │       └── MessageRepositoryImpl.ts # Implementação do repositório
│   │
│   └── interface              
│       ├── http                
│       │   ├── controllers
│       │   │   └── MessageController.ts # Controlador de mensagens
│       │   └── routes.ts                 # Definição de rotas
│       └── webhook             
│           └── webhookHandler.ts         # Handler para eventos de entrada (webhook)
│
└── tsconfig.json                # Configurações do TypeScript
└── server.ts                    # Configuração do servidor principal
└── package.json
```