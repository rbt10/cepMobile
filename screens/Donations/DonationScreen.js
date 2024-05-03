import { Linking, Button } from 'react-native';

import React from 'react'


const donationUrl = 'https://cep-resurrection.org/faire-un-don/';

const DonationScreen = () => {
  const handleOpenUrl = async () => {
    const supported = await Linking.canOpenURL(donationUrl);
    if (supported) {
      await Linking.openURL(donationUrl);
    } else {
      console.error("Impossible d'ouvrir l'URL : " + donationUrl);
    }
  };

  return (
    <Button
      title="Faire un don"
      onPress={handleOpenUrl}
    />
  );
};

export default DonationScreen;
