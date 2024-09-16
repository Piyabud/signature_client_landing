module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        display1: "var(--txt-display1-size)",
        display2: "var(--txt-display2-size)",
        display3: "var(--txt-display3-size)",
        display4: "var(--txt-display4-size)",
        headline1: "var(--txt-headline1-size)",
        headline2: "var(--txt-headline2-size)",
        headline3: "var(--txt-headline3-size)",
        headline4: "var(--txt-headline4-size)",
        title1: "var(--txt-title1-size)",
        title2: "var(--txt-title2-size)",
        title3: "var(--txt-title3-size)",
        title4: "var(--txt-title4-size)",
        label1: "var(--txt-label1-size)",
        label2: "var(--txt-label2-size)",
        label3: "var(--txt-label3-size)",
        label4: "var(--txt-label4-size)",
        body1: "var(--txt-body1-size)",
        body2: "var(--txt-body2-size)",
        body3: "var(--txt-body3-size)",
        body4: "var(--txt-body4-size)",
      },
      fontWeight: {
        700: "var(--txt-headline-weight)",
        600: "var(--txt-title-weight)",
        600: "var(--txt-display-weight)",
        500: "var(--txt-label-weight)",
        400: "var(--txt-body-weight)",
      },
      flexGrow: {
        1: '1',
        2: '2'
      },
      width: {
        '1/2-vw': 'calc(100vw / 2)',
        '1/3-vw': 'calc(100vw / 3)',
        '1/4-vw': 'calc(100vw / 4)',
        '1/5-vw': 'calc(100vw / 5)',
      },
    },
  },
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}