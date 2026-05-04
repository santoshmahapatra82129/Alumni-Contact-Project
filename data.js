// data.js
const companies = [
  {
    companyName: "TCS",
    companyImage: "/images/tcs.png",
    shortDescription: "India's largest IT services and consulting company",
    fullDescription: "Tata Consultancy Services is a multinational IT services and consulting company headquartered in Mumbai. TCS recruits in large numbers from IGIT Sarang every year.",
    eligibility: { branchAllowed: ["CSE", "IT", "ECE", "EEE"], minCGPA: 6.0 },
    totalRounds: 3,
    rounds: [
      { roundNumber: 1, roundName: "TCS NQT", description: "Online Aptitude + Coding test (NQT pattern)" },
      { roundNumber: 2, roundName: "Technical Interview", description: "DSA, Core CS, Project discussion" },
      { roundNumber: 3, roundName: "MR + HR Round", description: "Managerial and HR discussion" }
    ],
    alumniPOC: { name: "Aman Behera", designation: "Systems Engineer", email: "aman@tcs.com", linkedin: "https://linkedin.com/in/aman", batch: "2023" },
    visitYear: 2024
  },
  {
    companyName: "Argusoft",
    companyImage: "/images/argusoft.jpg",
    shortDescription: "Software solutions and IT services",
    fullDescription: "Argusoft visited our campus for recruitment of software development engineers.",
    eligibility: { branchAllowed: ["CSE", "IT"], minCGPA: 7.0 },
    totalRounds: 3,
    rounds: [
      { roundNumber: 1, roundName: "Aptitude Test", description: "Quant + Verbal" },
      { roundNumber: 2, roundName: "Technical Interview", description: "DSA + Core Subjects" },
      { roundNumber: 3, roundName: "HR Round", description: "HR discussion" }
    ],
    alumniPOC: { name: "Rahul Sharma", designation: "SDE-1", email: "rahul@argusoft.com", linkedin: "https://linkedin.com/in/rahul", batch: "2022" },
    visitYear: 2024
  },
  {
    companyName: "L&T",
    companyImage: "/images/lnt.png",
    shortDescription: "Engineering, construction, and technology conglomerate",
    fullDescription: "Larsen & Toubro conducted on-campus recruitment for engineers across multiple branches.",
    eligibility: { branchAllowed: ["CSE", "ECE", "EEE", "Mechanical", "Civil"], minCGPA: 6.5 },
    totalRounds: 3,
    rounds: [
      { roundNumber: 1, roundName: "Aptitude Test", description: "Quant + Reasoning" },
      { roundNumber: 2, roundName: "Technical Interview", description: "Engineering Concepts" },
      { roundNumber: 3, roundName: "HR Round", description: "HR discussion" }
    ],
    alumniPOC: { name: "Anita Verma", designation: "Engineer", email: "anita@lnt.com", linkedin: "https://linkedin.com/in/anita", batch: "2021" },
    visitYear: 2023
  },
  {
    companyName: "Reliance Industries",
    companyImage: "/images/reliance.png",
    shortDescription: "Oil & Gas, energy, retail and digital services",
    fullDescription: "Reliance Industries Limited visited for summer internships and full-time placements across multiple verticals.",
    eligibility: { branchAllowed: ["CSE", "IT", "Mechanical", "Chemical"], minCGPA: 7.0 },
    totalRounds: 2,
    rounds: [
      { roundNumber: 1, roundName: "Technical Test", description: "Core subjects" },
      { roundNumber: 2, roundName: "HR Interview", description: "HR discussion" }
    ],
    alumniPOC: { name: "Vikram Singh", designation: "Engineer", email: "vikram@ril.com", linkedin: "https://linkedin.com/in/vikram", batch: "2020" },
    visitYear: 2024
  },
  {
    companyName: "JSW",
    companyImage: "/images/jsw.png",
    shortDescription: "Steel, energy and infrastructure conglomerate",
    fullDescription: "JSW Group conducted campus recruitment drive for engineering graduates.",
    eligibility: { branchAllowed: ["CSE", "Mechanical", "ECE"], minCGPA: 6.5 },
    totalRounds: 3,
    rounds: [
      { roundNumber: 1, roundName: "Aptitude", description: "Quant + Logical" },
      { roundNumber: 2, roundName: "Technical Interview", description: "Engineering basics" },
      { roundNumber: 3, roundName: "HR Round", description: "HR questions" }
    ],
    alumniPOC: { name: "Pooja Jain", designation: "Engineer", email: "pooja@jsw.com", linkedin: "https://linkedin.com/in/pooja", batch: "2021" },
    visitYear: 2023
  },
  {
    companyName: "IBM",
    companyImage: "/images/ibm.png",
    shortDescription: "Global IT, cloud and consulting company",
    fullDescription: "IBM recruited for software development and consulting roles from IGIT Sarang.",
    eligibility: { branchAllowed: ["CSE", "IT"], minCGPA: 7.0 },
    totalRounds: 4,
    rounds: [
      { roundNumber: 1, roundName: "Online Test", description: "DSA + Aptitude" },
      { roundNumber: 2, roundName: "Technical Interview", description: "Core CS" },
      { roundNumber: 3, roundName: "Managerial Round", description: "Project discussion" },
      { roundNumber: 4, roundName: "HR Round", description: "HR questions" }
    ],
    alumniPOC: { name: "Ravi Kumar", designation: "SDE", email: "ravi@ibm.com", linkedin: "https://linkedin.com/in/ravi", batch: "2022" },
    visitYear: 2024
  },
  {
    companyName: "Inox",
    companyImage: "/images/inox.jpg",
    shortDescription: "Inox Air Products — industrial & medical gases",
    fullDescription: "Inox Air Products is one of India's largest manufacturers of industrial and medical gases, with cryogenic engineering, on-site gas plants and air-separation units across the country.",
    eligibility: { branchAllowed: ["Mechanical", "Civil", "Chemical"], minCGPA: 6.0 },
    totalRounds: 2,
    rounds: [
      { roundNumber: 1, roundName: "Technical Interview", description: "Core mechanical / chemical concepts" },
      { roundNumber: 2, roundName: "HR Round", description: "HR discussion" }
    ],
    alumniPOC: { name: "Sneha Roy", designation: "Engineer", email: "sneha@inox.com", linkedin: "https://linkedin.com/in/sneha", batch: "2021" },
    visitYear: 2023
  },
  {
    companyName: "IAVL",
    companyImage: "/images/iavl.png",
    shortDescription: "IndianOil Adani Ventures — energy & gas distribution",
    fullDescription: "IndianOil Adani Ventures Limited (IAVL) is a joint venture between Indian Oil Corporation and Adani Enterprises engaged in city gas distribution and energy infrastructure across India.",
    eligibility: { branchAllowed: ["Mechanical", "ECE"], minCGPA: 6.5 },
    totalRounds: 3,
    rounds: [
      { roundNumber: 1, roundName: "Aptitude", description: "Quant + Logical" },
      { roundNumber: 2, roundName: "Technical", description: "Engineering knowledge" },
      { roundNumber: 3, roundName: "HR", description: "HR discussion" }
    ],
    alumniPOC: { name: "Arun Das", designation: "Engineer", email: "arun@iavl.com", linkedin: "https://linkedin.com/in/arun", batch: "2022" },
    visitYear: 2024
  },
  {
    companyName: "UPL",
    companyImage: "/images/upl.png",
    shortDescription: "Global crop protection and sustainable agriculture solutions",
    fullDescription: "UPL Limited is one of the world's largest providers of sustainable agriculture solutions, including crop protection, seeds, and post-harvest technologies, operating in 130+ countries.",
    eligibility: { branchAllowed: ["CSE", "IT", "Chemistry", "Chemical"], minCGPA: 6.5 },
    totalRounds: 3,
    rounds: [
      { roundNumber: 1, roundName: "Aptitude", description: "Quant + Reasoning" },
      { roundNumber: 2, roundName: "Technical", description: "Core subjects" },
      { roundNumber: 3, roundName: "HR", description: "HR discussion" }
    ],
    alumniPOC: { name: "Meera Singh", designation: "Engineer", email: "meera@upl.com", linkedin: "https://linkedin.com/in/meera", batch: "2021" },
    visitYear: 2023
  },
  {
    companyName: "MosChip",
    companyImage: "/images/moschip.jpg",
    shortDescription: "Fabless semiconductor and SoC design company",
    fullDescription: "MosChip Technologies is a fabless semiconductor company specialising in mixed-signal IPs, ASICs, system-on-chip (SoC) design, IoT and embedded engineering services for global customers.",
    eligibility: { branchAllowed: ["ECE", "CSE"], minCGPA: 7.0 },
    totalRounds: 3,
    rounds: [
      { roundNumber: 1, roundName: "Technical Test", description: "Core concepts" },
      { roundNumber: 2, roundName: "Technical Interview", description: "Embedded + DSA" },
      { roundNumber: 3, roundName: "HR Round", description: "HR discussion" }
    ],
    alumniPOC: { name: "Vikash Kumar", designation: "Engineer", email: "vikash@moschip.com", linkedin: "https://linkedin.com/in/vikash", batch: "2022" },
    visitYear: 2024
  },
  {
    companyName: "Pie Infotech",
    companyImage: "/images/pie-infotech.png",
    shortDescription: "IT and software consulting services",
    fullDescription: "Pie Infotech visited for software engineering roles.",
    eligibility: { branchAllowed: ["CSE", "IT"], minCGPA: 6.5 },
    totalRounds: 3,
    rounds: [
      { roundNumber: 1, roundName: "Aptitude", description: "Quant + Logical" },
      { roundNumber: 2, roundName: "Technical Interview", description: "Programming + DSA" },
      { roundNumber: 3, roundName: "HR Round", description: "HR discussion" }
    ],
    alumniPOC: { name: "Rina Das", designation: "Engineer", email: "rina@pieinfotech.com", linkedin: "https://linkedin.com/in/rina", batch: "2023" },
    visitYear: 2023
  },
  {
    companyName: "PPL",
    companyImage: "/images/ppl.png",
    shortDescription: "Energy and petrochemical company",
    fullDescription: "PPL visited for chemical and engineering roles.",
    eligibility: { branchAllowed: ["Chemical", "Mechanical"], minCGPA: 6.0 },
    totalRounds: 2,
    rounds: [
      { roundNumber: 1, roundName: "Technical Test", description: "Core subjects" },
      { roundNumber: 2, roundName: "HR Round", description: "HR discussion" }
    ],
    alumniPOC: { name: "Karan Mehta", designation: "Engineer", email: "karan@ppl.com", linkedin: "https://linkedin.com/in/karan", batch: "2021" },
    visitYear: 2024
  }
];

module.exports = companies;
