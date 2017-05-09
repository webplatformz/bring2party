import { AngularCliPage } from './app.po';

describe('bring2party App', () => {
  let page: AngularCliPage;

  beforeEach(() => {
    page = new AngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
