import {
  Button,
  IconButton,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { deleteEmployee, getEmployees } from '../../domain/employee/services/employee.service'
import { IEmployee } from '../../domain/employee/types/IEmployee'
import { toast } from 'react-toastify'
import { onSnapshot } from 'firebase/firestore'
import { employeeCol } from '../../firebase/config'
import { ModalContext } from '../../common/Modal/context'
import CreateEmployee from '../CreateEmployee'
import moment from 'moment'

import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import EditEmployee from '../EditEmployee'
import { MainTable } from './Employee.style'

const Employee = () => {
  const [employeeList, setEmployeeList] = useState<IEmployee[]>([])
  const ContextModal = useContext(ModalContext)

  useEffect(() => {
    const getEmployee = async () => {
      const list = await getEmployees()

      setEmployeeList(list)
    }

    getEmployee()
  }, [])

  useEffect(() => {
    onSnapshot(employeeCol, snap => {
      const employees = snap.docs.map(employee => ({ ...employee.data(), id: employee.id }))
      setEmployeeList(employees)
    })
  }, [employeeList])

  const handleDelete = async (id: string) => {
    const result = await deleteEmployee(id)

    if (!result) {
      return toast.error('Problem with deleting ' + id)
    }

    toast.success('🦄 Successfully deleted')
  }

  return (
    <TableContainer component={Paper}>
      <Button variant='contained' onClick={() => ContextModal?.handleModal(<CreateEmployee />)}>
        Create employee
      </Button>
      <MainTable aria-label='employee table'>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align='right'>Full Name</TableCell>
            <TableCell align='right'>E-mail</TableCell>
            <TableCell align='right'>Phone</TableCell>
            <TableCell align='right'>Date of birth</TableCell>
            <TableCell align='right'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeList.map((employee: IEmployee, index: number) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {employee.id}
              </TableCell>
              <TableCell>{employee.fullName}</TableCell>
              <TableCell align='right'>{employee.email}</TableCell>
              <TableCell align='right'>{employee.phoneNumber}</TableCell>
              <TableCell align='right'>
                {moment(employee.brithDate.toDate()).format('MM / DD / YYYY')}
              </TableCell>
              <TableCell align='right'>
                <IconButton aria-label='delete' onClick={() => handleDelete(employee.id as string)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  aria-label='delete'
                  onClick={() => ContextModal?.handleModal(<EditEmployee {...employee} />)}
                >
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MainTable>
    </TableContainer>
  )
}

export default Employee
