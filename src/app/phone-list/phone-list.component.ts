import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service'

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  phones: Array<Phone>= [];
  errorMessage: string = '';

  constructor(private phoneService: PhoneService) { }

  ngOnInit() {
    this.phoneService.getList()
      .then( apiResult => this.phones = apiResult )
      .catch( err => this.errorMessage = 'There was an error. Try again later')
  }

}

interface Phone{
  _id: String,
  brand: String,
  name: String,
  image: String,
}
