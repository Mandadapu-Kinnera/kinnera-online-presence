
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "MySQL", "JavaScript"]
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Frameworks",
    skills: ["Django", "Flask"]
  },
  {
    title: "Other Technologies",
    skills: ["Artificial Intelligence", "Machine Learning"]
  }
];

const certifications = [
  "Python at NareshIT",
  "CSS and Python at HackerRank",
  "Python, React, HTML, CSS at Scaler Topics",
  "Responsive Web Design from FreeCodeCamp",
  "Front End libraries Legacy from FreeCodeCamp"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass">
              <CardHeader>
                <CardTitle className="text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-sm py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-primary">Professional Certifications</CardTitle>
              <CardDescription>Credentials that validate my technical expertise</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
