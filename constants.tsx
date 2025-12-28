
import { Project, Experience, Certification, Education } from './types.ts';

export const PROJECTS: Project[] = [
  {
    title: "Smart Notes – AI PDF Tutor",
    description: "Intelligent RAG-based learning companion that transforms static PDFs into dynamic conversations. Features semantic search, AI summarization, and secure auth.",
    features: ["Chat with PDF (RAG)", "AI Summarization", "Secure Auth (JWT/OTP)", "Export to PDF"],
    tech: ["Python", "OpenAI", "RAG", "Streamlit", "JWT"],
    github: "https://github.com/krish1440/Smart-Notes",
    live: "https://smart-notes-xu33.onrender.com/"
  },
  {
    title: "FaceGeo Attendance System",
    description: "Smart Attendance System combining facial recognition and geo-fencing for secure, fraud-proof tracking. Features role-based access and dual verification.",
    features: ["Facial Recognition", "Geo-Fencing", "Dual Verification", "Analytics Dashboard"],
    tech: ["DeepFace", "React Native", "Firebase", "Geolocation API"],
    github: "https://github.com/krish1440/FaceGeo-Attendance",
    live: "https://facegeo-attendance.onrender.com/"
  },
  {
    title: "OEA – OrderEasy Analytics",
    description: "Smart Order Management System streamlining processing and analytics. Features secure database integration, e-way bill management, and advanced sales forecasting.",
    features: ["Adv. Analytics (RFM/CLV)", "Sales Forecasting", "E-way Bill Mgmt", "Admin Panel"],
    tech: ["Streamlit", "Supabase", "Cloudinary", "Pandas", "Scikit-Learn"],
    github: "https://github.com/krish1440/OEA-OrderEasy-Analytics",
    live: "https://oea-ordereasy-analytic.streamlit.app/"
  },
  {
    title: "Handwritten Digits Class.",
    description: "Deep Learning web app for recognizing handwritten digits using a CNN model trained on MNIST. Features interactive canvas and probability confidence scoring.",
    features: ["Interactive Canvas", "Real-time Prediction", "Probability Dist.", "Deep Learning (CNN)"],
    tech: ["TensorFlow", "Keras", "Flask", "OpenCV", "JavaScript"],
    github: "https://github.com/krish1440/Hand_Digit_Classification"
  },
  {
    title: "Loan Status Prediction",
    description: "ML-powered financial tool assisting institutions in real-time eligibility decisions. Features a RESTful API and an intuitive web interface for checking approval odds.",
    features: ["Risk Assessment API", "Real-time Inference", "Data Viz Dashboard", "Production Ready"],
    tech: ["Scikit-Learn", "Flask", "Pandas", "Render", "REST API"],
    github: "https://github.com/krish1440/Loan_status_prediction",
    live: "https://loan-status-prediction-5fk2.onrender.com/"
  },
  {
    title: "Crop Production Analysis",
    description: "Data-driven analytics platform for evaluating crop production trends in India. Developed at iNeuron to aid agricultural decision-making through regional insights.",
    features: ["Power BI Dashboards", "Productivity Metrics", "Time-series Analysis", "Regional Insights"],
    tech: ["Python", "Pandas", "Power BI", "NumPy", "Statistics"],
    github: "https://github.com/krish1440/Crop-Production-Analysis-",
    live: "https://paruluniversityacin-my.sharepoint.com/personal/2303031240568_paruluniversity_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F2303031240568%5Fparuluniversity%5Fac%5Fin%2FDocuments%2Fcrop%5Fanalysis%5Ffinal%2Epbix&parent=%2Fpersonal%2F2303031240568%5Fparuluniversity%5Fac%5Fin%2FDocuments&ga=1"
  },
  {
    title: "Accenture Social Buzz",
    description: "Virtual internship project leveraging social media analytics to generate actionable business insights. Analyzed data to understand brand sentiment and engagement.",
    features: ["Sentiment Analysis", "Trend Detection", "Visual Dashboards", "Business Insights"],
    tech: ["Python", "Pandas", "NLTK", "Power BI", "Tableau"],
    github: "https://github.com/krish1440/Accenture-Social-Buzz-Forage"
  },
  {
    title: "Student Management System",
    description: "Comprehensive program to manage student records with data persistence. Features CRUD operations allowing users to add, update, delete, and view student details seamlessly.",
    features: ["CRUD Operations", "CSV Integration", "Data Persistence", "Record Management"],
    tech: ["Python", "File I/O", "Data Structures", "CSV"],
    github: "https://github.com/krish1440/STUDENT_GRADE"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Business Analyst Intern",
    company: "Abhay Engineering",
    period: "April 2025 - May 2025",
    points: [
      "🚀 Developed OrderEasy Analytics, a Streamlit-based app for MSMEs, automating order creation and delivery tracking, reducing operational errors by 90%.",
      "📊 Designed interactive dashboards leveraging RFM analysis, CLV, and sales forecasting, boosting customer retention by 20% and revenue by 35%.",
      "💸 Integrated real-time payment tracking with GST calculations, improving financial transparency and reducing payment disputes by 85%.",
      "📦 Performed product performance analysis, driving inventory optimization and reducing stockouts by 30%.",
      "☁️ Implemented cloud-based storage for e-way bills and delivery documents, cutting document retrieval time by 40%."
    ],
    certificate: "https://drive.google.com/file/d/1zAAzzfLW4EK8kSaznbcU-sRB6ItF5XHE/view"
  },
  {
    role: "Data Analyst Intern",
    company: "iNeuron Intelligence Pvt Ltd",
    period: "June 2024 - July 2024",
    points: [
      "🌾 Led a Crop Production Analysis project on 240,000+ rows (1997–2015), utilizing Python (Pandas, NumPy, Matplotlib) for robust preprocessing.",
      "🧹 Cleaned and standardized complex data by handling 3,730 null values and removing statistical outliers to ensure 99% data quality.",
      "📊 Engineered interactive Power BI dashboards visualizing seasonal trends across states and zones, empowering stakeholder decision-making.",
      "🔍 Uncovered critical insights including Coconut's 92% production dominance, driving separate strategic analyses for staple crops.",
      "📈 Authored comprehensive HLD/LLD documentation and architecture diagrams, aligning project delivery with industry standards."
    ],
    certificate: "https://drive.google.com/file/d/1XF5tXQo3clLvRZNC18RsQiBeddGNKwuS/view?usp=drive_link"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Generative AI for Data-Driven Business Decision-Making",
    issuer: "IIM Mumbai",
    points: [
      "Applied Generative AI to enhance data-driven decision-making in supply chain contexts.",
      "Gained hands-on experience with AI tools for predictive analytics and strategic planning.",
      "Explored AI integration in logistics, aligning with PM GatiShakti initiative."
    ],
    link: "https://drive.google.com/file/d/1sxLgbIRdQnN7dG6hCmLaJ9fhf-ndBuqG/view?usp=sharing"
  },
  {
    title: "IBM Data Analyst Professional Certificate",
    issuer: "Coursera-IBM",
    link: "https://drive.google.com/file/d/1wJ4Rf5yHb5AeXt9FL5IewOChmq-0qRYl/view?usp=sharing"
  },
  {
    title: "Data Analytics and Visualization Job Simulation",
    issuer: "Forage-Accenture",
    link: "https://drive.google.com/file/d/1qRq0LyK3oHt8aJrFvFphpJFPJvE-kULf/view"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech in Computer Science & Engineering (AI)",
    institution: "Parul University",
    period: "2023 - 2027",
    location: "Vadodara, Gujarat, India"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Jawahar Navodaya Vidyalaya",
    period: "2021 - 2023",
    location: "Mehsana, Gujarat, India"
  }
];

export const SKILLS = {
  programming_languages: ["Python", "Java", "C", "HTML", "CSS", "JavaScript"],
  data_analysis_bi: ["Power BI", "Tableau", "Excel", "Advanced Excel", "Google Sheets", "IBM Cognos", "Looker"],
  databases: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Oracle DB", "Snowflake", "Google BigQuery", "Amazon Redshift"],
  data_science_ml: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "Matplotlib", "Seaborn", "XGBoost", "LightGBM", "CatBoost", "NLTK", "SpaCy", "Transformers", "OpenCV", "Statsmodels"],
  mlops: ["Git", "Docker", "DVC", "CI/CD", "mlflow", "Kubernetes", "Jenkins", "Prometheus"],
  cloud_platforms: ["AWS", "Google Cloud", "Azure", "Heroku"],
  development_environments: ["VS Code", "Jupyter", "Spyder", "PyCharm", "Anaconda", "Eclipse", "Colab"],
  other_skills: ["Business Analysis", "Data Analysis", "Customer Acquisition", "Time Series Forecasting", "Big Data Processing", "ETL Pipelines"],
  soft_skills: ["Analytical Thinking", "Problem Solving", "Communication", "Team Collaboration", "Team Leadership", "Project Management", "Storytelling with Data", "Stakeholder Engagement"]
};

export const INTERESTS = [
  {
    name: "Machine Learning",
    emoji: "🤖",
    description: "Predictive modeling & pattern recognition"
  },
  {
    name: "Deep Learning",
    emoji: "🧠",
    description: "Neural networks & complex architectures"
  },
  {
    name: "NLP",
    emoji: "🗣️",
    description: "Text processing & language understanding"
  },
  {
    name: "Business Intelligence",
    emoji: "📊",
    description: "Data visualization & strategic insights"
  },
  {
    name: "Generative AI",
    emoji: "✨",
    description: "LLMs & prompt engineering"
  },
  {
    name: "AutoML",
    emoji: "⚙️",
    description: "Automated pipeline optimization"
  },
  {
    name: "MLOps",
    emoji: "🚀",
    description: "Lifecycle management & deployment"
  },
  {
    name: "Cloud Computing",
    emoji: "☁️",
    description: "Scalable data architecture"
  },
  {
    name: "Computer Vision",
    emoji: "👁️",
    description: "Image recognition & processing"
  }
];
