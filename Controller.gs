function doGet(e) {
  const page = 'folder';
  const template = HtmlService.createTemplateFromFile(page);
  template.title = 'Manual de Progressão Funcional';

  return template.evaluate()
    .setTitle(template.title)
    .setFaviconUrl('https://www.defensoria.mt.def.br/dpmt/assets/images/favicon.png');
}
