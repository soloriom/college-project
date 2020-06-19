
## Available Scripts

In the project directory, you can run:

### `yarn start`

## Assumptions

- Everything was meant to be done with pure sass, so no component libraries were used. Needles to say, its more efficient using a library.
- To navigate trough the app, its suggested to use buttons and nav bar.
- No repeated students was desired, so the app checks if there is already a student with same name , lastname and email. 
- All field are requried. 
- Also constraints were added to the inputs, contraints vary depending on the input type.
- A mock data can be set, going to `src/redux/reducers/students.ts` and setting `enableMock` variable to true; it's set to false by default
- Redux logger is enabled, can be improve to work only on dev and not on prod. Not implemented at the moment.


## [Go to live project][url]

&nbsp;
&nbsp;
&nbsp;

[url]: https://codesandbox.io/s/github/soloriom/college-project
