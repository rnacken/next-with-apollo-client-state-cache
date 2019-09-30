# Test-repo to show SSR issue with pre-filled cache for client-state.
Based on with-apollo example of Nextjs.

Install it and run:

```bash
npm install
npm run dev
```

- The error happens on the server, where I first get 
`Loading: true, Data: null`
(which triggers an error, since I try to destructure the data object)
After that, it resolves
`Loading: false, Data: { ... }`
(but the error already happened)
- See the client `console.log`, which displays what I want. No initial 'loading' state without the data, but:
`Loading: false, Data: { ... }` 
(data is available)
