import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bamboo-demo';
  products = [
    {
      title: 'Alert Plus',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'https://bamboosolutions.com/wp-content/uploads/2018/06/Alert-Plus-GreenBG.svg',
      demoLink: 'https:www.google.com',
      docLink: '#',
      type: 'cloud'
    },
    {
      title: 'Traffic',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'https://bamboosolutions.com/wp-content/uploads/2018/06/Traffic-CP-Blue-BG.svg',
      demoLink: 'https:www.google.com',
      docLink: '#',
      type: 'cloud'
    },
    {
      title: 'News Plus',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'https://bamboosolutions.com/wp-content/uploads/2018/06/News-CP-Blue-BG.svg',
      demoLink: '#',
      docLink: '#',
      type: 'cloud'
    },
    {
      title: 'Calendar Plus',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'https://bamboosolutions.com/wp-content/uploads/2018/06/Calendar-Plus-CP-Blue-BG.svg',
      demoLink: '#',
      docLink: '#',
      type: 'cloud'
    },
    {
      title: 'List Rollup',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'https://bamboosolutions.com/wp-content/uploads/2018/06/List-Rollup-CP-Blue-BG.svg',
      demoLink: '#',
      docLink: '#',
      type: 'server'
    },
    {
      title: 'Calendar Plus',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'https://bamboosolutions.com/wp-content/uploads/2018/06/Calendar-Plus-CP-Blue-BG.svg',
      demoLink: '#',
      docLink: '#',
      type: 'server'
    },
    {
      title: 'Alert Plus',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'https://bamboosolutions.com/wp-content/uploads/2018/06/Alert-Plus-GreenBG.svg',
      demoLink: '#',
      docLink: '#',
      type: 'server'
    },
    {
      title: 'Chart Plus',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'https://bamboosolutions.com/wp-content/uploads/2018/06/Chart-Plus-CP-Blue-BG.svg',
      demoLink: '#',
      docLink: '#',
      type: 'server'
    },
    {
      title: 'Knowledge Base',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'https://bamboosolutions.com/wp-content/uploads/2018/06/Knowledge-Base-OrangeBG.svg',
      demoLink: '#',
      docLink: '#',
      type: 'suite'
    },
    {
      title: 'PMC Suite',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'https://bamboosolutions.com/wp-content/uploads/2018/06/Project-Management-Central-OrangeBG.svg',
      demoLink: '#',
      docLink: '#',
      type: 'suite'
    },
    {
      title: 'Discusion Board',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'https://bamboosolutions.com/wp-content/uploads/2018/06/Discussion-Board-Orange-BG.svg',
      demoLink: '#',
      docLink: '#',
      type: 'suite'
    },
    {
      title: 'Workflow Conductor',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'https://bamboosolutions.com/wp-content/uploads/2018/06/Workflow-Conductor-OrangeBG.svg',
      demoLink: '#',
      docLink: '#',
      type: 'suite'
    },
  ];
}
