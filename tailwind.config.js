module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { min: "1200px" },
      "5xl": { max: "1900px" },
      "4xl": { max: "1600px" },
      "3xl": { max: "1439px" },
      xl: { max: "1199px" },
      lg: { max: "991px" },
      clg: { max: "800px" },
      md2: { max: "769px" },
      md: { max: "767px" },
      lsm: { max: "640px" },
      sm: { max: "575px" },
      xs: { max: "475px" },
      xsm: { max: "374px" },
    },
    extend: {
      spacing: {
        unset: "unset",
      },
      fontFamily: {
        Poppins: ["'Poppins', sans-serif"],
      },
      colors: {
        bgWhiteSD: "var(--bgWhiteSD)",
        textWhiteSD: "var(--textWhiteSD)",
        borderWhiteSD: "var(--borderWhiteSD)",
        bgBlackSD: "var(--bgBlackSD)",
        textBlackSD: "var(--textBlackSD)",
        borderBlackSD: "var(--borderBlackSD)",
        textDark: "var(--textDark)",
        textGreen: "var(--textGreen)",
        textSecondary: "var(--textSecondary)",
        textTertiary: "var(--textTertiary)",
        textWarning: "var(--textWarning)",
        textDanger: "var(--textDanger)",
        textSuccess: "var(--textSuccess)",
        primaryColor: "var(--primaryColor)",
        textWarningDark: "var(--textWarningDark)",
        textDangerDark: "var(--textDangerDark)",
        textSuccessDark: "var(--textSuccessDark)",
        primaryColorDark: "var(--primaryColorDark)",
        primary: "var(--primary)",
        primary100: "var(--primary100)",
        primary200: "var(--primary200)",
        primary300: "var(--primary300)",
        primary400: "var(--primary400)",
        primary500: "var(--primary500)",
        primary700: "var(--primary700)",
        primary800: "var(--primary800)",
        primary900: "var(--primary900)",
        primary1000: "var(--primary1000)",
      },
      boxShadow: {
        softRecessShadow: "var(--softRecessShadow)",
        recessShadow: "var(--recessShadow)",
        raiseShadow: "var(--raiseShadow)",
        mediumFloatShadow: "var(--mediumFloatShadow)",
        highFloatShadow: "var(--highFloatShadow)",
        toggleSwitchShadow: "var(--toggleSwitchShadow)",
      },
      keyframes: {
        small__loader__sd: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        toast__show: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        toast__hide: {
          "0%": { opacity: "1", transform: "translateY(0px)" },
          "100%": { opacity: "0", transform: "translateY(-30px)" },
        },
      },
      animation: {
        small__loader__sd: "small__loader__sd 1s linear infinite",
        toast__show: "toast__show 1.5s forwards",
        toast__hide: "toast__hide 0.6s forwards",
      },
      typography: {
        DEFAULT: {
          css: {
            strong: {
              color: null,
            },
            link:{
              color:'#6558f5'
            },
            maxWidth: "100vw",
            lineHeight: "normal"
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
