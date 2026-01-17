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
    description: 'One-Class SVM serves as the primary detection engine, trained exclusively on normal network traffic patterns. It creates a decision boundary that encapsulates legitimate behavior, flagging any deviation as a potential threat. This approach is particularly powerful for detecting zero-day attacks and previously unknown threat vectors without requiring labeled attack data for training.',
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
    description: 'XGBoost Multi-Class classifier excels at categorizing detected anomalies into specific attack types such as DDoS, port scanning, brute force, and data exfiltration. Using gradient boosting with decision trees, it provides detailed threat classification that enables security teams to prioritize responses and implement targeted countermeasures.',
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
    description: 'XGBoost Binary provides a robust secondary validation layer, distinguishing between normal and anomalous traffic with exceptional precision. It includes built-in feature importance analysis, helping security analysts understand which network attributes most strongly indicate malicious activity, enabling continuous improvement of detection rules.',
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
    description: 'Isolation Forest uses a tree-based approach to rapidly isolate anomalies by randomly selecting features and split values. Anomalies, being rare and different, require fewer splits to isolate. This makes it highly efficient for real-time processing of high-volume network traffic, providing quick initial screening before deeper analysis.',
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
    description: 'GMM models network traffic as a mixture of Gaussian distributions, assigning probability scores to each data point. This probabilistic approach provides nuanced anomaly scoring rather than binary classification, allowing security teams to set custom thresholds based on risk tolerance and prioritize investigation of the most statistically unusual events.',
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
    title: 'Live Dashboard Demo',
    description: 'Try Interactive Demo',
    detail: 'Experience the real-time interface',
    icon: 'ExternalLink',
    url: 'https://drive.google.com/file/d/1cYbipM4TDjMiBVwnWtOiV1lphqofg9Ht/view?usp=sharing'
  },
  {
    title: 'Documentation',
    description: 'Read Full Docs',
    detail: 'Complete implementation guide',
    icon: 'FileText',
    url: 'https://qms.sut.edu.eg/web/projects/view/117'
  }
];

export const visualizationsData = [
  // Dashboard
  { 
    id: 1, 
    title: 'SIEM Alert Dashboard', 
    category: 'Dashboard',
    imageUrl: 'https://customer-assets.emergentagent.com/job_siemshield/artifacts/dl0537nl_siem_alert_dashboard.png'
  },
  // Confusion Matrices
  { 
    id: 2, 
    title: 'Multi-Class Confusion Matrix', 
    category: 'Models',
    imageUrl: 'https://customer-assets.emergentagent.com/job_siemshield/artifacts/89he1ff5_multiclass_confusion.jpg'
  },
  { 
    id: 3, 
    title: 'One-Class SVM Confusion Matrix', 
    category: 'Models',
    imageUrl: 'https://customer-assets.emergentagent.com/job_siemshield/artifacts/i2gapj3f_ocsvm_confusion_matrix.jpg'
  },
  { 
    id: 4, 
    title: 'XGBoost Binary Confusion Matrix', 
    category: 'Models',
    imageUrl: 'https://customer-assets.emergentagent.com/job_siemshield/artifacts/1h83kfxj_confusion_matrix.png'
  },
  { 
    id: 5, 
    title: 'GMM Confusion Matrix', 
    category: 'Models',
    imageUrl: 'https://customer-assets.emergentagent.com/job_siemshield/artifacts/62dmwzbf_gmm_confusion.png'
  },
  { 
    id: 6, 
    title: 'Isolation Forest Confusion Matrix', 
    category: 'Models',
    imageUrl: 'https://customer-assets.emergentagent.com/job_siemshield/artifacts/q5yi0duw_isolation_forest_confusion.jpg'
  },
  // Analysis
  { 
    id: 7, 
    title: 'Anomaly Detection Results', 
    category: 'Analysis',
    imageUrl: 'https://customer-assets.emergentagent.com/job_siemshield/artifacts/uzqua5ic_anomaly_detection_results.png'
  },
  { 
    id: 8, 
    title: 'Normal vs Anomaly Comparison', 
    category: 'Analysis',
    imageUrl: 'https://customer-assets.emergentagent.com/job_siemshield/artifacts/9xdgkxic_normal_vs_anomaly_comparison.png'
  },
  { 
    id: 9, 
    title: 'Feature Importance Analysis', 
    category: 'Analysis',
    imageUrl: 'https://customer-assets.emergentagent.com/job_siemshield/artifacts/f8e2rbeg_feature_importance.png'
  },
  { 
    id: 10, 
    title: 'Feature-wise Outlier Detection', 
    category: 'Analysis',
    imageUrl: 'https://customer-assets.emergentagent.com/job_siemshield/artifacts/0zvz5in5_feature_wise_outliers.png'
  },
  { 
    id: 11, 
    title: 'Outlier Detection Analysis', 
    category: 'Analysis',
    imageUrl: 'https://customer-assets.emergentagent.com/job_siemshield/artifacts/ejdlp7i4_outlier_detection_analysis.png'
  },
  { 
    id: 12, 
    title: 'Distribution Comparison', 
    category: 'Analysis',
    imageUrl: 'https://customer-assets.emergentagent.com/job_siemshield/artifacts/lijfrmfl_chart_distribution_comparison.png'
  },
  { 
    id: 13, 
    title: 'Dataset Size Comparison', 
    category: 'Analysis',
    imageUrl: 'https://customer-assets.emergentagent.com/job_siemshield/artifacts/qdlw0519_chart_size_comparison.png'
  },
  { 
    id: 14, 
    title: 'Mean Values Comparison', 
    category: 'Analysis',
    imageUrl: 'https://customer-assets.emergentagent.com/job_siemshield/artifacts/94wlhznd_chart_mean_comparison.png'
  },
  { 
    id: 15, 
    title: 'Percentage Change Analysis', 
    category: 'Analysis',
    imageUrl: 'https://customer-assets.emergentagent.com/job_siemshield/artifacts/b511azqu_chart_pct_change.png'
  }
];

export const navLinksData = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'models', label: 'AI Models' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'methodology', label: 'Methodology' },
  { id: 'results', label: 'Results' },
  { id: 'tech-stack', label: 'Tech Stack' }
];
