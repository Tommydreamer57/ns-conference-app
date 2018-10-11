# North Star Conference Mobile App - React-Native

## Description:

The app should provide attendees with a detailed schedule of the conference, including:
- keynote session details
- breakout session details
- details on each of the speakers
- lunch/eating times
- other events (Thursday night activity, Sunday morning testimony meeting, book signings, etc...)
- mentor/group/group leader information (not sure yet...)
- a map of the venue

Attendees should be able to create their own breakout session schedule by selecting a session to attend at each timeslot. They should also be able to share their schedule with friends (not MVP). They should also be able to provide feedback on all of the sessions that they attend (would it be good for them to be prompted to provide feedback at the end of the session?).

They should be asked about:
- the relevance of the session's topic
- the quality of the speaker
- what they liked/disliked about the session
- any ideas/requests for future sessions
- other general feedback

The app should send push notifications about conference events during the conference.

There should be links to the North Star website for attendees to:
- donate to North Star
- access the conference audio
- send a text to conference staff ('contact us')

## Purpose:

Provide participants in the conference with the ability to:
- view the conference schedule, including:
    - keynote sessions
    - breakout sessions
    - lunch times
    - other events
- view the conference map
- plan their own individual breakout session schedule
- offer feedback on:
    - each session attended
        - relevance of the topic
        - quality of the speaker
        - other feedback
    - other events
    - the conference overall

## Features:

- Notifications for events
    - also for providing feedback on sessions?
- Entire schedule
    - from NS database
    - speaker info
    - session info
- Personal schedule
    - add sessions
    - remove sessions
- Mentor list?
- Map of conference venue
- Donations link
- Audio link
- Contact us link

## Rebuild:

- Notifications - OneSignal
- Contact Us - Phone API

## Routes:

- Home
    - welcome message
    - entire schedule
    - links to each breakout session selection
    - links to general session info
    - links to other event info
- Sessions
    - Maybe another tab navigator for selecting breakout session time
    - Or for simply viewing keynote session

