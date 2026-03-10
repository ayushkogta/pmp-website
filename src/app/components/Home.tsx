import { Target, Award, Users, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - Black background with large text */}
      <section className="bg-black text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Project Management at Purdue
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl">
            Building tomorrow's project leaders through hands-on experience.
          </p>
        </div>
      </section>

      {/* Who We Are Section - Two column layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Executive Board Photo */}
            <div className="rounded-lg overflow-hidden shadow-2xl h-80">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759699282669-c77bbefb336d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwZ3JvdXAlMjB0ZWFtJTIwcGhvdG8lMjBzdGFpcnN8ZW58MXx8fHwxNzczMTU3ODE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Executive Board Team Photo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Who We Are Text */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Project Management at Purdue is a student-run organization home to some of the most 
                driven individuals at Purdue University. We develop real-world project management skills 
                through hands-on experience and professional development.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With over <span className="font-semibold text-yellow-600">50+ active members</span>, 
                we work on innovative projects and build the skills needed to become tomorrow's leaders.
              </p>
              <a
                href="/people"
                className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Clean, minimal */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-2xl text-gray-700 font-light leading-relaxed">
              Develop project manager skills and abilities through practical experience, 
              professional development, and real-world collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section - Grid layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">What We Offer</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-14 h-14 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Active Management Experience
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Gain hands-on experience managing real-world projects with industry-standard methodologies and tools.
              </p>
            </div>

            <div>
              <div className="w-14 h-14 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Professional Development with PMI
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Network with professionals and develop skills through our partnership with the Project Management Institute.
              </p>
            </div>

            <div>
              <div className="w-14 h-14 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Resources for PM Certificates
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access study materials and preparation resources for project management certifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Projects</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We work on innovative concept projects with companies like Nike, Apple, and Rolls-Royce. 
                From designing next-generation footwear to creating revolutionary product concepts, 
                our members gain invaluable project management experience.
              </p>
              <a
                href="/projects"
                className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-md hover:bg-yellow-400 transition-colors font-medium"
              >
                View Projects
              </a>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758923530651-5183fa706d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwcHJvZHVjdCUyMGRlc2lnbnxlbnwxfHx8fDE3NzMxNTc0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Innovation projects"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}