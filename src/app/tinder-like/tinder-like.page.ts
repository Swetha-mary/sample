import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tinder-like',
  templateUrl: './tinder-like.page.html',
  styleUrls: ['./tinder-like.page.scss'],
})
export class TinderLikePage implements OnInit {
  cards: Array<{
    img: string;
    title: string;
    description: string;
  }>;
  constructor() {}

  ngOnInit() {
    this.loadTinderCards();
  }

  loadTinderCards() {
    this.cards = [
      {
        img: 'assets/images/profile.jpg',
        title: 'Priyanka',
        description: 'Tamil,Nair,MBBS,Doctor,Chennai,Tamil Nadu,India.',
      },
      {
        img: 'assets/images/profiles.jpg',
        title: 'Priyanka',
        description: 'Tamil,Nair,MBBS,Doctor,Chennai,Tamil Nadu,India.',
      },
      {
        img: 'assets/images/profiles-detail.jpg',
        title: 'Priyanka',
        description: 'Tamil,Nair,MBBS,Doctor,Chennai,Tamil Nadu,India.',
      },
      {
        img: 'assets/images/profile.jpg',
        title: 'Priyanka',
        description: 'Tamil,Nair,MBBS,Doctor,Chennai,Tamil Nadu,India.',
      },
      {
        img: 'assets/images/profiles.jpg',
        title: 'Priyanka',
        description: 'Tamil,Nair,MBBS,Doctor,Chennai,Tamil Nadu,India.',
      },
      {
        img: 'assets/images/profiles-detail.jpg',
        title: 'Priyanka',
        description: 'Tamil,Nair,MBBS,Doctor,Chennai,Tamil Nadu,India.',
      }
    ];
  }
}
