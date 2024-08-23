import React, { Fragment } from 'react'

export default function Fragments() {
  return (
    <div>
        <table>
            <tr>
                <TableComponents/>
            </tr>
        </table>
      
    </div>
  )
}


export  function TableComponents() {
  return (
    <Fragment>
        <td><h1></h1>Table Components</td>
    </Fragment>
  )
}

