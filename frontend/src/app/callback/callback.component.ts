import * as Auth0 from "auth0-web";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-callback",
  templateUrl: "./callback.component.html",
  styleUrls: ["./callback.component.css"]
})
export class CallbackComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const self = this;
    Auth0.handleAuthCallback(err => {
      if (err) alert(err);
      self.router.navigate(["/"]);
    });
  }
}
