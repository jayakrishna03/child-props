import './index.css'

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'

const list = [
  {
    id: 1,
    Icon: AiFillCheckCircle,
    Heading: 'Success',
    Description: 'You can access all the files in the folder',
  },

  {
    id: 2,
    Icon: RiErrorWarningFill,
    Heading: 'Error',
    Description:
      'Sorry, you are not authorized to have access to delete the file',
  },

  {
    id: 3,
    Icon: MdWarning,
    Heading: 'Warning',
    Description: 'Viewers of this file can see comments and suggestions ',
  },

  {
    id: 4,
    Icon: MdInfo,
    Heading: 'Info',
    Description: 'Anyone on the internet can view these files ',
  },
]

const AlertNotifications = () => {
  return (
    <div className="first-container">
      <h1>Alert Notifications</h1>
      <ul>
        {list.map(item => {
          return <Notification key={item.id}>{item}</Notification>
        })}
      </ul>
    </div>
  )
}

export default AlertNotifications
