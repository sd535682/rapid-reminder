## Rapid Reminder

Rapid Reminder is a mobile application designed to help users stay organized and manage their daily tasks efficiently. With its intuitive interface and powerful features, Rapid Reminder empowers users to keep track of their to-do list, set reminders, and receive notifications for upcoming events and important deadlines.

### To run the app

1. unzip
2. Run `yarn install`
3. Run `yarn start`
4. press a run install on real device or simulator

### If the API doesn't work

1. Go to the src/services/sample.json
2. Copy the whole JSON
3. Go to `https://mocki.io/fake-json-apihttps://mocki.io/fake-json-api`
4. Paste inside the FREE API Editor box
5. press create API
6. copy the API url
7. Go to `src/screens/upcoming.js`
8. Replace the `API_URL` with the new `API url`
9. press `r` to reload the app
10. if the app doesn't work, press `ctrl + c` to stop the metro bundler
11. wait for 2-5 seconds
12. Run `yarn start` again
13. press r to reload the app
