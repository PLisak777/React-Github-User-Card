import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

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
        })
    }


    render() {
        return (
                <Card>
                    <Image src={this.state.image} wrapped-iu='false' />
                    <Card.Content>
                        <Card.Header>{this.state.username}</Card.Header>
                        <Card.Meta>{this.state.description}</Card.Meta>
                        <Card.Description>{this.state.username} is a {this.state.description} living in {this.state.location}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            {this.state.followers} Followers
                        </a>
                    </Card.Content>
                </Card>
        )
    }
}

export default UserCard
