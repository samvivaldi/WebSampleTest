var request = indexedDB.open("library");

request.onupgradeneeded = function() {
  // The database did not previously exist, so create object stores and indexes.
  var db = request.result;
  var store = db.createObjectStore("books", {keyPath: "isbn"});
  var titleIndex = store.createIndex("by_title", "title", {unique: true});
  var authorIndex = store.createIndex("by_author", "author");
  
  store.put({title: "Quarry Memories", author: "Fred", isbn: 123456});
  store.put({title: "Water Buffaloes", author: "Fred", isbn: 234567});
  store.put({title: "Bedrock Nights", author: "Barney", isbn: 345678});

};

request.onsuccess = function() {
  db = request.result;
};




/////////////////////////////////////////////////////////////////////////
var request = indexedDB.open("library", 4);
request.onsuccess = function() {
	  db = request.result;
};
var tx = db.transaction("books", "readwrite");
var store = tx.objectStore("books");

store.put({title: "Quarry Memories", author: "Fred", isbn: 123456});
store.put({title: "Water Buffaloes", author: "Fred", isbn: 234567});
store.put({title: "Bedrock Nights", author: "Barney", isbn: 345678});

tx.oncomplete = function() {
  console.log("store completed")
};
	
/////////////////////////////////////////////////////////////////////////

var request = indexedDB.open("library", 4);
request.onsuccess = function() {
	  db = request.result;
};
var tx = db.transaction("books", "readonly");
var store = tx.objectStore("books");
var index = store.index("by_author");

var request = index.openCursor(IDBKeyRange.only("Fred"));

request.onsuccess = function() {
  var cursor = request.result;
  if (cursor) {
    console.log(cursor.value.isbn, cursor.value.title, cursor.value.author);
    cursor.continue();
  } else {
    console.log("no matching");
  }
};

/////////////////

indexedDB.deleteDatabase("library");