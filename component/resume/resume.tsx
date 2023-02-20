import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';

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
            detail: "0621292875",
            link: 'tel:0621292875',
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
            status: true,
            title: 'Front-end Developer  & Leader UXUI Designer',
            company: 'NPB Digital Co., Ltd. ',
            city: 'Bangkok',
            date: 'Jun. 2022 - Present',
            detail: [
                'Develop Website using HTML, CSS, React, Vue, Responsive',
                'Be in charge of all projects in part consultant of UX/UI'
            ]
        },
        {
            status: false,
            title: 'Web Designer',
            company: 'Bangkok Web Solution Co., Ltd.',
            city: 'Bangkok',
            date: 'Jan 2021 - May 2022',
            detail: [
                'Design UX/UI for overall the E-Learning products  and web application',
                'Create UI mockups and prototypes that can be used for consideration to develop good experiences for users',
                'Develop CMS website by Wordpress Elementor website builder'
            ]
        },
        {
            status: false,
            title: 'Graphic & Motion Designer',
            company: 'Bangkok Web Solution Co., Ltd.',
            city: 'Bangkok',
            date: 'Jan 2019 - Dec 2020',
            detail: [
                'Design banner and illustration logo for PR Marketing',
                'Create storyboard & motion graphic of courseware E-Learning'
            ]
        },
    ];


    const listExps = exps.map((exp, index) =>
        <div className={`steps-item ${exp.status ? "steps_current" : ""}`} key={index}>
            <div className="steps-item-container">
                <div className="steps-tail"></div>
                <div className="steps-item-icon">
                </div>
                <div className="steps-content">
                    <div className="steps-item-title">
                        <h4>{exp.title}</h4>
                        <small>{exp.company}⋅{exp.city}⋅{exp.date}</small>
                    </div>
                    <div className="steps-item-description">
                        <ul>
                            {exp.detail.map(detail => (
                                <li key={detail}>{detail}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
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
                            <div className="resume-download">
                                <Link className="btn-download" href="resume_apiwat-anekboon.pdf" target="_blank">Download Resume</Link>
                            </div>
                            <h2>Apiwat Anekboon</h2>
                            <span>Web Designer </span><span>City, Bangkok</span>
                        </div>
                        <div className="resume-box">
                            <h4>Apply for</h4>
                            <p>Date of Availability : <span className="chip-d">Finding a new job </span></p>
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
                        <div className="resume-download">
                            <Link className="btn-download" href="resume_apiwat-anekboon.pdf" target="_blank">Download Resume</Link>
                        </div>
                        <h2>Apiwat Anekboon</h2>
                        <span>Web Designer </span><span>City, Bangkok</span>
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
                                        <small>RMU : Maha Sarakham</small>  <br />
                                        <small>Oct. 2013 - Nov. 2017 </small>  <br />
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="resume-box">
                            <h4>Projects</h4>
                            <Link href="#">
                                <div className="card-resume">
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
        </>
    );
}
