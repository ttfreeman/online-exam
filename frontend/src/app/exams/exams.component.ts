import { Component, OnInit, OnDestroy } from "@angular/core";
import * as Auth0 from "auth0-web";
import { Subscription } from "rxjs";
import { Exam } from "../exam.model";
import { ExamsApiService } from "../exams-api.service";

@Component({
  selector: "app-exams",
  templateUrl: "./exams.component.html",
  styleUrls: ["./exams.component.css"]
})
export class ExamsComponent implements OnInit, OnDestroy {
  examsListSubs: Subscription;
  examsList: Exam[];
  authenticated = false;

  constructor(private examsApi: ExamsApiService) {}

  signIn = Auth0.signIn;
  signOut = Auth0.signOut;
  getProfile = Auth0.getProfile;

  ngOnInit() {
    this.examsListSubs = this.examsApi.getExams().subscribe(res => {
      this.examsList = res;
    }, console.error);
    const self = this;
    Auth0.subscribe(authenticated => (self.authenticated = authenticated));
  }

  ngOnDestroy() {
    this.examsListSubs.unsubscribe();
  }
}
