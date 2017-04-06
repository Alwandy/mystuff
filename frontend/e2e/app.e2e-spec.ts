import { UKSFPage } from './app.po';

describe('uksf App', () => {
  let page: UKSFPage;

  beforeEach(() => {
    page = new UKSFPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
