
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
        <div className="min-h-screen flex items-center justify-center px-4 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/lovable-uploads/5af224e2-ee78-4aca-9eee-4d03645f2e19.png")`
            }}
          ></div>
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="text-center max-w-5xl mx-auto relative z-10 animate-fade-in">
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/615affde-d69d-45b9-91b3-027bae883732.png" 
                alt="Buhl Origin Logo" 
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-4"
              />
            </div>
            
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
              Buhl Origin
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Building solutions for a transparent, traceable and fair coffee supply chain.
            </p>
            
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-500 text-gray-700 bg-gray-200/90 hover:bg-gray-300/90 px-10 py-4 text-xl backdrop-blur-sm"
                onClick={() => window.location.href = 'mailto:info@buhlorigin.com'}
              >
                Contact Us
                <Mail className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-gray-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-600 tracking-wider uppercase">Digital Agriculture</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-green-600 bg-clip-text text-transparent mb-8">
              About Tierra Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tierra Connect digitizes and connects the coffee supply chain — from farm-level data collection to global buyer relationships through cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Enhanced Tech Mockup */}
            <div className="animate-slide-in-left">
              <div className="relative">
                {/* Desktop Monitor with modern design */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-8 shadow-2xl border border-gray-600">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Modern Header */}
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 px-6 py-4 border-b flex items-center space-x-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-600 inline-flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          tierra-connect.com
                        </div>
                      </div>
                    </div>
                    
                    {/* Modern Dashboard */}
                    <div className="p-8 h-72 bg-gradient-to-br from-white to-gray-50">
                      <div className="grid grid-cols-3 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white shadow-lg">
                          <div className="text-3xl font-bold">1,234</div>
                          <div className="text-green-100 text-sm">Active Farmers</div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white shadow-lg">
                          <div className="text-3xl font-bold">456</div>
                          <div className="text-blue-100 text-sm">Digital Profiles</div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white shadow-lg">
                          <div className="text-3xl font-bold">89</div>
                          <div className="text-purple-100 text-sm">Global Buyers</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="bg-gradient-to-r from-green-200 to-green-300 h-4 rounded-full"></div>
                          <div className="bg-gradient-to-r from-green-100 to-green-200 h-4 rounded-full w-3/4"></div>
                          <div className="bg-gradient-to-r from-green-50 to-green-100 h-4 rounded-full w-1/2"></div>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-gradient-to-r from-blue-200 to-blue-300 h-4 rounded-full"></div>
                          <div className="bg-gradient-to-r from-blue-100 to-blue-200 h-4 rounded-full w-4/5"></div>
                          <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-4 rounded-full w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modern iPhone */}
                <div className="absolute -bottom-12 -right-12 w-36 bg-gradient-to-br from-gray-900 to-black rounded-[2.5rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden h-64">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 h-full relative">
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                        <div className="w-10 h-1.5 bg-black rounded-full"></div>
                      </div>
                      
                      <div className="pt-12 px-4 h-full">
                        <div className="text-center mb-6">
                          <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-2xl w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                            <Smartphone className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-xs font-semibold text-green-800">Farm Profile</div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="bg-gradient-to-r from-green-300 to-green-400 h-3 rounded-full w-full"></div>
                          <div className="bg-gradient-to-r from-green-200 to-green-300 h-3 rounded-full w-3/4"></div>
                          <div className="bg-gradient-to-r from-green-100 to-green-200 h-3 rounded-full w-1/2"></div>
                        </div>
                        
                        <div className="mt-6 grid grid-cols-2 gap-2">
                          <div className="bg-gradient-to-br from-green-400 to-green-500 h-14 rounded-xl"></div>
                          <div className="bg-gradient-to-br from-green-300 to-green-400 h-14 rounded-xl"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center space-x-4 mb-8 p-4 bg-white rounded-2xl shadow-lg">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl shadow-lg">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl shadow-lg">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-xl shadow-lg">
                    <LinkIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-xl text-gray-700 font-medium">
                  From Farm to Global Markets
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg transition-all">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Farm-to-Cup</div>
                  <div className="text-green-700 font-medium">Traceability</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-all">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Digital</div>
                  <div className="text-blue-700 font-medium">Profiles</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:shadow-lg transition-all">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">Fair</div>
                  <div className="text-purple-700 font-medium">Trade</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200 hover:shadow-lg transition-all">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">Financial</div>
                  <div className="text-emerald-700 font-medium">Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-600 tracking-wider uppercase">How It Works</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-green-600 bg-clip-text text-transparent mb-8">
              Technology Meets Agriculture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform supports every step of the coffee supply chain with cutting-edge digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-green-300 hover:shadow-2xl transition-all duration-300 animate-fade-in hover:scale-105 group" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl flex-shrink-0 shadow-lg group-hover:shadow-green-200 transition-all">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent text-lg font-bold">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="h-px bg-gradient-to-r from-green-200 to-blue-200 flex-1"></div>
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-green-900 mb-8">
              We Partner with
            </h2>
          </div>

          <div className="relative min-h-[800px] flex items-center justify-center">
            {/* Central Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center text-white">
                  <div className="text-lg font-bold">Partnerships</div>
                </div>
              </div>
            </div>

            {/* Partnership Cards arranged in a circle */}
            <div className="relative w-full h-[750px]">
              {partnerships.map((partnership, index) => {
                const angle = (index * (360 / partnerships.length)) - 90; // Start from top
                const radius = 320; // Further increased radius for more spacing
                let x = Math.cos((angle * Math.PI) / 180) * radius;
                let y = Math.sin((angle * Math.PI) / 180) * radius;
                
                // Adjust specific cards to lower them slightly
                if (partnership.title.includes("Financial Institutions") || 
                    partnership.title.includes("Coffee Market Partners") || 
                    partnership.title.includes("Cooperatives")) {
                  y += 30; // Move these three cards down by 30px
                }
                
                return (
                  <div
                    key={index}
                    className="absolute w-72 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 hover:z-20"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 h-full hover:border-green-300">
                      <CardContent className="p-6">
                        <div className="text-center space-y-4">
                          <div className={`${partnership.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg transition-transform duration-300`}>
                            <partnership.icon className="w-8 h-8" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
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
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-blue-700 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-100 tracking-wider uppercase">Ready to Connect?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Want to learn more about the project?
              </h2>
              <p className="text-xl mb-10 text-green-100 max-w-2xl mx-auto">
                Join the digital agriculture revolution. Send an email to{" "}
                <a 
                  href="mailto:info@buhlorigin.com" 
                  className="underline hover:text-white transition-colors font-medium bg-white/10 px-2 py-1 rounded"
                >
                  info@buhlorigin.com
                </a>
                {" "}— we'd love to hear from you!
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-green-700 hover:bg-gray-50 px-10 py-4 text-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                onClick={() => window.location.href = 'mailto:info@buhlorigin.com'}
              >
                <Mail className="mr-3 w-6 h-6" />
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-100 py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">Buhl Origin SL</h3>
              <div className="space-y-3 text-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-700/80 p-2 rounded-full backdrop-blur-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-lg">Calle Alonso Cano 60, 28003 Madrid, Spain</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-700/80 p-2 rounded-full backdrop-blur-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg">+34 672 324 531</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-700/80 p-2 rounded-full backdrop-blur-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a href="mailto:info@buhlorigin.com" className="hover:text-white transition-colors text-lg">
                    info@buhlorigin.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-lg mb-2">
                Operated by Buhl Origin SL
              </p>
              <p className="text-gray-400">
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
