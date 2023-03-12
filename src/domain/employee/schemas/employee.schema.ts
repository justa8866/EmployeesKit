import { object, string } from 'zod'
import { IEmployee } from '../types/IEmployee'

const phoneRegex =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

export type EmployeeInput = IEmployee

export const employeeSchema = object({
  fullName: string().nonempty('Name is required').max(32, 'Name must be less than 32 characters'),
  email: string()
    .nonempty('Email is required')
    .email('Email is invalid')
    .trim()
    .max(50, 'Email must be less than 50 characters'),
  phoneNumber: string().regex(phoneRegex, 'Incorrect phone number'),
})
