import { Component, OnInit } from '@angular/core';
import { ProfileDetail } from 'src/app/shared/sample';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.page.html',
  styleUrls: ['./profile-detail.page.scss'],
})
export class ProfileDetailPage implements OnInit {
  public profileDetail: Array<{
    image: string;
    name: string;
    age: string;
    address: string;
  }>;
  public isInterested: boolean;
  public notInterested: boolean;
  public isShortlisted: boolean;

  constructor(public toastController: ToastController) {}

  ngOnInit() {
    this.profileDetail = ProfileDetail;
  }
  public onClickInterested() {
    this.isInterested = !this.isInterested;
    this.presentToast('Interested');
  }
  public onClickNotInterested() {
    this.notInterested = !this.notInterested;
    this.presentToast('Not Interested');
  }
  public onClickShortList() {
    this.isShortlisted = !this.isShortlisted;
    this.presentToast('ShortListed');
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }
}
