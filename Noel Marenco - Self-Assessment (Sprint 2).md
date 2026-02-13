# Self-Assessment (Sprint 2)

- **Member name:** *José Noel Marenco*  
- **Contribution area:** *Frontend development + support in Figma + product logic thinking (restaurant/user registration flow)*

---

## 1. Functionality

### Does the code meet the requirements?
- [x] **Does it implement all specified features you were responsible for?**  
  Yes. My main focus was the **frontend UI**, especially the **restaurant list section**, the Home structure, and keeping a **component-based approach** so the code stays maintainable and scalable.

- [x] **Are edge cases handled (e.g., invalid data, duplicates)?**  
  Partially. Since this sprint was mostly UI, I prepared the structure for common states like “no results” and future API-driven data. Stronger validation and stricter edge-case handling can be improved in the next sprint.

- [ ] **Are there any bugs or unexpected behaviors?**  
  No critical bugs found, but there is still room to improve responsive consistency and UX states.

### Integration
- [x] **Does your code work correctly with other parts of the application?**  
  Yes. My work fits into the overall project structure and supports future integration with backend.

- [x] **Are inputs and outputs managed appropriately?**  
  Yes. I used React state for inputs and UI interaction, and I left the code ready to connect real backend data later.

---

## 2. Code Quality

### Readability
- [x] **Is your code easy to understand for other developers?**  
  Yes. I aimed for clear component responsibilities and consistent naming.

- [x] **Are variable and function names descriptive and meaningful?**  
  Yes, especially in UI components and page-level structure.

### Reusability
- [x] **Can your code or parts of it be reused elsewhere in the application?**  
  Yes. The restaurant list section and UI patterns are reusable and can be extended as the app grows.

- [x] **Is logic modular and separated from unrelated concerns?**  
  Yes. UI and mock data/structure are separated in a way that makes future API integration easier.

### Comments and Documentation
- [x] **Are there comments explaining complex logic?**  
  Somewhat. Most of the code is self-explanatory through structure and naming, but I can add more comments for architecture decisions.

- [ ] **Is there documentation for how to use your code unit?**  
  No. I did not create separate documentation files during this sprint.

---

## 3. Performance

### Efficiency
- [x] **Are there any unnecessary operations or performance bottlenecks?**  
  No major issues found. Sprint 2 was mostly UI and structure, so performance impact is low.

- [x] **Is the code optimized for larger datasets or high traffic (if applicable)?**  
  Partially. I used reasonable patterns (clean component structure and controlled rendering), but real optimization will matter more once we integrate backend and larger datasets.

---

## 4. Overall Assessment

### Strengths
- Implemented **frontend UI** from the prototype and improved understanding of real-world differences between Figma and code (responsive behavior, spacing, structure).
- Followed a **component-based approach** to keep the code clean and extendable.
- Contributed product thinking: how restaurants/users might register, and how delivery apps (like Wolt/Uber Eats) manage pricing and delivery distance logically.

### Areas for Improvement
- Increase component reusability by extracting shared UI parts (cards, inputs, empty states).
- Add stronger error handling and complete UX states (loading, empty, error).
- Improve accessibility (ARIA labels, keyboard navigation).
- Add documentation to make it easier for teammates to integrate and extend my code.

### Action Plan
- Refactor repeated UI into reusable components and standardize patterns.
- Implement UI states (loading/empty/error) and improve validation.
- Add a short documentation section describing key components and how they connect.
- Review accessibility basics and apply improvements across pages/components.

---

## 5. Additional Notes
I stayed consistent and collaborated with the team during the sprint. This sprint helped me understand that moving from “prototype” to “real code” introduces challenges that are not visible in Figma, and it highlighted the importance of planning and structure. I’m motivated to improve code quality and UX further in Sprint 3.
