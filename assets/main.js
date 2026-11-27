// Optional public profile links. Leave unavailable profiles blank.
const externalProfiles = [
  { label: 'Google Scholar', url: '' },
  { label: 'ORCID', url: '' },
  { label: 'CV (PDF)', url: '' }
];
// Add your verified public academic email here to display it in Contact.
const verifiedAcademicEmail = '';

const linksContainer = document.getElementById('configured-links');
if (linksContainer) {
  for (const profile of externalProfiles) {
    const url = profile.url.trim();
    if (!url) continue;
    const link = document.createElement('a');
    link.href = url;
    link.textContent = profile.label;
    if (/^https?:\/\//.test(url)) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    linksContainer.appendChild(link);
  }
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const emailAnchor = document.getElementById('public-contact-email');
if (emailAnchor && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(verifiedAcademicEmail)) {
  emailAnchor.href = 'mailto:' + verifiedAcademicEmail;
  emailAnchor.textContent = verifiedAcademicEmail;
  emailAnchor.hidden = false;
}
