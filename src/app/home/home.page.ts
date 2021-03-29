import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  Angka1 : number
  Angka2 : number
  Hasil : number
  btambah()
  {
    this.Hasil = this.Angka1 + this.Angka2
  }

  bkurang()
  {
    this.Hasil = this.Angka1 - this.Angka2
  }

  bkali()
  {
    this.Hasil = this.Angka1 * this.Angka2
  }

  bbagi()
  {
    this.Hasil = this.Angka1 / this.Angka2
  }
}
