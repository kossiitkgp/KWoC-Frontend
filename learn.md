# Learn :book:

We are using several tools that you might be unfamiliar with, or would just like to refresh your basics for the same. This document lays out the tools we are using and the relevant docs and tutorials to learn them.

## Jekyll
We hope you've already got your hands dirty with Jekyll while setting up your personal blogs. Now, it's time to use those skills in our KWoC frontend. We need to migrate from old method to using Jekyll. See [this](https://github.com/kossiitkgp/kwoc/issues/1) issue for more details.

References:
* https://jekyllrb.com/tutorials/convert-site-to-jekyll/
* https://medium.com/@jameshamann/creating-your-own-jekyll-theme-gem-1f8180a0e4b8

## Travis CI
We'll be needing Travis CI to automatically update the repo and deploy changes. This will make a static page change dynamically when the data hiding behind it changes.

References:
* https://medium.com/koss-engineering/travis-continuous-integration-7eae75dfcdba

## Google Sheets :page_facing_up:

We shall use google sheets as our database. We will use scripts to fetch data and push the data submitted in the forms.

Registration forms for students and mentors, Mid-eval, End-eval 
forms, etc. should be made using Google Forms and store data in Google 
Sheets. 

References:
* Read [How to Submit an HTML Form to Google Sheets…without Google Forms](https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175) for instructions to setup. 

* See ["Added google sheets support"](https://github.com/kossiitkgp/kwoc/commit/26526d468cb146693884c5b17c898cbd25c8608f) commit to seeing the code in live. Add method to fetch data from Google sheets (eg: when updating stats table with Travis CI)

## Github APIs (needs-updates)

We shall use GitHub's OAuth and APIs to Authenticate and Login Users and query data such as number of commits etc.

---

Let's Hope we learn a lot of new things while creating this awesome project!

Feel Free to ping anyone if you need any help! We are here for you! Today and till the end of our days! :sweat_smile: 
