import React, { Component } from 'react'
import { StyleSheet,Text, View } from 'react-native'
import PropTypes from 'prop-types';

export default class Card extends Component {
    render() {
        const{text} = this.props;
        const{title} = this.props;
        return (
            <View >
                <Text style = {styles.cardTitle}> {title} </Text>
                <Text style = {styles.cardDescription}> {text} </Text>
            </View>
        )
    }
}
Card.PropTypes={                        // propTypes gelen verinin gereksinimlerini belirtir.
    text:PropTypes.string,
    title:PropTypes.string.isRequired   
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    cardTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    cardDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });