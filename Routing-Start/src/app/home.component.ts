import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  template: `
    <div class="row">
      <div class="col-xs-12">
        <h2>Home</h2>
        {{token}}
      </div>
    </div>
  `
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  token: string;

  constructor (private activatedRoute: ActivatedRoute) {}

  ngOnInit () {
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (queryParams: Params) => this.token = queryParams['token']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
