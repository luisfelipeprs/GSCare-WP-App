# Integrate Whatsapp API with Node.js

Integrate Whatsapp API with Node.js. Using Axios.

### Version: 1.0.0

### Usage

```sh
$ npm install
```

```sh
$ node index
```

### DDD
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