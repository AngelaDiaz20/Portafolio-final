import React from 'react'
import { useState, useEffect } from 'react'
import ReactPaginate from "react-paginate";

import { RxDoubleArrowRight, RxDoubleArrowLeft } from 'react-icons/rx'
import {HiOutlineMail} from 'react-icons/hi'
import {SiMinutemailer, SiLinkedin} from 'react-icons/si'

import Button from '../components/common/Button';
import Footer from '../components/layouts/Footer'

import Filter from '../components/common/Filter';
import SkillCircle from '../components/common/SkillCircle';
import CardProject from '../components/common/CardProject'
import Projects from '../data/projects'

import RobotAbout from '../assets/img/robot-about.png'
import RobotPlan from '../assets/img/robot-plan.png'
import RobotDesign from '../assets/img/robot-design.png'
import RobotCode from '../assets/img/robot-coding.png'
import RobotDeploy from '../assets/img/robot-deploy-2.png'
import SkillsDesign from '../assets/img/skills-design.png'
import SkillsCode from '../assets/img/skills-code.png'
import BgFooter from '../assets/img/background-footer.png'

const SkillsImage = require.context("../assets/img/skills", true);

function Home () {


  const [search, setSearch] = useState("");
    const [allProjects, setAllProjects] = useState(Projects);

    const searchedProject = allProjects.filter((item) => {
        if (search.value === "") return item;

        if (item.name.toLowerCase().includes(search.toLowerCase())) return item;
    });

    const [category, setCategory] = useState("All");

    // Pagination
    const [pageNumber, setPageNumber] = useState(0);

    const projectPerPage = 6;

    const visitedPage = pageNumber * projectPerPage;

    const displayPage = searchedProject.slice(
        visitedPage,
        visitedPage + projectPerPage
    );

    const pageCount = Math.ceil(searchedProject.length / projectPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };


    useEffect(() => {
        if (category === "All") {
            setAllProjects(Projects);
        }

        if (category === "ReactJs") {
            const filteredProjects = Projects.filter(
                (item) => item.category.ReactJs === true
            );
            setAllProjects(filteredProjects);
        }

        if (category === "Javascript") {
            const filteredProjects = Projects.filter(
                (item) => item.category.Javascript === true
            );
            setAllProjects(filteredProjects);
        }

        if (category === "Sass") {
            const filteredProjects = Projects.filter(
                (item) => item.category.Sass === true
            );
            setAllProjects(filteredProjects);
        }
    }, [category]);

  return (
    <> 
      <section className='banner'>
        <div className='banner-content'>
          <h1>Hi, I'm Angela</h1>
          <h2>web developer</h2>
          <Button text="Contact me!" class="btn-home"/>
        </div>
      </section>

      <section className='about'>
        <div className='container'>
          <h1>About me</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, placeat dignissimos esse quidem ad earum voluptatibus aut officia aperiam sapiente voluptatem ipsa at aliquam fugiat! Repellat enim numquam accusantium sit?</p>
        </div>

        <img src={RobotAbout} alt="Robot"/>
        <div className='circle'></div>
      </section>

      <section className='skills-summary'>
        <SkillCircle image={RobotPlan} name="Plan"/>
        <SkillCircle image={RobotDesign} name="Design"/>
        <SkillCircle image={RobotCode} name="Code"/>
        <SkillCircle image={RobotDeploy} name="Deploy" classImage="robot-deploy" classContainer="deploy"/>
      </section>

      <section className='skills'>
        <article>
          <div className='container-robot'>
            <img src={SkillsDesign} alt="Robot design skills"/>
          </div>
          <div className='list-skills'>
              <div className='card-skill'>
                <img src={SkillsImage(`./figma.png`)} alt="" />
                <p>FIGMA</p>
              </div>
              <div className='card-skill'>
                <img src={SkillsImage(`./ilustrator.png`)} alt="" />
                <p>A. ILUSTRATOR</p>
              </div>
          </div>
        </article>
        <article>
          <div className='container-robot'>
            <img src={SkillsCode} alt="Robot code skills"/>
          </div>
          <div className='list-skills'>
              <div className='card-skill'>
                <img src={SkillsImage(`./css.png`)} alt=""/>
                <p>CSS</p>
              </div>
              <div className='card-skill'>
                <img src={SkillsImage(`./html.png`)} alt=""/>
                <p>HTML</p>
              </div>
              <div className='card-skill'>
                <img src={SkillsImage(`./js.png`)} alt=""/>
                <p>JAVASCRIPT</p>
              </div>
              <div className='card-skill'>
                <img src={SkillsImage(`./sass.png`)} alt=""/>
                <p>SASS</p>
              </div>
              <div className='card-skill'>
                <img src={SkillsImage(`./bootstrap.png`)} alt=""/>
                <p>BOOTSTRAP</p>
              </div>
              <div className='card-skill'>
                <img src={SkillsImage(`./react.png`)} alt=""/>
                <p>React</p>
              </div>
              <div className='card-skill'>
                <img src={SkillsImage(`./python.png`)} alt=""/>
                <p>Python</p>
              </div>
          </div>
        </article>
      </section>

      <h1 className='title-separators'>Web developer portfolio</h1>

      {/* category filters */}
      <div className='filters'>
        <Filter category={category} setCategory={setCategory} name="All"/>
        <Filter category={category} setCategory={setCategory} name="ReactJs"/>
        <Filter category={category} setCategory={setCategory} name="Javascript"/>
        <Filter category={category} setCategory={setCategory} name="Sass"/>
      </div>

      <section>
        <div className='projects-cards'>
          {displayPage.map((item)  => (
            <CardProject
              key={item.id}
              item={item}
            />
            ))}
        </div>

        <div className="container_paginate">
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={changePage}
            previousLabel={<RxDoubleArrowLeft/>}
            nextLabel={<RxDoubleArrowRight/>}
            containerClassName="paginationBttns"
            activeClassName={"active_pagination"}
          />
        </div>
      </section>

      <section className='contact'>
        <img src={BgFooter} alt="Imagen espacio"/>
          <div className='content'>
          <h1 className='title-separators'>Contact me</h1>
          <div className='contact-information'>
            <article>
                <HiOutlineMail className='icon'/>
                <h4>angeldi846@gmail.com</h4>
                <p>Send message <SiMinutemailer/></p>
            </article>
            <article>
                <SiLinkedin className='icon'/>
                <h4>angeldi846@gmail.com</h4>
                <p>Send message <SiMinutemailer/></p>
            </article>
          </div>
        </div>
      </section>


      <Footer/>
    </>
  )
}

export default Home
