import { Ang2PowerLevelsPage } from './app.po';

describe('ang2-power-levels App', () => {
  let page: Ang2PowerLevelsPage;

  beforeEach(() => {
    page = new Ang2PowerLevelsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
