import React from 'react';
import { View, Button } from "react-native";
import { MapView } from 'expo';

export default class App extends React.Component {

  state = {
    locs: [
      {
        latitude: 37.7838,
        longitude: -122.422,
      },
      {
        latitude: 37.7008,
        longitude: -122.102,
      }
    ],
    activeUser: 1
  }

  addLocation(number) {
    
    setTimeout(() => {
      const newLocs = this.state.locs;
      newLocs.push({
        latitude: 37.0 + Math.random(),
        longitude: -122.0 + Math.random(),
      });
      this.setState({ locs: newLocs, activeUser: 2 });
    }, 3000);
  }

  render() {
    var marker = [];
    for (var i = 0; i < this.state.locs.length; i++) {
      marker.push(
        <MapView.Marker
          key={i}
          title={`User ${i}`}
          coordinate={this.state.locs[i]}
          onPress={() => {
            alert('My Name' + i)
          }}
        />
      );
    }

    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <MapView
          style={{ flex: 1
           }}
          region={{
            ...this.state.locs[this.state.locs.length - 1],
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {
            marker
          }
          
        </MapView>
        <Button title={'Add Location'} onPress={() => this.addLocation('My Number')}/>
      </View>
      
    );
  }
}