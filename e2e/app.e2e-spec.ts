import { SparklewaterPage } from './app.po';

describe('sparklewater App', () => {
  let page: SparklewaterPage;

  beforeEach(() => {
    page = new SparklewaterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
