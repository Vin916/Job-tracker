# Vin's Job Tracker 📊

A beautiful, interactive dashboard for visualizing your job application journey. Upload your CSV export from **Simplify** and get instant insights into your job search progress.

🔗 **Live Site:** [https://vin916.github.io/Job-tracker/](https://vin916.github.io/Job-tracker/)

![Job Tracker Screenshot](https://img.shields.io/badge/Status-Live-brightgreen)

## Features

### 📈 Dashboard Statistics
- **Total Applications** - See how many jobs you've applied to
- **Status Breakdown** - Applied, Interviewing, Rejected counts
- **Response Rate** - Track how many companies responded

### 📊 Visual Charts
- **Status Distribution** - Doughnut chart showing application statuses
- **Applications Over Time** - Line chart of monthly application trends
- **Application Activity** - Interactive bar chart with:
  - Week/Month view toggle
  - Navigate through your entire application history
  - See daily application counts with hover tooltips
  - Total applications per period

### 📋 Searchable Table
- View all your applications in a sortable table
- Search by job title or company name
- Filter by application status

## How to Use

1. **Export your data from Simplify**
   - Go to your Simplify dashboard
   - Export your tracked jobs as CSV

2. **Upload to the tracker**
   - Visit [the live site](https://vin916.github.io/Job-tracker/)
   - Drag and drop your CSV file or click to browse
   - Your data is processed locally (nothing is sent to any server)

3. **Explore your data**
   - View statistics and charts
   - Navigate through weeks/months of activity
   - Search and filter your applications

## CSV Format

The tracker expects a CSV export directly from **Simplify** with these columns:
- Job Title
- Company Name
- Job URL
- Applied Date
- Status
- Status Date

*(Additional columns like Archived, Date Archived, Notes are ignored)*

## Privacy

🔒 **Your data stays on your device.** This is a fully client-side application - no data is ever uploaded to any server. All processing happens in your browser.

## Tech Stack

- Pure HTML, CSS, JavaScript
- [Chart.js](https://www.chartjs.org/) for visualizations
- Hosted on GitHub Pages

## Local Development

Just open `index.html` in a browser - no build process required!

---

Made with ☕ by Vin

