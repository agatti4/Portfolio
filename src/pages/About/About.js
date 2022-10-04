// import MyTerminal from "../components/Terminal"
// export default function About() {
//     return (
//       <div> 
//         <h1>About</h1>
//         <MyTerminal />
//       </div>
//     )
//   }

import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function previousText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
            experience/jobs</p>
            <p><span style={{color: info.baseColor}}>experience/jobs <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.exper.map((job, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{job.emoji}</Box>{job.label}</li>
                ))}
            </ul>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
        </>;
    }

    function coursesText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd college/classes
            </p>
            <p><span style={{color: info.baseColor}}>college/classes <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul className={Style.skills}>
                {info.classes.myClasses.map((classy, index) => <li key={index}>{classy}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
      <div>
        <h1>About</h1>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={previousText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={coursesText()}/>
            <Terminal text={miscText()}/>
        </Box>
      </div>
    )
}