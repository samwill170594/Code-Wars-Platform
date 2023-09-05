// https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript

class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
    console.log(`collection ==> ${collection}`);
    console.log(`itemsPerPage ==> ${itemsPerPage}`);
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
	// returns the number of items within the entire collection
    return this.collection.length;
	}
	pageCount() {
	// returns the number of pages
    console.log(`Number of pages ==> ${Math.ceil(this.itemCount() / this.itemsPerPage)}`);
    return Math.ceil(this.itemCount() / this.itemsPerPage);
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
    if(pageIndex >= this.pageCount() || pageIndex < 0) return -1;
    if(pageIndex === this.pageCount() -1) {
      let number_items = this.collection.length - this.itemsPerPage * Math.floor(this.itemCount() / this.itemsPerPage);
      return (number_items !== 0) ? number_items : this.itemsPerPage;
    } 
    //return this.collection.length - this.itemsPerPage * Math.floor(this.itemCount() / this.itemsPerPage);
    return this.itemsPerPage;
	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
    let indexPage = Math.floor(itemIndex / this.itemsPerPage);
    if(indexPage >= this.pageCount() || indexPage < 0 || itemIndex >= this.itemCount()) return -1;
    return indexPage;
	}
}