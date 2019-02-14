import DangerousHTML from 'react-dangerous-html'

export default ({ children, ...props }) => (
  <DangerousHTML html={children} {...props} />
)
