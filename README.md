# bedside-clock-react-native

> A bedside clock app written in React Native with Expo

You can make the clock display quite dim in order to be readable at night without adding much illumination to the room. Studies have shown that ambient light at night can reduce sleep quality and can also lead to nearsightedness due to the eyes constantly attempting to focus while sleeping.

Install the Expo app to your phone and run the live demo!

__[Live demo](exp://2s-v9g.johngorman.bedside-clock-react-native.exp.direct:80)__

## Controls

- Toggle control bar visibility by clicking on the time display.
- The plus (+) and minus (-) buttons control the brightness.
- The color (*) button brings up a color selection bar.
- The seconds (:) button toggles seconds display.
- The date (/) button toggles date display.
- Double click on the time to see the version number.

## Technical Details

- Written in React Native with Redux state management.
- Co-written as a SPA as __[Bedside Clock - ReactJS](https://github.com/jgorman/bedside-clock-react-js)__!
- There is a lot of shared code between the two projects.
- The appstate.js Redux reducer file is identical between the two projects because the state flow is the same.
- A great pair of simple no frills projects for anyone who wants to see exactly how React.js and React Native differ and how to port between them.
- Both projects store the app preferences state between sessions.

Let me know if you have any comments or suggestions!
