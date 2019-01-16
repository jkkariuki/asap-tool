const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/scholarshipdb"  ,
    { useNewUrlParser: true } 
 
  );

const scholarshipSeed = [
  
  {
  Title: "POISE",
  Link: "https://www.bmcc.cuny.edu/research/page.jsp?pid=1607&n=BMCC-NYU%20Pipeline%20Opportunities%20for%20Intercollegiate%20STEM%20Education%20",
  College: "BMCC",
  Award: "Full NYU scholarship for 2 years",
  Eligibility: "Underrepresented Minority pursuing STEM fields, Competitive GPA",
  Deadline: "TBD"
  },
  {
    Title: "Kaplan Leadership Program",
    Link: "http://www.kaplanedfoundation.org/become-a-scholar/apply-to-be-a-kaplan-scholar/",
    College: "BMCC",
    Award: "Up to $3000 towards completion of Associates",
    Eligibility: "Minimum 3.5 GPA, enrolled in associates program, 24-30 credits, Black, latino, or Native American",
    Deadline: "TBD"
    },
    {
      Title: "Jack Kent Cooke Transfer Scholarship",
      Link: "https://www.jkcf.org/our-scholarships/undergraduate-transfer-scholarship/",
      College: "BMCC",
      Award: "Up to $40,000 per year",
      Eligibility: " Minimum 3.5 GPA, Family income below $95,000",
      Deadline: "TBD"
      },
      {
        Title: "Goldwater Scholarship Program",
        Link: "https://goldwater.scholarsapply.org/",
        College: "BMCC",
        Award: "Up to $7,500",
        Eligibility: "Minimum 3.0 GPA, Majoring in STEM field",
        Deadline: "TBD"
        },
        {
          Title: "Program NYU CCTOP",
          Link: "https://steinhardt.nyu.edu/cctop/​",
          College: "BMCC",
          Award: "50% Tuition",
          Eligibility: " 3.0 minimum GPA, Have 48 transferrable credits to NYU Steinardt program of Study",
          Deadline: "TBD"
          },
                    
];

db.Scholarship
  .remove({})
  .then(() => db.Scholarship.collection.insertMany(scholarshipSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  

