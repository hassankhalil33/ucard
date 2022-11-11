<img src="./readme/title1.svg"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available.  

**[PROJECT PHILOSOPHY](https://github.com/hassankhalil33/well_app#-project-philosophy) • [WIREFRAMES](https://github.com/hassankhalil33/well_app#-wireframes) • [TECH STACK](https://github.com/hassankhalil33/well_app#-tech-stack) • [IMPLEMENTATION](https://github.com/hassankhalil33/well_app#-impplementation) • [HOW TO RUN?](https://github.com/hassankhalil33/well_app#-how-to-run)**

</div>

<br><br>


<img src="./readme/title2.svg"/>

> Ucard allows you to create your own Unique Digital Business Card that you can share with others by tapping your phone.
> 
> Ever been to an event and wanted to exchange cards with peers? Ever got bored of carrying multiple plastic/paper cards? 
Then Ucard is for you!

### User Stories
- As a user, I want to create custom personal cards.
- As a user, I want to edit my cards, so that I can update my info.
- As a user, I want to create different category cards (personal / business / gaming), so that I can own multiple cards.
- As a user, I want to share my card with others (NFC), so that we can exchange info.
- As a user, I want to get matched with others, so I find people with similar interests.
- As a user, I want to receive notifications, so that I stay upto date.

<br><br>

<img src="./readme/title3.svg"/>

> This design was planned before on paper, then moved to Figma app for the fine details.
Note that i didn't use any styling library or theme, all from scratch and using pure css modules

| Welcome  | Login  | Register  |
| ----- | ----- | ----- |
| ![Welcome](https://github.com/hassankhalil33/ucard/blob/master/readme/Welcome.png) | ![Login](https://github.com/hassankhalil33/ucard/blob/master/readme/Login.png) | ![Register](https://github.com/hassankhalil33/ucard/blob/master/readme/Sign_Up.png)

| Home Page  | Home Page Continued  | Notifications Page
| ----- | ----- | ----- |
| ![Home Page](https://github.com/hassankhalil33/ucard/blob/master/readme/Home_Page.png) | ![Home Page Continued](https://github.com/hassankhalil33/ucard/blob/master/readme/Home_Page_Continued.png) | ![Notifications Page](https://github.com/hassankhalil33/ucard/blob/master/readme/Notifications_Page.png)

| Contacts Page  | Cards Page  | Cards Page Continued
| ----- | ----- | ----- |
| ![Contacts Page](https://github.com/hassankhalil33/ucard/blob/master/readme/Contacts_Page.png) | ![Cards Page](https://github.com/hassankhalil33/ucard/blob/master/readme/Cards_Page.png) | ![Cards Page Continued](https://github.com/hassankhalil33/ucard/blob/master/readme/Cards_Page_Continued.png)

<br><br>

<img src="./readme/title4.svg"/>

Here's a brief high-level overview of the tech stack the Well app uses:

- This project uses the [Flutter app development framework](https://flutter.dev/). Flutter is a cross-platform hybrid app development platform which allows us to use a single codebase for apps on mobile, desktop, and the web.
- For persistent storage (database), the app uses the [Hive](https://hivedb.dev/) package which allows the app to create a custom storage schema and save it to a local database.
- To send local push notifications, the app uses the [flutter_local_notifications](https://pub.dev/packages/flutter_local_notifications) package which supports Android, iOS, and macOS.
  - 🚨 Currently, notifications aren't working on macOS. This is a known issue that we are working to resolve!
- The app uses the font ["Work Sans"](https://fonts.google.com/specimen/Work+Sans) as its main font, and the design of the app adheres to the material design guidelines.



<br><br>
<img src="./readme/title5.svg"/>

> Uing the above mentioned tecch stacks and the wireframes build with figma from the user sotries we have, the implementation of the app is shown as below, these are screenshots from the real app

| Landing  | Home/Search  |
| -----------------| -----|
| ![Landing](https://github.com/julescript/spotifyndr/blob/master/demo/Landing_Page.jpg) | ![Home/Search](https://github.com/julescript/spotifyndr/blob/master/demo/Search_Page.jpg) |


<br><br>
<img src="./readme/title6.svg"/>


> This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```


