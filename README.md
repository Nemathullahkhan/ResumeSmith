# ResumeSMITH - AI-Powered Resume Builder

ResumeSMITH is a full-stack web application that helps users create professional resumes using AI-assisted features and modern web technologies. It offers a comprehensive solution for building, customizing, and exporting professional-looking resumes with an intuitive drag-and-drop interface.

## 🚀 Features

- **AI-Powered Content Generation**
  - Auto-generate professional summaries, work experiences, and project descriptions using OpenAI
  - Smart suggestions for job titles, skills, and other resume elements
  - Structured content generation using XYZ method (Context-Action-Result)
  
- **Drag-and-Drop Resume Sections**
  - Easily reorder and customize resume sections with intuitive drag-and-drop functionality
  - Powered by @dnd-kit libraries for smooth interaction

- **Customizable Resume Templates**
  - Choose from different border styles (square, circle, rounded) for profile photos
  - Color picker for customizing section headers and accent elements
  - Personalized layout options for a unique resume design

- **PDF Generation & Export**
  - Generate high-quality PDF resumes for job applications
  - Print-ready A4 format with proper margins and typography
  - Direct printing functionality via react-to-print

- **Real-Time Preview**
  - See changes to your resume in real-time as you edit
  - WYSIWYG interface with accurate representation of the final output
  - Responsive preview that adapts to different screen sizes

- **Authentication & User Management**
  - Secure sign-up and login via Clerk with multiple authentication methods
  - Personal resume dashboard for managing multiple resumes
  - User-specific data isolation and security

- **Auto-Save Functionality**
  - Intelligent auto-saving with debounce to prevent data loss
  - Differential updates to minimize database writes
  - Seamless background synchronization

- **Responsive Design**
  - Mobile-friendly interface with progressive enhancement
  - Create and edit resumes on any device, from smartphones to desktops
  - Touch-optimized UI for mobile users

- **Extensive Resume Sections**
  - Personal Information with social profile integration
  - Professional Summary with AI enhancement
  - Work Experience with structured bullet points
  - Education with GPA/CGPA support
  - Projects with technology stack highlights
  - Technical Skills organized by categories (languages, frameworks, tools, libraries)
  - Certifications with links to credential verification
  - Coding Profiles for developers to showcase their platforms
  - Custom Sections for additional resume content

## 💻 Technologies Used

### Frontend
- **Next.js 15** - React framework with App Router for routing and server components
- **React 18** - UI library with hooks and concurrent rendering
- **TypeScript** - Static typing for enhanced code quality and developer experience
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Framer Motion** - Animations and transitions for enhanced UX
- **React Hook Form** - Efficient form state management and validation
- **Zod** - Schema validation for type-safe data handling
- **@dnd-kit** - Drag and drop functionality for section reordering
- **@react-pdf/renderer** - PDF generation and export
- **react-to-print** - Print functionality for physical copies

### Backend
- **Next.js Server Actions** - Server-side functionality with client-side integration
- **Prisma** - Type-safe database ORM with schema management
- **PostgreSQL** - Relational database for structured data storage
- **OpenAI API** - AI content generation with GPT-4 and other models

### Authentication & Storage
- **Clerk** - Authentication and user management with social login options
- **Vercel Blob** - File storage for profile photos and assets
- **JWT** - Token-based authentication for secure API access

## 🛠️ Architecture Overview

ResumeSMITH follows a modern architecture pattern:

- **Monolithic Architecture** - Frontend and backend code coexist in the same repository
- **Server Components** - Next.js server components for improved performance and SEO
- **Client Components** - Interactive UI elements with client-side JavaScript
- **Server Actions** - Next.js server actions instead of traditional REST endpoints
- **Database Layer** - Prisma ORM for type-safe database operations

## 🔄 Data Flow & State Management

The application implements a clear data flow pattern:

1. **Form Data Flow**
   - User inputs captured via React Hook Form
   - Data validated using Zod schemas
   - Validated data passed to server actions for processing
   - Updated data returned to update the UI

2. **Auto-Save Implementation**
   - Debounced saving to prevent excessive API calls
   - Comparison of current and last saved data to minimize requests
   - Special serialization to handle File objects

3. **Server State Management**
   - Server-rendered initial state
   - Client-side state updates
   - Optimistic updates for responsive UX

## 🔒 Security & Error Handling

- **Authentication Security**
  - JWT token-based auth with Clerk
  - CSRF protection
  - Secure cookie handling

- **Data Protection**
  - Input sanitization
  - Parameterized database queries via Prisma
  - User data isolation

- **Error Handling**
  - Client-side validation errors with user-friendly messages
  - Server-side error catching and structured responses
  - UI feedback via toast notifications

## 🛠️ Setup and Installation

### Prerequisites
- Node.js (v18 or later)
- npm or yarn
- PostgreSQL database

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ResumeSmith.git
   cd ResumeSmith
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/resumesmith"
   OPENAI_API_KEY="your-openai-api-key"
   CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
   CLERK_SECRET_KEY="your-clerk-secret-key"
   NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
   NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/resumes"
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/resumes"
   BLOB_READ_WRITE_TOKEN="your-vercel-blob-token"
   ```

4. Set up the database:
   ```bash
   npx prisma migrate dev
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📁 Project Structure

```
src/
├── app/                        # Next.js App Router
│   ├── (auth)/                 # Authentication routes
│   │   ├── sign-in/            # Sign-in page
│   │   └── sign-up/            # Sign-up page
│   ├── (main)/                 # Main application routes
│   │   ├── editor/             # Resume editor
│   │   │   ├── forms/          # Form components for different sections
│   │   │   └── actions.ts      # Server actions for the editor
│   │   ├── resumes/            # Resume management pages
│   │   └── billing/            # Subscription and billing
│   └── page.tsx                # Landing page
├── components/                 # Reusable components
│   ├── ui/                     # UI components (buttons, inputs, etc.)
│   └── ResumePreview.tsx       # Resume preview component
├── lib/                        # Utility functions and types
│   ├── validation.ts           # Zod schemas for form validation
│   ├── utils.ts                # Helper functions
│   ├── prisma.ts               # Prisma client
│   └── openai.ts               # OpenAI client
└── hooks/                      # Custom React hooks
    ├── useDebounce.ts          # Debounce hook
    └── useAutoSaveResume.tsx   # Auto-save functionality

prisma/
└── schema.prisma              # Database schema
```

## 🔍 Database Schema

The application uses Prisma ORM with a PostgreSQL database, with these key models:

- **Resume**: Central model with personal info and appearance settings
  - Basic resume metadata (title, description)
  - Personal information (name, contact, social links)
  - Appearance settings (color, border style)

- **Related Models** (all have one-to-many relationships with Resume):
  - **WorkExperience**: Position, company, dates, and description
  - **Education**: Degree, school, dates, and GPA
  - **Projects**: Project name, link, tech stack, and description
  - **SkillSet**: Technical skills by category (languages, frameworks, tools, libraries)
  - **Courses**: Certifications and educational courses
  - **CodingProfile**: Links to platforms like GitHub, LeetCode, etc.
  - **Custom**: User-defined custom sections with heading, description, and link

## 🎨 UI/UX Features

- **Landing Page**: Attractive introduction with features and process sections
- **Dashboard**: Overview of all user resumes with quick actions
- **Resume Editor**: 
  - Multi-tab interface for different resume sections
  - Form-based data entry with validation
  - AI assistance buttons for content generation
- **Resume Preview**: Real-time WYSIWYG preview with proper formatting
- **Mobile Responsiveness**: Tailored UI for all device sizes

## 🚀 Performance Optimizations

- **Static Generation**: Static landing page for fast initial load
- **Image Optimization**: Next.js Image component for efficient loading
- **Code Splitting**: Component-level and route-based code splitting
- **Server Components**: Reduced client-side JavaScript for improved performance
- **Database Efficiency**: Optimized queries and connection pooling

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributors

- [Muhammed Nemathullah khan](https://github.com/Nemathullahkhan)

## 🙏 Acknowledgements
- OpenAI for AI capabilities
- Vercel for hosting and blob storage
- Clerk for authentication
- All open-source libraries used in this project

## ✨ Additional Features
1. Project form with tech stack highlighting
2. Achievements and custom section support
3. Hyperlinks integration for GitHub and LinkedIn profiles
4. CGPA/GPA section in the education form
5. Smart form suggestions for countries, job titles, and summaries
6. Browser-based printing with proper page formatting
7. Coding profile integration for developers
8. Custom color theming for resume sections
