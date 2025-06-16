
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Shield, 
  TrendingUp, 
  Users, 
  MapPin, 
  Phone, 
  Mail,
  ArrowRight,
  Leaf,
  Link as LinkIcon,
  Smartphone,
  Coffee,
  Building2,
  Wrench,
  Heart,
  Banknote
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
      description: "Profiles are shared with potential market partners — such as roasters, importers, cooperatives, and trading platforms — to build long-term relationships and promote fair trade."
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

  const partnerships = [
    {
      number: "1",
      title: "Coffee Market Partners & Traders",
      description: "Source coffee that's not just high-quality — but traceable and EUDR-compliant. Tierra Connect links you directly to verified producers.",
      color: "bg-orange-500",
      icon: Coffee
    },
    {
      number: "2", 
      title: "Cooperatives & Farming Associations",
      description: "Digitize your member network and gain clear visibility into every farm you work with. Generate reports and comply with regulations.",
      color: "bg-red-500",
      icon: Users
    },
    {
      number: "3",
      title: "Service & Product Providers", 
      description: "Reach new customers at the base of the supply chain. Whether you offer agronomy services, inputs, or training.",
      color: "bg-green-500",
      icon: Wrench
    },
    {
      number: "4",
      title: "NGOs, Governments & Development Agencies",
      description: "Monitor your field programs with ease. Our platform simplifies data collection from smallholders and turns it into insights.",
      color: "bg-teal-500",
      icon: Heart
    },
    {
      number: "5",
      title: "Financial Institutions & Microfinance Providers",
      description: "Access verifiable farm-level data and transaction histories to better assess farmer income, cash flow, and risk.",
      color: "bg-blue-500",
      icon: Banknote
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="green-gradient-subtle min-h-screen flex items-center justify-center px-4">
          <div className="absolute inset-0 opacity-50" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="text-center max-w-5xl mx-auto relative z-10 animate-fade-in">
            <div className="flex justify-center mb-8">
              <Badge variant="secondary" className="px-6 py-3 text-lg text-green-700 bg-green-100 border-green-200">
                Digital Coffee Solutions
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-green-900 mb-8 leading-tight">
              Buhl Origin
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl text-green-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              Digital tools for transparent, traceable, and fair coffee supply chains.
            </p>
            
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                size="lg"
                className="border-green-300 text-green-700 hover:bg-green-50 px-10 py-4 text-xl"
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
            <h2 className="text-5xl md:text-6xl font-bold text-green-900 mb-8">
              About Tierra Connect
            </h2>
            <p className="text-2xl text-green-700 max-w-4xl mx-auto leading-relaxed">
              Tierra Connect digitizes and connects the coffee supply chain — from farm-level data collection to global buyer relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* iPhone and Screen Mockup */}
            <div className="animate-slide-in-left">
              <div className="relative">
                {/* Desktop Monitor */}
                <div className="bg-gray-100 rounded-2xl p-6 shadow-2xl">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Monitor Header */}
                    <div className="bg-gray-50 px-4 py-3 border-b flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="bg-gray-200 rounded px-3 py-1 text-sm text-gray-600 inline-block">
                          tierra-connect.com
                        </div>
                      </div>
                    </div>
                    
                    {/* Dashboard Content */}
                    <div className="p-6 h-64">
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-green-50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-green-600">1,234</div>
                          <div className="text-sm text-green-700">Active Farmers</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-blue-600">456</div>
                          <div className="text-sm text-blue-700">Profiles Created</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-purple-600">89</div>
                          <div className="text-sm text-purple-700">Buyers Connected</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="bg-green-100 h-3 rounded"></div>
                          <div className="bg-green-100 h-3 rounded w-3/4"></div>
                          <div className="bg-green-100 h-3 rounded w-1/2"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-blue-100 h-3 rounded"></div>
                          <div className="bg-blue-100 h-3 rounded w-4/5"></div>
                          <div className="bg-blue-100 h-3 rounded w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* iPhone Mockup */}
                <div className="absolute -bottom-8 -right-8 w-32 bg-black rounded-3xl p-2 shadow-xl">
                  <div className="bg-white rounded-2xl overflow-hidden h-56">
                    {/* iPhone Screen */}
                    <div className="bg-green-50 h-full relative">
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-8 h-1 bg-black rounded-full"></div>
                      </div>
                      
                      <div className="pt-8 px-3 h-full">
                        <div className="text-center mb-4">
                          <Smartphone className="w-8 h-8 text-green-600 mx-auto mb-2" />
                          <div className="text-xs font-semibold text-green-800">Farm Profile</div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="bg-green-200 h-2 rounded w-full"></div>
                          <div className="bg-green-200 h-2 rounded w-3/4"></div>
                          <div className="bg-green-200 h-2 rounded w-1/2"></div>
                        </div>
                        
                        <div className="mt-4 grid grid-cols-2 gap-1">
                          <div className="bg-green-300 h-12 rounded"></div>
                          <div className="bg-green-300 h-12 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Leaf className="w-8 h-8 text-green-600" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-green-500" />
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Globe className="w-8 h-8 text-blue-600" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-green-500" />
                  <div className="bg-green-100 p-3 rounded-full">
                    <LinkIcon className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <p className="text-xl text-green-700 font-medium">
                  From Farm to Global Markets
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">Farm-to-Cup</div>
                  <div className="text-green-700">Traceability</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">Digital</div>
                  <div className="text-blue-700">Profiles</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">Fair</div>
                  <div className="text-purple-700">Trade</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-600">Financial</div>
                  <div className="text-emerald-700">Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 green-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-green-900 mb-8">
              How It Works
            </h2>
            <p className="text-2xl text-green-700 max-w-3xl mx-auto">
              Our comprehensive platform supports every step of the coffee supply chain
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-green-200 hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-4 rounded-xl flex-shrink-0 border border-green-200">
                      <feature.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-green-900 mb-4">
                        {index + 1}. {feature.title}
                      </h3>
                      <p className="text-green-700 leading-relaxed text-lg">
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

      {/* Partnership Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-green-900 mb-8">
              We Partner with
            </h2>
          </div>

          <div className="relative min-h-[600px] flex items-center justify-center">
            {/* Central Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center text-white">
                  <div className="text-lg font-bold">Partnerships</div>
                </div>
              </div>
            </div>

            {/* Partnership Cards arranged in a circle */}
            <div className="relative w-full h-[500px]">
              {partnerships.map((partnership, index) => {
                const angle = (index * (360 / partnerships.length)) - 90; // Start from top
                const radius = 200;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <div
                    key={index}
                    className="absolute w-64 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
                      <CardContent className="p-6">
                        <div className="text-center space-y-4">
                          <div className={`${partnership.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg`}>
                            <partnership.icon className="w-8 h-8" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {partnership.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-sm">
                            {partnership.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="green-gradient rounded-2xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Want to learn more about the project?
            </h2>
            <p className="text-2xl mb-10 text-green-100">
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
              className="bg-white text-green-700 hover:bg-green-50 px-10 py-4 text-xl"
              onClick={() => window.location.href = 'mailto:martin@buhlorigin.com'}
            >
              <Mail className="mr-3 w-6 h-6" />
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-green-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Buhl Origin SL</h3>
              <div className="space-y-3 text-green-200">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-800 p-2 rounded-full">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-lg">Calle Alonso Cano 60, 28003 Madrid, Spain</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-800 p-2 rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg">+34 672 324 531</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-800 p-2 rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a href="mailto:martin@buhlorigin.com" className="hover:text-white transition-colors text-lg">
                    martin@buhlorigin.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-green-300 text-lg mb-2">
                Operated by Buhl Origin SL
              </p>
              <p className="text-green-400">
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
