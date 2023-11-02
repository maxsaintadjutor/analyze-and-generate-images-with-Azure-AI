const axios = require('axios');

async function analyzeImage(imageUrl) {
  const subscriptionKey = 'cc99fdc4019f41bf945a9936530d52ba'; // Remplacez par votre clé d'abonnement Azure AI Vision.
  const endpoint = 'https://maxsaintadjutor.cognitiveservices.azure.com/'; // Remplacez par l'URL de l'endpoint de votre service.

  const url = `${endpoint}/vision/v4.0/analyze?visualFeatures=Description,Tags&details=Landmarks,Adult`;

  const headers = {
    'Ocp-Apim-Subscription-Key': subscriptionKey,
    'Content-Type': 'application/json',
  };

  const data = {
    url: imageUrl,
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'analyse de l\'image :', error);
    return null;
  }
}

module.exports = analyzeImage;
