$(function() {
  
  /*
   * Add new item
   */
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const newListItem = $('input').val();
    $('.shopping-list').append(newListItemHTML(newListItem));
    $('#js-shopping-list-form').trigger('reset');
  });


  /* 
   * Check or uncheck list item
   */

  // set toggle button text to "uncheck" for any checked items
  $('li').each(function() {
    let toggle = $(this).find('.shopping-item-toggle');
    let listItem = $(this).find('.shopping-item');
    toggle.text(listItem.hasClass('shopping-item__checked') ? 'uncheck' : 'check');
  })

  // check or uncheck list item when toggle button clicked
  $('.shopping-list').on('click', 'button.shopping-item-toggle', function() {
    let listItem = $(this).closest('div').siblings('.shopping-item');
    listItem.toggleClass('shopping-item__checked');
    $(this).text(listItem.hasClass('shopping-item__checked') ? 'uncheck' : 'check');
  });


  /* 
   * Delete item
   */
  $('.shopping-list').on('click', 'button.shopping-item-delete', function() {
    $(this).closest('li').remove();
  });
  
});

// html template for new list item
function newListItemHTML(listItem) {
  return `<li>
            <span class="shopping-item">${listItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`
}