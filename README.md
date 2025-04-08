<p align="center">
  <img src="https://github.com/zeraiden56/manual-progressao/assets/logo-dpemt" alt="Logo DPE-MT" height="80">
</p>

<h1 align="center">📘 Manual de Progressão Funcional - DPE/MT</h1>

<p align="center">
  Este projeto foi desenvolvido com foco no <strong>Grupo de Estudos em Linguagem Simples</strong> da Defensoria Pública do Estado de Mato Grosso (DPE-MT).<br/>
  Uma aplicação 100% desenvolvida em <strong>Google Apps Script</strong>, com HTML, CSS e JS puro, para facilitar a jornada de servidores públicos na progressão funcional.
</p>

---

## ✨ Sobre o Projeto

O **Manual de Progressão Funcional** é uma aplicação web leve, responsiva e acessível, criada para esclarecer e guiar servidores da DPE-MT no processo de progressão funcional, utilizando linguagem simples, recursos visuais e automações.

O site apresenta:

- Critérios e requisitos de progressão vertical e horizontal
- Tabelas de salários atualizadas por classe e nível
- Um carrossel ilustrado com **29 passos visuais**
- Modo noturno, botão de cópia automática e busca inteligente
- Acesso rápido ao SEI via botão ilustrado

---

## 🛠️ Tecnologias Utilizadas

- Google **Apps Script** (backend e controle de rotas)
- HTML + CSS + JavaScript (frontend leve e funcional)
- Google Sheets como base de dados (se necessário)
- GitHub como versionamento e hospedagem de código

---

## 🚀 Como funciona o Apps Script Web App?

> O Apps Script permite criar aplicações web que rodam no Google Cloud e podem ser acessadas via URL pública.

### 1. Estrutura de Arquivos

- `controller.gs`: controla as rotas e lógica de servidor (tipo um "router")
- `folder.html`: arquivo HTML completo com CSS e JS embutido
- `appsscript.json`: configurações de deploy e permissões

### 2. Deploy do Web App

1. Vá em **Extensões > Apps Script**
2. Crie um novo projeto ou edite o existente
3. No menu superior, clique em **Implantar > Implantar como aplicativo da web**
4. Selecione:
   - Executar como: `Usuário que está implantando`
   - Quem pode acessar: `Qualquer pessoa, mesmo anônima`
5. Copie o link gerado — esse é o seu site 🚀

---

## 💡 Como editar?

Você pode editar o conteúdo diretamente no `folder.html`, incluindo novas seções, imagens ou reformular textos. O CSS está embutido no `<style>` para facilitar o controle visual.

Para editar imagens do carrossel, substitua as URLs no HTML por imagens novas do seu servidor ou Google Drive (convertido para link visual direto).

---

## 🧩 Como foi feito o site?

O site foi criado com:

- **Design simples e funcional** com HTML5 e CSS3 moderno
- Um **carrossel em JavaScript puro**, controlado por botões
- Compatibilidade com dispositivos móveis
- Modo escuro para conforto visual
- Estrutura modular: uma página para tudo (SPA-like)

---

## 📎 Exemplo de uso no Apps Script

```javascript
function doGet(request) {
  return HtmlService.createHtmlOutputFromFile("folder")
    .setTitle("Manual de Progressão Funcional")
    .setFaviconUrl("https://www.defensoria.mt.def.br/dpmt/assets/images/favicon.png");
}
```

---

## 📷 Imagens hospedadas

As imagens do passo-a-passo estão hospedadas em:

```
https://blucaju.com.br/imagens-defensoria/progressaofuncional/
```

Você pode subir novas ou modificar conforme necessário.

---

## 🧠 Idealizado por

Este projeto foi idealizado por Arthur Costa Dias, no âmbito do Grupo de Estudos de Linguagem Simples, com apoio da Diretoria Jurídica e da Diretoria de Gestão de Pessoas da DPE-MT.

---

## 📄 Licença

Projeto público para uso institucional, educacional e governamental. Consulte os responsáveis antes de reproduzir fora do contexto da DPE-MT.

---
<p align="center"><strong>Feito com 💚 para facilitar o serviço público.</strong></p>
