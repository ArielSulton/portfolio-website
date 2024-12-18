import Container from '../ui/Container'
import Section from '../ui/Section'

export default function Skills() {
  const skills = [
    { name: 'Skill 1', level: '90%' },
    { name: 'Skill 2', level: '85%' },
    { name: 'Skill 3', level: '80%' },
    { name: 'Skill 4', level: '75%' },
    { name: 'Skill 5', level: '70%' },
  ]

  return (
    <Section id="skills" className="bg-black">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12 text-white">SKILLS</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-black p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-white">{skill.name}</h3>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-zinc-800 text-white px-6 py-2 rounded-lg hover:bg-zinc-700 transition-colors">
            See Detail
          </button>
        </div>
      </Container>
    </Section>
  )
}