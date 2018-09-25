import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  template: `
    <div class="row">
      <div class="col-xs-12">
        <h2>Dein Account</h2>
        <p>{{ id }}</p>
        <button class="btn btn-primary" (click)="onNavigate()">Zur Startseite</button>
        <hr>
        <a [routerLink]="['detail']">Detail</a>
        <a [routerLink]="['edit']">Edit</a>
        <hr>
        <router-outlet></router-outlet>
      </div>
    </div>  
  `
})
export class UserComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  id: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  onNavigate() {
    this.router.navigate(['/'], {queryParams: {'token': 100}, fragment: 'anchor1'});
  }

  ngOnInit() {
    // this.id = this.activatedRoute.snapshot.params['id']
    this.subscription = this.activatedRoute.params.subscribe(
      (params: Params) => this.id = params['id']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
