const questions = {
  "11_math": [
    { q: "What is the derivative of x^2?", options: ["x", "2x", "x^2", "2"], answer: 1 },
    { q: "What is the integral of 1/x?", options: ["x", "ln|x|", "x^2/2", "1/x^2"], answer: 1 }
  ],

  "11_physics": [
    { q: "What is the SI unit of power?", options: ["Watt", "Joule", "Newton", "Volt"], answer: 0 },
    { q: "Acceleration due to gravity on Earth?", options: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "9 m/s²"], answer: 0 }
  ],

// Class 11th chemistry upto chapter 4

  "11_chemistry": [
    {
    "q": "A pure substance which contains only one type of atom is called ————–.",
    options: [
      "An element",
      "A compound",
      "A solid",
      "A liquid"
    ],
    "answer": 0
  },
  {
    "q": "The smallest particle that can take part in chemical reactions is ————–.",
    options: [
      "Atom",
      "Molecule",
      "Both (a) and (b)",
      "None of these"
    ],
    "answer": 2
  },
  {
    "q": "Which of the following is a homogeneous mixture?",
    options: [
      "Mixture of soil and water",
      "Sugar solution",
      "Mixture of sugar, salt and sand",
      "Iodised table salt"
    ],
    "answer": 1
  },
  {
    "q": "The significant figures in 0.00051 are ————–.",
    options: [
      "5",
      "3",
      "2",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Formation of CO and CO2 illustrates the law of ————–.",
    options: [
      "Law of conservation of mass",
      "Law of Reciprocal proportion",
      "Law of Constant Proportion",
      "Law of Multiple Proportion"
    ],
    "answer": 3
  },
  {
    "q": "The number of significant figures in 6.02 x 10^23 is ————–.",
    options: [
      "23",
      "3",
      "4",
      "26"
    ],
    "answer": 1
  },
  {
    "q": "The prefix 10^18 is ————–.",
    options: [
      "Giga",
      "Exa",
      "Kilo",
      "Mega"
    ],
    "answer": 1
  },
  {
    "q": "The mass of an atom of carbon is ————–.",
    options: [
      "1g",
      "1.99 x 10^-23 g",
      "1/12 g",
      "1.99 x 10^23 g"
    ],
    "answer": 1
  },
  {
    "q": "A measured temperature on Fahrenheit scale is 200°F. What will this reading be on the Celsius Scale?",
    options: [
      "40 ℃",
      "94 ℃",
      "93.3 ℃",
      "30 ℃"
    ],
    "answer": 2
  },
  {
  "q": "Which of the following pairs of gases contains the same number of molecules?",
  options: [
    "16 g of O2 and 14 g of N2",
    "6 g of O2 and 22 g of CO2",
    "28 g of N2 and 22 g of CO2",
    "32 g of CO2 and 32g of N2"
  ],
  "answer": 0
},
{
    "q": "Neutron was discovered by ————–",
    "options": ["J.J Thomson", "Chadwick", "Rutherford", "Priestley"],
    "answer": 1
  },
  {
    "q": "The nucleus of the atom consists of ————–",
    "options": ["Protons and neutrons", "Protons and electrons", "Neutrons and electrons", "Protons, neutrons and electrons"],
    "answer": 0
  },
  {
    "q": "The radius of an atomic nucleus is of the order of————–",
    "options": ["10-10 cm", "10-13 cm", "10-15 cm", "10-8 cm"],
    "answer": 1
  },
  {
    "q": "Isotopes of an element have ————–",
    "options": ["Different chemical and physical properties", "Similar chemical and physical properties", "Similar chemical but different physical properties", "Similar physical but different chemical properties"],
    "answer": 2
  },
  {
    "q": "Which of the following pairs represents isobars?",
    "options": ["3He2 and 4He2", "24Mg12 and 25Mg12", "40K19 and 40Ca20", "40K19 and 39K19"],
    "answer": 2
  },
  {
    "q": "The atomic orbital is ————–",
    "options": ["The circular path of the electron", "Elliptical shaped Orbit", "Three-dimensional field around nucleus", "The region in which there is a maximum probability of finding an electron"],
    "answer": 3
  },
  {
    "q": "Principal, Azimuthal and magnetic quantum numbers are respectively related to:",
    "options": ["Size, shape and orientation", "Shape, size and orientation", "Size, orientation and shape", "None of the above"],
    "answer": 0
  },
  {
    "q": "The electronic configuration of chromium (Z=24) is:",
    "options": ["[Ne] 3s2 3p6 3d4 4s2", "[Ne] 3s2 3p6 3d5 4s1", "[Ne] 3s2 3p6 3d1 4s2", "[Ne] 3s2 3p6 4s2 4p4"],
    "answer": 1
  },
  {
    "q": "According to Aufbau principle a new electron enters the orbitals when:",
    "options": ["(n + l) is minimum", "(n + l) is maximum", "(n + m) is minimum", "(n + m) is maximum"],
    "answer": 0
  },
  {
    "q": "Which of the following is not permissible?",
    "options": ["n= 4, l = 3, m= 0", "n= 4, l = 2, m= 1", "n= 4, l = 4, m= 1", "n= 4, l = 0, m= 0"],
    "answer": 2
  },
  {
    "q": "The vertical columns in the periodic table are termed as ———-.",
    "options": ["periods", "groups", "series", "none of these"],
    "answer": 1
  },
  {
    "q": "The element with atomic number 26 will be found in group :",
    "options": ["2", "8", "6", "10"],
    "answer": 1
  },
  {
    "q": "The elements with atomic numbers 9, 17, 35, 53, 85 are all ———-",
    "options": ["halogens", "noble gases", "alkali earth metals", "transition metals"],
    "answer": 0
  },
  {
    "q": "Which of the following electronic configurations of an atom has the lowest ionisation enthalpy?",
    "options": ["1s2 2s2 2p3", "1s2 2s2 2p6 3s1", "1s2 2s2 2p6", "1s2 2s2 2p5"],
    "answer": 1
  },
  {
    "q": "The Ionic radius of cation is always———",
    "options": ["Less than the atomic radius", "More than the atomic radius", "Equal to atomic radius", "Cannot be predicted"],
    "answer": 0
  },
  {
    "q": "Which of the following elements has the maximum negative electron gain enthalpy?",
    "options": ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"],
    "answer": 1
  },
  {
    "q": "The most electronegative element in the periodic table is———",
    "options": ["Nitrogen", "Oxygen", "Chlorine", "Fluorine"],
    "answer": 3
  },
  {
    "q": "The elements of group 16 are called———-",
    "options": ["Noble gases", "Chalcogens", "Halogens", "Alkali metals"],
    "answer": 1
  },
  {
    "q": "In a group of the periodic table the Ionization enthalpies of the elements decreases from top to bottom because of ———-",
    "options": ["Increase in densities", "Decrease in chemical reactivities", "Increase in atomic sizes", "Decrease in electronegativities"],
    "answer": 2
  },
  {
    "q": "The smallest ion among the following is",
    "options": ["Na+", "Al3+", "Mg2+", "Si4+"],
    "answer": 3
  },
  {
    "q": "Which one of them is the weakest?",
    "options": ["Ionic bond", "Covalent bond", "Metallic Bond", "van der Waals force"],
    "answer": 3
  },
  {
    "q": "The bond angle around atom which uses sp2 hybridization is ———–",
    "options": ["120°", "180°", "107°", "109° . 28’"],
    "answer": 0
  },
  {
    "q": "In the resonating structures of benzene, the number of sigma and pi bonds are",
    "options": ["3π and 12σ", "3σ and 3π", "6σ and 6π", "12σ and 12π"],
    "answer": 0
  },
  {
    "q": "Which of the following substances has a dipole moment more than zero?",
    "options": ["Water", "Methane", "Carbon dioxide", "Nitrogen"],
    "answer": 0
  },
  {
    "q": "The ion which is iso-electronic with CO is —————",
    "options": ["CN¯", "O2¯", "N2+", "O2+"],
    "answer": 0
  },
  {
    "q": "Which is the correct order of O2 species in terms of bond order?",
    "options": ["O2+ < O2- < O22+", "O2– < O2+ < O22+", "O22+ < O2+ < O2–", "O22+ < O2– < O2+"],
    "answer": 1
  },
  {
    "q": "Which of the following molecules have trigonal planar geometry?",
    "options": ["BF3", "NH3", "PCl3", "IF3"],
    "answer": 0
  },
  {
    "q": "During change of O2 to O22- ion, the electron adds on which of the following orbitals?",
    "options": ["σ* orbital", "π orbital", "σ orbital", "π* orbital"],
    "answer": 3
  },
  {
    "q": "Ionic bonds will be formed more easily between elements with comparatively:",
    "options": [
      "low ionization enthalpy and high electron affinity",
      "high ionization enthalpy and high electron affinity",
      "low ionization enthalpy and low electron affinity",
      "high ionization enthalpy and low electron affinity"
    ],
    "answer": 0
  }
  ],

// Class 11th Biology

  "11_biology": [
    { q: "Basic unit of life?", options: ["Cell", "Tissue", "Organ", "Organism"], answer: 0 },
    { q: "Plant cell has?", options: ["Chloroplast", "Centrioles", "Flagella", "Cilia"], answer: 0 }
  ],

  "12_math": [
    { q: "What is the derivative of sin(x)?", options: ["cos(x)", "-cos(x)", "-sin(x)", "1"], answer: 0 },
    { q: "∫cos(x) dx =", options: ["sin(x)", "-sin(x)", "cos(x)", "-cos(x)"], answer: 0 }
  ],

  "12_physics": [
    { q: "Unit of Force?", options: ["Newton", "Watt", "Joule", "Pascal"], answer: 0 },
    { q: "Speed of Light?", options: ["3x10^8 m/s", "5x10^6 m/s", "10^3 m/s", "None"], answer: 0 }
  ],

// Class 12th chemistry Upto Chapter 12 (Aldehydes, Ketones, and Carboxylic Acids)

  "12_chemistry": [
    { q: "What are the key factors of solid-state reactions?", options: ["Size of the particles", "Mechanical properties of solids", "Thermodynamic and kinetic factors", "Environmental factors"], answer: 3 },
    { q: "Which approach can be employed to produce a high degree of homogeneity in the creation of ZnFe2O4 spinel?", options: ["Distillation method", "Vaporization method", "Coprecipitation method", "Crystallization method"], answer: 2 },
    { q: "In the zone melting approach, which of the following principles was used?", options: ["Impurities concentrate in the liquid phase than in the gaseous phase", "Impurities concentrate in the solid than in the liquid phase", "Impurities concentrate in the gaseous phase than in the solid phase",  "Impurities concentrate in the liquid phase than in the solid phase"], answer: 0 },
    { q: "Which solid structure has a definite and sharp melting point?", options: ["All types of solids", "No type of solid", "Amorphous solids", "Crystalline solids"], answer: 0 },
    { q: "___ is a crystalline’s basic repetitive structural unit.", options: ["Monomer", "Molecule", "Unit cell", "Atom"], answer: 2 },
    { q: "Sulfur exists in two polymorphic forms ____ and ____", options: ["rhombic and monoclinic", "rhombic and triclinic", "hexagonal and triclinic", "hexagonal and monoclinic"], answer: 0 },
    { q: "What is the total number of Bravais lattices in the crystal structures?", options: ["3", "6", "14", "24"], answer: 2 },
    { q: "When X-rays are diffracted by a series of planes, the resultant intensity is sometimes zero; these are created by absent reflections; what is the number of absent reflections divided?", options: ["2", "10", "50", "100"], answer: 0 },
  {
    q: "Which of the following claims about crystal lattice diffraction patterns is correct?",
    options: [
      "Diffraction patterns possess a centre of symmetry",
      "Diffraction patterns don’t have centre of symmetry",
      "Diffraction patterns are linear space",
      "Diffraction patterns contains α-rays"
    ],
    answer: 0
  },
  {
    q: "What are the crystallization’s initial materials?",
    options: [
      "Liquid, aqueous solution, emulsion",
      "Gas, aqueous solution, foam",
      "Aqueous solution, melt, glass or gel",
      "Solid, gas, melt, solid aerosol"
    ],
    answer: 2
  },
  {
    q: "The volume occupied by a single gas in a mixture at the same temperature and pressure is referred to as the single-gas volume.",
    options: [
      "Absolute volume",
      "Partial volume",
      "Total volume of a gas mixture",
      "None of the mentioned"
    ],
    answer: 1
  },
  {
    q: "The pressure that a single component in a gaseous mixture would exert if it existed alone in the same volume as the mixture and at the same temperature as the mixture is referred to as.",
    options: [
      "Absolute pressure",
      "Partial pressure",
      "Total pressure of a gas mixture",
      "None of the mentioned"
    ],
    answer: 1
  },
  {
    q: "___ _ obeys Raoult’s law in all stages of concentration.",
    options: [
      "Ideal Solution",
      "Non-Ideal solution",
      "Real Solution",
      "None of the mentioned"
    ],
    answer: 0
  },
  {
    q: "When two perfect solutions with volume V each are combined, What is the volume of the solution as a result?",
    options: [
      "V",
      "2V",
      "Greater than 2V",
      "Less than 2V"
    ],
    answer: 1
  },
  {
    q: "The heat of solution or mixing has a negative side.",
    options: [
      "Heat of solution",
      "Heat of dissolution",
      "Heat of reaction",
      "Heat of mixing"
    ],
    answer: 1
  },
  {
    q: "A solution made up of numerous components in which each component’s property is the weighted sum of its separate properties. The answer is",
    options: [
      "Ideal Solution",
      "Non-Ideal solution",
      "Real Solution",
      "None of the mentioned"
    ],
    answer: 0
  },
  {
    q: "What is an example of camphor in N2 gas?",
    options: [
      "Solid in gas solution",
      "Gas in gas solution",
      "Solid in liquid solution",
      "Liquid in gas solution"
    ],
    answer: 0
  },
  {
    q: "What happens when a solute crystal is added to a supersaturated solution?",
    options: [
      "It becomes a colloidal solution",
      "The solute dissolves in the solution",
      "The solution desaturates",
      "The solute precipitates out of the solution"
    ],
    answer: 3
  },
  {
    q: "Which of the following options is not a viable option?",
    options: [
      "Brass",
      "Bronze",
      "Hydrated salts",
      "Aerated drinks"
    ],
    answer: 3
  },
  {
    q: "What makes a solution?",
    options: [
      "Solute and solvent",
      "Solute and solute",
      "Solvent and solvent",
      "None of the above"
    ],
    answer: 0
  },
{
    q: "A cathode and an anode are the most common components of an electrochemical cell. Which of the following claims about the cathode is correct?",
    options: ["Oxidation occurs at the cathode", "Electrons move into the cathode", "Usually denoted by a negative sign", "Is usually made up of insulating material"],
    answer: 1
  },
  {
    q: "Which of the following claims about electrochemical cells is true?",
    options: ["Cell potential is an extensive property", "Cell potential is an intensive property", "The Gibbs free energy of an electrochemical cell is an intensive property", "Gibbs free energy is undefined for an electrochemical cell"],
    answer: 1
  },
  {
    q: "Which of the following does not belong in the category of electrochemical cells?",
    options: ["Voltaic cell", "Photovoltaic cell", "Electrolytic cell", "Fuel Cell"],
    answer: 1
  },
  {
    q: "Which of the following assertions about the main cell is correct?",
    options: ["An example of a primary cell is a mercury cell", "An example of a primary cell is a nickel-cadmium storage cell", "The electrode reactions can be reversed", "It can be recharged"],
    answer: 0
  },
  {
    q: "In a dry cell, which of the following is the electrolyte?",
    options: ["Potassium hydroxide", "Sulphuric acid", "Ammonium chloride", "Manganese dioxide"],
    answer: 2
  },
  {
    q: "Which of the following statements about a lead storage cell (or a lead-acid battery) is false?",
    options: ["It is a primary cell", "The cathode is made up of lead(IV) oxide", "The anode is made up of lead", "The electrolyte used is an aqueous solution of sulphuric acid"],
    answer: 0
  },
  {
    q: "The conductivity of electrolytic conductors is due to _____",
    options: ["Flow of free mobile electrons", "Movement of ions", "Either movement of electrons or ions", "Cannot be said"],
    answer: 1
  },
  {
    q: "The process of transmitting electric current through an electrolyte’s solution to decompose it is known as ____",
    options: ["Electrolyte", "Electrode", "Electrolysis", "Electrochemical cell"],
    answer: 2
  },
  {
    q: "In a fuel cell, which of the following can be utilized as a fuel?",
    options: ["Nitrogen", "Argon", "Hydrogen", "Helium"],
    answer: 2
  },
  {
    q: "Which of the following is given to a fuel cell’s cathode?",
    options: ["Hydrogen", "Nitrogen", "Oxygen", "Chlorine"],
    answer: 2
  },
  {
    q: "The study of reaction kinetics is called ____.",
    options: ["Rate of reaction", "Mechanism of reaction", "Factors which affect the rate of reaction", "All of the mentioned"],
    answer: 3
  },
  {
    q: "The reaction rate constant can be defined as the rate of reaction when each reactant’s concentration is ____.",
    options: ["Zero", "Unity", "Doubled the initial concentration", "Infinite"],
    answer: 1
  },
  {
    q: "Which of the following is the right temperature coefficient (n) expression?",
    options: ["n = Rate constant at T + 10°/Rate constant at T°", "n = Rate constant at T + 20°/Rate constant at T°", "n = Rate constant at T + 30°/Rate constant at T°", "n = Rate constant at T + 40°/Rate constant at T°"],
    answer: 0
  },
  {
    q: "When the temperature rises, what happens to the peak of the curve in the Maxwell-Boltzmann distribution graph?",
    options: ["Shifts forward and upward", "Shifts forward and downward", "Shifts backwards and upward", "Shifts backwards and downward"],
    answer: 1
  },
  {
    q: "Plotting a graph between temperature and reaction rates can reveal the temperature dependence of reaction rates.",
    options: ["Concentration of reactants and temperature", "Concentration of products and temperature", "Rate constant and temperature", "Rate of catalysis and temperature"],
    answer: 2
  },
  {
    q: "What effect does temperature have on the half-life of a first-order reaction?",
    options: ["It increases", "It decreases", "It remains the same", "Both increases as well as decrease"],
    answer: 1
  },
  {
    q: "Only a simple homogeneous reaction requires which of the following methods?",
    options: ["Integration method", "Half-life period method", "Graphical method", "Ostwald’s isolation method"],
    answer: 0
  },
  {
    q: "In 30 minutes, a first-order reaction is 50% complete. Calculate the amount of time it took to complete 87.5 percent of the reaction.",
    options: ["30 minutes", "60 minutes", "90 minutes", "120 minutes"],
    answer: 2
  },
  {
    q: "In a reaction, what is the driving force?",
    options: ["Energy given", "Energy released", "Free energy", "None of the mentioned"],
    answer: 2
  },
  {
    q: "What is the heat of reaction for ethyl acetate hydrolysis?",
    options: ["Greater than zero", "Less than zero", "Zero", "None of the mentioned"],
    answer: 2
  },
  {
    q: "When the molecules of a substance are kept at the surface of a solid or a liquid, what is the name of the process?",
    options: ["Absorption", "Adsorption", "Sorption", "Desorption"],
    answer: 1
  },
  {
    q: "Which of the following assertions about the extent of physisorption is correct?",
    options: ["Increases with increase in temperature", "Decreases with increase in surface area", "Decreases with increase in the strength of Van der Waals forces", "Decreases with increase in temperature"],
    answer: 3
  },
  {
    q: "Which of the following is a sorption example?",
    options: ["Sponge in water", "Cotton dipped in ink", "Water on silica gel", "Oxygen on the metal surface"],
    answer: 1
  },
  {
    q: "Which of the following is not a lyophobic colloidal example?",
    options: ["Gold solution", "Sulphur solution", "NaCl solution", "Blood"],
    answer: 2
  },
  {
    q: "Which of the following statements about macromolecular colloids is false?",
    options: ["Protein solution is an example of macromolecular colloids", "Man-made macro-molecules like polythene can form such colloids", "Silver solution can form macromolecular colloids", "These are normally of lyophilic type"],
    answer: 2
  },
  {
    q: "How are different colours used to make gold colloidal solutions?",
    options: ["Different diameters of colloidal gold particles", "Variable valency of gold", "Different concentrations of gold particles", "Impurities produced by different methods"],
    answer: 0
  },
  {
    q: "Which of the following slows down the reaction rate?",
    options: ["Catalytic promoters", "Homogeneous catalyst", "Catalytic poison", "Heterogeneous catalyst"],
    answer: 2
  },
  {
    q: "Which of the following increases the pace of catalyst production?",
    options: ["Decreasing Ea", "Increasing Ea", "Increasing pressure", "Increasing entropy"],
    answer: 0
  },
  {
    q: "What’s the difference between cold cream and vanishing cream?",
    options: ["Vanishing cream is a water-in-oil emulsion whereas cold cream is an oil-in-water emulsion", "Both are examples of water-in-oil emulsions", "Both are examples of oil-in-water emulsions", "Vanishing cream is an oil-in-water emulsion whereas cold cream is a water-in-oil emulsion"],
    answer: 3
  },
  {
    q: "What is the term for a liquid dispersion in another liquid?",
    options: ["Emulsion", "Aerosol", "Gel", "Foam"],
    answer: 0
  },
  {
    q: "Which of the following is not a suitable ore for extracting iron?",
    options: ["Hematite", "Magnetite", "Siderite", "Iron Pyrites"],
    answer: 3
  },
  {
    q: "Which of the following ore is used to extract silver?",
    options: ["Calamine", "Cinnabar", "Argentite", "Malachite"],
    answer: 2
  },
  {
    q: "Which of the scenarios is best for hand-picking concentration?",
    options: ["When the ores are good conductors of electricity", "When the impurities can be distinguished from the ore by the naked eye", "When either the ore or the impurities are magnetic", "When the ore particles are heavier than the impurities"],
    answer: 1
  },
  {
    q: "By electromagnetic separation, where are magnetic particles collected in concentration?",
    options: ["Away from the magnetic roller", "On the conveyor belt", "Below the magnetic roller", "Above the magnetic roller"],
    answer: 2
  },
  {
    q: "In froth flotation, what role does the revolving paddle play?",
    options: ["Enhances wettability of gangue particles", "Stabilises the froth", "Draws in the air causing frothing", "Enhances non-wettability of the ore particles"],
    answer: 2
  },
  {
    q: "What is the name of the metallurgical process in which the ore is leached and the metal is extracted using electrolysis?",
    options: ["Zone refining", "Hydrometallurgy", "Liquation", "Thermite process"],
    answer: 1
  },
  {
    q: "Oxides are formed when food is roasted. But why is it necessary to roast oxide ores?",
    options: ["To avoid gangue particles", "To get crude metal by using an oxidising agent", "To remove volatile impurities in the form of their oxides", "To make the ore porous"],
    answer: 2
  },
  {
    q: "Electrolysis does not remove which of the following metals?",
    options: ["Na", "Mg", "Al", "Fe"],
    answer: 3
  },
  {
    q: "What is the method for extracting sodium from halide ores like sodium chloride (NaCl)?",
    options: ["Pyrometallurgy", "Hydrometallurgy", "Electrometallurgy", "Magnetic separation"],
    answer: 2
  },
  {
    q: "Which of the following is an illustration of metallurgical electrochemical principles?",
    options: ["Baeyer’s process", "Solvay process", "Bergius process", "Hall-Heroult process"],
    answer: 3
  },
{
    q: "As an electroplated protective covering, what metal is used?",
    options: ["Plutonium", "Chromium", "Nickel", "Iron"],
    "answer": 1
  },
  {
    q: "_____ possesses the properties of both alkali metals and halogens.",
    options: ["Helium", "Hydrogen", "Sodium", "Chlorine"],
    "answer": 1
  },
  {
    q: "As we proceed from left to right in groups, what happens to the non-metallic nature?",
    options: ["Remains constant", "Decreases", "Increases", "Irregular"],
    "answer": 2
  },
  {
    q: "Which of the following statements concerning transuranium elements is incorrect?",
    options: ["Atomic number > 92", "Example is Thorium", "Decay radioactively as they are unstable", "Elements after Uranium"],
    "answer": 1
  },
  {
    q: "Select the appropriate statement.",
    options: ["Both actinoids and lanthanoids are less basic", "Both actinoids and lanthanoids are electropositive", "Both actinoids and lanthanoids do not exhibit magnetic and spectral properties", "Both actinoids and lanthanoids do not show same oxidation of +3"],
    "answer": 1
  },
  {
    q: "What happens to the atomic size of lanthanides as the atomic number increases?",
    options: ["The radius remains unchanged", "The radius first increases and then decreases", "The radius increases", "The radius decreases"],
    "answer": 3
  },
  {
    q: "Which of the following is not a lanthanide property?",
    options: ["They are soft metals with a white silvery colour", "They tarnish rapidly by air", "The hardness of the metals increases with increase in the atomic number", "The melting point of the metal ranges from 500-1000K"],
    "answer": 3
  },
  {
    q: "What is the lanthanide’s final element?",
    options: ["Ytterbium", "Erbium", "Thulium", "Lutetium"],
    "answer": 3
  },
  {
    q: "Baeyer’s reagent is which of the following?",
    options: ["Acidified KMnO4", "Aqueous KMnO4", "Acidified K2Cr2O7", "Alkaline KMnO4"],
    "answer": 3
  },
  {
    q: "AgCl fails to pass which of the following tests?",
    options: ["Alkaline test", "Acidic test", "Chromyl chloride test", "Baeyer’s reagent test"],
    "answer": 2
  },
  {
    q: "A coordination complex’s core atom/ion is also known as ____",
    options: ["Bronsted-Lowry acid", "Lewis base", "Lewis acid", "Bronsted-Lowry base"],
    "answer": 2
  },
  {
    q: "Which of the following has a coordination number as a feature?",
    options: ["Coordination entity", "Ligand", "Central atom", "Coordination compound"],
    "answer": 2
  },
  {
    q: "Which of the following statements about coordination compounds’ bonding is incorrect?",
    options: ["Crystal Field Theory", "VSEPR Theory", "Valence Bond Theory", "Molecular Orbital Theory"],
    "answer": 1
  },
  {
    q: "More than one sort of hybridization can occur in a complex with geometry.",
    options: ["tetrahedral", "octahedral", "trigonal bipyramidal", "square planar"],
    "answer": 1
  },
  {
    q: "Determine which of the following statements about VBT is inaccurate.",
    options: ["It does not explain the colour of coordination compounds", "It can distinguish between strong and weak ligands", "It does not explain the kinetic stabilities of coordination compounds", "It is unreliable in the prediction of geometries of 4-coordinate complexes"],
    "answer": 1
  },
  {
    q: "Which of the following determines the position of ligands in a mononuclear coordination entity’s formula?",
    options: ["Atomicity of the ligand", "Charge on the ligand", "The first letter in the name of the ligand", "Denticity of the ligand"],
    "answer": 2
  },
  {
    q: "Which of the following statements about a charged coordinating entity is correct?",
    options: ["The sign of the charge is written after the number", "The charge of the complex ion is written in parenthesis while naming the entity", "The charge is indicated as a subscript outside the square bracket on the right", "The charge on the complex ion is depicted along with the counter ion"],
    "answer": 0
  },
  {
    q: "Determine the proper name for K2[PdCl4].",
    options: ["Potassium tetrachlorinepalladium(II)", "Potassium tetrachloridopalladate(II) Potassium", "Potassium tetrachloridopalladium(II)", "tetrachlorinepalladate(II)"],
    "answer": 1
  },
  {
    q: "Which substance is used to determine the hardness of water using a simple titration?",
    options: ["Mg(EDTA)", "Fe(EDTA)", "Na2(EDTA)", "Co(EDTA)"],
    "answer": 2
  },
  {
    q: "The core atom of which of the following biologically significant coordination molecules is magnesium?",
    options: ["Vitamin B12", "Haemoglobin", "Chlorophyll", "Carboxypeptidase-A"],
    "answer": 2
  }
  ],

// Class 12th Biology Human Reproduction

  "12_biology": [
{
    q: "Planaria’s most remarkable characteristics are its ability to",
    options: [
      "Hibernation",
      "Survive without air",
      "Generate bioluminescence",
      "Regenerate"
    ],
    answer: 3
  },
  {
    q: "Fusion of unrelated gametes is called _____",
    options: [
      "Dichogamy",
      "Fertilization",
      "Autogamy",
      "Allogamy"
    ],
    answer: 3
  },
  {
    q: "Bryophyllum daigremontianum reproduces by",
    options: [
      "Vegetative propagation",
      "Budding",
      "Fission",
      "Fragmentation"
    ],
    answer: 0
  },
  {
    q: "When living tissue from a plant is extracted and placed in a medium, it is called ______",
    options: [
      "Horticulture",
      "Transplantation",
      "Explant",
      "None of the above"
    ],
    answer: 2
  },
  {
    q: "Budding, in hydra, is a form ________",
    options: [
      "Apoptosis",
      "Sexual reproduction",
      "Asexual reproduction",
      "None of the above"
    ],
    answer: 2
  },
  {
    q: "____is not a method of vegetative propagation",
    options: [
      "Grafting",
      "Cutting",
      "Lytic cycle",
      "Layering"
    ],
    answer: 2
  },
  {
    q: "_____ refers to an asexual reproduction process wherein genetically identical copies of individual plants are produced",
    options: [
      "Layering",
      "Binary fission",
      "Clonal Propagation",
      "None of the above"
    ],
    answer: 2
  },
  {
    q: "_____ shows totipotency.",
    options: [
      "Xylem",
      "Meristem",
      "Cork",
      "All of the above"
    ],
    answer: 1
  },
  {
    q: "The property of an undifferentiated cell that has the potential to develop into an entire plant is called",
    options: [
      "Budding",
      "Cloning",
      "Subpotency",
      "Totipotency"
    ],
    answer: 3
  },
  {
    q: "The development of root and shoot in tissue culture is determined by _____",
    options: [
      "Temperature",
      "Nutrients",
      "Auxin and cytokinin ratio",
      "None of the above"
    ],
    answer: 2
  },
  {
    q: "Flowers with both androecium and gynoecium are called",
    options: [
      "Bisexual flowers",
      "Anther",
      "Stamens",
      "Unisexual flowers"
    ],
    answer: 0
  },
  {
    q: "The transfer of pollen from the anther to stigma is called",
    options: [
      "Pollination",
      "Fertilization",
      "Adoption",
      "Diffusion"
    ],
    answer: 0
  },
  {
    q: "The fusion of female reproductive nucleus with the male reproductive nucleus is known as",
    options: [
      "Adoption",
      "Excretion",
      "Fertilization",
      "Regeneration"
    ],
    answer: 2
  },
  {
    q: "The two nuclei at the end of the pollen tube are called",
    options: [
      "Tube nucleus and a generative nucleus",
      "Sperm and ovum",
      "Generative nucleus and stigma",
      "Tube nucleus and sperm"
    ],
    answer: 0
  },
  {
    q: "Generative nucleus divides forming",
    options: [
      "2 male nuclei",
      "3 male nuclei",
      "2 female nuclei",
      "3 female nuclei"
    ],
    answer: 0
  },
  {
    q: "Embryo sac is located inside the",
    options: [
      "Stigma",
      "Ovule",
      "Micropyle",
      "Style"
    ],
    answer: 1
  },
  {
    q: "One nucleus of the pollen tube and secondary nucleus of the ovum grow into",
    options: [
      "Stigma",
      "Endosperm",
      "Anther",
      "Stamen"
    ],
    answer: 1
  },
  {
    q: "The stalk of Datura flower at its base is known as",
    options: [
      "Pedicel",
      "Corolla",
      "Sepals",
      "Thalamus"
    ],
    answer: 0
  },
  {
    q: "The male reproductive parts of a flower, the stamens, are collectively known as",
    options: [
      "Androecium",
      "Filament",
      "Anther",
      "Gynoecium"
    ],
    answer: 0
  },
  {
    q: "The other name for gynoecium is",
    options: [
      "Pistil",
      "Stigma",
      "Androecium",
      "Style"
    ],
    answer: 0
  },
  {
    q: "Functional megaspore in a flowering plant develops into",
    options: [
      "Endosperm",
      "Ovule",
      "Embryo-sac",
      "Embryo"
    ],
    answer: 2
  },
  {
    q: "Which of the following is similar to autogamy, but requires pollinators?",
    options: [
      "Geitonogamy",
      "Cleistogamy",
      "Apogamy",
      "Xenogamy"
    ],
    answer: 0
  },
  {
    q: "What is the function of the filiform apparatus?",
    options: [
      "Guide the entry of pollen tube",
      "Recognize the suitable pollen at the stigma",
      "Produce nectar",
      "Stimulate division of the generative cell"
    ],
    answer: 0
  },
  {
    q: "A mass of nutritive material outside the embryo sac is called _____",
    options: [
      "Protoplasm",
      "Pericarp",
      "Ectoderm",
      "Perisperm"
    ],
    answer: 3
  },
  {
    q: "Which of the following statements is correct?",
    options: [
      "Sporogenous tissue is haploid",
      "The hard outer layer of pollen is called intine",
      "Tapetum nourishes the developing pollen",
      "Microspores are produced by endothecium"
    ],
    answer: 2
  },
  {
    q: "Which of the following fruit is produced by parthenocarpy?",
    options: [
      "Brinjal",
      "Apple",
      "Banana",
      "Jackfruit"
    ],
    answer: 2
  },
  {
    q: "The process of formation of seeds without fertilization in flowering plants is known as",
    options: [
      "Budding",
      "Apomixis",
      "Sporulation",
      "Somatic hybridization"
    ],
    answer: 1
  },
  {
    q: "Functional megaspore in an angiosperm develops into",
    options: [
      "Endosperm",
      "Embryo",
      "Embryo-sac",
      "Ovule"
    ],
    answer: 2
  },
  {
    q: "Rewards and attractants are required for",
    options: [
      "Entomophily",
      "Cleistogamy",
      "Anemophily",
      "Hydrophily"
    ],
    answer: 0
  },
  {
    q: "A dioecious flowering plant prevents",
    options: [
      "Geitonogamy and xenogamy",
      "Autogamy and xenogamy",
      "Autogamy and geitonogamy",
      "Cleistogamy and xenogamy"
    ],
    answer: 2
  },
  {
    q: "______ is a lytic enzyme released by the sperm.",
    options: [
      "Hyaluronidase",
      "Trypsin",
      "Helicase",
      "None of the above"
    ],
    answer: 0
  },
  {
    q: "How many autosomes does a human primary spermatocyte have?",
    options: [
      "34",
      "44",
      "54",
      "33"
    ],
    answer: 1
  },
  {
    q: "Where does the ovum receive the sperm?",
    options: [
      "Animal pole",
      "Vegetal pole",
      "Zona pellucida",
      "None of the above"
    ],
    answer: 0
  },
  {
    q: "______is an organelle that helps the sperm to penetrate the ovum.",
    options: [
      "Acrosome",
      "Zona pellucida",
      "Megalis",
      "None of the above"
    ],
    answer: 0
  },
  {
    q: "Umbilical cord contains ________",
    options: [
      "Pluripotent stem cells",
      "Cord blood stem cells",
      "Blood stem cells",
      "None of the above"
    ],
    answer: 1
  },
  {
    q: "How does human sperm locomote?",
    options: [
      "Flagella",
      "Cilia",
      "Neutrophils",
      "None of the above"
    ],
    answer: 0
  },
  {
    q: "Cryptorchidism is a condition where _____.",
    options: [
      "One of both testes are not developed",
      "One or both testes fail to descend into the scrotum",
      "One or both testes are not formed",
      "None of the above"
    ],
    answer: 1
  },
  {
    q: "Bidder’s canal receives ______.",
    options: [
      "Eggs",
      "Sperms",
      "Ammonia",
      "Oxygenated blood"
    ],
    answer: 1
  },
  {
    q: "The hormone that is released from the testes is ______.",
    options: [
      "Progesterone",
      "Vasopressin",
      "Testosterone",
      "None of the above"
    ],
    answer: 2
  },
  {
    q: "Wolffian duct is also known as ______.",
    options: [
      "Mesonephric duct",
      "Ejaculatory duct",
      "Major sublingual duct",
      "Cystic duct"
    ],
    answer: 0
  },
  {
    q: "Acrosome is filled with ______.",
    options: [
      "Lipids",
      "Hormones",
      "Digestive enzymes",
      "None of the above"
    ],
    answer: 2
  },
  {
    q: "_____ is an example of a viviparous animal.",
    options: [
      "Goat",
      "Duck",
      "Crocodile",
      "None of the above"
    ],
    answer: 0
  },
  {
    q: "____ is an example of an oviparous animal.",
    options: [
      "Pigeon",
      "Elephant",
      "Sheep",
      "None of the above"
    ],
    answer: 0
  },
  {
    q: "The _____ is an ovoviviparous animal.",
    options: [
      "Basking shark",
      "Bonobo",
      "Blue shark",
      "None of the above"
    ],
    answer: 0
  },
  {
    q: "The _____ is a temporary organ that connects a mammalian mother to its foetus.",
    options: [
      "Placenta",
      "Chorion",
      "Endometrium",
      "None of the above"
    ],
    answer: 0
  }
  ]
  // "engineering_eie": [
  //   { q: "What does EIE stand for?", options: ["Electronics & Instrumentation Engineering", "Electrical and Information Engineering", "Electronic Interface Equipment", "None of the above"], answer: 0 },
  //   { q: "Main tool used in Instrumentation?", options: ["Transducer", "Resistor", "Motor", "Transformer"], answer: 0 }
  // ],
  // "engineering_ee": [
  //   { q: "SI unit of electric current?", options: ["Ampere", "Volt", "Ohm", "Watt"], answer: 0 },
  //   { q: "Ohm's law is?", options: ["V=IR", "P=VI", "I=VR", "R=VI"], answer: 0 }
  // ],
  // "engineering_ece": [
  //   { q: "What is modulation?", options: ["Changing signal properties", "Sending signals", "Receiving signals", "Noise control"], answer: 0 },
  //   { q: "A common semiconductor material?", options: ["Silicon", "Copper", "Gold", "Plastic"], answer: 0 }
  // ],
  // "engineering_pt": [
  //   { q: "PT stands for?", options: ["Printing Technology", "Power Transmission", "Production Technique", "Process Technology"], answer: 0 },
  //   { q: "A major printing process?", options: ["Offset", "Weaving", "Casting", "Extrusion"], answer: 0 }
  // ]
};