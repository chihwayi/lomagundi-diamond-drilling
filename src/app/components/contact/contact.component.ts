import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormService } from '../../services/contact-form.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactFormService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(50)
      ]],
      email: ['', [
        Validators.required, 
        Validators.email
      ]],
      phone: ['', [
        Validators.pattern(/^[0-9\s+()-]{10,15}$/)
      ]],
      message: ['', [
        Validators.required, 
        Validators.minLength(10), 
        Validators.maxLength(500)
      ]]
    });
  }

  // Getter for easy access to form fields
  get f() { return this.contactForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    // Stop if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;

    // Call contact form service to submit the form
    this.contactService.submitContactForm(this.contactForm.value)
      .subscribe({
        next: () => {
          // Success message
          this.snackBar.open('Message sent successfully!', 'Close', {
            duration: 5000,
            panelClass: ['success-snackbar']
          });
          
          // Reset form
          this.contactForm.reset();
          this.submitted = false;
        },
        error: (error) => {
          // Error message
          this.snackBar.open('Failed to send message. Please try again.', 'Close', {
            duration: 5000,
            panelClass: ['error-snackbar']
          });
          console.error('Contact form submission error', error);
        }
      }).add(() => {
        // Always set loading to false
        this.loading = false;
      });
  }

  // Method to check if a field is invalid
  isFieldInvalid(field: string): boolean {
    const formField = this.contactForm.get(field);
    return !!(formField && formField.invalid && (formField.dirty || formField.touched || this.submitted));
  }
}
