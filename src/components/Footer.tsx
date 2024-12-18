import Container from './ui/Container'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <Container>
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Your Portfolio. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}