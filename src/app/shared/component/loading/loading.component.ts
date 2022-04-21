import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setSpinner();
  }

  @Input()
  isLoading: boolean = false;

  private subject = new BehaviorSubject<boolean>(false);
  loading$ = this.subject.asObservable();

  setSpinner(): void {
    this.isLoading ? this.subject.next(true) : this.subject.next(false);
  }

}
