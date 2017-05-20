import { CepcozumWebAppPage } from './app.po';

describe('cepcozum-web-app App', () => {
  let page: CepcozumWebAppPage;

  beforeEach(() => {
    page = new CepcozumWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
