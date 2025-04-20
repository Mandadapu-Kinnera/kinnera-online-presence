
import { Badge } from "./ui/badge";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Education</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium">B. Tech, Computer Science Engineering (Cyber Security)</h4>
                <p className="text-foreground/70">Malla Reddy University | 2023 - 2027</p>
                <p className="text-foreground/70">2nd Year-2nd Semester</p>
                <p>CGPA: 9.47</p>
              </div>
              <div>
                <h4 className="text-lg font-medium">Board of Intermediate</h4>
                <p className="text-foreground/70">BIIT Junior College</p>
                <p>98.1%</p>
              </div>
              <div>
                <h4 className="text-lg font-medium">Board of Secondary School Certificate</h4>
                <p className="text-foreground/70">Sri Chaitanya School</p>
                <p>10/10</p>
              </div>
            </div>
          </div>
          
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Languages Known:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["English", "Telugu", "Hindi"].map((language) => (
                    <Badge key={language} variant="secondary">{language}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium">Contact:</h4>
                <p className="mt-1">Email: mandadapukinnera@gmail.com</p>
                <p>Phone: +91 8639986181</p>
              </div>
              <div>
                <h4 className="font-medium">Address:</h4>
                <p className="mt-1">H-NO: 4-5 Pedamakkena, Sattenapalli, Palnadu(dist),</p>
                <p>Andhra Pradesh-522402</p>
              </div>
            </div>
          </div>
        </div>
        <div className="glass p-8 rounded-2xl mt-10">
          <p className="text-lg leading-relaxed">
            I am a Computer Science Engineering student specializing in Cyber Security with a passion for web development, 
            data analytics, and creating innovative solutions. With experience in Python, React, and various frameworks, 
            I aim to build technology that makes a difference. My internships at Deloitte and Zaalima Development have 
            sharpened my skills in data analysis, automation, and problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
