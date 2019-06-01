# Learn :book:

We are using several tools that you might be unfamiliar with, or would just like to refresh your basics for the same. This document lays out the tools we are using and the relevant docs and tutorials to learn them.

## React :hammer_and_wrench:

We are using basic react app created through `create-react-app` and using `react-router` to route routes.

[Complete React Tutorial (& Redux)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG) - This is the main recommended way to learn react. You will only need a little more info after completing this tutorial.

[React Documentation](https://reactjs.org/docs/getting-started.html) - Use this for reference

### Libraries

https://reacttraining.com/react-router/

## Bulma + Sass :rainbow:

We are using [Bulma](https://bulma.io/) for styling our elements. Bootstrap was not selected as it is not JS independent. You either have to use react-bootstrap or write your own code to bind events. Bulma however does not enforce any JS framework on us. It just provides us with basic styling and layout so we don't have to style everything from scratch.

Sass is a CSS preprocessor. We shall be using the SCSS variant of the same. If you have ever written CSS you would be very comfortable with SCSS. We will not use advanced Sass features such as mixins etc so you don't have to worry too much. Also, If you feel overwhelmed, you can also write plain CSS inside SCSS files and it will work :100: %! We will use the Bulma media selectors for designing mobile-friendly layouts.

[Sass Basics](https://sass-lang.com/guide)

[Using Sass in Create React App v2](https://scotch.io/tutorials/using-sass-in-create-react-app-v2)

[Bulma Docs](https://bulma.io/documentation/) - Just Copy paste code from docs. Remember to use `className` instead of `class` in JSX.

## Google Sheets :page_facing_up:

We shall use google sheets as our database. We will use scripts to fetch data and push the data submitted in the forms.

Registration forms for students and mentors, Mid-eval, End-eval 
forms, etc. should be made using Google Forms and store data in Google 
Sheets. 

Read [How to Submit an HTML Form to Google Sheets…without Google Forms](https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175) for instructions to setup. 

See ["Added google sheets support"](https://github.com/kossiitkgp/kwoc/commit/26526d468cb146693884c5b17c898cbd25c8608f) commit to seeing the code in live. Add method to fetch data from Google sheets (eg: when updating stats table with Travis CI)

## Github APIs (needs-updates)

We shall use GitHub's OAuth and APIs to Authenticate and Login Users and query data such as number of commits etc.

---

Let's Hope we learn a lot of new things while creating this awesome project!

Feel Free to ping anyone if you need any help! We are here for you! Today and till the end of our days! :sweat_smile: 