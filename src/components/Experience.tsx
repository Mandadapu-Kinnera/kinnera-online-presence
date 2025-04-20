
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const experiences = [
  {
    title: "Python Developer Intern",
    company: "Zaalima Development",
    period: "March 2025 – Present",
    description: "Developing a Python-based automation system that reduced manual data entry time by 60% across internal tools.",
    achievements: [
      "Integrated 5+ REST APIs and Python libraries (e.g., Pandas, Flask) to automate data reporting, saving 12+ hours/week in team operations.",
      "Debugged and refined code across multiple modules, improving script runtime efficiency by 35%.",
      "Collaborating with a team of 6 developers using Git, contributing to over 25+ commits and 4 successful sprint releases."
    ],
    technologies: ["Python", "Flask", "Pandas", "REST APIs", "Git"]
  },
  {
    title: "Data Analytics Intern",
    company: "Deloitte (Virtual via Forage)",
    period: "April 2025",
    description: "Analyzed business datasets containing over 10,000+ rows to extract actionable insights using Excel and Python.",
    achievements: [
      "Prepared and presented 3 data-driven business proposals to simulated stakeholders, achieving a 100% success rate in approval scenarios.",
      "Created interactive dashboards using Excel and Power BI to visualize trends, improving reporting clarity for business teams by 25%.",
      "Refined data cleaning processes, reducing data inconsistencies by 40% and improving model accuracy in exploratory analysis tasks."
    ],
    technologies: ["Excel", "Python", "Power BI", "Data Cleaning", "Data Visualization"]
  },
  {
    title: "Technology Consulting Intern",
    company: "Deloitte (Virtual via Forage)",
    period: "April 2025",
    description: "Solved 4 client simulation case studies by developing strategic technology solutions, increasing workflow efficiency by up to 30% in proposed models.",
    achievements: [
      "Collaborated with a virtual team of 5+ members in agile sprints, delivering all tasks ahead of deadlines.",
      "Assessed client business operations and proposed process automation strategies that could potentially reduce operational costs by 20%.",
      "Guided peer team discussions, documenting 10+ actionable steps for the implementation of digital solutions."
    ],
    technologies: ["Agile", "Process Automation", "Documentation", "Team Collaboration"]
  }
];

const achievements = [
  {
    title: "Winner – Hack Nexus 2025",
    organization: "BVRIT National Level Hackathon",
    date: "April 2, 2025",
    details: [
      "Won 1st Prize and a cash award of ₹8000 at Hack Nexus, a national-level hackathon held at BVRIT.",
      "Developed an innovative project under time constraints, showcasing teamwork, coding skills."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <CardTitle className="text-primary">{exp.title}</CardTitle>
                    <CardDescription className="text-lg">{exp.company}</CardDescription>
                  </div>
                  <Badge variant="outline" className="self-start mt-2 md:mt-0">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{exp.description}</p>
                <h4 className="font-semibold mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm">{achievement}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="text-2xl font-bold mt-16 mb-8 text-center">Achievements</h3>
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="glass">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <CardTitle className="text-primary">{achievement.title}</CardTitle>
                    <CardDescription className="text-lg">{achievement.organization}</CardDescription>
                  </div>
                  <Badge variant="outline" className="self-start mt-2 md:mt-0">
                    {achievement.date}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  {achievement.details.map((detail, idx) => (
                    <li key={idx} className="text-sm">{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
