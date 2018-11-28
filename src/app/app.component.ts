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
      demoLink: '#',
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
  ];
}
