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
      iconLink: 'http://www.fillmurray.com/300/200',
      demoLink: 'https:www.google.com',
      docLink: '#',
      type: 'cloud'
    },
    {
      title: 'Traffic',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'http://www.fillmurray.com/300/200',
      demoLink: 'https:www.google.com',
      docLink: '#',
      type: 'cloud'
    },
    {
      title: 'News Plus',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'http://www.fillmurray.com/300/200',
      demoLink: '#',
      docLink: '#',
      type: 'cloud'
    },
    {
      title: 'Calendar Plus',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'http://www.fillmurray.com/300/200',
      demoLink: '#',
      docLink: '#',
      type: 'cloud'
    },
    {
      title: 'List Rollup',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'http://www.fillmurray.com/300/200',
      demoLink: '#',
      docLink: '#',
      type: 'server'
    },
    {
      title: 'Calendar Plus',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'http://www.fillmurray.com/300/200',
      demoLink: '#',
      docLink: '#',
      type: 'server'
    },
    {
      title: 'Alert Plus',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'http://www.fillmurray.com/300/200',
      demoLink: '#',
      docLink: '#',
      type: 'server'
    },
    {
      title: 'Chart Plus',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'http://www.fillmurray.com/300/200',
      demoLink: '#',
      docLink: '#',
      type: 'server'
    },
    {
      title: 'Knowledge Base',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'http://www.fillmurray.com/300/200',
      demoLink: '#',
      docLink: '#',
      type: 'suite'
    },
    {
      title: 'PMC Suite',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'http://www.fillmurray.com/300/200',
      demoLink: '#',
      docLink: '#',
      type: 'suite'
    },
    {
      title: 'Discusion Board',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'http://www.fillmurray.com/300/200',
      demoLink: '#',
      docLink: '#',
      type: 'suite'
    },
    {
      title: 'Workflow Conductor',
      description: 'Automatically send cutomized conditional email notifs and reminders in sharepoint.',
      iconLink: 'http://www.fillmurray.com/300/200',
      demoLink: '#',
      docLink: '#',
      type: 'suite'
    },
  ];
}
