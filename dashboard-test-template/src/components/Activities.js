// import React from 'react'
// import './styleComponents/Activities.css'

// const Activities = () => {
//     return (
//         <div className='aContainer'>
//             <div>
//                 <div><h2>Activities</h2></div>
//                 <div className='hUnderline'></div>
//             </div>
//             <div className='timeline'>
//                 <div className='timeline-body'>
//                     <div className='timeline-item'>
//                         <div className='content'>
//                             <h3 className='title'>Now</h3>
//                             <p>awna westberg created an exchange <b>200008</b></p>
//                         </div>
//                     </div>
//                     <div className='timeline-item'>
//                         <div className='content'>
//                             <h3 className='title'>2 hours ago</h3>
//                             <p>awna westberg modified the Basic Information of the Exchange <b>200010</b></p>
//                         </div>
//                     </div>
//                     <div className='timeline-item'>
//                         <div className='content'>
//                             <h3 className='title'>5 hours ago</h3>
//                             <p>awna westberg Added a Settlement Company <b>The Real Estate, LLC</b></p>
//                         </div>
//                     </div>
//                     <div className='timeline-item'>
//                         <div className='content'>
//                             <h3 className='title'>3 days ago</h3>
//                             <p>awna westberg modified the Settlement Company <b>The Real Estate, LLC</b></p>
//                         </div>
//                     </div>
//                     <div className='timeline-item'>
//                         <div className='content'>
//                             <h3 className='title'>4 days ago</h3>
//                             <p>awna westberg created an exchanger <b>Spring Plaza, LLC</b></p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Activities

import React from 'react';
import './styleComponents/Activities.css'

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const Activities = () => {
  return (
    <div className='aContainer'>
      <div className='eTitle'>
        <div><h2>Activities</h2></div>
        <div className='hUnderline'></div>
      </div>
      <div className='Atimeline'>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary"/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3 className='title'>Now</h3>
              <p>awna westberg created an exchange <b>200010</b></p>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary"/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3 className='title'>2 hours ago</h3>
              <p>awna westberg modified the Basic Information of the Exchange <b>200010</b></p>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary"/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3 className='title'>5 hours ago</h3>
              <p>awna westberg Added a Settlement Company <b>The Real Estate, LLC</b></p>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary"/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h3 className='title'>3 days ago</h3>
              <p>awna westberg modified the Settlement Company <b>The Real Estate, LLC</b></p>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary"/>
            </TimelineSeparator>
            <TimelineContent>
              <h3 className='title'>4 days ago</h3>
              <p>awna westberg created an exchanger <b>Spring Plaza, LLC</b></p>
            </TimelineContent>
          </TimelineItem>

        </Timeline>
      </div>
    </div>
  );
}

export default Activities
