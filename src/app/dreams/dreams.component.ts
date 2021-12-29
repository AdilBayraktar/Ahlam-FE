import { Component, OnInit } from '@angular/core';
import { Dream } from '../models/dream.model';
import { DreamService } from '../services/dream/dream.service';

@Component({
  selector: 'app-dreams',
  templateUrl: './dreams.component.html',
  styleUrls: ['./dreams.component.scss']
})
export class DreamsComponent implements OnInit {

  constructor(public service: DreamService) { }
  // dreams: Dream[]= []
  p = 1;
  ngOnInit(): void {
    this.service.getAllDreams();
  }

}
