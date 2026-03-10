import { Calendar, FileText, Video, Users } from 'lucide-react';

export function Apply() {
  const timeline = [
    {
      title: 'Application Deadline',
      date: 'Friday, January 23rd @ 11:59 p.m.',
      description: 'Apply through our online application, linked below. The application requires responses to several short essay questions and a resume submission.',
      icon: FileText,
      cta: { text: 'Apply Here', href: '#' }
    },
    {
      title: 'Application Decisions',
      date: 'Saturday, January 24th - Sunday, January 25th',
      description: 'Decisions on applicants will be sent on a rolling basis.',
      icon: Calendar,
    },
    {
      title: 'Club Callout #1',
      date: 'Wednesday, January 14th @ 7:00 PM',
      location: 'KRAN G016',
      description: 'Come and hear about the club, meet our members, and get more information on our application process!',
      icon: Users,
    },
    {
      title: 'Club Callout #2',
      date: 'Thursday, January 22nd @ 7:00 PM',
      location: 'LILLY G126',
      description: 'Come and hear about the club, meet our members, and get more information on our application process!',
      icon: Users,
    },
    {
      title: 'Interviews',
      date: 'Monday, January 26th - Wednesday, January 28th',
      description: 'After reviewing applications, some applicants will be invited back for an interview. Interviews will be conducted in person. They involve some behavioral questions as well as case-style questions. See our Interviews page for more details, tips & tricks.',
      icon: Video,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Join Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Start your journey in project management
          </p>
        </div>
      </section>

      {/* Recruitment Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Recruitment Timeline
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {timeline.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  {/* Date */}
                  <p className="text-lg font-semibold text-yellow-600 mb-2">
                    {item.date}
                  </p>

                  {/* Location (if applicable) */}
                  {item.location && (
                    <p className="text-base font-medium text-gray-700 mb-4">
                      {item.location}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* CTA Button (if applicable) */}
                  {item.cta && (
                    <a
                      href={item.cta.href}
                      className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium"
                    >
                      {item.cta.text}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ready to Apply Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Take the first step towards becoming a leader in project management. 
            We look forward to reviewing your application!
          </p>
          <a
            href="#"
            className="inline-block bg-yellow-500 text-black px-10 py-4 rounded-md hover:bg-yellow-400 transition-colors font-medium text-lg"
          >
            Submit Application
          </a>
        </div>
      </section>
    </div>
  );
}
