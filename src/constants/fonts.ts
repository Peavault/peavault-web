import localFont from "next/font/local";

const oatmeal = localFont({
  src: "../assets/fonts/Oatmeal Sans.ttf",
  weight: "100 900",
  variable: "--font-oatmeal-sans",
});

const circularStd = localFont({
  src: [
    {
      path: "../assets/fonts/circularStd/CircularStd-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/circularStd/CircularStd-BookItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/circularStd/CircularStd-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/circularStd/CircularStd-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/circularStd/CircularStd-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/circularStd/CircularStd-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/circularStd/CircularStd-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/circularStd/CircularStd-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-circular-std",
});

const FONTS = {
  oatmeal,
  circularStd,
};

export default FONTS;
