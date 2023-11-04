import React,{useState,useEffect} from 'react';
import { Nav } from '../components/Navbar/NavbarElements';
import { RewardBar } from '../components/Rewardbar/RewardbarElement';
import Accordion from 'react-bootstrap/Accordion';
import './NewUser.css';

function NewUser(){
    return (
        <div>
            <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Path 1: Information Technology</Accordion.Header>
            <Accordion.Body>
                Pyramid CDC - SmartNet Program provides IT Bootcamps and IT Certification Exam prep classes to obtain Industry-Standard Certifications and credentials for entry-level IT jobs.
              Pathways: 
              <ul>
                <li>IT Support Tech & Help Desk</li>
                <li>Software & Gaming Developer</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Path 2:</Accordion.Header>
            <Accordion.Body>
              ...
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>
      );
};

export default NewUser;