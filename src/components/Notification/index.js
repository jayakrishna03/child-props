import './index.css'

import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props

  const iconColor = () => {
    switch (children.Heading) {
      case 'Success':
        return 'success'
      case 'Error':
        return 'error'
      case 'Warning':
        return 'warning'
      case 'Info':
        return 'info'
      default:
        return null
    }
  }

  const textColor = () => {
    switch (children.Heading) {
      case 'Success':
        return 'success-text'
      case 'Error':
        return 'error-text'
      case 'Warning':
        return 'warning-text'
      case 'Info':
        return 'info-text'
      default:
        return null
    }
  }

  return (
    <li>
      <div className="dis1">
        <children.Icon className={iconColor()} />

        <div>
          <h2 className={textColor()}>{children.Heading}</h2>
          <p>{children.Description}</p>
        </div>
      </div>
      <GrFormClose className="exit" />
    </li>
  )
}

export default Notification
