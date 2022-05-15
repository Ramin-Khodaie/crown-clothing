import * as React from "react"

const HeaderIcon = (props) => (
  <svg width={50} height={39} xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>{"CRWN"}</title>
    <g fill="none" fillRule="evenodd">
      <path fill="#808282" d="m3 14 22 12.5L47 14l-6.145 25H9.085z" />
      <path fillOpacity={0.263} fill="#101A1A" d="m25 8 15 31H10z" />
      <circle fill="#5E6363" cx={2} cy={9} r={2} />
      <circle fill="#5E6363" cx={25} cy={2} r={2} />
      <circle fill="#5E6363" cx={48} cy={9} r={2} />
    </g>
  </svg>
)

export default HeaderIcon