import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import styled from 'styled-components';
import { useMediaQuery } from "@mui/material";
export const TitleAbout = styled.p`
    
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    /* identical to box height */

    @media (max-width: 1300px) {
        font-size:25px;
      
    }
    @media (max-width: 700px) {
        font-size:13px;
        margin-top:20px
      
    }
`;


const TitleInitial = styled.h1`
font-family: 'Satoshi';
font-style: normal;
font-weight: 500;
font-size: 20px;
max-width: 85%;
/* or 140% */

@media (max-width: 1300px) {
        font-size:17px;
        line-height: 20px;
    }

    @media (max-width: 600px) {
        font-size:10px;
        line-height: 17px;
    }
`;

export default function CertificacoesTimeline() {
  const matches = useMediaQuery('(min-width:700px)');
  return (

    <Timeline position="alternate" sx={{ height: "80vh" }}>
      <TimelineItem>
        <TimelineSeparator sx>
          <TimelineDot sx={{ width: 15, height: 15 }} />
          <TimelineConnector sx={{ height: matches ?  120 : 80 }} />
        </TimelineSeparator>
        <TimelineContent>
          <TitleAbout>Web Design</TitleAbout><TitleInitial>Brasil - Indtitute</TitleInitial>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator sx>
          <TimelineDot sx={{ width: 15, height: 15 }} />
          <TimelineConnector sx={{ height: matches ?  120 : 80 }} />
        </TimelineSeparator>
        <TimelineContent>
          <TitleAbout>React Development </TitleAbout><TitleInitial>Brasil - Autonomo</TitleInitial>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator sx>
          <TimelineDot sx={{ width: 15, height: 15 }} />
          <TimelineConnector sx={{ height: matches ?  120 : 80  }} />
        </TimelineSeparator>
        <TimelineContent>
          <TitleAbout>Web Development</TitleAbout><TitleInitial>Brasil - Autonomo</TitleInitial>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator sx>
          <TimelineDot sx={{ width: 15, height: 15 }} />
         
        </TimelineSeparator>
        <TimelineContent>
          <TitleAbout>UI Expert </TitleAbout><TitleInitial>Brasil - Indtitute</TitleInitial>
        </TimelineContent>
      </TimelineItem>

      {/*...rest of the timeline items*/}
    </Timeline>
  );
}