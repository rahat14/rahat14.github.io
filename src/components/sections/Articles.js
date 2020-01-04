import React, { Component } from "react"
import Article from "../elements/Article"


class Projects extends Component{

    constructor(props){
        super()
        this.state = {articles:[]}
    }

        loadData(){

           


        }


    componentDidMount(){

    const devTo = ""

        fetch(devTo)
            .then(response => {
                return response.json()
            })
            .then(data => {
                let articles = []
                data = data.slice(0,4)
                data.forEach((element, index) => {
                    articles.push(
                        <div className="column" key={index}>
                            <Article
                                key={index}
                                title={element.title}
                                url={element.url}
                                image={element.cover_image}
                                extract={element.description}
                            />
                        </div>
                    )
                });
                this.setState({articles: articles})
                //  {this.state.articles}
            })

            
    
       



    }

    render(){
        return (
            <section className="section" id="articles">
                <div className="container">
                    <h1 className="title">Projects</h1>
                    <h2 className="subtitle is-4">My latest Projects...</h2>
                    <div className="columns">
                      

                        <div className="card"  >
                            <div className="card-header">
                            <a href="https://play.google.com/store/apps/details?id=com.metacodersbd.hungrybirds" target="blank"><p className="card-header-title">Hungry Birds</p>
                                    
                            </a>
                                <a href="https://play.google.com/store/apps/details?id=com.metacodersbd.hungrybirds" target="blank" className="card-header-icon" aria-label="Play Store">
                                    <span className="icon">
                                        <i className="fab fa-2x fa-google-play"></i>
                                    </span>
                                </a>

                        </div>
                        <div className="card-image">
                            <figure className="cardimage" >
                                    <img src="../images/hb.jpg" alt="" />

                            </figure>
                        </div>
                        <div className="card-content">
                            <h1 className="heading">Java,Firebase,Onesignal</h1>
                            <div className="content">
                                <p>A Food Delivery Start-Up in Cumilla </p>
                            </div>
                            <a href="https://play.google.com/store/apps/details?id=com.metacodersbd.hungrybirds" target="blank">Check This Project</a>
                        </div>
                    </div>

                        <div className="card">
                            <div className="card-header">
                                <a href="https://play.google.com/store/apps/details?id=com.ksbnet.official" target="blank"><p className="card-header-title">Ksb Net</p></a>
                                <a href="https://play.google.com/store/apps/details?id=com.ksbnet.official" target="blank" className="card-header-icon" aria-label="Play Store">
                                    <span className="icon">
                                        <i className="fab fa-2x fa-google-play"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="card-image">
                                <figure className="cardimage">
                                    <img src="../images/ksb.jpg" alt="" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <h1 className="heading">Java,RestApi,Php</h1>
                                <div className="content">
                                    <p>A Streaming For An Isp </p>
                                </div>
                                <a href="https://play.google.com/store/apps/details?id=com.ksbnet.official" target="blank">Check This Project</a>
                            </div>
                        </div>
                

                        <div className="card">
                            <div className="card-header">
                                <a href="https://play.google.com/store/apps/details?id=com.metacoders.home" target="blank"><p className="card-header-title">Job Solution</p></a>
                                <a href="https://play.google.com/store/apps/details?id=com.metacoders.home" target="blank" className="card-header-icon" aria-label="Play Store">
                                    <span className="icon">
                                        <i className="fab fa-2x fa-google-play"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="card-image">
                                <figure className="cardimage">
                                    <img width="1000" height="420" src="https://lh3.googleusercontent.com/5Fz9FRQfw5TVrExsF0MCCtxTnvarv5kjeNoQX3VBaBPy4IHMMsrjUxEljH530xOJGUod=s180-rw" alt="" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <h1 className="heading">Java,Firebase,Onesignal</h1>
                                <div className="content">
                                    <p>An App For Job Seeker </p>
                                </div>
                                <a href="https://play.google.com/store/apps/details?id=com.metacoders.home" target="blank">Check This Project</a>
                            </div>
                        </div>





                        <div className="card" >
                            <div className="card-header" >
                                <a href="https://play.google.com/store/apps/details?id=org.sheba24.beauty.islam.prayer.time.quran.hadith" target="blank"><p className="card-header-title">Beauty Of Islam</p></a>
                                <a href="https://play.google.com/store/apps/details?id=org.sheba24.beauty.islam.prayer.time.quran.hadith" target="blank" className="card-header-icon" aria-label="Play Store">
                                    <span className="icon">
                                        <i className="fab fa-2x fa-google-play"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="card-image">
                                <figure className="cardimage">
                                    <img width="1000" height="420" src="https://lh3.googleusercontent.com/sMzdgOZQR7wINyFAKCNQjIlOC90ee9VZjmtxVgyQLqyYkhh47nX000GUyBhyOZPr-AcH=s180-rw" alt="" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <h1 className="heading">Java,RestApi,Gps,Map</h1>
                                <div className="content">
                                    <p>An Islamic Companion </p>
                                </div>
                                <a href="https://play.google.com/store/apps/details?id=com.metacoders.home" target="blank">Check The Project</a>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
        )
    }
}

export default Projects