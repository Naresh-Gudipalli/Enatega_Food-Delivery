
# Enatega Food delivery

<div align="center">

  <a href="https://www.youtube.com/watch?v=8sE7ivnFyo0&feature=youtu.be&ab_channel=NinjasCode">
  <img src="./assets/final.webp" alt="Demo video" style="border-radius: 6px; width: auto;">
  </a>

</div>

<br/>
Enatega Single Vendor is a white label food delivery solution that allows restaurant owners to easily manage their deliveries. Enatega Single Vendor can help to intuitively and instantly automate your deliveries, and handle the logistics. Our food delivery solution provides the capability of order management, as well as separate applications for the rider and the customer. It also boasts a suite of features and can be customized to match your brand thanks to its white label capabilities.

<b>This is the full free source code of our solution, however the backend and API is proprietary and can be obtained via paid license.</b>

<!-- Add a horizontal rule for separation -->
<hr/>

## :fast_forward: Quick Links

- [:book: What is included](#heading-1)
- [:rocket: Features](#heading-2)
- [:wrench: Setup](#heading-3)
- [:gear: Prerequisites](#heading-4)
- [:computer: Technologies](#heading-5)
- [:camera: Screenshots](#heading-6)
- [:triangular_ruler: High Level Architecture](#heading-7)
- [:page_with_curl: Documentation](#heading-8)
- [:movie_camera: Demo Videos](#heading-14)
- [:video_game: Demos](#heading-9)
- [:busts_in_silhouette: Contributors](#heading-14)
- [:warning: Disclaimer](#heading-12)
- [:email: Contact Us](#heading-13)

<!-- Add a horizontal rule for separation -->
<hr/>

## :question: What is included: <a id="heading-1"></a>

Our food delivery solution contains three separate modules for order management. These include the admin panel, the delivery app and the rider app. Below, the capabilities of all three modules have been listed:

- The admin panel receives the orders that can be placed via the customer app. It also allows managing the restaurant’s orders as well as the riders’ accounts.(Run on node version 14)

- The customer app allows for customers to choose their specific selections and customize their order before placing it.

- The rider app can accept the orders and also allows for location based zoning as well as the ability to locate customer’s address via google map’s API integration.

## :fire: Features: <a id="heading-2"></a>

- Analytics dashboard for the mobile app
- Payment integration with Paypal and Stripe
- Order tracking feature
- Email Integration e.g for order confirmation etc.
- Ability to provide ratings and reviews
- Finding address using GPS integration
- Facebook and Google authentication integration
- Mobile responsive dashboard
- Multi-Language support using localization
- Separate rider app for order management
- Multiple variations of food items
- Push notifications for both mobile and web

## :repeat_one: Setup: <a id="heading-3"></a>

As we’ve mentioned above, the solution includes three separate modules. To setup these modules, follow the steps below:

To run the module, you need to have nodejs installed on your machine(Install node version 14). Once nodejs is installed, go to the directory and enter the following commands

The required credentials and keys have been set already. You can setup your own keys and credentials

The version of nodejs should be between 14.0 to 16.0

[![Guide Badge](https://img.shields.io/badge/Do_with_guided_tutorial-blue?style=for-the-badge&logo=book-reader)](https://enatega.com/single-vendor-doc/)

## :framed_picture: Screenshots: <a id="heading-6"></a>

|        Customer App        |
| :------------------------: |
| ![](./assets/customer.jpg) |

|          Rider App          |
| :-------------------------: |
| ![](./assets/rider-app.jpg) |

|              Dashboard               |
| :----------------------------------: |
| ![](./assets/dashboard-scaled-1.jpg) |

## :wrench: High Level Architecture: <a id="heading-7"></a>

![High Level Architecture](./assets/HighArchitectDiagram.png)

## :information_source: Prerequisites: <a id="heading-4"></a>

##### App Ids for Mobile App in app.json

- Facebook Scheme
- Facebook App Id
- Facebook Display Name
- iOS Client Id Google
- Android Id Google
- Amplitude Api Key
- server url

##### Set credentials in API in file helpers/config.js and helpers/credentials.js

- Email User Name
- Password For Email
- Mongo User
- Mongo Password
- Mongo DB Name
- Reset Password Link
- Admin User name
- Admin Password
- User Id
- Name

##### Set credentials in Admin Dashboard in file src/index.js

- Firebase Api Key
- Auth Domain
- Database Url
- Project Id
- Storage Buck
- Messaging Sender Id
- App Id

##### NOTE: Email provider has been only been tested for gmail accounts

## :hammer_and_wrench: Technologies: <a id="heading-5"></a>

|                                               Expo                                                |                                                   React-Navigation                                                   |                                                Apollo GraphQL                                                |                                               ReactJS                                                |                                                NodeJS                                                 |                                                 MongoDB                                                 |                                                   Firebase                                                   |
| :-----------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: |
| <a href="https://expo.dev/"><img src="./assets/expoicon.png" alt="Enatega Logos" width="100"></a> | <a href="https://reactnavigation.org/"><img src="./assets/react-navigation.png" alt="Enatega Logos" width="100"></a> | <a href="https://www.apollographql.com/"><img src="./assets/apollo.png" alt="Enatega Logos" width="100"></a> | <a href="https://reactjs.org/"><img src="./assets/react-js.png" alt="Enatega Logos" width="100"></a> | <a href="https://nodejs.org/en/"><img src="./assets/node-js.png" alt="Enatega Logos" width="100"></a> | <a href="https://www.mongodb.com/"><img src="./assets/mongoDB.png" alt="Enatega Logos" width="100"></a> | <a href="https://firebase.google.com/"><img src="./assets/firebase.png" alt="Enatega Logos" width="100"></a> |

|                                                 React Native                                                 |                                                       React Router                                                       |                                                GraphQL                                                |                                                ExpressJS                                                 |                                                   React Strap                                                    |                                                Amplitude                                                |
| :----------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| <a href="https://reactnative.dev/"><img src="./assets/react-native.png" alt="Enatega Logos" width="100"></a> | <a href="https://reactrouter.com/"><img src="./assets/react-router-svgrepo-com.png" alt="Enatega Logos" width="100"></a> | <a href="https://graphql.org/"><img src="./assets/graphQl-1.png" alt="Enatega Logos" width="100"></a> | <a href="https://expressjs.com/"><img src="./assets/express-js.png" alt="Enatega Logos" width="100"></a> | <a href="https://reactstrap.github.io/"><img src="./assets/React-strap.png" alt="Enatega Logos" width="100"></a> | <a href="https://amplitude.com/"><img src="./assets/amplitude.png" alt="Enatega Logos" width="100"></a> |

## :iphone: Demos: <a id="heading-9"></a>

|                                                                                                                                       Customer App                                                                                                                                       |                                                                                                                                             Rider App                                                                                                                                             |                                                     Admin Dashboard                                                     |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
|                                                                              <a href="#heading-9" style="pointer-events: none;"><img src="./assets/LOGO-CUSTOMER.png" alt="Enatega Logos" width="150"></a>                                                                               |                                                                                  <a href="#heading-9" style="pointer-events: none;"><img src="./assets/RIDER-APP-LOGO.png" alt="Enatega Logos" width="150"></a>                                                                                   | <a href="https://singlevendor-admin.enatega.com"><img src="./assets/worldwide.png" alt="Enatega Logos" width="100"></a> |
| <a href="https://play.google.com/store/apps/details?id=com.enatega.vendor"><img src="./assets/android_518705.png" alt="Android Logo" width="25"></a> <a href="https://apps.apple.com/pk/app/enatega/id1493209281"><img src="./assets/social_10096939.png" alt="iOS Logo" width="25"></a> | <a href="https://play.google.com/store/apps/details?id=com.enatega.rider"><img src="./assets/android_518705.png" alt="Android Logo" width="25"></a> <a href="https://apps.apple.com/pk/app/enatega-rider-app/id1493291047"><img src="./assets/social_10096939.png" alt="iOS Logo" width="25"></a> |

## :book: Documentation <a id="heading-8"></a>

Find the link for the complete documentation of the Enatega Single Vendor Solution [here](https://enatega.com/singlevendor-documentation/).

## :tv: Demo Videos: <a id="heading-14"></a>

| YT Link |
| :--: |

| <a href="https://www.youtube.com/watch?v=AWbdt9GX1t4"><img src="https://img.youtube.com/vi/AWbdt9GX1t4/0.jpg" width="200" alt="Video"></a>
