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

                    <div className="card">
                            <div className="card-header">
                                <a href="https://play.google.com/store/apps/details?id=com.syntex_error.foodpin" target="blank"><p className="card-header-title">Foodpin</p></a>
                                <a href="https://play.google.com/store/apps/details?id=com.syntex_error.foodpin" target="blank" className="card-header-icon" aria-label="Play Store">
                                    <span className="icon">
                                        <i className="fab fa-2x fa-google-play"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="card-image">
                                <figure className="cardimage">
                                    <img src="https://play-lh.googleusercontent.com/4_tkmn8RPWInLHL6QxEgeLvsysB2wjCJOsax8EJ86s2vGPB3XldZ1D0hZIMnE95XbKY=s300-rw" alt="" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <h1 className="heading" id="stack">Kotlin,Lumen,Navigation</h1>
                                <div className="content">
                                    <p>Food Reviews , Offers, Social Media</p>
                                </div>
                                <a href="https://play.google.com/store/apps/details?id=com.syntex_error.foodpin" target="blank">Check This Project</a>
                            </div>
                        </div>



                        <div className="card">
                            <div className="card-header">
                                <a href="https://apps.apple.com/us/app/afiqsouq/id1565658028" target="blank"><p className="card-header-title">Afiq Souq IOS </p></a>
                                <a href="https://apps.apple.com/us/app/afiqsouq/id1565658028" target="blank" className="card-header-icon" aria-label="Play Store">
                                    <span className="icon">
                                        <i className="fab fa-2x fa-app-store-ios"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="card-image">
                                <figure className="cardimage">
                                    <img src="https://play-lh.googleusercontent.com/IhjDtNrsJsFVS8fqnuTkmfBjhoBoyDo3tmSBYddUTstl9wo6-3bRYBMuyg9j9map5lAo=s300-rw" alt="" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <h1 className="heading" id="stack">SwiftUI,RestApi,OneSignal</h1>
                                <div className="content">
                                    <p>An Ecommerce Platform For Native IOS User. </p>
                                </div>
                                <a href="https://apps.apple.com/us/app/afiqsouq/id1565658028" target="blank">Check This Project</a>
                            </div>
                        </div>


                        
                    <div className="card">
                            <div className="card-header">
                                <a href="https://play.google.com/store/apps/details?id=dev.mobile.afiqsouq" target="blank"><p className="card-header-title">Afiq Souq</p></a>
                                <a href="https://play.google.com/store/apps/details?id=dev.mobile.afiqsouq" target="blank" className="card-header-icon" aria-label="Play Store">
                                    <span className="icon">
                                        <i className="fab fa-2x fa-google-play"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="card-image">
                                <figure className="cardimage">
                                    <img src="https://play-lh.googleusercontent.com/IhjDtNrsJsFVS8fqnuTkmfBjhoBoyDo3tmSBYddUTstl9wo6-3bRYBMuyg9j9map5lAo=s300-rw" alt="" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <h1 className="heading" id="stack">Java,RestApi,OneSignal</h1>
                                <div className="content">
                                    <p>An Ecommerce Platform. </p>
                                </div>
                                <a href="https://play.google.com/store/apps/details?id=dev.mobile.afiqsouq" target="blank">Check This Project</a>
                            </div>
                        </div>


                    <div className="card">
                            <div className="card-header">
                                <a href="https://play.google.com/store/apps/details?id=com.metacoders.cakri" target="blank"><p className="card-header-title">Chakri</p></a>
                                <a href="https://play.google.com/store/apps/details?id=com.metacoders.cakri" target="blank" className="card-header-icon" aria-label="Play Store">
                                    <span className="icon">
                                        <i className="fab fa-2x fa-google-play"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="card-image">
                                <figure className="cardimage">
                                    <img src="https://play-lh.googleusercontent.com/Hx8cDCKo5uy588oHGFfRBRYNUXut1qQHgZqCMuKP1bXSzZv044LCzyqLb7rUJLj-ZGY=s250-rw" alt="" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <h1 className="heading" id="stack">Java,Lumen</h1>
                                <div className="content">
                                    <p>Education And Govt. Job Seeker Platform. </p>
                                </div>
                                <a href="https://play.google.com/store/apps/details?id=com.metacoders.cakri" target="blank">Check This Project</a>
                            </div>
                        </div>


                        <div className="card">
                            <div className="card-header">
                                <a href="https://play.google.com/store/apps/details?id=com.metacodersbd.parcello" target="blank"><p className="card-header-title">Parcelon</p></a>
                                <a href="https://play.google.com/store/apps/details?id=com.metacodersbd.parcello" target="blank" className="card-header-icon" aria-label="Play Store">
                                    <span className="icon">
                                        <i className="fab fa-2x fa-google-play"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="card-image">
                                <figure className="cardimage">
                                    <img src="https://play-lh.googleusercontent.com/Ws2tfFur2El3TO-2W6aAFSNpa2pY1cUfT2LS7GEhw9UmWA5feFQUY7le24EgPyaZR6I=s250-rw" alt="" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <h1 className="heading" id="stack">Java,Firbase</h1>
                                <div className="content">
                                    <p>Food And Grocery Delivery App.</p>
                                </div>
                                <a href="https://play.google.com/store/apps/details?id=com.metacodersbd.parcello" target="blank">Check This Project</a>
                            </div>
                        </div>



                       
                      
                      

                     
                    </div>

                    <div className="columns">
                    <div className="card">
                            <div className="card-header">
                                <a href="https://play.google.com/store/apps/details?id=com.syntex.stories" target="blank"><p className="card-header-title">Vinci</p></a>
                                <a href="https://play.google.com/store/apps/details?id=com.syntex.stories" target="blank" className="card-header-icon" aria-label="Play Store">
                                    <span className="icon">
                                        <i className="fab fa-2x fa-google-play"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="card-image">
                                <figure className="cardimage">
                                    <img width="1000" height="420" src="https://lh3.googleusercontent.com/Our-O4XmkgTAgcoiPYt4TgLsYXi7L8SZDHYiW0-6WqmTh1MrZtJG_AThewdFr2hPAbU=s180-rw" alt="" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <h1 className="heading" id="stack">Java,Mysql,Onesignal</h1>
                                <div className="content">
                                    <p>An Soical App For Newton Iot Company. </p>
                                </div>
                                <a href="https://play.google.com/store/apps/details?id=com.syntex.stories" target="blank">Check This Project</a>
                            </div>
                        </div>



                    <div className="card">
                            <div className="card-header">
                                <a href="https://play.google.com/store/apps/details?id=com.metacodersbd.safeguard" target="blank"><p className="card-header-title">BakSoinik</p></a>
                                <a href="https://play.google.com/store/apps/details?id=com.metacodersbd.safeguard" target="blank" className="card-header-icon" aria-label="Play Store">
                                    <span className="icon">
                                        <i className="fab fa-2x fa-google-play"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="card-image">
                                <figure className="cardimage">
                                    <img width="1000" height="420" src="https://lh3.googleusercontent.com/oF3Bb8JeIpadDmOWesJdeq_OuGilBJ7e6rrVqHTvGImTQUjZXUJUHH7r-eUHoogUJQ=s180-rw" alt="" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <h1 className="heading" id="stack">Java,Mysql,Onesignal,Map</h1>
                                <div className="content">
                                    <p>An Emergency Response App Built For A Ngo</p>
                                </div>
                                <a href="https://play.google.com/store/apps/details?id=com.metacodersbd.safeguard" target="blank">Check This Project</a>
                            </div>
                        </div>

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
                                <div className = "overflow" > 
                                    <img src="../images/hb.jpg" alt="" />
                                    </div>
                            </figure>
                        </div>
                        <div className="card-content">
                                <h1 className="heading" id="stack">Java,Firebase,Onesignal</h1>
                            <div className="content">
                                <p>A Food Delivery App in Cumilla.</p>
                            </div>

                            <a   className = "hb" href="https://play.google.com/store/apps/details?id=com.metacodersbd.hungrybirds" target="blank">Check This Project</a>
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
                                <h1 className="heading" id="stack">Java,RestApi,Php</h1>
                                <div className="content">
                                    <p>A Media Streaming App For An Isp. </p>
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
                                <h1 className="heading" id="stack">Java,Firebase,Onesignal</h1>
                                <div className="content">
                                    <p>An App For Job Seekers in Bangladesh. </p>
                                </div>
                                <a href="https://play.google.com/store/apps/details?id=com.metacoders.home" target="blank">Check This Project</a>
                            </div>
                        </div>





                  
                    </div>


                    <div className="columns">

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
                                <h1 className="heading" id="stack">Java,RestApi,Gps,ButterKnife</h1>
                                <div className="content">
                                    <p>An Islamic Companion For Muslim BotherHood </p>
                                </div>
                                <a href="https://play.google.com/store/apps/details?id=org.sheba24.beauty.islam.prayer.time.quran.hadith" target="blank">Check The Project</a>
                            </div>
                        </div>


                    </div>

                    

                    
                </div>
            </section>
        )
    }
}

export default Projects