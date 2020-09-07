import React from 'react';
import 'react-dom';
// import 'fomantic-ui';

class UserCard extends React.Component {
    state = {
        username: '',
        image: '',
        description: '',
        location: '',
        followers: ''
    }

    componentDidMount() {
        fetch('https://api.github.com/users/PLisak777')
        .then((res) => res.json())
        .then((json) => {
            console.log('pl: UserCard.js: UserCard: CDM: fetch result: ', json);
            this.setState({
                username: json.name,
                image: json.avatar_url,
                description: json.bio,
                location: json.location,
                followers: json.followers
            })
            
        }).catch((err) => console.error('Failure to load user', err.message));
    }

    render() {
        return (
            <aside className="card">
                <header>
                    <a href='https://github.com/PLisak777'>
                        <img src={this.state.image} alt='avatar' />
                    </a>
                    <h1>{this.state.username}</h1>
                    <h2>{this.state.description}</h2>
                    <h4>{this.state.followers} Followers.</h4>
                </header>
                <div className='bio'>
                    <p>Hi there!</p>
                    <p>I am a {this.state.description} living in {this.state.location}, on my way to becoming a full stack web developer. I primarily work with HTML, CSS, and JavaScript</p>
                    
                </div>
            </aside>
        )
    }
}

export default UserCard
