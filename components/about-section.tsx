export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-black mb-8 text-card-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            About Me
          </h2>

          <div
            className="text-lg leading-relaxed text-card-foreground space-y-6"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <p>
              I'm a passionate B.Tech Information Technology graduate from Netaji Subhash Engineering College with a
              strong foundation in programming, web development, and artificial intelligence. Based in Kolkata, West
              Bengal, I bring a detail-oriented approach to every project I work on.
            </p>

            <p>
              My journey in technology has been driven by curiosity and a desire to solve real-world problems through
              code. I've developed expertise in full-stack development, machine learning, and have successfully built
              projects ranging from e-commerce platforms to AI-powered applications.
            </p>

            <p>
              With over 150+ Data Structures and Algorithms problems solved on LeetCode and multiple certifications in
              software engineering and cybersecurity, I'm always eager to learn new technologies and take on challenging
              projects that push the boundaries of what's possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
