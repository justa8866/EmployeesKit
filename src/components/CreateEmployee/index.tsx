import React, { useEffect, useState } from 'react'

import { Box, Button, Grid, Typography } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { EmployeeInput, employeeSchema } from '../../domain/employee/schemas/employee.schema'
import { createEmployee } from '../../domain/employee/services/employee.service'
import { DatePicker } from '@mui/x-date-pickers'
import moment from 'moment'
import { toast } from 'react-toastify'
import { Timestamp } from 'firebase/firestore'
import TextFieldStyle from './CreateEmployee.style'

const today = moment()

const CreateEmployee = () => {
  const [birthDate, setBirthDate] = useState(today)

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm<EmployeeInput>({
    resolver: zodResolver(employeeSchema),
  })

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful])

  const onSubmitHandler: SubmitHandler<EmployeeInput> = async values => {
    values.brithDate = Timestamp.fromDate(birthDate.toDate())

    const result = await createEmployee(values)

    if (!result) {
      return toast.error('Problem with creating ')
    }

    toast.success('🦄 Successfully created')
  }

  return (
    <Grid container>
      <Typography id='modal-title' variant='h4' component='h2'>
        Create Employee
      </Typography>
      <Box component='form' noValidate autoComplete='off' onSubmit={handleSubmit(onSubmitHandler)}>
        <TextFieldStyle
          label='fullName'
          fullWidth
          required
          error={!!errors['fullName']}
          helperText={errors['fullName'] ? errors['fullName'].message : ''}
          {...register('fullName')}
        />
        <TextFieldStyle
          label='email'
          fullWidth
          required
          error={!!errors['email']}
          helperText={errors['email'] ? errors['email'].message : ''}
          {...register('email')}
        />
        <TextFieldStyle
          label='phone'
          fullWidth
          required
          error={!!errors['phoneNumber']}
          helperText={errors['phoneNumber'] ? errors['phoneNumber'].message : ''}
          {...register('phoneNumber')}
        />
        <DatePicker
          label='date of birth'
          defaultValue={today}
          maxDate={today}
          minDate={moment('1900-01-01')}
          value={birthDate}
          onChange={newValue => setBirthDate(newValue || today)}
        />
        <Button variant='contained' type='submit'>
          Create
        </Button>
      </Box>
    </Grid>
  )
}

export default CreateEmployee
