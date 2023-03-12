import React, { useState } from 'react'

import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { DatePicker } from '@mui/x-date-pickers'
import moment from 'moment'
import { toast } from 'react-toastify'
import { Timestamp } from 'firebase/firestore'
import { createTask } from '../../domain/task/services/task.service'
import { TaskInput, taskSchema } from '../../domain/task/schemas/task.schema'
import { IEmployee } from '../../domain/employee/types/IEmployee'

const today = moment()

interface ICreateTask {
  employeesList: IEmployee[]
}

const CreateTask = ({ employeesList }: ICreateTask) => {
  const [dueDate, setDueDate] = useState(today)
  const [assignee, setAssignee] = useState<string>('')

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TaskInput>({
    resolver: zodResolver(taskSchema),
  })

  const onSubmitHandler: SubmitHandler<TaskInput> = async values => {
    values.dueDate = Timestamp.fromDate(dueDate.toDate())

    const result = await createTask(assignee, values)

    if (!result) {
      return toast.error('Problem with creating')
    }

    toast.success('🦄 Successfully created')
  }

  const generateEmployeeItem = (employee: IEmployee) => {
    return (
      <MenuItem key={employee.id} value={employee.id}>
        {employee.fullName}
      </MenuItem>
    )
  }

  return (
    <Grid container>
      <Typography id='modal-title' variant='h4' component='h2'>
        Create task
      </Typography>
      <Box component='form' noValidate autoComplete='off' onSubmit={handleSubmit(onSubmitHandler)}>
        <TextField
          label='Title'
          fullWidth
          required
          error={!!errors['title']}
          helperText={errors['title'] ? errors['title'].message : ''}
          {...register('title')}
        />
        <TextField
          label='Description'
          fullWidth
          required
          error={!!errors['description']}
          helperText={errors['description'] ? errors['description'].message : ''}
          {...register('description')}
        />
        <FormControl fullWidth>
          <InputLabel id='employee-select-label'>Employee</InputLabel>
          <Select
            labelId='employee-select-label'
            id='employee-select'
            value={assignee}
            label='Age'
            onChange={event => setAssignee(event.target.value as string)}
          >
            {employeesList.map(generateEmployeeItem)}
          </Select>
        </FormControl>
        <DatePicker
          label='due date'
          value={dueDate}
          onChange={newValue => setDueDate(newValue || today)}
        />
        <Button variant='contained' type='submit'>
          Create
        </Button>
      </Box>
    </Grid>
  )
}

export default CreateTask
