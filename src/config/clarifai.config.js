import Clarifai from 'clarifai';
const _API_KEY = process.env.REACT_APP_CLARIFAI_API_KEY;

const ClarifaiConfig = {
  app: new Clarifai.App({
    apiKey: 2bbff85c4977486096b0e13e56100aed
  }),

  FACE_DETECTION: Clarifai.FACE_DETECT_MODEL

}

export default ClarifaiConfig;
