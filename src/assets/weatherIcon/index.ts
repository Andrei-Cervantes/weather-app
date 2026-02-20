import _01d from "./01d.png";
import _01n from "./01n.png";
import _02d from "./02d.png";
import _02n from "./02n.png";
import _03d from "./03d.png";
import _03n from "./03n.png";
import _04d from "./04d.png";
import _04n from "./04n.png";
import _09d from "./09d.png";
import _09n from "./09n.png";
import _10d from "./10d.png";
import _10n from "./10n.png";
import _11d from "./11d.png";
import _11n from "./11n.png";
import _13d from "./13d.png";
import _13n from "./13n.png";
import _50d from "./50d.png";
import _50n from "./50n.png";

export const Icons = {
  "01d": _01d,
  "01n": _01n,
  "02d": _02d,
  "02n": _02n,
  "03d": _03d,
  "03n": _03n,
  "04d": _04d,
  "04n": _04n,
  "09d": _09d,
  "09n": _09n,
  "10d": _10d,
  "10n": _10n,
  "11d": _11d,
  "11n": _11n,
  "13d": _13d,
  "13n": _13n,
  "50d": _50d,
  "50n": _50n,
} as const;

export type WeatherIconCode = keyof typeof Icons;
