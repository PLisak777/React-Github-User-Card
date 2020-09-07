import React from 'react';
import 'react-dom';
import 'fomantic-ui';

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
            <div className="ui card">
                <div className="image">
                <img src={this.state.image} alt='' />
                </div>
            <div className="content">
                <header className="header">{this.state.username}</header>
            <div className="meta">
                <span className="date">Joined in 2020</span>
            </div>
                <div className="description">
                {this.state.username} is a {this.state.description} living in {this.state.location}.
                </div>
            </div>
            <div className="extra content">
                <footer>
                <i className="user icon"></i>
                {this.state.followers} Followers
                </footer>
            </div>
            </div>
        )
    }
}

export default UserCard
