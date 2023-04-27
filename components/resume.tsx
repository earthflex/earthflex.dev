import React from 'react';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import * as Toast from '@radix-ui/react-toast';

export default function ResumeDialog() {

    const skills = [
        'UX&UI Designing',
        'Web Development',
        'Motion Design '
    ];

    const listSkills = skills.map((skill, index) =>
        <span className="chip-d" key={index}>
            {skill}
        </span>
    );

    const codes = [
        'HTML',
        'CSS',
        'Javascript',
        'Typescript',
        'React.js',
        'Vue.js',
        'Sanity',
        'MUI',
        'Vuetify',
        'TailwindCSS',
        'Bootstrap',
        'Radix-ui',
        'Chakra-ui',
    ];

    const listCodes = codes.map((code, index) =>
        <span className="chip-d" key={index}>
            {code}
        </span>
    );

    const tools = [
        'Git',
        'Figma',
        'Notion',
        'Jira',
        'ChatGPT',
        'Wordpress Elementor',
        'Adobe PS,AI,AE,PR',
        'Affinity Photo,Design',
    ];

    const listTools = tools.map((tool, index) =>
        <span className="chip-d" key={index}>
            {tool}
        </span>
    );

    const contacts = [
        {
            icon: '/re-email.png',
            title: 'email',
            detail: "earthflexible@gmail.com",
            link: 'mailto:earthflexible@gmail.com',
            traget: '_blank',
        },
        {
            icon: '/re-phone-call.png',
            title: 'phone',
            detail: "+66(0)621292875",
            link: 'tel:+66621292875',
            traget: '_blank',
        },
        {
            icon: '/re-line.png',
            title: 'line',
            detail: "earthz1355",
            link: 'https://line.me/ti/p/ge0-5qPNP4',
            traget: '_blank',
        },
        {
            icon: '/re-location.png',
            title: 'location',
            detail: "Ladprao, Bangkok, Thailand ",
            link: '#',
            traget: '',
        },
    ];

    const listContacts = contacts.map((contact, index) =>
        <li key={index}>
            <Link href={contact.link} target={contact.traget}>
                <i className={contact.title}><img src={contact.icon} /></i>
                {contact.detail}
            </Link>
        </li>
    );

    const exps = [
        {
            current: true,
            company: 'NPB Digital Co., Ltd.',
            city: 'Bangkok',
            role: [
                {
                    position: 'Front-end Developer, Leader UX&UI Designer',
                    detail: [
                        'Develop Website using HTML, CSS,Javascript, React, Vue, Responsive',
                        'Be in charge of all projects in part of UX/UI consultant'
                    ],
                    date: 'Jun. 2022 - Present',
                }
            ],
        },
        {
            current: false,
            company: 'Bangkok Web Solution Co., Ltd.',
            city: 'Bangkok',
            role: [
                {
                    position: 'Web Designer',
                    detail: [
                        'Design UX/UI for overall the E-Learning products  and web application',
                        'Create UI mockups and prototypes that can be used for consideration to develop good experiences for users',
                        'Develop CMS website by Wordpress Elementor website builder'
                    ],
                    date: 'Jan 2021 - May 2022',
                },
                {
                    position: 'Graphic & Motion Designer',
                    detail: [
                        'Design banner and illustration logo for PR Marketing',
                        'Create storyboard & motion graphic of courseware E-Learning'
                    ],
                    date: 'Jan 2019 - Dec 2019',
                }
            ],
        },
    ];

    const listExps = exps.map((exp, index) =>
        <div className={`steps-item ${exp.current ? "steps_current" : ""}`} key={index}>
            <div className="steps-item-container">
                {exp.role.length <= 1 &&
                    <>
                        <div className="steps-tail"></div>
                        <div className="steps-item-icon"></div>
                    </>
                }
                <div className="steps-content">
                    <div className="steps-item-title">
                        {exp.role.length <= 1 &&
                            exp.role.map((role, index) => (
                                <div key={index}>
                                    <h4>
                                        {role.position}
                                    </h4>
                                    <div>
                                        <h5><small>{exp.company}</small><small> {role.date}</small></h5>
                                        <div className="steps-item-description">
                                            <ul>
                                                {role.detail.map(detail => (
                                                    <li key={detail}>{detail}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        {exp.role.length > 1 &&
                            <>
                                <h4> {exp.company}</h4>
                                {
                                    exp.role.map((role, index) => (
                                        <div className="steps-exps-2" key={index}>
                                            <div className="steps-item-icon"></div>
                                            <h5>{role.position}<small>{role.date}</small></h5>
                                            <div className="steps-item-description">
                                                <ul>
                                                    {role.detail.map(detail => (
                                                        <li key={detail}>{detail}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        </div >
    );

    const HeadResume = () => {
        return (
            <>
                <div className="resume-download">
                    <Link className="btn-download" href="resume_apiwat-anekboon.pdf" target="_blank">Download Resume</Link>
                </div>
                <h2>Apiwat Anekboon</h2><span>Front-end Developer</span><span>City, Bangkok</span>
            </>
        )
    }

    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Dialog.Content className="resume-content">
                <div className="resume-left">
                    <div className="window-control">
                        <Dialog.Close asChild>
                            <button className="control-r" aria-label="Close"></button>
                        </Dialog.Close>
                        <button className="control-y"></button>
                        <button className="control-g"></button>
                    </div>
                    <div className="scroll-l">
                        <div className="avatar-profile">
                            <img src="/img-profile.png" alt="" />
                        </div>
                        <div className="head-resume d-sm-none">
                            <HeadResume />
                        </div>
                        <div className="resume-box">
                            <h4>Apply for</h4>
                            <p>status : <span className="chip-active">Working full-time</span></p>
                        </div>
                        <div className="resume-box">
                            <h4>Skills</h4>
                            <p>
                                {listSkills}
                            </p>
                        </div>
                        <div className="resume-box">
                            <h4>Code</h4>
                            <p>
                                {listCodes}
                            </p>
                        </div>
                        <div className="resume-box">
                            <h4>Tools</h4>
                            <p>
                                {listTools}
                            </p>
                        </div>

                        <div className="resume-box">
                            <h4>Contact</h4>
                            <ul className="list-contact">
                                {listContacts}
                            </ul>
                        </div>
                    </div>
                </div >
                <div className="resume-right">
                    <div className="head-resume d-none">
                        <HeadResume />
                    </div>
                    <div className="scroll-r">
                        <div className="resume-box">
                            <div className="box-exp">
                                <h2 className="title-exp">Work Experience</h2>
                                {listExps}
                            </div>
                        </div>
                        <div className="resume-box">
                            <h4>Educations</h4>
                            <div className="card-resume">
                                <div className="icon-card"> <img src="/education.png" alt="education" /></div>
                                <div className="card-content">
                                    <h5>Technology Multimedia and Animation  <br />
                                        <small>RMU : Mahasarakham</small>  <br />
                                        <small>Oct. 2013 - Nov. 2017 </small>  <br />
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="resume-box">
                            <h4>Projects</h4>
                            <Link href="#">
                                <div className="card-resume" onClick={() => {
                                    setOpen(true);
                                }}>
                                    <div className="icon-card"> <img src="/project.png" alt="project" /></div>
                                    <div className="card-content">
                                        <h5>See all
                                        </h5>
                                    </div>
                                </div>
                            </Link >
                        </div>
                    </div >
                </div>
            </Dialog.Content>

            <Toast.Provider swipeDirection="right" >
                <Toast.Root className="toast-root" open={open} onOpenChange={setOpen}>
                    <Toast.Title className="toast-title">🔔 Portfolio Currently <br /> Being Updated.</Toast.Title>
                    <Toast.Description asChild>

                    </Toast.Description>
                    <Toast.Action className="toast-action" asChild altText="Goto schedule to undo">
                        <button className="toast-button">close</button>
                    </Toast.Action>
                </Toast.Root>
                <Toast.Viewport className="toast-viewport" />
            </Toast.Provider>
        </>
    );
}
