export const hiContent = {
  intro: {
    brief: "Hi! I am Timo, an Industrial Design student at the Eindhoven University of Technology. I am driven by the intersection of play, technology, and human agency.",
    imagePlaceholder: "Path to your profile picture or project image"
  },
  
  vision: {
    title: "AGENCY THROUGH PLAYFUL EMBODIED INTERACTION",
    paragraphs: 
    [`Technology has become deeply embedded in our everyday life, shaping how we communicate, work and interact with our environment. At the same time, society is entering a Transformation Economy, where the value of a product is no longer found in its sole functionality, but rather how they enable lasting positive change through personalised experiences. I believe this shift has become a necessity, rather than a trend: the increasing societal pressures such as workforce shortages require individuals to manage parts of their own lives more than ever (e.g. patients managing their treatment and students engaged in self-directed learning). As a result, interactive technology has an increasingly relevant role in enabling people to have agency over their own lives.`,
      `However, this transition imposes significant challenges. Many solutions for self-management rely heavily on screen-based interfaces; positioning humans as passive observers and distancing them from their embodied and social engagements. In parallel, the acceleration of the design process through digital tools and AI risks designers becoming confined to their virtual environments rather than physically engaging with the complex, real-world contexts they design for. Especially within healthcare, I see this development leading to products that are optimised for technical efficiency and revenue, rather than the lived experience of the user.`,
      `I believe designers must bridge this gap by embracing playful and embodied interaction to foster a true sense of agency: the user’s ability and motivation to actively shape their own path. By thinking beyond screens, we can make abstract systems and decision-making more intuitive, (socially) supportive and inviting. Agency should not be regarded as a burden of responsibility, but an empowering experience of competence, autonomy and relatedness. Additionally, I urge designers to stay critical of how technology shapes human decision-making. With the rise of automation and AI, there is a risk that systems increasingly take over actions and decisions from users and ourselves. I believe designers should aim to keep users meaningfully involved in these processes; technology should support humans in their actions rather than replace their engagement with the world.`,
      `This does not mean I see digital systems as inherently problematic. On the contrary, they offer effective ways to i.e. communicate information and connect over large distances. The challenge was therefore never to replace digital interaction, but to balance it with richer, dynamic forms of engagement in the physical world. Ultimately, I see this approach as a way to design for what it means to remain human: to stay autonomous, to connect with others and to simply have fun. By tackling challenges together through physical and playful engagement, we ensure the final design never renders the user passive, but instead encourages active engagement with the world around us.`
    ]
  },

  identity: {
    title: "A CREATIVE ENGINEER WITH A PASSION FOR PLAY",
    paragraphs: [
        `I am a creative engineer that sees play as the ultimate medium for designing meaningful interactions between people and technology. I believe “playful” is not simply about play, but also about nurturing a joyful and safe space for growth, particularly in the domains of health, rehabilitation, and education for children. My ambitious ideas take form through embodied interaction and multimodal feedback. With a background in both the humanities and engineering, I bring an interdisciplinary perspective to the table. Paired with my collaborative nature, this vision allows me to navigate multidisciplinary contexts and engage with diverse stakeholders.`,
        `My processes are highly hands-on and iterative. Because of my technical skills, I quickly bring ideas to life using experiential prototypes, that give me invaluable feedback from the target user. I constantly guide my decisions through hands-on exploration and user-centered research, making sure each step is grounded in technical and social understanding. For example, while co-developing a playful rehabilitation tool with pediatric therapists through interviews, I explored different sensors and actuators to better align the tool with their workflow. It is the way in which design and research constantly shape and challenge each other that allows me to tackle my processes effectively.`,
        `Additionally, it is the uncertainty of contexts that allows me to thrive, as there is much room to discover, learn, and adapt. Because this brings forward a strong personal vision, I favor collaboration where open dialogue is encouraged to challenge ideas and blind spots. What sets my work apart is the strong technical and expressive qualities and the belief that technology should not only solve problems but also spark joy and amazement. Looking ahead, I aim to push the boundaries of soft robotics in healthcare and education for children. By developing such empowering solutions, I aim to make their challenging moments brighter and bring genuine wonder to their faces.`,
    ]
  }
};

export const developmentContent = {
  title: "Expertise Areas",
  intro: "Throughout my Master’s program, I have developed my professional identity across five core expertise areas. Click a module to see how it connects to my other skills.",
  
  areas: [
    {
      id: "tr",
      title: "Technology & Realization",
      abbr: "T&R",
      paragraphs: [
        `Technology and realization form a central pillar of my identity as a designer. Throughout my master’s program I have consistently integrated technological components into my prototypes, combining elements from electrical engineering, mechanical design, and interaction design.`,
        `In several projects I developed and implemented complex sensing systems, such as a grid-based pressure sensor and a capacitive sensing grid. Designing and implementing these systems required me to dive deeply into technical documentation, including datasheets and electronic specifications, in order to understand how the sensors could be applied effectively within an interactive design context.`,
        `The development of these systems involved calculations at multiple levels, ranging from mechanical considerations in the CAD models to electronic calculations for sensor data behavior and signal processing. To address these challenges I actively collaborated with experts from different technical disciplines within my company and in the broader field.`,
        `Another aspect of this work involved making engineering trade-offs, for instance when selecting LED components to balance brightness, energy consumption, and system stability. Through this process I learned to navigate constraints and translate technical possibilities into meaningful interaction experiences.`,
        `Finally, during my Final Master Project I expanded my technical capabilities by designing more advanced printed circuit boards (PCBs). This allowed me to integrate multiple electronic components into a single system and create more robust prototypes that could be reliably tested in real-world contexts.`
      ],
      inputs: [
        { id: "ca", label: "Creative and explorative interactions lead to the investigation of new technologies", weight: 2 },
        { id: "mdc", label: "The use of APIs and data processing programs in prototypes", weight: 3 },
        { id: "be", label: "Making use of networking skills in acquiring partners for realization (CNC, 3D-printing, woodworking etc.), besides market-oriented partners", weight: 1 },

      ],
      outputs: [
        { id: "be", label: "Using high-quality deliverables to gain credibility from stakeholders and get them on board as partners", weight: 2},
        { id: "ca", label: "The versatile set of skills in terms of realization allows for the exploration and testing of various interactive experiences and the use of a wide array of materials.", weight: 3},
        { id: "us", label: "Fully interactive, polished prototypes allow for accurate and meaningful evaluations in terms of user research.", weight: 3 }
      ],
      projectImages: ['Images/tr/1.png', 'Images/tr/2.png', 'Images/tr/3.png', 'Images/tr/4.png']
    },
    {
      id: "mdc",
      title: "Math, Data & Computing",
      abbr: "MD&C",
      paragraphs: [
        `Within my design practice, mathematical and computational tools primarily serve as means to support design decisions and interpret complex datasets. For example, in previous projects I used statistical methods such as ANOVA testing to analyze experimental data and validate hypotheses about user interaction patterns.`,
        `In addition, I frequently use computational tools such as Python to process and analyze larger datasets or to explore machine learning approaches. These skills allow me to move beyond qualitative impressions and support design decisions with quantitative evidence.`,
        `Mathematics also plays an important role in the realization of interactive prototypes. When working with LED strips and interactive lighting systems, for instance, I used vector calculations to determine spatial relationships between LEDs and interaction points. These calculations helped translate abstract interaction concepts into precise physical implementations.`,
        `Through these experiences I have learned to integrate computational and mathematical reasoning into the design process, not as an isolated analytical step but as a tool that informs both the design of interactive behavior and the interpretation of user data.`
      ],
      inputs: [
        { id: "us", label: "Experience in ethical considerations with vulnerable target-audiences lead to possibilities within data-gathering", weight: 1 },
       
      ],
      outputs: [
        { id: "ca", label: "The ability to translate raw quantitative data into creative material through the data-enabled design process", weight: 2 },
        { id: "be", label: "Through scientific calculations of force, stress etc. and the application of FEM analysis, we can formulate safety and risk guidelines", weight: 2 },
        { id: "tr", label: "he use of APIs and data processing programs in prototypes", weight: 1 },

      ]
    },
     {
      id: "us",
      title: "User & Society",
      abbr: "U&S",
      paragraphs: [
        `User and Society has always been a central perspective in my design approach. I aim to understand users not only through isolated feedback moments but by studying them within their real-life context.`,
        `To achieve this, I regularly employ qualitative research methods such as observations, contextual inquiries, and semi-structured interviews. These methods allow me to capture nuanced insights about user behavior, motivations, and environmental constraints.`,
        `In my Final Master Project this approach was particularly important, as the project was situated within a pediatric hospital environment. Conducting research directly within this context allowed me to understand how patients, caregivers, and healthcare professionals interact with medical equipment and spaces. These insights informed both the design of the interaction and the broader experience of the product.`,
        `By grounding my design process in real-world contexts and engaging closely with stakeholders, I aim to create solutions that not only function technically but also respond to the social, emotional, and environmental needs of users.`
      ],
      inputs: [
        { id: "us", label: "Fully interactive, polished prototypes allow for accurate and meaningful evaluations in terms of user research.", weight: 3 },
        { id: "be", label: "Leveraging my professional and enthusiastic stance in acquiring partners, providing a gateway to a valuable source of users", weight: 3 },
      ],
      outputs: [
        { id: "be", label: "The use of user-centred research methods to fill in the gaps in a wide variety of business innovation models and templates", weight: 2 },
        { id: "mdc", label: "Experience in ethical considerations with vulnerable target-audiences lead to possibilities within data-gathering", weight: 1 },
      ]
    },
    {
      id: "be",
      title: "Business & Entrepreneurship",
      abbr: "B&E",
      paragraphs: [
        `During my master’s I have developed the capability to position design projects at the heart of a broader ecosystem of stakeholders and experts to optimally align my decisions with real-world needs. Particularly from my Preparation FMP onwards, I learned that meaningful innovation can only emerge in close collaboration with experts and partners that bring complementary perspectives.`,
        `This immediately brings forward one of my main strengths as a designer: connecting and aligning stakeholders. Rather than relying on formal meetings, I leveraged my enthusiastic and [fuck it, let’s do it] character to maintain the active involvement of partners and experts throughout the project. This approach led to a fruitful and trusty collaboration, which proved essential for continuing the development of Libom beyond the scope of the project.`,
        `To structure the connections I would have to arrange and formulate the potential value of the concept, I deployed several business frameworks like the BMC, VPC and service blueprint. It helped me to formulate how the design creates value and for whom, by whom, with whom and which actors were essential in implementing the solution.`,
        `Additionally, I conducted a risk analysis during the development of the prototype to evaluate potential safety concerns in the hospital environment. This exercise helped me balance technical ambition with responsible innovation, ensuring that the prototype would be safe enough for real-world testing while still enabling meaningful interaction exploration.`
      ],
      inputs: [
        { id: "ca", label: "Polished prototypes to tell a story", weight: 3 },
        { id: "tr", label: "Using high-quality deliverables to gain credibility from stakeholders and get them on board as partners", weight: 2},
        { id: "us", label: "User-centered methods for innovation models", weight: 2 }
      ],
      outputs: [
        { id: "ca", label: "Networking for fruitful co-design", weight: 2 },
        { id: "us", label: "Stakeholder network for user research access", weight: 3 }
      ]
    },
    {
      id: "ca",
      title: "Creativity & Aesthetics",
      abbr: "C&A",
      paragraphs: [
        `Similar to how I approach the network of partners, creativity in my design practice often emerges through the same network of collaborators as well. I frequently facilitate co-design activities to generate ideas with stakeholders. These sessions allow diverse perspectives to shape the ideas, grounded in the actual context.`,
        `On the other hand, my network is not the only creative material; data can be too. By collecting quantitative data using design probe and data-collecting and analysis methods, I was able to identify patterns in user engagement and behavior to use this as creative material for further informing design decisions.`,
        `Alongside these collaborative and data-driven methods, I rely heavily on traditional ideation techniques such as sketching, mind mapping, and rapid concept exploration. These methods allow me to externalize ideas quickly and iterate on interaction concepts before moving into prototyping.`,
        `A defining aspect of my work is the attention to aesthetic quality and experiential detail. Because of my strong prototyping and realization skills, I am able to explore a wide range of materials, forms, and interactions, enabling me to move beyond simple mock-ups toward prototypes that communicate a convincing experience. When necessary, I draw upon my professional network to access materials or fabrication processes that allow the design to achieve the intended aesthetic and experiential qualities.`
      ],
      inputs: [
        { id: "mdc", label: "Using data as creative material", weight: 2 },
        { id: "tr", label: "Versatile skills for material exploration", weight: 3 },
        { id: "be", label: "Networking for fruitful co-design", weight: 2 }
      ],
      outputs: [
        { id: "tr", label: "Staying creative in technical problems", weight: 2 },
        { id: "be", label: "Polished prototypes to tell a story", weight: 3 }
      ]
    },
    
   
    
  ]
};

export const expertiseIntersections = {
  // Main Expertise Areas
  us: { title: "User & Society", description: "Ethical approach to patient-centric design." },
  be: { title: "Business & Entrepreneurship", description: "Networking and (multi-)stakeholder input." },
  tr: { title: "Technology & Realization", description: "Prototype development and exploration." },
  ca: { title: "Creativity & Aesthetics", description: "Creative exploration to transform experiences." },
  mdc: { title: "Math, Data & Computing", description: "Processing and analysing quantitative data." },

  // Overlaps (The "Banger" content)
  us_ca: { title: "US + CA", description: "Creative exploration for health experiences." },
  ca_tr: { title: "CA + TR", description: "Polished prototypes to explore interactions." },
  tr_be: { title: "TR + BE", description: "Prototypes as boundary objects between partners." },
  be_mdc: { title: "BE + MDC", description: "Strategic awareness of data structures." },
  mdc_us: { title: "MDC + US", description: "Human-centered data interactions in healthcare." }
};


export const projectsContent = [
  {
    id: "libom",
    tier: "graduation",
    title: "Libom",
    meta: "Final Master Project | 2026",
    brief: "Restoring agency in pediatric recovery through playful interaction.",
    image: "/Images/libom/thumbnail.jpg"
  },
   {
    id: "Kiko de Kikker",
    tier: "graduation",
    title: "Kiko de Kikker",
    meta: "Preparation Final Master Project | 2025 - 2026",
    brief: "Improving motivation for early mobilization among pediatric patients.",
    // Haal de eerste slash weg als je die nog had, of voeg hem toe als het niet werkt
    image: "/Images/kiko-de-kikker/thumbnail.jpg", 
    // /Images/kiko-de-kikker/thumbnail.jpg" 
},
 {
    id: "physi",
    tier: "master",
    title: "Physi",
    meta: "M1.1 Design Project | 2023 - 2024",
    brief: "Designing a playful add-on for data-informed children’s physio therapy",
    image: "/Images/physi/thumbnail.jpg"
  },
  {
    id: "crowdcollab",
    tier: "master",
    title: "Crowdcollab",
    meta: "Designing UIS w. Emerging Technologies | 2023 - 2024",
    brief: "A tangible, collaborative tool for multi-stakeholder crowd management teams",
    image: "/Images/crowdcollab/thumbnail.jpg"
  },
  {
    id: "TORQUE",
    tier: "master",
    title: "TORQUE",
    meta: "M1.2 Research Project | 2024",
    brief: "Researching haptic feedback strategies for robotic teleoperation",
    image: "/Images/torque/thumbnail.jpg"
  },
{
    id: "hajraaoutdoor",
    tier: "extracurricular",
    title: "PR Responsible for Europe's largest outdoor volleyball tournament",
    meta: "Hajraa Outdoor | 2024 - 2025",
    brief: "PR Responsible for Europe's largest outdoor volleybal tournament.",
    image: "/Images/hajraa-outdoor/thumbnail.jpg"
  },
  {
    id: "tuecontest",
    tier: "extracurricular",
    title: "Audience Award at the TU/e Contest",
    meta: "TU/e contest | 2026",
    brief: "Designing large-scale interactive light installations for GLOW Eindhoven.",
    image: "/Images/tue-contest/thumbnail.jpg", 
  },
  {
    id: "ignite",
    tier: "extracurricular",
    title: "Technology Designer at Team IGNITE",
    meta: "Team IGNITE - Wayfinding - Glow 2023 | 2023",
    brief: "Designing large-scale interactive light installations for GLOW Eindhoven.",
    image: "/Images/ignite/thumbnail.jpg", 
  },
  {
    id: "vitalflow",
    tier: "archive",
    title: "VitalFlow",
    meta: "Data-enabled Design | 2024",
    brief: "Researching haptic feedback strategies for robotic teleoperation",
    image: "/Images/archive/vitalflow.jpeg"
  },
   {
    id: "bouwplaats",
    tier: "archive",
    title: "De Bouwplaats",
    meta: "Final Bachelor Project | 2022",
    brief: "XR for citizen participation in Urban Design & Planning",
    image: "/Images/archive/bouwplaats.png"
  },
  {
    id: "ndwconnectar",
    tier: "archive",
    title: "NDW Connect",
    meta: "B3.1 Internship | 2024",
    brief: "Researching haptic feedback strategies for robotic teleoperation",
    image: "/Images/archive/ndwconnectar.png"
  },
  {
    id: "aromaesthetic",
    tier: "archive",
    title: "Aromaesthetic",
    meta: "A designerly perspective on IoT | 2025",
    brief: "A tangible, collaborative tool for multi-stakeholder crowd management teams",
    image: "/Images/archive/aromaesthetic.jpg"
  },
  
  {
    id: "microfluidicvalve",
    tier: "archive",
    title: "Designing a microfluidic valve",
    meta: "Microfabrication methods | 2024",
    brief: "Researching haptic feedback strategies for robotic teleoperation",
    image: "/Images/archive/microfluidicvalve.png"
  },
  
   {
    id: "cardiocalendar",
    tier: "archive",
    title: "CardioCalendar",
    meta: "Embodying intelligent behavior in a social context | 2023",
    brief: "Researching haptic feedback strategies for robotic teleoperation",
    image: "/Images/archive/cardiocalendar.png"
  },
    {
    id: "handysnake",
    tier: "archive",
    title: "HandySnake",
    meta: "Embodying intelligent behavior in a social context | 2023",
    brief: "Researching haptic feedback strategies for robotic teleoperation",
    image: "/Images/archive/handysnake.jpg"
  }
 
  // Add more projects here following the same structure
];

// content.js

export const legoContent = [
  {
    id: "cola-dispenser",
    year: "2012",
    title: "Lego Cola Dispenser",
    description: "One of my first LEGO machines. By throwing in a 1-euro coin, you can push the rod inside, that pushes a can of coke over the edge for you to consume.",
    videoId: "z-T1SkgBcUo"
  },
  {
    id: "egg-painting-machine",
    year: "2013",
    title: "Lego Egg Painting Machine",
    description: "I was tired of constantly having to hold an egg in order to paint it. That’s why I made this machine in which you can strap the egg just tight enough so the egg stays in place but doesn’t break. The LEGO Technic motor will make the egg rotate very fast. Now you can simply put a pen through the hole and create beautiful eastereggs to hide them in your garden.",
    videoId: "sWvHTdHbID8"
  },
  {
    id: "coin-pusher-v1",
    year: "2013",
    title: "Coin Pusher V1",
    description: "This was my first time using a bit more complicated system with Lego Technic. I managed to think of a system that allows a fast spinning motor to rotate just fast enough for the coin pusher to be playable.",
    videoId: ["tcgK2gfScoE", "oBZ9h0tuJMg"] // Note: Je gaf twee links, dit is de eerste.
  },
  {
    id: "claw-machine",
    year: "2013",
    title: "Claw Machine",
    description: "This project includes the Lego Mindstorms NXT 2.0. After a color scanner will identify the 1 Euro coin, you can use the two front buttons to move the claw backwards and to the right. It will move down and up again and hopefully pick up your prize.",
    image: "/Images/other/clawmachine.jpg" // Je had hier geen link bijstaan, voeg de ID toe indien je die hebt!
  },
  {
    id: "pinball-machine-v1",
    year: "2014",
    title: "Pinball Machine V1",
    description: "This project includes the Lego Mindstorms NXT 2.0. After a color scanner will identify the 1 Euro coin, three balls will be dispensed at an interval of 10 seconds. If the ball reaches the goal at the back, you will receive a gumball.",
    videoId: "ycKqOqMonNA"
  },
  {
    id: "coin-pusher-v2",
    year: "2015",
    title: "Coin Pusher V2",
    description: "This pushing mechanism is based on Lego Technic via a rotating arm mechanism and the coin dispensing mechanism works mechanically with a sliding mechanism.",
    videoId: "KzoUZhP2n-c"
  },
  {
    id: "horse-race",
    year: "2016",
    title: "Horse Race",
    description: "Here you battle your opponent in a nerve-wrecking game. By throwing your ball in the hole at the end your horse will move forward. If it falls in the holes on the side, nothing will happen. In both cases your ball will be returned. If your horse reaches the end first, you win!",
    videoId: "5RZS9Ao2HoE"
  },
  {
    id: "lays-machine",
    year: "2016",
    title: "Lay’s Machine",
    description: "By throwing in a 1 Euro coin, you can decide whether you want a Paprika or Natural bag of chips. Depending on which side is being pressed, the according bag will be provided to you.",
    videoId: "GF_8HvavN4M"
  },
  {
    id: "pinball-machine-v2",
    year: "2017-2018",
    title: "Lego Pinball Machine V2",
    description: "This project is based again on Lego Mindstorms NXT 2.0. It includes a lot of visual elements that make it a lot of fun to use. It’s minecraft themed. You can throw in a 1 Euro coin at the top and balls will be dispensed. By pulling an elastic lever, you can shoot the ball upwards. You have double flippers, elastic bands for the excitement and even a rail that goes over the whole thing.",
    videoId: "931L9c0CqH8",
    image: "/Images/other/pinballmachinev2.jpg" // Je had hier geen link bijstaan, voeg de ID toe indien je die hebt!
  },
  {
    id: "sideways-track",
    year: "2024",
    title: "Sideways LEGO 9V track hill",
    description: "I put the LEGO 9v track pieces on their side and powered each side individually. This allows for a track design with steeper hills, fostering more play opportunities and creative layouts.",
    videoId: "B7S_m_GzB0U"
  }
];