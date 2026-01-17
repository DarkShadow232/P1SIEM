// Mock data for SIEM Security Portfolio

export const statsData = [
  { value: '5', label: 'AI Models', description: 'Multi-layered Detection' },
  { value: '98.1%', label: 'Accuracy', description: 'XGBoost Multi-Class' },
  { value: 'Real-Time', label: 'Detection', description: 'Instant Threat Detection' },
  { value: '8+', label: 'Attack Types', description: 'Comprehensive Coverage' }
];

export const featuresData = [
  {
    id: 1,
    icon: 'Shield',
    title: 'Real-Time Anomaly Detection',
    description: 'Continuous monitoring with instant alerts',
    detail: 'Millisecond response time'
  },
  {
    id: 2,
    icon: 'Brain',
    title: 'AI-Powered Analysis',
    description: '5 machine learning models working in parallel',
    detail: 'Unsupervised and supervised learning'
  },
  {
    id: 3,
    icon: 'BarChart3',
    title: 'Interactive Dashboard',
    description: 'ELK-style visualization interface',
    detail: 'Real-time charts and metrics'
  },
  {
    id: 4,
    icon: 'Swords',
    title: 'Attack Simulation',
    description: 'Built-in attack simulator for testing',
    detail: '8+ attack type scenarios'
  },
  {
    id: 5,
    icon: 'Plug',
    title: 'SIEM Integration',
    description: 'REST API for enterprise SIEM systems',
    detail: 'JSON alert formatting'
  },
  {
    id: 6,
    icon: 'Target',
    title: 'Zero-Day Detection',
    description: 'Detects unknown attack patterns',
    detail: 'No labeled data required'
  }
];

export const aiModelsData = [
  {
    id: 1,
    name: 'One-Class SVM',
    type: 'Unsupervised Anomaly Detection',
    accuracy: 94.2,
    bestFor: 'Unknown attacks, Zero-day threats',
    status: 'Production-Ready (SIEM Integrated)',
    description: 'Trains only on normal traffic, detects any deviation',
    isPrimary: true,
    icon: 'Star'
  },
  {
    id: 2,
    name: 'XGBoost Multi-Class',
    type: 'Supervised Classification',
    accuracy: 98.1,
    bestFor: 'Specific attack type identification',
    status: 'Active',
    description: 'Identifies and classifies specific attack types',
    isPrimary: false,
    icon: 'Layers'
  },
  {
    id: 3,
    name: 'XGBoost Binary',
    type: 'Supervised Classification',
    accuracy: 96.5,
    bestFor: 'High-accuracy normal/anomaly detection',
    status: 'Active',
    description: 'Binary classification with feature insights',
    isPrimary: false,
    icon: 'Binary'
  },
  {
    id: 4,
    name: 'Isolation Forest',
    type: 'Unsupervised Anomaly Detection',
    accuracy: 91.8,
    bestFor: 'Fast outlier detection',
    status: 'Active',
    description: 'Tree-based rapid anomaly isolation',
    isPrimary: false,
    icon: 'TreeDeciduous'
  },
  {
    id: 5,
    name: 'Gaussian Mixture Model',
    type: 'Unsupervised Anomaly Detection',
    accuracy: 92.3,
    bestFor: 'Probabilistic anomaly detection',
    status: 'Active',
    description: 'Probabilistic clustering approach',
    isPrimary: false,
    icon: 'Sigma'
  }
];

export const dashboardFeaturesData = [
  { icon: 'Activity', label: 'Real-Time Monitoring' },
  { icon: 'Bell', label: 'Alert Management' },
  { icon: 'Search', label: 'Anomaly Search' },
  { icon: 'Network', label: 'Traffic Analysis' },
  { icon: 'AlertTriangle', label: 'Severity Classification' },
  { icon: 'Clock', label: 'Historical Analysis' },
  { icon: 'Code', label: 'Custom Queries' },
  { icon: 'FileDown', label: 'Export Reports' }
];

export const methodologyData = [
  {
    step: 1,
    title: 'Data Collection',
    description: 'Network traffic logs ingestion',
    icon: 'Database'
  },
  {
    step: 2,
    title: 'Preprocessing',
    description: 'Feature engineering & normalization',
    icon: 'Settings'
  },
  {
    step: 3,
    title: 'AI Analysis',
    description: 'Multi-model threat detection',
    icon: 'Brain'
  },
  {
    step: 4,
    title: 'Alert Generation',
    description: 'Severity classification & formatting',
    icon: 'AlertCircle'
  },
  {
    step: 5,
    title: 'SIEM Integration',
    description: 'REST API delivery to security platforms',
    icon: 'Server'
  },
  {
    step: 6,
    title: 'Dashboard Visualization',
    description: 'Real-time monitoring interface',
    icon: 'Monitor'
  }
];

export const performanceMetricsData = [
  { label: 'Anomaly Detection Rate', value: '95%+' },
  { label: 'False Positive Rate', value: '<5%' },
  { label: 'Processing Speed', value: 'Real-time' },
  { label: 'Scalability', value: '100K+ logs/sec' },
  { label: 'Model Training Time', value: 'Minutes' },
  { label: 'Supported Attack Types', value: '8+' }
];

export const attackTypesData = [
  { name: 'DDoS Attacks', icon: 'Zap' },
  { name: 'Port Scanning', icon: 'Scan' },
  { name: 'Brute Force', icon: 'Key' },
  { name: 'SQL Injection', icon: 'Database' },
  { name: 'Botnet Activity', icon: 'Bot' },
  { name: 'Data Exfiltration', icon: 'FileOutput' },
  { name: 'Reconnaissance', icon: 'Eye' },
  { name: 'Zero-Day Threats', icon: 'ShieldAlert' }
];

export const techStackData = {
  mlAi: [
    { name: 'Python 3.8+', icon: 'Code' },
    { name: 'scikit-learn', icon: 'Brain' },
    { name: 'XGBoost', icon: 'Layers' },
    { name: 'NumPy', icon: 'Grid3x3' },
    { name: 'Pandas', icon: 'Table' }
  ],
  dashboard: [
    { name: 'Flask', icon: 'Server' },
    { name: 'Plotly.js', icon: 'LineChart' },
    { name: 'Chart.js', icon: 'PieChart' },
    { name: 'HTML5/CSS3', icon: 'Code2' },
    { name: 'JavaScript', icon: 'Braces' }
  ],
  dataProcessing: [
    { name: 'Jupyter Notebooks', icon: 'BookOpen' },
    { name: 'Feature Engineering', icon: 'Settings' },
    { name: 'Data Preprocessing', icon: 'Filter' }
  ],
  deployment: [
    { name: 'REST API', icon: 'Globe' },
    { name: 'JSON Formatting', icon: 'FileJson' },
    { name: 'Model Persistence', icon: 'Save' }
  ]
};

export const projectLinksData = [
  {
    title: 'GitHub Repository',
    description: 'View Source Code',
    detail: 'Complete codebase with documentation',
    icon: 'Github',
    url: '#'
  },
  {
    title: 'Live Dashboard Demo',
    description: 'Try Interactive Demo',
    detail: 'Experience the real-time interface',
    icon: 'ExternalLink',
    url: '#'
  },
  {
    title: 'Documentation',
    description: 'Read Full Docs',
    detail: 'Complete implementation guide',
    icon: 'FileText',
    url: '#'
  }
];

export const visualizationsData = [
  { id: 1, title: 'SIEM Alert Dashboard', category: 'Dashboard' },
  { id: 2, title: 'Anomaly Detection Results', category: 'Analysis' },
  { id: 3, title: 'XGBoost Binary Confusion Matrix', category: 'Models' },
  { id: 4, title: 'Multi-Class Confusion Matrix', category: 'Models' },
  { id: 5, title: 'One-Class SVM Confusion Matrix', category: 'Models' },
  { id: 6, title: 'Isolation Forest Results', category: 'Models' },
  { id: 7, title: 'Feature Importance Analysis', category: 'Analysis' },
  { id: 8, title: 'Normal vs Anomaly Comparison', category: 'Analysis' }
];

export const navLinksData = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'models', label: 'AI Models' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'methodology', label: 'Methodology' },
  { id: 'results', label: 'Results' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'contact', label: 'Contact' }
];
