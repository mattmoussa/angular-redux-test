import { AngularReduxTestPage } from './app.po';

describe('angular-redux-test App', function() {
  let page: AngularReduxTestPage;

  beforeEach(() => {
    page = new AngularReduxTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
