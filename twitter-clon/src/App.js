import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';


import Header from './Layout/Header';
import Login from "./Login/Login";
import TweetList from "./Tweet/TweetList";
import TweetForm from "./Tweet/TweetForm";
import TweetDetail from "./Tweet/TweetDetail";
import CommentForm from "./Comment/CommentForm";

class App extends Component {
    // Si o si hay que estar logueado para ver los tweets.
    render() {
        return (
            <div className="App">
                <Header title={"Bienvenido a Twitter Clon!"}/>
                <BrowserRouter>
                    <main className="App-intro">
                        <Route path={"/"} component={Login} exact={true}/>
                        <Route path={"/tweetlist"} component={TweetList} exact={true}/>
                        <Route path={"/tweetform"} component={TweetForm} exact={true}/>
                        <Route
                            path={"/tweetdetail/:id"}
                            render={(props) => <TweetDetail id={props.match.params.id}/>}
                            exact={true}
                        />
                        <Route
                            path={"/tweetcoment/:tweetId"}
                            render={(props) => <CommentForm tweetId={props.match.params.tweetId}/>}
                            exact={true}
                        />

                        {
                            // Login /
                            // Tweet List /tweetlist
                            // Tweet Form (AM) /tweetform o tweetform/edit/:id
                            // Twett Detail con Comentarios /tweetdetail/:id
                            // Coments List (ABM)
                            // Coment Form (ABM)
                        }
                    </main>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
