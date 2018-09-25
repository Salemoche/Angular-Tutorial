import { Router, ActivatedRoute, Params } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  template: `
    <div class="row">
      <div class="col-xs-12">
        <h2>Dein Account</h2>
        <button class="btn btn-primary" (click)="onNavigate()">Zur Startseite</button>
        <h4>{{id}}</h4>
        <a [routerLink]="['detail']">Detail</a>
        <a [routerLink]="['edit']">Edit</a>
        <hr>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class UserComponent implements OnInit, OnDestroy {

  id: string;
  private subscription: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  onNavigate() {
    this.router.navigate(['/'], {queryParams: {'token': 100}});
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (params: Params) => this.id = params['id']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
