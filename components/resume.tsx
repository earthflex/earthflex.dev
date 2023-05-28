import React from 'react';
import Link from 'next/link';
import { DataContext } from '@/context';
import { motion } from 'framer-motion';
import imageUrlBuilder from '@sanity/image-url'
import client from "@/client";
import { formatDate } from '@/lib/format';

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
    return builder.image(source)
}

export default function ResumeDetail({
    handleClose,
}: {
    handleClose: () => void;
}) {

    const { experience, profile } = React.useContext(DataContext);
    console.log(experience)
    // console.log(profile)

    const HeadResume = () => {
        return (
            <React.Fragment>
                <div className="resume-download">
                    {profile.length > 0 && profile[0].pdf && (
                        <Link
                            className="btn-download"
                            rel="noopener noreferrer"
                            href={profile[0].pdf.url}
                            target="_blank">
                            Download Resume
                        </Link>
                    )}
                </div>
                <h2 className="font-bold text-2xl"> 
                    {profile[0].fullname}
                </h2>
                <span>{profile[0].position}</span>
                <span>{profile[0].location}</span>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div className="resume-content md:flex">
                <div className="resume-left">
                    <div className="window-control hidden md:flex">
                        <button onClick={handleClose} className="control-r" aria-label="Close"></button>
                        <button className="control-y"></button>
                        <button className="control-g"></button>
                    </div>
                    <div className="scroll-l">
                        <div className="avatar-profile">
                            {profile[0].profileImg && (
                                <img src={urlFor(profile[0].profileImg.asset._ref).url()} alt="" />
                            )}
                        </div>
                        <div className="head-resume block md:hidden">
                            <HeadResume />
                        </div>
                        <div className="resume-box">
                            <h4 className="font-bold text-sm">Apply for</h4>
                            <p>Status :
                                <span className="chip-active">
                                    {profile[0].status}
                                </span>
                            </p>
                        </div>
                        <div className="resume-box">
                            <h4 className="font-bold text-sm">Skills</h4>
                            {profile.length > 0 && profile[0].skills && (
                                <motion.div
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.3, type: 'spring' }}
                                >
                                    {profile[0].skills.map((skill, index) => (
                                        <span className="chip-d" key={index}>
                                            {skill}
                                        </span>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                        <div className="resume-box">
                            <h4 className="font-bold text-sm">Code</h4>
                            {profile.length > 0 && profile[0].code && (
                                <motion.div
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.3, type: 'spring' }}
                                >
                                    {profile[0].code.map((skill, index) => (
                                        <span className="chip-d" key={index}>
                                            {skill}
                                        </span>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                        <div className="resume-box">
                            <h4 className="font-bold text-sm">Tools</h4>
                            {profile.length > 0 && profile[0].tools && (
                                <motion.div
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.3, type: 'spring' }}
                                >
                                    {profile[0].tools.map((skill, index) => (
                                        <span className="chip-d" key={index}>
                                            {skill}
                                        </span>
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        <div className="resume-box">
                            <h4 className="font-bold text-sm">Contact</h4>
                            <ul className="list-contact">
                                {profile.length > 0 && profile[0].contact && (
                                    <motion.div
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.3, type: 'spring' }}
                                    >
                                        {profile[0].contact.map((contact, index) => (
                                            <li key={index}>
                                                <Link href={contact.href} target={contact.newtab ? "_blank" : "_self"} rel={contact.newtab ? "noopener noreferrer" : ""}>
                                                    <i style={{ backgroundColor: contact.color.hex }}><img src={urlFor(contact.icon.asset._ref).url()} /></i>
                                                    {contact.detail}
                                                </Link>
                                            </li>
                                        ))}
                                    </motion.div>
                                )}

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="resume-right">
                    <div className="head-resume hidden md:block">
                        <HeadResume />
                    </div>
                    <div className="scroll-r">
                        <div className="resume-box">
                            <div className="box-exp">
                                <h2 className="title-exp font-bold text-xl">Work Experience</h2>
                                {experience.map((exp) => (
                                    <div className={`steps-item ${exp.current ? "steps_current" : ""}`} key={exp._id}>
                                        <div className="steps-item-container">
                                            {exp.roles.length <= 1 && (
                                                <div>
                                                    <div className="steps-tail"></div>
                                                    <div className="steps-item-icon"></div>
                                                </div>
                                            )}
                                            <div className="steps-content">
                                                <div className="steps-item-title">
                                                    {exp.roles.length === 1 ? (
                                                        <div>
                                                            {exp.roles.map((role, index) => (
                                                                <div key={index}>
                                                                    <div key={index}>
                                                                        <h5 className='font-bold text-md'>
                                                                            {role.position}
                                                                        </h5>
                                                                        <div>
                                                                            <h5>
                                                                                <small>{exp.company}</small>
                                                                                <small>
                                                                                    {role.startDate && formatDate(role.startDate)} -  {role.present ? 'Present' : role.endDate && formatDate(role.endDate)}
                                                                                </small>
                                                                            </h5>
                                                                            <div className="steps-item-description">
                                                                                <ul className="list-disc">
                                                                                    {role.detailRole ? role.detailRole.map((item, index) => (
                                                                                        <li key={index}>{item}</li>
                                                                                    )) : null}
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <div className="">
                                                            <h4 className='font-bold text-md'> {exp.company}</h4>
                                                            {exp.roles.map((role, index) => (
                                                                <div className='steps-exps-2' key={index}>
                                                                    <div className="steps-item-icon"></div>
                                                                    <h5 className='font-bold text-sm'>{role.position}
                                                                        <small>
                                                                            {role.startDate && formatDate(role.startDate)} -  {role.present ? 'Present' : role.endDate && formatDate(role.endDate)}
                                                                        </small>
                                                                    </h5>
                                                                    <div className="steps-item-description">
                                                                        <ul className="list-disc">
                                                                            {role.detailRole ? role.detailRole.map((item, index) => (
                                                                                <li key={index}>{item}</li>
                                                                            )) : null}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="resume-box">
                            <h4 className="font-bold text-md">Educations</h4>
                            {profile[0].educations.map((learn, index) => (
                                <div className="card-resume" key={index}>
                                    <div className="icon-card"> <img src="/education.png" alt="education" /></div>
                                    <div className="card-content">
                                        <h5 className="font-bold text-sm leading-tight">
                                            {learn.fieldofStudy}<br />
                                            <small>{learn.school}</small>  <br />
                                            <small>{learn.startMonth}. {learn.startYear} - {learn.endMonth}. {learn.endYear} </small>  <br />
                                        </h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="resume-box">
                            <h4 className="font-bold text-md">Works</h4>
                            <Link href="/works" onClick={handleClose}>
                                <div className="card-resume" >
                                    <div className="icon-card"> <img src="/project.png" alt="project" /></div>
                                    <div className="card-content">
                                        <h5 className='font-bold text-sm'>See all </h5>
                                    </div>
                                </div>
                            </Link >
                        </div>
                    </div >
                </div>
            </div>
        </React.Fragment>
    );
}
