import React, { useEffect, useState } from 'react'

import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { EmployeeInput, employeeSchema } from '../Employee/schemas/employee.schema'
import { updateEmployee } from '../Employee/services/employee.service'
import { DatePicker } from '@mui/x-date-pickers'
import moment from 'moment'
import { toast } from 'react-toastify'
import { Timestamp } from 'firebase/firestore'
import { IEmployee } from '../Employee/types/IEmployee'

const today = moment()

const EditEmployee = ({ brithDate, fullName, phoneNumber, email, id }: IEmployee) => {
  const [birthDate, setBirthDate] = useState(moment(brithDate.toDate()) || today)

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<EmployeeInput>({
    resolver: zodResolver(employeeSchema),
  })

  const onSubmitHandler: SubmitHandler<EmployeeInput> = async values => {
    values.brithDate = Timestamp.fromDate(birthDate.toDate())

    const result = await updateEmployee(id || '', values)

    if (!result) {
      return toast.error('Problem with editing ')
    }

    toast.success('🦄 Successfully edited')
  }

  useEffect(() => {
    setValue('fullName', fullName, { shouldValidate: true })
    setValue('phoneNumber', phoneNumber, { shouldValidate: true })
    setValue('email', email, { shouldValidate: true })
  }, [])

  return (
    <Grid container>
      <Typography id='modal-title' variant='h4' component='h2'>
        Edit Employee
      </Typography>
      <Box component='form' noValidate autoComplete='off' onSubmit={handleSubmit(onSubmitHandler)}>
        <TextField
          label='fullName'
          fullWidth
          required
          error={!!errors['fullName']}
          helperText={errors['fullName'] ? errors['fullName'].message : ''}
          {...register('fullName')}
        />
        <TextField
          label='email'
          fullWidth
          required
          error={!!errors['email']}
          helperText={errors['email'] ? errors['email'].message : ''}
          {...register('email')}
        />
        <TextField
          label='phone'
          fullWidth
          required
          error={!!errors['phoneNumber']}
          helperText={errors['phoneNumber'] ? errors['phoneNumber'].message : ''}
          {...register('phoneNumber')}
        />
        <DatePicker
          label='date of birth'
          maxDate={today}
          minDate={moment('1900-01-01')}
          value={birthDate}
          onChange={newValue => setBirthDate(newValue || today)}
        />
        <Button variant='contained' type='submit'>
          Update
        </Button>
      </Box>
    </Grid>
  )
}

export default EditEmployee
