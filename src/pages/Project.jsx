import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects'

export default function Project(){
  const { slug } = useParams()
  const p = projects.find(x=> x.slug === slug)
  if(!p){ return <div className="container py-20">Not found. <Link className="link" to="/">Go home</Link></div> }
  return (
    <div>
      <div className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="container h-14 flex items-center justify-between">
          <Link className="font-bold" to="/">← Back</Link>
          <a className="link" href="#endpoints">API Endpoints</a>
        </div>
      </div>

      <section className="section" id="overview">
        <div className="container">
          <h1 className="text-3xl font-bold">{p.title}</h1>
          <div className="text-muted">{p.stack}</div>
          <p className="text-muted mt-3 max-w-3xl">{p.desc}</p>
          <div className="mt-3">{p.tags.map(t=> <span key={t} className="chip">{t}</span>)}</div>
        </div>
      </section>

      <section className="section" id="diagram">
        <div className="container">
          <h2 className="h2">Architecture Diagram</h2>
          <div className="overflow-auto border border-border rounded-xl p-4">
            <svg width="860" height="300">
  {/* Client box */}
  <rect x="20" y="40" width="160" height="80" rx="12" fill="none" stroke="currentColor"></rect>
  <text x="100" y="85" textAnchor="middle" fontSize="12" fill="var(--fg)">Client</text>

  {/* API Gateway */}
  <rect x="240" y="40" width="200" height="80" rx="12" fill="none" stroke="currentColor"></rect>
  <text x="340" y="70" textAnchor="middle" fontSize="12" fill="var(--fg)">API Gateway</text>
  <text x="340" y="90" textAnchor="middle" fontSize="11" fill="var(--fg)">OAuth2 / JWT</text>

  {/* Services */}
  <rect x="500" y="20" width="160" height="60" rx="12" fill="none" stroke="currentColor"></rect>
  <text x="580" y="50" textAnchor="middle" fontSize="12" fill="var(--fg)">Service A</text>

  <rect x="500" y="120" width="160" height="60" rx="12" fill="none" stroke="currentColor"></rect>
  <text x="580" y="150" textAnchor="middle" fontSize="12" fill="var(--fg)">Service B</text>

  {/* Database */}
  <rect x="700" y="60" width="140" height="80" rx="12" fill="none" stroke="currentColor"></rect>
  <text x="770" y="95" textAnchor="middle" fontSize="12" fill="var(--fg)">DB / Cache</text>

  {/* Lines */}
  <line x1="180" y1="80" x2="240" y2="80" stroke="currentColor" markerEnd="url(#arrow)" />
  <line x1="440" y1="80" x2="500" y2="50" stroke="currentColor" markerEnd="url(#arrow)" />
  <line x1="440" y1="80" x2="500" y2="150" stroke="currentColor" markerEnd="url(#arrow)" />
  <line x1="660" y1="50" x2="700" y2="100" stroke="currentColor" markerEnd="url(#arrow)" />
  <line x1="660" y1="150" x2="700" y2="100" stroke="currentColor" markerEnd="url(#arrow)" />

  {/* Arrow definition */}
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L6,3 z" fill="currentColor" />
    </marker>
  </defs>
</svg>

          </div>
        </div>
      </section>

      <section className="section" id="endpoints">
        <div className="container">
          <h2 className="h2">API Endpoints (OpenAPI excerpt)</h2>
          <pre className="card overflow-x-auto text-sm"><code>{`openapi: 3.0.3
info:
  title: ${p.title} API
  version: 1.0.0
paths:
  /api/v1/orders:
    get:
      summary: List orders
      security: [ { bearerAuth: [] } ]
      responses:
        '200': { description: OK }
    post:
      summary: Create order
      security: [ { bearerAuth: [] } ]
      responses:
        '201': { description: Created }
  /api/v1/orders/{id}:
    get: { summary: Get order by id, responses: { '200': { description: OK } } }
    put: { summary: Update order, responses: { '200': { description: OK } } }
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
`}</code></pre>
        </div>
      </section>

      <footer className="py-10 text-center text-muted">© {new Date().getFullYear()} Sai Ganesh</footer>
    </div>
  )
}
