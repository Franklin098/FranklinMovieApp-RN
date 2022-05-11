import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export default function CastItem({actor}: Props) {
  const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

  return (
    <View style={styles.cardContainer}>
      {actor.profile_path && <Image source={{uri}} style={styles.actorImage} />}
      <View style={styles.actorInfoContainer}>
        <Text style={styles.nameText}>{actor.name}</Text>
        <Text style={styles.characterText}>{actor.character}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    marginLeft: 20,
    paddingRight: 15,
    height: 50,
  },
  actorImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  actorInfoContainer: {
    marginLeft: 10,
    marginTop: 4,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  characterText: {
    fontSize: 16,
    opacity: 0.7,
  },
});
