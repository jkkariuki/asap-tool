import React from "react";
import { Results, ResultItem } from "../../components/Results";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { Col, Row, Container } from "../../components/Grid";
import "./HomeSearch.css";
import { FormBtn, Input } from "../../components/Form/"
import { release } from "os";
import asapLogo from "../../images/ASAP-Logo.png";

class HomeSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            college: "",
            results: [],
            saved: [],
            ignNews: []
        };
    }

    componentDidMount() {
        this.ignNewsSearch();
    }

    handleInputChange = (event) => {
        const target = event.target;

        const value = target.value

        const name = target.name;


        this.setState({
            [name]: value
        });
    }

    saveGame = (savedTitle, savedImage, savedDeck, releaseDate) => {
        API.saveGame({
            gameTitle: savedTitle,
            image_url: savedImage,
            description: savedDeck,
            release_date: releaseDate
        })
            .then(res => console.log(res))
            .catch(err => console.log("Save error: " + err));
    }

    ignNewsSearch = () => {

        API.getNews()

            .then(res => {
                console.log("news: " + res[0].url)
                let newsArray = [];

                for (let x = 0; x < res.length; x++) {
                    newsArray.push(res[x]);
                }
                this.setState({ ignNews: newsArray })
            })
            .catch(err => console.log(err));

    }


    handleSubmit = (event) => {
        event.preventDefault();
        API.getScholarships({College: this.state.college + ""})
            .then(res => {
                console.log(res)
                let resultArray = []
                for (let x = 0; x < res.data.length; x++) {
                    resultArray.push(res.data[x])
                }
                this.setState({
                    results: resultArray
                });
            })
            .catch(err => console.log("There is an error" + err));
    }

    render() {

        return (

            <div>
                <Container id="homeSearchContainer">
                    <Row id="searchRow">
                        <Col size="md-12  sm-12">
                            <img id="asapLogo" src={asapLogo}/>

                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12  sm-12">
                            <form size="col-md-12" id="searchRow" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input name="college" type="text" value={this.state.college} onChange={this.handleInputChange} />
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </Col>
                    </Row>
                    <Row>

                        <Col size="md-12  sm-12">

                            <Results>



                                {this.state.results.map(scholarship => {

                                    return (

                                        <ResultItem>
                                            <Row>
                                                <Col style={{ textAlign: "center",marginBottom:"30px"}} size="lg-12 md-12 sm-12">
                                                    
                                                    
                                                        <li style={{listStyle: "none"}}>{scholarship.Title}</li> 
                                                        <li style={{listStyle: "none"}}>{scholarship.Link}</li>
                                                        <li style={{listStyle: "none"}}>{scholarship.College}</li>
                                                        <li style={{listStyle: "none"}}>{scholarship.Award}</li>
                                                        <li style={{listStyle: "none"}}>{scholarship.Eligibility}</li>
                                                        <li style={{listStyle: "none"}}>{scholarship.Deadline}</li>
                                                    
                                                    {/* <button onClick={() => this.saveGame(game.name, game.image.medium_url, game.deck, game.original_release_date)}>Save to your games list</button> */}
                                                </Col>                                              

                                                
                                            </Row>

                                        </ResultItem>
                                    );

                                })}

                            </Results>
                        </Col>
                    </Row>
                    
                    {/* <Row>
                       
                        <div className="ticker-wrap">
                       
                            <div className="ticker">

                                {this.state.ignNews.map((story) => {

                                    return (

                                        <a className="ticker__item" href={story.url}>{story.title}</a>


                                    )

                                })}

                                
                            </div>
                        </div>
                    </Row> */}

                </Container>


            </div>
        );
    }

}

export default HomeSearch;
