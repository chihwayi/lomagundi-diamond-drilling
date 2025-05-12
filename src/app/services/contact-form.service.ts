import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  private apiUrl = 'https://lomagundiconstructionservicesltd.co.uk/api/contact';

  constructor(private http: HttpClient) {}

  /**
   * Submit contact form data to the backend
   * @param formData Contact form submission data
   * @returns Observable of the server response
   */
  submitContactForm(formData: ContactFormData): Observable<any> {
    return this.http.post(this.apiUrl, formData).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Error handling method
   * @param error Error object
   */
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw error;
  }
}
