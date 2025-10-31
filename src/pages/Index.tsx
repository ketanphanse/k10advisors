import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, Cpu, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-loyalty.jpg";

const Index = () => {
  const services = [
    {
      icon: Target,
      title: "Loyalty Program Strategy",
      description: "Expert advice on loyalty program strategy, design, and promotions to create compelling customer experiences."
    },
    {
      icon: Zap,
      title: "Engagement with Loyalty",
      description: "Design and execute high-engaging loyalty campaigns leveraging gamification to drive customer participation."
    },
    {
      icon: Wrench,
      title: "Technology Advisory",
      description: "Program migration to new platforms, robust data strategies, and seamless loyalty integration on web & app."
    },
    {
      icon: Cpu,
      title: "AI Loyalty",
      description: "Build AI Agents for loyalty around AI-led promotions, customer support, and advanced data analytics."
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
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">K10 Advisors</h1>
            <Button variant="default" className="bg-gradient-to-r from-primary to-primary-light hover:opacity-90">
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
        <div className="relative container mx-auto px-6 py-32 lg:py-40">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Design Loyalty Strategies That Drive Results
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Expert consulting to help you build compelling loyalty programs that increase retention, revenue, and customer frequency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-secondary hover:opacity-90 text-secondary-foreground">
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Transform Your Customer Loyalty
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our strategic approach delivers measurable outcomes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-secondary-foreground rounded-full" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for modern loyalty programs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-border hover:border-secondary transition-all duration-300 hover:shadow-xl animate-scale-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary-light rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <h4 className="text-2xl font-semibold text-foreground mb-4">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section - Empty for now */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              About the Founder
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet Ketan Phanse
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-12">
                <div className="text-center text-muted-foreground">
                  <p className="text-lg">Content coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
        <div className="relative container mx-auto px-6 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Loyalty Strategy?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build a loyalty program that drives real business results.
          </p>
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
            Schedule a Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-90">© 2025 K10 Advisors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
