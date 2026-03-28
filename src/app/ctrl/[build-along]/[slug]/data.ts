import {
  AdruinoUno,
  Firebase,
  MICROCONTROLLER,
  MICROPHONEMODULE,
  NeuroHomeHero,
  OpenAi,
  RELAYMODULE,
  VsCode,
} from "../../../../../public/images/images";

export const buildAlong = [
  {
    id: 1,
    name: "Neuro-Home",
    slug: "neuro-home",
    subTitle: "AI-Powered Voice-Controlled Smart Home System",
    paragraphOne:
      "Neuro-Home is an AI-powered smart home system that lets users control IoT devices with natural, everyday language. Instead of strict commands, it understands context and intent, enabling actions like turning on a fan when someone says “this room is hot,” making home interaction more intuitive and human-friendly.",
    paragraphTwo:
      "The system uses an ESP32 microcontroller paired with a microphone to capture voice input. Audio is transcribed and interpreted through natural language processing, then converted into control signals for connected devices like lights or fans. Communication is handled via Wi-Fi using HTTP or MQTT, allowing real-time interaction and easy expansion for additional devices and automation.",
    category: [
      "Voice Control",
      "Home Automation",
      "Energy Management",
      "Security Systems",
      "IoT",
    ],
    mainImage: NeuroHomeHero,
    components: [
      {
        id: 1,
        image: MICROCONTROLLER,
        componentName: "MICROCONTROLLER",
        code: "ESP8266",
        subtitle: "Central processing unit that  controls connected devices.",
      },
      {
        id: 2,
        image: MICROPHONEMODULE,
        componentName: "MICROPHONE MODULE",
        code: "KY-037",
        subtitle: "Captures voice input from the user.",
      },
      {
        id: 3,
        image: RELAYMODULE,
        componentName: "RELAY MODULE",
        code: "Relay",
        subtitle: "Switches appliances based on control signals.",
      },
    ],
    appsPlatforms: [
      {
        id: 1,
        icon: AdruinoUno,
        name: "Arduino IDE",
        desc: "Write, compile, and upload firmware to the ESP32 microcontroller.",
      },
      {
        id: 2,
        icon: VsCode,
        name: "VS Code",
        desc: "Code editing, debugging, and integration with Arduino or PlatformIO for development.",
      },
      {
        id: 3,
        icon: OpenAi,
        name: "Open AI API",
        desc: "To easily convert Natural Language from the user to I2C Commands",
      },
      {
        id: 4,
        icon: Firebase,
        name: "Firebase",
        desc: "Cloud database and real-time storage for device states, user preferences, and logs.",
      },
    ],
  },
];
