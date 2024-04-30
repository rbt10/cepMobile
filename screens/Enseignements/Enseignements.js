import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { fetchPlaylists } from '../../api/fetchPlaylists'; // Importer la fonction de requête API

const Enseignements = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const playlistId = 'ID_DE_LA_PLAYLIST'; // Remplacer par l'identifiant de votre playlist
    const fetchVideos = async () => {
      const videosData = await fetchPlaylists(playlistId);
      setVideos(videosData);
    };
    fetchVideos(); 
  }, []);

  const handleVideoPress = (videoId) => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    Linking.openURL(youtubeUrl);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vidéos de la Playlist</Text>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.videoItem}
            onPress={() => handleVideoPress(item.snippet.resourceId.videoId)}
          >
            <Text style={styles.videoTitle}>{item.snippet.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  videoItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Enseignements;
