import React, { useEffect, useState } from 'react'

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
import { updateTask } from '../Task/services/task.service'
import { TaskInput, taskSchema } from '../Task/schemas/task.schema'
import { IEmployee } from '../../domain/employee/types/IEmployee'
import { ITask } from '../Task/types/ITask.type'
import { getIdFromPath } from '../../domain/employee/services/employee.service'

const today = moment()

interface IEditTaskProps extends ITask {
  employeesList: IEmployee[]
}

const EditTask = ({ id, title, description, assignee, dueDate, employeesList }: IEditTaskProps) => {
  const [dueDateState, setDueDate] = useState(moment(dueDate.toDate()) || today)
  const [assigneeId, setAssigneeId] = useState<string>('')

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<TaskInput>({
    resolver: zodResolver(taskSchema),
  })

  const onSubmitHandler: SubmitHandler<TaskInput> = async values => {
    values.dueDate = Timestamp.fromDate(dueDateState.toDate())

    const result = await updateTask(id || '', assigneeId, values)

    if (!result) {
      return toast.error('Problem with updating')
    }

    toast.success('🦄 Successfully updated')
  }

  useEffect(() => {
    setValue('title', title, { shouldValidate: true })
    setValue('description', description, { shouldValidate: true })

    if (assignee) {
      const id = getIdFromPath(assignee)

      const employee = employeesList.find(item => item.id === id)
      setAssigneeId(employee?.id || '')
    }
  }, [])

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
            value={assigneeId}
            label='Age'
            onChange={event => setAssigneeId(event.target.value as string)}
          >
            {employeesList.map(generateEmployeeItem)}
          </Select>
        </FormControl>
        <DatePicker
          label='due date'
          value={dueDateState}
          onChange={newValue => setDueDate(newValue || today)}
        />
        <Button variant='contained' type='submit'>
          Edit
        </Button>
      </Box>
    </Grid>
  )
}

export default EditTask
