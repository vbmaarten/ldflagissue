# Preparation

1. Make sure to have a launch-darkly environment which includes the following flag:

```
Slug: 'Test-flag'
Type: boolean flag

- Available through the mobile sdk.
- Serving `true` when on, and `false` otherwise
- Make sure it is initially turned off
```

2.  Open `App.tsx` and replace `<INSERT_KEY_HERE>` with the mobile sdk key of the previously mentioned environment

# Build and run

Run the following

```bash
npm install
cd ios && pod install && cd ../
npm run ios
```

# Reproduction steps

1. Open the app
2. Note that the value returned is `false`
3. Completely close the app
4. Turn on the flag in the launch darkly environment
5. Open the app again, note the returned value is still `false`
6. Completely close the app
7. Open the app once more, note it now returns the correct value `true`

## Expected behaviour:

When opening the app in step 5, it should return `true` as the flag was enabled

## Actual behaviour:

The flag value is still `false`, despite the flag being enabled
