const projects = [
  {
    slug: 'drug-supply-chain',
    title: 'Drug Supply Chain Microservices Platform',
    stack: 'Spring Boot • Kafka • Redis • AWS ECS Fargate • Swagger',
    blurb: 'Fault-tolerant microservices to ingest, process, and expose pharmaceutical supply data with OAuth2/JWT and blue-green deploys.',
    desc: 'A suite of services handling ingestion, normalization, and querying of supply chain events. Centralized auth via OAuth2/JWT, standardized error contracts, and distributed tracing. Deployed on ECS Fargate with canary rollouts.',
    tags: ['Java','Spring Boot','Kafka','Redis','AWS','Swagger']
  },
  {
    slug: 'loan-approval',
    title: 'Loan Approval System Modernization',
    stack: 'Spring Boot • MySQL • JPA • ActiveMQ • Quartz • AWS',
    blurb: 'Refactor of monolith into domain-oriented services with RBAC, async validations, and scheduled jobs for EMI processing.',
    desc: 'Introduced domain-driven boundaries, RBAC with Spring Security, and asynchronous validations via ActiveMQ. Jobs scheduled using Quartz. CI/CD on Jenkins and GitLab runners.',
    tags: ['Spring Security','ActiveMQ','Quartz','MySQL']
  },
  {
    slug: 'retail-oms',
    title: 'Retail Order Management & Invoicing',
    stack: 'Java • Oracle • Hibernate • JSP/Bootstrap • Tomcat • Dynatrace',
    blurb: 'Order lifecycle features including returns, shipping updates, promotions, and automated invoice generation.',
    desc: 'REST endpoints for order history, returns, and shipping. Responsive UI with JSP/Bootstrap. Integrated warehouse APIs for inventory and added Dynatrace for performance insights.',
    tags: ['Oracle','Hibernate','Tomcat','Dynatrace']
  }
]
export default projects
