import data from './data.js';
import createDataObject from './data-object.js';

let $dataObj;

(function init(param) {
  
  const code = {
'filter':
`createDataObject(data.con)
  .filter('หมวด', 16)
  .render(
    'data-section',
    { id: 'data-table', border: 1 }
  );`,
'filterOut':
`createDataObject(data.con)
  .filterOut('หมวด', 1)
  .filterOut('หมวด', 2)
  .render(
    'data-section',
    { id: 'data-table', border: 1 }
  );`,
'filterArray':
`createDataObject(data.doc)
  .filterArray('ผู้อภิปราย', 'นายอัชพร จารุจินดา')
  .render(
    'data-section',
    { id: 'data-table', border: 1 }
  );`,
'search':
`createDataObject(data.doc)
  .search('ประเด็นการพิจารณา', 'ศาลรัฐธรรมนูญ นิติธรรม รัฐสภา')
  .render(
    'data-section',
    { id: 'data-table', border: 1 }
  );`,
'sort':
`createDataObject(data.con)
  .sort({
    หมวด: 'ASC',
    มาตรา: 'DESC'
  })
  .render(
    'data-section',
    { id: 'data-table', border: 1 }
  );`,
'reverse':
`createDataObject(data.con)
  .reverse()
  .render(
    'data-section',
    { id: 'data-table', border: 1 }
  );`,
'append':
`createDataObject(data.con)
  .filter('มาตรา', 2)
  .append(
    createDataObject(data.con)
      .filter('มาตรา', 5)
  )
  .render(
    'data-section',
    { id: 'data-table', border: 1 }
  );`,
'prepend':
`createDataObject(data.con)
  .filter('มาตรา', 2)
  .prepend(
    createDataObject(data.con)
      .filter('มาตรา', 5)
  )
  .render(
    'data-section',
    { id: 'data-table', border: 1 }
  );`,
'log':
`// Data object log during chain.
createDataObject(data.con)
  .filter('หมวด', 7)
  .log('%c $dataObj log -> ', 'color: lime; background: black; ')
  .filter('ส่วน', 3)
  .render(
    'data-section',
    { id: 'data-table', border: 1 }
  );
  
// Array log during chain
$dataObj
  .data  // get array of objects
  .toReversed()
  .log('%c Native array log -> ', 'color: lime; background: black; ')
  .join('\\n');
  
// $dataObj.toString() return JSON
console.log(
  '%c $dataObj.toString() -> ',
  'color: lime; background: black; ',
  $dataObj+'');

/**
 * Open console to see logs.
 **/
`
  };

  addEventListener('load', evt => {
  
    const editor = document.getElementById('query-editor');
    const querySubmit = document.getElementById('query-submit');
    const queryCopy = document.getElementById('query-copy');
    const result = document.getElementById('query-result');
    const resultCopy = document.getElementById('result-copy');
    const querySampleIds = Array.from(
      document.querySelectorAll('.query-sample')
    ).map(elem => elem.id);
    
    querySampleIds.forEach(id => {
      document
        .getElementById(id)
        .addEventListener('click', evt => {
          evt.stopPropagation();
          evt.preventDefault();
          editor.value = code[id.substring(6)];
          document.getElementById('query-submit').click();
          return evt;
      });
    });
    
    // run query
    querySubmit.addEventListener('click', evt => {
      const code = `$dataObj = ${editor.value}`;
      eval(code);
      result.value = JSON.stringify($dataObj.data);
      editor.focus();
      editor.selectionStart = editor.value.length;
      return evt;
    });
    
    // copy query
    queryCopy.addEventListener('click', evt => {
      editor.select();
      document.execCommand('copy');
    });
    
    // copy JSON
    resultCopy.addEventListener('click', evt => {
      result.select();
      document.execCommand('copy');
    });
    
    // back to top
    document
      .getElementById('btt')
      .addEventListener('click', evt => {
        evt.stopPropagation();
        evt.preventDefault();
        document
          .querySelector('h1')
          .scrollIntoView({ behavior: 'smooth', block: 'start' });
        return evt;
    });
  
    querySubmit.click();
    return evt;

  });
  
  return true;

})({});
