// remember to use module.exports instead of tailwind.config in production
tailwind.config = {
    // Note: config only includes the used styles & variables of your selection
    content: ["./src/**/*.{html,vue,svelte,js,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {},
        fontSize: {},
        fontWeight: {},
        lineHeight: {},
        borderRadius: {},
        colors: {
          primary: "rgba(252, 225, 184, 0.50)",
          text: "#997063",
          secondary: "#fbf8f8",
          mark: "#efdc33",
          red: "#c52656",
        },
        spacing: {},
        width: {},
        minWidth: {},
        maxWidth: {},
        height: {},
        minHeight: {},
        maxHeight: {},
      },
    },
  };
  