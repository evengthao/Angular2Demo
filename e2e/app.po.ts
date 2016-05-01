export class Angular2demoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2demo-app p')).getText();
  }
}
