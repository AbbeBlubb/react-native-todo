# Case questions

## Production readiness

- When and how can I guarantee that we can go to production?
- If it’s OK I would like to answer this as a final question, after the other questions!

## Code style

- It’s fundamental to be adaptive, and to be happy with it
- I’m flexible to the code style, the first thing I will do in every project is to look at the code style for the project. I'm going to use the same pattern everywhere, following the conventions that already exist.
- Then it will be easy for everyone
  - Follow the same pattern, even if it is not the best pattern, because it will be easier for everyone and easier to refactor afterwards
- To be practical – what do we need?
  - What should become common components
  - Hooks, constants, Enums, interfaces

## Error handling

- Error boundary
  - Most often, at the root container level of the app, global level
    - The problem with an unexpected exception is that the app crashes completely and the user only sees a white page. So, this exception is thrown and caught in error boundary, and then we have an option to choose, what should we do?
  - Component/module level. The modules could be independent of each other, in that case we can have error boundary on the module as well
  - In most cases you only have one error boundary, and especially in a small application, it is at the root level
- A fundamental error handling is for all connections to all systems, needs to be wrapped in try catch. Examples:
  - You call a service, and you get a 500 (Internal Server Error) or 403 (Forbidden / unauthorized), then you must show some message to the customer
  - The resource returns 200 (Ok) but has changed the contract
  - Then the errors should be handled at a high level. For example, if the render expects an array, but gets an undefined, then the container will crash. Higher up you then need error boundary that will handle all unexpected errors.
- Logging
  - Important to log everything to be able to track health and errors
  - Lots of helpful tools. Splunk (analytics GUI), Sentry (logging), Kibana (analysis GUI)

## Architecture

- Technology stack: 
  - E.g. React Native, pure JS/TS
  - The developer will understand for himself when it's time to start with Redux
  - Only necessary libraries
  - Guidelines (when the app starts to grow)
  - React Native documentation guidelines 
  - Linter 
  - Guidelines for application, way of work
- Folder structure. 
  - Should be flexible to add more things. If you are going to add a new feature to the app, where should the files be located? 
  - Set a good folder structure from the beginning, with time it becomes harder and harder to move the files around
- How to build and bundle (e.g. webpack) 
  - If we add a new feature to the app, then maybe that feature can become a separate bundle with Lazy Loading to speed up the app and loading time for the customer
  - Feature flags
  - Decouple deployment from release
  - Deployment: transfer of builds from one environment to another
  - Production ready = done = potentially releasable to end-user
  - Release: to end-user
  - This is super important! Test in production.
- Gradual rollout (canary releases)
- Start by going to a group of customers so you can get feedback. Even if it is an MVP, sometimes you can hear critical things that need to be fixed.
- Lastly, backend. Authentication, API, database, first SaaS and then own.

## Tests

- Requirements
  - If requirements are clear, TDD.
  - If there are unclear requirements, find a balance. Focus on the code; the code will change all the time. And at the same time, a good balance is needed with tests that test the most important parts, where in the event of a refactoring, you discover if something doesn’t work, shift-left
- In an MVP, you have a pretty good balance between the test and the feature itself.
- What tests do I want to run?
  - Unit tests – must
  - Image diff tests – should, easy for anyone to see and find and understand. When the developer does a review of the code, the developer looks at the image, and then the developer knows what it’s about.  Even others can see the pictures, like the product owner/manager. When you change a common component, you see how the change hits.
  - End to end tests. Cypress (E2E with mock data). Most E2E are slow but Cypress uses mock data and is therefore fast. Important to test what is needed and no more, so that the pipeline does not become too long. Try at least happy flow.
  - Test on real devices, not just emulations. Maybe latest version and 1-2 versions backwards. Browserstack is good but better to have the device in hand like a user.
- Then you have a good coverage of the product!
- Tests helps you to be fearless

And HERE we come to production readiness

- Safe to deploy!
