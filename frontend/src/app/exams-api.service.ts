import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { API_URL } from "../env";
import { Exam } from "./exam.model";

@Injectable()
export class ExamsApiService {
  constructor(private http: HttpClient) {}

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || "Error: Unable to complete request");
  }

  getExams(): Observable<Exam[]> {
    return this.http
      .get<Exam[]>(`${API_URL}/exams`)
      .pipe(catchError(ExamsApiService._handleError));
  }
}
