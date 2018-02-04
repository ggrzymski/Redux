import React, {Component} from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        // creating embedded google map, 2nd field is options object
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    render() {
        return (
            // this.refs.map
            <div ref="map" />
        );
    }
}

export default GoogleMap;