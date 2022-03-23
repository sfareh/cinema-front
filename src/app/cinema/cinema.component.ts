import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  public cities: any;

  constructor(private cinemaService : CinemaService) { }

  ngOnInit() {
    this.cinemaService.getCities()
    .subscribe(data => {
     this.cities = data;
    }, err => {
      console.log( err);
    })
  }

}
