import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import moment from 'moment'

import { ModalContext } from '../../common/Modal/context'
import { ITask } from '../../domain/task/types/ITask.type'
import CreateTask from '../CreateTask'
import { deleteTask, getTasks } from '../../domain/task/services/task.service'
import { getEmployees, getIdFromPath } from '../../domain/employee/services/employee.service'
import { IEmployee } from '../../domain/employee/types/IEmployee'
import EditTask from '../EditTask'
import { onSnapshot } from 'firebase/firestore'
import { taskCol } from '../../firebase/config'

interface ITaskListWithFetchedEmployee extends ITask {
  employeFullName?: string
}

const Task = () => {
  const [taskList, setTaskList] = useState<ITaskListWithFetchedEmployee[]>([])
  const [employeesList, setEmployeesList] = useState<IEmployee[]>([])
  const ContextModal = useContext(ModalContext)

  useEffect(() => {
    const getEmployee = async () => {
      const list = await getEmployees()

      setEmployeesList(list)
    }

    getEmployee()
  }, [])

  useEffect(() => {
    addFetchedEmployeeToListOfTasks()
  }, [employeesList])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSnapshot(taskCol, snap => {
      addFetchedEmployeeToListOfTasks()
    })
  }, [taskList])

  const addFetchedEmployeeToListOfTasks = async () => {
    const list = await getTasks()

    const tempTaskList = list.map(task => {
      return { employeFullName: getAssignee(task), ...task }
    })

    setTaskList(tempTaskList)
  }

  const getAssignee: (task: ITask) => string = task => {
    if (task.assignee) {
      const id = getIdFromPath(task.assignee)

      const employee = employeesList.find(item => item.id === id)
      return employee ? employee.fullName : ''
    }

    return ''
  }

  const handleDelete = async (id: string) => {
    const result = await deleteTask(id)

    if (!result) {
      return toast.error('Problem with deleting ' + id)
    }

    toast.success('🦄 Successfully deleted')
  }

  return (
    <TableContainer component={Paper}>
      <Button
        variant='contained'
        onClick={() => ContextModal?.handleModal(<CreateTask employeesList={employeesList} />)}
      >
        Create task
      </Button>
      <Table aria-label='employee table'>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Assignee</TableCell>
            <TableCell>Due date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {taskList.map((task: ITaskListWithFetchedEmployee, index: number) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {task.id}
              </TableCell>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>{task.employeFullName}</TableCell>
              <TableCell>{moment(task.dueDate.toDate()).format('MM / DD / YYYY')}</TableCell>
              <TableCell align='right'>
                <IconButton aria-label='delete' onClick={() => handleDelete(task.id as string)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  aria-label='delete'
                  onClick={() =>
                    ContextModal?.handleModal(<EditTask employeesList={employeesList} {...task} />)
                  }
                >
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Task
