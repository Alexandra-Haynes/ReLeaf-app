import assets from "./assets";

const PlantData = [
  {
    id: "plant-01",
    name: "Heart Leaf Philodendron ",
    creator: "Angela Smith",
    price: 49.99,
    description:
      "This easy to grow philodendron (Philodendron hederaceum) is perfect anywhere. Its heart-shaped leaves create a dense canopy in a pot, or insert a wooden pole to create a stunning climber. Keep it in part-shade and out of direct sunlight.",
    image: assets.plant01,
    bids: [
      {
        id: "BID-11",
        name: "A Jackson",
        price: 55.00,
        image: assets.person02,
        date: "August 12, 2023 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer C.",
        price: 64.50,
        image: assets.person03,
        date: "August 12, 2023 at 16:15 PM",
      },
      {
        id: "BID-13",
        name: "A Wong",
        price: 70.00,
        image: assets.person04,
        date: "August 13, 2023 at 2:40 AM",
      },
    ],
  },
  {
    id: "plant-02",
    name: "Echeveria Succulent",
    creator: "Samantha S",
    price: 20.00,
    description:
      "This cute plant should be allowed to dry out slightly between waterings, as constant moisture can cause their stems and roots to rot. They'll do best in bright light near a window. You can easily propagate these succulents by removing the chicks and placing them in their own container. Just make sure to use a sandy potting mix labeled for cacti and succulents so your plants will have the drainage they need.",
    image: assets.plant02,
    bids: [
      {
        id: "BID-21",
        name: "Amma Thompson",
        price: 25.50,
        image: assets.person04,
        date: "September 12, 2023 at 10:30 AM",
      },
    ],
  },
  {
    id: "plant-03",
    name: "Monstera Deliciosa",
    creator: "Helen Jack M",
    price: 65.50,
    description:
      "Monstera deliciosa grows best in humid and warm environments, requiring dappled or partial light, acidic or neutral, well-drained peat-based soil, and temperatures between 65 and 85 degrees Fahrenheit. This beautiful plant is toxic to humans and pets.",
    image: assets.plant03,
    bids: [
      {
        id: "BID-31",
        name: "Tim and Amalia",
        price: 85.00,
        image: assets.person02,
        date: "August 31, 2023 at 9:10 AM",
      },
      {
        id: "BID-32",
        name: "Jennifer Sia",
        price: 87.50,
        image: assets.person03,
        date: "August 30, 2023 at 13:04 PM",
      },
    ],
  },
  {
    id: "plant-04",
    name: "Chinese Money Plant",
    creator: "Leonard T",
    price: 35.00,
    description:
      "Although this popular houseplant may be difficult to get your hands on, once you have one it is surprisingly easy to care for. Provide your Pilea peperomioides with bright light, semi-regular watering, and some light feeding in the spring and summer months and it will thrive. Plus, Chinese money plants are easy to propagate, and a healthy plant will produce plenty of offshoots which you can separate to create more plants—one of the reasons it is called the friendship plant. Share them with friends, or keep them for yourself. Once you have a pancake plant, you will never need to buy another one!",
    image: assets.plant04,
    bids: [
      {
        id: "BID-41",
        name: "BlueHeart02",
        price: 45.50,
        image: assets.person02,
        date: "August 21, 2023 at 11:20 PM",
      },
      {
        id: "BID-42",
        name: "Jennifer Sia",
        price: 54.25,
        image: assets.person03,
        date: "August 21, 2023 at 17:12 PM",
      },
      {
        id: "BID-43",
        name: "Rosie Wong",
        price: 55.15,
        image: assets.person04,
        date: "August 23, 2023 at 13:22 PM",
      },
      {
        id: "BID-44",
        name: "Vincent Swift",
        price: 57.15,
        image: assets.person02,
        date: "August 22, 2023 at 21:20 PM",
      },
    ],
  },
  {
    id: "plant-05",
    name: "Photos",
    creator: "David Adam",
    price: 25.55,
    description:
      "Water your Pothos every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light. Some signs of overwatering include yellowing leaves and black stems, while underwatered plants will wilt and their potting mix will dry out.",
    image: assets.plant05,
    bids: [
      {
        id: "BID-51",
        name: "Jessica Tan",
        price: 30.00,
        image: assets.person02,
        date: "September 12, 2023 at 17:00 PM",
      },
    ],
  },
  {
    id: "plant-06",
    name: "Elephant ears",
    creator: "Oana Chris",
    price: 50.00,
    description:
      "Elephant ears offer some of the boldest foliage you could ever want in a garden. Huge, heart-shaped leaves come in black, purple, emerald green, chartreuse, yellow, or a mix of colors. The mammoth leaves can be more than three feet long on plants that can grow higher than six feet tall. ",
    image: assets.plant06,
    bids: [
      {
        id: "BID-61",
        name: "Helen T",
        price: 50.25,
        image: assets.person02,
        date: "September 22, 2023 at 2:10 AM",
      },
      {
        id: "BID-62",
        name: "Jennifer Sia",
        price: 50.50,
        image: assets.person03,
        date: "September 23, 2023 at 8:34 AM",
      },
      {
        id: "BID-63",
        name: "Rosie Wong",
        price: 60.75,
        image: assets.person04,
        date: "September 22, 2023 at 7:17 AM",
      },
      {
        id: "BID-64",
        name: "Siti Nurhaliza",
        price: 61.25,
        image: assets.person02,
        date: "September 23, 2023 at 8:50 AM",
      },
      {
        id: "BID-65",
        name: "Kaitlyn Lee",
        price: 67.25,
        image: assets.person02,
        date: "September 24, 2023 at 18:02 PM",
      },
    ],
  },
  {
    id: "plant-07",
    name: "Snake Plant",
    creator: "Pamela Davidson",
    price: 30.00,
    description:
      "Snake plants, also known as “Mother-in-Law’s Tongue” and Sansevieria, are one of the easiest houseplants to care for. This succulent plant is very forgiving and perfect for beginners. Too much water and freezing temperatures are two of the very few things that can affect this plant in a significant way. Soggy soil will cause root rot, and extended exposure to cold temperatures can damage the foliage.",
    image: assets.plant07,
    bids: [],
  },
];

export { PlantData };
