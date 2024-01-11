import classNames from "classnames"
import "./Button.css"

export default function Button({children, className, ...rest}) {
  const btnClassname = classNames("button--normal", className ? className : "")
  
  return (
    <button className={btnClassname} {...rest}>{children}</button>
  )
}