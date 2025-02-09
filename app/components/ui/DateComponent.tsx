import { formatDate } from '@/lib/utils/utils'

const DateComponent = ({ dateString, options, ...rest }) => {
  return (
    <time dateTime={dateString} {...rest}>
      {formatDate(dateString, options)}
    </time>
  )
}

export default DateComponent