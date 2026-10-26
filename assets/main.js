/* EDIT HERE: Add ONLY publicly available URLs. Empty fields stay hidden. */
const externalProfiles = [
  { label: "GitHub", url: "" },  // Example: "https://github.com/your-username"
  { label: "Google Scholar", url: "" },
  { label: "ORCID", url: "" },
  { label: "CV (PDF)", url: "" } // Example: "assets/Zhangyu_Huang_CV.pdf"
];
const linksContainer = document.getElementById('configured-links');
for (const profile of externalProfiles) {
  if (!profile.url.trim()) continue;
  const link = document.createElement('a');
  link.href = profile.url;
  link.textContent = profile.label + ' ↗';
  if (/^https?:\/\//.test(profile.url)) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }
  linksContainer.appendChild(link);
}
document.getElementById('year').textContent = new Date().getFullYear();
const navItems = document.querySelectorAll('.side-nav a');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navItems.forEach(item => item.classList.toggle('active', item.hash === '#' + entry.target.id));
    });
  }, { rootMargin: '-20% 0px -65% 0px' });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}

// Add your VERIFIED email here. Left blank intentionally because prior manuscript versions
// contain inconsistent addresses. The page will never publish an unverified address.
const verifiedAcademicEmail = "";
const emailAnchor = document.getElementById('public-contact-email');
const emailPending = document.getElementById('contact-pending');
if (verifiedAcademicEmail && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(verifiedAcademicEmail)) {
  emailAnchor.href = 'mailto:' + verifiedAcademicEmail;
  emailAnchor.textContent = verifiedAcademicEmail + ' ↗';
  emailAnchor.hidden = false;
  emailPending.hidden = true;
  document.querySelectorAll('[data-email-link]').forEach(a => { a.href = 'mailto:' + verifiedAcademicEmail; });
}
