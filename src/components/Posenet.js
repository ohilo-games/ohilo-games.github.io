import '../css/Posenet.css'

import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs-core';
import '@mediapipe/pose';
import '@tensorflow/tfjs-backend-webgl';
import Webcam from 'react-webcam';
import {useRef} from 'react'

import OnboardingMsg from './OnboardingMsg';
import PrivacyMsg from './PrivacyMsg';

export var keypoints;
export var camera;
export var webcamRef;

const Posenet = () => {

    const videoConstraints = {
        width: window.innerWidth,
        height: window.innerHeight,
        facingMode: "user"
    };
    const webcamRef=useRef(null);
  
    //Loading Model
    const loadPosenet = async() => {
      const detectorConfig = {modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING};
      const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, detectorConfig);
  
      // const model = poseDetection.SupportedModels.BlazePose;
      // const detectorConfig = {
      //   runtime: 'mediapipe',
      //   solutionPath:  'https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.3.1621277220'
      // };
      // const detector = await poseDetection.createDetector(model, detectorConfig);
      

      setInterval(() =>{
        detectPosenet(detector);
      },100)
    }
    // Box Tracking Enabled
    // const detectorConfig = {
    //   modelType: poseDetection.movenet.modelType.MULTIPOSE_LIGHTNING,
    //   enableTracking: true,
    //   trackerType: poseDetection.TrackerType.BoundingBox
    // };
    // const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, detectorConfig);
  
    const detectPosenet=async(detector)=>{
      if(typeof webcamRef.current!=="undefined" && webcamRef.current!==null && webcamRef.current.video.readyState===4)
      {
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.width;
        const videoHeight = webcamRef.current.video.height;
        
        webcamRef.current.video.width=videoWidth;
        webcamRef.current.video.height=videoHeight;
  
        const poses = await detector.estimatePoses(video);
        // console.log(poses)
        keypoints=poses[0].keypoints;

        document.getElementsByClassName("posenet")[0].style.opacity=0;
        document.getElementsByClassName("posenet")[0].style.visibility="hidden";
      }
    }
  
    loadPosenet();

    return (
        <div className="posenet">
            <PrivacyMsg />
            <OnboardingMsg />
            <Webcam
                ref={webcamRef}
                width={window.innerWidth}
                height={window.innerHeight}
                mirrored={true}
                videoConstraints={videoConstraints}
            />
        </div>
    )
}

export default Posenet
