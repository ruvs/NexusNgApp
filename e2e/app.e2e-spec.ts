import { NexusNgAppPage } from './app.po';

describe('nexus-ng-app App', function() {
  let page: NexusNgAppPage;

  beforeEach(() => {
    page = new NexusNgAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
