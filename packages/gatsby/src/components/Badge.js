// rafcp

import React, { useState, useEffect, Fragment } from "react"
import PropTypes from "prop-types"

const Badge = ({ text, role, srText, classes, ...rest }) => {
  const _role = " badge-" + role

  const props = {
    className: `badge${_role}${(classes && " " + classes) || ""}`,
    ...rest,
  }

  return (
    <Fragment>
      <span {...props}>{text}</span>
      {srText && <span className="sr-only">{srText}</span>}
    </Fragment>
  )
}
Badge.propTypes = {
  role: PropTypes.string,
  text: PropTypes.string,
}

Badge.defaultProps = {
  text: "Default",
  role: "primary",
}

export default Badge
