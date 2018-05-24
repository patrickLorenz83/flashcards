# Start Developing

To get started developing right away:

* simply install all node dependencies and start the node server
    - `yarn install`
    - `yarn start`

* for easy testing the sample data will be installed every time when refreshing the app, so you will always have a clean start with some sample data

* to start without sample data: uncomment `setDummyData()` in `App.js` `componentDidMount()`

* to totally reset the date reset your simulator    

# Device Support

The code is only tested with iOS 11.3 iPhone X (Simulator) and iOS 11.3 iPhone 6 Plus.

# Missing Stuff:

* no error handling
    * you can add empty cards
    * if you add two decks with the same name you will get a key problem, the name of the deck must be unique
 
    