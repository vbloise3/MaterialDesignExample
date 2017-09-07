import { MaterialDesignExamplePage } from './app.po';

describe('material-design-example App', function() {
  let page: MaterialDesignExamplePage;

  beforeEach(() => {
    page = new MaterialDesignExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
