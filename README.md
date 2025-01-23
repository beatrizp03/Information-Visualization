# Interactive Data Visualization Dashboard

## Project Overview

This repository contains the implementation of an interactive data visualization dashboard designed as part of the **Information Visualization course project** (Group 31). The goal of the project is to create an intuitive dashboard that visualizes employment and salary data, allowing users to explore trends and relationships between countries, job categories, and salaries.

## Features and Functionality

### Dashboard Layout
The dashboard includes the following key components:
1. **Main Visualization Area**:
   - Line Chart
   - World Map
   - Magnet Charts (Job Categories and Salaries)
   - Radar Chart
2. **Year Selection Slider**:
   - A double slider to select year ranges, dynamically updating all visualizations.
3. **Menu Buttons**:
   - Toggle between job categories or salary categories in the Magnet Chart.
4. **Information Button**:
   - Provides definitions for radar chart categories to aid user understanding.

### Interactivity
- **Country Selection**:
  - Highlights selected countries across the map, line chart, and magnet chart.
  - Clicking on a country on the map or magnet chart synchronizes the highlight.
- **Chart-Specific Interactions**:
  - **Radar Chart**:
    - Hover: Displays year-specific values for each category.
    - Click: Shows tooltip with category explanations.
  - **Magnet Charts**:
    - Hover: Highlights points and shows country-specific data.
    - Displays top 5 highest and lowest countries for selected data.
  - **Line Chart**:
    - Option to display continent averages for selected countries.

### Data Management
- New salary data (`dataset3_salaries`) was processed, filtered by year, and integrated into the salary magnet chart.
- The dashboard uses a shared country selection list (`clickedList`) and year panel for all charts, ensuring consistency.

### Design Enhancements
- **Aesthetics**: Adopted a cohesive "pink" color scheme aligned with the theme of women's representation.
- **Transitions**: Improved color and data transitions for smoother updates.
- **Responsiveness**: Adjusted grid layouts to optimize white space usage.

## Implementation Details

### Architecture
- **Modular Design**: Each chart is implemented as a standalone module, enabling easy expansion.
- **Data Binding**: Leveraged D3.js enter, update, and exit methods for smooth transitions and dynamic updates.
- **Shared Data Access**: Country and year selections are shared across modules for seamless interactions.

### Tools and Libraries
- **Frontend**: D3.js for data visualization.
- **Data Processing**: JavaScript for real-time filtering and transformations.

## Improvements in This Prototype
- **Line Chart**: Added "Show Continent Average" functionality.
- **World Map**: Enhanced color transitions for year range changes.
- **Dashboard Coherence**: Unified visual design and reduced white space for improved user experience.
- **Magnet Charts**: Extended interactions to include both job categories and salaries.

## Team
- **Beatriz Paulo** - @beatrizp03 (github)
- **Leonor Fortes** - @leonorf03 (github)
- **Manon Gianino** - @manonGnn (github)
