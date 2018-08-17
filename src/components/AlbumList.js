import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] }; // constructors , methord getinitial states

    componentWillMount() {
        //get , returns a promise 
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(res => {
            this.setState({ albums: res.data });
        });
    }

    // helper to generate list of albums 
    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
