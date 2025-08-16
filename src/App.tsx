import React, { useState } from 'react';
import { 
  Calendar, 
  TrendingUp, 
  Clock, 
  Users, 
  CheckCircle, 
  Star,
  ArrowRight,
  BarChart3,
  Zap,
  Shield,
  Smartphone,
  Menu,
  X
} from 'lucide-react';
import { AuthModal } from './components/AuthModal';
import { UserMenu } from './components/UserMenu';
import { Dashboard } from './components/Dashboard';
import { useAuth } from './hooks/useAuth';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signup');
  const { user, loading } = useAuth();

  const openAuthModal = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          <span className="text-gray-600">Loading...</span>
          <div className="text-center max-w-md">
            <p className="text-sm text-gray-500">
              If this takes too long, please check your Supabase configuration in the .env file
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Show dashboard if user is logged in
  if (user) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Calendar className="h-8 w-8 text-purple-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">SocialFlow</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">Pricing</a>
                {user ? (
                  <UserMenu />
                ) : (
                  <>
                    <button 
                      onClick={() => openAuthModal('signin')}
                      className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                    >
                      Login
                    </button>
                    <button 
                      onClick={() => openAuthModal('signup')}
                      className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                      Start Free Trial
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium">Features</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
              {user ? (
                <div className="px-3 py-2">
                  <UserMenu />
                </div>
              ) : (
                <>
                  <button 
                    onClick={() => openAuthModal('signin')}
                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 font-medium"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => openAuthModal('signup')}
                    className="w-full text-left bg-purple-600 text-white px-3 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors mt-4"
                  >
                    Start Free Trial
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Schedule Social Media Posts
              <span className="block text-purple-600">10x Faster</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
              Create, schedule, and manage all your social media content in one place. 
              Save 15+ hours per week with AI-powered content creation and smart scheduling.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => openAuthModal('signup')}
                className="w-full sm:w-auto bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Start Free Trial
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
              <p className="text-sm text-gray-500">No credit card required • 14-day free trial</p>
            </div>

            {/* Hero Visual */}
            <div className="mt-16 relative">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Content Calendar</h3>
                      <p className="text-gray-500">Plan your entire month</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    <div className="text-center text-sm font-medium text-gray-500 p-2">Mon</div>
                    <div className="text-center text-sm font-medium text-gray-500 p-2">Tue</div>
                    <div className="text-center text-sm font-medium text-gray-500 p-2">Wed</div>
                    <div className="text-center text-sm font-medium text-gray-500 p-2">Thu</div>
                    <div className="text-center text-sm font-medium text-gray-500 p-2">Fri</div>
                    <div className="text-center text-sm font-medium text-gray-500 p-2">Sat</div>
                    <div className="text-center text-sm font-medium text-gray-500 p-2">Sun</div>
                    
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28].map((day) => (
                      <div key={day} className="aspect-square p-2 text-center text-sm relative">
                        <span className="text-gray-700">{day}</span>
                        {[3,7,12,18,23].includes(day) && (
                          <div className="absolute inset-x-1 bottom-1 h-1 bg-purple-400 rounded-full"></div>
                        )}
                        {[5,14,21].includes(day) && (
                          <div className="absolute inset-x-1 bottom-1 h-1 bg-blue-400 rounded-full"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 font-medium mb-8">Trusted by 50,000+ content creators and businesses</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">TechCorp</div>
              <div className="text-2xl font-bold text-gray-400">StartupXYZ</div>
              <div className="text-2xl font-bold text-gray-400">CreativeAgency</div>
              <div className="text-2xl font-bold text-gray-400">DigitalBrand</div>
              <div className="text-2xl font-bold text-gray-400">GrowthCo</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">15hrs</div>
              <p className="text-gray-600">Average time saved per week</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">300%</div>
              <p className="text-gray-600">Increase in social engagement</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <p className="text-gray-600">Uptime reliability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Everything you need to dominate social media
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stop juggling multiple tools. SocialFlow gives you everything to create, 
              schedule, and analyze your social media content in one powerful platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Scheduling</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered optimal posting times based on your audience engagement patterns.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Content Creation</h3>
              <p className="text-gray-600 leading-relaxed">
                Generate engaging captions, hashtags, and post ideas with advanced AI assistance.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Track performance across all platforms with detailed insights and growth metrics.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                Work together with approval workflows, comments, and role-based permissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Walkthrough */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              How it works
            </h2>
            <p className="text-lg text-gray-600">
              Get started in minutes, not hours
            </p>
          </div>

          <div className="space-y-20">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full font-bold text-lg mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Connect Your Social Accounts
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Securely link Instagram, Twitter, Facebook, LinkedIn, and TikTok in seconds. 
                  Our enterprise-grade security keeps your accounts safe.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    One-click platform integration
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Bank-level security encryption
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="space-y-4">
                    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-pink-600 font-bold">ig</span>
                      </div>
                      <span className="flex-1 font-medium">Instagram</span>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-bold">tw</span>
                      </div>
                      <span className="flex-1 font-medium">Twitter</span>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-bold">li</span>
                      </div>
                      <span className="flex-1 font-medium">LinkedIn</span>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full font-bold text-lg mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Create Content with AI
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Use our AI assistant to generate engaging captions, select trending hashtags, 
                  and create post variations that resonate with your audience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    AI-generated captions and hashtags
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Brand voice customization
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-2">AI Generated Caption:</p>
                      <p className="text-gray-900">
                        "🚀 Excited to share our latest product update! This feature will help you save 
                        hours every week. What do you think? #productivity #startup #innovation"
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-purple-600" />
                      <span className="text-sm font-medium text-purple-600">AI Powered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full font-bold text-lg mb-6">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Schedule & Publish
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Set your posts to go live at optimal times across all platforms. 
                  Our smart scheduling ensures maximum engagement when your audience is most active.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Optimal posting time suggestions
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Bulk scheduling and automation
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-semibold text-gray-900">Scheduled Posts</h4>
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                      <span className="text-sm font-medium text-gray-900">Instagram Post</span>
                      <span className="text-sm text-green-600">Today 3:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <span className="text-sm font-medium text-gray-900">Twitter Thread</span>
                      <span className="text-sm text-blue-600">Tomorrow 9:00 AM</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 border border-purple-200 rounded-lg">
                      <span className="text-sm font-medium text-gray-900">LinkedIn Article</span>
                      <span className="text-sm text-purple-600">Wed 2:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What our customers say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "SocialFlow transformed our social media strategy. We've seen a 300% increase 
                in engagement and saved 20+ hours per week. Game changer!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">SM</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                  <div className="text-gray-500 text-sm">Marketing Director, TechCorp</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The AI content creation is incredible. I can now maintain consistent posting 
                across all platforms without spending hours writing captions."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">JD</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">James Davis</div>
                  <div className="text-gray-500 text-sm">Founder, StartupXYZ</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Best social media tool I've used. The analytics help me understand what content 
                performs best, and the scheduling is flawless."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">LR</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Lisa Rodriguez</div>
                  <div className="text-gray-500 text-sm">Social Media Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Choose your plan
            </h2>
            <p className="text-lg text-gray-600">
              Start free, upgrade anytime. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$19</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-gray-600 mb-6">Perfect for solopreneurs and small businesses</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Up to 3 social accounts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">50 scheduled posts/month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Basic analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">AI caption generation</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                {user ? 'Current Plan' : 'Start Free Trial'}
              </button>
            </div>

            {/* Professional Plan - Popular */}
            <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-purple-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$49</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-gray-600 mb-6">For growing businesses and marketing teams</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Up to 10 social accounts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Unlimited scheduled posts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Team collaboration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Priority support</span>
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors transform hover:scale-105">
                {user ? 'Upgrade Plan' : 'Start Free Trial'}
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$99</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-gray-600 mb-6">For large teams and agencies</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Unlimited social accounts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Unlimited everything</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">White-label reporting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Dedicated success manager</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                {user ? 'Contact Sales' : 'Contact Sales'}
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                <span>SSL Encrypted</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Cancel Anytime</span>
              </div>
              <div className="flex items-center">
                <Smartphone className="h-4 w-4 mr-2" />
                <span>Mobile App</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to transform your social media?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Join 50,000+ businesses already growing with SocialFlow. 
            Start your free trial today and see results in just 7 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => openAuthModal('signup')}
              className="w-full sm:w-auto bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Start Free 14-Day Trial
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </button>
            <p className="text-purple-100 text-sm">No credit card required</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Calendar className="h-8 w-8 text-purple-400" />
                <span className="ml-2 text-xl font-bold text-white">SocialFlow</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                The all-in-one social media management platform for modern businesses.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 SocialFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </div>
  );
}

export default App;