import React from "react"
import SkillsList from "../elements/SkillsList"
import Resume from "../../resume.json"

function Skills() {
    return(
        <section className="section" id="skills">
            <div className="containerForSkill">
                <h1 className="titleskill" >TECHNICAL SKILLS
                <span class="underline"></span>
                </h1>
                <div className="skillContainer">
                
                <div className="skillTextSection">

                    <h2 className="skillText">I've worked with a wide variety of programming languages. For web applications I use PHP and Javascript. Whenever I need the most performance possible I obviously go with C++ and finally when I am building prototypes or working on my hobby projects I fall back on Python</h2>
                </div>
            </div>

                <div className="skillContainer" id = "hozdiv">

                        <h1 id="lang">Java </h1>
                        <h1 id="lang">Kotlin </h1>
                        <h1 id="lang">Swift</h1>
                        <h1 id="lang">Node.js</h1>
                        <h1 id="lang">Flutter</h1>
                       
                
                    </div>

                <div className="skillContainer"> 
                
                    <h3 className="skillText" id="bigtext">MOST FREQUENTLY USED TOOLS</h3>

                </div> 

                <div className="skillContainer" id ="containerSkill">

                   

                     
                <div className="frameworks" id = "tools">
                        <h1  id="langT" >FRAMEWORKS</h1>

                            <ul >
                                <li>Andorid Studio</li>
                                <li>Node.js</li>
                                <li>Xcode</li>
                                <li>PHP</li>
                                <li>Flutter</li>
                                
                        </ul>


                </div>
                    <div className="frameworks" id="tools">
                            <h1 id="langT" >SOFTWARE</h1>

                        <ul >
                            <li>Windows & Linux</li>
                            <li>Git</li>
                            <li>SQL</li>
                            <li>Postgres & Firebase</li>
                            <li>Heruku</li>
                        </ul>


                    </div>








                </div>   

               


               
            </div>
        </section>
    )
}

export default Skills