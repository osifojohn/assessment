import type { AccountSetup, PersonalInfo, ValidationErrors } from '../types';

export class ValidationService {
  static validateEmail(email: string): string | null {
    if (!email.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return null;
  }

  static validateRequired(value: string, fieldName: string): string | null {
    if (!value.trim()) return `${fieldName} is required`;
    return null;
  }

  static validateMinLength(
    value: string,
    minLength: number,
    fieldName: string
  ): string | null {
    if (value.length < minLength)
      return `${fieldName} must be at least ${minLength} characters`;
    return null;
  }

  static validatePersonalInfo(data: PersonalInfo): ValidationErrors {
    const errors: ValidationErrors = {};

    const nameError = this.validateRequired(data.fullName, 'Full name');
    if (nameError) errors.fullName = nameError;

    const emailError = this.validateEmail(data.email);
    if (emailError) errors.email = emailError;

    return errors;
  }

  static validateAccountSetup(data: AccountSetup): ValidationErrors {
    const errors: ValidationErrors = {};

    const usernameError =
      this.validateRequired(data.username, 'Username') ||
      this.validateMinLength(data.username, 3, 'Username');
    if (usernameError) errors.username = usernameError;

    const passwordError =
      this.validateRequired(data.password, 'Password') ||
      this.validateMinLength(data.password, 6, 'Password');
    if (passwordError) errors.password = passwordError;

    return errors;
  }
}
