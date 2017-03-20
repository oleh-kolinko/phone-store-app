import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {

  phone: Object;

  constructor(
    private phoneService: PhoneService,
    private route: ActivatedRoute,              //ActivatedRoute for geting params
    private navigator: Router                   //Router for redirect
    ) { }

  ngOnInit() {
    this.route.params.subscribe( (params) =>{    //Get params from url
      const id = params['id'];                   //Get id
      this.phoneService.get(id)                  //Get phone details from API
      .then( result => this.phone = result )
      .catch( err => console.log(err) )
    })
  }

  delete(id){
    if(!window.confirm('Are you sure? ')) return;

    this.phoneService.remove(this.phone['_id'])
      .then((apiResult)=>{ this.navigator.navigate(['']) }) //Redirect to '' -> home
      .catch((err)=>{ console.log(err) })
  }
}
