import { IItemNavElement } from '../../common/NavItems/types/IItemNavElement.type'

import PeopleIcon from '../../assets/PeopleIcon'
import TasksIcon from '../../assets/TasksIcon'
import PeopleAndTasksIcon from '../../assets/PeopleAndTasksIcon'
import RoutesList from '../../router/routes'

export const items: IItemNavElement[] = [
  {
    value: 'Home',
    icon: PeopleAndTasksIcon,
    href: RoutesList.Home,
  },
  {
    value: 'Employees',
    icon: PeopleIcon,
    href: RoutesList.Employee,
  },
  {
    value: 'Tasks',
    icon: TasksIcon,
    href: RoutesList.Task,
  },
]
