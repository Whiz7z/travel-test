import waterfallImg from "../assets/gallery/waterfall.png";
import northlightImg from "../assets/gallery/northlight.png";
import riverImg from "../assets/gallery/river.png";
import housesImg from "../assets/gallery/houses.png";
import caveImg from "../assets/gallery/cave.png";
import gaiserImg from "../assets/gallery/gaiser.png";
import canyonImg from "../assets/gallery/canyon.png";
import bigWaterfallImg from "../assets/gallery/bigWaterfall.png";

import riverHotel from "../assets/hotels/riverHotel.png";
import carHotel from "../assets/hotels/carHotel.png";
import houseHotel from "../assets/hotels/houseHotel.png";
import housesHotel from "../assets/hotels/housesHotel.png";
import vikIMidralHotel from "../assets/hotels/VikIMirdalHotel.png";

export const golderCircleInfo = {
  title: "Golden Circle Region",
  tags: ["Geysers", "Waterfalls", "Crater lakes"],
  description:
    "The Golden Circle in Iceland is a renowned tourist route that encompasses an array of stunning natural landmarks within a relatively short distance from Reykjavík. This scenic loop includes three primary attractions: Þingvellir National Park, where you can explore the rift valley created by the diverging North American and Eurasian tectonic plates and witness the site of Iceland's ancient parliament.",
};

export const goldenCircleHighlights = [
  {
    id: 1,
    title: "Gullfoss Waterfall",
    desc: "1h · Waterfall",
    curatorsPick: true,
    img: waterfallImg,
  },
  {
    id: 2,
    title: "Reykjadalur Valley",
    desc: "1h · Iconic hike, hot springs",
    curatorsPick: true,
    img: riverImg,
  },
  {
    id: 3,
    title: "Geysir Thermal Field",
    desc: "1h · Geysers",
    curatorsPick: false,
    img: gaiserImg,
  },

  {
    id: 4,
    title: "Thingvellir",
    desc: "1h · Iconic hike · Light traffic ",
    curatorsPick: true,
    img: canyonImg,
  },
];
export const goldenCirclePlan = [
  {
    day: "Day 1",
    time: "40m",
    plan: [
      {
        id: 1,
        title: "Gullfoss Waterfall",
        desc: "1h · Waterfall · Light traffic",
        curatorsPick: true,
        img: waterfallImg,
        day: 1,
      },
      {
        id: 2,
        title: "Reykjadalur Valley",
        desc: "1h · Iconic hike, hot springs · Light traffic",
        curatorsPick: true,
        img: riverImg,
        day: 1,
      },
    ],
  },
  {
    day: "Day 2",
    time: "1h 40m",
    plan: [
      {
        id: 3,
        title: "Geysir Thermal Field",
        desc: "1h · Geysers · Light traffic",
        curatorsPick: false,
        img: gaiserImg,
        day: 2,
      },

      {
        id: 4,
        title: "Thingvellir",
        desc: "1h · Iconic hike · Light traffic ",
        curatorsPick: true,
        img: canyonImg,
        day: 2,
      },
    ],
  },
];

export const goldenCircleHotels = [
  {
    id: 1,
    title: "Frost and Fire Hotel",
    rating: "9.1/10",
    desc: "$180+ · Boutique hotel",
    curatorsPick: true,
    img: riverHotel,
  },
  {
    id: 2,
    title: "The Greenhouse Hotel",
    rating: "9.1/10",
    desc: "$230+ · Luxury hotel",
    curatorsPick: true,
    img: carHotel,
  },
  {
    id: 3,
    title: "INNI",
    rating: "9.1/10",
    desc: "$130+ · Apart hotel",
    curatorsPick: false,
    img: houseHotel,
  },
  {
    id: 4,
    title: "Magma Hotel",
    rating: "9.1/10",
    desc: "$250+ · Boutique hotel",
    curatorsPick: true,
    img: housesHotel,
  },
];

///

export const southHighlandsInfo = {
  title: "South & Highlands",
  tags: ["Geysers", "Waterfalls", "Crater lakes"],
  description:
    "TThe South & Highlands of Iceland offer a breathtaking landscape of diverse natural wonders, from expansive glaciers and active volcanoes to serene waterfalls and black sand beaches. This region is also a haven for adventurers, featuring numerous hiking trails, hidden hot springs, and vast lava fields waiting to be explored. Visitors will be captivated by the blend of tranquility and raw, untamed beauty that defines this unique part of Iceland.",
};

export const southHighlandsighlights = [
  {
    id: 1,
    title: "Skógafoss Waterfall",
    desc: "1h · Iconic waterfall",
    curatorsPick: true,
    img: bigWaterfallImg,
  },
  {
    id: 2,
    title: "Katla Ice Cave",
    desc: "1h · Ice caves",
    curatorsPick: true,
    img: caveImg,
  },
  {
    id: 3,
    title: "Fjaðrárgljúfur",
    desc: "1h · Geysers",
    curatorsPick: false,
    img: gaiserImg,
  },

  {
    id: 4,
    title: "Thingvellir",
    desc: "1h · Iconic hike · Light traffic ",
    curatorsPick: true,
    img: canyonImg,
  },
];
export const southHighlandsPlan = [
  {
    day: "Day 1",
    time: "40m",
    plan: [
      {
        id: 1,
        title: "Skógafoss Waterfall",
        desc: "1h · Iconic waterfall · Light traffic",
        curatorsPick: true,
        img: bigWaterfallImg,
        day: 1,
      },
      {
        id: 2,
        title: "Katla Ice Cave",
        desc: "1h · Ice caves · Light traffic",
        curatorsPick: true,
        img: caveImg,
        day: 1,
      },
    ],
  },

  {
    day: "Day 2",
    time: "1h 40m",
    plan: [
      {
        id: 3,
        title: "Fjaðrárgljúfur",
        desc: "1h · Geysers · Light traffic",
        curatorsPick: false,
        img: gaiserImg,
        day: 2,
      },

      {
        id: 4,
        title: "Thingvellir",
        desc: "1h · Iconic hike · Light traffic ",
        curatorsPick: true,
        img: canyonImg,
        day: 2,
      },
    ],
  },
];

export const southHighlandsHotels = [
  {
    id: 1,
    title: "Magma Hotel",
    rating: "9.1/10",
    desc: "$250+ · Boutique hotel",
    curatorsPick: true,
    img: riverHotel,
  },
  {
    id: 2,
    title: "Hotel Vík í Mýrdal",
    rating: "9.1/10",
    desc: "$150+ · Luxury hotel",
    curatorsPick: true,
    img: carHotel,
  },
  {
    id: 3,
    title: "Hótel Kría",
    rating: "9.1/10",
    desc: "$130+ · Luxury hotel",
    curatorsPick: false,
    img: houseHotel,
  },
  {
    id: 4,
    title: "The Greenhouse Hotel",
    rating: "9.1/10",
    desc: "$230+ · Luxury hotel",
    curatorsPick: true,
    img: housesHotel,
  },
];
