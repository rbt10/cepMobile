import { StyleSheet } from "react-native";
import { PADDING, TEXT_SIZE } from "../../outils/constantes";

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  sliderContainer: {
    height: 200,
    marginBottom: 10,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  homeImg: {
    width: 450,
    height: 240,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Alignement vertical au centre
    padding: 5,
  },
  horaireImg: {
    width: 130,
    height: 130,
    resizeMode: 'cover',
  },
  prog: {
    fontSize: TEXT_SIZE,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formation: {
    width: '100%',
    height: 150,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
    marginTop: 40, // Ajustez cette valeur pour définir l'espace en haut du logo
  },
});

export default homeStyle;
