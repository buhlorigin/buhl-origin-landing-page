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
  ArrowLeft,
  Leaf,
  Link as LinkIcon,
  Smartphone,
  Coffee,
  Building2,
  Wrench,
  Heart,
  Banknote,
  ExternalLink
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TierraConnect = () => {
  const navigate = useNavigate();

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
      title: "Coffee Market Partners (Roasters, Importers, Trading Platforms)",
      description: "Access verified farm-level data and build long-term relationships with smallholder farmers. Our platform helps you source traceable, high-quality coffee.",
      color: "bg-green-500",
      icon: Coffee
    },
    {
      number: "2",
      title: "Cooperatives & Producer Organizations", 
      description: "Streamline member data collection and showcase your producers to global buyers. Strengthen your value proposition with digital profiles.",
      color: "bg-orange-500",
      icon: Building2
    },
    {
      number: "3",
      title: "Technology Providers & Integrators",
      description: "Our API-first approach enables seamless integration with existing agricultural management systems, traceability platforms, and supply chain solutions.",
      color: "bg-purple-500",
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
      {/* Header with Back Button */}
      <header className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <div className="flex-1 text-center">
            <h1 className="text-2xl font-bold text-gray-900">TierraConnect</h1>
          </div>
        </div>
      </header>

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

                {/* Floating mobile device */}
                <div className="absolute -right-12 -bottom-8 transform rotate-12 hover:rotate-6 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-2 shadow-xl">
                    <div className="bg-white rounded-xl overflow-hidden w-32 h-56">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 text-white text-center">
                        <div className="text-xs font-bold">TierraConnect</div>
                      </div>
                      <div className="p-3 space-y-2">
                        <div className="bg-green-100 h-3 rounded"></div>
                        <div className="bg-gray-100 h-3 rounded w-3/4"></div>
                        <div className="bg-gray-100 h-3 rounded w-1/2"></div>
                        <div className="bg-blue-100 h-6 rounded mt-4"></div>
                        <div className="bg-green-100 h-6 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="animate-slide-in-right">
              <div className="space-y-8">
                <div>
                  <Badge variant="outline" className="mb-4 border-green-200 text-green-700 bg-green-50">
                    💡 Smart Technology
                  </Badge>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Technology meets agriculture
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our platform bridges the gap between traditional farming and modern technology, empowering coffee producers with digital tools for better market access and sustainable practices.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Smartphone className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Mobile-First</h4>
                    <p className="text-sm text-gray-600">Designed for smartphones to reach farmers in remote areas</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <LinkIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">API Integration</h4>
                    <p className="text-sm text-gray-600">Seamlessly connects with existing supply chain systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-600 tracking-wider uppercase">Strategic Partnerships</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-blue-600 bg-clip-text text-transparent mb-8">
              We partner with
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Building bridges across the entire coffee ecosystem to create sustainable, transparent supply chains that benefit everyone from farm to cup.
            </p>
          </div>

          <div className="relative">
            {/* Central Logo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="bg-white rounded-full p-8 shadow-2xl border-4 border-green-100">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/615affde-d69d-45b9-91b3-027bae883732.png" 
                    alt="Buhl Origin Logo" 
                    className="w-16 h-16"
                  />
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

      {/* Contact Section */}
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
                Transform Your Supply Chain
              </h2>
              <p className="text-xl mb-10 text-green-100 max-w-2xl mx-auto">
                Join the digital agriculture revolution. Experience transparency and traceability like never before.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-green-700 hover:bg-gray-50 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  onClick={() => window.open('https://tierra-connect.com', '_blank')}
                >
                  <ExternalLink className="mr-3 w-5 h-5" />
                  Visit Platform
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 text-lg transition-all hover:scale-105"
                  onClick={() => window.location.href = 'mailto:info@tierra-connect.com'}
                >
                  <Mail className="mr-3 w-5 h-5" />
                  Send Message
                </Button>
              </div>
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

export default TierraConnect;