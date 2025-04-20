
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "SnugStitch",
    description: "E-commerce platform for 60-minute clothing delivery with customization options",
    features: [
      "60-minute standard delivery",
      "1-2 days custom clothing delivery",
      "Real-time order tracking",
      "Clothing customization interface"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "GourmetGuide",
    description: "Python-based recipe discovery application",
    features: [
      "Ingredient-based recipe search",
      "Step-by-step instructions",
      "Meal planning assistance"
    ],
    tech: ["Python", "Django", "SQL"]
  },
  {
    title: "Smart Infrastructure Tracking",
    description: "Real-time infrastructure monitoring system",
    features: [
      "Real-time monitoring",
      "Maintenance scheduling",
      "Performance analytics"
    ],
    tech: ["IoT", "Python", "React"]
  },
  {
    title: "BrainBlitz",
    description: "Interactive educational platform for young learners",
    features: [
      "Interactive quizzes",
      "Educational content",
      "Progress tracking"
    ],
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "FinSmart",
    description: "Personal finance tracking application",
    features: [
      "Expense tracking",
      "Income monitoring",
      "Financial alerts"
    ],
    tech: ["React", "Node.js", "Express"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="glass">
              <CardHeader>
                <CardTitle className="text-primary">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm">{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
