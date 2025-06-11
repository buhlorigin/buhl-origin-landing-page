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
          <div className="absolute inset-0 opacity-50" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97028' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="text-center max-w-5xl mx-auto relative z-10 animate-fade-in">
            <div className="flex justify-center mb-8">
              <Badge variant="secondary" className="px-6 py-3 text-lg text-green-700 bg-green-100 border-green-200">
                Digital Coffee Solutions
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-coffee-900 mb-8 leading-tight">
              Buhl Origin
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl text-coffee-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              Digital tools for transparent, traceable, and fair coffee supply chains.
            </p>
            
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                size="lg"
                className="border-coffee-300 text-coffee-700 hover:bg-coffee-50 px-10 py-4 text-xl"
                onClick={() => window.location.href = 'mailto:martin@buhlorigin.com'}
              >
                Contact Us
                <Mail className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-coffee-900 mb-8">
              About Tierra Connect
            </h2>
            <p className="text-2xl text-coffee-700 max-w-4xl mx-auto leading-relaxed">
              Tierra Connect digitizes and connects the coffee supply chain — from farm-level data collection to global buyer relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-in-left">
              <div className="bg-coffee-gradient-subtle rounded-2xl p-8 h-96 flex items-center justify-center border border-coffee-200 shadow-lg">
                <div className="text-center">
                  <Coffee className="w-28 h-28 text-coffee-600 mx-auto mb-6" />
                  <div className="flex justify-center space-x-3 mb-6">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Leaf className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Globe className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="bg-coffee-100 p-2 rounded-full">
                      <LinkIcon className="w-8 h-8 text-coffee-600" />
                    </div>
                  </div>
                  <p className="text-coffee-700 font-medium text-lg">Connecting farmers to global markets</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 animate-fade-in p-4 rounded-lg hover:bg-coffee-50 transition-colors" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  </div>
                  <span className="text-xl text-coffee-700">{benefit}</span>
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
            <h2 className="text-5xl md:text-6xl font-bold text-coffee-900 mb-8">
              How It Works
            </h2>
            <p className="text-2xl text-coffee-700 max-w-3xl mx-auto">
              Our comprehensive platform supports every step of the coffee supply chain
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-coffee-200 hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-coffee-100 p-4 rounded-xl flex-shrink-0 border border-coffee-200">
                      <feature.icon className="w-8 h-8 text-coffee-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-coffee-900 mb-4">
                        {index + 1}. {feature.title}
                      </h3>
                      <p className="text-coffee-700 leading-relaxed text-lg">
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
          <div className="coffee-gradient rounded-2xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Want to learn more about the project?
            </h2>
            <p className="text-2xl mb-10 text-coffee-100">
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
              className="bg-white text-coffee-700 hover:bg-coffee-50 px-10 py-4 text-xl"
              onClick={() => window.location.href = 'mailto:martin@buhlorigin.com'}
            >
              <Mail className="mr-3 w-6 h-6" />
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
              <h3 className="text-3xl font-bold text-white mb-6">Buhl Origin SL</h3>
              <div className="space-y-3 text-coffee-200">
                <div className="flex items-center space-x-3">
                  <div className="bg-coffee-800 p-2 rounded-full">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-lg">Calle Alonso Cano 60, 28003 Madrid, Spain</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-coffee-800 p-2 rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg">+34 672 324 531</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-coffee-800 p-2 rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a href="mailto:martin@buhlorigin.com" className="hover:text-white transition-colors text-lg">
                    martin@buhlorigin.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-coffee-300 text-lg mb-2">
                Operated by Buhl Origin SL
              </p>
              <p className="text-coffee-400">
                © 2025 Buhl Origin. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
