import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";

export default function FeaturedProjects() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="Selected Work"
          subtitle="A selection of projects focused on machine learning, real-world applications, and system design."
        />

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Neolook Insights Dashboard"
            problem="Medical staff lacked an intuitive way to monitor neonatal ICU data."
            impact="Built a full-stack dashboard used in real clinical environments."
            tech={["React", "Django", "REST"]}
          />

          <ProjectCard
            title="Air Pollution Forecasting"
            problem="Residents lacked accessible air quality predictions."
            impact="Predicted O₃ and NO₂ levels 3 days ahead with a usable interface."
            tech={["Python", "ML"]}
          />

          <ProjectCard
            title="Uncertainty in Regression"
            problem="Standard models fail to distinguish types of uncertainty."
            impact="Analyzed aleatoric vs epistemic uncertainty using DenseNet121."
            tech={["PyTorch", "Deep Learning"]}
          />

          <ProjectCard
            title="DQN with Temporal Decay"
            problem="RL agents over-prioritize outdated experiences."
            impact="Improved learning efficiency using decay-based PER."
            tech={["Reinforcement Learning"]}
          />
        </div>
      </Container>
    </Section>
  );
}