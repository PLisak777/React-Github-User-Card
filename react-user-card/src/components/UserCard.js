import React from 'react';
import 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

class UserCard extends React.Component {
    state = {
        username: '',
        image: '',
        description: '',
        location: '',
        followers: ''
    }

    // classes = useStyles();

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
                <Card>
                    <CardHeader
                    avatar={
                        <Avatar aria-label='image'>
                            {this.state.image}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label='settings'>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={this.state.username}
                    subheader={this.state.description}>
                    </CardHeader>
                    
                        
                        <CardContent>
                            <Typography>{this.state.description}</Typography>
                            </CardContent>
                        <CardContent>
                            <Typography>
                            {this.state.username} is a {this.state.description} living in {this.state.location}
                            </Typography>
                            </CardContent>
                    <CardContent>
                        <a>
                            <IconButton aria-label='Add to Favorites' />
                                <FavoriteIcon />
                                {this.state.followers} Followers
                        </a>
                    </CardContent>
                </Card>
        )
    }
}

export default UserCard
