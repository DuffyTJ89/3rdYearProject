# BarCode-Scanner-App

We are a group of third year Software development students at GMIT and this repo is for our I.T professional skills module.

# Aims

  - The main aim of this project is to develop an app through Ionic 3 that will take in a barcode and store the number generated in a datbase that can be called back later.


# Running the app

> You will need to have Ionic 3 installed on your computer, infor here : 
https://ionicframework.com/docs/v1/guide/installation.html

> Clone the repo and open git bash or similar inside the main folder. 
From there enter the following code into GitBash 
````
Ionic serve --lab
````
> This will run the app on your computer's browser although it will not be able to scan any barcode in from there so this method of testing the app is not recommended.

> Insead we recommended running the following command: 

````
Ionic serve -c
````

> Dowload Ionic DevApp onto your phone and connect it to the same network as the computer running the code. Open the app and follow the instructions given.

> Alternatively you can build the app onto your device (the slowest method) by cloning and following these steps :
https://ionicframework.com/docs/intro/deploying/



# Code

#### Home.html 

> The main design of the app takes place here. We are displaying 3 buttons in an ion-footer. One to allow the user to scan in a bar code, one to allow the user to then store that bar code and one to pull back the data stored on firebase database.

#### Home.ts

> The code for to deal with the main fuctions of the App. 

>In scanBarcode() we use the bar code scanner, get the results and also log those results to the console for checking while developing. Called when the user click on the scan button.

> storeBarcode() is used to push the list of data we create and to firebase for storage when the user click on the button Store.

> getBarcode retrives the data from firebase when the user clicks on the button Get barCodes

#### app.modules.ts

> Handles the plugins BarcodeScanner, AnglarFireModule and AngularFireDatabaseModule. The information needed to make the call to the firebase database is also stored here.  

### Technologies used

| Tech | Link |
| ------ | ------ |
| Ionic 3 | https://ionicframework.com/docs/ |
| Firebase | https://firebase.google.com/ |
| dillinger | https://dillinger.io/ |

## Resources used :
| Resource | Link |
| ------ | ------ |
| Make a barcode scanner app in ionic 2 | https://www.youtube.com/watch?v=bogYgE7aYL8 |
| Ionic docs for Ionic 3 to check for differences to above video for our Ionic 3 app : |https://ionicframework.com/docs/native/barcode-scanner/|
| Adding Firebase to Ionic3 app : | http://javasampleapproach.com/ionic/ionic-3-firebase-integrate-firebase-in-ionic-3-project-with-angularfire2|


  
Authors:
> Peter Larkin 

> James Kennedy 

> Thomas Duffy 
