import { Angular4DemoPage } from './app.po';

describe('angular4-demo App', () => {
  let page: Angular4DemoPage;

  beforeEach(() => {
    page = new Angular4DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
