
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Coffee, 
  Globe, 
  Shield, 
  TrendingUp, 
  Users, 
  MapPin, 
  Phone, 
  Mail,
  CheckCircle,
  ArrowRight,
  Leaf,
  Link as LinkIcon
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "Create digital producer profiles",
      description: "Support smallholder farmers in capturing farm data, geolocation, cultivation practices, and photos. These are transformed into structured, multilingual digital profiles."
    },
    {
      icon: Globe,
      title: "Connect to market",
      description: "Profiles are shared with potential buyers — such as roasters, importers, and platforms — to build long-term relationships and promote fair trade."
    },
    {
      icon: Shield,
      title: "Ensure regulatory compliance",
      description: "The platform helps collect and export key compliance data (e.g. for EU Deforestation Regulation) directly from the farm level — made simple for producers."
    },
    {
      icon: TrendingUp,
      title: "Accelerate access to finance",
      description: "By validating data and traceability, producers are more eligible for pre-financing or credit via supply chain partners and financial institutions."
    }
  ];

  const benefits = [
    "Farm-to-cup traceability",
    "Compliance data collection",
    "Fair trade promotion",
    "Financial inclusion",
    "Sustainable practices",
    "Quality certification"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="coffee-gradient-subtle min-h-screen flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d97028" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
          
          <div className="text-center max-w-4xl mx-auto relative z-10 animate-fade-in">
            <div className="flex justify-center mb-6">
              <Badge variant="secondary" className="px-4 py-2 text-coffee-700 bg-coffee-100 border-coffee-200">
                <Coffee className="w-4 h-4 mr-2" />
                Digital Coffee Solutions
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-coffee-900 mb-6 leading-tight">
              Buhl Origin
            </h1>
            
            <p className="text-xl md:text-2xl text-coffee-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Digital tools for transparent, traceable, and fair coffee supply chains.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="coffee-gradient text-white hover:opacity-90 transition-opacity px-8 py-3 text-lg"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-coffee-300 text-coffee-700 hover:bg-coffee-50 px-8 py-3 text-lg"
              >
                Contact Us
                <Mail className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
              About Tierra Connect
            </h2>
            <p className="text-xl text-coffee-700 max-w-4xl mx-auto leading-relaxed">
              Tierra Connect digitizes and connects the coffee supply chain — from farm-level data collection to global buyer relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-in-left">
              <div className="bg-coffee-gradient-subtle rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Coffee className="w-24 h-24 text-coffee-600 mx-auto mb-4" />
                  <div className="flex justify-center space-x-2 mb-4">
                    <Leaf className="w-8 h-8 text-green-600" />
                    <Globe className="w-8 h-8 text-blue-600" />
                    <LinkIcon className="w-8 h-8 text-coffee-600" />
                  </div>
                  <p className="text-coffee-700 font-medium">Connecting farmers to global markets</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg text-coffee-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 coffee-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-coffee-700 max-w-3xl mx-auto">
              Our comprehensive platform supports every step of the coffee supply chain
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-coffee-200 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-coffee-100 p-3 rounded-lg flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-coffee-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-coffee-900 mb-3">
                        {index + 1}. {feature.title}
                      </h3>
                      <p className="text-coffee-700 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="coffee-gradient rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to learn more about the project?
            </h2>
            <p className="text-xl mb-8 text-coffee-100">
              Just send an email to{" "}
              <a 
                href="mailto:martin@buhlorigin.com" 
                className="underline hover:text-white transition-colors font-medium"
              >
                martin@buhlorigin.com
              </a>
              {" "}— we'd love to hear from you!
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-coffee-700 hover:bg-coffee-50 px-8 py-3"
              onClick={() => window.location.href = 'mailto:martin@buhlorigin.com'}
            >
              <Mail className="mr-2 w-5 h-5" />
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coffee-900 text-coffee-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Buhl Origin SL</h3>
              <div className="space-y-2 text-coffee-200">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Calle Alonso Cano 60, 28003 Madrid, Spain</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+34 672 324 531</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:martin@buhlorigin.com" className="hover:text-white transition-colors">
                    martin@buhlorigin.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-coffee-300 text-sm mb-2">
                Operated by Buhl Origin SL
              </p>
              <p className="text-coffee-400 text-xs">
                © 2024 Buhl Origin. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
