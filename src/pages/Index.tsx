import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, Cpu, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-loyalty.jpg";
import logoImage from "@/assets/k10-logo.png";

const Index = () => {
  const services = [
    {
      icon: Target,
      title: "Loyalty Program Strategy",
      points: [
        "Strategic design of loyalty programs tailored to your business objectives and customer behavior",
        "Expert guidance on tier structures, reward mechanisms, and points economics",
        "Development of compelling promotional strategies to drive engagement and retention",
        "Competitive analysis and benchmarking against industry best practices"
      ]
    },
    {
      icon: Zap,
      title: "Engagement with Loyalty",
      points: [
        "Design and implementation of gamification elements to boost customer participation",
        "Creation of interactive challenges, badges, and achievement systems",
        "Development of personalized engagement campaigns based on customer segments",
        "Optimization of communication strategies across email, mobile, and in-app channels"
      ]
    },
    {
      icon: Wrench,
      title: "Technology Advisory",
      points: [
        "Seamless migration from legacy platforms to modern loyalty technology solutions",
        "Integration of loyalty programs across web, mobile apps, and in-store experiences",
        "Development of robust data architectures to support analytics and personalization",
        "Evaluation and selection of loyalty platform vendors aligned with your requirements"
      ]
    },
    {
      icon: Cpu,
      title: "AI Loyalty",
      points: [
        "Implementation of AI-powered promotion engines for dynamic, personalized offers",
        "Development of intelligent chatbots for 24/7 loyalty customer support",
        "Advanced predictive analytics to identify churn risks and growth opportunities",
        "Machine learning models for customer lifetime value prediction and segmentation"
      ]
    }
  ];

  const benefits = [
    { title: "Increase Retention", description: "Build lasting relationships with your customers" },
    { title: "Increase Revenue", description: "Drive sustainable growth through loyalty" },
    { title: "Increase Frequency", description: "Encourage repeat purchases and engagement" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="K10 Advisors Logo" className="w-10 h-10" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">K10 Advisors</h1>
            </div>
            <Button variant="default" className="bg-gradient-to-r from-primary via-primary-light to-secondary hover:opacity-90">
              Get in Touch
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-secondary opacity-95" />
        <img 
          src={heroImage} 
          alt="K10 Advisors - Loyalty Strategy Consulting" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
        />
        <div className="relative container mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-5 leading-tight">
              Design Loyalty Strategies That Drive Results
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-6 leading-relaxed">
              Expert consulting to help you build compelling loyalty programs that increase retention, revenue, and customer frequency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-secondary hover:opacity-90 text-secondary-foreground shadow-lg">
                Explore Our Services
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 animate-fade-in">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Transform Your Customer Loyalty
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our strategic approach delivers measurable outcomes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-3 flex items-center justify-center">
                  <div className="w-7 h-7 bg-secondary-foreground rounded-full" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 animate-fade-in">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Our Services
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for modern loyalty programs
            </p>
          </div>
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-border hover:border-primary-light transition-all duration-300 hover:shadow-xl animate-scale-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary via-primary-light to-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h4>
                      <ul className="space-y-2">
                        {service.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section - Empty for now */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
              About the Founder
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet Ketan Phanse
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="text-center text-muted-foreground">
                  <p className="text-lg">Content coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-secondary" />
        <div className="relative container mx-auto px-6 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Loyalty Strategy?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help you build a loyalty program that drives real business results.
          </p>
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-lg">
            Schedule a Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-6 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-90">© 2025 K10 Advisors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
