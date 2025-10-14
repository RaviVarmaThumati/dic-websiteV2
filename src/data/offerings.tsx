import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export interface Offer {
  title: string;
  details: React.ReactNode;
}

export const offers: Offer[] = [
  {
    title: "Digital Technologies",
    details: (
      <>
        <h2>Digital Technologies</h2>
        <p>
          More than 10 years Digital transformation experience & leveraging digital 
          technologies to fundamentally change and improve business operations, 
          customer experiences, and organizational culture. It involves the integration 
          of digital technologies into all aspects of an organization, leading to 
          significant changes in how businesses operate and deliver value.
        </p>
        <div className="offerings-highlights">
          {[
            "Technology Adoption",
            "Customer-Centric Approach",
            "Process Optimization",
            "Data-Driven Decision Making",
            "Cultural and Organizational Change",
            "Ecosystem Engagement",
            "Security and Privacy",
            "Support",
          ].map((point, index) => (
            <div key={index} className="highlight-card">
              <span className="highlight-icon"><FaCheckCircle /></span>
              <p>{point}</p>
            </div>
          ))}
        </div>
        <div className="details-link">
          <a href="#">
            <span>Check Details</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </>
    ),
  },
  {
    title: "Data Engineering",
    details: (
      <>
        <h2>Data Engineering</h2>
        <p>
          Having 20 years of experience in the field of Decision Science and Data 
          Engineering is a significant accomplishment. It demonstrates a deep 
          understanding and expertise in leveraging data to drive informed 
          decision-making and optimize business processes.
        </p>
        <div className="offerings-highlights">
          {[
            "Data-driven Decision Making",
            "Data Integration and Architecture",
            "Data Modeling and Analysis",
            "Big Data Technologies",
            "Business Intelligence and Reporting",
            "Data Governance and Compliance",
            "Agile and Collaborative Approach",
            "Continuous Learning and Innovation",
          ].map((point, index) => (
            <div key={index} className="highlight-card">
              <span className="highlight-icon"><FaCheckCircle /></span>
              <p>{point}</p>
            </div>
          ))}
        </div>
        
        <div className="details-link">
          <a href="#">
            <span>Check Details</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </>
    ),
  },
  { title: "API & Event-led Integration", 
    details: (
      <>
        <h2>API & Event-led Integration</h2>
        <p>
          Having 10 years of experience in API and event-led integration is a valuable 
          asset in today's interconnected digital landscape. It demonstrates your 
          expertise in designing and implementing robust integration solutions that 
          enable seamless communication and data exchange between systems and 
          applications.
        </p>
        <div className="offerings-highlights">
          {[
            "API Design and Development",
            "Integration Architecture",
            "API Management and Governance",
            "Enterprise Integration Platforms",
            "Event-driven Architecture",
            "Integration with Cloud Services",
            "Legacy System Integration",
            "Continuous Integration and DevOps",
          ].map((point, index) => (
            <div key={index} className="highlight-card">
              <span className="highlight-icon"><FaCheckCircle /></span>
              <p>{point}</p>
            </div>
          ))}
        </div>
        
        <div className="details-link">
          <a href="#">
            <span>Check Details</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </>
    ),
  },
  { title: "Product Design and Development", 
   details: (
      <>
        <h2>Product Design and Development</h2>
        <p>
          Over the course of 10 years, IT professionals have the opportunity to work on a wide range of projects and 
          technologies. This experience allows them to develop a deep understanding of various programming languages, 
          frameworks, databases, and systems. They have likely encountered and resolved a broad spectrum of technical 
          challenges, enabling them to provide effective and efficient solutions.
        </p>
        <div className="offerings-highlights">
          {[
            "Idea Generation and Conceptualization",
            "Market Research and Validation",
            "Design and Prototyping",
            "Engineering and Development",
            "Testing and Quality Assurance",
            "Manufacturing and Supply Chain",
            "Market Launch and Iterative Improvement",
            "Post-Launch Support and Maintenance",
          ].map((point, index) => (
            <div key={index} className="highlight-card">
              <span className="highlight-icon"><FaCheckCircle /></span>
              <p>{point}</p>
            </div>
          ))}
        </div>
        
        <div className="details-link">
          <a href="#">
            <span>Check Details</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </>
    ),
  },
  { title: "No-Code/Low-Code Tooling", 
    details: (
      <>
        <h2>No-Code/Low-Code Tooling</h2>
        <p>
          No-code/low-code tooling refers to software development platforms that enable users to create applications with 
          minimal or no coding knowledge. These platforms provide visual interfaces, drag-and-drop functionality, and 
          pre-built components to simplify the application development process.
        </p>
        <div className="offerings-highlights">
          {[
            "Visual Development Environment",
            "Drag-and-Drop Functionality",
            "Rapid Application Development",
            "Customization and Extension",
            "Integration Capabilities",
            "Workflow Automation",
            "Collaboration and Deployment",
            "Accessibility and Empowerment",
          ].map((point, index) => (
            <div key={index} className="highlight-card">
              <span className="highlight-icon"><FaCheckCircle /></span>
              <p>{point}</p>
            </div>
          ))}
        </div>
        
        <div className="details-link">
          <a href="#">
            <span>Check Details</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </>
    ), 
  },
  { title: "Orchestrate Professional Resources", 
    details: (
      <>
        <h2>Orchestrate Professional Resources</h2>
        <p>
          We ensure you have the right experts at every stage of your initiative — from strategy to execution. By aligning 
          specialized talent with your unique business needs, we help drive innovation, efficiency, and measurable results 
          across your projects.
        </p>
        <div className="offerings-highlights">
          {[
            "Define Your Requirements",
            "Networking",
            "Online Platforms and Directories",
            "Professional Associations",
            "Job Boards and Recruitment Agencies",
            "Evaluate Portfolios and Past Work",
            "Conduct Interviews and Assessments",
            "Consider Budget and Contracts",
          ].map((point, index) => (
            <div key={index} className="highlight-card">
              <span className="highlight-icon"><FaCheckCircle /></span>
              <p>{point}</p>
            </div>
          ))}
        </div>
        
        <div className="details-link">
          <a href="#">
            <span>Check Details</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </>
    ),
  },
];
