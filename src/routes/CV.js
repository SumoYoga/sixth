import React from 'react'
import Section from '../components/Section'

import Markdown from 'react-markdown'
import '../styles/cv.scss'
import catTyping from '../assets/cv.png'

const md = `
# CV

|  |
| - |
| Michael Lothar Petersen |
| Rundforbiparken 6B st tv |
| 2850 Nærum, Denmark |
| Tlf: +45 5184 8584 |



### Professional Profile

MLP is a Senior Frontend Developer with strong related competences in frontend development, architecture, setup, best practices, GUI/E2E test and optimization. 
MLP is very experienced in agile development and methodologies, is a certified ScrumMaster, and has experience in a Scrum Master/developer position in a large scaled agile setup (SAFe). 
He is also a JavaScript and CSS expert with related competences in Mobile First development (responsive web design) and performance optimization.

MLP has worked primarily with the following technologies: 

- *Javascript (ES5/ES6), AngularJS, ReactJS, MithrilJS, C#, Protractor, Jasmine*
- *CSS (SCSS, Less, PostCSS, CSS Next, BEM, Bootstrap, Google Material, Bulma)*
- *Git, NodeJS, Docker, Gulp, Grunt, Webpack, Socket.io, Jenkins, Atlassian products, APIs and REST*



### Career Summary

** August 2017 - October 2017, Freelance Frontend Developer at Agnitio **

> Freelance Frontend Developer in a development team consisting of only remote developers, in Poland and Malaysia.
> The application I helped develop were sharing presentations with questionnaires for users mainly in the medical and pharma industry.
> The application had a PHP and C# backend, with an older AngularJS frontend, which were embedded into Webkit to be used on iPad and Android tablets. 
> My role were to implement new features in AngularJS, while at the same time modernize and improve upon the performance of AngularJS. 
> I also introduced E2E testing, switched to PostCSS (SCSS) and more.

> Technologies used:

- *AngularJS, Javascript (ES6), Protractor, Jasmine*
- *CSS (PostCSS/SASS with BEM)*
- *NodeJS, Git, Docker, Grunt, Socket.io*

** March 2017 - May 2017, Freelance Frontend Developer at Tonica Elektronik **

> Freelance Frontend Developer in a development team consisting of three backend developers and myself, responsible for building a new platform for TMS therapy used for treatment of major depressive disorder. The platform were developed with a desktop and an Android interface, with a PHP backend and HTML5, CSS3, jQuery/JavaScript and ChartJS frontend.

> My responsibilities/actions were:

- Help find the requirements of the system in terms of producing a viable working solution to be presented at a major conference in the US, mid May 2017
- Sketching, paper and Photoshop prototyping
- Implement UX and UI best practices
- Decide on and develop final design of desktop and app userinterfaces
- Develop all the frontend related code, to be handed over to backend developers

> Technologies used:

- *Javascript (ES6), jQuery, ChartJS*
- *CSS (CSS Next/SASS with BEM), Bootstrap*
- *NodeJS, Gulp, Sketch, Photoshop*

** December 2016 - February 2017, System Developer at Bluegarden **

> My team were responsible for salary reporting and integration applications, originally developed in a AngularJS/ASP.NET hybrid by the teams backend developers. My role were to create a more structured frontend application, resulting in more or less a complete rewrite of the code base, as well as introduce testing on the frontend. I also introduced best practices for AngularJS, JavaScript and CSS, and helped start up a UX/UI team to try and unify the look and feel of Bluegarden's applications, by trying to align on a common style guide.

> Technologies used: AngularJS, JavaScript, Bootstrap, Gulp, CSS (PostCSS), Yarn, Protractor, Jasmine/Karma, GIT, TFS, NodeJS, HTML, Photoshop.



** January 2014 - November 2016, Scrummaster and Senior Developer at Nordea **

> In my first half year at Nordea I worked on a project called Financial Planning Tool (FPT), which helps an advisor make plans for a customer's investments and pension. My primary area of expertise were with GWT/Java development, as well as CSS and GUI assignments, in a Scrum team of around 15 Danish and Indian developers. Due to my expertise in the design area, I was given some liberties to improve the look and feel of the application, as well as the advisor print out with assisting graphs and graphics, fonts and colour.

> In July 2014 I was assigned to a pilot project with three backend developers, which purpose were to investigate possibilities and challenges of moving the code platform from GWT to AngularJS, with a separate Java backend. Here I introduced a number of different tools, such as Yeoman, Grunt/Gulp, SASS, Bootstrap, Foundation, NodeJS and npm. The application we worked on were a tool to display a customer's financial profile, pension, assets and liabilities. The project was a success, and since 2015 all new projects in the department were developed the same way. As the only frontend developer in the department I was in charge of screening and hiring new frontend developers, both Danish full time employees, but also Indian consultants which were then relocated to Copenhagen.

> Since February 2016 I was still working with the above as a frontend developer, but at the same time took the role of ScrumMaster for my team. The department at that time had grown to seven Scrum teams, working in a Scaled Agile Framework (SAFe) environment, with most of the developers placed in Copenhagen, the rest in Mumbai. Our designers, product managers, product owners and business helpers were placed throughout Norway, Sweden, Finland and Denmark. As a ScrumMaster coming from a developer background, I became a natural centre of involvement and a co-ordinator for much of the development around the implementation and execution of SAFe in the department. I enjoyed the possibilities of using the API's of our Scrum tools, JIRA and Confluence, to extract information and create visibility of our organisation's Agile progress.

> Technologies used: AngularJS, JavaScript, Bootstrap, Angular Material, CSS (SASS), NodeJS, npm, GWT, Java, Foundation, Jenkins, Unix, Atlassian APIs (Jira and Confluence), Gulp, Grunt, Unix, HTML, Photoshop.


** January 2012 - December 2013, Project Engineer at Krüger **

> Officially hired part time between a sewage and wastewater engineering department and an IT development department, but practically spent most of the time in the development department. My primary area of expertise in both departments were software related, where I in the engineering department developed tools in Microsoft Excel (VBA) and ArcMap (Python), as well as other GIS, modeling and data analysis tools.In the development department i developed in GWT, Java, HTML and CSS. I was the lead UI/UX responsible on Krüger's online platform STAR, which supervises and remotely controls running operations of sewage treatment plants, sewer overflows and overflow basins in Denmark and abroad. This was also in a Scrum environment, but with only three backend developers and myself. My main progress for new ideas was to sketch them up in Photoshop, then get approval for developing rapid fully functional prototypes in HTML/CSS, followed by finally programming it in GWT/Java.

> Technologies used: GWT, Java, HTML, CSS, VBA, Python.



** September 2009 - December 2011, Project Engineer Assistant at Krüger **

> Primary area of expertise were within planning of sewage systems, flood analysis, optimizing and calibrating radar rain forecasts, general data analysis, modeling tasks, and developing tools with Microsoft Excel (VBA).



** 2004 - 2006, Freelance, creative developer/designer at Republica **

> Developed advertising campaigns as well as programmed in HTML, CSS, Photoshop and Flash, for companies like Carlsberg and COOP. Maintained and updated home pages of various clients.


** 2000 - 2006, Freelance developer/designer **

> Developed and administered home pages and templates to e.g. WordPress, phpBB2 and bbPress. Reached a Google Pagerank 8 on my personal home page, with more than four million backlinks from all over the world, including an american president candidate, the rapper and actor The Game, and Kylie Minogue, whom all used my templates on their online fan communities. Gained a lot of knowledge about UI/UX development in this period.


### Education & Qualifications

- Sep. 2011 - Jan. 2012		Technical University of Denmark (TUD), supplement courses
- Sep. 2007 - Jul. 2011		TUD, degree in Construction Engineering
- Sep. 2006 - Jul. 2007		TUD, acceptance courses

### Skills & Interests

> Since 2000 I've had a strong interest in design development, which drove me to learn Photoshop and HTML/CSS at a high level, in order to visualize my ideas. I like to be creative and find ways to optimize and improve things. I consider myself very good at JavaScript, AngularJS, CSS/SASS, NodeJS and npm, GIT, Unix, Jenkins and more, but I find rest in knowing that my curious nature drive me to quickly pick up on new things when I need it.


### Personality

> Outgoing, good team skills. I like to be "in the zone", and I like to work in a skilled team with the same ambitions as me. As a Scrum Master I had the role to remove impediments for the team, in order for the team to be more productive. I think that role suited me well, and tells some things about my personality. I like to be busy, and I like to be in a busy environment, knowing we're working towards a common goal. I appreciate code quality, code review, code guidelines and such.


### In My Spare Time

> I spend quite some time on studying and reading up on especially VueJS, JavaScript and CSS related books and sites like Udemy, Pluralsight, Hacker News and similar. I also have a small sailboat, and enjoy spending time with my family and my 4 year old daughter.



`

const contactDetails = `
# Michael Lothar Petersen
## Frontend Developer
Address: Rundforbiparken 6B st tv, 2850 Nærum, Denmark<br>
Contact Number: [+45 51 84 85 84](tel:+51848584)<br>
Email Address: [hello@sixth.dk](mailto:hello@sixth.dk)
`

const professionalSummary = `
## Professional summary
Frontend Developer with strong related competences in frontend development, architecture, setup, best practices, GUI/E2E test and optimization.

Lorem ipsum frontend Developer with strong related competences in frontend development, architecture, setup, best practices, GUI/E2E test and optimization.
Lorem ipsum frontend Developer with strong related competences in frontend development, architecture, setup, best practices, GUI/E2E test and optimization.
`

const educationalBackground = `
## Educational background
Frontend Developer with strong related competences in frontend development, architecture, setup, best practices, GUI/E2E test and optimization.
`

const careerObjective = `
## Career objective
To become a reliable network engineer who will be 
able to assist the company or organization towards
achieving its missions & goals.
`

const employmentExperience = `
## Employment experience
### Aruba Networks
MLP is a Senior Frontend Developer with strong related competences in frontend development, architecture, setup, best practices, GUI/E2E test and optimization.

### Lorem Aruba Networks
MLP is a Senior Frontend Developer with strong related competences in frontend development, architecture, setup, best practices, GUI/E2E test and optimization.

Lorem ipsum MLP is a Senior Frontend Developer with strong related competences in frontend development, architecture, setup, best practices, GUI/E2E test and optimization.

`

const Index = () => {
  return (
    //   { /*<div className="CV">*/ }
    // {/*<CvSection source={employmentExperience} />*/
    // }
    // {/*<Markdown source={md} />*/
    // }
    // {/*</div>*/
    // }

    <div>
      <div
        className="Background"
        style={{ backgroundImage: `url(${catTyping})` }}
      />

      <div className="container">
        <div className="row">
          <div className="column column-42 test-left">
            <div className="portrait" />

            <Section source={professionalSummary} />
            <Section source={educationalBackground} />
          </div>
          <div className="column test-right">
            <Section source={contactDetails} />
            <div className="separator" />

            <Section source={careerObjective} />
            <Section source={employmentExperience} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
