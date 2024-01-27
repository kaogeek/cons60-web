function DataObject(data=[]) {
  if ( !Array.isArray(data)
    || !data.length
    || !data.every(item => item.constructor.name === 'Object')
  ) throw new TypeError('Data should be array of objects.');
  this.data = data;
  this.column = Object.keys(data[0]);
}

  DataObject.prototype.toString = function() {
    return JSON.stringify({
      column: this.column
    , data: this.data
    });
  };

  DataObject.prototype.log = function(...args) {
    console.log(...args, this);
    return this;
  };

  DataObject.prototype.filter = function(columnName, keyword) {
    this.data = this.data.filter(row =>
      row[columnName] == keyword
    );
    return this;
  };
  
  DataObject.prototype.filterOut = function(columnName, keyword) {
    this.data = this.data.filter(row =>
      row[columnName] != keyword
    );
    return this;
  };

  DataObject.prototype.filterArray = function(columnName, keyword) {
    this.data = this.data.filter(row =>
      row[columnName].includes(keyword)
    );
    return this;
  };

  DataObject.prototype.search = function(columnName, keywords) {

    const regexArr = keywords
      .trim()
      .replace(/\s+/g, ' ')
      .split(' ')
      .map(keyword => new RegExp(keyword, 'g'));

    this.data = this.data
      .reduce((dataRanking, row) => {
      
        const matchScore = regexArr
          // Give 1 score for each matched keyword found.
          .reduce((scoreArr, regex, index) => {
            const matchResult = row[columnName].match(regex);
            if (matchResult)
              scoreArr[index] += matchResult.length;
            return scoreArr;
          }, Array(regexArr.length).fill(0))
          // Give 10 bonus score for each keyword found.
          .map(score => score ? score + 10 : score)
          .reduce((sum, score) => sum + score, 0);
          
        return matchScore
          ? dataRanking.concat([[ matchScore, row ]])
          : dataRanking;
          
      }, [])
      .toSorted((a, b) => b[0] - a[0])
      .map(row => row[1]);
      
    return this;
    
  };
  
  DataObject.prototype.sort = function(columnsObj={หมวด: 'ASC'}) {
    Object
      .keys(columnsObj)
      .toReversed()
      .forEach(columnName => {
        const compareOptions = {
          numeric: true,
          sensitivity: 'base'
        };
        const isDESC = (
          columnsObj[columnName].toUpperCase() === 'DESC'
        );
        this.data = this.data.toSorted((a, b) => {
          const aCol = a[columnName];
          const bCol = b[columnName];
          return isDESC
            ? bCol.localeCompare(aCol, 'th', compareOptions)
            : aCol.localeCompare(bCol, 'th', compareOptions)
        });
        return this.data;
    });
    return this;
  };
  
  DataObject.prototype.reverse = function() {
    this.data = this.data.toReversed();
    return this;
  };
  
  DataObject.prototype.append = function(dataObj) {
    this.data = this.data.concat(dataObj.data);
    return this;
  };
  
  DataObject.prototype.prepend = function(dataObj) {
    this.data = dataObj.data.concat(this.data);
    return this;
  };

  DataObject.prototype.render = function(elemId='', tableProps={}) {

    const table = document.createElement('table');
    Object.keys(tableProps).forEach(
      key => table[key] = tableProps[key]
    );
    
    const thead = document.createElement('thead');
    const htr = document.createElement('tr');
    this.column.forEach(columnName => {
      htr
        .appendChild(document.createElement('th'))
        .append(columnName);
      return columnName;
    });
    thead.append(htr);

    const tbody = document.createElement('tbody');
    this.data.forEach(row => {
      const tr = document.createElement('tr');
      this.column.forEach(columnName => {
        const td = document.createElement('td');
        const column = row[columnName];
        if ( Array.isArray(column) ) {
          const listsHTML = column
            .map(item => `<li>${item}</li>`)
            .join('');
          td.innerHTML = `<ul>${listsHTML}</ul>`;
        } else {
          td.innerHTML = column;
        }
        tr.append(td);
        return column;
      });
      tbody.append(tr);
      return row;
    });

    table.append(thead, tbody);
  
    const elem = document.getElementById(elemId);
    if (elem) {
      elem.textContent = '';
      elem.append(table);
      return this;
    } else {
      return table;
    }

  };

export default (data) => {
  return new DataObject(data);
}
