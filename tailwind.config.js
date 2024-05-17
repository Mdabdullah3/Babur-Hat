module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#231F20",
          secondary: "#141618",
          neutral: "#F3F4F6",
          "base-100": "#ffff",
          info: "#ECF0F3",
          success: "#521647",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
