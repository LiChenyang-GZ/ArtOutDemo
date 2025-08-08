# Street Capture App Demo

This is a React Native mobile application built with Expo SDK 53 for capturing and managing street art photos. The app allows users to take photos, save them locally, view them in a media library, and display location details on a map.

## Features

1. Camera functionality to capture photos and record videos using Expo Camera
2. Ability to save captured media to the device gallery with Expo Media Library
3. Location retrieval to obtain current latitude, longitude, and address using Expo Location
4. Map integration with React Native Maps to display the captured location
5. Media library screen to view previously captured photos along with their location information
6. Simple and clean navigation using Expo Router

## How to use
1. Take photo/video  
<img src="https://github.com/user-attachments/assets/9de01241-1f73-4f90-954e-ab4d1755d52e" width="300" />

2. Save photo/video  
<img src="https://github.com/user-attachments/assets/cc27cdb9-72b5-4721-8d98-0c7f12897900" width="300" />

3. View your capture in media library  
<img src="https://github.com/user-attachments/assets/4af90059-06a7-4da9-ac68-6bad8fa0ca82" width="300" />

4. Click the card then check with map  
<img src="https://github.com/user-attachments/assets/e7f20edb-967c-4a87-a2cb-df2d03d8c186" width="300" />



## Technologies Used

**React Native and Expo**  
Provides the cross-platform framework and development environment for building the mobile application

**Expo Camera**  
Enables access to the device camera for capturing photos and videos with custom UI controls

**Expo Media Library**  
Allows saving captured images and videos to the device’s gallery and retrieving them when needed

**Expo Location**  
Provides access to the device’s GPS for retrieving location coordinates and reverse geocoding to addresses

**React Native Maps**  
Displays the captured location on an interactive map view

**Expo Router**  
Simplifies navigation between screens such as the camera and media library

## How It Works

When the user opens the Camera screen, they can switch between front and back cameras, toggle flash, and capture photos or record videos. After capturing, the user can save the media to their device gallery. Each capture can also be associated with a location, which is later displayed alongside the media in the Media Library screen. The Media Library screen also offers a map view to visualise the capture location.

## Installation and Running

1. Clone the repository  
   `git clone https://github.com/LiChenyang-GZ/ArtOutDemo.git`

2. Install dependencies  
   `npm install`

3. Start the development server  
   `npx expo start`

4. Open the app in Expo Go on your mobile device or run on an emulator

## Future Improvements

The app could be enhanced with cloud storage integration for backing up media, authentication for user-specific libraries, and advanced filtering or search in the media library.
