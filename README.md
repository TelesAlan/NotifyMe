
# NotifyMe

Este é um projeto simples que demonstra como exibir notificações no navegador usando JavaScript. As notificações são uma ótima maneira de informar os usuários sobre eventos importantes ou atualizações em seu aplicativo da web.

## Funcionalidades

- Exibe uma notificação no navegador quando o botão "Mostrar Notificação" é clicado.
- A notificação exibe um título, um corpo e um ícone personalizado.

## Pré-requisitos

Certifique-se de ter os seguintes requisitos antes de executar o projeto:

- Um navegador web moderno que suporte a API de notificações.
- Conhecimentos básicos de HTML, CSS e JavaScript.

## Como usar

Siga as etapas abaixo para executar o projeto em seu próprio ambiente:

1. Clone este repositório em sua máquina local:
`git clone https://github.com/TelesAlan/NotifyMe.git`
2. Navegue até o diretório do projeto:
`cd NotifyMe`
2. Abra o arquivo `index.html` em seu navegador.

5. Clique no botão "Mostrar Notificação" para exibir uma notificação no navegador.

## Personalização

Você pode personalizar as notificações de acordo com suas necessidades. Aqui estão algumas maneiras de fazer isso:

- Altere o título e o corpo da notificação no arquivo `index.html`:

	    <script>
			document.addEventListener("DOMContentLoaded", () => {
				notifyMe(`New notification`, {
					body:  `You have a new message!`,
					icon:  `https://cdn-icons-png.flaticon.com/512/4980/4980801.png`
				});
			});
		</script>

- Substitua o ícone padrão por um ícone personalizado. Certifique-se de fornecer o caminho correto para o arquivo de ícone na propriedade **icon** das opções da notificação.
## Suporte
Se você tiver algum problema ou dúvida, sinta-se à vontade para abrir uma **issue** neste repositório.

## Contribuição
Contribuições são bem-vindas! Se você deseja melhorar este projeto, siga estas etapas:

1. Faça um fork deste repositório.
2. Crie uma nova branch: "**git checkout -b minha-branch**".
3. Faça suas modificações e commit: "**git commit -m 'Minhas alterações'**".
4. Envie para o repositório remoto: "**git push origin minha-branch**".
5. Abra uma **pull request** explicando suas alterações.
## Licença
Este projeto está licenciado sob a MIT License. Sinta-se livre para usá-lo da maneira que preferir.
