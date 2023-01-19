import { Component, ViewChild } from '@angular/core';
// import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { IonInfiniteScroll, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  limitDefault: number = 10;
  skipDefault: number = 10;
  products: any = [];
  constructor(private loading: LoadingController, private http: HttpClient) {

  }

  async ngOnInit() {
    const loading = await this.loading.create();
    await loading.present();
    this.getData(this.limitDefault, this.skipDefault).then((res: any) => {
      console.log(res, 'isi res')
      this.products = res.products;
      loading.dismiss();
    })
  }

  getData(limit: any, skip: any) {
    return new Promise((resolve, reject) => {
      this.http.get('https://dummyjson.com/products?limit=' + limit + '&skip=' + skip, {}).subscribe(res => {
        resolve(res)
      }, err => {
        reject(err);
      })
    })
  }

  loadData(event: any) {
    setTimeout(() => {
      this.skipDefault += 10;
      event.target.complete();
      console.log(this.skipDefault, 'isi skip')
      this.getData(this.limitDefault, this.skipDefault).then((res: any) => {
        console.log(res, 'isi res')
        this.products.push(...res.products);
        // loading.dismiss();\
        console.log(this.products,'isiii')
      })
      if (this.skipDefault === this.products.length) {
        
        event.target.disabled = true;
      }
    }, 300);
  }

}
