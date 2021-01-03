import React from "react";
import BoxOne from './box-one.component';

export default function CourseList () {
    return (
        <div>
            <center>
            <table style={{width:"50%"}}>
                <tbody>
                <tr>
                    <td style={{border:"1px solid black"}}>
                        <center><strong>Skills You Know</strong></center>
                        <center><BoxOne box="1"/></center>
                    </td>
                    <td style={{border:"1px solid black"}}>
                        <center><strong>Skills Your Job Requires</strong></center>
                        <center><BoxOne box="2"/></center>
                    </td>
                </tr>
                <tr>
                    <td style={{border:"1px solid black"}}>
                        <center><strong>Skills You Want To Learn</strong></center>
                        <center><BoxOne box="3"/></center>
                    </td>
                    <td style={{border:"1px solid black"}}>
                        <center><strong>Skills You Want For Your Career</strong></center>
                        <center><BoxOne box="4"/></center>
                    </td>
                </tr>
                </tbody>
            </table>
            </center>
        </div>
    )
}