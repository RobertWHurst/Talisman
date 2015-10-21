

var sidebarApp = new talisman.Application({
  template: '#sidebar-template',
});

var contentApp = new talisman.Application({
  template: '#content-template',
});

var coreApp = new talisman.Application({
  template: '#core-template',
  el      : '#core',
  subApplications: {
    'sidebar': sidebarApp,
    'content': contentApp
  },
  regions: {
    '#sidebar-region': 'subApplications.sidebar.el'
    '#content-region': 'subApplications.content.el'
  }
});


coreApp.start();
