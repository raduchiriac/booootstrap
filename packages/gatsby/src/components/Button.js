// rafcp

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const Button = ({
  role,
  text,
  type,
  disabled,
  size,
  onClick,
  href,
  outlined,
  block,
  active,
  classes,
  children,
  ...rest
}) => {
  const _role = (outlined && " btn-outline-" + role) || " btn-" + role
  const _size = (!!size && " btn-" + size) || ""
  const _block = (block && " btn-block") || ""

  const [stateDisabled, set_stateDisabled] = useState(disabled)
  const [stateActive, set_stateActive] = useState(active)

  useEffect(() => {
    set_stateDisabled(disabled)
  }, [disabled])

  useEffect(() => {
    set_stateActive(active)
  }, [active])

  const props = {
    onClick,
    disabled: stateDisabled,
    "aria-disabled": stateDisabled ? "true" : null,
    "aria-pressed": stateActive ? "true" : "false",
    className: `btn${_role}${_size}${_block}${stateActive ? " active" : ""}${(classes && " " + classes) || ""}`,
    ...rest,
  }

  if (role === "link" && !!href) {
    return (
      <a href={href} role="button" {...props}>
        {text}
      </a>
    )
  } else if (type === "button") {
    return <input type="button" value={text} {...props}></input>
  } else if (type === "submit") {
    return <input type="submit" value={text} {...props}></input>
  } else if (type === "reset") {
    return <input type="reset" value={text} {...props}></input>
  } else {
    return (
      <button {...props}>
        {text}
        {children}
      </button>
    )
  }
}
Button.propTypes = {
  role: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  text: "Default",
  role: "primary",
  onClick: null,
}

export default Button
