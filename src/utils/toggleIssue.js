export default function toggleIssue(issueNo) {
  const elem = document.getElementById('issue-'+issueNo);
  document.body.classList.toggle('no-scroll');
  elem.classList.toggle('hidden');
  elem.scrollTo(0, 0);
  window.onhashchange = evt => {
    document.body.classList.remove('no-scroll');
    window.onhashchange = '';
  };
  return;
}
