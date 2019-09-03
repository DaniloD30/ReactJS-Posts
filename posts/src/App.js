import React, {Component} from "react";
import './styles.css'; 
import Header from './components/header';
import GlobalStyle from './components/styles/global'
class App extends Component {

    state = {
        newPostContent: '',
        posts: [],
    };

    handlePostSave = (e) => {
        e.preventDefault();

        const post = { content: this.state.newPostContent };
        this.setState({ posts : [...this.state.posts, post], newPostContent: '' });
    }


    render() {
        return ( 
            
            <div className="App">
               
                <Header />
                <form onSubmit={this.handlePostSave}>
                    <textarea placeholder="Digite aqui"id="input1"
                        onChange={e => this.setState({ newPostContent: e.target.value})}
                        value={this.state.newPosstContent}
                    /> 
                    <button type="submit">Postar</button>
                </form>

                <ul id="ul1">
                    { this.state.posts.map(post => (
                        <li id="li1" key={post.id}>{post.content}</li>
                    ))}
                 </ul>
                 <GlobalStyle />
            </div>
        );
    }
}

export default App;