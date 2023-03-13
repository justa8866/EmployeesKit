import React, { useEffect, useState } from 'react'
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import moment from 'moment'

import { getEmployees, getIdFromPath } from '../../domain/employee/services/employee.service'
import { IEmployee } from '../../domain/employee/types/IEmployee'

import { getTasks } from '../../domain/task/services/task.service'

const format = 'MM / DD / YYYY'

const firstDateOfPreviousMonth = moment().subtract(1, 'months').startOf('month')
const lastDateOfPreviousMonth = moment().subtract(1, 'months').endOf('month')

interface IOccurency {
  [key: string]: number
}

const StatisticsEmployee = () => {
  const [employeesList, setEmployeesList] = useState<IEmployee[]>([])
  const [employeesWithLargestNumberOfCompletedTask, setEmployeesWithLargestNumberOfCompletedTask] =
    useState<IEmployee[]>([])

  useEffect(() => {
    const getEmployee = async () => {
      const list = await getEmployees()

      setEmployeesList(list)
    }

    getEmployee()
  }, [])

  useEffect(() => {
    getEmployeesWithLargestNumberOfCompletedTask()
  }, [employeesList])

  const getEmployeesWithLargestNumberOfCompletedTask = async () => {
    const tasksList = await getTasks()

    const occurencies: IOccurency = {}

    for (const task of tasksList) {
      if (!task.assignee) {
        continue
      }

      const taskDate = moment(task.dueDate.toDate())

      if (
        taskDate.isBetween(firstDateOfPreviousMonth, lastDateOfPreviousMonth) ||
        taskDate.isSame(firstDateOfPreviousMonth) ||
        taskDate.isSame(lastDateOfPreviousMonth)
      ) {
        const id = getIdFromPath(task.assignee)
        occurencies[id] = occurencies[id] ? occurencies[id] + 1 : 1
      }
    }

    const sortedTopFiveElements = Object.entries(occurencies)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(item => item[0])

    setEmployeesWithLargestNumberOfCompletedTask(
      employeesList.filter(employee => sortedTopFiveElements.includes(employee.id || '')),
    )
  }

  return (
    <Box>
      <Typography id='modal-title' variant='h4' component='h2' mb='10px'>
        5 employees who completed the largest number of tasks in the last month
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label='employee table'>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Date of birth</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeesWithLargestNumberOfCompletedTask.map((employee: IEmployee, index: number) => (
              <TableRow key={index}>
                <TableCell component='th' scope='row'>
                  {employee.id}
                </TableCell>
                <TableCell>{employee.fullName}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.phoneNumber}</TableCell>
                <TableCell>{moment(employee.brithDate.toDate()).format(format)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default StatisticsEmployee
